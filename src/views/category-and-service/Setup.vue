<template>
    <div class="update flex flex-center">
        <div class="update-container app-container pt-8 w-full ">
            <p class="mb-10 text-36px font-semibold">Update Category & Service</p>
            <div class="update-box flex justify-between md:flex-row flex-col">

                <!-- LEFT CONTAINER -->

            <div class="left md:w-4/12 md:m-0 mb-20 w-full py-5 relative">
                <div class="left-scroll  px-5 h-full bg-white ">
                    <div class="w-full px-5 py-8 flex justify-between items-center absolute top-0 left-0 z-10 bg-white">
                        <div class="mb-8 w-6/12">
                            <p class="text-24px font-medium">Categories</p>
                            <p class="text-14px text-gray/2">Categories is the list contains the services</p>
                        </div>
                        <div class="add-btn bg-purple-ct flex flex-center cursor-pointer" @click="openAddCategory()">
                            <p class="mb-0 text-18px text-white text-center" >+ Add Category</p>
                        </div>
                    </div>
                    <CategoryListComponent @openEditCategory="openEditCategory"></CategoryListComponent>
                </div>
            </div>

                <!-- RIGHT CONTAINER -->

            <div class="right md:pl-8 md:w-8/12 p-0 w-full h-full">
                <div class="right-box p-5 w-full h-full relative">
                    <div class="right-scroll  px-5 h-full bg-white ">
                        <div class="w-full px-5 py-8 flex justify-between items-center absolute top-0 left-0 z-10 bg-white">
                            <div class="mb-8">
                                <p class="text-24px font-medium" >Categories</p>
                                <p class="text-14px text-gray/2">Categories is the list contains the services</p>
                            </div>
                            <div class="add-btn bg-purple-ct flex flex-center cursor-pointer"  @click="openAddService()">
                                <p class="mb-0 text-18px text-white text-center">+ Add Service</p>
                            </div>
                        </div>
                            <ServiceListComponent  @openAddService="openAddService" @openEditService="openEditService"></ServiceListComponent>
                    </div>
                </div>
            </div>

            </div>

            <!-- BUTTON SUBMIT -->

            <div class="btn-box pt-12 w-full flex justify-end items-end">
                <el-button class="previous-btn text-22px" color="#5669FF" plain @click="skip()">Skip</el-button>
                <el-button class="submit-btn text-22px text-gray/3 bg-gray"  color="#5669FF" plain @click="submit()" >Next</el-button>
            </div>
        </div>

        <!-- ELEMENT DRAWER -->

            <AddCategoryComponent ref="categoryComponent"></AddCategoryComponent>
            <AddServiceComponent ref="serviceComponent"></AddServiceComponent>
            <EditCategoryComponent ref="editCategoryComponent"></EditCategoryComponent>
            <EditServiceComponent ref="editServiceComponent"></EditServiceComponent>

    </div>
</template>
<script setup>
    import {  ref , onMounted} from 'vue'
    import CategoryListComponent from '@/components/category-and-service/CategoryList.vue'
    import ServiceListComponent from '@/components/category-and-service/ServiceList.vue'
    import AddServiceComponent from '@/components/category-and-service/AddService.vue'
    import AddCategoryComponent from '@/components/category-and-service/AddCategory.vue'
    import EditServiceComponent from '@/components/category-and-service/EditService.vue'
    import EditCategoryComponent from '@/components/category-and-service/EditCategory.vue'


    import { useRouter } from "vue-router";
    import { useStaffStore } from '@/stores/staffStore.js'
    import { ElMessage, ElMessageBox } from 'element-plus'
    import { h } from 'vue'

    const router = useRouter();
    const store2 = useStaffStore()
    onMounted(() => {
      console.log('setup.vue');
    })

    // onMounted(() => {
    // })

    // CREATE DATA
    const categoryComponent = ref(null);
    const serviceComponent = ref(null);
    const editCategoryComponent = ref(null);
    const editServiceComponent = ref(null);


    // CREATE FUNCTION

    const openAddCategory = () => {
        categoryComponent.value.open()
    }

    const openAddService = () => {
        serviceComponent.value.open()
    }
    const openEditCategory = (e) => {
        editCategoryComponent.value.open(e)
    }

    const openEditService = (e) => {
        editServiceComponent.value.open(e)
    }

    const skip = () => {
        ElMessageBox({
            title: 'Skip Your Setup?',
            message: 'Your setup will not be saved!',
            showCancelButton: true,
            confirmButtonText: 'Skip',
            cancelButtonText: 'Cancel',
            showClose:false,
            center: true,
            beforeClose: (action, instance, done) => {
                if (action === 'confirm') {
                    // instance.confirmButtonLoading = true
                    // instance.confirmButtonText = 'Loading...'
                    // setTimeout(() => {
                    //     done()
                    //     setTimeout(() => {
                    //         instance.confirmButtonLoading = false
                    //     }, 300)
                    // }, 3000)
                    done()
                    // router.push('/update')
                } else {
                    done()
                    // ElMessage({
                    //     type: 'info',
                    //     message: 'Delete canceled',
                    // })
                }
            },
            }).then((action) => {
            //     ElMessage({
            //     type: 'info',
            //     message: `action: ${action}`,
            // })
        })
    }

    const submit = () => {
        store2.resetStaff()
        router.push('/staff/setup');
    }



  
</script>

<style lang="scss">
    @import '@/assets/scss/category-and-service/setup.scss';
</style>