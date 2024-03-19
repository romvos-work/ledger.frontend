<template>
  <div>
    ЗБС
  </div>
  <div>
    <button
        @click="handlerClick"
      >
      HIT ME
    </button>
    <router-link to="/sampling">
      SAMPLING
    </router-link>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageFirst',
  components: {
  },
  methods: {
    handlerClick() {
      axios.get(this.$route('/api/'));
    }
  },
})
</script>

<style scoped>

</style>