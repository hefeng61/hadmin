<script setup>
defineProps(['item'])
</script>

<template>
  <el-icon>
    <component :is="item.icon"/>
  </el-icon>
  <span class="truncate" :title="item.name">{{ item.name }}</span>
</template>

<style scoped>

</style>
