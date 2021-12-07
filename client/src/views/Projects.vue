<template>
    <v-container>
        <v-layout>
            <v-flex xs4>
                <ProjectsComponent></ProjectsComponent>
            </v-flex>

             <v-flex xs8 class="pl-4">
                <Panel title="Tasks">
                    <h1>Testing</h1>
                </Panel>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import ProjectsComponent from '../components/ProjectsComponent.vue';
export default {
    components:{
        ProjectsComponent
    },
};
</script>

<style>

</style>