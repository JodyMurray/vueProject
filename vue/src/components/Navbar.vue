<template>
  <nav class="navbar">
    <img class="logo" src="../assets/logo1.png" alt="Logo" />
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Sign In</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
.logo {
  height: 35px;
  margin-left: 15px;
  margin-top: 8px;
}
.navbar {
  background-color: rgba(255, 255, 255, 0.1); /* Adjust the background color and opacity */
  backdrop-filter: blur(10px); /* Add a backdrop filter for a frosted glass effect */
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.1); /* Add a border on top for separation */
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
