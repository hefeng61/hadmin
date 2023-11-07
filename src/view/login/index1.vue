<script setup>
import {ref} from "vue";
import {User, Lock} from "@element-plus/icons-vue";
import service from "../../request/index.js";
import {useRouter} from "vue-router";
const router = useRouter()

const form = ref({
  name: '',
  password: '',
  mobile: '',
  code: ''
})
const isDefault = ref(true)
const handleLogin = () => {
  service.post('/login', form.value).then(res => {
    localStorage.setItem('isLogin', true)
    router.push({path: '/'})
  })
}
const changeLoginType = (data) => {
  isDefault.value = data
}
const second = ref(60)
const codeFlag = ref(true)
const disabled = ref(false)
const getCode = () => {
  const interval = setInterval(() => {
    codeFlag.value = false
    disabled.value = true
    second.value--
    if (second.value < 1) {
      codeFlag.value = true
      disabled.value = false
      clearInterval(interval)
    }
  }, 1000)
}


</script>

<template>
  <div class="h-screen w-full bg-[url('../../src/assets/login/background.png')] flex items-center justify-center">
    <div class="w-[1280px] h-[700px] bg-white rounded-xl flex items-center justify-between">
      <div>
        <img src="../../../src/assets/login/left_img.png" alt="">
      </div>
      <div class="h-[570px] w-[550px] mr-[65px] flex items-center justify-center box-border">
        <el-form :model="form" class="h-[446px] w-[385px]">
          <div class="text-center text-2xl">
            欢迎登陆
          </div>
          <div class="h-12 w-[282px] my-5 mx-auto">
            <span class="float-left text-lg" :class="isDefault?'checked':''"
                  @click="changeLoginType(true)">账号密码登录</span>
            <span class="float-right text-lg" :class="!isDefault?'checked':''" @click="changeLoginType(false)">手机号登录</span>
          </div>
          <div v-if="isDefault">
            <el-form-item>
              <el-input v-model="form.name" :prefix-icon="User" placeholder="请输入您的账号"
                        class="h-[55px] mb-[10px]"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.password" :prefix-icon="Lock" placeholder="请输入密码"
                        class="h-[55px] mb-[10px]"></el-input>
            </el-form-item>
            <div class="text-sm mb-10 text-right">忘记密码？</div>
          </div>
          <div v-else>
            <el-form-item>
              <el-input v-model="form.name" :prefix-icon="User" placeholder="请输入您的手机号"
                        class="h-[55px] mb-[10px]"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.password" :prefix-icon="Lock" placeholder="请输入验证码"
                        class="h-[55px] mb-[10px]">
                <template #append>
                  <el-button :disabled="disabled" class="bg-[#409eff]">
                    <span v-if="codeFlag" @click="getCode" >获取验证码</span>
                    <span v-else>{{ second }}秒后重试</span>
                  </el-button>
                </template>
              </el-input>

            </el-form-item>
          </div>
          <el-form-item>
            <el-button type="primary" @click="handleLogin" class="w-full text-sm">登录</el-button>
          </el-form-item>
        </el-form>
      </div>

    </div>
  </div>
</template>

<style scoped>
:deep(.el-button) {
  height: 50px;
}
.checked{
  @apply border-b-4 pb-4 border-[#0054FE]
}
</style>
