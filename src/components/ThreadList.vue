<template>
  <div class="thread-list">
    <h2 class="list-title">Threads</h2>
    <ThreadListItem
        v-for="thread in threads"
        :thread="thread"
        :key = "thread['.key']"/>
  </div>
</template>

<script>
import ThreadListItem from '@/components/ThreadListItem.vue'

export default {
  name: 'ThreadList',
  components: {
    ThreadListItem
  },
  data () {
    return {}
  },
  props: {
    threads: {
      required: true,
      type: Array
    }
  }
}
</script>
