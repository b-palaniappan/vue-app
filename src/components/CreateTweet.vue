<template>
  <form action="#" id="createTweet" @submit.prevent="submitTweet" :class="{ 'exceed': tweetCharacterCount > 180 }">
    <label for="newTweet"><strong>New Tweet</strong> ({{ tweetCharacterCount }} / 180)</label>
    <br>
    <textarea name="newTweet" id="newTweet" cols="30" rows="4" v-model="newTweetContent"></textarea>
    <div>
      <label for="tweetType"><strong>New Tweet Type</strong></label>
      <br>
      <select name="tweetType" id="tweetType" v-model="selectedTweetType">
        <option :value="option.value" v-for="(option, index) in tweetTypes" :key="index">
          {{ option.name }}
        </option>
      </select>
      <br>
      <button>
        Tweet!
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "CreateTweet",
  data() {
    return {
      tweetTypes: [
        { value: 'draft', name: 'Draft' },
        { value: 'instant', name: 'Instant Tweet' }
      ],
      newTweetContent: '',
      selectedTweetType: 'instant'
    }
  },
  methods: {
    submitTweet() {
      if (this.newTweetContent && this.selectedTweetType !== 'draft') {
        this.$emit('newTweet', this.newTweetContent)
      }
      this.newTweetContent = ''
    }
  },
  computed: {
    tweetCharacterCount() {
      return this.newTweetContent.length
    }
  }
}
</script>

<style lang="scss" scoped>
.exceed {
  color: red;
  button {
    color: red;
  }
}
</style>
