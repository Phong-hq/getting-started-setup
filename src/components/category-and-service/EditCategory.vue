<template>
    <div class="add-category">
        <el-drawer modal-class="drawer" v-model="drawer">
            <template  #title>
                <p class="uppercase">Edit Service Category</p>
            </template>
            <div class="mb-8">
                <p class="mb-4 text-20px font-semibold">Category name</p>
                <el-input class="" v-model="name" placeholder="Category name " />  
            </div>
            <div>
                <p class="mb-4 text-20px font-semibold">Category Color</p>
                <div class="grid grid-cols-8 ">
                    <div class="" v-for="(item ,i) in colors" :key="i" @click="colorSelected = item">
                        <div class="color flex flex-center cursor-pointer" :style="`background-color: ${item}`" :class="colorSelected == item ? 'opacity-80' :''">
                            <svg v-if="colorSelected == item" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4396 0.439623L6.00012 9.87912L2.56062 6.43962C1.97205 5.87116 1.0365 5.87929 0.457895 6.45789C-0.120706 7.0365 -0.128836 7.97205 0.439623 8.56062L4.93962 13.0606C5.52537 13.6462 6.47487 13.6462 7.06062 13.0606L17.5606 2.56062C18.1291 1.97205 18.1209 1.0365 17.5423 0.457895C16.9637 -0.120706 16.0282 -0.128836 15.4396 0.439623Z" fill="white"/>
                            </svg>

                        </div>
                    </div>
                </div>
            </div>
            <template #footer>
                <div style="flex: auto">
                    <el-button class="cannel text-error" @click="close()" color="#F65747"><p class="text-22px text-error">Cancel</p></el-button>
                    <el-button class="submit-btn" type="primary" :disabled="(name != '' && colorSelected != '') ? false : true " @click="submit()"><p class="text-22px text-white">Next</p></el-button>
                </div>
            </template>
        </el-drawer>

    </div>
</template>

<script setup>
    import {  ref, computed, onMounted, defineExpose, defineEmits  } from 'vue'
    import { ElMessage } from 'element-plus'
    import { useCategoryAndServiceStore } from '@/stores/categoryAndServiceStore.js'
    import { useStore } from '@/stores/loadingModal.js'

    
    const storeLoading = useStore()
    const store = useCategoryAndServiceStore()
    const colors = computed(() => store.getColors)
    const categoriesList = computed(() => store.getCategoriesChecked)
    const maxId = computed(() => categoriesList.value.length) 



    onMounted(() => {

    })
    


    // CREATE DATA
    const id = ref(-1)
    const name = ref('')
    const colorSelected = ref('')
    const drawer = ref(false)



    const categorySelectedId = ref(-1)

    // CREATE FUNCTION

    const open = (e) => {
        let category = categoriesList.value.filter(item => item.id == e)
        name.value = category[0].name
        id.value = category[0].id
        colorSelected.value = category[0].color
        drawer.value = true;
    }

    const close = () => {
        drawer.value = false
    }

    const reset = () =>{
            name.value =''
            colorSelected.value =''
    }

    const  submit = () => {
    //    storeLoading.openLoading()
         if(name.value != '' && colorSelected.value != ''){
            let obj =  {id: 0, name: '', color: ''}
            obj.id = id.value
            obj.name = name.value
            obj.color = colorSelected.value
           store.editCategory(obj)
            reset()
            close()
            storeLoading.closeLoading()
        }
        else{
            storeLoading.closeLoading()
            ElMessage({
                showClose: true,
                message: 'Oops, this is a error message.',
                type: 'error',
            })
        }
    }


    defineExpose({open});

</script>

<style lang="scss">
    @import '@/assets/scss/category-and-service/add-category.scss';
</style>