<template>
      <!-- Display one forum details  -->
      <div class="w-100">
      <div class="col-full push-top">
        <div class="forum-header">
            <div class="forum-details">
                <h1>{{ forum.name }}</h1>
                <p class="text-lead">{{ forum.description }}</p>
            </div>
            <a href="new-thread.html" class="btn-green btn-small">Start a thread</a>
        </div>
      </div>
      <!-- Iterating through the collection of threads of this forum-->
      <div class="col-full">
          <ThreadList
          :threads="threads"
          />
      </div>
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
