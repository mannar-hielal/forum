<template>
        <!-- Showing one thread -->
        <div>
        <h1>{{ thread.title }}</h1>

        <!-- Iterating through the posts of this specific thread -->
        <div class="post-list">
          <div v-for="(postId, key) in thread.posts"
              :key="key"
              class="post">

              <div class="user-info">
                <p></p>
                <a href="#" class="user-name">{{ users[posts[postId].userId].name}}</a>
                <a href="#">
                    <img class="avatar-large" :src="users[posts[postId].userId].avatar" alt="">
                </a>
                <p class="desktop-only text-small">107 posts</p>
              </div>

              <div class="post-content">
                <div>
                  <p>{{ posts[postId].text }}</p>
                </div>
              </div>

              <div class="post-date text-faded">
                {{ posts[postId].publishedAt }}
              </div>
          </div>
        </div>
      </div>
</template>

<script>
import sourceData from '@/data.json'
console.log(sourceData)
export default {
  name: 'ThreadShow',
  data () {
    return {
      thread: sourceData.threads[this.id],
      posts: sourceData.posts,
      users: sourceData.users
    }
  },
  props: {
    id: {
      required: true,
      type: String
    }
  }
}
</script>
