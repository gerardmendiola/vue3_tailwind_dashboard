<template>
    <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-black dark:text-gray-100">
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
                        <td class="truncate px-6 py-4">
                            {{ item.body }}
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
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
    },
    methods: {
        onDisplayPost(data) {
            this.$store.dispatch("getSpecificPost", data.id)
            this.$store.dispatch("updateSelectedPost", { data: data, visibility: true })
        }
    }
}
</script>