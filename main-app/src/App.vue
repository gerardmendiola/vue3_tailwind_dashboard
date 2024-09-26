<template>
  <div :class="theme">
    <Navbar />
    <NavDrawer class="z-10" />

    <RouterView class="max-w-full" />
  </div>
</template>
<script setup>
import { computed } from 'vue';
import store from './store/index'
import Navbar from './components/Navbar.vue';
import NavDrawer from './components/NavDrawer.vue';

import { RouterView } from 'vue-router'

const theme = computed(() => store.state.theme);
</script>