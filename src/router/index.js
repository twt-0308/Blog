import Vue from 'vue'
import VueRouter from 'vue-router'
const Index = () => import('@/views/index')
const Home = () => import('@/views/home/Home')
const File = () => import('@/views/file/File')
const Video = () => import('@/views/video/Video')
const About = () => import('@/views/about/About')
const Article = () => import('@/views/home/article/Article')
// 文章路由
const VueArticle = () => import('@/views/article/VueArticle')
const Interview = () => import('@/views/article/Interview')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index,
    redirect: '/home',
    children: [
      { path: '/home', component: Home },
      { path: '/file', component: File },
      { path: '/about', component: About },
      { path: '/video', component: Video },
      { path: '/html', component: Video },
      { path: '/css', component: Video },
      { path: '/js', component: Video },
      { path: '/vue', component: Video },
      { path: '/article', component: Article },
      { path: '/vueArticle/:id', component: VueArticle },
      { path: '/interview/:id', component: Interview }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
