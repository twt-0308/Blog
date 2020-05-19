<template>
  <div class="main">
    <el-container class="home_container">
      <!-- 头部区域 -->
      <el-header>
        <span class="iconfont icon-warehouse-fill">     Twt's Blog</span>
        <div class="inputValue">
          <el-input placeholder="输入关键词搜索" v-model="inputValue">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <span class="denglu" @click="loginHandle">登录 <span></span></span>
      </el-header>
      <!-- 侧边栏 -->
      <el-container>
        <!-- 导航栏组件 -->
        <Aside></Aside>
        <!-- 左侧区域 -->
        <el-main>
          <el-row>
            <el-col :span="18" class="zhuti"><router-view/></el-col>
            <el-col :span="6" class="text_right">
              <tab-bar-item @currontIndex="indexHandle" :titles="['el-icon-s-order', 'el-icon-s-comment', 'el-icon-s-unfold']"/>
              <right-tab :textNum="textNum" :comment="goods[currontIndex].title" :textTitle="title_text"></right-tab>
              <bottom-tag></bottom-tag>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>

    <!-- 登录框 -->
    <el-dialog title="登录" :visible.sync="loginVisible"
      width="35%" @close="closeHandle">
      <el-form :model="loginForm" :rules="loginRules" ref="loginRef" label-width="100px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="loginVisible = false">取 消</el-button>
        <el-button type="primary" @click="goHandle">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Aside from '@/components/navigationBar/Aside'
import TabBarItem from '@/components/content/TabBarItem'
import RightTab from '@/components/content/rightTab/RightTab'
import BottomTag from '@/components/content/rightTab/BottomTag'
export default {
  data() {
    return {
      inputValue: '',
      // 登录框显示与隐藏
      loginVisible: false,
      // 登录用户账号与密码
      loginForm: {
        username: '',
        password: ''
      },
      // 登录验证规则
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 5, message: '长度不能小于5个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, message: '长度不能小于5个字符', trigger: 'blur' }
        ]
      },
      // 获取切换导航的所有数据
      goods: {
        hot: { title: [], path: '' },
        comment: { title: [], path: '' },
        new: { title: [], path: '' }
      },
      currontIndex: 'hot',
      title_text: '热门文章',
      textNum: []
    }
  },
  components: {
    Aside,
    TabBarItem,
    RightTab,
    BottomTag
  },
  created() {
    this.getAllList('hot')
    this.getAllList('comment')
    this.getAllList('new')
  },
  methods: {
    // 监听切换导航栏
    indexHandle(index) {
      switch (index) {
        case 0:
          this.currontIndex = 'hot'
          this.title_text = '热门文章'
          break
        case 1:
          this.currontIndex = 'comment'
          this.title_text = '最近评论'
          break
        case 2:
          this.currontIndex = 'new'
          this.title_text = '随机文章'
          break
      }
    },
    // 点击显示登录框
    loginHandle() {
      this.loginVisible = true
    },
    // 关闭登录框触发
    closeHandle() {
      this.$refs.loginRef.resetFields()
    },
    // 登录触发函数
    goHandle() {
      this.$refs.loginRef.validate(valid => {
        if (!valid) return this.$message.error('请输入账号或密码！')
      })
    },
    // 获取评论 热门文章 推荐
    async getAllList(type) {
      const { data: res } = await this.$http.get(type)
      this.goods[type].title.push(...res.data)
      this.textNum.push(res.data.length)
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  width: 80%;
  background-color: #fff;
  margin: 0 auto;
  height: 100%;
  box-shadow: -4px 6px 8px -2px rgba(0, 0, 0, 0.1), 4px 6px 8px -2px rgba(0, 0, 0, 0.1);
}
.home_container {
  height: 100%;
}
.el-header {
  background-color: #1199c4;
  height: 50px !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  span {
    cursor: pointer;
    font-weight: bold;
  }
  .inputValue {
    width: 500px;
  }
  .denglu {
    width: 50px;
    height: 100%;
    line-height: 50px;
    text-align: center;
    span {
      display: inline-block;
      width: 0;
      height: 0;
      border: 4px solid;
      border-color: white transparent transparent transparent;
      top: 50%;
      left: 60%;
    }
  }
  .denglu:hover {
    background-color: #17b2e2;
  }
}
.el-dialog {
  box-sizing: border-box;
}
main {
  padding: 0;
}
.text_right {
  border-left: 1px solid #dde6e9;
  height: 100%;
  background-color: #f9f9f9;
}
.el-row {
  height: 100%;
}
.zhuti {
  background-color: #f9f9f9;
  height: 100%;
  overflow-y: scroll;
}
.zhuti::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>
