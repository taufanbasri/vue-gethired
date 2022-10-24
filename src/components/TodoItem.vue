<script setup>
import { TrashIcon, PencilIcon } from "@heroicons/vue/24/outline";
import { ref, computed } from "vue";
import DeleteModal from "./modals/DeleteModal.vue";
import IndicatorItem from "../components/IndicatorItem.vue";

const props = defineProps({
  todo: {
    type: Object
  }
})

const modal = ref()

const priorityColor = computed(() => {
  return `bg-${props.todo.priority}`
})

</script>

<template>
  <div class="flex justify-between w-full px-6 py-8 bg-white rounded-xl">
    <div class="flex items-center justify-between space-x-4">

      <input data-cy="todo-item-checkbox" id="checked" name="remember-me" type="checkbox"
        class="w-6 h-6 border-gray-300 text-primary focus:ring-primary" />

      <IndicatorItem :priorityColor="priorityColor" data-cy="todo-item-priority-indicator" />

      <h3 data-cy="todo-item-title" class="text-lg font-medium text-dark">{{ todo.title }}</h3>

      <div class="w-4 h-4 text-lightDark">
        <PencilIcon data-cy="todo-item-edit-button" />
      </div>
    </div>

    <button @click="modal.openModal" class="w-6 h-6 text-lightDark">
      <TrashIcon data-cy="todo-item-delete" />
    </button>
  </div>

  <DeleteModal ref="modal" :todo="todo" />
</template>