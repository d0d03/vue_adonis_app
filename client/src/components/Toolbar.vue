<template>
    <v-app-bar color="green" dark fixed>
        <v-app-bar-title class="mr-4">VUE TODO</v-app-bar-title>
        <v-toolbar-items>
            <v-btn plain>
                <v-icon class="pr-2">playlist_add_check</v-icon>
                Projects
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn plain  to="/register">
                <v-icon class="pr-2">account_box</v-icon>
                Register
            </v-btn>
            <v-btn plain>
                <v-icon class="pr-2">fingerprint</v-icon>
                Login
            </v-btn>
            <v-btn plain>
                <v-icon class="pr-2">exit_to_app</v-icon>
                Logout
            </v-btn>
            <v-btn plain>
                <v-icon class="pr-2">ondemand_video</v-icon>
                How this was made
            </v-btn>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
export default {
    
}
</script>

<style>

</style>