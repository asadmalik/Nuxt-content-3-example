<template>
  <div class="rounded-lg shadow-md hover:shadow-lg overflow-hidden bg-white dark:bg-gray-800">
    <NuxtLink :to="post.path">
      <img v-if="post.coverImage" :src="post.coverImage" :alt="post.title" class="w-full h-48 object-cover" />
    </NuxtLink>
    <div class="p-6">
      <NuxtLink :to="post.path">
        <h2 class="text-xl font-bold mt-2">{{ post.title }}</h2>
      </NuxtLink>
      <NuxtLink :to="post.path">
        <p class="text-gray-600 dark:text-gray-300 mt-2">{{ post.excerpt }}</p>
      </NuxtLink>
      <div class="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
        <span>{{ post.author }} &nbsp;•&nbsp; date</span>
      </div>
    </div>
  </div>
</template>

<script setup>


defineProps({
  post: Object
});
</script>