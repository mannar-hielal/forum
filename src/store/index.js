import Vue from 'vue'
import Vuex from 'vuex'
import sourceDate from '@/data.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ...sourceDate,
    authUserId: '38St7Q8Zi2NSJIPa5ahzssq9kbyp1'
  },
  getters: {
    authUser (state) {
      return state.users[state.authUserId]
    }
  },
  actions: {
    createPost (context, post) {
      const postId = `newPost${Math.random()}`
      post['.key'] = postId
      context.commit('setPost', { post, postId })
      context.commit('appendPostToThreads', { threadId: post.threadId, postId })
      context.commit('appendPostToUser', { postId, userId: post.userId })
    },
    updateUser ({ commit }, user) {
      commit('setUser', { userId: user['.key'], user })
    }
  },
  mutations: {
    // set post to posts array
    setPost (state, { post, postId }) {
      // this.$set(object, propertyName, value to add to the propertyName)
      Vue.set(state.posts, postId, post)
    },
    // set post to threads array
    appendPostToThreads (state, { threadId, postId }) {
      const thread = state.threads[threadId]
      Vue.set(thread.posts, postId, postId)
    },
    // set post to users.posts
    appendPostToUser (state, { postId, userId }) {
      const user = state.users[userId]
      Vue.set(user.posts, postId, postId)
    },
    setUser (state, { userId, user }) {
      Vue.set(state.users, userId, user)
    }
  },
  modules: {
  }
})
