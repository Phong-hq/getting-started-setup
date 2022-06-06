import { defineStore } from 'pinia'
import { useCategoryAndServiceStore } from '@/stores/categoryAndServiceStore.js'


const categoryStore = useCategoryAndServiceStore()
export const useStaffStore = defineStore({
  id: 'staffStore',
  state: () => {
    return {
      staffs:[
      ],
      staffDetail:[
      ],
      staffService:[

      ],
      currentID: -1,
      currentDetail: {
          commission: '0' ,radio: 0, tips: 0, credit: 0, salary_by_period: 0, employee_onwer: 0, cash_check_percentage: 0, categoriesList: [], working: [
            { name: 'Monday', timeIn: 0, timeOut: 0, active: true} ,
            { name: 'Tuesday', timeIn: 0, timeOut: 0, active: true} ,
            { name: 'Wednesday', timeIn: 0, timeOut: 0, active: true} ,
            { name: 'Thursday', timeIn: 0, timeOut: 0, active: true} ,
            { name: 'Friday', timeIn: 0, timeOut: 0, active: true} ,
            { name: 'Saturday', timeIn: 0, timeOut: 0, active: true} ,
            { name: 'Sunday', timeIn: 0, timeOut: 0, active: true} ,
          ]
        },
        staffKey: 0,
        dialogDetail:[
          { name: 'Monday', timeIn: 0, timeOut: 0, active: true} ,
          { name: 'Tuesday', timeIn: 0, timeOut: 0, active: true} ,
          { name: 'Wednesday', timeIn: 0, timeOut: 0, active: true} ,
          { name: 'Thursday', timeIn: 0, timeOut: 0, active: true} ,
          { name: 'Friday', timeIn: 0, timeOut: 0, active: true} ,
          { name: 'Saturday', timeIn: 0, timeOut: 0, active: true} ,
          { name: 'Sunday', timeIn: 0, timeOut: 0, active: true} ,
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
      ]
    }
  },
  
  getters: {
    getStaffs: (state) => state.staffs,
    getStaffDetail: (state) => state.staffDetail,
    getColors: (state) => state.colors,
    getCurrentID: (state) => state.currentID,
    getCurrentDetail: (state) => state.currentDetail,
    getKey: (state) => state.staffKey,
    getDialogDetail: (state) => state.dialogDetail,
  },
  actions: {

    pushstaff(obj){
          this.staffs.push(obj)

      // return new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     this.categoriesListChecked.push(obj)
      //     resolve();
      //   }, 2000)
      // })
    },
    pushStaff(obj){
          this.staffs.push(obj)
          let detail = {
            id: obj.id, commission: '0' ,radio: 0, tips: 0, credit: 0, salary_by_period: 0, employee_onwer: 1, cash_check_percentage: 0, categoriesList: [], working: [
              { name: 'Monday', timeIn: 0, timeOut: 0, active: true} ,
              { name: 'Tuesday', timeIn: 0, timeOut: 0, active: true} ,
              { name: 'Wednesday', timeIn: 0, timeOut: 0, active: true} ,
              { name: 'Thursday', timeIn: 0, timeOut: 0, active: true} ,
              { name: 'Friday', timeIn: 0, timeOut: 0, active: true} ,
              { name: 'Saturday', timeIn: 0, timeOut: 0, active: true} ,
              { name: 'Sunday', timeIn: 0, timeOut: 0, active: true} ,
            ]
          }

          let categories = categoryStore.getCategoriesChecked
          let services = categoryStore.getservicesChecked
          console.log('services', services);


          for(let i = 0; i < categories.length ; i++){
            detail.categoriesList.push({id: categories[i].id, children: [] })
            let index = services.findIndex(item => item.id == categories[i].id);

            for( let k = 0 ; k < services[index].children.length; k++){
              detail.categoriesList[i].children.push({id: services[index].children[k].id, name: services[index].children[k].name, checked: false })
            }
          }

          this.staffDetail.push(detail)
          this.setcurrentDetail(obj.id)
          console.log('this.staffDetail', this.staffDetail);
    },
    deleteStaff(id){
      let index = this.staffs.findIndex(item => item.id == id);
      let index2 = this.staffDetail.findIndex(item => item.id == id);
      if(index > -1){
        this.staffs.splice(index, 1)
        this.staffDetail.splice(index2, 1)
      }
      this.resetCurrentDetail()
    },
    editstaff(obj){
      let index = this.staffs.findIndex(item => item.id == obj.id);
      if(index > -1){
        for(let j in obj){
          this.staffs[index][j] = obj[j]
        }
        for(let j in obj.permission){
          this.staffs[index].permission[j] = obj.permission[j]
        }
      }
    },

    resetStaff(){
      this.staffs = []
      this.staffDetail =[]
    },


    setcurrentDetail(id){
      let index1 = this.staffDetail.findIndex(item => item.id == this.currentID);
      if(index1 > -1){
          for(let i in this.currentDetail){
            this.staffDetail[index1][i] = this.currentDetail[i]
          }
        }

      this.currentID = id
      let index2 = this.staffDetail.findIndex(item => item.id == id);
      if(index2 > -1){
        for(let j in this.currentDetail){
          this.currentDetail[j] = this.staffDetail[index2][j]
        }
      }
      this.staffKey++
    },
    resetCurrentDetail(){

        let detail = {
          commission: '0' ,radio: 0, tips: 0, credit: 0, salary_by_period: 0, employee_onwer: 1, cash_check_percentage: 0, categoriesList: [], working: [
            { name: 'Monday', timeIn: 0, timeOut: 60, active: true} ,
            { name: 'Tuesday', timeIn: 0, timeOut: 0, active: true} ,
            { name: 'Wednesday', timeIn: 0, timeOut: 0, active: true} ,
            { name: 'Thursday', timeIn: 0, timeOut: 0, active: true} ,
            { name: 'Friday', timeIn: 0, timeOut: 0, active: true} ,
            { name: 'Saturday', timeIn: 0, timeOut: 0, active: true} ,
            { name: 'Sunday', timeIn: 0, timeOut: 0, active: true} ,
          ]
        }
        let categories = categoryStore.getCategoriesChecked
        let services = categoryStore.getservicesChecked
        for(let i = 0; i < categories.length ; i++){
          detail.categoriesList.push({id: categories[i].id, children: [] })
          let index = services.findIndex(item => item.id == categories[i].id);

            for( let k = 0 ; k < services[index].children.length; k++){
              detail.categoriesList[i].children.push({id: services[index].children[k].id, name: services[index].children[k].name, checked: false })
            }
        }
        this.currentDetail = detail
    },

    checkFull(id){
      let index = this.currentDetail.categoriesList.findIndex(item => item.id == id);
      console.log(this.currentDetail);
      console.log('iddddddd', id);
      let list = this.currentDetail.categoriesList[index].children

      for(let i = 0 ; i < list.length ; i++){
        this.currentDetail.categoriesList[index].children[i].checked = true
      }
    },
    checkClean(id){
      let index = this.currentDetail.categoriesList.findIndex(item => item.id == id);
      let list = this.currentDetail.categoriesList[index].children

      for(let i = 0 ; i < list.length ; i++){
        this.currentDetail.categoriesList[index].children[i].checked = false
      }
    },

    // CREATE ACTION DIALOG DETAIL

    setDialogDetailChange(obj, name){
        let index = this.currentDetail.working.findIndex(item => item.name == name)
        for(let j in obj){
          this.dialogDetail[index][j] = obj[j]
        }
    },
    setDialogDetail(){
      this.dialogDetail =[]
      for(let j in this.currentDetail.working){
      let arr = { name: 'Monday', timeIn: 0, timeOut: 0, active: true}
        arr.name = this.currentDetail.working[j].name
        arr.timeIn = this.currentDetail.working[j].timeIn
        arr.timeOut = this.currentDetail.working[j].timeOut
        arr.active = this.currentDetail.working[j].active
        this.dialogDetail.push(arr)
      }
      console.log('this.dialogDetailOld',this.dialogDetail);
    },
    saveDialogDetail(){
      this.currentDetail.working =[]
      for(let j in this.dialogDetail){
      let arr = { name: 'Monday', timeIn: 0, timeOut: 0, active: true}
        arr.name = this.dialogDetail[j].name
        arr.timeIn = this.dialogDetail[j].timeIn
        arr.timeOut = this.dialogDetail[j].timeOut
        arr.active = this.dialogDetail[j].active
        this.currentDetail.working.push(arr)
      }
      this.staffKey++
    },
    setDefaultDialogDetail(){
      this.currentDetail.working =[]
      for(let j in this.dialogDetail){
      let arr = { name: 'Monday', timeIn: 0, timeOut: 0, active: true}
        arr.name = this.dialogDetail[j].name
        this.currentDetail.working.push(arr)
      }
      this.staffKey++
    }
  }
})
