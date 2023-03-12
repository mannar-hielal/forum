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
              <img class="avatar-small" :src="require(`../assets/img/jpg/${authUser.avatar}`)" :alt="authUser.name">
              <span>
                  {{ authUser.name }}
                  <img src="../assets/img/svg/arrow-profile.svg">
              </span>
          </a>
      </li>
    </ul>
  </nav>
</header>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      authUser: 'authUser'
    })
  }
}
</script>
