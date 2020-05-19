<template>
  <div>
    <head-text>
      <span slot="text">关于我</span>
      <span slot="twt">好 像 没 什 么 好 介 绍 的 ...</span>
    </head-text>
    <!-- 文章内容 -->
    <div class="center_text">
      <a href="#" class="index-img">
        <img src="https://www.moerats.com/usr/themes/handsome/usr/img/sj/8.jpg" alt="">
      </a>
      <div class="box-text">
        <h4>关于本人:</h4>
        <ul>
          <li>做事有耐心，遇事不懂先自己解决，不懂再请教</li>
          <li>本人性格嘛开朗、稳重、有活力，待人热情、真诚</li>
          <li>喜欢唱歌，打打乒乓球和羽毛球这样子</li>
        </ul>
        <h4>关于博客:</h4>
        <ul>
          <li>这是个人的一个小博客，记录自己的生活等等</li>
          <li>博客运用前端的技术：Vue,Vue-router,Element-ui,Axios等</li>
          <li>博客运用后端的技术：Node.js,Express,Mysql</li>
        </ul>
        <h4>个人座右铭:</h4>
        <ul>
          <li>不论成功还是失败，都是系于自己.</li>
          <li>拼一个春夏秋冬，愿一生无怨无悔。</li>
          <li>不要再追逐光明了，让自己发光吧。</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import HeadText from '@/components/common/headText'
export default {
  components: {
    HeadText
  }
}
</script>

<style lang="less" scoped>
  @import "../../assets/css/text.css";
  .index-img:hover {
    transform: scale(1.05);
  }
</style>
