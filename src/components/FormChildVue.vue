<template>
    <div class="q-pa-md" style="max-width: 400px">
  
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
        ref="myForm"
      >
        <q-input
          filled
          v-model="name"
          label="Your name *"
          hint="Name and surname"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />
  
        <q-input
          filled
          type="number"
          v-model="age"
          label="Your age *"
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || 'Please type your age',
            val => val > 0 && val < 100 || 'Please type a real age'
          ]"
        />
  
        <q-toggle v-model="accept" label="I accept the license and terms" />
  
        <div>
          <q-btn label="Submit" type="submit" color="primary"/>
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
  
    </div>
  </template>

<script>
        import { useFormChild } from 'quasar'
        import { ref, onMounted } from 'vue'
    export default {

// <q-form ref="myForm">

  setup () {
  const myForm = ref(null)
console.log(myForm);
  function validate () {
    myForm.value.validate().then(success => {
      if (success) {
       console.log(success);
      }
      else {
        console.log(success);

        // oh no, user has filled in
        // at least one invalid value
      }
    })
  }

  // to reset validations:
  function reset () {
    myForm.value.resetValidation()
  }

  return {
    myForm,
    // ...
  }
}
    }
</script>

<style lang="scss" scoped>

</style>