<template>
  <div class="home">
    <Navbar />
    <div class="content">
      <h1>Welcome to the Home Page</h1>
      <p>This is the content of your home page.</p>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar
  }
}
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content {
  margin-top: 60px;
  text-align: center;
}
</style>
