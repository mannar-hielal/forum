<template>
  <div class="thread-list-item stripes">
    <div class="row p-4">
      <div class="thread-details col-6">
          <p>
              <router-link
                :to="{
                  name: 'ThreadShow',
                  params: { id: thread['.key'] },
                }"
              >{{ thread.title }}</router-link>

          </p>
          <small class="text-muted m-0">
              By <a href="#">{{ user.name }}</a> ,
              <AppDate
              :timestamp="thread.publishedAt"/>
          </small>
      </div>

      <div class="thread-activity col-6">
          <p class="replies-count">
              {{ repliesCount }} reply
          </p>

          <!--<img class="avatar-medium" src="http://i0.kym-cdn.com/photos/images/facebook/000/010/934/46623-batman_pikachu_super.png" alt="">-->

          <!--<div>
              <p class="text-xsmall">
                  <a href="profile.html">Bruce Wayne</a>
              </p>
              <p class="text-xsmall text-faded">2 hours ago</p>
          </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThreadListItem',
  data () {
    return {}
  },
  props: {
    thread: {
      required: true,
      type: Object
    }
  },
  computed: {
    repliesCount () {
      return this.$store.getters.threadRepliesCount(this.thread['.key'])
    },
    user () {
      return this.$store.state.users[this.thread.userId]
    }
  }
}
</script>
