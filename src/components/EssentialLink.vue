<template>
   <q-item clickable :to="link"  exact exact-active-class="bg-secondary text-white" >

    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label>{{ description }}</q-item-label>

    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },
    description:{
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  }
});
</script>
