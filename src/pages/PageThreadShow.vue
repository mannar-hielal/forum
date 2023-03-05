<template>
        <!-- Showing one thread -->
        <div>
        <h1>{{ thread.title }}</h1>
        <p>
            By <a href="#" class="link-unstyled">{{ user.name }}</a>,
            <AppDate
            :timestamp="thread.publishedAt"/>
            <span style="float:right; margin-top: 2px;" class="hide-mobile text-faded text-small">3 replies by 3 contributors</span>
          </p>
        <!-- Iterating through the posts of this specific thread-->
        <PostList :posts="posts"/>
        <PostEditor
        :threadId= id
        @save="addPost"
        />
      </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import PostEditor from '@/components/PostEditor.vue'

export default {
  name: 'ThreadShow',
  components: {
    PostList,
    PostEditor
  },
  data () {
    return {
      thread: this.$store.state.threads[this.id],
      users: this.$store.state.users
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
      return Object.values(this.$store.state.posts).filter(post => postIds.includes(post['.key']))
    },
    user () {
      return this.users[this.thread.userId]
    }
  },
  methods: {
    addPost ({ post }) {
      const postId = post['.key']
      // adding the new post to posts, thread.post and
      // in the users.posts array
      // using the Vue.set to make them reactive
      this.$set(this.$store.state.posts, postId, post)
      this.$set(this.thread.posts, postId, postId)
      this.$set(this.users[post.userId].posts, postId, postId)
    }
  }
}
</script>
