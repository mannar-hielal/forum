<template>
  <div class="col-12 col-lg-4">
    <div class="profile-card mb-6 shadow-sm p-8 bg-light text-center">
      <img :src="user.avatar"  :alt="user.name" class="img-fluid mb-4">
      <form>
        <div class="mb-4 row">
          <div class="col-3 text-start">
            <label for="username" class="col-form-label" aria-describedby="username"> Username </label>
          </div>
          <div class="col-9">
            <input v-model="activeUser.username" type="text" id="username" placeholder="Username" class="form-control">
          </div>
        </div>

        <div class="mb-4 row">
          <div class="col-3 text-start">
            <label for="name" class="col-form-label" aria-describedby="name"> Name </label>
          </div>
          <div class="col-9">
            <input v-model="activeUser.name" type="text" id="name" placeholder="Full Name" class="form-control">
          </div>
        </div>

        <div class="mb-4 row">
          <div class="col-3 text-start">
            <label for="user_bio" class="col-form-label" aria-describedby="bio">About</label>
          </div>
          <div class="col-9">
            <textarea v-model="activeUser.bio" id="user_bio" placeholder="Write a few words about yourself." class="form-control" aria-label="biography"></textarea>
          </div>
        </div>

        <div class="mb-4 row">
          <div class="col-3 text-start">
            <label for="user_website" class="col-form-label" aria-describedby="website">Website</label>
          </div>
          <div class="col-9">
            <input v-model="activeUser.website" autocomplete="off" type="url" class="form-control" id="user_website" aria-label="website">
          </div>
        </div>

        <div class="mb-4 row">
          <div class="col-3 text-start">
            <label class="col-form-label" for="user_email" aria-describedby="email">Email</label>
          </div>
          <div class="col-9">
            <input v-model="activeUser.email" autocomplete="off" type="email" class="form-control" id="user_email">
          </div>
        </div>

        <div class="mb-4 row">
          <div class="col-3 text-start">
            <label class="col-form-label" for="user_location" aria-describedby="location">Location</label>
          </div>
          <div class="col-9">
            <input v-model="activeUser.location" autocomplete="off" type="text" id="user_location" class="form-control">
          </div>
        </div>

        <div class="actions d-flex justify-content-end">
            <button @click.prevent="cancel" class="btn btn-secondary me-2">Cancel</button>
            <button @click.prevent="save" type="submit" class="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
    <div class="stats d-flex justify-content-around">
      <span class="h4">{{ userPostsCount }} posts </span>
      <span class="h4">{{ userThreadsCount }} threads</span>
    </div>
    <hr>

    <p>Member since june 2003, last visited 4 hours ago</p>
  </div>
</template>

<script>
export default {
  name: 'UserProfileCardEditor',
  data () {
    return {
      // clone it so that the v-model doesnt change the user in the state
      activeUser: { ...this.user }
    }
  },
  props: {
    user: {
      required: true,
      type: Object
    },
    userPostsCount: {
      required: true,
      type: Number
    },
    userThreadsCount: {
      required: true,
      type: Number
    }
  },
  methods: {
    // using vue.set bind activeUser to user in the state ( in mutations: Vue.set(state.users, userId, user)) to fix this, we send a clone of a activeUser each time we do a change.
    save () {
      this.$store.dispatch('updateUser', { ...this.activeUser })
      this.$router.push({ name: 'Profile' })
    },
    cancel () {
      this.$router.push({ name: 'Profile' })
    }
  }
}
</script>
