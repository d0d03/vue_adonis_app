<template>
  <v-layout row wrap class="mt-4">
            <v-flex xs8>
                <v-text-field
                    :placeholder="placeholder"
                    @input="$emit('onInput', $event)"
                    @keyup.enter="$emit('create')"
                    :value="value"
                ></v-text-field>
            </v-flex>
            <v-flex xs4 class="text-right">
                <v-btn dark class="mt-4" color="green" @click="$emit('create')">
                    <v-icon>add_circle</v-icon>
                    Create
                </v-btn>
            </v-flex>
        </v-layout>   
</template>

<script>
export default {
    props: [
        'placeholder',
        'value',
    ],
}
</script>

<style>

</style>