<template>
  <div>
    <head-text>
      <span slot="text">旅游</span>
      <span slot="twt">喜 欢 大 海 ...</span>
    </head-text>
    <!-- 文章内容 -->
    <div class="center_text">
      <a href="#" class="index-img">
        <img src="https://www.moerats.com/usr/themes/handsome/usr/img/sj/4.jpg" alt="">
      </a>
      <div class="box-text">
        <h4>北海银滩:</h4>
        <p>北海银滩是北海市的旅游景点，位于广西北海市银海区，西起侨港镇渔港，东至大冠沙，由西区、东区和海域沙滩区组成，东西绵延约24公里，海滩宽度在30--3000米之间，陆地面积12平方公里，总面积约38平方公里。
          广西则以“北有桂林山水，南有北海银滩”而自豪。北海银滩度假区内的海域海水纯净，陆岸植被丰富，环境优雅宁静，空气格外清新，可容纳国际上最大规模的沙滩运动娱乐项目和海上运动娱乐项目，是中国南方最理想的滨海浴场和海上运动场所。
        </p>
      </div>
      <div class="box-text">
        <h4>强力推荐: 涠洲岛</h4>
        <p>
          涠洲岛总面积24.74平方千米 [1]  ，岛的最高海拔79米。岛内景区包括鳄鱼山景区、滴水丹屏景区、石螺口景区、天主教堂景区和五彩滩景区等。
          涠洲岛是火山喷发堆凝而成的岛屿，有海蚀、海积及溶岩等景观，有“蓬莱岛”之称，是中国地质年龄最年轻的火山岛，也是广西最大的海岛。
        </p>
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
