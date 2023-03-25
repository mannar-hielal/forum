<template>
  <div>
    <h1>Create new thread in {{ forum.name }}</h1>
    <ThreadEditor
    @save="save"
    @cancel="cancel"/>
  </div>
</template>
<script>
import ThreadEditor from '@/components/ThreadEditor.vue'

export default {
  name: 'ThreadCreate',
  components: {
    ThreadEditor
  },
  data () {
    return {}
  },
  props: {
    forumId: {
      required: true,
      type: String
    }
  },
  computed: {
    forum () {
      return this.$store.state.forums[this.forumId]
    }
  },
  methods: {
    // we make creatThread promisified because we want it to return the created thread
    save ({ title, text }) {
      this.$store.dispatch('createThread', {
        forumId: this.forum['.key'],
        title: title,
        text: text
      }).then(thread => this.$router.push({ name: 'ThreadShow', params: { id: thread['.key'] } }))
    },
    cancel () {
      this.$router.push({ name: 'Forum', params: { id: this.forum['.key'] } })
    }
  }
}
</script>
