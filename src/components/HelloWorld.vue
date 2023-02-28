<template>
    <div>
      <!-- Iterating through the threads -->
      <div v-for="(thread, key) in threads"
           :key="key"
           class="col-large push-top">
        <h1>{{ thread.title }}</h1>

        <!-- Iterating through the posts of each thread -->
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
    </div>
</template>

<script>
import sourceData from '@/data.json'

export default {
  name: 'HelloWorld',
  data () {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users
    }
  }
}
</script>
