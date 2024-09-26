<template>
    <div v-if="isModalVisible" class="absolute lg:top-24 top-0 left-0 shadow-2xl w-full">
        <div class="lg:w-4/6 w-full p-3 relative mx-auto my-auto rounded-xl shadow-lg bg-gray-400 dark:bg-zinc-500 text-black dark:text-gray-100">
            <div class="grid grid-flow-col justify-stretch pb-3 border-b-4 border-zinc-400">
                <div></div>
                <div class="text-center lg:pl-24 pl-12">
                    <h2 class="text-2xl font-bold pt-1">Post Details</h2>
                </div>
                <div class="text-end">
                    <button
                        @click="onHideModal()"
                        class="mb-2 md:mb-0 bg-blue-500 border border-blue-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider rounded-md hover:shadow-lg hover:bg-blue-600">
                        Close
                    </button>
                </div>
            </div>
            <div class="p-3 flex-auto justify-center leading-6 border-b-4 border-zinc-400">
                <div class="grid grid-flow-col justify-stretch">
                    <div class="mb-2">
                        <p><b>ID: </b> {{ selectedPost.id }}</p> 
                    </div>
                    <div class="mb-2">
                        <p><b>User: </b>{{ selectedPost.userId }}</p>
                    </div>
                </div>
                <div class="mb-2">
                    <p><b>Title: </b> {{ selectedPost.title }}</p>
                </div>
                <div>
                    <p><b>Body: </b> {{ selectedPost.body }}</p>
                </div>
            </div>
            <div class="mt-3">
                <div class="font-bold text-3xl mb-3">Comment List</div>
                <template v-for="(item, key) in commentList" :key="key">
                    <div class="text-xs">
                        <b>Name: </b> {{ item.name }}
                    </div>
                    <div class="text-xs mb-3">
                        <b>Email: </b> {{ item.email }}
                    </div>
                    <div class="text-sm border-b border-zinc-400 mb-5 pb-2 italic">
                        {{ item.body }}
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        postList() {
            return this.$store.state.postList
        },
        commentList() {
            return this.$store.state.commentList
        },
        selectedPost() {
            return this.$store.state.selectedPost
        },
        isModalVisible() {
            return this.$store.state.isModalVisible
        },
    },
    methods: {
        onHideModal() {
            this.$store.commit("UPDATE_VISIBILITY", false)
        }
    }
}
</script>