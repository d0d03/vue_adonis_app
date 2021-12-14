<template>
    <Panel title="Tasks">
        <div
            class="tasks mt-2"
            v-for="task in tasks"
            :key="task.id"
        >
            <EditableRecord
                :isEditMode="task.isEditMode"
                :title="task.description"
                @onInput="setTaskDescription({ task, description:$event })"
                @onClick="taskClicked(task)"
                @onEdit="setEditMode(task)"
                @onSave="saveTask(task)"
                @onDelete="deleteTask(task)"
            />
        </div>
        <CreateRecord
            placeholder="I need to..."
            :value="newTaskName"
            @onInput="setNewTaskName"
            @create="createTask"
        />

    </Panel>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';

import CreateRecord from './CreateRecord.vue';
import EditableRecord from './EditableRectod.vue';

export default {
    computed:{
        ...mapState('tasks',[
            'tasks',
            'newTaskName'
        ]),
    },
    components:{
        CreateRecord,
        EditableRecord,
    },
    methods:{
        ...mapActions('tasks',[
          'createTask',
          'deleteTask',
          'saveTask',
          
        ]),
        ...mapMutations('tasks',[
            'setNewTaskName',
            'setTaskDescription',
            'setEditMode',
        ]),
    },
};
</script>

<style>
.task{
    font-size: 18px;
}
</style>