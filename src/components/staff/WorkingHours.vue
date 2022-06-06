<template>
  <div class="working-hours py-8">
      <div class="relative">
          <div class="absolute right-0">
                <el-button class="text-22px" color="#5669FF" plain @click="edit()" >Edit</el-button>
          </div>
            <div class="header mb-4 grid">
                <div></div>
                <div class="flex justify-start"><p class="text-16px font-semibold uppercase">Date</p></div>
                <div class="flex justify-center"><p class="text-16px font-semibold uppercase">In</p></div>
                <div class="flex justify-center"><p class="text-16px font-semibold uppercase">OUT</p></div>
                <div></div>
            </div>
            <div class="body ">
                <div v-for="item in timeArray" :key="item.name">
                    <WorkingHoursItemComponent :name="item" :key="keyTime"></WorkingHoursItemComponent>
                </div>
            </div>
      </div>



      <el-dialog
        :key="keyDialog"
        v-model="dialogVisible"
        draggable
        custom-class="edit-work-hours"
        title="EDIT WORKING HOURS"
        width="30%"
        :before-close="handleClose"

    >
        <div class="dialog-body">
            <div class="header mb-4 grid">
                <div class="flex justify-start">
                    <p class="text-16px font-semibold uppercase">Date</p>
                </div>
                <div class="flex justify-center">
                    <p class="text-16px font-semibold uppercase">in</p>
                </div>
                <div class="flex justify-center">
                    <p class="text-16px font-semibold uppercase text-center">out</p>
                </div>
                <div class="flex justify-center">
                    <p class="text-16px font-semibold uppercase">active</p>
                </div>
            </div>
            <div v-for="(item, i) in timeArray" :key="i">
                <TimePickerComponent :name="item" :key="keyTime"></TimePickerComponent>
            </div>
        </div>

        <template #footer>
            <span class="dialog-footer">
                <el-button class="text-22px text-purple-ct" color="#5669FF" plain @click="setDefault()">Set working hour default</el-button>
                <el-button type="primary" color="#5669FF" plain @click="save()"
                >Save</el-button
                >
            </span>
        </template>
    </el-dialog>
  </div>
</template>

<script setup>
import TimePickerComponent from '@/components/staff/TimePicker.vue'
import WorkingHoursItemComponent from '@/components/staff/WorkingHoursItem.vue'
import {  ref, onMounted,computed } from 'vue'
import { ElMessageBox } from 'element-plus'
import { useStaffStore } from '@/stores/staffStore.js'

    const store = useStaffStore()
    const keyTime = computed(() => store.getKey)
    const detail = computed(() => store.getCurrentDetail)


    // CREATE DATA
    const dialogVisible = ref(false)
    const keyDialog = ref(0)
    const timeArray = ref([
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ,'Saturday' ,'Sunday'
    ])





    // CREATE FUNCTION

    const handleClose = (done ) => {
        done()
    }
    const save = () => {
        store.saveDialogDetail();
        dialogVisible.value = false
    }
    const edit = () =>{
        store.setDialogDetail();
        keyDialog.value++
        dialogVisible.value = true
    }
    const setDefault = () => {
        store.setDefaultDialogDetail();
        dialogVisible.value = false
    }

</script>

<style lang="scss">
    @import '@/assets/scss/staff/working-hours.scss';
</style>