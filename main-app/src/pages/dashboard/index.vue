<template>
  <div class="bg-gray-100 dark:bg-black max-w-max p-12">
    <div class="text-black dark:text-gray-100 text-3xl font-bold">
      This is Dashboard
    </div>
    <div class="text-black dark:text-gray-100 text-sm">
      Below is the post list table
    </div>

    <PostsTable class="mt-6" />
    <PostModal />
  </div>
</template>

<script>
import PostsTable from './postsTable.vue'
import PostModal from './postModal.vue'
export default {
  components: { PostsTable, PostModal },
  mounted () {
    this.$store.dispatch("getPostList")
  }
}
</script>