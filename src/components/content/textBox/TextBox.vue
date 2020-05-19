<template>
  <div>
  <div class="center_text" v-for="(item, index) in article" :key="index" @click="acticleClick(item)">
    <a href="#" class="index-img">
      <img src="https://www.moerats.com/usr/themes/handsome/usr/img/sj/3.jpg" alt="">
    </a>
    <div class="box-text">
      <h2><a href="#">{{item.title}}</a></h2>
      <p>{{item.article}}</p>
      <div class="line"></div>
      <div class="writer">
        <span class="el-icon-user-solid"></span> <span>{{item.writer}}</span>
        <span class="zhongjian"></span>
        <span class="el-icon-pie-chart"></span> <span>{{parseInt(item.date) | dateFormat}}</span>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    // 文章被点击
    acticleClick(item) {
      const obj = {
        id: item.id,
        path: item.path
      }
      this.$emit('acticleClick', obj)
    }
  }
}
</script>

<style lang="less" scoped>
  .center_text {
    width: 90%;
    background-color: white;
    margin: 20px auto 40px;
    border-radius: 25px;
    box-shadow: 1px 1px 5px 5px rgba(17, 150, 196, 0.35);
    .index-img {
      display: inline-block;
      width: 100%;
      border-radius: 25px;
      transition: all .6s;
      img {
        width: 100%;
        border-radius: 25px;
      }
    }
    .index-img:hover {
      transform: scale(1.05);
    }
  }
  .box-text {
    padding: 0 10px;
    h2 {
      font-size: 22px;
      font-weight: 500;
      margin-bottom: 5px;
      text-align: center;
      a {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
    }
    p {
      overflow: hidden;
      text-overflow:ellipsis;
      display:-webkit-box;
      -webkit-box-orient:vertical;
      -webkit-line-clamp:3;
      color: #98a6ad;
      margin: 0 0 10px;
      font-size: 13px;
      line-height: 2em
    }
  }
  .line {
    border-bottom: 1px solid #dee5e7
  }
  .writer {
    margin-top: 5px;
    font-size: 12px;
    padding-bottom: 10px;
    color: #909399;
    .zhongjian {
      display: inline-block;
      margin: 0 10px;
    }
  }
</style>
