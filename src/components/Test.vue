<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div v-if="$q.platform.is.desktop">
        Gets rendered only on iOS platform.

    </div>

    <!-- notice dialogRef here -->
    <q-dialog ref="dialogRef" @hide="onDialogHide">
        <q-card class="q-dialog-plugin">
 
            <q-card-actions align="right">
                <q-btn color="primary" label="OK" @click="onOKClick" />
                <q-btn color="primary" label="Cancel" @click="onCancelClick" />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>
  
<script lang="ts" >
import { useQuasar } from 'quasar'
import { useDialogPluginComponent } from 'quasar'
export default {
    setup() {
        const $q = useQuasar()
        const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()

        console.log(dialogRef, 'dialog')

        // showing an example on a method, but
        // can be any part of Vue script
        function show() {
            // prints out Quasar version
            console.log($q.version, 'version')
        }
        console.log(onDialogHide, 'onDialogHide');

        return {
            show,
            dialogRef,
            onDialogHide,
            onDialogOK, onDialogCancel,
            // other methods that we used in our vue html template;
            // these are part of our example (so not required)
            onOKClick() {
                // on OK, it is REQUIRED to
                // call onDialogOK (with optional payload)
                onDialogOK()
                console.log('clided');

                // or with payload: onDialogOK({ ... })
                // ...and it will also hide the dialog automatically
            },

            // we can passthrough onDialogCancel directly
            onCancelClick: onDialogCancel
        }
    },
    emits: [
        // REQUIRED; need to specify some events that your
        // component will emit through useDialogPluginComponent()
        ...useDialogPluginComponent.emits
    ],
}
</script>