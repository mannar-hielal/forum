<template>
  <div class="forum-list">
    <ForumListItem v-for="forum in forums"
    :forum="forum"
    :key="forum['.key']"/>
</div>
</template>

<script>
import ForumListItem from '@/components/ForumListItem.vue'

export default {
  name: 'ForumList',
  components: {
    ForumListItem
  },
  data () {
    return {}
  },
  props: {
    forums: {
      required: true,
      type: Array
    }
  }
}
</script>
