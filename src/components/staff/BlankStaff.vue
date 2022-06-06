<template>
    <div class="black-staff w-full h-full flex flex-center">
        <div class="w-full flex flex-col items-center">
            <img class="add-first-service mb-8 cursor-pointer" src="../../assets/images/add-first-service-btn.png" alt="" @click="addStaff()">
            <p class="text-24px text-yellow text-center">A system has at least one staff!</p>
        </div>
    </div>
</template>

<script setup>
    import { defineEmits } from 'vue'

    const emit = defineEmits(['openAddStaff'])

   // CREATE FUNCTION
    const addStaff = () => {
        emit('openAddStaff');
    }
</script>

<style lang="scss">
    .black-staff{
        height: 345px;
    }
</style>