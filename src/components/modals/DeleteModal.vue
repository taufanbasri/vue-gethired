<script setup>
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from "@headlessui/vue";
import { ExclamationTriangleIcon } from "@heroicons/vue/24/outline";

const isOpen = ref(false);

defineProps({
  message: {
    type: String,
    default: "New String",
  },
  todo: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["delete-modal"]);

const closeModal = () => {
  isOpen.value = false;
};
const openModal = () => {
  isOpen.value = true;
};

defineExpose({
  openModal,
  closeModal,
});
</script>

<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex items-center justify-center min-h-full p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-lg text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
            >
              <!-- Content -->
              <div class="flex items-center justify-center w-16 mx-auto py-14">
                <ExclamationTriangleIcon class="text-sweetRed" />
              </div>

              <div
                class="flex flex-col items-center justify-center mx-auto text-lg pb-14 text-dark"
              >
                <p class="font-medium">
                  Apakah anda yakin menghapus
                  {{ !todo ? "activity" : "List Item" }}
                </p>
                <p class="font-bold">"{{ message }}"?</p>
              </div>

              <div class="flex items-center justify-center p-6 space-x-4">
                <button
                  data-cy="modal-delete-cancel-button"
                  @click="closeModal"
                  class="items-center hidden px-8 py-4 text-lg font-semibold text-[#4A4A4A] rounded-full sm:flex bg-[#F4F4F4]"
                >
                  Batal
                </button>
                <button
                  @click="$emit('delete-modal')"
                  data-cy="modal-delete-confirm-button"
                  class="items-center hidden px-8 py-4 text-lg font-semibold text-white rounded-full sm:flex bg-sweetRed"
                >
                  Hapus
                </button>
              </div>
              <!-- End Content -->
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
