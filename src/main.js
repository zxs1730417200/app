import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from '@/store'
import '@/mock/mockServer'
import "swiper/css/swiper.min.css"
import * as API from "@/api"

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)



new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this,
    Vue.prototype.$API=API
  },
  router,
  store
}).$mount('#app')
