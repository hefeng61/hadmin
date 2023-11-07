<script setup>
import {ref, onMounted} from "vue";
import * as echarts from 'echarts'

const line = ref(null)
const init = () => {
  const myChart = echarts.init(line.value)
  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  }
  myChart.setOption(option)
}

onMounted(() => {
  init()
})
</script>

<template>
  <div ref="line" class="h-[300px] w-[400px]">

  </div>
</template>

<style scoped>

</style>
