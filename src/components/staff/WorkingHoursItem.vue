<template>
   <div class="item mb-4 flex flex-center">
        <div class=" w-full grid">
            <div class="flex flex-center">
                <img v-if="active" class="" src="../../assets/images/item-success-1.png" alt="">
                <img v-else class="" src="../../assets/images/item-success-0.png" alt="">
            </div>
            <div class="flex justify-start"><p class="text-16px">{{props.name}}</p></div>
            <div class="flex justify-center"><p class="text-16px">{{timeIn}}</p></div>
            <div class="flex justify-center"><p class="text-16px">{{timeOut}}</p></div>        
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, defineProps, defineExpose } from 'vue'
import { useStaffStore } from '@/stores/staffStore.js'
import moment from 'moment';



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
        let inn = detail.value.working[index.value].timeIn
        let out = detail.value.working[index.value].timeOut
        inn = new Date(2016, 1, 1, ((inn - inn % 60) /60), (out % 60))
        out = new Date(2016, 1, 1, ((out - out % 60) /60), (out % 60))
        timeIn.value = moment(inn).format('hh:mm A')
        timeOut.value = moment(out).format('hh:mm A')
        active.value = detail.value.working[index.value].active
    })

    // CREATE DATA
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
        return result
    }
</script>

<style>

</style>