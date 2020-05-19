import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/font_1791257_2kdr5hygs3z/iconfont.css'
import axios from 'axios'

Vue.config.productionTip = false

// 配置根本路径
axios.defaults.baseURL = 'http://localhost:8000/'
Vue.prototype.$http = axios

// 过滤器
Vue.filter('dateFormat', function(originVal) {
  const dt = new Date(originVal)
  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')
  return y + '-' + m + '-' + d
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
