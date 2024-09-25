<template>
    <nav
      :class="navMenu ? 'navbar-open' : 'navbar-close'"
      class="fixed top-0 left-0 h-screen p-4 overflow-y-auto transition-transform -translate-x-full lg:w-80 w-full bg-zinc-700"
    >
      <div class="flex pr-2 justify-end pb-3 border-b border-zinc-600">
        <button @click="toggleNavbar()" class="bg-transparent">
            <ChevronLeftIcon class="size-4 inline-block mb-1" />
        </button>
      </div>
      
      <ul class="list-none text-white text-center">
        <template v-for="(item, key) in pages" :key="key">
            <li :class="`my-4 pb-5 cursor-pointer border-b border-zinc-600 ${activeRoute(item.url)}`"
                @click="changeRoute(item)">
                {{ item.title }}
            </li>
        </template>
      </ul>
    </nav>
</template>

<script>
import { ChevronLeftIcon } from '@heroicons/vue/24/solid'

export default {
  components: {
    ChevronLeftIcon
  },
  data:() => ({
    pages: [
    { title: 'Dashboard', url: '/' },
    { title: 'About Us', url: '/about-us' },
    { title: 'Profile', url: '/profile' },
    ]
  }),
  computed: {
    navMenu() {
        return this.$store.state.navMenu
    }
  },
  methods: {
    toggleNavbar(){
        this.$store.commit("UPDATE_NAV_MENU", !this.navMenu)
    },
    changeRoute(data) {
        this.$router.push(data.url)
        this.$store.commit("UPDATE_NAV_MENU", false)
    },
    activeRoute(url) {
        if (url == this.$route.path) return 'text-blue-500 font-bold'
    }
  }
}
</script>

<style scoped>
.navbar {
  transition: all 330ms ease-out;
}

.navbar-open {
  transform: translateX(0%);
}
.navbar-close {
  transform: translateX(-100%);
}
</style>
