<template>
    <div class="projects-content">
        <div class="projects-title">
            <h1>/Projects</h1>
        </div>

        <div class="projectblock-container">
            <ProjectBlock projectName="WORDLE CLONE" :imageUrl="projectImage" url="https://delightful-forest-0934dfd1e.4.azurestaticapps.net/"></ProjectBlock>
        </div>
    </div>
</template>

<script>
import projectImage from '@/assets/Wordle_logo.png';
import ProjectBlock from '../shared/ProjectBlock.vue';

export default {
    name: "Projects",
    components: {
        ProjectBlock
    },
    data() {
        return {
            projectImage // Declare projectImage in data
        };
    }
}
</script>

<style src="../css/ProjectsView.css" />
