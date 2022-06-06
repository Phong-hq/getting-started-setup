import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'test',
  state: () => {
    return {
      
    }
  },
  
  getters: {


  },
  actions: {
    async getData() {
        await fetch('https://dns.fast-boy.net/site/get-info?id=test1&type=new').then((respone) => respone.json())
        .then(async (data) => {
            console.log('response',data);
          if (!response.ok) {
            throw Error(response.statusText);
          }
        }).catch((error) => {
          console.log('Looks like there was a problem: \n', error);
        });
      }
  }
})