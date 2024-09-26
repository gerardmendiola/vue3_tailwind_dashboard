<template>
    <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right">
            <thead class="text-xs uppercase">
                <tr class="border-b border-zinc-500">
                    <th scope="col" class="px-6 py-3">
                        Title
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Body
                    </th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(item, key) in postList" :key="key">
                    <tr class="border-b border-zinc-500 cursor-pointer" @click="onDisplayPost(item)">
                        <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                            {{ item.title }}
                        </th>
                        <td class="px-6 py-4">
                            {{ item.body }}
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>

        <transition name="fade">
            <div v-if="isModalVisible" class="absolute top-0 lg:left-1/4 left-0 shadow-2xl lg:w-3/6 w-full">
                <div
                class="lg:w-4/6 w-full p-3 relative mx-auto my-auto rounded-xl shadow-lg bg-zinc-500"
                >
                <div>
                    <div class="p-3 flex-auto justify-center leading-6">
                        <h2 class="text-2xl font-bold py-4 text-center">Post Details</h2>
                        <div class="mb-2">
                            <p><b>ID: </b> {{ selectedPost.id }}</p> 
                        </div>
                        <div class="mb-2">
                            <p><b>User: </b>{{ selectedPost.userId }}</p>
                        </div>
                        <div class="mb-2">
                            <p><b>Title: </b> {{ selectedPost.title }}</p>
                        </div>
                        <div>
                            <p><b>Body: </b> {{ selectedPost.body }}</p>
                        </div>
                    </div>
                    <div class="p-3 mt-2 text-center space-x-4 md:block">
                        <button
                            @click="isModalVisible = !isModalVisible"
                            class="mb-2 md:mb-0 bg-blue-500 border border-blue-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider rounded-md hover:shadow-lg hover:bg-blue-600">
                            Close
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    data:() => ({
        selectedPost: {},
        isModalVisible: false
    }),
    computed: {
        postList() {
            return this.$store.state.postList
        }
    },
    methods: {
        onDisplayPost(data) {
            this.$store.dispatch("getSpecificPost", data.id)
            this.selectedPost = data
            this.isModalVisible = true
        }
    }
}
</script>