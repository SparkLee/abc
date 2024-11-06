<template>
  <v-layout>
    <v-app-bar color="teal-lighten-3" comfortable>
      <v-toolbar-title>11 葡萄沟</v-toolbar-title>
    </v-app-bar>

    <v-main class="pa-4 mt-16" min-height="50px">
      <v-btn block variant="outlined" @click="startAgain">重新开始</v-btn>
      <v-btn block variant="outlined" @click="playNext">播放下一个</v-btn>
    </v-main>
  </v-layout>

  <v-footer class="d-flex flex-column">
    <div class="w-100 px-4 py-2 bg-white text-center text-caption">
      <a href="https://beian.miit.gov.cn/" target="_blank">湘ICP备2024085416号-1</a>
    </div>
  </v-footer>
</template>

<script lang="ts" setup>
let index = 0
const words = ['出产', '水果', '月份', '山坡', '枝叶', '展开', '五光十色', '好客']

function startAgain(): void {
  index = 0
  play('准备好了，就点击“播放下一个”开始听写吧！')
}

function playNext(): void {
  let text = (index < words.length) ? words[index++] : '真棒，已经全部听写完成啦，可以点击“重新开始”，再听一次哦！'
  play(text)
}

function play(text: string): void {
  // text = '<speak><s>胜<phoneme alphabet="py" ph="di4">地</phoneme></s></speak>'
  text = encodeURIComponent(text)
  const audio = new Audio('https://nls-gateway.aliyuncs.com/stream/v1/tts?appkey=hzu1IYKCtKAgo7ko&token=3b65c22dfdee4fb493bacc966706e27b&text=' + text + '&format=wav&voice=ruilin')
  audio.play()
}
</script>

<style scoped lang="sass">

</style>
