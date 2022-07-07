<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b" 
    router  
  >
    <h2 style="text-align: center; color:#fff;">后台管理系统</h2>
    <!-- 没有子选项 disabled为不可选择-->
    <el-menu-item  v-for="(item,index) of noChildMenu"  :index="item.path" :key="index">
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title"> {{ item.label }} </span>
    </el-menu-item>
    <!-- 有子选项 -->
    <el-submenu v-for="(item) of haveChildMenu" :index="item.path" :key="item.path">
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item  v-for="(item,index) of item.children" :index="inedx" :key="index">
          <i :class="`el-icon-${item.icon}`"></i>
          <span slot="title"> {{ item.label }} </span>
        </el-menu-item>
      </el-menu-item-group>

    </el-submenu>

  </el-menu>
</template>
<script>
export default {
  name: "CompAside",
  data() {
    return {
      menu: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
        {
          path: "/mall",
          name: "mall",
          label: "商品管理",
          icon: "shopping-cart-full",
          url: "MallManage/MallManage",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user",
          url: "UserManage/UserManage",
        },
        {
          label: "其他",
          icon: "loading",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "页面1",
              icon: "setting",
              url: "Other/PageOne",
            },
            {
              path: "/page2",
              name: "page2",
              label: "页面2",
              icon: "setting",
              url: "Other/PageTwo",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  computed: {
    haveChildMenu() {
      return this.menu.filter((item) => item.children);
    },
    noChildMenu() {
      return this.menu.filter((item) => !item.children);
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
  .el-menu-vertical-demo{
    height: 100%;
  }
</style>