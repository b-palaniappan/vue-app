<template>
  <div @click="selectedTweet(tweet.id)">
    @{{ username }} - {{ tweet.message }}
  </div>
</template>

<script>
export default {
  name: "TweetItem",
  props: {
    username: {
      type: String,
      required: true
    },
    tweet: {
      type: Object,
      required: true
    }
  },
  methods: {
    selectedTweet(id) {
      console.log(`selected tweet is ${id}`)
      this.$emit('selectedTweet', id)
    }
  }
}
</script>
