import {reqFindUserAddressList,reqOrderTrade} from '@/api'

const actions={
    async reqFindUserAddressList({commit}){
        let result=await reqFindUserAddressList()
        if(result.code==200){
            commit('REQFINDUSERADDRESSLIST',result.data)
        }
    },
    async reqOrderTrade({commit}){
        let result=await reqOrderTrade()
        if(result.code==200){
            commit('REQORDERTRADE',result.data)
        }
    }
}
const mutations={
    REQFINDUSERADDRESSLIST(state,value){
        state.reqFindUserAddressList=value
    },
    REQORDERTRADE(state,value){
        state.reqOrderTrade=value
    }
}
const state={
    reqFindUserAddressList:[],
    reqOrderTrade:{}
}
const getters={}

export default{
    actions,mutations,state,getters
}
