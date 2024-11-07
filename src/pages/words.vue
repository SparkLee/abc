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
      <v-btn icon>
        <v-icon @click="router.push('/')">mdi-home</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list :items="menus"></v-list>
    </v-navigation-drawer>

    <v-main class="pa-4 mt-16" min-height="50px">
      <v-row dense>
        <v-col>
          <v-text-field
            clearable
            single-line
            label="请输入待添加的内容"
            variant="solo"
            density="compact"
            hide-details="auto"
            append-inner-icon="mdi-plus"
            v-model="newWord"
            @keyup.enter="addWord(newWord)"
            @click:append-inner="addWord(newWord)"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col cols="12" md="4" v-for="(item, index) in items">
          <v-card :title="(index + 1) + '. ' + item.text">
            <v-card-actions>
              <v-btn @click.prevent="goToYouglish(item.text)" color="brown" density="comfortable"
                     border="dashed thin" rounded="0">
                <v-icon icon="mdi-video" size="small"></v-icon>
                <span class="text-caption">视频</span>
              </v-btn>
              <v-btn @click.prevent="goToBingImg(item.text)" color="blue" density="comfortable"
                     border="dashed thin" rounded="0">
                <v-icon icon="mdi-image-area" size="small"></v-icon>
                <span class="text-caption">图片</span>
              </v-btn>
              <v-btn @click.prevent="goToBaiduFanYi(item.text)" color="cyan"
                     density="comfortable"
                     border="dashed thin" rounded="0">
                <v-icon icon="mdi-library" size="small"></v-icon>
                <span class="text-caption">英语</span>
              </v-btn>
              <v-btn @click.prevent="goToZDic(item.text)" color="pink-lighten-3"
                     density="comfortable"
                     border="dashed thin" rounded="0">
                <v-icon icon="mdi-library" size="small"></v-icon>
                <span class="text-caption">中文</span>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn @click.prevent="delWord(item.id)" icon="mdi-delete" size="small" color="red"></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-main>
  </v-layout>
</template>

<script lang="ts" setup>
import { onMounted, Ref, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

interface Word {
  id: bigint
  text: string
}

const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
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
const newWord: Ref<string> = ref('')
const items: Ref<Word[]> = ref([])

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

function goToZDic(content: string) {
  window.open('https://www.zdic.net/hans/' + encodeURIComponent(content), '_blank')
}

function addWord(text: string) {
  http.post(`/v1/words`, { text: text }).then(function(resp) {
    newWord.value = ''
    console.log(resp)
    items.value.unshift(resp.data.word)
  })
}

function delWord(id: bigint) {
  http.delete(`/v1/words/${id}`).then(function(resp) {
    console.log(resp)
    items.value = items.value.filter((item: any) => item.id != id)
  })
}
</script>
