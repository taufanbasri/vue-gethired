<script setup>
import { RouterView } from 'vue-router'
import AppBar from './components/AppBar.vue';
</script>

<template>

  <AppBar />

  <div class="flex items-center justify-center w-full max-w-5xl mx-auto">
    <div class="container p-10">
      <RouterView />
    </div>
  </div>

</template>

