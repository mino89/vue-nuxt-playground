<template>
    <div v-if="post">
        
        <h1>{{ post.title }}</h1>
        {{ post.body}}
    </div>
</template>

<script>

export default {
    computed: {
        post() {
            return this.$store.state.posts.post
        }
    },
    mounted() {
        
        this.$store.dispatch('posts/fetchPost', this.$route.params.id)
        console.log(this.$store.state)
    }
}
</script>