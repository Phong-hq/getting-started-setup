<template>
    <div class="add-category">
        <el-drawer modal-class="drawer" v-model="drawer">
            <template  #title>
                <p class="uppercase">Edit Service</p>
            </template>
            <el-form :model="formData" ref="ruleFormRef" :rules="rules"> 
                <div class="mb-8">
                    <el-form-item class="w-full" prop="name">
                        <p class="mb-4 text-20px font-semibold">Service Name</p>
                        <el-input class="" v-model="formData.name" placeholder="Service Name " />  
                    </el-form-item>
                </div>
                <p class="mb-4 text-20px font-semibold">Service duration</p>
                <div class="h-full flex justify-between flex-wrap">
                    <div class="mb-8 w-49">
                        <el-form-item class="" prop="hour">
                             <el-select v-model="formData.hour" placeholder="0 hrs">
                                <el-option
                                v-for="item in 12"
                                :key="item"
                                :label="item"
                                :value="item"
                                />
                            </el-select>
                        </el-form-item>
                    </div>
                    <div class="mb-8 w-49">
                        <el-form-item class="" prop="minute">
                             <el-select v-model="formData.minute" placeholder="0 min">
                                <el-option
                                v-for="item in minutes"
                                :key="item"
                                :label="item"
                                :value="item"
                                />
                            </el-select> 
                        </el-form-item>
                    </div>
                    <div class="mb-8">
                        <el-form-item class="w-49" prop="price">
                            <p class="mb-4 text-20px font-semibold">Service Price</p>
                            <el-input class="" type="number" v-model="formData.price" placeholder="0 " />  
                        </el-form-item>
                    </div>
                </div>
            </el-form>
            <template #footer>
                <div style="flex: auto">
                    <el-button class="cannel text-error" @click="close()" color="#F65747"><p class="text-22px text-error">Cancel</p></el-button>
                    <el-button class="submit-btn" type="primary" @click="submit()"><p class="text-22px text-white">Next</p></el-button>
                </div>
            </template>
        </el-drawer>

    </div>
</template>

<script setup>
    import {  ref, computed, onMounted, defineExpose, defineEmits, reactive  } from 'vue'
    import { ElMessage, ElMessageBox } from 'element-plus'
    import { useCategoryAndServiceStore } from '@/stores/categoryAndServiceStore.js'
    import { useStore } from '@/stores/loadingModal.js'


    
    const storeLoading = useStore()
    const store = useCategoryAndServiceStore()
    const colors = computed(() => store.getColors)
    const servicesList = computed(() => store.getCurrentService)
    const maxId = computed(() => servicesList.value.length) 



    onMounted(() => {
    })
    


    // CREATE DATA

     const formData = reactive({
        hour: null,
        name: '',
        minute: null,
        price: null,
    })
    const ruleFormRef = ref(null)
    

    const rules = reactive({
        name: [
            { required: true, message: 'Name is required', trigger: 'blur' },
        ],
         hour: [
            { required: true, message: 'Required', trigger: 'blur' },
        ],
         minute: [
            { required: true, message: 'Required', trigger: 'blur' },
        ],
         price: [
            { required: true, message: 'Required', trigger: 'blur' },
        ],
    })
    
    const name = ref('')
    const id = ref(-1)
    const colorSelected = ref('')
    const drawer = ref(false)
    const hour = ref(null)
    const minute = ref(null)
    const minutes = ref([
        0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55
    ])
    const price = ref(null)



    const categorySelectedId = ref(-1)

    // CREATE FUNCTION

    const open = (e) => {
        let service = servicesList.value.filter(item => item.id == e)
        id.value = service[0].id
        formData.name = service[0].name
        formData.price = service[0].price
        formData.hour = (service[0].duration - service[0].duration % 60) / 60
        formData.minute = service[0].duration % 60
        drawer.value = true;
    }

    const close = () => {
        drawer.value = false;
    }

    const reset = () => {
            formData.name = '';
            formData.price = null;
            formData.hour = null;
            formData.minute = null;
    }
    const  submit = () => {
        ruleFormRef.value.validate((valid) => {
            if(valid){
                let obj =  {id: 0, name: '', price: 0, duration: 0, };
                obj.id = id.value;
                obj.name = formData.name;
                obj.price = formData.price;
                obj.duration = formData.hour * 60 + formData.minute;
                store.editService(obj)
                reset()
                close()
            }
        })
    }


    defineExpose({open});

</script>

<style lang="scss">
    @import '@/assets/scss/category-and-service/add-category.scss';
</style>