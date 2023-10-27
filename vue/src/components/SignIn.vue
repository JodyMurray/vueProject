<template>
  <div class="sign-in">
    <h2>Sign In</h2>
    <p>HELLO</p>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
export default {
  name: 'SignIn',
  components: {
    Navbar
  }
}
</script>

<style>
.sign-in {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  color: white;
}

.sign-in input {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}

.error-message {
  color: red;
}
</style>
