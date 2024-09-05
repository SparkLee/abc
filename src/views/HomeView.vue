<template>
  <t-divider dashed content="alligator" />
  <br/>
  <div class="row">
    <t-button @click="goToYouglish" size="large" theme="primary" variant="dashed">alligator【看视频】</t-button>
    <t-button @click="goToBingImg" size="large" theme="primary" variant="dashed">alligator【看图片】</t-button>
    <t-button @click="goToBaiduFanYi" size="large" theme="primary" variant="dashed">alligator【查词典】</t-button>
  </div>
</template>

<style scoped lang="less">
.row {
  display: flex;
  padding: 0 16px;
}

.row + .row {
  margin-top: 16px;
}

.t-button + .t-button {
  margin-left: 16px;
}
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