<template>
  <div class="col-3 push-top">
    <div class="profile-card">

        <p class="text-center">
            <img :src="user.avatar" :alt="user.name" class="avatar-xlarge img-update">
        </p>

        <div class="form-group">
            <input v-model="activeUser.username" type="text" placeholder="Username" class="form-input text-lead text-bold">
        </div>

        <div class="form-group">
            <input v-model="activeUser.name" type="text" placeholder="Full Name" class="form-input text-lead">
        </div>

        <div class="form-group">
            <label for="user_bio">Bio</label>
            <textarea v-model="activeUser.bio" class="form-input" id="user_bio" placeholder="Write a few words about yourself."></textarea>
        </div>

        <div class="stats">
            <span>{{ userPostsCount }} posts</span>
            <span>{{ userThreadsCount }} threads</span>
        </div>

        <hr>

        <div class="form-group">
            <label class="form-label" for="user_website">Website</label>
            <input v-model="activeUser.website" autocomplete="off" class="form-input" id="user_website">
        </div>

        <div class="form-group">
            <label class="form-label" for="user_email">Email</label>
            <input v-model="activeUser.email" autocomplete="off" class="form-input" id="user_email">
        </div>

        <div class="form-group">
            <label class="form-label" for="user_location">Location</label>
            <input v-model="activeUser.location" autocomplete="off" class="form-input" id="user_location">
        </div>

        <div class="btn-group space-between">
            <button @click.prevent="cancel" class="btn-ghost">Cancel</button>
            <button @click.prevent="save" type="submit" class="btn-blue">Save</button>
        </div>
    </div>

    <p class="text-xsmall text-faded text-center">Member since june 2003, last visited 4 hours ago</p>
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
