import Vue from 'vue'
import Vuex from 'vuex'
import sourceDate from '@/data.json'
import { countObjectProperties, appendChildToParentMutationMaker } from '@/helpers'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ...sourceDate,
    authUserId: '38St7Q8Zi2NSJIPa5ahzssq9kbyp1'
  },
  getters: {
    authUser (state) {
      return state.users[state.authUserId]
    },
    // You can pass arguments to getters by returning a function (closure)
    userPostsCount: state => id => countObjectProperties(state.users[id].posts),
    userThreadsCount: state => id => countObjectProperties(state.users[id].threads),
    threadRepliesCount: state => id => countObjectProperties(state.threads[id].posts) - 1
  },
  actions: {
    createPost ({ commit, state }, post) {
      const postId = `newPost${Math.random()}`
      post['.key'] = postId
      post.userId = state.authUserId
      post.publishedAt = Math.floor(Date.now())
      commit('setPost', { post, postId })
      commit('appendPostToThreads', { parentId: post.threadId, childId: postId })
      commit('appendPostToUser', { parentId: post.userId, childId: postId })
      // we need to promisifie it to return the post, to use it to make it the first post in a newly created thread
      return Promise.resolve(state.posts[postId])
    },
    updatePost ({ commit, state }, { id, text }) {
      return new Promise((resolve, reject) => {
        const post = state.posts[id]
        commit('setPost', {
          post: {
            ...post,
            text,
            edited: {
              at: Math.floor(Date.now()),
              by: state.authUserId
            }
          },
          postId: id
        })
        resolve(post)
      })
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
        commit('appendThreadToForum', { parentId: forumId, childId: threadId })
        commit('appendThreadToUser', { parentId: userId, childId: threadId })
        dispatch('createPost', { text, threadId }).then(post => {
          commit('setThread', { thread: { ...thread, firstPostId: post['.key'] }, threadId })
        })
        resolve(state.threads[threadId])
      })
    },
    updateThread ({ state, commit, dispatch }, { title, text, id }) {
      return new Promise((resolve, reject) => {
        const thread = state.threads[id]
        const newThread = { ...thread, title }
        commit('setThread', { thread: newThread, threadId: id })
        // because it's async, we need to wait for the updatPost to finish to resolve the newThread
        dispatch('updatePost', { id: newThread.firstPostId, text }).then(() => resolve(newThread))
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
    setUser (state, { userId, user }) {
      Vue.set(state.users, userId, user)
    },
    // set thread to threads array
    setThread (state, { thread, threadId }) {
      Vue.set(state.threads, threadId, thread)
    },
    // append post to threads array
    appendPostToThreads: appendChildToParentMutationMaker({ parent: 'threads', child: 'posts' }),
    // append post to users.posts
    appendPostToUser: appendChildToParentMutationMaker({ parent: 'users', child: 'posts' }),
    // append thread to forum.threads
    appendThreadToForum: appendChildToParentMutationMaker({ parent: 'forums', child: 'threads' }),
    // append thread to user.threads
    appendThreadToUser: appendChildToParentMutationMaker({ parent: 'users', child: 'threads' })
  },
  modules: {
  }
})
