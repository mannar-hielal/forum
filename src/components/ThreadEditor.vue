<template>
  <div>
    <form>
        <div class="mb-4">
          <label for="thread_title">Title:</label>
          <input v-model="form.title" type="text" id="thread_title" class="form-control" name="title">
        </div>

        <div class="mb-4">
          <label for="thread_content">Content:</label>
          <textarea v-model="form.text" id="thread_content" class="form-control" name="content" rows="8" cols="140"></textarea>
        </div>

        <div class="actions d-flex justify-content-end">
            <button @click.prevent="cancel" class="btn btn-secondary me-2">Cancel</button>
            <button @click.prevent="save" type="submit" class="btn btn-primary">{{ isUpdate ? 'Update': 'Publish' }}</button>
        </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'ThreadEditor',
  data () {
    return {
      form: {
        title: this.title,
        text: this.text
      }
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  },
  computed: {
    isUpdate () {
      return !!this.title
    }
  },
  methods: {
    save () {
      this.$emit('save', { title: this.form.title, text: this.form.text })
    },
    cancel () {
      this.$emit('cancel')
    }
  }
}
</script>
