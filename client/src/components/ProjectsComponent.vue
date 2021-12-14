<template>
    <Panel title="Projects" >
         <div
            class="project mt-2"
            v-for="project in projects"
            :key="project.id"
        >
            <EditableRecord
                :isEditMode="project.isEditMode"
                :title="project.title"
                @onSave="saveProject(project)"
                @onDelete="deleteProject(project)"
                @onInput="setProjectTitle({project, title:$event})"
                @onEdit="setEditMode(project)"
            />
         </div>
        <CreateRecord 
            placeholder="My project name..." 
            :value="newProjectName" 
            @onInput="setNewProjectName" 
            @create="createProject"
        />
    </Panel>
</template>

<script>
import {mapMutations, mapState, mapActions} from 'vuex';
import CreateRecord from './CreateRecord.vue';
import EditableRecord from './EditableRectod.vue';

export default {

    mounted(){
        this.fetchProjects();
    },
    components:{
        CreateRecord,
        EditableRecord
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