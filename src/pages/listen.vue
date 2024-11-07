<template>
  <v-layout>
    <v-app-bar color="teal-lighten-3" comfortable>
      <v-toolbar-title>11 葡萄沟</v-toolbar-title>
    </v-app-bar>

    <v-main class="pa-4 mt-16" min-height="50px">
      <v-btn block stacked variant="elevated" color="red" @click="startAgain">重新开始</v-btn>
      <br />
      <v-btn block stacked variant="outlined" color="warning" @click="repeat">没听清，请再说一次</v-btn>
      <br />
      <v-btn block stacked variant="elevated" color="green" @click="playNext">听写下一个</v-btn>
    </v-main>
  </v-layout>
</template>

<script lang="ts" setup>
let index = 0
const words = ['出产', '水果', '月份', '山坡', '枝叶', '展开', '五光十色', '好客']

function startAgain(): void {
  index = 0
  play('准备好了，就点击“听写下一个”开始听写吧！')
}

function repeat(): void {
  play(words[index - 1])
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
