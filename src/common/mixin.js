export const ArticleMixin = {
  data() {
    return {
      articleObj: {}
    }
  },
  created() {
    this.getArticle()
  },
  methods: {
    async getArticle() {
      const { data: res } = await this.$http.get('/articleText', {
        params: {
          id: this.$route.params.id
        }
      })
      this.articleObj = res.data[0]
      console.log(this.articleObj)
    }
  }
}
