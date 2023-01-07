import {reqCategoryList ,reqGetBannerList,reqFloorList}from '@/api/index.js'
const actions={
    async categoryList(context){
        const result=await reqCategoryList();
        if(result.code===200){
            context.commit('CATEGORYLIST',result.data)
        }
    },
    async GetBannerList(context){
        const result=await reqGetBannerList();
        if(result.code==200){
            context.commit('GETBANNERLIST',result.data)
        }
    },
    async reqFloorList(context){
        let result=await reqFloorList();
        if(result.code==200){
            context.commit('REQFLOORLIST',result.data)
        }
    }
}
const mutations={
    CATEGORYLIST(state,value){
        state.categoryList=value
    },
    GETBANNERLIST(state,value){
        state.GetBannerList=value
    },
    REQFLOORLIST(state,value){
        state.reqFloorList=value
    }
}
const state={
    categoryList:[],
    GetBannerList:[],
    reqFloorList:[]
}
const getters={}

export default{
    actions,mutations,state,getters
}