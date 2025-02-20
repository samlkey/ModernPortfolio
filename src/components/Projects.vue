<template>
    <div id="projectScroll">
        <div class="projWrapper">
            <div class="projContent">
                <div class="projLeft">
                    <div class="projLeftContent">
                        <h1 id="scale-in-ver-bottom">View my Projects,</h1>
                        <p id="scale-in-ver-bottom">
                            Blah. Blah. Blah.Blah. Blah. Blah.Blah. Blah. Blah.Blah. Blah. Blah.
                            Blah. Blah. Blah.
                        </p>
                        <button v-on:click="projectsRoute()">Hi</button>
                    </div>
                </div>
                <div class="projRight">
                    <div class="projRightContent">
                        <h1 id="scale-in-ver-bottom">View my Projects,</h1>
                        <p id="scale-in-ver-bottom">
                            Blah. Blah. Blah.Blah. Blah. Blah.Blah. Blah. Blah.Blah. Blah. Blah.
                            Blah. Blah. Blah.
                        </p>
                        <button>Hi!</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    export default {
        name: "Projects",
        methods : {
            projectsRoute : function(){
                this.$router.push('/projects')
            }
        }
    }
</script>
<style src="../css/Projects.css"></style>