

<template>
    <q-page class="flex flex-center justify-evenly">

      

        <q-card style="max-width: 250px;" class="shadow-10">
            <q-card-section>
                <q-img  src="https://picsum.photos/300/200"></q-img>
            </q-card-section>
            <q-card-section>
                <div class="text-h6  text-grey-9 ">My content</div>
                <div class="text-subtitle2">
                    luke dicbold
                </div>
            </q-card-section>
            <q-separator inset />

            <q-card-section>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos totam cum repellendus amet ut blanditiis nobis
                dolor atque ratione vel?
            </q-card-section>


            <q-card-actions vertical>
                <q-btn title="bu title atrebutini ozi" color="primary" label="Submit" />
                <q-btn flat title="bu title atrebutini ozi" color="primary" label="Link" />
            </q-card-actions>

        </q-card>

        <q-card style="max-width: 250px;" class="shadow-10">
            <!-- q-img toq teg bolsa u otasini toliq egallaydi -->
                <q-img src="https://picsum.photos/300/200"/>
            <q-card-section>
                <div class="text-h6  text-grey-9 ">My content</div>
                <div class="text-subtitle2">
                    luke dicbold
                </div>
            </q-card-section>
            <q-separator inset />

            <q-card-section>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos totam cum repellendus amet ut blanditiis nobis
                dolor atque ratione vel?
            </q-card-section>


            <q-card-actions vertical>
                <q-btn title="bu title atrebutini ozi" color="primary" label="Submit" />
                <q-btn flat title="bu title atrebutini ozi" color="primary" label="Link" />
            </q-card-actions>

        </q-card>

    </q-page>
</template>
  
<script lang="ts">
import { defineComponent, } from 'vue';

export default defineComponent({
    name: 'IndexPage',
    components: {},
    setup() {

        return {};
    }
});
</script>
  