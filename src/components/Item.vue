<script lang="ts">
import {defineComponent} from 'vue'
import {RouteListApi} from '../RouteListApi.ts';
export default defineComponent({
  name: "Item",
  created() {

  },
  methods: {
      handleClick() {
         let url = process.env.APP_ERROR_HANDLER + RouteListApi.itemGet;

         axios.get(url, {});
      },
  },
  data() {
    return {}
  }
})
</script>

<template>

</template>

<style scoped>

</style>