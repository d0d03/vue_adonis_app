<template>
<v-app>
  <v-app-bar color="green" dark fixed>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-app-bar-title>VUE TODO</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-app-bar-items class="hidden-sm-and-down">
      <v-btn plain>Link one</v-btn>
    </v-app-bar-items>
  </v-app-bar>
  <div id="app">
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
