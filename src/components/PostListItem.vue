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
      {{post.publishedAt | humanFriendlyDate }}
    </div>
  </div>
</template>

<script>
import sourceData from '@/data.json'
export default {
  name: 'PostListItem',
  data () {
    return {
      users: sourceData.users
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
  },
  filters: {
    humanFriendlyDate (dateInMilliseconds) {
      const day = new Date(dateInMilliseconds).toString().slice(0, 3)
      const date = new Date(dateInMilliseconds).toLocaleString('en-GB', { timeZone: 'Europe/Zurich' })
      return `${day} ${date}`
    }
  }
}
</script>
