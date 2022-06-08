<template>
    <v-progress-linear v-if="isLoading" color="primary" indeterminate></v-progress-linear>
</template>

<script>
export default {
    data() {
        return {
            isLoading: false
        }
    },
    created() {
        this.$axios.onRequest(() => {
            this.isLoading = true
            console.log('carico')
        })
        this.$axios.onResponse(() => {
            console.log('rispondo')
            this.isLoading = false
        })
    }
}
</script>