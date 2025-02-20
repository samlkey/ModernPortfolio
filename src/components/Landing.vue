<template>
    <div class="main" id="top">
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
    import Footer from './Footer.vue';
    import Home from './Home.vue'
    import Contact from './Contact.vue';
    import AboutMe from './AboutMe.vue';
    import ScrollBar from './ScrollBar.vue';
    import Languages from './Languages.vue';
    import Projects from './Projects.vue'
    import { BANNER_CONTENT } from '../static/constants'
  
    document.title = "Sam Key's Resume"
  
    export default {
      name: 'App',
      components: {
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
          let ascii = await import('raw-loader!../static/cat.txt').then(
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
  <style src="../css/App.css" />
  