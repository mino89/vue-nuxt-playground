<template>
  <div v-if="posts">
    <h1>Posts</h1>
    <div v-for="post in posts.posts" :key="post.id">
      <h1><NuxtLink :to="`/posts/${post.id}`">{{ post.title }}</NuxtLink></h1>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    posts() {
      return this.$store.state.posts
    }
  },
  mounted() {
    this.$store.dispatch('posts/fetchPosts')
  }
}
</script>
