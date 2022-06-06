<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useStore } from '@/stores/loadingModal.js'
import { ref, computed, onMounted  } from "vue";
import { useRouter } from "vue-router";


    const storeLoading = useStore()
    const router = useRouter();
    const openLoading = computed(() => storeLoading.getLoadingValue)
    onMounted(() => {
      console.log('app.vue');
      if(localStorage.getItem('access-token') && localStorage.getItem('access-token') != ''){
        router.push({ name: "config" });
      }
      else{
        router.push({ name: "home" });

      }
    })
</script>

<template>
  <RouterView />
  <div class="loading  flex flex-center" v-if="openLoading">
    <div class="loading-box">
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
  
</template>


<style lang="scss">
@import '@/assets/scss/generalStyle.scss';
@import '@/assets/scss/tailwind.css';
@import 'element-plus/dist/index.css';
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

</style>
