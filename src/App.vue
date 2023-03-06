<template>
  <div id="app">
    <!--<nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>-->
    <TheNavbar/>
    <div class="container">
      <router-view/>
    </div>
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
<style>
@import './assets/styles.css';
@import 'bootstrap/dist/css/bootstrap.min.css';
</style>
