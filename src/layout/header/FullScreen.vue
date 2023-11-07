<script setup>
import screenfull from "screenfull";
const handleFullScreen = () => {
  if (screenfull.isEnabled && !screenfull.isFullscreen){
    screenfull.request()
  }else {
    screenfull.exit()
  }

}
</script>

<template>
  <span @click="handleFullScreen" class="mr-4">
    <el-icon>
      <FullScreen/>
    </el-icon>
  </span>

</template>

<style scoped>

</style>
