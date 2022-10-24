<script setup>

import { PlusIcon } from "@heroicons/vue/24/solid";
import { onMounted } from "vue";
import ActivityComponent from "../components/ActivityComponent.vue";
import { useActivityStore } from "../stores/activity";

const activityStore = useActivityStore()

function addActivity() {
  activityStore.createActivity()
}

onMounted(() => {
  activityStore.getActivities()
})

</script>

<template>
  <main>
    <!-- Panel title -->
    <div class="flex items-center justify-between">
      <h2 class="text-4xl font-bold text-dark" data-cy="activity-title">Activity</h2>

      <button @click="addActivity" data-cy="activity-add-button"
        class="items-center hidden px-8 py-4 text-lg font-semibold text-white rounded-full sm:flex bg-primary">
        <span class="w-6 h-6 mr-2 text-lg font-semibold">
          <PlusIcon />
        </span>
        Tambah
      </button>

      <button class="items-center w-16 h-16 p-4 text-lg font-semibold text-white rounded-full sm:hidden bg-primary">
        <PlusIcon class="font-extrabold" />
      </button>
    </div>

    <div v-if="!activityStore.activities.length" data-cy="activity-empty-state"
      class="flex items-center justify-center w-full max-w-lg mx-auto cursor-pointer mt-28">
      <img src="../assets/img/activity-empty-state.svg" alt="">
    </div>

    <div v-else class="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-14">

      <!-- Activity List -->
      <ActivityComponent v-for="activity in activityStore.activities" :key="activity" :activity="activity" />

    </div>
  </main>
</template>
