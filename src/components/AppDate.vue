<template>
  <small> {{timestamp | humanFriendlyDate }}</small>
</template>

<script>
export default {
  name: 'AppDate',
  data () {
    return {
    }
  },
  props: {
    timestamp: {
      required: true,
      type: Number
    }
  },
  filters: {
    humanFriendlyDate (dateInMilliseconds) {
      const day = new Date(dateInMilliseconds).toString().slice(0, 3)
      const date = new Date(dateInMilliseconds).toLocaleString('en-GB', { timeZone: 'Europe/Zurich' })
      return `${day} ${date}`
    }
  }
}
</script>
