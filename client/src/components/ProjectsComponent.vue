<template>
    <Panel title="Projects" >
         <div
            class="project mt-2"
            v-for="project in projects"
            :key="project.id"
        >
            <EditableRecord
                :class="highlighCurrent(project, currentProject)"
                :isEditMode="project.isEditMode"
                :title="project.title"
                @onSave="saveProject(project)"
                @onDelete="deleteProject(project)"
                @onInput="setProjectTitle({project, title:$event})"
                @onEdit="setEditMode(project)"
                @onClick="projectClicked(project)"
                
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
            'currentProject',
        ]),
    },
    methods:{
        projectClicked(project){
           this.setCurrentProject(project);
           this.fetchTasksForProject(project); 
        },
        ...mapMutations('projects',[
            'setNewProjectName',
            'setEditMode',
            'setProjectTitle',
            'setCurrentProject',
        ]),
        ...mapActions('projects',[
            'createProject',
            'fetchProjects',
            'saveProject',
            'deleteProject',
        ]),
        ...mapActions('tasks',[
            'fetchTasksForProject',
        ]),
        highlighCurrent(project, currentProject){
           if(project.id === currentProject.id){
               return "currentlySelected";
           }
           return "";
        }
    },
}
</script>

<style>
.project{
    font-size: 24px;
    padding: 10px;
    cursor: pointer;
}

.icon{
    cursor: pointer;
}

.v-icon:hover {
    color:#333;
}

.currentlySelected{
    box-shadow: 0px 0px 4px 3px #157800;
}

</style>