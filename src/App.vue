<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style>
@import './assets/styles.css';
</style>
