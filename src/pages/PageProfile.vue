<template>
  <div>
    <div class="flex-grid">
          <div class="col-3 push-top">
              <div class="profile-card">
                  <p class="text-center">
                      <img :src="user.avatar"  :alt="user.name" class="avatar-xlarge">
                  </p>

                  <h1 class="title">{{ user.username }}</h1>

                  <p class="text-lead">{{ user.name }}</p>

                  <p v-if="user.bio" class="text-justify">
                      {{ user.bio }}
                  </p>
                  <p v-else>
                    No bio specified.
                  </p>

                  <span class="online">{{ user.username }} is online</span>
                  <div class="stats">
                      <span>{{ userPostsCount }} posts</span>
                      <span>{{ userThreadsCount }} threads</span>
                  </div>

                  <hr>

                  <p v-if="user.website" class="text-large text-center"><i class="fa fa-globe"></i> <a :href="user.website">{{ user.website }}</a></p>

              </div>

              <p class="text-xsmall text-faded text-center">Member since june 2003, last visited 4 hours ago</p>

              <div class="text-center">
                <hr>
                <a href="edit-profile.html" class="btn-green btn-small">Edit Profile</a>
              </div>

          </div>

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
import { countObjectProperties } from '@/helpers/index'

export default {
  name: 'Profile',
  components: {
    PostList
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
