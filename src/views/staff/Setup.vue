<template>
    <div class="update-staff flex flex-center">
        <div class="update-container app-container pt-8 w-full ">
            <p class="mb-10 text-36px font-semibold">Staffs</p>
            <div class="update-box flex justify-between md:flex-row flex-col">

                <!-- LEFT CONTAINER -->

            <div class="left md:w-4/12 md:m-0 mb-20 w-full py-5 relative">
                <div class="left-scroll  px-5 h-full bg-white ">
                    <div class="w-full px-5 py-8 flex justify-between items-center absolute top-0 left-0 z-10 bg-white">
                        <div class="mb-8 w-6/12">
                            <p class="text-24px font-medium"  @click="value = false">Staffs</p>
                            <p class="text-14px text-gray/2">List of staffs in the system</p>
                        </div>
                        <div class="add-btn bg-purple-ct flex flex-center cursor-pointer" @click="openAddStaff()">
                            <p class="mb-0 text-18px text-white text-center" >+ Add Staff</p>
                        </div>
                    </div>
                    <StaffListComponent @openEditStaff="openEditStaff" ></StaffListComponent>
                </div>
            </div>

                <!-- RIGHT CONTAINER -->

            <div class="right md:pl-8 md:w-8/12 p-0 w-full h-full">
                <div class="right-box p-5 w-full h-full relative">
                    <div class="right-scroll  px-5 h-full bg-white ">
                        <div class="w-full px-5 py-8 flex justify-start items-center absolute top-0 left-0 z-10 bg-white">
                            <div class="mb-8">
                                <p class="text-24px font-medium" >Staff Detail</p>
                                <p class="text-14px text-gray/2">Information about Commission, Service and Working Hours</p>
                            </div>
                        </div>
                            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" :key="tabKey">
                                <el-tab-pane label="Commission" name="first">
                                    <CommissionComponent v-if="staffsList.length > 0"></CommissionComponent>
                                    <BlankStaffComponent v-else @openAddStaff="openAddStaff()"></BlankStaffComponent>
                                </el-tab-pane>
                                <el-tab-pane label="Config" name="second">
                                    <BlankStaffComponent v-if="staffsList.length == 0" @openAddStaff="openAddStaff()"></BlankStaffComponent>
                                    <ConfigComponent v-else></ConfigComponent>
                                </el-tab-pane>
                                <el-tab-pane label="Role" name="third">
                                    <BlankStaffComponent v-if="staffsList.length == 0" @openAddStaff="openAddStaff()"></BlankStaffComponent>
                                    <WorkingHoursComponent v-else></WorkingHoursComponent>
                                </el-tab-pane>
                            </el-tabs>
                    </div>
                </div>
            </div>

            </div>

            <!-- BUTTON SUBMIT -->

            <div class="btn-box pt-12 w-full flex justify-end items-end">
                <el-button class="footer-btn previous-btn text-22px" color="#5669FF" plain @click="skip()">Skip</el-button>
                <el-button class="footer-btn submit-btn text-22px text-gray/3 bg-gray"  color="#5669FF" plain @click="submit()" >Next</el-button>
            </div>
        </div>

        <!-- ELEMENT DRAWER -->

            <AddStaffComponent ref="staffComponent"></AddStaffComponent>
            <EditStaffComponent ref="editStaffComponent"></EditStaffComponent>

    </div>
</template>
<script setup>
    import {  ref, computed, onMounted} from 'vue'
    import StaffListComponent from '@/components/staff/StaffList.vue'
    import AddStaffComponent from '@/components/staff/AddStaff.vue'
    import EditStaffComponent from '@/components/staff/EditStaff.vue'
    import CommissionComponent from '@/components/staff/Commission.vue'
    import ConfigComponent from '@/components/staff/Config.vue'
    import WorkingHoursComponent from '@/components/staff/WorkingHours.vue'
    import BlankStaffComponent from '@/components/staff/BlankStaff.vue'
    import { useStaffStore } from '@/stores/staffStore.js'



    import { useRouter } from "vue-router";
    import { ElMessage, ElMessageBox } from 'element-plus'

    const router = useRouter();
    const store = useStaffStore()
    const staffsList = computed(() => store.getStaffs)

    onMounted( () => {
        store.resetCurrentDetail()
    })




    // CREATE DATA
    const staffComponent = ref(null);
    const value = ref(true);
    const editStaffComponent = ref(null);
    const activeName = ref('first')
    const tabKey = ref(0)


    // CREATE FUNCTION

    const openAddStaff = () => {
        staffComponent.value.open()
    }

    const openEditStaff = (e) => {
        editStaffComponent.value.open(e)
    }

    const handleClick = (tab, event) => {
        console.log(tab, event)
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
        // console.log('submit');
        router.push({ name: "done" });

    }



  
</script>

<style lang="scss">
    @import '@/assets/scss/staff/setup.scss';
</style>