<template>
  <div>
    <Navbar />
    <NavDrawer />

    <RouterView class="max-w-full" />
  </div>
</template>
<script setup>
import Navbar from './components/Navbar.vue';
import NavDrawer from './components/NavDrawer.vue';

import { RouterView } from 'vue-router'
</script>