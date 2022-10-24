<script setup>

const props = defineProps({
  priorityColor: String
})

</script>

<template>
  <div class="w-3 h-3 rounded-full" :class=[priorityColor]></div>
</template>