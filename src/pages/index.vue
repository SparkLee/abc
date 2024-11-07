<template>
  <v-layout>
    <v-app-bar color="teal-lighten-3" comfortable>
      <v-toolbar-title>My ABC</v-toolbar-title>
    </v-app-bar>

    <v-main class="pa-4 mt-16" min-height="50px">
      <v-row align="center" justify="center">
        <v-col cols="auto">
          <v-btn stacked variant="outlined" prepend-icon="mdi-file-word-box-outline" @click="router.push('/words')">单词</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn stacked variant="outlined" prepend-icon="mdi-ear-hearing" @click="router.push('/listen')">听写
          </v-btn>
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
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
