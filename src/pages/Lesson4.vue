

<template>
    <q-page padding>
        <h6 class="text-center  q-my-sm">Qrating</h6>
        <q-rating color="secondary" size="xl" v-model="rating" />
        <q-rating color="negative" size="xl" v-model="rating" icon="favorite" />
        <q-rating color="indigo" size="xl" v-model="rating" icon="favorite"   :max="10" />
        <q-rating color="teal" size="xl" v-model="rating" icon="favorite_border"   :max="20" icon-selected="favorite"/>
        <q-rating color="black" size="xl" v-model="rating" icon="favorite_border"  readonly />
        <q-rating color="positive" size="xl" v-model="rating" icon="favorite_border"  disable />

    </q-page>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'Lesson2Page',
    components: {},
    setup() {
        const rating = ref(3)
        return { rating };
    }
});
</script>
  