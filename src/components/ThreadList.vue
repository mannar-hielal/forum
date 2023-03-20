<template>
  <div class="mb-12 bg-light rounded--bottom">
    <h2 class="thread-list-title p-2 h5 rounded--bottom m-0 bg--gradient-0 text-white">Threads</h2>
    <div class="thread-list">
      <ThreadListItem
          v-for="thread in threads"
          :thread="thread"
          :key = "thread['.key']"/>
    </div>
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
