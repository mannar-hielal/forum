<template>
  <div class="post">
    <div class="user-info">
      <p></p>
      <a href="#" class="user-name">{{ user.name}}</a>
      <a href="#">
          <img class="avatar-large" :src="user.avatar" alt="">
      </a>
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
      return Object.values(this.user.posts).length
    }
  }
}
</script>
