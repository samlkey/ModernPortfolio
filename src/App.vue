<template>
  <div class="main" id="top">
    <Header></Header>
    <div class="content">
      <Home></Home>
      <AboutMe></AboutMe>
      <Languages></Languages>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  </div>
  <ScrollBar></ScrollBar>
</template>

<script> 
  import Footer from './components/Footer.vue';
  import Header from './components/Header.vue';
  import Home from './components/Home.vue'
  import Contact from './components/Contact.vue';
  import AboutMe from './components/AboutMe.vue';
  import ScrollBar from './components/ScrollBar.vue';
  import Languages from './components/Languages.vue';
  import Projects from './components/Projects.vue'
  import { BANNER_CONTENT } from './static/constants'

  document.title = "Sam Key's Resume"

  export default {
    name: 'App',
    components: {
      Header,
      Footer,
      Home,
      Contact,
      AboutMe,
      ScrollBar,
      Languages,
      Projects
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
