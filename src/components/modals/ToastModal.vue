<script setup>
import { InformationCircleIcon } from "@heroicons/vue/24/outline";
import { ref } from "vue";

const isOpen = ref(false);

const toggleModal = () => {
  isOpen.value = !isOpen.value;
  return;
};
defineExpose({ toggleModal });
</script>

<template>
  <Transition name="modal-outer">
    <div
      v-show="isOpen"
      class="fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-black bg-opacity-40"
      @click.self="toggleModal()"
    >
      <Transition name="modal-inner">
        <div class="relative w-full h-auto max-w-xl p-4 md:h-auto">
          <div class="relative p-4 bg-white rounded-lg shadow">
            <div class="flex items-center gap-4">
              <InformationCircleIcon class="w-8 text-[#00A790]" />
              <span>Activity berhasil dihapus</span>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>
