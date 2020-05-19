<template>
  <!-- 面包屑 -->
  <div class="bread">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item class="el-icon-s-home" :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>正文</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="enjoy">
      <span>分享到：</span>
      <span class="el-icon-s-promotion"></span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
 .bread {
   border: 1px solid #dee5e7;
   width: 90%;
   margin: 20px auto;
   border-radius: 5px;
   background-color: white;
   position: relative;
 }
  .el-breadcrumb {
    padding: 10px 15px;
  }
  .enjoy {
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
</style>
