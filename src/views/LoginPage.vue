<template>
  <div>
    这是登录页
    <el-button type="primary" @click="login">点击登录</el-button>
    
  </div>

</template>

<script>
import { setCookies } from '@/utils/cookie'
import { LOGIN_TOKEN_KEY }  from '@/utils/constants'
export default {
  methods:{
    login() {
      let loginFlag = true
      // .then
      if(loginFlag) {
        // 此处我模拟登录成功的保存res里面的token
        let token = 'dasdnasdkandsksdak3123s'
        setCookies(LOGIN_TOKEN_KEY, token)   // 默认设置了7 天过期的cookie
        // 然后跳转到主页
        this.$router.push({name: 'Main'})
      } 
    },
    
  }
};
</script>

<style>
</style>