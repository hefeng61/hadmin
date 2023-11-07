<script setup>
import {computed} from "vue";
import {useStore} from "vuex";
import SideBarItem from "./SideBarItem.vue";

const store = useStore()
const isCollapse = computed(() => {
  return store.getters.isCollapse
})
const list = computed(() => {
  return store.getters.menuList
})
console.log('list',list)
</script>

<template>
  <div class="h-screen">
<!--    <div class="h-12 leading-[48px] align-middle" >-->
<!--      <img src="../../../src/assets/logo.png" alt="" class="w-12 inline-block"><span>HAdmin</span>-->
<!--    </div>-->
    <el-menu
        active-text-color="rgb(204, 204, 204)"
        text-color="rgba(0,0,0,0.6)"
        :collapse="isCollapse"
        :collapse-transition="false"
        :unique-opened="true"
        router
        class="h-full"
    >
      <side-bar-item :list="list"/>
    </el-menu>
  </div>
</template>

<style scoped>
</style>
