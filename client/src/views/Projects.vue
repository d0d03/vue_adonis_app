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