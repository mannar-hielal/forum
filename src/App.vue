<template>
  <div id="app">
    <!--<nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>-->
    <TheNavbar/>
    <main class="container">
      <div class="alert alert-danger text-center" role="alert">
        This website is still under development</div>
      <router-view/>
    </main>
  </div>
</template>
<script>
import TheNavbar from './components/TheNavbar.vue'

export default {
  components: {
    TheNavbar
  }
}
</script>
