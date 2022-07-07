<template>
  <div id="app">
    <!-- <Main/> -->
  
    <el-dialog 
      title="验证信息" 
      :visible.sync="dialogFormVisible"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :before-close="closeDialog"
      :width="dialogWidth"
    >
      <el-form :model="form" size="small">
        <el-form-item label="ID" :label-width="formLabelWidth">
          <!-- autocomplete原生属性，自动补全 -->
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="SEC" :label-width="formLabelWidth">
          <!-- <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select> -->
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="closeDialog(true)">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// import Main from "./views/Main.vue";
export default {
  name: "App",
  data() {
    return {
      dialogFormVisible: true,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "40px",
      dialogWidth:'375px',
      iszr :false //是否注入
    };
  },
  components: {
    // Main,
  },
  methods:{
    closeDialog(isOK = false){
      if(!this.iszr && !isOK){
        this.$message({
          message: '没注入你想关闭，做你的春秋美梦',
          type: 'success'
        });
      }else{
        this.$message.error('啛啛喳喳')
      }
      
      // this.dialogFormVisible = false
    }
  }
  // beforeCreate() {
  //   console.log("---父组件创建前---");
  // },
  // created() {
  //   console.log("---父组件创建后---");
  // },
  // beforeMount() {
  //   console.log("----父组件挂载前------");
  // },
  // mounted() {
  //   console.log("------父组件挂载后------");
  // },
  // beforeUpdate() {
  //   console.log("------父组件更新前------");
  // },
  // updated() {
  //   console.log("----父组件更新后--");
  // },
  // beforeDestroy() {
  //   console.log("---父组件卸载前-----");
  // },
  // destoryed() {
  //   console.log("--父组件卸载后----");
  // },
  // beforeUnmount() {

  // },
  // unmounted() {

  // },
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  height: 100vh;
}
</style>
