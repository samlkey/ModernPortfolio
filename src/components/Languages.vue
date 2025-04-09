<template>
    <div id="languageScroll">
        <div class="mainlang-wrapper">
            <div class="lang-title">
                <h1>Experience</h1>
            </div>

            <p class="langflavour">
                Proven ability to lead projects, develop business-critical systems, and solve complex technical challenges. Always eager to learn and apply cutting-edge technologies to enhance efficiency and performance.
            </p>

            <div class="langwrap">
                <div class="lang-right">
                    <h1>Language</h1>
                    <div class="lang-block">
                        <LangBlock language="JavaScript" url="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"/>
                        <LangBlock language="C#" url="https://img.icons8.com/color/48/c-sharp-logo.png"/>
                        <LangBlock language="Python" url="https://img.icons8.com/color/48/python--v1.png"/>          
                    </div>

                    <div class="lang-block">
                        <LangBlock language="C++" url="https://img.icons8.com/color/48/c-plus-plus-logo.png"/>
                        <LangBlock language="HTML" url="https://img.icons8.com/color/48/html-5--v1.png"/>
                        <LangBlock language="Java" url="https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png"/>           
                    </div>
                </div>

                <div class="lang-right">
                    <h1>Software</h1>
                    <div class="lang-block">
                        <LangBlock language="Blazor" url="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"/>
                        <LangBlock language="ASP.NET" url="https://img.icons8.com/color/48/c-sharp-logo.png"/>
                        <LangBlock language=".NET" url="https://img.icons8.com/color/48/net-framework.png"/>          
                    </div>

                    <div class="lang-block">
                        <LangBlock language="T-SQL" url="https://img.icons8.com/color/48/microsoft-sql-server.png"/>
                        <LangBlock language="MongoDB" url="https://img.icons8.com/color/48/mongodb.png"/>
                        <LangBlock language="PostgreSQL" url="https://img.icons8.com/plasticine/100/postgreesql.png"/>           
                    </div>
                </div>

                <div class="lang-right">
                    <h1>Frameworks</h1>
                    <div class="lang-block">
                        <LangBlock language="Express.js" url="https://img.icons8.com/office/40/express-js.png"/>
                        <LangBlock language="jQuery" url="https://img.icons8.com/deco/48/jquery.png"/>
                        <LangBlock language="Flask" url="https://img.icons8.com/nolan/64/flask.png"/>          
                    </div>

                    <div class="lang-block">
                        <LangBlock language="React" url="https://img.icons8.com/office/40/react.png"/>
                        <LangBlock language="Bootstrap" url="https://img.icons8.com/color/48/bootstrap--v2.png"/>
                        <LangBlock language="Vue" url="https://img.icons8.com/color/48/vue-js.png"/>           
                    </div>
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