<template>
  <div class="post">
    <div class="user-info">
      <router-link :to="{name: 'Profile'}">
        <p class="user-name">{{ user.name}}</p>
        <img class="avatar-large d-block" :src="user.avatar" :alt="user.username">
      </router-link>
      <p class="desktop-only text-small">{{ userPostsCount }} posts</p>
    </div>

    <div class="post-content">
      <div>
        <p>{{post.text }}</p>
      </div>
    </div>

    <div class="post-date text-faded">
      <AppDate
      :timestamp="post.publishedAt"
      />
    </div>
  </div>
</template>

<script>
import { countObjectProperties } from '@/helpers'
export default {
  name: 'PostListItem',
  data () {
    return {
      users: this.$store.state.users
    }
  },
  props: {
    post: {
      required: true,
      type: Object
    }
  },
  computed: {
    user () {
      return this.users[this.post.userId]
    },
    userPostsCount () {
      return countObjectProperties(this.user.posts)
    }
  }
}
</script>
