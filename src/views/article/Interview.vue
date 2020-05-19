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
        <h1>面试基础篇</h1>
        <ul>
          <li>如何理解执行上下文、作用域链、原型链等</li>
          <li>什么是闭包、深/浅拷贝，有哪些实现方式等</li>
          <li>如何准确判断一个对象是数组、数组有哪些常用方法、数组如何去重、数组如何排序等</li>
          <li>谈一下常用设计模式，并选择一个进行场景分析、前端常见攻击方式等</li>
          <li>前端有哪些跨域方案、前端网站常规优化方案、前端常见攻击方式</li>
          <li>谈一下for...of、谈一下防抖和节流、谈一下EventLoop</li>
          <li>GET和POST有什么区别</li>
          <li>浏览器解析渲染页面过程</li>
          <img src="https://i0.hdslb.com/bfs/article/watermark/92b5ba39f55bfdd339907e02194cc48446d0af1a.png@1320w_1190h.webp" alt="">
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
  .vue-text {
    img {
      width: 60%;
      height: 50%;
    }
  }
</style>
