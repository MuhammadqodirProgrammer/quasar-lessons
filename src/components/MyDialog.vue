<template>
  <q-dialog :model-value="myDialog.$state.isOpen" :auto-close="test">

    <q-card>
      <q-toolbar class="bg-primary text-white">
        <q-toolbar-title>
          bu modal
        </q-toolbar-title>
        <q-btn icon="close" flat @click="closeModal" />
      </q-toolbar>

      <slot></slot>

    </q-card>

  </q-dialog>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,

} from 'vue';
import { useQuasar } from 'quasar'
import { modalState } from 'src/boot/myboots';
import { useDialogStore } from "../stores/modal"



export default defineComponent({
  name: 'DialogComponent',
  props: {
    title: {
      type: String,
      required: false
    },
  },
  setup(props) {
    const myDialog = useDialogStore();

    const test = ref(true)
    console.log(test.value, "testing");
    console.log(myDialog.$state.isOpen, "myDialog.$state.isOpen tttttttttttttttt");

    const closeModal = () => {
      myDialog.$state.isOpen = !myDialog.$state.isOpen
    }

    return { ...props, modalState, closeModal, myDialog, test };
  },
});
</script>
