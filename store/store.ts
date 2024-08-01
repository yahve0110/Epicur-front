import { defineStore } from 'pinia'


export const useCounterStore = defineStore('counter', () => {
    const count = ref("")
    const setCount = (id: string) => {
      
        count.value = id
      }
    
  
    return { count,setCount }
  })