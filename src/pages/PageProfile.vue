<template>
  <div class="row">
    <!--left side: profile & profile editor-->
    <UserProfileCard
      v-if="!edit"
      :user="user"
      :userPostsCount="userPostsCount"
      :userThreadsCount="userThreadsCount"
    />

    <UserProfileCardEditor
      v-else
      :user="user"
      :userPostsCount="userPostsCount"
      :userThreadsCount="userThreadsCount"
    />
    <!--right side: posts-->
    <div class="col-12 col-md-8">
        <header class="profile-header d-flex flex-column flex-md-row justify-content-between align-items-center">
            <h1 class="h3 mb-0">
                {{ user.username }}'s recent activity
            </h1>
            <a href="#">See only started threads?</a>
        </header>
        <hr>
        <!--PostList display array of posts, so we pass it posts-->
        <PostList :posts="userPosts"/>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import PostList from '@/components/PostList.vue'
import UserProfileCard from '@/components/UserProfileCard.vue'
import UserProfileCardEditor from '@/components/UserProfileCardEditor.vue'

import { countObjectProperties } from '@/helpers/index'

export default {
  name: 'Profile',
  components: {
    PostList,
    UserProfileCard,
    UserProfileCardEditor
  },
  data () {
    return {}
  },
  props: {
    edit: {
      type: Boolean
    }
  },
  computed: {
    ...mapGetters({
      user: 'authUser'
    }),
    userPostsCount () {
      return countObjectProperties(this.user.posts)
    },
    userThreadsCount () {
      return countObjectProperties(this.user.threads)
    },
    userPosts () {
      const postIds = this.user.posts
      if (postIds) {
        const posts = Object.values(this.$store.state.posts)
        return posts.filter(post => post.userId === this.user['.key'])
      }
      return []
    }
  }
}
</script>
