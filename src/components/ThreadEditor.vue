<template>
  <div>
    <form>
        <div class="mb-4">
          <label for="thread_title">Title:</label>
          <input v-model="title" type="text" id="thread_title" class="form-control" name="title">
        </div>

        <div class="mb-4">
          <label for="thread_content">Content:</label>
          <textarea v-model="text" id="thread_content" class="form-control" name="content" rows="8" cols="140"></textarea>
        </div>

        <div class="actions d-flex justify-content-end">
            <button @click.prevent="cancel" class="btn btn-secondary me-2">Cancel</button>
            <button @click.prevent="save" type="submit" class="btn btn-primary">Publish</button>
        </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'ThreadEditor',
  data () {
    return {
      title: '',
      text: ''
    }
  },
  methods: {
    save () {
      this.$emit('save', { title: this.title, text: this.text })
    },
    cancel () {
      this.$emit('cancel')
    }
  }
}
</script>
