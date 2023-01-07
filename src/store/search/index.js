import {reqGetSearchInfo} from '@/api/index'
const actions={
    async reqGetSearchInfo(context,value={}){
        let result=await reqGetSearchInfo(value)
        if(result.code==200){
            context.commit('REQGETSEARCHINFO',result.data)
        }
    }
}
const mutations={
    REQGETSEARCHINFO(state,value){
        state.reqGetSearchInfo=value
    }
}
const state={
    reqGetSearchInfo:{}
}
const getters={
    attrsList(state){
        return state.reqGetSearchInfo.attrsList
    },
    goodsList(state){
        return state.reqGetSearchInfo.goodsList ||[]
    },
    trademarkList(state){
        return state.reqGetSearchInfo.trademarkList
    }
}

export default{
    actions,mutations,state,getters
}