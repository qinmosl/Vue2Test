<template>
  <div class="title"> 
    这是主页 
    <el-button type="danger" @click="quit">退出登录</el-button>
  </div>
</template>

<script>
import { removeCookies } from '@/utils/cookie'
import { LOGIN_TOKEN_KEY }  from '@/utils/constants'
export default {
  name: 'mainPage',
  methods:{
    quit() {
      removeCookies(LOGIN_TOKEN_KEY)
      // 跳转回登录页
      this.$router.push({name: 'Login'})
    }
  }
};
</script>

<style scoped>
  .title {
    font-size: 26px;
    color: pink;
  }
</style>