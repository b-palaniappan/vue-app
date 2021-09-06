<template>
  {{ state.hello }}
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'HelloWorld',
  setup() {
    const state = reactive({
      hello='world'
    })
    return {state}
  },
}
</script>
