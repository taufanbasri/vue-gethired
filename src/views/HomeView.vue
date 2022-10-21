<script setup>

import { PlusIcon } from "@heroicons/vue/24/solid";
import ActivityComponent from "../components/ActivityComponent.vue";

</script>

<template>
  <main>
      <!-- Panel title -->
      <div class="flex items-center justify-between">
        <h2 class="text-4xl font-bold text-dark">Activity</h2>

        <button class="items-center hidden px-8 py-4 text-lg font-semibold text-white rounded-full sm:flex bg-primary">
          <span class="w-6 h-6 mr-2 text-lg font-semibold">
            <PlusIcon />
          </span>
          Tambah
        </button>

        <button class="items-center w-16 h-16 p-4 text-lg font-semibold text-white rounded-full sm:hidden bg-primary">
          <PlusIcon class="font-extrabold" />
        </button>
      </div>

      <div class="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-14">

        <!-- Activity List -->
        <ActivityComponent v-for="item in 8" :key="item" />

      </div>
  </main>
</template>
