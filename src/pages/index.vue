<template>
  <v-layout>
    <v-app-bar color="teal-lighten-3" comfortable>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>My ABC</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="$vuetify.display.mdAndUp">
        <v-btn icon="mdi-magnify" variant="text"></v-btn>
        <v-btn icon="mdi-filter" variant="text"></v-btn>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list :items="menus"></v-list>
    </v-navigation-drawer>

    <v-main class="pa-4 mt-16" min-height="50px">
      <v-row dense>
        <v-col cols="12" md="4" v-for="(item, index) in items">
          <v-card :title="(index + 1) + '. ' + item.text">
            <v-card-actions>
              <v-btn @click.prevent="goToYouglish(item.text)" color="brown" density="comfortable"
                     border="dashed thin" rounded="0">
                <v-icon icon="mdi-video" size="small"></v-icon>
                <span class="text-caption">看视频</span>
              </v-btn>
              <v-btn @click.prevent="goToBingImg(item.text)" color="blue" density="comfortable"
                     border="dashed thin" rounded="0">
                <v-icon icon="mdi-image-area" size="small"></v-icon>
                <span class="text-caption">看图片</span>
              </v-btn>
              <v-btn @click.prevent="goToBaiduFanYi(item.text)" color="teal-lighten-2"
                     density="comfortable"
                     border="dashed thin" rounded="0">
                <v-icon icon="mdi-library" size="small"></v-icon>
                <span class="text-caption">查词典</span>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn @click.prevent="del(item.id)" icon="mdi-delete" size="small" color="red"></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-main>
  </v-layout>

  <v-footer class="d-flex flex-column">
    <div class="w-100 px-4 py-2 bg-white text-center text-caption">
      <a href="https://beian.miit.gov.cn/" target="_blank">湘ICP备2024085416号-1</a>
    </div>
  </v-footer>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://api.menghuanpaoying.cn'
  // baseURL: 'http://localhost:18000'
})
const drawer = ref(false)
const menus = ref([
  {
    title: 'Foo',
    sum: 666,
    value: 'foo'
  },
  {
    title: 'Bar',
    sum: 888,
    value: 'bar'
  },
  {
    title: 'Fizz',
    sum: 999,
    value: 'fizz'
  },
  {
    title: 'Buzz',
    sum: 444,
    value: 'buzz'
  }
])

let items = ref()
onMounted(() => {
  http.get('/v1/words').then(function(resp) {
    console.log(resp)
    items.value = resp.data.words
  })
})

function goToYouglish(content: string) {
  window.open('https://youglish.com/pronounce/' + encodeURIComponent(content) + '/english', '_blank')
}

function goToBingImg(content: string) {
  window.open('https://www.bing.com/images/search?q=' + encodeURIComponent(content), '_blank')
}

function goToBaiduFanYi(content: string) {
  window.open('https://fanyi.baidu.com/#en/zh/' + encodeURIComponent(content), '_blank')
}

function del(id: bigint) {
  http.delete(`/v1/words/${id}`).then(function(resp){
    console.log(resp)
    items.value = items.value.filter((item: any) => item.id != id)
  })
}
</script>
