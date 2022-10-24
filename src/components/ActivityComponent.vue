<script setup>
import { ref } from "vue";
import { TrashIcon } from "@heroicons/vue/24/outline";
import { computed } from "vue";
import { useDateFormat } from "@vueuse/shared";
// import { useActivityStore } from "../stores/activity";
import { RouterLink } from "vue-router";
import DeleteModal from "./modals/DeleteModal.vue";

// const activityStore = useActivityStore()

const props = defineProps({
  activity: {
    type: Object
  }
})

const dateFormated = computed(() => {
  let formatedDate = useDateFormat(props.activity.created_at, 'D MMMM YYYY')

  return formatedDate.value
})

const modal = ref()

// function deleteHandler() {
//   activityStore.removeActivity(props.activity.id)
// }

</script>

<template>
  <div class="flex flex-col justify-between px-6 py-8 bg-white rounded-xl">
    <RouterLink :to="`/todos/${activity.id}`" class="cursor-pointer h-28">
      <h3 class="text-lg font-bold text-dark" data-cy="activity-item-title">{{ activity.title }}</h3>
    </RouterLink>

    <div class="flex items-center justify-between text-lightDark">
      <span data-cy="activity-item-date">{{ dateFormated }}</span>
      <button @click="modal.openModal" class="w-6 h-6">
        <TrashIcon data-cy="activity-item-delete-button" />
      </button>
    </div>
  </div>

  <DeleteModal ref="modal" />
</template>