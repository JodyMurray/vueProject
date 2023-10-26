<template>
  <div class="home">
    <Navbar />
    <div class="overlay">
      <div class="content">
        <h1>Welcome to the Home Page</h1>
        <p>This is the content of your home page.</p>
      </div>
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('src/assets/recipehome.jpeg'); 
  background-size: cover;
  background-position: center;
  height: 100vh; 
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.content {
  text-align: center;
  color: white;
}

</style>
