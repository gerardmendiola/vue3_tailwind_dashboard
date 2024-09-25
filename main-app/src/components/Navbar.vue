<template>
    <nav class="relative flex flex-wrap items-center justify-between py-4 shadow-lg bg-zinc-800">
        <div class="container mx-auto flex flex-wrap items-center justify-between">
            <div class="w-full relative flex justify-between w-auto static block justify-start">
                <button class="bg-transparent lg:mr-4" v-on:click="toggleNavbar()">
                    <Bars3Icon class="size-6 inline-block mb-1" />
                </button>
                
                <span class="text-xl capitalize mt-2">{{ displayTitle }}</span>
            </div>
            <div class="lg:flex lg:flex-grow items-center lg:mr-0 mr-5">
                <span class="flex flex-col lg:flex-row list-none ml-auto">
                    <img class="inline-block h-10 w-10 rounded-full ring-1 ring-white" alt="avatar"
                        src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
                </span>
            </div>
        </div>
    </nav>
</template>


<script>
import { Bars3Icon } from '@heroicons/vue/24/solid'

export default {
  components: {
    Bars3Icon
  },
  data:() => ({
    title: "",
  }),
  computed: {
    displayTitle() {
        return this.$route.path == '/' ? 'dashboard' : this.$route.path.split('/')[1]
    },
    navMenu() {
        return this.$store.state.navMenu
    }
  },
  methods: {
    toggleNavbar: function(){
        this.$store.commit("UPDATE_NAV_MENU", !this.navMenu)
    }
  }
}
</script>