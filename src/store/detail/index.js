import {reqGoodInfo,addOrUpdataShopCart} from '@/api/index.js'
import {getnanoid} from '@/uitls/index'
const actions={
    async reqGoodInfo(context,skuid){
        let result=await reqGoodInfo(skuid)
        if(result.code==200){
            context.commit('REQGOODINFO',result.data)
        }
    },
    async addOrUpdataShopCart({commit},value){
        let result=await addOrUpdataShopCart(value.skuId,value.skuNum)
        if(result.code==200){
            return "ok"
        }else{
            console.log(commit)
            return Promise.reject(new Error('faile'))
        }
    }
}
const mutations={
    REQGOODINFO(state,value){
        state.reqGoodInfo=value
    },
    // ADDORUPDATASHOPCART(state,value){
    //     console.log(state,value)
    // }
}
const state={
    reqGoodInfo:{},
    nanoid:getnanoid()
}
const getters={
    categoryView(state){
        return state.reqGoodInfo.categoryView||{}
    },
    skuInfo(state){
        return state.reqGoodInfo.skuInfo||{}
    },
    spuSaleAttrList(state){
        return state.reqGoodInfo.spuSaleAttrList||[]
    }
}
export default{
    actions,mutations,state,getters
}