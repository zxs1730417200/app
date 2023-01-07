import {reqGetCode,reqFinishRegister,reqLogin,reqGetUserInfo,reqLogOut} from '@/api/index'
import {setToken,getToken,removeToken} from '@/uitls/changetoken.js'
const actions={
    async getCode({commit},phone){
        let result=await reqGetCode(phone)
        if(result.code==200){
            commit('GETCODE',result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error("faile"))
        }
    },
    async finishregister({commit},data){
        let result=await reqFinishRegister(data)
        if(result.code==200){
            alert('恭喜您！注册成功')
            return 'ok'
        }else{
            console.log(commit)
            return Promise.reject(new Error("faile"))
        }
    },
    async Loginstate({commit},data){
        let result=await reqLogin(data)
        if(result.code==200){
            commit('LOGINSTATE',result.data)
            setToken(result.data.token)
            return 'ok'
        }else{
            return Promise.reject(new Error("faile"))
        }
    },
    async reqGetUserInfo({commit}){
        let result=await reqGetUserInfo()
        if(result.code==200){
            commit('REQGETUSERINFO',result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error("faile"))
        }
    },
    async goout({commit}){
        let result=await reqLogOut()
        if(result.code==200){
            commit('GOOUT')
            return 'ok'
        }else{
            return Promise.reject(new Error("faile"))
        }
    }
}
const mutations={
    GETCODE(state,value){
        state.code=value
    },
    LOGINSTATE(state,value){
        state.token=value.token
    },
    REQGETUSERINFO(state,value){
        state.name=value.name
    },
    GOOUT(state){
        state.token=''
        state.name=''
        removeToken()
    }
}
const state={
    code:'',
    token:getToken(),
    name:''
}
const getters={}
export default{
    actions,mutations,state,getters
}