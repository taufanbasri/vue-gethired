<script setup>
import { TrashIcon } from "@heroicons/vue/24/outline";
import { computed } from "vue";
import { useDateFormat } from "@vueuse/shared";
import { useActivityStore } from "../stores/activity";

const activityStore = useActivityStore()
const props = defineProps({
  activity: {
    type: Object
  }
})

const dateFormated = computed(() => {
  let formatedDate = useDateFormat(props.activity.created_at, 'D MMMM YYYY')

  return formatedDate.value
})

function deleteHandler() {
  activityStore.removeActivity(props.activity.id)
}

</script>

<template>
  <div class="flex flex-col justify-between px-6 py-8 space-y-24 bg-white rounded-xl">
    <h3 class="text-lg font-bold text-dark" data-cy="activity-item-title">{{ activity.title }}</h3>

    <div class="flex items-center justify-between text-lightDark">
      <span data-cy="activity-item-date">{{ dateFormated }}</span>
      <button @click="deleteHandler" class="w-6 h-6">
        <TrashIcon data-cy="activity-item-delete-button" />
      </button>
    </div>
  </div>
</template>