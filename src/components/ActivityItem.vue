<script setup>
import { TrashIcon, PencilIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <div class="flex justify-between w-full px-6 py-8 bg-white rounded-xl">
    <div class="flex items-center justify-between space-x-4">

      <input id="checked" name="remember-me" type="checkbox" class="w-6 h-6 border-gray-300 text-primary focus:ring-primary" />

      <div class="w-3 h-3 bg-red-500 rounded-full"></div>

      <h3 class="text-lg font-medium text-dark">Daftar Belanja Bulanan</h3>

      <div class="w-4 h-4 text-lightDark">
        <PencilIcon />
      </div>
    </div>

    <div class="w-6 h-6 text-lightDark">
      <TrashIcon />
    </div>
  </div>
</template>