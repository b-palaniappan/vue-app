<template>
  <router-link to="/">Home</router-link>
  <!-- display username from state -->
  <h4 v-if="user">current User -- {{ user.username }}</h4>
  <router-view/>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'App',
  setup() {
    const store = useStore()
    // get user from vuex state
    const user = computed(() => store.state.User.user)
    return {
      user
    }
  }
}
</script>
