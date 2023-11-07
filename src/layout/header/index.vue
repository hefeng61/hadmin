<script setup>
import {ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import {useStore} from "vuex";
import {Expand, Fold} from "@element-plus/icons-vue";
import FullScreen from "./FullScreen.vue";

const squareUrl = "https://th.bing.com/th?id=ODL.6621f33210f75eb7d674ffc4d0c308b0&w=146&h=146&c=7&rs=1&qlt=80&o=6&pid=RichNav"
const route = useRoute();
const router = useRouter()
const breadcrumbList = ref([])
const fold = ref(true)
const store = useStore()
const handleCollapse = () => {
  fold.value = !fold.value
  store.commit('SET_COLLAPSE', !fold.value)
}
const handleLogout = () => {
  localStorage.clear()
  router.push('/login')
}
watch(route, () => {
  initBreadcrumbList()
})
const initBreadcrumbList = () => {
  breadcrumbList.value = route.matched
  console.log(breadcrumbList.value)
}
</script>

<template>
  <div class="mx-4">
    <div class="flex justify-between items-center h-14">
      <div @click="handleCollapse">
        <template v-if="fold">
          <el-icon>
            <Fold/>
          </el-icon>
        </template>
        <template v-else>
          <el-icon>
            <Expand/>
          </el-icon>
        </template>
      </div>
      <div class="flex items-center justify-center">
        <full-screen/>
        <el-dropdown>
        <span>
          <el-avatar shape="square" :size="40" :src="squareUrl"/>
        </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="handleLogout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in breadcrumbList">{{ item.name }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<style scoped>

:deep(.el-tooltip__trigger:focus) {
  outline: none;
}
</style>
