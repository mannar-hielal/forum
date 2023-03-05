<template>
  <div class="forum-listing">
      <div class="forum-details">
          <router-link v-if= "threadCount > 0"
            :to="{
              name: 'Forum',
              params: { id: forum['.key'] },
            }"
            class="text-xlarge"
          >{{ forum.name }}
          </router-link>
          <p v-else class="text-xlarge">
            {{ forum.name }}
          </p>
          <p>{{ forum.description }}</p>
      </div>

      <div class="threads-count">
          <p class="count">{{ threadCount }}</p> {{ threadCount === 1 ? 'thread': 'threads' }}
      </div>

      <!--<div class="last-thread">
          <img class="avatar" src="https://i.imgur.com/aaw5m0T.jpg" alt="">
          <div class="last-thread-details">
              <a href="thread.html">Knock knock, who's there?</a>
              <p class="text-xsmall">By <a href="profile.html">Princess Dee Dee</a>, 23 hours ago</p>
          </div>
      </div>-->

  </div>
</template>

<script>
import sourceData from '@/data.json'

export default {
  name: 'ForumListItem',
  data () {
    return {
      users: sourceData.users
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
      return this.forum.threads ? Object.values(this.forum.threads).length : 0
    }
  }
}
</script>
