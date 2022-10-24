<script setup>

import { ref } from 'vue';
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { XMarkIcon } from "@heroicons/vue/24/outline";
// import { useTodosStore } from "../../stores/todos";

const props = defineProps({
  activityId: null
})
const emits = defineEmits(['onSubmitModal'])
// const todoStore = useTodosStore()

const priorities = [
  {
    title: 'Very High',
    color: 'bg-[#ED4C5C]',
    name: 'very-high'
  },
  {
    title: 'High',
    color: 'bg-[#F8A541]',
    name: 'high'
  },
  {
    title: 'Medium',
    color: 'bg-[#00A790]',
    name: 'medium'
  },
  {
    title: 'Low',
    color: 'bg-[#428BC1]',
    name: 'low'
  },
  {
    title: 'Very Low',
    color: 'bg-[#8942C1]',
    name: 'very-low'
  },
]
const selectedPriority = ref(priorities[0])

const isOpen = ref(false)
const title = ref('')

const closeModal = () => {
  isOpen.value = false
}
const openModal = () => {

  isOpen.value = true
}

const handleSubmit = () => {

  const data = {
    title: title.value,
    activity_group_id: props.activityId,
    priority: selectedPriority.value.name
  }

  emits('onSubmitModal', data)
}

defineExpose({
  openModal, closeModal
})

</script>


<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10" data-cy="modal-add">
      <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
        leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex items-center justify-center min-h-full p-4 text-center">
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95">
            <DialogPanel
              class="w-full max-w-4xl text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <DialogTitle as="div"
                class="flex items-center justify-between p-6 text-lg font-medium leading-6 border-b border-[#E5E5E5]">
                <h3 class="text-lg font-semibold" data-cy="modal-add-title">Tambah Item List</h3>

                <div class="w-6 h-6 cursor-pointer text-[#A4A4A4]" @click="closeModal">
                  <XMarkIcon data-cy="modal-add-close-button" />
                </div>
              </DialogTitle>

              <!-- <form @submit="handleSubmit"> -->
              <div class="px-6 my-6">
                <div>
                  <label data-cy="modal-add-name-title" for="price" class="block text-xs font-semibold text-dark">NAMA
                    LIST ITEM</label>
                  <div class="relative mt-2 rounded-md shadow-sm">
                    <input v-model="title" type="text" data-cy="modal-add-name-input"
                      class="block w-full p-4 rounded-md border-lightDark focus:border-primary focus:ring-primary sm:text-base"
                      placeholder="Tambahkan nama list item">
                  </div>
                </div>

                <div class="mt-4">
                  <label data-cy="modal-add-priority-title" for="priority"
                    class="block text-xs font-semibold text-dark">PRIORITY</label>
                  <Listbox v-model="selectedPriority">
                    <div class="mt-2" data-cy="modal-add-priority-dropdown">
                      <ListboxButton
                        class="relative p-4 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary sm:text-base focus:ring-primary focus:border-primary">
                        <div class="flex items-center space-x-4" data-cy="modal-add-priority-item">
                          <span class="w-3 h-3 rounded-full" :class="[selectedPriority.color]"></span>
                          <span>{{ selectedPriority.title }}</span>
                        </div>
                        <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          <ChevronDownIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
                        </span>
                      </ListboxButton>

                      <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
                        leave-to-class="opacity-0">
                        <ListboxOptions
                          class="absolute mt-1 overflow-auto text-base font-normal bg-white rounded-md shadow-lg ring-1 ring-primary ring-opacity-5 focus:outline-none sm:text-base">
                          <ListboxOption v-slot="{ active, selected }" v-for="priority in priorities"
                            :key="priority.title" :value="priority" as="template">
                            <li :class="[
                              active ? 'bg-primary text-white' : 'text-dark',
                              'relative cursor-default select-none w-full px-4 py-2',
                            ]">
                              <div :class="[
                                selected ? 'font-medium' : 'font-normal',
                                'flex items-center space-x-4',
                              ]">
                                <span class="w-3 h-3 rounded-full" :class="[priority.color]"></span>
                                <span>{{ priority.title }}</span>
                              </div>
                            </li>
                          </ListboxOption>
                        </ListboxOptions>
                      </transition>
                    </div>
                  </Listbox>
                </div>

              </div>

              <div class="border-t border-[#E5E5E5] p-6 flex justify-end">
                <button @click="handleSubmit" type="submit" data-cy="modal-add-save-button"
                  class="items-center hidden px-8 py-4 text-lg font-semibold text-white rounded-full sm:flex bg-primary">

                  Simpan
                </button>
              </div>
              <!-- </form> -->

            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

