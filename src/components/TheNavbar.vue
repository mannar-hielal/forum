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
        <router-link :to="{name: 'Profile'}">
          <img class="avatar-small" :src="authUser.avatar" :alt="authUser.name">
              <span>
                  {{ authUser.name }}
                  <img src="../assets/img/svg/arrow-profile.svg">
              </span>
        </router-link>
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
