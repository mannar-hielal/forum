<template>
    <div class="w-100">
      <h1 class="mt-4 mb-4">Welcome to the Forum</h1>
      <ForumList :forums="forums"/>
    </div>
</template>

<script>
import sourceData from '@/data.json'
import ForumList from '@/components/ForumList.vue'

export default {
  components: {
    ForumList
  },
  data () {
    return {
      forums: Object.values(sourceData.forums)
    }
  }
}
</script>
