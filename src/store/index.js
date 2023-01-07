import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import home from './home/index.js'
import search from './search/index.js'
import detail from './detail/index'
import shopcart from './shopcart/index'
import user from './user/index'
import trade from './trade/index'

export default new Vuex.Store({
    modules:{
        home,search,detail,shopcart,user,trade
    }
})