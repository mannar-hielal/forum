<template>
    <section>
      <h1 class="mb-12">Welcome to the Forum</h1>
      <CategoryList :categories="categories"/>
    </section>
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
