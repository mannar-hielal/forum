<template>
    <div>
      <h1 class="mt-4 mb-4">Welcome to the Forum</h1>
      <ThreadList :threads="threads"/>
    </div>
</template>

<script>
import sourceData from '@/data.json'
import ThreadList from '@/components/ThreadList.vue'

export default {
  components: {
    ThreadList
  },
  data () {
    return {
      threads: Object.values(sourceData.threads),
      posts: sourceData.posts,
      users: sourceData.users
    }
  }
}
</script>
