<template>
    <div class="container mx-auto py-8">
        <h1 class="text-3xl font-bold mb-4">Blog</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- <BlogPostCard v-for="post in posts" :key="post._path" :title="post.title" :excerpt="post.excerpt"
                :date="post.date" :coverImage="post.coverImage" :slug="post._path" /> -->
            {{ posts }}
        </div>
    </div>
</template>

<script setup>


    const { data: posts } = await useAsyncData('blog', () => queryCollection('blog').all())
    console.log('posts: ', posts.value)
</script>