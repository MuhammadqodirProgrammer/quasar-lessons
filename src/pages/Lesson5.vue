

<template>
    <q-page padding>
        <h6 class="text-center  q-my-sm">QBanner</h6>

        <q-banner class="bg-primary text-white" danse>

            <template #avatar>
                <q-icon name="warning" />
            </template>

            Are you sure you want to continue
        </q-banner>

        <q-separator class="q-my-lg" />
        <q-banner class="bg-primary text-white" rounded>
            <template #avatar>
                <q-img src="https://picsum.photos/80/80" width="80px" />
            </template>
            Are you sure you want to continue
        </q-banner>

        <q-separator class="q-my-lg" />
        <q-banner class="bg-primary text-white" danse>

            <template #avatar>
                <q-icon name="warning" />
            </template>

            Are you sure you want to continue
            <template #action>
                <q-btn color="white" class="bg-indigo" flat label="Find out more" />
            </template>
        </q-banner>


        <q-separator class="q-my-lg" />
        <q-banner class="bg-primary text-white" rounded inline-actions >

            <template #avatar>
                <q-icon name="warning" />
            </template>

            Are you sure you want to continue
            <template #action>
                <q-btn color="white" class="bg-indigo" flat label="Find out more" />
            </template>
        </q-banner>

    </q-page>
</template>
  
<script lang="ts">
import { defineComponent, } from 'vue';

export default defineComponent({
    name: 'Lesson2Page',
    components: {},
    setup() {

        return {};
    }
});
</script>
  