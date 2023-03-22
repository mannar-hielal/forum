<template>
  <div>
    <form @submit.prevent="save">
      <div class="mb-4">
        <label for="post_text" class="col-form-label">Enter your Message:</label>
        <textarea class="form-control" id="post_text" rows="3" v-model="postText">
      </textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
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
