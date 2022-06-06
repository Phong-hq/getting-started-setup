<template>
    <div class="config w-full flex justify-center relative" style="height: 100vh">
        <div class="config-box flex flex-col justify-around items-center">
            <div class="w-full mt-6 flex flex-col items-center">
                <p class=" mb-6 text-48px font-semibold text-center">Welcome to GO CHECKIN POS Trial Version</p>
                <p class=" mb-6 text-24px w-8/12 text-center">Payment, Payroll, Turn Assignment, Appointment and Marketing System for Nail Salons</p>
                <router-link :to="{ name: 'choose-keyboard' }">
                    <el-button class="submit-btntext-22px bg-purple-ct text-white"  color="#5669FF" plain  >Start Trial</el-button>
                </router-link>
                    <!-- <el-button class="submit-btntext-22px bg-purple-ct text-white"  color="#5669FF" plain @click="test()" >Start Trial</el-button> -->
            </div>
            <div>
                <img class="w-full" src="../../assets/images/config-background.png" alt="">
            </div>
        </div>
    </div>
</template>

<script  setup>
import { useStore } from '@/stores/test.js'
const store = useStore()

const test = () => {
    store.getData()
    console.log('Doneeeeeee');
}
</script>

<style lang="scss">
    @import '@/assets/scss/config/config.scss';
</style>