<template>
  <div>
    <h1>Create new thread in {{ forum.name }}</h1>
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
  name: 'ThreadCreate',
  data () {
    return {
      title: '',
      text: ''
    }
  },
  props: {
    forum: {
      required: true,
      type: Object
    }
  },
  methods: {
    // we make creatThread promisified because we want it to return the created thread
    save () {
      this.$store.dispatch('createThread', {
        forumId: this.forum['.key'],
        title: this.title,
        text: this.text
      }).then(thread => this.$router.push({ name: 'ThreadShow', params: { id: thread['.key'] } }))
    },
    cancel () {
      this.$router.push({ name: 'Forum', params: { id: this.forum['.key'] } })
    }
  }
}
</script>
