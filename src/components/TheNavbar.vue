<template>
<nav class="navbar navbar-expand-md navbar-dark bg-dark p-2">
  <!-- logo/brand -->
  <router-link
    :to="{ name: 'Home'}"
    class="navbar-brand">
    <img src="../assets/img/svg/forum-logo.svg">
    The Forum
  </router-link>

  <!-- mobile burger menu -->
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <!-- desktop expanded menu -->
  <div class="collapse navbar-collapse justify-content-md-end" id="navbarsExample08">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <router-link
        :to="{name: 'Profile'}"
        class="nav-link dropdown-toggle"
        id="dropdown08"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        >
          <img
          :src="authUser.avatar"
          :alt="authUser.name"
          class="img-fluid avatar">
              <span>
                  {{ authUser.name }}
              </span>
        </router-link>
        <div class="dropdown-menu" aria-labelledby="dropdown08">
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>

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
<style scoped>
img {
  height: 30px;
  width: 30px;
}
img.avatar {
  border-radius: 50%;
}
</style>
