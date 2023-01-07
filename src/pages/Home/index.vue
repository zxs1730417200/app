<template>
  <div>
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor v-for="floor in reqFloorList" :key="floor.id" :list="floor"/>
    <Brand/>
  </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer/index.vue'
import Brand from '@/pages/Home/Brand/index.vue'
import Floor from '@/pages/Home/Floor/index.vue'
import Like from '@/pages/Home/Like/index.vue'
import Rank from '@/pages/Home/Rank/index.vue'
import Recommend from '@/pages/Home/Recommend/index.vue'
import {mapState} from 'vuex'
export default {
    name:"HoMe",
    components:{
      ListContainer,Brand,Floor,Like,Rank,Recommend
    },
    computed:{
      ...mapState({reqFloorList:state=>state.home.reqFloorList})
    },
    mounted(){
      this.$store.dispatch('reqFloorList')
      this.$store.dispatch('reqGetUserInfo')
    }
}
</script>

<style>

</style>