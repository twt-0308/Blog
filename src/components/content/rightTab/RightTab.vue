<template>
  <div class="text_center">
    <div class="text_title"><h3>{{textTitle}}</h3></div>
    <div v-for="(item, index) in comment" :key="index" class="xianshi">
      <div class="xiaoxin">
        <img :src="imgArr[index]" alt="">
      </div>
      <div class="newText" :title="item.title">{{item.title}}</div>
    </div>
    <!-- 显示博客信息列表 -->
    <div class="textNum">博客信息</div>
    <div class="text_box">
      <div v-for="(item,index) in textNumber" :key="index">
        <div class="text_nav">
          <span :class="item.icon" class="text_icon"></span>
          <span class="text_comment">{{item.text}}</span>
          <div class="tongji">{{textNum[index]}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Array,
      default() {
        return []
      }
    },
    textTitle: {
      type: String,
      default() {
        return ''
      }
    },
    textNum: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      textNumber: [
        { text: '文章数目', icon: 'el-icon-s-order' },
        { text: '评论数目', icon: 'el-icon-s-comment' },
        { text: '最近活动', icon: 'el-icon-s-marketing' }
      ],
      imgArr: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588567479094&di=033ff9a43762d7138e48826f5de5b559&imgtype=0&src=http%3A%2F%2Fm.3fantizi.com%2Farticle%2Fpic%2FTX8851_26.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588567479093&di=5882ec47b6119255abcb78676a4f15ea&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201409%2F07%2F20140907104618_RJGFm.thumb.224_0.gif',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588567479091&di=753376aa898ab2ce0c7df7034951b17f&imgtype=0&src=http%3A%2F%2Fpic.qqtn.com%2Fup%2F2017-11%2F2017112016533547571.jpg',
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2185825369,1104666046&fm=11&gp=0.jpg'
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.text_center {
  padding: 10px;
  h3 {
    margin-top: 2px;
  }
  .xiaoxin {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 50px;
      height: 100%;
    }
  }
}
.xianshi {
  cursor: pointer;
  position: relative;
  padding: 10px 0 10px 0;
  margin-bottom: 5px;
  .newText {
    position: absolute;
    left: 53px;
    top: 11px;
    font-size: 13px;
    color: #58666e;
    overflow:hidden;
    /* 3行 溢出... */
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:3;
  }
}
.textNum {
  margin-top: -4px;
  margin-bottom: 10px;
}
.text_box {
  width: 100%;
  border: 1px solid #dde6e9;
  border-bottom-color: transparent;
  border-radius: 4px;
}
.text_nav {
  padding: 10px 0;
  border-bottom: 1px solid #dde6e9;
  position: relative;
  .text_icon {
    color: #98a6ad;
    padding-right: 10px;
    padding-left: 10px;
  }
  .text_comment {
    font-size: 14px;
    font-weight: 300;
  }
  .tongji {
    width: 30px;
    height: 20px;
    background-color: #cfdadd;
    position: absolute;
    right: 10px;
    top: 0;
    transform: translateY(12px);
    border-radius: 30px;
    text-align: center;
    color: white;
    font-weight: 300;
    font-size: 15px;
  }
}
</style>
