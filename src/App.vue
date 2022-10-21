<script setup>
import { RouterView } from 'vue-router'
import AppBar from './components/AppBar.vue';
</script>

<template>
  <header class="flex h-[105px] items-center justify-center w-full mx-auto bg-primary">
    <AppBar />
  </header>

  <div class="flex items-center justify-center w-full max-w-5xl mx-auto">
    <div class="container p-10">
      <RouterView />
    </div>
  </div>

</template>

