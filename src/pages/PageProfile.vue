<template>
  <div>
    <div class="flex-grid">
      <UserProfileCard
        :user="user"
        :userPostsCount="userPostsCount"
        :userThreadsCount="userThreadsCount"
      />
      <div class="col-7 push-top">
          <div class="profile-header">
              <span class="text-lead">
                  {{ user.username }}'s recent activity
              </span>
              <a href="#">See only started threads?</a>
          </div>
          <hr>
          <!--PostList display array of posts, so we pass it posts-->
          <PostList :posts="userPosts"/>
      </div>
      </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import PostList from '@/components/PostList.vue'
import UserProfileCard from '@/components/UserProfileCard.vue'
import { countObjectProperties } from '@/helpers/index'

export default {
  name: 'Profile',
  components: {
    PostList,
    UserProfileCard
  },
  data () {
    return {}
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
