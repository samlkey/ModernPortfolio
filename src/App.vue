<template>
  <div class="main" id="top" :class="mode" >
    <Header :mode="mode" @toggle="toggle"></Header>
    <div class="content" :class="{ 'no-overflow': $route.meta.hideOverflow }">
      <transition name="fade" mode="out-in">
        <RouterView></RouterView>
      </transition>
    </div>
  </div>
</template>

<script> 
  import { useRouter } from 'vue-router'
  import { onMounted } from 'vue'
  import Header from './components/Header.vue'
  import { BANNER_CONTENT } from './static/constants'
  document.title = "Sam Key's Resume"

  export default {
    name: 'App',
    data() {
      return {
        mode: 'dark'
      }
    },
    components: {
      Header
    },
    methods: {
      showConsoleBanner : async function(){
        let ascii = await import('raw-loader!./static/cat.txt').then(
          m => m.default
        )
        console.log(ascii + BANNER_CONTENT);
      },
      toggle () {
        if (this.mode === "dark"){
          this.mode = "light"
        }
        else{
          this.mode = "dark"
        }
      }
    },
    mounted(){ 
      this.showConsoleBanner(); 
      window.scrollTo(0, 0);
    },
    setup(){
      const router = useRouter()

      onMounted(() => {
        router.afterEach((to) => {
          document.body.style.overflow = to.meta.hideOverflow ? 'hidden' : 'auto'
        })
      })
    }
  }
</script>
<style src="./css/App.css" />
