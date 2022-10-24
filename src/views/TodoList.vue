<script setup>

import { ref, onMounted, computed } from "vue";
import { PlusIcon, ChevronLeftIcon } from "@heroicons/vue/24/solid";
import { PencilIcon, ArrowsUpDownIcon } from "@heroicons/vue/24/outline";
import { useRoute, useRouter } from "vue-router";
import { useTodosStore } from "../stores/todos";
import TodoItem from "../components/TodoItem.vue";
import TodoModal from "../components/modals/TodoModal.vue";

const route = useRoute()
const router = useRouter()
const todosStore = useTodosStore()

onMounted(async () => {
  await todosStore.getAllTodos(route.params.id)
})

const modal = ref()

const activityId = computed(() => {
  return route.params.id
})

const backHandler = () => {
  router.push({
    path: '/',
    replace: true
  })
}

async function handleSubmit(data) {
  await todosStore.createTodo(data)
}

</script>

<template>
  <main>
    <!-- Panel title -->
    <div class="flex items-center justify-between">

      <div class="flex items-center text-4xl font-bold text-dark">
        <button @click="backHandler" class="w-8 h-8">
          <ChevronLeftIcon data-cy="todo-back-button" class="font-extrabold" />
        </button>

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

    <div class="flex flex-col space-y-4 mt-14">
      <!-- Card Item -->
      <TodoItem v-for="todo in todosStore.todos" :key="todo.id" :todo="todo" />

    </div>

    <!-- Modal -->
    <TodoModal @on-submit-modal="handleSubmit" ref="modal" :activityId="activityId"></TodoModal>
  </main>
</template>
