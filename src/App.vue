<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer v-show="ishow" />
  </div>
</template>

<script>
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  computed:{
    ishow(){
      return  this.$route.meta.show
    }
  },
  mounted(){
    this.$store.dispatch('categoryList')
  }
};
</script>

<style>
</style>
