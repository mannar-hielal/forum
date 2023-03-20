<template>
  <!-- Display the category name-->
  <div class="category-list-item mb-12 bg-light rounded--bottom">
    <h2 :class="`category-title p-4 h5 rounded--bottom m-0 bg--gradient-${index}`">
      <router-link
        :to="{
          name: 'Category',
          params: { id: category['.key'] },
        }"
        class="text-white"
      >{{ category.name }}
      </router-link>
    </h2>
    <div class="category-body rounded--bottom">
      <!-- Iterating through the forums of this category-->
      <ForumList :forums="forums"/>
    </div>
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
    },
    index () {
      // get the index and use to generate random color
      const index = this.category['.key']
      return Object.keys(this.$store.state.categories).indexOf(index) + 1
    }
  }
}
</script>
