<template>
  <div class="commission">

    <div class="demo-collapse py-8">
        <el-collapse accordion v-model="detail.commission">
            <el-collapse-item name="1">
                <template #title>
                    <img v-if="detail.commission == '1'" class="mr-4" src="../../assets/images/collapse-item-checkbox-1.png" alt="">
                    <img v-else class="mr-4" src="../../assets/images/collapse-item-checkbox-0.png" alt="">
                    <p class="text-14px font-semibold uppercase">Commission (ĂN CHIA)</p>
                </template>
                <div class="pl-14 pb-2">


                    <p class="mb-2 text-14px text-gray/4">Choose Employee - Owner Commission</p>
                    <el-radio-group class="mb-6" v-model="detail.employee_onwer">
                        <el-radio-button class="mb-5" :label="item.value" v-for="item in array1" :key="item.value" >
                            <div class="item flex justify-center" >
                                <p class="text-14px uppercase">{{item.name}}</p>
                            </div>
                        </el-radio-button>
                    </el-radio-group>
                    <p class="text-16px font-semibold text-gray/4">Your employees will share credit card fees with you</p>

                    <div class="flex flex-wrap">
                        <div class="mr-10">
                            <p class="mb-2 text-14px text-gray/4">Charge for credit card transactions (%)</p>
                            <el-input class="mb-6" type="number" v-model="detail.credit" placeholder="0" />
                        </div>
                        <div>
                            <p class="mb-2 text-14px text-gray/4">Charge for tips by credit card (%)</p>
                            <el-input class="mb-6" type="number" v-model="detail.tips" placeholder="0" />
                        </div>
                    </div>

                </div>
            </el-collapse-item>

            <el-collapse-item name="2">
                <template #title>
                    <img v-if="detail.commission == '2'" class="mr-4" src="../../assets/images/collapse-item-checkbox-1.png" alt="">
                    <img v-else class="mr-4" src="../../assets/images/collapse-item-checkbox-0.png" alt="">
                    <p class="text-14px font-semibold uppercase">Salary + Commission (bao lương TRÊN ĂN CHIA)</p>
                </template>
                <div class="pl-14 pb-2">
                    <p class="mb-2 text-14px text-gray/4">Salary by period</p>
                    <el-input class="mb-6" type="number" v-model="detail.salary_by_period" placeholder="$0" />  

                    <p class="mb-2 text-14px text-gray/4">Choose Employee - Owner Commission</p>
                    <el-radio-group class="mb-6" v-model="detail.employee_onwer">
                        <el-radio-button class="mb-5" :label="item.value" v-for="item in array1" :key="item.value" >
                            <div class="item flex justify-center" >
                                <p class="text-14px uppercase">{{item.name}}</p>
                            </div>
                        </el-radio-button>
                    </el-radio-group>
                    

                    <p class="mb-2 text-14px text-gray/4">Choose Cash - Check Percentage</p>
                    <el-radio-group class="" v-model="detail.cash_check_percentage">
                        <el-radio-button class="mb-5" :label="item.value" v-for="item in array2" :key="item.value" >
                            <div class="item flex justify-center" >
                                <p class="text-14px uppercase">{{item.name}}</p>
                            </div>
                        </el-radio-button>
                    </el-radio-group>

                </div>
            </el-collapse-item>

            <el-collapse-item name="3">
                <template #title>
                    <img v-if="detail.commission == '3'" class="mr-4" src="../../assets/images/collapse-item-checkbox-1.png" alt="">
                    <img v-else class="mr-4" src="../../assets/images/collapse-item-checkbox-0.png" alt="">
                    <p class="text-14px font-semibold uppercase">Salary (bao lương)  </p>
                </template>
                <div class="pl-14 pb-2">
                    <div class="flex flex-wrap mb-2">
                        <div class="mr-10 flex items-center cursor-pointer" @click="detail.radio = 1"> 
                            <img v-if="detail.radio == 1" class="mr-4" src="../../assets/images/collapse-item-checkbox-1.png" alt="">
                            <img v-else class="mr-4" src="../../assets/images/collapse-item-checkbox-0.png" alt="">
                            <p class="text-14px text-gray/4">Salary by period</p>
                        </div>
                        <div class="flex items-center cursor-pointer" @click="detail.radio = 2">
                            <img v-if="detail.radio == 2" class="mr-4" src="../../assets/images/collapse-item-checkbox-1.png" alt="">
                            <img v-else class="mr-4" src="../../assets/images/collapse-item-checkbox-0.png" alt="">
                            <p class="text-14px text-gray/4">Wage per hour</p>
                        </div>
                    </div>
                    <el-input class="mb-6" type="number" v-model="detail.salary_by_period" placeholder="$0" />  

                    <p class="mb-2 text-14px text-gray/4">Choose Cash - Check Percentage</p>
                    <el-radio-group class="" v-model="detail.cash_check_percentage">
                        <el-radio-button class="mb-5" :label="item.value" v-for="item in array2" :key="item.value" >
                            <div class="item flex justify-center" >
                                <p class="text-14px uppercase">{{item.name}}</p>
                            </div>
                        </el-radio-button>
                    </el-radio-group>

                    <p class="text-16px font-semibold text-gray/4">Your employees will share credit card fees with you</p>

                    <p class="mb-2 text-14px text-gray/4">Charge for tips by credit card (%)</p>
                    <el-input class="mb-6" type="number" v-model="detail.tips" placeholder="0" />  

                </div>
            </el-collapse-item>
        </el-collapse>

    </div>
  </div>
</template>

<script setup>
import {  ref, onMounted,computed } from 'vue'
import { useStaffStore } from '@/stores/staffStore.js'


    const store = useStaffStore()
    const staffDetail = computed(() => store.getStaffDetail)
    const detail = computed(() => store.getCurrentDetail)


    onMounted(() => {
    })
    // CREATE DATA

    const array1 = ref([
        {name: '70 - 30', value: 1},
        {name: '60 - 40', value: 2},
        {name: '50 - 50', value: 3},
        {name: '40 - 60', value: 4},
        {name: '0 - 100', value: 5},
        {name: 'other', value: 6},
    ])
    const array2 = ref([
        {name: '70 - 30', value: 1},
        {name: '60 - 40', value: 2},
        {name: '50 - 50', value: 3},
        {name: '40 - 60', value: 4},
        {name: 'other', value: 5},
    ])

    // CREATE FUNCTION

    const test = () => {
        // console.log('asdijb');
        // console.log(detail.value);
    }




</script>

<style lang="scss">
    @import '@/assets/scss/staff/commission.scss';
</style>