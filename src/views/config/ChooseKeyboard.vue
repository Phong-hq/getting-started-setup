<template>
    <div class="keyboard w-full flex flex-center relative" style="height: 100vh">
        <div class="w-6/12 h-full relative xl:block hidden">
            <img class="keyboard-background-vector absolute top-0 left-0" src="../../assets/images/choose-keyboard-background-vector.png" alt="">
            <img class="keyboard-background ml-20 absolute translate-y-1/2 bottom-1/2 left-0" src="../../assets/images/choose-keyboard-background.png" alt="">
        </div>
        <el-form class="xl:w-6/12 w-10/12 h-full flex items-center xl:justify-start justify-center" @submit.prevent="next()">
            <div class="keyboard-form flex flex-col justify-between">
                <div class="form mt-14  flex flex-col xl:justify-start justify-center ">
                    <p class="text-36px font-semibold">Which keyboard do you want to use?</p>
                    <p class="text-24px">Incase your computer has touch screen, you can choose using keyboard or touch screen on GO CHECK IN POS</p>
                    <div class="keyboard-list mt-12" v-click-away="onClickOutside">
                        <div v-for="item in keyboardList" :key="item.id" @click="keyboardActive = item.id" >
                            <div class="item w-full mt-8 px-12 flex items-center hover:bg-purple-ct hover:text-white cursor-pointer z-10" :class="keyboardActive == item.id ? 'bg-purple-ct text-white' : 'bg-gray' ">
                                <p class="text-24px">{{item.name}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" w-full flex justify-end items-end"> 
                    <el-button class="previous-btn text-22px" color="#5669FF" plain v-if="keyboardActive < 0"  @click="previous()">Previous</el-button>
                    <el-button class="submit-btn text-22px text-gray/3 bg-gray z-10" :class="keyboardActive < 0 ? 'is-disabled' : ''" color="#5669FF" 
                    native-type="submit" plain @click="next()" >Next</el-button>
                </div>

            </div>
        </el-form>
    </div>
</template>


<script  setup>
import { ref } from 'vue';
import { useStore } from '@/stores/loadingModal.js'
import { useRouter } from "vue-router";



const router = useRouter();
const storeLoading = useStore()

    // CREATE DATA
const keyboardList = ref([
    {id: 0, name:'Hardware Keyboard'},
    {id: 1, name:'Touch Screen'},
    {id: 2, name:'Both'},
])
const keyboardActive = ref(-1)
    // CREATE FUNCTION
    
    const onClickOutside = () => {
        setTimeout(() => {
        keyboardActive.value = -1
        },200)
        console.log('Clicked outside. Event: ')
    }
    const next = () => {
        console.log('nexttt');
        // router.push('/choose-category')
        // setTimeout(() => {
            if(keyboardActive.value > 0){
                    router.push({ name: "choose-category" });
            }
        // },500)

        // window.location.href = "/choose-category";

    }

    const previous = async () => {
        await localStorage.clear();
        window.location.href = "/home";
    }
</script>

<style lang="scss">
    @import '@/assets/scss/config/choose-keyboard.scss';
</style>