<template>
  <nav class="navbar">
    <img class="logo" src="/./././src/assets/logo1.png" alt="Logo" />
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
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
  height: 40px;
  margin-top: 13px;
}
.navbar {
  background-color: #ff7400;
  overflow: hidden;
}

.navbar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.navbar li {
  padding: 10px;
}

.navbar a {
  color: white;
  text-decoration: none;
}

/* Styles for the hover effect */
.navbar a:hover {
  text-decoration: underline;
}
</style>
