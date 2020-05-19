<template>
  <div>
    <!-- 头部 -->
    <head-text>
      <span slot="text">{{articleObj.title}}</span>
      <span slot="twt">
        <span class="el-icon-user-solid"></span><span>{{articleObj.writer}}</span>
        <span class="el-icon-pie-chart"></span><span>{{parseInt(articleObj.date) | dateFormat}}</span>
      </span>
    </head-text>
    <!-- 面包屑 -->
    <bread/>
    <!-- 正文内容显示 -->
    <div class="center_text">
      <a href="#" class="index-img">
        <img src="https://www.moerats.com/usr/themes/handsome/usr/img/sj/3.jpg" alt="">
      </a>
      <div class="vue-text">
        <p>
          <span class="explain">说明：</span>
          <span>{{articleObj.article}}</span>
        </p>
        <h1>最佳实践</h1>
        <ul>
          <li>如何写才能保证多路由模块解耦，保证更方便增加新的路由模块吗？</li>
          <li>如何编写配置文件能让打包速度最优化吗？</li>
          <li>怎么让组件能够成为高复用性的组件库型组件吗？</li>
        </ul>
        <h1>推荐实践</h1>
        <ul>
          <li>二次封装axios，方便自己的项目请求与数据操作</li>
          <li>封装公用工具库，对于项目组常用的如cookie，session，字符验证等功能先进行封装。</li>
          <li>对经常不变的库进行 Dll 打包，加快打包速度</li>
        </ul>
        <div class="bottom-text">
          <span class="el-icon-pie-chart"></span>最后修改时间:{{parseInt(articleObj.date) | dateFormat}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadText from '@/components/common/headText'
import Bread from '@/components/common/CrumbsVue'
import { ArticleMixin } from '@/common/mixin.js'
export default {
  mixins: [ArticleMixin],
  components: {
    HeadText,
    Bread
  }
}
</script>

<style lang="less" scoped>
  @import '../../assets/css/article/Article.css';
</style>
