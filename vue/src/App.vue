<template>
  <Navbar />
  <router-view />
</template>

<script>
import Home from '././components/Home.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Home,
    Navbar
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: auto;
  width: auto;
}
</style>
