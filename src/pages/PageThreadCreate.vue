<template>
  <div>
    <h1>Create new thread in {{ forum.name }}</h1>
    <form>
        <div>
          <label for="thread_title">Title:</label>
          <input type="text" id="thread_title" class="form-control" name="title">
        </div>

        <div>
          <label for="thread_content">Content:</label>
          <textarea id="thread_content" class="form-control" name="content" rows="8" cols="140"></textarea>
        </div>

        <div class="actions d-flex justify-content-end">
            <!-- <button @click.prevent="cancel" class="btn btn-secondary me-2">Cancel</button> -->
            <button @click.prevent="publish" type="submit" class="btn btn-primary">Publish</button>
        </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'PageThreadCreate',
  props: {
    forum: {
      required: true,
      type: Object
    }
  },
  methods: {
    // dispatch publish action
  }
}
</script>
