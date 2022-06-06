<template>
    <div class="login w-full flex flex-center relative" style="height: 100vh">
        <div class="back-btn absolute top-10 left-20 flex items-center cursor-pointer z-10" @click="back()">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.7599 25.0933C12.5066 25.0933 12.2533 25 12.0533 24.8L3.95992 16.7066C3.57326 16.32 3.57326 15.68 3.95992 15.2933L12.0533 7.19997C12.4399 6.81331 13.0799 6.81331 13.4666 7.19997C13.8533 7.58664 13.8533 8.22664 13.4666 8.61331L6.07992 16L13.4666 23.3866C13.8533 23.7733 13.8533 24.4133 13.4666 24.8C13.2799 25 13.0133 25.0933 12.7599 25.0933Z" fill="#373737"/>
                <path d="M27.3336 17H4.89355C4.34689 17 3.89355 16.5467 3.89355 16C3.89355 15.4533 4.34689 15 4.89355 15H27.3336C27.8802 15 28.3336 15.4533 28.3336 16C28.3336 16.5467 27.8802 17 27.3336 17Z" fill="#373737"/>
            </svg>
            <p class="ml-2 text-20px font-semibold">Back</p>
        </div>
        <div class="w-6/12 h-full relative lg:block hidden">
            <img class="login-background-vector absolute bottom-0 left-0" src="../../assets/images/login-background-vector.png" alt="">
            <img class="login-background absolute translate-x-1/2 translate-y-1/2 bottom-1/2 right-1/2" src="../../assets/images/login-background.png" alt="">
        </div>
        <el-form class="lg:w-6/12 w-10/12 h-full flex items-center"  :model="formLogin" ref="ruleFormRef" :rules="rules" @submit.prevent="login(ruleFormRef)">
            <div class="login-form flex flex-col justify-between">
                <div class="form mt-14 relative flex flex-col lg:justify-start justify-center ">
                    <p class="text-36px font-semibold">Let’s connect you to GO CHECKIN POS</p>
                    <p class="text-24px">Once you logged in, you have a full journey with GO CHECKIN POS system.</p>

                    <el-form-item class="w-full mt-12" prop="id">
                        <div class="w-full relative">
                            <el-input class="" v-model="formLogin.id" placeholder="ID" />  
                           <img class="icon ml-4 absolute bottom-1/2 left-0 translate-y-1/2" src="../../assets/images/login-input-icon-1.png" alt="">
                        </div>
                    </el-form-item>

                    <el-form-item class="w-full mt-6" prop="username">
                        <div class="w-full relative">
                            <el-input class="" v-model="formLogin.username" placeholder="Username" />
                            <img class="icon ml-4 absolute bottom-1/2 left-0 translate-y-1/2" src="../../assets/images/login-input-icon-2.png" alt="">
                        </div>
                    </el-form-item>

                    <el-form-item class="w-full mt-6" prop="password">
                         <div class="w-full relative">
                            <el-input class="" type="password" show-password v-model="formLogin.password" placeholder="Password" />
                            <img class="icon ml-4 absolute bottom-1/2 left-0 translate-y-1/2" src="../../assets/images/login-input-icon-3.png" alt="">
                        </div>
                    </el-form-item>
                    <div class="relative line-error">
                        <div class="text-error" v-if="isError != ''">
                            {{isError}}
                        </div>
                    </div>

                    <p class="mt-6 text-24px">Need help? <span class=" text-24px font-semibold text-blue"> Contact Us (832)-968-6668</span></p>

                </div>
                <div class=" w-full flex justify-end items-end">
                    <el-button class="previous-btn text-22px" color="#5669FF" plain >Previous</el-button>
                    <el-button class="submit-btn text-22px text-gray/3 bg-gray" 
                    :disabled="formLogin.password =='' || formLogin.id =='' || formLogin.username ==''" 
                    color="#5669FF" plain native-type="submit" @click="login(ruleFormRef)">Login</el-button>
                </div>

            </div>
        </el-form>
    </div>
</template>

<script  setup>
import {reactive, ref } from 'vue';
import { useStore } from '@/stores/loadingModal.js'
import { useRouter } from "vue-router";


    const storeLoading = useStore()
    const router = useRouter();
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: "Vue POST Request Example" })
    };



    const rules = reactive({
        username: [
            { required: true, message: 'Username is required!', trigger: 'blur' },
            { max: 20, message: 'Username must be less than 20 characters!', trigger: 'blur' },
        ],
         id: [
            { required: true, message: 'ID is required!', trigger: 'blur' },
            { max: 20, message: 'ID must be less than 20 characters!', trigger: 'blur' },
        ],
         password: [
            { required: true, message: 'Password is required!', trigger: 'blur' },
            { max: 20, message: 'Password must be less than 20 characters!', trigger: 'blur' },
        ],
    })
    // CREATE DATA

    const isError = ref('')
    const formLogin = reactive({
        id:'',
        username: '',
        password: '',
    })
    const ruleFormRef = ref()


    // CREATE FUNCTION

    const back = () => {
        storeLoading.openLoading()
        setTimeout(()=>{
            storeLoading.closeLoading()
        }, 1000)
    }
    const login = async (formEl) => {
        if (!formEl) return
        await formEl.validate( async (valid, fields) => {
            if (valid) {
                isError.value = ''
                let businessId = formLogin.id.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\w\s]/gi, '').toLowerCase();
                storeLoading.openLoading()
                await fetch(`https://dns.fast-boy.net/site/get-info?id=${businessId}&type=new`)
                .then((respone) => respone.json())
                        .then(async (data) => {
                            console.log('data',data);
                            if (data.error) {
                                storeLoading.closeLoading()
                                isError.value = 'Invalid business id.'
                            }
                            if (data.result.data.category !== "gci2020") {
                                storeLoading.closeLoading()
                                isError.value = 'Invalid business id.'
                            }
                            if (data && data.result && data.result.data) {
                                localStorage.setItem("domain", data.result.data.domain);
                                // this.$axios.defaults.baseURL = localStorage.getItem("domain");
                                // this.$axios.defaults.headers = {
                                //     Authorization: "Bearer " + this.$store.state.token,
                                //     "G-ClientID": this.formData.id,
                                // };
                                localStorage.setItem("id", businessId)
                                loginConfirm()
                                // storeLoading.closeLoading()
                                // this.$router.push({name: 'login-login-confirm'})
                                // this.$store.commit("CLOSE_LOADING");
                            }
                        });

            } else {
                // SHOW TEXT ERROR
                let obj = Object.values(fields)[0]
                isError.value = obj[0].message
            }
        })
    }
    
    const loginConfirm = async () =>{
        let usernameValue = formLogin.username.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\w\s]/gi, "").toLowerCase();
        let passwordValue = formLogin.password.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\w\s]/gi, "");
        let requestOptions = {
            method: 'POST',
            headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer my-token',
            "G-ClientID":   localStorage.getItem('id'),
            },
            body: JSON.stringify({ username: usernameValue,  password:  passwordValue})
        };
        try {
            let loginInfo = await fetch(`${localStorage.getItem("domain")}/api/v0/user/login`, requestOptions)
            let data = await loginInfo.json();
            // this.postId = data.id;
            // console.log('loginInfo',data);
    

            if (data.result.status !== "OK") {
                storeLoading.closeLoading()
                isError.value = 'Invalid login or password'
            }

            if (data.status == "OK" && data.result.status == "OK") {
                storeLoading.closeLoading()
                localStorage.setItem("access-token", data.result.token);
                localStorage.setItem("business-name", data.result.business.name);
                router.push('/config')
                
            }
        } catch (e) {
            isError.value = e
            storeLoading.closeLoading()
        }
    }
</script>

<style lang="scss">
    @import '@/assets/scss/login/login.scss';
</style>