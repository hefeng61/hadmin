<script setup>
import MenuIcon from "./MenuIcon.vue";

defineProps(['list'])
</script>

<template>
  <template v-for="item in list">
    <el-sub-menu
        v-if="item.children.length>0"
        :key="item.index"
        :index="item.path"
    >
      <template #title>
        <menu-icon :item="item"/>
      </template>
      <side-bar-item :list="item.children"/>
    </el-sub-menu>
    <el-menu-item v-else :index="item.path" :key="item.index">
      <menu-icon :item="item"/>
    </el-menu-item>
  </template>

</template>

<style scoped>

</style>
