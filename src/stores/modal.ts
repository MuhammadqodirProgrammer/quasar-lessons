import { defineStore } from 'pinia';


export const useDialogStore = defineStore('modal', {
  state: () => ({
    isLoading: true,
    isOpen:false,
    filter: 'all' as 'all' | 'finished' | 'unfinished',
  }),
  getters: {
    finishedTodos(state) {
      return state.isOpen
    },
  

   
  },
  actions: {
    changeState(text: string): void {
     this.$state.isOpen =this.$state.isOpen ? false :true
    },

  },
});




















