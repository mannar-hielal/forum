<template>
    <div class="w-100">
      <h1 class="mt-4 mb-4">Welcome to the Forum</h1>
      <CategoryList :categories="categories"/>
    </div>
</template>

<script>
import CategoryList from '@/components/CategoryList.vue'

export default {
  components: {
    CategoryList
  },
  data () {
    return {}
  },
  computed: {
    categories () {
      return Object.values(this.$store.state.categories)
    }
  }
}
</script>
