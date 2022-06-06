<template>
  <div class="config py-8">
          <div v-for="(item, index1 ) in categories" :key="index1">
            <div class="item-header flex items-center">
                <img class="mr-4 cursor-pointer"  v-if="coutItem(index1) > 0" src="../../assets/images/item-checkbox-1.png" @click="clean(item.id)" alt="">
                <img class="mr-4 cursor-pointer"  v-else src="../../assets/images/item-checkbox-0.png" @click="checkFull(item.id)" alt="">
                <p class="text-14px font-semibold uppercase">{{item.name}} <span class="text-14px" v-if="coutItem(index1) > 0">({{coutItem(index1)}})</span></p>
            </div>
            <ConfigItemComponent :id="item.id"></ConfigItemComponent>

          </div>
  </div>
</template>

<script setup>
import {  ref, onMounted,computed } from 'vue'
// import ConfigItemComponent from '@/components/staff/ConfigItem.vue'
import ConfigItemComponent from '@/components/staff/ConfigServiceItem.vue'
import { useStaffStore } from '@/stores/staffStore.js'
import { useCategoryAndServiceStore } from '@/stores/categoryAndServiceStore.js'



    const store = useStaffStore()
    const store2 = useCategoryAndServiceStore()
    const detail = computed(() => store.getCurrentDetail)
    const categories = computed(() => store2.getCategoriesChecked)
    const staffSelectedId = computed(() => store.getCurrentID)



    onMounted(() => {
        console.log(detail.value);
    })
    // CREATE DATA

    const categoriesListChecked = ref([])


    // CREATE FUNCTION

    const coutItem = (index1) => { 
        let cout = 0
        let list = detail.value.categoriesList[index1].children
        for( let i = 0 ; i < list.length ; i++){
            if(list[i].checked){
                cout++
            }
        }
        return cout

    }

    const checkFull = (id) => {
        store.checkFull(id)
    }

     const clean = (id) => {
        store.checkClean(id)
    }






</script>

<style lang="scss">
    @import '@/assets/scss/staff/config.scss';
</style>