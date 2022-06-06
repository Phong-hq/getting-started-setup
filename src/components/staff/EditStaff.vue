<template>
    <div class="add-staff">
        <el-drawer modal-class="drawer" v-model="drawer">
            <template  #title>
                <p class="uppercase">Add STAFF</p>
            </template>
            <div class="mb-6 flex flex-center flex-col">
                <div class="avatar relative mb-4">
                    <!-- <div class="blank flex flex-center">
                        <img src="../../assets/images/blank-avatar.png" alt="">
                    </div> -->
                    <!-- <div class="image flex flex-center">
                        <img src="../../assets/images/user2.jpg" alt="">
                    </div> -->
                    <div class="custom flex flex-center"  :style="`background-color: ${colorSelected}`">
                        <p class=" text-white uppercase m-0">{{name.charAt(0)}}</p>
                    </div>
                </div>
                <el-upload
                    class="upload-demo"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :file-list="fileList"
                    list-type="picture"
                    :auto-upload="false"
                    :limit="1"
                    :show-file-list="false"
                    :accept="'image/png'"
                >
                    <el-button type="primary">Change Avatar</el-button>
                </el-upload>
                <div class="mb-6"></div>
            </div>
            <div class="mb-8">
                <p class="mb-4 text-20px font-semibold">Staff name</p>
                <el-input class="" v-model="name" placeholder="Category name " />  
            </div>
            <div class="mb-8">
                <p class="mb-4 text-20px font-semibold">Staff Color</p>
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
            <div class="permission flex flex-col">
                <p class="mb-4 text-20px font-semibold">Permission</p>
                <el-switch v-model="staffPermission.turn" active-text="Turn" />
                <el-switch v-model="staffPermission.income" active-text="Income" />
                <el-switch v-model="staffPermission.staffDailyIncome" active-text="Staff daily income" />
                <el-switch v-model="staffPermission.payroll" active-text="Payroll" />
                <el-switch v-model="staffPermission.batchHistory" active-text="Batch History" />
                <el-switch v-model="staffPermission.voidRefund" active-text="Void/Refund" />
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
    import { useStaffStore } from '@/stores/staffStore.js'
    import { useStore } from '@/stores/loadingModal.js'
    // import  { UploadProps } from 'element-plus'

    
    const storeLoading = useStore()
    const store = useStaffStore()
    const colors = computed(() => store.getColors)
    const staffs = computed(() => store.getStaffs)



    onMounted(() => {
        })
    


    // CREATE DATA
    const id = ref(-1)
    const name = ref('')
    const colorSelected = ref('')
    const drawer = ref(false)
    const fileList = ref([])
    const staffPermission = ref({
        turn: true,
        income: true,
        staffDailyIncome: true,
        payroll: true,
        batchHistory: true,
        voidRefund: true,
    })



    const categorySelectedId = ref(-1)

    // CREATE FUNCTION

    const open = (e) => {
        let staff = staffs.value.filter(item => item.id == e)
        name.value = staff[0].name
        id.value = staff[0].id
        colorSelected.value = staff[0].color
        for(let j in staff[0].permission){
                 staffPermission.value[j] = staff[0].permission[j]
             }
        drawer.value = true;
    }

    const close = () => {
        drawer.value = false
    }

    const reset = () =>{
            name.value =''
            colorSelected.value =''
            staffPermission.value ={
                turn: true,
                income: true,
                staffDailyIncome: true,
                payroll: true,
                batchHistory: true,
                voidRefund: true,
            }
    }
    const handleRemove = (uploadFile, uploadFiles) => {
        console.log(uploadFile, uploadFiles)
    }

    const handlePreview = (file) => {
        console.log(file)
    }

    const  submit = async  () => {
       storeLoading.openLoading()
         if(name.value != '' && colorSelected.value != ''){
            let obj =  {id: 0, name: '', color: '', permission:{
                turn: true,
                income: true,
                staffDailyIncome: true,
                payroll: true,
                batchHistory: true,
                voidRefund: true,
            }}
            obj.id = id.value
            obj.name = name.value
            obj.color = colorSelected.value
             for(let j in staffPermission.value){
                 obj.permission[j] = staffPermission.value[j]
             }
           await store.editstaff(obj)
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
    @import '@/assets/scss/staff/add-staff.scss';
</style>