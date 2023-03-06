<template>
<header class="header" id="header">
  <router-link
  :to="{ name: 'Home'}"
  class="logo">
  <img src="../assets/img/svg/vueschool-logo.svg">
  </router-link>

  <!-- use .navbar-open to open nav -->
  <nav class="navbar">
    <ul>
      <li class="navbar-user">
          <a href="#">
              <img class="avatar-small" src="../assets/img/jpg/mannar-hielal-400X400.jpg" alt="">
              <span>
                  Mannar Hielal
                  <img src="../assets/img/svg/arrow-profile.svg">
              </span>
          </a>
      </li>
    </ul>
  </nav>
</header>
</template>
<script>
</script>
