import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueAsyncData from 'vue-async-data'
import VueTap from 'vue-tap'
import VueI18n from 'vue-i18n'
import routerConfig from './routers'
import App from './App'
// import handlewechat from '../../../static/h5/utils/handlewechat'

Vue.use(VueResource)
Vue.use(VueAsyncData)
Vue.use(VueRouter)
Vue.use(VueTap)
Vue.use(VueI18n, {
  lang: 'zh_cn',
  locales: require('./locales')
})

var router = new VueRouter({
  hashbang: true,
  history: false,
  saveScrollPosition: true,
  replace : false,
}).map(routerConfig)

// router.beforeEach(function (transition) {
//   if (transition.to.path) {
//     var hideShareNameList = ['orders', 'orderdetail']
//     if (hideShareNameList.indexOf(transition.to.name) !== -1) {
//       handlewechat.init(new Vue()) // init wechat jssdk config
//     }
//     transition.next()
//   }
// })

Vue.http.options.root = '/api'

// Define your root component for app here
router.start(App, '#app')
