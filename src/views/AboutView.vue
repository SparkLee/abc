<template>
    <div class="row">
      <t-button size="large" theme="primary" variant="dashed">虚框按钮</t-button>
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
</script>