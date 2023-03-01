<template>
        <!-- Showing one thread -->
        <div>
        <h1>{{ thread.title }}</h1>
        <!-- Iterating through the posts of this specific thread-->
        <PostList :posts="posts"/>
        <form @submit.prevent="addPost">
          <div class="form-group">
            <label for="postTextArea">Enter your Message:</label>
            <textarea
            class="form-control"
            id="postTextArea"
            rows="3"
            v-model="newPostText">
          </textarea>
          <button type="submit" class="btn btn-primary mt-4">Submit</button>
          </div>
      </form>
      </div>
</template>

<script>
import sourceData from '@/data.json'
import PostList from '@/components/PostList.vue'
console.log(sourceData)

export default {
  name: 'ThreadShow',
  components: {
    PostList
  },
  data () {
    return {
      thread: sourceData.threads[this.id],
      users: sourceData.users,
      newPostText: ''
    }
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    posts () {
      const postIds = Object.values(this.thread.posts)
      return Object.values(sourceData.posts).filter(post => postIds.includes(post['.key']))
    }
  },
  methods: {
    addPost () {
      const postId = `newPost${Math.random()}`
      const post = {
        '.key': postId,
        publishedAt: Math.floor(Date.now() / 1000),
        text: this.newPostText,
        threadId: this.id,
        userId: 'FsCDAk9w8NeXEceLV87arpsXjnQ2'
      }
      this.newPostText = ''

      // adding the new post to posts, thread.post and
      // in the users.posts array
      // using the Vue.set to make them reactive
      this.$set(sourceData.posts, postId, post)
      this.$set(this.thread.posts, postId, postId)
      this.$set(this.users[post.userId].posts, postId, postId)
    }
  }
}
</script>
