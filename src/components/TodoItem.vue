<script setup>
import { TrashIcon, PencilIcon } from "@heroicons/vue/24/outline";
import { ref, computed } from "vue";

const props = defineProps({
  todo: {
    type: Object,
  },
});

const modal = ref();

const priorityColor = computed(() => {
  let background = "";
  switch (props.todo.priority) {
    case "very-high":
      background = "bg-[#ED4C5C]";
      break;
    case "high":
      background = "bg-[#F8A541]";
      break;
    case "normal":
      background = "bg-[#00A790]";
      break;
    case "low":
      background = "bg-[#428BC1]";
      break;

    default:
      background = "bg-[#8942C1]";
      break;
  }

  return background;
});
</script>

<template>
  <div
    data-cy="todo-item"
    class="flex justify-between w-full px-6 py-8 bg-white rounded-xl"
  >
    <div class="flex items-center justify-between space-x-4">
      <input
        data-cy="todo-item-checkbox"
        id="checked"
        name="remember-me"
        type="checkbox"
        class="w-6 h-6 border-gray-300 text-primary focus:ring-primary"
      />

      <div class="w-3 h-3 rounded-full" :class="[priorityColor]"></div>

      <h3 data-cy="todo-item-title" class="text-lg font-medium text-dark">
        {{ todo.title }}
      </h3>

      <div class="w-4 h-4 text-lightDark">
        <PencilIcon data-cy="todo-item-edit-button" />
      </div>
    </div>

    <button
      @click="modal.openModal"
      class="w-6 h-6 text-lightDark"
      data-cy="todo-item-delete-button"
    >
      <TrashIcon data-cy="todo-item-delete" />
    </button>
  </div>
</template>
