<template>
  <div class="thread-list">
    <h2 class="list-title">Threads</h2>
    <div v-for="thread in threads"
        :key="thread['.key']">
      <ThreadListItem :thread="thread"/>
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
