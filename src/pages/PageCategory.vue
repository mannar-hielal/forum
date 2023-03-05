<template>
      <!-- Display one category name  -->
      <div class="w-100">
      <div class="col-full push-top">
        <h1>{{category.name}}</h1>
      </div>

      <!-- Display the contents of one category  -->
      <div class="col-full">
        <CategoryListItem
        :category="category"/>
      </div>
  </div>
</template>

<script>
import CategoryListItem from '@/components/CategoryListItem.vue'

export default {
  name: 'Category',
  components: {
    CategoryListItem
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
    category () {
      return this.$store.state.categories[this.id]
    }
  }
}
</script>
