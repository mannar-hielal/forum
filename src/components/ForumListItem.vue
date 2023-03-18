<template>
  <div class="forum-list-item">
      <div class="row p-4">
        <div class="forum-details col-6">
            <h3 class="h6">
              <router-link v-if= "threadCount > 0"
                :to="{
                  name: 'Forum',
                  params: { id: forum['.key'] },
                }"
                >{{ forum.name }}
              </router-link>
              <p v-else>
                {{ forum.name }}
              </p>
            </h3>
            <p>{{ forum.description }}</p>
        </div>

        <div class="thread-count col-6">
            <p class="count">{{ threadCount }} {{ threadCount === 1 ? 'thread': 'threads' }}</p>
        </div>

        <!--<div class="last-thread">
            <img class="avatar" src="https://i.imgur.com/aaw5m0T.jpg" alt="">
            <div class="last-thread-details">
                <a href="thread.html">Knock knock, who's there?</a>
                <p class="text-xsmall">By <a href="profile.html">Princess Dee Dee</a>, 23 hours ago</p>
            </div>
        </div>-->
      </div>
  </div>
</template>

<script>
import { countObjectProperties } from '@/helpers'
export default {
  name: 'ForumListItem',
  data () {
    return {
      users: this.$store.state.users
    }
  },
  props: {
    forum: {
      required: true,
      type: Object
    }
  },
  computed: {
    threadCount () {
      return countObjectProperties(this.forum.threads)
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/styles.scss';

.forum-list-item:nth-child(even) {
  background-color: $gray-200;
}
</style>
