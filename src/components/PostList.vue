<template>
  <div class="post-list">
    <div v-for="post in posts"
        :key="post['.key']">
      <PostListItem :post="post"/>
    </div>
  </div>
</template>

<script>
import sourceData from '@/data.json'
import PostListItem from '@/components/PostListItem.vue'

export default {
  name: 'PostList',
  components: {
    PostListItem
  },
  data () {
    return {
      users: sourceData.users
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
