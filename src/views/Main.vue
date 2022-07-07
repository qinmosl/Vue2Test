<template>
    <el-container  class="home">
      <el-aside width="200px">
        <CompAside/>
      </el-aside>
      <el-container>
        <el-header style="background-color: pink;">
          <CompHeader/>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
import CompAside from '@/components/CompAside'
import CompHeader from '@/components/CompHeader'
// import CompMain from '@/components/CompMain'
export default {
    components:{
      CompAside,
      CompHeader,
      // CompMain
    }
};
</script>

<style lang="scss" scoped>
  .home{
    height: 100%;
    width: 100%;
  }
</style>