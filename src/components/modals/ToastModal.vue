<script setup>
import { ref } from "vue";

const modalActive = ref(false);

const toggleModal = () => {
  modalActive.value = !modalActive.value;
  return;
};
defineExpose({ toggleModal });
</script>

<template>
  <Transition name="modal-outer">
    <div
      v-show="modalActive"
      class="fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-black bg-opacity-40"
      @click.self="toggleModal()"
    >
      <Transition name="modal-inner">
        <div class="relative w-full h-auto max-w-xl p-4 md:h-auto">
          <div class="relative p-4 bg-white rounded-lg shadow">
            <div class="inline-flex items-center gap-4">
              <i
                class="fa-solid fa-circle-info fa-2x"
                style="color: #00a790"
              ></i>
              <span>Activity berhasil dihapus</span>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>
