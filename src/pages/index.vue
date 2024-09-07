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

    <v-navigation-drawer
      v-model="drawer"
      temporary
    >
      <v-list :items="menus"></v-list>
    </v-navigation-drawer>

    <v-main style="min-height: 400px; margin: 30px;">
      <v-row>
        <v-col cols="12" md="4" v-for="(item, index) in items">
          <v-card :title="(index + 1) + '. ' + item">
            <v-card-actions>
              <v-btn @click.prevent="goToYouglish(item)" class="text-caption" color="red" density="comfortable"
                     border="dashed thin" rounded="0">
                <v-icon icon="mdi-video" size="small"></v-icon>
                看视频
              </v-btn>
              <v-btn @click.prevent="goToBingImg(item)" class="text-caption" color="blue" density="comfortable"
                     border="dashed thin" rounded="0">
                <v-icon icon="mdi-image-area" size="small"></v-icon>
                看图片
              </v-btn>
              <v-btn @click.prevent="goToBaiduFanYi(item)" class="text-caption" color="teal-lighten-2"
                     density="comfortable"
                     border="dashed thin" rounded="0">
                <v-icon icon="mdi-library" size="small"></v-icon>
                查词典
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-main>
  </v-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const drawer = ref(false)
const items = ref(['Apple', 'Banana', 'Orange', 'Grape', 'Strawberry'])
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

function goToYouglish(content: string) {
  window.open('https://youglish.com/pronounce/' + encodeURIComponent(content) + '/english', '_blank')
}

function goToBingImg(content: string) {
  window.open('https://www.bing.com/images/search?q=' + encodeURIComponent(content), '_blank')
}

function goToBaiduFanYi(content: string) {
  window.open('https://fanyi.baidu.com/#en/zh/' + encodeURIComponent(content), '_blank')
}
</script>
