<template>
    <div>
        <div class="" >
            <div class="pt-2 mb-4 ml-6 flex flex-wrap">
                <div class="mb-5 mr-6 cursor-pointer" v-for="(item, index) in service" :key="index" :class=" isActive(item.id) ? 'active' : ''"
                    @click="checked(item.id)">
                    <div class="item h-full flex flex-center px-6" >
                        <p class="text-14px text-purple-ct">{{item.name}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {  ref, onMounted, computed, defineProps } from 'vue'
import { useStaffStore } from '@/stores/staffStore.js'
import { useCategoryAndServiceStore } from '@/stores/categoryAndServiceStore.js'


    const props = defineProps({
        id: {
            type: Number,
            required: true
        }
    })



    const store = useStaffStore()
    const store2 = useCategoryAndServiceStore()
    const detail = computed(() => store.getCurrentDetail)
    const services = computed(() => store2.getservicesChecked)
    // const service = services.value[index.value].children
    const staffSelectedId = computed(() => store.getCurrentID)



    onMounted(() => {
        index.value = services.value.findIndex(item => item.id == props.id)
        service.value = services.value[index.value].children

    })
    // CREATE DATA

    const categoriesListChecked = ref([])
    const index = ref(0)
    const service= ref([])


    // CREATE FUNCTION

    const checked = (id) => {
        let index = detail.value.categoriesList.findIndex(item => item.id == props.id)
        let index2 = detail.value.categoriesList[index].children.findIndex(item => item.id == id)
        if(staffSelectedId.value >= 0){
            detail.value.categoriesList[index].children[index2].checked = !detail.value.categoriesList[index].children[index2].checked
        }
    } 
    const isActive = (id) => {
        let index = detail.value.categoriesList.findIndex(item => item.id == props.id)
        // console.log(detail.value.categoriesList[index].children, id);
        let index2 = detail.value.categoriesList[index].children.findIndex(item => item.id == id)
        return detail.value.categoriesList[index].children[index2].checked ? true : false
    }


</script>