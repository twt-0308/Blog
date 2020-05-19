<template>
  <div class="bottom_tag">
    <span>标签云</span>
    <div class="tag">
      <el-tag size="mini" v-for="item in tagList" :key="item.id" :title="item.tag">{{item.tag}}</el-tag>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tagList: []
    }
  },
  created() {
    this.getTagList()
  },
  methods: {
    async getTagList() {
      const { data: res } = await this.$http.get('tag')
      if (res.status !== 200) return this.$message.error('获取标签失败！')
      this.tagList = res.data
    }
  }
}
</script>

<style scoped>
.bottom_tag {
  padding: 0 10px;
}
.el-tag {
  margin-right: 5px;
  margin-bottom: 5px;
  margin-top: 5px;
  cursor: pointer;
}
</style>
