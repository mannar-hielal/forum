<template>
  <div class="post-list">
      <PostListItem
      v-for="post in posts"
      :post="post"
      :key="post['.key']"/>
  </div>
</template>

<script>
import PostListItem from '@/components/PostListItem.vue'

export default {
  name: 'PostList',
  components: {
    PostListItem
  },
  data () {
    return {
      users: this.$store.state.users
    }
  },
  props: {
    posts: {
      required: true,
      type: Array
    }
  }
}
</script>
