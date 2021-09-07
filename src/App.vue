<template>
  <router-link to="/">Home</router-link>
  <h4>current User -- {{ user.username }}</h4>
  <router-view/>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'App',
  setup() {
    const store = useStore()
    const user = computed(() => store.state.user)
    return {
      user
    }
  }
}
</script>
