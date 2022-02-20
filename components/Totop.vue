<template>
  <button v-show="show" class="btn btn-primary br-curve totop btn-lg shadow" @click="scrollToTop()">
      <i class="fas fa-angle-up"></i>
  </button>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data(){
        return {
            show: false
        }
    },
    methods: {
        scrollToTop(){
            if(process.browser){
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            }
        },
        onScroll(){
            if(process.browser){
               if(window.scrollY > 2000){
                   this.show = true
               }else{
                   this.show =false;
               }
            }

            // console.log(this.show, window.scrollY)
        }
    },
    mounted(){
        window.addEventListener('scroll', this.onScroll)
    }
})
</script>
<style scoped>
    .totop{
        position: fixed;
        z-index: 3000;
        bottom: 10%;
        right: 5%;
        transition: all 0.5s;
    }
</style>
