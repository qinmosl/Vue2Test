<template>
  <div id="app"> 
    APP入口，此处可放菜单栏
    <!-- 原来的vue2路由是通过this.$route和this.$router来控制的。
    现在vue3有所变化，useRoute相当于以前的this.$route，而useRouter相当于this.$router -->
     <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>

</style>
