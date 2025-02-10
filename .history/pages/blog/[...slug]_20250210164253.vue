<template>
  <div>
    
  </div>
</template>

<script lang="ts" setup>
  const route = useRoute()
  const { data: page } = await useAsyncData(route.path, () => {
    return queryCollection('blog').path(route.path).first()
  })
</script>

<style scoped>

</style>