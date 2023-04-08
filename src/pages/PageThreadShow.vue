<template>
        <!-- Showing one thread -->
        <div>
          <header class="mb-12">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <h1>{{ thread.title }}</h1>
              <router-link
              class="btn btn-primary"
              :to="{ name: 'ThreadEdit', params: {id: thread['.key']}}"
              >Edit Thread</router-link>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <small>
                  By <a href="#" class="text-muted">{{ user.name }}</a>,
                  <AppDate
                  :timestamp="thread.publishedAt"/>
              </small>
              <span>{{ repliesCount }} replies by 3 contributors</span>
            </div>
          </header>
          <!-- Iterating through the posts of this specific thread-->
          <PostList :posts="posts"/>

          <!-- Display an editor to add posts-->
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
    },
    repliesCount () {
      return this.$store.getters.threadRepliesCount(this.thread['.key'])
    }
  }
}
</script>
