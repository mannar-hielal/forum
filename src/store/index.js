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
    createPost ({ commit, state }, post) {
      const postId = `newPost${Math.random()}`
      post['.key'] = postId
      post.userId = state.authUserId
      post.publishedAt = Math.floor(Date.now())
      commit('setPost', { post, postId })
      commit('appendPostToThreads', { threadId: post.threadId, postId })
      commit('appendPostToUser', { postId, userId: post.userId })
    },
    createThread ({ commit, state, dispatch }, { title, text, forumId }) {
      return new Promise((resolve, reject) => {
        const threadId = `newthread${Math.random()}`
        const publishedAt = Math.floor(Date.now())
        const userId = state.authUserId
        const thread = {
          '.key': threadId,
          title,
          forumId,
          publishedAt,
          userId
        }
        // create the thread first, only then add a post to it
        commit('setThread', { thread, threadId })
        commit('appendThreadToForum', { forumId, threadId })
        commit('appendThreadToUser', { threadId, userId })
        dispatch('createPost', { text, threadId })
        resolve(state.threads[threadId])
      })
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
      // if thread doens't have posts property, intialize empty one
      if (!thread.posts) {
        Vue.set(thread, 'posts', {})
      }
      Vue.set(thread.posts, postId, postId)
    },
    // set post to users.posts
    appendPostToUser (state, { postId, userId }) {
      const user = state.users[userId]
      // if user doens't have posts property, intialize empty one
      if (!user.posts) {
        Vue.set(user, 'posts', {})
      }
      Vue.set(user.posts, postId, postId)
    },
    setUser (state, { userId, user }) {
      Vue.set(state.users, userId, user)
    },
    // set thread to threads array
    setThread (state, { thread, threadId }) {
      // this.$set(object, propertyName, value to add to the propertyName)
      Vue.set(state.threads, threadId, thread)
    },
    appendThreadToForum (state, { forumId, threadId }) {
      const forum = state.forums[forumId]
      // if forum doens't have threads property, intialize empty one
      if (!forum.threads) {
        Vue.set(forum, 'threads', {})
      }
      Vue.set(forum.threads, threadId, threadId)
    },
    appendThreadToUser (state, { threadId, userId }) {
      const user = state.users[userId]
      // if user doens't have threads property, intialize empty one
      if (!user.threads) {
        Vue.set(user, 'threads', {})
      }
      Vue.set(user.threads, threadId, threadId)
    }
  },
  modules: {
  }
})
