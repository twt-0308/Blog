<template>
  <el-aside width="250px">
    <!-- 侧边栏头像 -->
    <div class="mine">
      <div class="img">
        <img src="@/assets/images/timg.jpg" alt="" style="width: 100%; height: 100%">
      </div>
      <el-tooltip class="item" effect="dark" content="只要坚持，就能成功" placement="bottom">
        <div class="text_top">Twt's <span></span></div>
      </el-tooltip>
      <div class="text_bottom">
        何以解忧，唯有杜康
      </div>
      <div class="daohang">&nbsp;导航</div>
    </div>
    <!-- 菜单 -->
    <el-menu class="menu1" router background-color="#dde6e9" text-color="#58666e" active-text-color="#58666e">
      <el-menu-item :index="'/'+item.path" v-for="item in tabList" :key="item.id">
        <template slot="title">
          <!--  图标  -->
          <i :class="iconsObj[item.id]"></i>
          <!--  文本  -->
          <span>{{item.tabName}}</span>
        </template>
      </el-menu-item>
    </el-menu>
    <div class="bottom_mine">
      <div class="zucheng">&nbsp;组成</div>
      <!-- 菜单 -->
      <el-menu router unique-opened class="menu2" background-color="#dde6e9" text-color="#58666e" active-text-color="#58666e">
        <el-submenu :index="item.id + ''" v-for="item in minTabList" :key="item.id">
          <template slot="title">
            <i :class="iconsObject[item.id]"></i>
            <span>{{item.tabName}}</span>
          </template>
          <!-- 二级菜单 -->
          <el-menu-item :index="'/' + result.path" v-for="result in item.children" :key="result.id">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>{{result.tabName}}</span>
            </template>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </el-aside>
</template>

<script>
export default {
  data() {
    return {
      // 菜单
      tabList: [],
      minTabList: [],
      //
      iconsObj: {
        1: 'el-icon-s-home',
        2: 'el-icon-s-order',
        3: 'el-icon-video-camera-solid',
        4: 'el-icon-goblet-square-full'
      },
      path: '',
      iconsObject: {
        1: 'el-icon-s-grid',
        2: 'el-icon-s-promotion'
      }
    }
  },
  created() {
    this.getTabList()
    this.getMinTabList()
  },
  methods: {
    // 获取导航栏
    async getTabList() {
      const { data: res } = await this.$http.get('user')
      if (res.status !== 200) return this.$message.error('获取导航栏失败')
      this.tabList = res.data
    },
    async getMinTabList() {
      const { data: res } = await this.$http.get('tab')
      if (res.status !== 200) return this.$message.error('获取列表失败!')
      this.minTabList = res.data
    }
  }
}
</script>

<style lang="less" scoped>
  .el-menu {
    border-right: 0;
  }
  .bottom_mine {
    background-color: #dde6e9;
  }
  .el-aside {
    background-color: #dde6e9;
  }
  .menu1 {
    height: 224px;
  }
  .menu2 {
    height: 168px;
  }
  .el-aside {
    .mine {
      height: 260px;
      position: relative;
      box-sizing: border-box;
      background-color: #dde6e9;
      .img {
        position: absolute;
        width: 60%;
        height: 60%;
        background-color: pink;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-65% );
        border-radius: 50%;
        overflow: hidden;
        transition: all .3s linear;
      }
      .img img {
        transition: all .3s linear;
      }
      .img img:hover {
        transform: scale(1.1);
      }
      .img:hover {
        border: 5px solid rgba(88, 102, 110);
      }
    }
  }
  .text_top {
    font-weight: bold;
    color: #58666e;
    position: relative;
    text-align: center;
    span {
      position: absolute;
      display: inline-block;
      width: 0;
      height: 0;
      border: 4px solid;
      border-color: #58666e transparent transparent transparent;
      top: 50%;
      left: 60%;
    }
    top: 73%;
    cursor: pointer;
  }
  .text_bottom {
    text-align: center;
    color: #a8b5bb;
    font-size: 13px;
    width: 100%;
    position: absolute;
    top: 82%;
  }
  .daohang,
  .zucheng {
    bottom: 0;
    color: #a8b5bb;
    font-size: 13px;
  }
  .daohang {
    position: absolute;
  }
  aside::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  aside {
    height: 100%;
  }
</style>
