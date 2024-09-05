<template>
  <h1 style="text-align: center; color: red;">My ABC</h1>
  <br />
  <t-divider dashed content="alligator" />
  <br />
  <t-button @click="goToYouglish" size="large" theme="primary" variant="dashed">alligator【看视频】</t-button>
  <br />
  <t-button @click="goToBingImg" size="large" theme="primary" variant="dashed">alligator【看图片】</t-button>
  <br />
  <t-button @click="goToBaiduFanYi" size="large" theme="primary" variant="dashed">alligator【查词典】</t-button>
</template>

<style scoped lang="less">
</style>

<script setup lang="ts">
function goToYouglish() {
  window.open('https://youglish.com/pronounce/alligator/english', '_blank')
}

function goToBingImg() {
  window.open('https://www.bing.com/images/search?q=alligator', '_blank')
}

function goToBaiduFanYi() {
  window.open('https://fanyi.baidu.com/#en/zh/alligator', '_blank')
}
</script>