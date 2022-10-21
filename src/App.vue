<script setup>
import { RouterView } from 'vue-router'
import AppBar from './components/AppBar.vue';
</script>

<template>
  <header>
    <AppBar />
  </header>

  <RouterView />
</template>

