<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import {Lock, User} from "@element-plus/icons-vue";
import service from "../../request/index.js";

const form = ref({
  name: '',
  password: ''
})
const formRef = ref(null)
const rules = ref({
  name: [
    {
      required: true,
      trigger: blur,
      message: 'name is null'
    }
  ],
  password: [
    {
      required: true,
      trigger: blur,
      message: 'password is null'
    }
  ]
})
const router = useRouter()
const handleLogin = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      service.post('/login', form.value).then(res => {
        localStorage.setItem('isLogin', true)
        router.push({path: '/'})
      })
    } else {
      console.log('login error')
    }
  })
}
</script>

<template>
  <div class="h-screen w-full flex justify-center items-center">
    <el-form :model="form" ref="formRef" :rules="rules" class="w-[520px]">
      <div class="flex justify-center items-center mb-4">
        <h2>登录</h2>
      </div>
      <el-form-item prop="name">
        <el-input v-model="form.name" :prefix-icon="User" clearable class="h-12"/>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="form.password" :prefix-icon="Lock" clearable show-password class="h-12"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="w-full" @click="handleLogin">Login In</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>

</style>
