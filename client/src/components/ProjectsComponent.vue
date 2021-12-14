<template>
    <Panel title="Projects" >
        <div
        class="project mt-2"
            v-for="project in projects"
            :key="project.id"
        >
        <v-layout row wrap>
            <v-flex xs9 class="text-left">
                <span v-if="!project.isEditMode">
                    {{project.title}}
                </span>
                <v-text-field 
                    autofocus
                    v-if="project.isEditMode"
                    :value="project.title"
                    @keyup.enter="saveProject(project)"
                    @input="setProjectTitle({project, title:$event})">
                </v-text-field>
            </v-flex>
            <v-flex xs3>
                <v-icon @click="setEditMode(project)" v-if="!project.isEditMode">
                    edit
                </v-icon>
                <v-icon @click="saveProject(project)" v-if="project.isEditMode">
                    check
                </v-icon>
                <v-icon @click="deleteProject(project)" class="ml-2 danger" color="red">
                    delete
                </v-icon>
            </v-flex>
        </v-layout>
        </div>
        <v-layout row wrap class="mt-4">
            <v-flex xs8>
                <v-text-field
                    placeholder="My project name..."
                    @input="setNewProjectName"
                    @keyup.enter="createProject"
                    :value="newProjectName"
                ></v-text-field>
            </v-flex>
            <v-flex xs4>
                <v-btn dark class="mt-4" color="green" @click="createProject">
                    <v-icon>add_circle</v-icon>
                    Create
                </v-btn>
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
            'setEditMode',
            'unsetEditMode',
            'setProjectTitle',
            'removeProject',
        ]),
        ...mapActions('projects',[
            'createProject',
            'fetchProjects',
            'saveProject',
            'deleteProject',
        ]),
    },
}
</script>

<style>
.project{
    font-size: 24px;
    padding: 10px;
}

.icon{
    cursor: pointer;
}

.v-icon:hover {
    color:#333;
}


</style>