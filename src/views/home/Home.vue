<template>
  <div class="wrapper">
    <div class="scroll-div-outer" id='scrollDiv'>
    <head-text>
      <span slot="text">Twt's Blog</span>
      <span slot="twt">无 穷 的 伟 大 , 也 是 从 “ 一 ” 开 始 的 ...</span>
    </head-text>
      <!-- 文章显示 -->
      <TextBox :article="article" @acticleClick="acticleClick"></TextBox>
    </div>
    <!-- 分页 -->
    <el-pagination
      @current-change="handleCurrentChange"
      :page-sizes="[2]"
      :page-size="2"
      layout="prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
import HeadText from '@/components/common/headText'
import TextBox from '@/components/content/textBox/TextBox'
export default {
  components: {
    HeadText,
    TextBox
  },
  data() {
    return {
      scrollTopForApp: 0,
      // 文章
      article: [],
      query: {
        pageIndex: 1,
        pageSize: 2
      },
      // 文章数量
      total: 0
    }
  },
  created() {
    this.getArticle()
  },
  methods: {
    // 获取文章内容
    async getArticle() {
      const { data: res } = await this.$http.get('/article', { params: this.query })
      if (res.status !== 200) return this.$message.error('请求文章失败')
      this.article = res.data
      this.total = res.length
    },
    // 切换下一页
    handleCurrentChange(newCurrent) {
      this.query.pageIndex = newCurrent
      this.getArticle()
    },
    // 被点击的文章内容
    acticleClick(obj) {
      this.$router.push(`/${obj.path}/${obj.id}`)
    }
  }
}
</script>

<style lang="less" scoped>
.zhuti {
  background-color: #f9f9f9;
}
</style>
