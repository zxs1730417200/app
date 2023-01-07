// // import Home from '@/pages/Home'
// import Login from '@/pages/Login'
// import Register from '@/pages/Register'
// import Search from '@/pages/Search'
// import Detail from '@/pages/Detail/index.vue'
// import AddCartSuccess from '@/pages/AddCartSuccess'
// import ShopCart from '@/pages/ShopCart'
// import Trade from '@/pages/Trade'
// import Pay from '@/pages/Pay'
// import PaySuccess from '@/pages/PaySuccess'
// // import Center from '@/pages/Center'
// import Myorder from '@/pages/Center/Myorder'
// import Grouporder from '@/pages/Center/Grouporder'
export default[
    {
        path:'/center',
        name:'center',
        component:()=>import("@/pages/Center"),
        meta:{show:true},
        children:[
            {
                path:'grouporder',
                component:()=>import("@/pages/Center/Grouporder")
            },
            {
                path:'myorder',
                component:()=>import("@/pages/Center/Myorder")
            },
            {
                path:'/center',
                redirect:'/center/myorder'
            }
        ]
    },
    {
        path:'/paysuccess',
        name:'paysuccess',
        component:()=>import("@/pages/PaySuccess"),
        meta:{show:true}
    },
    {
        path:'/pay',
        name:'pay',
        component:()=>import("@/pages/Pay"),
        meta:{show:true},
        beforeEnter:(to, from, next)=>{
            if(from.path=="/trade"){
                next()
            }else{
                next(false)
                console.log(to)
            }
        }
    },
    {
        path:'/trade',
        name:'trade',
        component:()=>import("@/pages/Trade"),
        meta:{show:true},
        beforeEnter: (to, from, next) => {
            if(from.path=="/shopcart"){
                next()
            }else{
                next(false)
                console.log(to)
            }
        }
    },
    {
        path:'/shopcart',
        name:'shopcart',
        component:()=>import("@/pages/ShopCart"),
        meta:{show:true}
    },
    {
        path:'/addcartsuccess',
        name:'addcartsuccess',
        component:()=>import("@/pages/AddCartSuccess"),
        meta:{show:true}
    },
    {
        path:'/detail/:skuid',
        name:'detail',
        component:()=>import("@/pages/Detail/index.vue"),
        meta:{show:true}
    },
    {
        path:'/home',
        component:()=>import("@/pages/Home"),
        meta:{show:true}
    },
    {
        path:'/login',
        component:()=>import("@/pages/Login"),
        meta:{show:false}
    },
    {
        path:'/register',
        component:()=>import("@/pages/Register"),
        meta:{show:false}
    },
    {
        path:'/search/:keyword?',
        name:"search",
        component:()=>import("@/pages/Search"),
        meta:{show:true},
        props($route){
            return{keyword:$route.query.keyword}
        }
    },
    {
        path:"*",
        redirect:"/home"
    }
]