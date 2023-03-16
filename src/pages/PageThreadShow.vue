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
    return {}
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
      return this.$store.state.users[this.thread.userId]
    },
    thread () {
      return this.$store.state.threads[this.id]
    }
  }
}
</script>
