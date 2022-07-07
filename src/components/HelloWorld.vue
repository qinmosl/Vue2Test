<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>count：{{count}}</h1>
    <el-button @click="count++">点我count+1</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  // Vue会将组件被传入但未声明的props作为html属性绑定到组件的根元素上 
  inheritAttrs:false,
  
  data(){
    return{
      count:1
    }
  },
  props: {
    msg: String
  },
  beforeCreate(){
    console.log("---子组件创建前---")
  },
  created(){
    console.log("---子组件创建后---")
  },
  beforeMount(){
    console.log("------子组件挂载前------")
  },
  mounted(){
    console.log("------子组件挂载后------")
  },
  beforeUpdate(){
    console.log("------子组件更新前------")
  },
  updated(){
    console.log("----子组件更新后--")
  },
  beforeDestroy(){
    console.log("---子组件卸载前-----")
  },
  destoryed(){
    console.log("--子组件卸载后----")
  }
  
}
</script>

<style scoped>
h1 {
  margin: 40px 0 0;
  color: #42b983;
}

</style>
