<template>
  <div>
    <head-text>
      <span slot="text">个人心得</span>
      <span slot="twt">前 端 学 习 要 坚 持 ...</span>
    </head-text>
    <!-- 文章内容 -->
    <div class="center_text">
      <a href="#" class="index-img">
        <img src="https://www.moerats.com/usr/themes/handsome/usr/img/sj/7.jpg" alt="">
      </a>
      <div class="box-text">
        <h4>前言:</h4>
        <p>学习前端如同开车，技术是练出的，实际体验比理论更加重要，但目前理论决定思维方式，我们该如何取舍？</p>
        <p>我们都是相同的目标，相同的学习思维，一起走上了前端的路，当然站长的目标并不难，难得东西都是有深度的嘛！目前前端还是蛮缺人才的，就像现实的社会职位缺口，人工难找 有的高不成低不就 有的好高骛远 有的眼高手低。其实前端这块 确实还是竞争激烈 一个热门职位 招人 会有成百上千个人投简历 ，茫茫人海中 灰心叹气，难道真的就没机会了吗？</p>
        <p>其实并非想象的那样，前端这个行业的岗位还是有的，只需要你努力学习，但简单的说会前端的三大基础可是很难找到称心如意的工作的。</p>
        <ul>
          <li>多多阅读浏览博客和一些知识分享平台，如知乎，w③cschool。</li>
          <li>下载一款适合自己的前端编辑工具，或者学习工具。hbuilder，sublime都可以依个人喜好吧！</li>
          <li>现在网络发展的比加快，速率提高了很多倍，可以观看视频教程来学习前端，慕课网，前端自学网很多地方都有视频，如果你留心 你甚至可以免费观看到大量前端教学视频！百度最懂你！</li>
        </ul>
        <p>目前简单技术已经透明化，需要学习的可以随时网上寻找，而深度的技术可能一时半会看不懂，没关系 毕竟人和人的区别仅仅是思维不同。到了那个点就会懂那些遥不可及的方法技巧了，养兵千日用兵一时！坚持每天学习 你也将成为真真实实的前端开发者！</p>
        <h4>加油！！！</h4>
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

<style scoped>
  @import "../../assets/css/text.css";
  .index-img:hover {
    transform: scale(1.05);
  }
</style>
