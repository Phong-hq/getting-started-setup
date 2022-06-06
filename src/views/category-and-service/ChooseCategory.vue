<template>
    <div class="category w-full flex flex-center relative">
        <div class="w-6/12 h-full relative lg:block hidden">
        <div class="back-btn absolute bottom-20 left-20 flex items-center cursor-pointer z-10">
            <p class="ml-10 text-24px">(*) Skip: we can use demo data or setup later</p>
        </div>
            <img class="category-background-vector absolute bottom-0 left-0" src="../../assets/images/login-background-vector.png" alt="">
            <img class="category-background absolute translate-x-1/2 translate-y-1/2 bottom-1/2 right-1/2" src="../../assets/images/choose-category-background.png" alt="">
        </div>
        <el-form class="lg:w-6/12 w-10/12 h-full flex lg:items-center items-start" ref="ruleFormRef">
            <div class="category-form flex flex-col justify-between" >
                <div class="form mt-14  flex flex-col lg:justify-start justify-center ">
                    <p class="text-36px font-semibold">Choose Category</p>
                    <p class="text-24px">Categories is the list contains the services</p>
                    <el-checkbox-group class="categories-list mt-12 overflow-auto touch-pan-y" v-model="categoriesListChecked">
                        <el-checkbox-button class="mb-5"  :label="item.id" v-for="item in categoriesList" :key="item.id" >
                            <div class="item  w-full ">
                                <div class="flex flex-center">
                                    <div class="color rounded" :style="`background-color: ${item.color}`"></div>
                                </div>
                                <div class="flex items-center">
                                    <p class="text-20px font-semibold uppercase">{{item.name}}</p>
                                </div>
                                <div class="flex flex-center">
                                    <svg v-if="categoriesListChecked.includes(item.id)" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4396 0.439623L6.00012 9.87912L2.56062 6.43962C1.97205 5.87116 1.0365 5.87929 0.457895 6.45789C-0.120706 7.0365 -0.128836 7.97205 0.439623 8.56062L4.93962 13.0606C5.52537 13.6462 6.47487 13.6462 7.06062 13.0606L17.5606 2.56062C18.1291 1.97205 18.1209 1.0365 17.5423 0.457895C16.9637 -0.120706 16.0282 -0.128836 15.4396 0.439623Z" fill="white"/>
                                    </svg>
                                    <div v-else class="color rounded" style="background-color: #DFE3FF"></div>
                                </div>
                            </div>
                        </el-checkbox-button>
                    </el-checkbox-group>
                </div>
                <div class="pt-12 w-full flex justify-end items-end">
                    <el-button class="previous-btn text-22px" color="#5669FF" plain v-if="categoriesListChecked.length == 0" @click="skip()">Skip</el-button>
                    <el-button class="submit-btn text-22px text-gray/3 bg-gray" :disabled="categoriesListChecked.length > 0 ? false : true" color="#5669FF" plain @click="submit()" >Next</el-button>
                </div>
            </div>
        </el-form>
    </div>
</template>

<script  setup>
import {reactive, ref, computed, onMounted } from 'vue';
import { useStore } from '@/stores/loadingModal.js'
import { useCategoryAndServiceStore } from '@/stores/categoryAndServiceStore.js'
import { useStaffStore } from '@/stores/staffStore.js'
import { useRouter } from "vue-router";


    const storeLoading = useStore()
    const store = useCategoryAndServiceStore()
    const store2 = useStaffStore()
    const categoriesList = computed(() => store.getCategories)
    const serviceList = computed(() => store.getServices)
    const router = useRouter();
    onMounted(() => {
      console.log('choose');
    })


    // CREATE DATA
    const categoriesListChecked = ref([])


    // CREATE FUNCTION

    const checkItem = (e) => {
        let result = false
            let item = categoriesListChecked.value.find(element => element == e)
            if(item != undefined){
                result = true
            }
        return result
    }

    const submit = () => {
        let categories = categoriesList.value.filter((item) => checkItem(item.id))
        let services = serviceList.value.filter((item) => checkItem(item.id))
        store.saveCategoriesList(categories, services)
        store2.resetStaff()
        router.push('/category/setup')
    }
     const skip = () => {
        router.push('/category/setup')
    }
</script>

<style lang="scss">
    @import '@/assets/scss/category-and-service/choose-category.scss';
</style>