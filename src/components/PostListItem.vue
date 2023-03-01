<template>
  <div class="post">
    <div class="user-info">
      <p></p>
      <a href="#" class="user-name">{{ users[post.userId].name}}</a>
      <a href="#">
          <img class="avatar-large" :src=" users[post.userId].avatar" alt="">
      </a>
      <p class="desktop-only text-small">177 posts</p>
    </div>

    <div class="post-content">
      <div>
        <p>{{post.text }}</p>
      </div>
    </div>

    <div class="post-date text-faded">
      {{post.publishedAt }}
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
  }
}
</script>
