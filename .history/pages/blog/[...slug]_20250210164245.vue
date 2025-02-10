<template>
  <div>
    
  </div>
</template>

<script lang="ts" setup>

</script>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('docs').path(route.path).first()
})zz
<style scoped>

</style>