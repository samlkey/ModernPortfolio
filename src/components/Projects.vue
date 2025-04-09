<template>
    <div id="projectScroll">
        <div class="projWrapper">
            <div class="projContent">
                <div class="projLeft">
                    <div class="projLeftContent">
                        <h1 id="scale-in-ver-bottom">View my Projects,</h1>
                        <p id="scale-in-ver-bottom">
                            View the different projects by clicking the button below.
                        </p>
                        <button v-on:click="projectsRoute()">View</button>
                    </div>
                </div>
                <div class="projRight">
                    <div class="projRightContent">
                        <h1 id="scale-in-ver-bottom">GitHub,</h1>
                        <p id="scale-in-ver-bottom">
                            Take a look at my commits and repositories on GitHub.
                        </p>
                        <a target="_blank" href="https://github.com/samlkey">
                            <button>View</button>
                        </a>
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