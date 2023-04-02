<template>
  <div class="col-12 col-lg-4 mb-12 mb-m-0">
    <div class="profile-card mb-6 shadow-sm p-8 bg-light text-center">
      <img :src="user.avatar"  :alt="user.name" class="img-fluid mb-4">
      <h2>{{ user.username }}</h2>

      <p>{{ user.name }}</p>

      <p v-if="user.bio"> {{ user.bio }} </p>
      <p v-else> No bio specified.</p>

      <p>{{ user.username }} is online</p>
      <p v-if="user.website">
        <font-awesome-icon  class="pe-2" :icon="['fas', 'globe']"/>
        <a :href="user.website">{{ user.website }}</a>
      </p>
    </div>

    <div class="stats d-flex justify-content-around">
      <span class="h4">{{ userPostsCount }} posts </span>
      <span class="h4">{{ userThreadsCount }} threads</span>
    </div>
    <hr>
    <p>Member since june 2003, last visited 4 hours ago</p>

    <div class="text-center">
      <router-link
      :to="{name: 'ProfileEdit', props: {edit: true}}"
      class="btn btn-primary"
      >Edit Profile</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  props: {
    user: {
      required: true,
      type: Object
    }
  },
  computed: {
    userPostsCount () {
      return this.$store.getters.userPostsCount(this.user['.key'])
    },
    userThreadsCount () {
      return this.$store.getters.userThreadsCount(this.user['.key'])
    }
  }
}
</script>
<style lang="scss">
.profile-card img {
  width: 300px;
  border-radius: 50%;
}
</style>
