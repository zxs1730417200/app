import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import routes from './routes'
import store from '@/store'

let originPush=Vue.prototype.push;
let originReplace=Vue.prototype.replace;
Vue.prototype.push=function(localtion,resolve,reject){
    if(resolve&&reject){
        originPush.call(this,localtion,resolve,reject)
    }else{
        originPush.call(this,localtion,()=>{},()=>{})
    }
}
Vue.prototype.replace=function(localtion,resolve,reject){
    if(resolve&&reject){
        originReplace.call(this,localtion,resolve,reject)
    }else{
        originReplace.call(this,localtion,()=>{},()=>{})
    }
}

const router=new VueRouter({
    mode:'hash',
    routes,
    scrollBehavior() {
        // to, from, savedPosition
        // 始终滚动到顶部
        return { y: 0 }
      }
})

router.beforeEach(async (to,from,next)=>{
    let token=store.state.user.token
    let name=store.state.user.name
    if(token){
        if(to.path=='/login'){
            next('/home')
        }else{
            if(name){
                next()
            }else{
                try {
                    await store.dispatch('reqGetUserInfo')
                    next()
                } catch (error) {
                    await store.dispatch('goout')
                    console.log(from)
                    next('login')
                }
            }
        }
    }else{
        let loPath=to.path
        if(loPath.indexOf('/trade')!=-1||loPath.indexOf('/pay')!=-1||loPath.indexOf('/center')!=-1){
            next('/login?rediricet='+loPath)
        }else{
            next()
        }
    }
})

export default  router