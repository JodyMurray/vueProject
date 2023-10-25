<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo1.png" />
    <Home />
  </div>
</template>

<script>
import Home from './components/Home.vue'; // Import the Home component

export default {
  name: 'App',
  components: {
    Home, // Register the Home component
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
