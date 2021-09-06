<template>
  <form action="#" id="createTweet" @submit.prevent="submitTweet()" :class="{ 'exceed': tweetCharacterCount > 180 }">
    <label for="newTweet"><strong>New Tweet</strong> ({{ tweetCharacterCount }} / 180)</label>
    <br>
    <textarea name="newTweet" id="newTweet" cols="30" rows="4" v-model="state.newTweetContent"></textarea>
    <div>
      <label for="tweetType"><strong>New Tweet Type</strong></label>
      <br>
      <select name="tweetType" id="tweetType" v-model="state.selectedTweetType">
        <option :value="option.value" v-for="(option, index) in state.tweetTypes" :key="index">
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
import { reactive, computed } from 'vue'

export default {
  name: 'CreateTweet',
  emits: ['newTweet'],
  setup(props, ctx) {
    const state = reactive({
      tweetTypes: [
        { value: 'draft', name: 'Draft' },
        { value: 'instant', name: 'Instant Tweet' }
      ],
      newTweetContent: '',
      selectedTweetType: 'instant'
    })

    const tweetCharacterCount = computed(() => state.newTweetContent.length)

    function submitTweet() {
      if (state.newTweetContent && state.selectedTweetType !== 'draft') {
        ctx.emit('newTweet', state.newTweetContent)
        state.newTweetContent = ''
      }
    }

    return {
      state,
      tweetCharacterCount,
      submitTweet
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
