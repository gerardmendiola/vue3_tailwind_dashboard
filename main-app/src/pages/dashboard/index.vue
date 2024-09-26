<template>
    <div class="max-w-max p-12">
        <span class="text-3xl font-bold">
            This is Dashboard
        </span>

        <PostsTable class="mt-6" />
    </div>
</template>

<script>
import PostsTable from './postsTable.vue'
export default {
  components: { PostsTable },
  mounted () {
    this.$store.dispatch("getPostList")
  }
}
</script>