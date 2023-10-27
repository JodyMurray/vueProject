<template>
  <nav class="navbar">
    <img class="logo" src="../assets/logo1.png" alt="Logo" />
    <ul>
      <router-link to="/" class="">Home</router-link>
      <router-link to="/signin">Sign In</router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style>
.logo {
  height: 35px;
  margin-left: 15px;
  margin-top: 8px;
}
.navbar {
  background-color: rgba(20, 20, 20, 0.8);
  backdrop-filter: opacity(10px);
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 2;
}

.navbar ul {
  list-style-type: none;
  margin-top: 5px;
  padding: 0;
  display: flex;
}

.navbar li {
  padding: 10px;
}

.navbar a {
  color: white;
  text-decoration: none;
  font-weight: bold; /* Make the text more prominent */
}

/* Styles for the hover effect */
.navbar a:hover {
  text-decoration: underline;
  color: #ff7400; /* Change the text color on hover to a contrasting color */
}
</style>
