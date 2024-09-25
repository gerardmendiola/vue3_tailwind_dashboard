<template>
  <div>
    <Navbar></Navbar>
    <RouterView class="max-w-full" />
  </div>
</template>
<script setup>
// import HelloWorld from './pages/HelloWorld.vue'
import Navbar from './components/Navbar.vue';

import { RouterView } from 'vue-router'
</script>