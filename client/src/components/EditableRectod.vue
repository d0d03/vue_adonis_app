<template>
        <v-layout row wrap>
            <v-flex xs9 class="text-left">
                <slot></slot>
                <span 
                    v-if="!isEditMode"
                    @click="$emit('onClick')"
                >
                    {{title}}
                </span>
                <v-text-field 
                    autofocus
                    v-if="isEditMode"
                    :value="title"
                    @keyup.enter="$emit('onSave')"
                    @input="$emit('onInput',$event)">
                </v-text-field>
            </v-flex>
            <v-flex xs3>
                <v-icon @click="$emit('onEdit')" v-if="!isEditMode">
                    edit
                </v-icon>
                <v-icon @click="$emit('onSave')" v-if="isEditMode">
                    check
                </v-icon>
                <v-icon @click="$emit('onDelete')" class="ml-2 danger" color="red">
                    delete
                </v-icon>
            </v-flex>
        </v-layout>
</template>

<script>
export default {
    props:[
        'isEditMode',
        'title',
        'record',
    ],
}
</script>

<style>

</style>