<template>
  <!-- Display the category name-->
  <div class="forum-list">
    <h2 class="list-title">
        <router-link
          :to="{
            name: 'Category',
            params: { id: category['.key'] },
          }"
          class="text-xlarge"
        >{{ category.name }}
        </router-link>
    </h2>
    <!-- Iterating through the forums of this category-->
    <ForumList :forums="forums"/>
  </div>
</template>

<script>
import ForumList from './ForumList.vue'

export default {
  name: 'CategoryListItem',
  components: {
    ForumList
  },
  data () {
    return {
    }
  },
  props: {
    category: {
      required: true,
      type: Object
    }
  },
  computed: {
    forums () {
      const forumIds = Object.values(this.category.forums)
      return Object.values(this.$store.state.forums).filter(forum => forumIds.includes(forum['.key']))
    }
  }
}
</script>
