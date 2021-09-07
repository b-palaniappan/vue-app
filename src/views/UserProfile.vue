<template>
  <div id="profile">
    <h3>@{{ state.user.username }} -- {{ fullName }}</h3>
    <h4>User id --> {{ userId }}</h4>
    <hr>
    <strong>Followers: {{ state.followers }}</strong>
    <br>
    <button @click="followUser">Follow</button>
    <br>
    <!-- Enable only if isAdmin is true -->
    <div v-if="state.user.isAdmin">
      <strong>Admin</strong>
    </div>
    <div v-else>
      <strong>User</strong>
    </div>
    <create-tweet @newTweet="createTweet" />
    <hr>
    <div><strong>Tweets :</strong></div>

    <!-- @selectedTweet have to match the event name from the $emit -->
    <tweet-item v-for="tweet in state.user.tweets" :key="tweet.id" :username="state.user.username" :tweet="tweet" @selectedTweet="toggleSelected" />
  </div>
</template>

<script>
import { reactive, watch, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { users } from "@/assets/users.js"
import TweetItem from "@/components/TweetItem.vue"
import CreateTweet from "@/components/CreateTweet.vue"

export default {
  name: 'UserProfile',
  components: { TweetItem, CreateTweet },
  setup() {

    const route = useRoute()
    const userId = computed(() => route.params.userId)

    // TODO: if (userId) fetch from api based on user id.

    const state = reactive({
      followers: 0,
      user: users[userId.value - 1] || users[0]
    })

    // watch datachange on the data and react based on it.
    watch(() => state.followers, (newValue, oldValue) => {
      if (newValue > oldValue) {
        console.log(`${state.user.username} gained a follower. Enjoy !!!`)
      }
    })

    const fullName = computed(() => `${state.user.firstName} ${state.user.lastName}`)

    function followUser() {
      console.log(state.followers)
      state.followers++
    }

    function toggleSelected(id) {
      console.log(`selected Tweet is #${id}`)
    }

    function createTweet(newTweet) {
      state.user.tweets.unshift({
        id: state.user.tweets.length + 1,
        message: newTweet
      })
    }

    onMounted(() => {
      console.log('User Profile component loaded . . . ')
      followUser()
    })

    return {
      state,
      fullName,
      userId,
      followUser,
      toggleSelected,
      createTweet
    }
  }
}
</script>

<!-- scoped is only apply css for this component -->
<style lang="scss" scoped>
.button {
  display: inline-block;
}
</style>
