<script setup>
import { TrashIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <div class="flex flex-col justify-between px-6 py-8 space-y-24 bg-white rounded-xl">
    <h3 class="text-lg font-bold text-dark" data-cy="activity-item-title">Daftar Belanja Bulanan</h3>

    <div class="flex items-center justify-between text-lightDark">
      <span data-cy="activity-item-date">1 Oktober 2022</span>
      <div class="w-6 h-6">
        <TrashIcon data-cy="activity-item-delete-button" />
      </div>
    </div>
  </div>
</template>