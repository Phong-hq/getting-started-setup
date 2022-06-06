import { defineStore } from 'pinia'

export const useCategoryAndServiceStore = defineStore({
  id: 'setupStore',
  state: () => {
    return {
      categories: [
        {id: 0, name: 'quick pay', color: '#F08D6B'},
        {id: 1, name: 'gift card', color: '#6CD396'},
        {id: 2, name: 'combo', color: '#7E8BD1'},
        {id: 3, name: 'manicure', color: '#D98DE9'},
        {id: 4, name: 'pedicure', color: '#9ECA6B'},
        {id: 5, name: 'full set', color: '#F7AB4E'},
        {id: 6, name: 'refill', color: '#F08D6B'},
        {id: 7, name: 'dipping', color: '#8B9AF9'},
        {id: 8, name: 'add on services', color: '#52CABF'},
        {id: 9, name: 'category', color: '#F08D6B'},
        {id: 10, name: 'category', color: '#F08D6B'},
        // {id: 11, name: 'category', color: '#F08D6B'},
        // {id: 12, name: 'category', color: '#F08D6B'},
        // {id: 13, name: 'category', color: '#F08D6B'},
        // {id: 14, name: 'category', color: '#F08D6B'},
        // {id: 15, name: 'category', color: '#F08D6B'},
        // {id: 16, name: 'category', color: '#F08D6B'},
      ],
      categoriesListChecked:[],
      servicesListChecked:[],
      services: [
        {
          id: 0, children: [            
            {id: 0, name: 'Pedicure Demo 1', price: 45, duration: 30, },
            {id: 1, name: 'Pedicure Demo 2', price: 45, duration: 30, },
            {id: 2, name: 'Pedicure Demo 3', price: 45, duration: 30, },
            {id: 3, name: 'Pedicure Demo 4', price: 45, duration: 30, },
            {id: 4, name: 'Pedicure Demo 5', price: 30, duration: 30, },
            {id: 5, name: 'Pedicure Demo 6', price: 60, duration: 30, },
            {id: 6, name: 'Pedicure Demo 7', price: 60, duration: 30, },
            {id: 7, name: 'Pedicure Demo 8', price: 52, duration: 30, },
            {id: 8, name: 'Pedicure Demo 9', price: 55, duration: 30, },
          ]
        },
        {
          id: 1, children: [            
            {id: 0, name: 'Pedicure Demo 1', price: 45, duration: 30, },
            {id: 1, name: 'Pedicure Demo 2', price: 45, duration: 30, },
          ]
        },
        {
          id: 2, children: [            
            {id: 0, name: 'Pedicure Demo 1', price: 45, duration: 30, },
            {id: 1, name: 'Pedicure Demo 2', price: 45, duration: 30, },
          ]
        },
        {
          id: 3, children: [            
            {id: 0, name: 'Pedicure Demo 1', price: 45, duration: 30, },
            {id: 1, name: 'Pedicure Demo 2', price: 45, duration: 30, },
          ]
        },
        {
          id: 4, children: [            
            {id: 0, name: 'Pedicure Demo 1', price: 45, duration: 30, },
            {id: 1, name: 'Pedicure Demo 2', price: 45, duration: 30, },
          ]
        },
        {
          id: 5, children: [            
            {id: 0, name: 'Pedicure Demo 1', price: 45, duration: 30, },
            {id: 1, name: 'Pedicure Demo 2', price: 45, duration: 30, },
          ]
        },
        {
          id: 6, children: [            
            {id: 0, name: 'Pedicure Demo 1', price: 45, duration: 30, },
            {id: 1, name: 'Pedicure Demo 2', price: 45, duration: 30, },
          ]
        },
        {
          id: 7, children: [            
            {id: 0, name: 'Pedicure Demo 1', price: 45, duration: 30, },
            {id: 1, name: 'Pedicure Demo 2', price: 45, duration: 30, },
          ]
        },
        {
          id: 8, children: [            
            {id: 0, name: 'Pedicure Demo 1', price: 45, duration: 30, },
            {id: 1, name: 'Pedicure Demo 2', price: 45, duration: 30, },
          ]
        },
        {
          id: 9, children: [            
            {id: 0, name: 'Pedicure Demo 1', price: 45, duration: 30, },
            {id: 1, name: 'Pedicure Demo 2', price: 45, duration: 30, },
          ]
        },
        {
          id: 10, children: [            
            {id: 0, name: 'Pedicure Demo 1', price: 45, duration: 30, },
            {id: 1, name: 'Pedicure Demo 2', price: 45, duration: 30, },
          ]
        },
      ],
      colors: [
        '#F08D6B',
        '#6CD396',
        '#7E8BD1',
        '#D98DE9',
        '#9ECA6B',
        '#F7AB4E',
        '#8B9AF9',
        '#52CABF',
        '#CB8A59',
        '#64A2BF',
        '#BA95DE',
        '#81C769',
        '#DBBC4E',
        '#FF9B9F',
        '#4F87B6',
        '#4DBFFF',
        '#F5C25B',
      ],
      currentCategoryId: 0,
      currentServiceId: 0,
      currentService: [],
    }
  },
  
  getters: {
    getCategories: (state) => state.categories,
    getServices: (state) => state.services,
    getColors: (state) => state.colors,
    getCategoriesChecked: (state) => state.categoriesListChecked,
    getservicesChecked: (state) => state.servicesListChecked,
    getCurrentCategoryId: (state) => state.currentCategoryId,
    getCurrentService: (state) => state.currentService,
  },
  actions: {

    saveCategoriesList(categories, services){
      
      this.categoriesListChecked = categories
      console.log('this.categoriesListChecked', this.categoriesListChecked);
      this.servicesListChecked = services
    },
    pushCategory(obj){
      this.categoriesListChecked.push(obj)
      this.servicesListChecked.push({id: obj.id, children:[] })
      this.setCurrentCategory(obj.id)
      // return new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     resolve();
      //   }, 2000)
      // })
    },
    pushService(obj){
      // console.log('obj',obj);
      let index = this.servicesListChecked.findIndex(item => item.id == this.currentCategoryId);
      this.servicesListChecked[index].children.push(obj)
    },
    deleteServiceItem(id){
      let index = this.currentService.findIndex(item => item.id == id);
      if(index > -1){
        this.currentService.splice(index, 1)
      }
    },
    deleteCategoryItem(id){
      let index = this.categoriesListChecked.findIndex(item => item.id == id);
      if(index > -1){
        this.categoriesListChecked.splice(index, 1)
        this.servicesListChecked.splice(index, 1)
      }
    },
    editCategory(obj){
      let index = this.categoriesListChecked.findIndex(item => item.id == obj.id);
      if(index > -1){
        for(let j in obj){
          this.categoriesListChecked[index][j] = obj[j]
        }
        // this.categoriesListChecked[index].name = obj.name
        // this.categoriesListChecked[index].color = obj.color
      }
    },
    editService(obj){
      let index = this.currentService.findIndex(item => item.id == obj.id);
      if(index > -1){
        for(let j in obj){
          this.currentService[index][j] = obj[j]
        }
        // this.currentService[index].name = obj.name
        // this.currentService[index].price = obj.price
        // this.currentService[index].duration = obj.duration
      }
    },
    setCurrentCategory(id){
      this.currentCategoryId = id;
      let index = this.servicesListChecked.findIndex(item => item.id == id);
      this.currentService = this.servicesListChecked[index].children
      // console.log(this.categoriesListChecked);
    }
  }
})
