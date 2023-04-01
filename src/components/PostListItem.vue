<template>
  <div class="post mb-6 shadow-sm p-8 bg-light">
    <div class="row">
      <div class="user-info col-4 col-md-2">
          <div>
            <router-link
              :to="{name: 'Profile'}"
              class="d-flex flex-column align-items-center mb-4">
                <p class="user-name">{{ user.username}}</p>
                <div class="rounded--image">
                  <img class="img-fluid" :src="user.avatar" :alt="user.username">
                </div>
              </router-link>
              <p class="text-center">{{ userPostsCount }} posts</p>
          </div>
      </div>

      <div class="post-content col-8 col-md-10">
          <div v-if="!editing"
          class="d-flex justify-content-between align-items-start">
            <p>{{post.text }}</p>
            <a href="#"
            title="Make a change"
            @click.prevent="editing = true">
              <font-awesome-icon :icon="['fas', 'pencil']" />
            </a>
          </div>

          <div v-else>
            <PostEditor
            :post="post"
            @save="editing = false"
            />
          </div>
      </div>
    </div>

    <div class="row align-items-end">
      <div class="col-6 post-date text-faded">
        <AppDate
        :timestamp="post.publishedAt"
        />
      </div>

      <!-- <div class="col-6 reactions">
        <div>
          <ul class="d-flex justify-content-end mb-2">
            <li>💡</li>
            <li>❤️</li>
            <li>👎</li>
            <li>👍</li>
            <li>👌</li>
          </ul>
          <div class="d-flex justify-content-end">
            <button class="btn btn-md"><span class="emoji">❤️</span>️ 3</button>
            <button class="btn btn-md active-reaction"><span class="emoji">👌️</span>️ 1</button>
            <button class="btn btn-md">+
              <font-awesome-icon :icon="['far', 'face-smile']" />
            </button>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { countObjectProperties } from '@/helpers'
import PostEditor from '@/components/PostEditor'

export default {
  name: 'PostListItem',
  components: {
    PostEditor
  },
  data () {
    return {
      editing: false
    }
  },
  props: {
    post: {
      required: true,
      type: Object
    }
  },
  computed: {
    user () {
      return this.$store.state.users[this.post.userId]
    },
    userPostsCount () {
      return countObjectProperties(this.user.posts)
    }
  }
}
</script>
<style lang="scss">
.reactions ul li {
  font-size: 1.5rem;
  padding-left: 0.5rem;
}
</style>
