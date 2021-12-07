<template>
    <Panel title="Projects">
        <v-layout row wrap>
            <v-felx xs8>
                <v-text-field
                    placeholder="My project name..."
                ></v-text-field>
            </v-felx>
            <v-felx xs4>
                <v-btn dark class="mt-4" color="green">
                    <v-icon class="mr-2">add_circle </v-icon>
                    Create</v-btn>
            </v-felx>
        </v-layout>
    </Panel>
</template>

<script>
export default {
    
}
</script>