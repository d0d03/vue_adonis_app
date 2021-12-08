<template>
    <Panel title="Projects" >
        <div
        class="project mb-2"
            v-for="project in projects"
            :key="project.id"
        >
        <v-layout row wrap>
            <v-flex xs9 class="text-xs-left">
                {{project.title}}
            </v-flex>
            <v-flex xs3>
                <v-icon>edit</v-icon>
            </v-flex>
        </v-layout>
        </div>
        <v-layout row wrap>
            <v-flex xs7>
                <v-text-field
                    placeholder="My project name..."
                    @input="setNewProjectName"
                    :value="newProjectName"
                ></v-text-field>
            </v-flex>
            <v-flex xs5>
                <v-btn dark class="mt-4" color="green" @click="createProject">
                    <v-icon class="mr-2">add_circle </v-icon>
                    Create</v-btn>
            </v-flex>
        </v-layout>
    </Panel>
</template>

<script>
import {mapMutations, mapState, mapActions} from 'vuex';
export default {

    mounted(){
        this.fetchProjects();
    },
    computed:{
        ...mapState('projects',[
            'newProjectName',
            'projects',
        ]),
    },
    methods:{
        ...mapMutations('projects',[
            'setNewProjectName',
        ]),
        ...mapActions('projects',[
            'createProject',
            'fetchProjects',
        ]),
    },
}
</script>

<style>
.project{
    font: size 24px;
}
</style>