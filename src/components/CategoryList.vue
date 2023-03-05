<template>
  <div>
    <CategoryListItem v-for="category in categories"
    :category="category"
    :key="category['.key']"/>
</div>
</template>

<script>
import CategoryListItem from '@/components/CategoryListItem.vue'

export default {
  name: 'CategoryList',
  components: {
    CategoryListItem
  },
  data () {
    return {}
  },
  props: {
    categories: {
      required: true,
      type: Array
    }
  }
}
</script>
