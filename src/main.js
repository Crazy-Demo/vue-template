/*
 * @Author: your name
 * @Date: 2020-05-06 19:52:18
 * @LastEditTime: 2020-07-07 09:54:18
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /pro03/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
