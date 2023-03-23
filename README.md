# The Forum

This App is a multiple-category forum with dummy data, where a user can start a thread in a certain forum and other users can add replies to this thread. </br>
Threads are grouped in a forum (i.e Jokes Forum which contains many jokes threads), also the forums themselves are grouped in a category (i.e Comedy category which has Jokes Forum and Memes Forum).
## Demo
[Vuejs Forum](https://forum-vuejs2.herokuapp.com/).

![](/forum-screenshot.jpg)

## Features
- Forums are categorized under categories (multi-category forum).
- Users can open threads.
- Users can add a reply to a thread, edit it or delete it.
- Navigating the forum without reloading the page.</br></br>
## Tech stack & dependencies
- Vue.js v2
- Vue Components
- Vue CLI
- Vue router
- State management with Vuex
- Bootstrap
- Data.json (mocking a database)</br></br>

### Vue.js
Why Vue.js?</br>
- It's easy to grasp, and it doesn't require other tools to work.
- It has already adopted the best concepts of React and Angular (it has the best of both).
- With Vue.js v2 I didn't have to learn TypeScript first (TypeScript can be used, but it is not a prerequisite).</br></br>

### Vue Components
I nested the components (parent/children) and passed data between them using:
- Props: as in <code>ThreadList.vue</code> and <code>ThreadListItem.vue </code>
- Emiting custom events: as in <code>PostEditor</code> and <code>PageThreadShow</code></br></br>

### Lifecycle Hooks
Since they allow us to add our own code at specific stages of the vue instance, I used the <code>created</code> hook. It's the ideal place to fetch data or make AJAX call before the template is rendered in the DOM.</br></br>

### Vue CLI
Why to use the Vue CLI where we can imply inject vue.js library into our HTML?</br>
Because with Vue CLI:</br>
1- The template, the script and the style are all encapsulated in a single file.</br>
2- CSS is modularized into components</br>
3- We take advantages or ES6 and JS pre-processors like Babel.</br>
4- With its wizard asking your preferences (which vue.js version, router, vuex, Eslint..etc) it makes scaffolding a project superfast.</br>
5- Taking advantage of scoped styles, where an identifier is added next to element that only target this element, making the global style affectiveless.</br></br>

### Vue Router
Which maps every route (URL) to a component/view. It allows us:
- Navigate without refreshing the page, by fetching only the needed data.
- Code splitting: where only the script of the visited page is downloaded (i.e: the about page's script is extracted to its own bundle and loaded conditionally), thus improving speed of page load.</br></br>

### Vuex (the state management for Vue.js)
I wanted to store all forums, threads, users, posts data in one place and manipulate those data (state) using actions and mutations in one place, thus decoupling the data manipulation logic from the components. All the component could do is tell vuex on when to change the data. </br></br>
Example: in <code>PageThreadCreate.vue</code> the publish button triggers <code>save()</code> which tells vuex to creates a new thread inside a forum, then it redirect user to the newly created thread
```
   save () {
      this.$store.dispatch('createThread', {
        forumId: this.forum['.key'],
        title: this.title,
        text: this.text
      }).then(thread => this.$router.push({ name: 'ThreadShow', params: { id: thread['.key'] } }))
    },
```
## Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
### Lints and fixes files
```
npm run lint
```