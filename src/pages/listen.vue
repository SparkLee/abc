<template>
  <v-layout>
    <v-app-bar color="teal-lighten-3" comfortable>
      <v-toolbar-title>11 葡萄沟</v-toolbar-title>
      <v-btn icon>
        <v-icon @click="router.push('/')">mdi-home</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="pa-4 mt-16" min-height="50px">
      <audio controls src="https://nls-gateway.aliyuncs.com/stream/v1/tts?appkey=hzu1IYKCtKAgo7ko&token=c4afc79391c64b429e651feaccb1f644&text=%E5%87%86%E5%A4%87%E5%A5%BD%E4%BA%86%EF%BC%8C%E5%B0%B1%E7%82%B9%E5%87%BB%E2%80%9C%E5%90%AC%E5%86%99%E4%B8%8B%E4%B8%80%E4%B8%AA%E2%80%9D%E5%BC%80%E5%A7%8B%E5%90%AC%E5%86%99%E5%90%A7%EF%BC%81&format=wav&voice=ruilin"></audio>
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
  '山脚', '当作', '前面', '毛手毛脚', '晴朗', '枯草', '正好', '头头是道', '清早', '现在', '将来', '风清月朗', '大雪纷飞', '枝头', '脚尖', '知道',
  '道路', '报道', '跑道', '朗朗上口', '阵地', '阵雨', '阵脚', '明朗', '干枯', '枯树', '了却', '将心比心', '冷却', '第一', '门第', '将要', '难过',
  '难道', '纷纷', '一言难尽'
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
  console.log("play: " + text)
  // text = '<speak><s>胜<phoneme alphabet="py" ph="di4">地</phoneme></s></speak>'
  text = encodeURIComponent(text)
  const audio = new Audio('https://nls-gateway.aliyuncs.com/stream/v1/tts?appkey=hzu1IYKCtKAgo7ko&token=c4afc79391c64b429e651feaccb1f644&text=' + text + '&format=wav&voice=ruilin')
  audio.play()
    .catch((e) => {
      alert('audio.play() err: ' + e.message)
    })
}
</script>

<style scoped lang="sass">

</style>
