<template>
  <div class="row">
    <!--left side: profile & profile editor-->
    <UserProfileCard
      v-if="!edit"
      :user="user"
    />

    <UserProfileCardEditor
      v-else
      :user="user"
    />
    <!--right side: posts-->
    <div class="col-12 col-lg-8">
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
      return this.$store.getters.userPostsCount(this.user['.key'])
    },
    userThreadsCount () {
      return this.$store.getters.userThreadsCount(this.user['.key'])
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
