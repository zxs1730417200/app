<template>
  <div class="swiper-container" id="floor1Swiper">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in list" :key="index">
            <img :src="item.imgUrl">
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
</div>
</template>

<script>
import Swiper from 'swiper'
export default {
    name:"CarOusel",
    props:['list'],
    watch:{
        list:{
            deep:true,
            immediate:true,
            handler(){
                this.$nextTick(()=>{
                    new Swiper ('.swiper-container', {
                        loop: true, // 循环模式选项
                        
                        // 如果需要分页器
                        pagination: {
                        el: '.swiper-pagination',
                        paginationClickable :true,
                        },
                        
                        // 如果需要前进后退按钮
                        navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        },
                        
                        // 如果需要滚动条
                        scrollbar: {
                        el: '.swiper-scrollbar',
                        },
                    }) 
                })
            }
        }
    }
}
</script>

<style>

</style>