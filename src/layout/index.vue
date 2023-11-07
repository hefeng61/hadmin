<script setup>
import {ref, computed} from "vue";
import {useStore} from "vuex";
import Menu from './sideBar/index.vue'
import Header from './header/index.vue'

const store = useStore()
const sideWidth = computed(() => {
  return store.getters.isCollapse ? '64px' : '200px'
})

</script>

<template>
  <div>
    <el-container>
      <el-aside :width=sideWidth class="bg-gray-300 h-screen">
        <Menu/>
      </el-aside>
      <el-container>
        <el-header>
          <Header/>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
:deep(.el-header) {
  padding: 0;
}
</style>
