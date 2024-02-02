import { boot } from 'quasar/wrappers'
import {ref} from "vue"

const modalState =ref(false)

export default boot(async ({ app, router }   /* { app, router, ... } */) => {
  // something to do
 
//   app.config.globalProperties.$axios = axios

  app.config.globalProperties.$modalState = modalState

})

export {  modalState }