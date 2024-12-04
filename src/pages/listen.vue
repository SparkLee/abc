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
import axios from 'axios'
import { ref, Ref } from 'vue'

const token: Ref<string> = ref('')
const router = useRouter()
const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
})

let index = 0
const words = [
  '山脚', '当作', '前面', '毛手毛脚', '晴朗', '枯草', '正好', '头头是道', '清早', '现在', '将来', '风清月朗', '大雪纷飞', '枝头', '脚尖', '知道',
  '道路', '报道', '跑道', '朗朗上口', '阵地', '阵雨', '阵脚', '明朗', '干枯', '枯树', '了却', '将心比心', '冷却', '第一', '门第', '将要', '难过',
  '难道', '纷纷', '一言难尽'
]

onMounted(() => {
  http.get(`/v1/aliyun/nls/token`).then(function(resp) {
    token.value = resp.data.token
  }).catch(function(e) {
    alert('getToken err: ' + e.message)
  })
})

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
  const audio = new Audio('https://nls-gateway.aliyuncs.com/stream/v1/tts?appkey=hzu1IYKCtKAgo7ko&token=' + token.value + '&text=' + text + '&voice=ruilin&format=mp3')
  audio.play().catch((e) => {
    alert('audio.play() err: ' + e.message)
  })
}

</script>

<style scoped lang="sass">

</style>
