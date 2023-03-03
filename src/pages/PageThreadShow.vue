<template>
        <!-- Showing one thread -->
        <div>
        <h1>{{ thread.title }}</h1>
        <!-- Iterating through the posts of this specific thread-->
        <PostList :posts="posts"/>
        <PostEditor
        :threadId= id
        @save="addPost"
        />
      </div>
</template>

<script>
import sourceData from '@/data.json'
import PostList from '@/components/PostList.vue'
import PostEditor from '@/components/PostEditor.vue'
console.log(sourceData)

export default {
  name: 'ThreadShow',
  components: {
    PostList,
    PostEditor
  },
  data () {
    return {
      thread: sourceData.threads[this.id],
      users: sourceData.users
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
    addPost ({ post }) {
      const postId = post['.key']
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
