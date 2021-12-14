<template>
    <v-container>
        <v-layout>
            <v-flex xs4>
                <ProjectsComponent></ProjectsComponent>
            </v-flex>

             <v-flex xs8 class="pl-4" v-if="currentProject">
                 <TasksComponent></TasksComponent>
            </v-flex>
        </v-layout>
        <br/>
        <Panel title="Project summary">
            <v-layout>
                <v-flex xs6>
                    <p class="pt-2">Project status: </p>
                    <p class="pt-2">Date of creation: </p>
                    <p> Last change: </p>
                </v-flex> 
                <v-flex xs6>
                        <h1>
                            {{currentProject.is_active ? "ACTIVE" : "INACTIVE"}}
                        </h1>
                        <h1> {{currentProject.created_at}}</h1>
                        <h1> {{currentProject.updated_at}}</h1>
                </v-flex>  
            </v-layout>
        </Panel>
    </v-container>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

import router from '../router';
import ProjectsComponent from '../components/ProjectsComponent.vue';
import TasksComponent from '../components/TasksComponent.vue';

export default {
    components:{
        ProjectsComponent,
        TasksComponent
    },
    mounted(){
        if(!this.isLoggedIn){
            return router.push('/login');
        }
    },
    computed:{
        ...mapState('projects',[
            'currentProject',
        ]),
        ...mapGetters('authentication',[
            'isLoggedIn',
        ]),
    },
};
</script>

<style>

</style>