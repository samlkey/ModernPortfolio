<template>
    <div id="languageScroll">
        <div class="mainlang-wrapper">
            <div class="lang-left">
                <h1 class="lang-left-title">Experience,</h1>
            </div>
            <div class="lang-right">
                <h1>Language,</h1>
                <div class="lang-block">
                    <LangBlock language="JavaScript" url="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"/>
                    <LangBlock language="C#" url="https://img.icons8.com/color/48/c-sharp-logo.png"/>
                    <LangBlock language="Python" url="https://img.icons8.com/color/48/python--v1.png"/>          
                </div>
                
                <div class="lang-block">
                    <LangBlock language="React" url="https://img.icons8.com/office/40/react.png"/>
                    <LangBlock language="JS" url="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"/>
                    <LangBlock language="JS" url="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"/>           
                </div>

                <h1>Frameworks,</h1>
                <div class="lang-block">
                    <LangBlock language="JS" url="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"/>
                    <LangBlock language="JS" url="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"/>
                    <LangBlock language="JS" url="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"/>           
                </div>

                <h1>Software,</h1>

                <div class="lang-block">
                    <LangBlock language="JS" url="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"/>
                    <LangBlock language="JS" url="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"/>
                    <LangBlock language="JS" url="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"/>           
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import LangBlock from '../shared/LangBlock.vue';

export default{
    name: "Languages",
    components:{
        LangBlock
    }
}
</script>
<style src="../css/Languages.css" />