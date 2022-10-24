<script setup>

import { ref } from "vue";
import { PlusIcon, ChevronLeftIcon } from "@heroicons/vue/24/solid";
import { PencilIcon, ArrowsUpDownIcon } from "@heroicons/vue/24/outline";
import TodoItem from "../components/TodoItem.vue";

import ModalComponent from "../components/ModalComponent.vue";


const modal = ref()

</script>

<template>
  <main>
    <!-- Panel title -->
    <div class="flex items-center justify-between">

      <div class="flex items-center text-4xl font-bold text-dark">
        <div class="w-8 h-8">
          <ChevronLeftIcon data-cy="todo-back-button" class="font-extrabold" />
        </div>
        <h2 class="mx-4" data-cy="todo-title">Activity</h2>
        <div class="w-8 h-8 text-lightDark">
          <PencilIcon data-cy="todo-title-edit-button" />
        </div>
      </div>

      <div class="flex items-center space-x-4">
        <div class="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full text-lightDark">
          <ArrowsUpDownIcon data-cy="todo-sort-button" class="w-8 h-8" />
        </div>

        <button @click="modal.openModal" data-cy="todo-add-button"
          class="items-center hidden px-8 py-4 text-lg font-semibold text-white rounded-full sm:flex bg-primary">
          <span class="w-6 h-6 mr-2 text-lg font-semibold">
            <PlusIcon />
          </span>
          Tambah
        </button>
      </div>

      <!-- Mobile View -->
      <button class="items-center w-16 h-16 p-4 text-lg font-semibold text-white rounded-full sm:hidden bg-primary">
        <PlusIcon class="font-extrabold" />
      </button>
    </div>

    <div class="mt-14">
      <!-- Card Item -->
      <TodoItem />

    </div>

    <!-- Modal -->
    <ModalComponent ref="modal"></ModalComponent>
  </main>
</template>
