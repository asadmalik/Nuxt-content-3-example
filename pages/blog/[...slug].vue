<template>
  <div>
    <h1>{{ page?.title }}</h1>
    <div>
      <ContentRenderer v-if="page" :value="page" />
      <div v-else>Blog post not found.</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const route = useRoute()
  const { data: page } = await useAsyncData(route.path, () => {
    return queryCollection('blog').path(route.path).first()
  })

  //page.value ? console.log('got page: ', page) : console.log('no page');
</script>

<style scoped></style>