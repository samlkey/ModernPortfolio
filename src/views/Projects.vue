<template>
    <div class="projects-content">
        <div class="project-wrapper">
            <div class="projects-title">
                <h1>/Projects</h1>
                <p>Projects I have completed in the past.</p>
            </div>

            <div class="proj-left">
                <a target="_blank" href="https://www.linkedin.com/in/samkey726/"> 
                    <div class="img-holder">
                        <img src="@/assets/WordleCap.png">
                    </div>
                </a>

                <div class="proj-name">
                    <h1>Wordle Clone App</h1>
                    <p>
                        A copy of the popular game "Wordle" created using React.
                    </p>

                    <div class="proj-link">
                        <a target="_blank" href="https://www.linkedin.com/in/samkey726/"> 
                            <div>
                                <p>View App</p>
                            </div>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/samkey726/"> 
                            <div>
                                <p>Learn More</p>
                            </div>
                        </a>
                    </div>
                </div>  
            </div>

            <div class="proj-left">
                <a target="_blank" href="https://www.linkedin.com/in/samkey726/"> 
                    <div class="img-holder">
                        <img src="@/assets/pyClean.png">
                    </div>
                </a>

                <div class="proj-name">
                    <h1>PyClean</h1>
                    <p>
                        A python utility program used to clean unwanted files
                        using TKinter.
                    </p>

                    <div class="proj-link">
                        <a target="_blank" href="https://www.linkedin.com/in/samkey726/"> 
                            <div>
                                <p>Learn More</p>
                            </div>
                        </a>
                    </div>
                </div>  
            </div>




        </div>
    </div>
    
    <Footer @pageChange="handlePageChange"></Footer>
</template>

<script>
import Footer from '../components/Footer.vue';

export default {
    name: "Projects",
    components: {
        Footer
    }
}
</script>

<style src="../css/ProjectsView.css" />
