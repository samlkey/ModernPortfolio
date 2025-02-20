<template>
    <Header></Header>
  <div class="main" id="top">
    <div class="content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script> 
  import Header from './components/Header.vue'
  import { BANNER_CONTENT } from './static/constants'
  document.title = "Sam Key's Resume"

  export default {
    name: 'App',
    components: {
      Header
    },
    methods: {
      showConsoleBanner : async function(){
        let ascii = await import('raw-loader!./static/cat.txt').then(
          m => m.default
        )
        console.log(ascii + BANNER_CONTENT);
      }
    },
    mounted(){ 
      this.showConsoleBanner(); 
      window.scrollTo(0, 0);
    }
  }
</script>
<style src="./css/App.css" />
