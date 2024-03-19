<template>
  <div @click="getData">
    list sampling updated

    something
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import axios from 'axios';

export default defineComponent({

  name: 'Sampling',
  components: {
  },
  methods: {
      getData() {
        axios.get('/api/item', {})
            .then(response => {
                console.log(response.data);
            });
      }
  }
})
</script>

<style scoped>

</style>