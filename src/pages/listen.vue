<template>
  <v-layout>
    <v-app-bar color="teal-lighten-3" comfortable>
      <v-toolbar-title>11 葡萄沟</v-toolbar-title>
      <v-btn icon>
        <v-icon @click="router.push('/')">mdi-home</v-icon>
      </v-btn>
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
import { useRouter } from 'vue-router'

const router = useRouter()

let index = 0
const words = [
  '坐井观天', '井沿', '回答', '口渴', '大话', '井口', '无边无际', '水井', ' 古井', '井井有条', '观点',
  '奇观', '壮观', '走马观花', '沿路', ' 沿海', '河沿', '床沿', '大吃大喝', ' 问答', '报答', '干渴', '喝水', '喝茶',
  '对话', '电话', '听话', '说话', '国际', '实际', '天际', '前沿', '渴求', '笑话', '实话实说'
]

function startAgain(): void {
  index = 0
  play('准备好了，就点击“听写下一个”开始听写吧！')
}

function repeat(): void {
  if (index === 0) {
    return startAgain()
  }
  play(words[index - 1])
}

function playNext(): void {
  let text = (index < words.length) ? words[index++] : '真棒，已经全部听写完成啦，可以点击“重新开始”，再听一次哦！'
  play(text)
}

function play(text: string): void {
  // text = '<speak><s>胜<phoneme alphabet="py" ph="di4">地</phoneme></s></speak>'
  text = encodeURIComponent(text)
  const audio = new Audio('https://nls-gateway.aliyuncs.com/stream/v1/tts?appkey=hzu1IYKCtKAgo7ko&token=21ad070ea19247e488a389fb6c6c82aa&text=' + text + '&format=wav&voice=ruilin')
  audio.play()
}
</script>

<style scoped lang="sass">

</style>
