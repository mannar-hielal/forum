<template>
      <!-- Display one forum details  -->
      <div class="forum">
        <header class="forum-header">
          <h1>{{ forum.name }}</h1>
          <p>{{ forum.description }}</p>
        </header>
        <div class="d-flex justify-content-end mb-4">
          <a href="new-thread.html" class="btn btn-primary">Start a thread</a>
        </div>

        <!-- Iterating through the collection of threads of this forum-->
        <ThreadList
        :threads="threads"/>
  </div>
</template>

<script>
import ThreadList from '@/components/ThreadList.vue'

export default {
  name: 'Forum',
  components: {
    ThreadList
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
    forum () {
      return this.$store.state.forums[this.id]
    },
    threads () {
      const forumIds = Object.values(this.forum.threads)
      return Object.values(this.$store.state.threads).filter(thread => forumIds.includes(thread['.key']))
    }
  }
}
</script>
