<template>
  <div>
    <form @submit.prevent="save">
      <div class="mb-4">
        <label for="post_text" class="col-form-label">Enter your Message:</label>
        <textarea class="form-control" id="post_text" rows="3" v-model="postText">
      </textarea>
      </div>
      <div class="d-flex justify-content-end">
        <button v-if="isUpdate" @click.prevent="cancel" class="btn btn-secondary me-2">Cancel</button>
        <button type="submit" class="btn btn-primary">{{ isUpdate? 'Update': 'Submit' }}</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'PostEditor',
  data () {
    return {
      postText: this.post ? this.post.text : ''
    }
  },
  props: {
    threadId: {
      required: false
    },
    post: {
      type: Object
    }
  },
  computed: {
    isUpdate () {
      return !!this.post
    }
  },
  methods: {
    save () {
      return this.isUpdate ? this.update() : this.create()
    },
    create () {
      const post = {
        text: this.postText,
        threadId: this.threadId
      }
      this.postText = ''
      this.$store.dispatch('createPost', post).then(post => this.$emit('save', post))
    },
    update () {
      const payload = {
        id: this.post['.key'],
        text: this.postText
      }
      this.$store.dispatch('updatePost', payload).then(post => this.$emit('save', post))
    },
    cancel () {
      this.$emit('cancel')
    }
  }
}
</script>
