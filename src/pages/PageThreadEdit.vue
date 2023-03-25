<template>
  <div>
    <h1>Editing {{ thread.title }}</h1>
    <ThreadEditor
    :title="thread.title"
    :text="firstPostText"
    @save="save"
    @cancel="cancel"/>
  </div>
</template>
<script>
import ThreadEditor from '@/components/ThreadEditor.vue'

export default {
  name: 'ThreadEdit',
  components: {
    ThreadEditor
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
    thread () {
      return this.$store.state.threads[this.id]
    },
    firstPostText () {
      return this.$store.state.posts[this.thread.firstPostId].text
    }
  },
  methods: {
    // we make creatThread promisified because we want it to return the created thread
    save ({ title, text }) {
      this.$store.dispatch('updateThread', {
        id: this.id,
        title: title,
        text: text
      }).then(thread => this.$router.push({ name: 'ThreadShow', params: { id: this.id } }))
    },
    cancel () {
      this.$router.push({ name: 'ThreadShow', params: { id: this.id } })
    }
  }
}
</script>
