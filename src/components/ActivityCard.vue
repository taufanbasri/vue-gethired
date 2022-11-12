<script setup>
import { TrashIcon } from "@heroicons/vue/24/outline";
import { computed } from "vue";
import { useDateFormat } from "@vueuse/shared";
import { RouterLink } from "vue-router";

const props = defineProps({
  activity: {
    type: Object,
  },
});

defineEmits(["delete"]);

const dateFormated = computed(() => {
  let formatedDate = useDateFormat(props.activity.created_at, "D MMMM YYYY");

  return formatedDate.value;
});
</script>

<template>
  <div
    data-cy="activity-item"
    class="flex flex-col justify-between px-6 py-8 bg-white rounded-xl"
  >
    <RouterLink :to="`/detail/${activity.id}`" class="cursor-pointer h-28">
      <h3 class="text-lg font-bold text-dark" data-cy="activity-item-title">
        {{ activity.title }}
      </h3>
    </RouterLink>

    <div class="flex items-center justify-between text-lightDark">
      <span data-cy="activity-item-date">{{ dateFormated }}</span>
      <button
        data-cy="activity-item-delete-button"
        @click.stop="$emit('delete')"
        class="w-6 h-6"
      >
        <TrashIcon />
      </button>
    </div>
  </div>
</template>
