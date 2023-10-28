<template>
  <div class="sign-in-page">
    <h2>Sign In</h2>
    <form @submit.prevent="submitForm">
      <label for="name">Name:</label>
      <input type="name" id="name" v-model="name" required />
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required />
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required />
      <button type="submit">Sign In</button>
    </form>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
export default {
  name: 'SignIn',
  data() {
    return {
      email: '',
      password: ''
    }
    components: {
      Navbar
    }
  }
}
</script>

<style>
/* Styles specific to the sign-in page */
.sign-in-page {
  max-width: 300px;
  margin: auto;
  padding: 20px;
  color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('src/assets/plate.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  height: 80vh;
  width: 80vh;
}
.sign-in-page h2 {
  text-decoration: underline;
  margin-top: 8%;
  padding: 10px;
}

.sign-in-page form {
  margin-top: 20px;
}

.sign-in-page input {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 5px;
  height: 25px;
}

.sign-in-page button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
}

.sign-in-page button:hover {
  background-color: #45a049;
}
</style>
