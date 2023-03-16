<template>
  <div>
    <form @submit.prevent="save">
      <div class="form-group">
        <label for="postTextArea">Enter your Message:</label>
        <textarea
        class="form-control"
        id="postTextArea"
        rows="3"
        v-model="postText">
      </textarea>
      <button type="submit" class="btn btn-primary mt-4">Submit</button>
      </div>
      </form>
  </div>
</template>
<script>
export default {
  name: 'PostEditor',
  data () {
    return {
      postText: ''
    }
  },
  props: {
    threadId: {
      required: true
    }
  },
  methods: {
    save () {
      const post = {
        text: this.postText,
        threadId: this.threadId
      }
      this.postText = ''
      this.$store.dispatch('createPost', post)
    }
  }
}
</script>
