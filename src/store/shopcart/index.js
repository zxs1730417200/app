import {reqCartList,reqDeleteCart,reqisChecked}from '@/api/index'
const actions={
    async reqCartList({commit}){
        let result=await reqCartList()
        if(result.code==200){
            commit('REQCARTLIST',result.data)
        }
    },
    async reqDeleteCart({commit},skuId){
        let result=await reqDeleteCart(skuId)
        if(result.code==200){
            return "ok"
        }else{
            console.log(commit)
            return Promise.reject(new Error("faile"))
        }
    },
    async reqisChecked({commit},value){
        let result=await reqisChecked(value.skuId,value.isChecked)
        if(result.code==200){
            return "ok"
        }else{
            console.log(commit)
            return Promise.reject(new Error("faile"))
        }
    },
    deleteallproduct(context){
        let PromiseAll=[]
        context.getters.cartList.cartInfoList.forEach(obj => {
            let promise=context.dispatch('reqDeleteCart',obj.skuId)
            PromiseAll.push(promise)
        });
        return Promise.all(PromiseAll)
    },
    isallcheckbox(context,value){
        let PromiseAll=[]
        context.state.reqCartList[0].cartInfoList.forEach(obj=>{
            let result=context.dispatch('reqisChecked',{skuId:obj.skuId,isChecked:value})
            PromiseAll.push(result)
        })
        return Promise.all(PromiseAll)
    }
}
const mutations={
    REQCARTLIST(state,value){
        state.reqCartList=value
    }
}
const state={
    reqCartList:[]
}
const getters={
    cartList(state){
        return state.reqCartList[0]||[]
    }
}
export default{
    actions,mutations,state,getters
} 