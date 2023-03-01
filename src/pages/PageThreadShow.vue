<template>
        <!-- Showing one thread -->
        <div>
        <h1>{{ thread.title }}</h1>
        <!-- Iterating through the posts of this specific thread-->
        <PostList :posts="posts"/>
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
      thread: sourceData.threads[this.id]
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
  }
}
</script>
