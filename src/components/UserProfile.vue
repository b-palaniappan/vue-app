<template>
  <div id="profile">
    @{{ user.username }} -- {{ fullName }}
    <br>
    <strong>Followers: {{ followers }}</strong>
    <br>
    <button @click="followUser">Follow</button>
    <br>
    <!-- Enable only if isAdmin is true -->
    <div v-if="user.isAdmin">
      <strong>Admin</strong>
    </div>
    <div v-else>
      <strong>User</strong>
    </div>
    <create-tweet @newTweet="createTweet" />
    <hr>
    <div><strong>Tweets :</strong></div>

    <!-- @selectedTweet have to match the event name from the $emit -->
    <tweet-item v-for="tweet in user.tweets" :key="tweet.id" :username="user.username" :tweet="tweet" @selectedTweet="toggleSelected" />
  </div>
</template>

<script>
import TweetItem from "./TweetItem.vue"
import CreateTweet from "./CreateTweet.vue"

export default {
  name: 'App',
  components: { TweetItem, CreateTweet },
  data() {
    return {
      followers: 0,
      user: {
        id: 1,
        username: '_balap',
        firstName: 'Balasubramanian',
        lastName: 'Palaniappan',
        email: 'bala@c12.io',
        isAdmin: true,
        tweets: [
          {id: 1, message: "Hello world our first message"},
          {id: 2, message: "How is the second message going on"}
        ]
      }
    }
  },
  watch: {
    // watch datachange on the data and react based on it.
    followers(newValue, oldValue) {
      if (newValue > oldValue) {
        console.log(`${this.user.username} gained a follower. Enjoy !!!`)
      }
    }
  },
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`;
    }
  },
  methods: {
    // general methods
    followUser() {
      this.followers++
    },
    toggleSelected(id) {
      console.log(`selected Tweet is #${id}`)
    },
    createTweet(newTweet) {
      this.user.tweets.unshift({
        id: this.user.tweets.length + 1,
        message: newTweet
      })
    }
  },
  mounted() {
    // when a component is loaded.
    // Its a life cycle method
    console.log('component is loaded . . .');
    this.followUser();
  }
}
</script>
