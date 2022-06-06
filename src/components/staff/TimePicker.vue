<template>
  <div class="item mb-4 grid">
        <div class="flex justify-start items-center">
            <p class="text-16px">{{props.name}}</p>
        </div>
        <div class="flex justify-center">
            <div class="time flex flex-center">
                <el-time-picker
                    v-model="timeIn"
                    :format="'hh:mm A'"
                    @change="change()"
                    :clearable="false"
                    />
            </div>
        </div>
        <div class="flex justify-center">
            <div class="time flex flex-center">
                <el-time-picker
                    @change="change()"
                    v-model="timeOut"
                    :format="'hh:mm A'"
                    :clearable="false"
                    />
            </div>
        </div>
        <div class="flex justify-center">
            <el-switch @change="change()" v-model="active"/>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, defineProps, defineExpose } from 'vue'
import { useStaffStore } from '@/stores/staffStore.js'
import { mapState } from 'pinia'
import moment from 'moment';
import { ElMessage, ElMessageBox } from 'element-plus'


    const props = defineProps({
        name: {
            type: String,
            required: true
        }
    })

    const store = useStaffStore()
    const detail = computed(() => store.getCurrentDetail)
    

    onMounted(() => {
        index.value = detail.value.working.findIndex(item => item.name == props.name);
        // console.log('mou',index.value);
        let inn = detail.value.working[index.value].timeIn
        let out = detail.value.working[index.value].timeOut
        timeIn.value = new Date(2016, 1, 1, (Math.floor(inn /60)), (out % 60))
        timeOut.value = new Date(2016, 1, 1, (Math.floor(out /60)), (out % 60))
        active.value = detail.value.working[index.value].active
    })


// CREATE DATA
    const value1 = ref(new Date(2016, 9, 10, 18, 30))
    const timeIn = ref(null)
    const timeOut = ref(null)
    const active = ref(false)
    const index = ref(-1)
    const resetDetail = detail.value


  // CREATE FUNCTION
  const makeRange = (start, end) => {
    const result = []
    for (let i = start; i <= end; i++) {
        result.push(i)
    }
    console.log('result',result);
    return result
    }
    const change = () => {
        let obj = {timeIn: 0, timeOut: 0, active: true}
        // console.log(obj);
        obj.timeOut = moment(timeOut.value).hours() * 60 + moment(timeOut.value).minutes()
        obj.timeIn = moment(timeIn.value).hours() * 60 + moment(timeIn.value).minutes()
        obj.active = active.value
        if(obj.timeOut < obj.timeIn){
            ElMessage({
                showClose: true,
                message: 'Oops, time out runs before time in.',
                type: 'error',
            })

        }else{
            store.setDialogDetailChange(obj, props.name)
        }
    }


</script>

<style>

</style>