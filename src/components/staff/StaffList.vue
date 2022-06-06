<template>
    <div class="categories-list">
        <div class="">
            <vue-draggable-next class="dragArea list-group w-full" :list="staffsList">
                <div class="mb-5"  :label="item.id" v-for="item in staffsList" :key="item.id" @click="selected(item.id)">
                    <div class="item w-full cursor-pointer " :class="staffSelectedId == item.id ? 'bg-purple-ct text-white' : ''">
                        <div class="h-full flex items-center justify-end">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.0208 6.34674L10.9288 4.25473C10.8878 4.21349 10.839 4.18079 10.7852 4.15848C10.7315 4.13617 10.6739 4.12471 10.6158 4.12476C10.5478 4.12475 10.4808 4.14044 10.4199 4.17062C10.359 4.20081 10.3059 4.24465 10.2648 4.29874C10.2011 4.38924 10.1721 4.49957 10.1829 4.60968C10.1937 4.71979 10.2437 4.82237 10.3238 4.89874L11.5668 6.14175H6.96677V1.54175L8.20978 2.78473C8.28626 2.86459 8.38879 2.91447 8.49884 2.92529C8.60889 2.93611 8.71918 2.90719 8.80975 2.84375C8.86392 2.80245 8.90781 2.74917 8.93799 2.68811C8.96817 2.62705 8.98384 2.55984 8.98376 2.49173C8.98386 2.43355 8.97242 2.37596 8.9501 2.32224C8.92779 2.26851 8.89504 2.21973 8.85376 2.17874L6.76178 0.086731C6.70561 0.0311593 6.62979 0 6.55078 0C6.47177 0 6.39592 0.0311593 6.33975 0.086731L4.24777 2.17874C4.17072 2.25969 4.12745 2.36697 4.12677 2.47873C4.12666 2.59328 4.17112 2.70339 4.25076 2.78574C4.33239 2.87034 4.44426 2.91911 4.5618 2.92136C4.67934 2.92361 4.79297 2.87914 4.87778 2.79773L6.13977 1.53876V6.13873H1.53976L2.78278 4.89575C2.86282 4.81938 2.91279 4.7168 2.92361 4.60669C2.93444 4.49658 2.9054 4.38625 2.84177 4.29575C2.80062 4.24166 2.74753 4.19782 2.68665 4.16763C2.62576 4.13745 2.55871 4.12173 2.49075 4.12173C2.43259 4.12169 2.37501 4.13318 2.32129 4.15549C2.26757 4.1778 2.21879 4.2105 2.17776 4.25174L0.0857544 6.34375C0.0301828 6.39992 -0.000976562 6.47574 -0.000976562 6.55475C-0.000976562 6.63376 0.0301828 6.70958 0.0857544 6.76575L2.17776 8.85776C2.25872 8.93481 2.366 8.97805 2.47775 8.97873C2.59231 8.97884 2.70242 8.93437 2.78476 8.85474C2.86936 8.77311 2.91813 8.66127 2.92038 8.54373C2.92263 8.42619 2.87817 8.31256 2.79675 8.22775L1.53677 6.96573H6.13177V11.5607L4.86978 10.3008C4.78497 10.2193 4.67131 10.1749 4.55377 10.1771C4.43623 10.1794 4.3244 10.2281 4.24277 10.3127C4.16322 10.3951 4.11877 10.5052 4.11877 10.6198C4.11935 10.7315 4.16264 10.8388 4.23978 10.9197L6.33176 13.0117C6.38792 13.0673 6.46374 13.0985 6.54276 13.0985C6.62177 13.0985 6.69759 13.0673 6.75375 13.0117L8.84576 10.9197C8.88705 10.8788 8.91979 10.83 8.94211 10.7763C8.96442 10.7225 8.97587 10.6649 8.97577 10.6068C8.97577 10.5388 8.96005 10.4717 8.92987 10.4109C8.89969 10.35 8.85584 10.2969 8.80176 10.2557C8.7113 10.1922 8.60108 10.1631 8.49103 10.1737C8.38098 10.1844 8.27836 10.234 8.20175 10.3138L6.96677 11.5657V6.96573H11.5668L10.3068 8.22775C10.2253 8.31256 10.1809 8.42619 10.1831 8.54373C10.1854 8.66127 10.2342 8.77311 10.3188 8.85474C10.4011 8.93437 10.5112 8.97884 10.6258 8.97873C10.7375 8.97805 10.8448 8.93481 10.9258 8.85776L13.0178 6.76575C13.0728 6.71011 13.104 6.63514 13.1045 6.55685C13.1051 6.47857 13.075 6.40316 13.0208 6.34674Z" 
                                :fill="staffSelectedId == item.id ? '#fff' : '#030504'"/>
                            </svg>
                        </div>
                        <div class="flex flex-center">
                            <div class="color flex flex-center" :style="`background-color: ${item.color}`">
                                <p class="text-14px text-white uppercase m-0">{{item.name.charAt(0)}}</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <p class="text-20px font-semibold uppercase">{{item.name}}</p>
                        </div>
                        <div class="flex flex-center h-full cursor-pointer" @click="editItem(item.id)">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.8525 2.27716C15.7307 1.96435 15.5322 1.68718 15.2754 1.47101C15.0186 1.25483 14.7115 1.10659 14.3825 1.03992C14.0535 0.973248 13.713 0.990312 13.3923 1.08945C13.0715 1.18859 12.7808 1.36663 12.5468 1.60733C12.3491 1.80394 2.39076 11.7508 2.25931 11.8674C2.22387 12.0286 1.50031 14.0393 1.0168 15.5607C0.9971 15.6219 0.994677 15.6874 1.00979 15.7499C1.0249 15.8125 1.05695 15.8696 1.10244 15.9151C1.14793 15.9606 1.20508 15.9926 1.26761 16.0077C1.33014 16.0228 1.39565 16.0205 1.45689 16.0008C2.98287 15.5138 5.17639 14.6942 5.24497 14.6291C7.18246 12.6859 14.4969 5.37031 14.5037 5.35659C14.8261 5.02625 15.161 4.7096 15.4765 4.37239C15.8127 4.00909 15.9997 3.53239 16 3.03734C15.9823 2.77886 15.9328 2.52351 15.8525 2.27716V2.27716Z"  stroke-miterlimit="10" fill="none" :stroke="staffSelectedId == item.id ? '#fff' : '#8A8A8A'" />
                            </svg>

                        </div>
                        <div class="flex items-center justify-start h-full cursor-pointer" @click="deleteItem(item.id)">
                           <img v-if="staffSelectedId == item.id" src="../../assets/images/delete-icon-light.png" alt="">
                           <img v-else src="../../assets/images/delete-icon-dark.png" alt="">

                        </div>
                    </div>
                </div>
            </vue-draggable-next>
        </div>
    </div>
</template>
<script setup>
    import {  ref, computed, onMounted, defineEmits } from 'vue'
    import { VueDraggableNext } from 'vue-draggable-next'
    import { useStaffStore } from '@/stores/staffStore.js'
    import { ElMessage, ElMessageBox } from 'element-plus'

    

    const store = useStaffStore()
    const staffsList = computed(() => store.getStaffs)
    const staffSelectedId = computed(() => store.getCurrentID)

    const emit = defineEmits(['openEditStaff','getStaffDetail' ])


    onMounted(() => {
    if(staffsList.value.length > 0){
        store.setcurrentDetail(staffsList.value[0].id)
        }
    })
    


    // CREATE DATA
    const staffsListChecked = ref([])


    const enabled = ref(true)
    const dragging = ref(false)

    // CREATE FUNCTION

    const deleteItem = (id) => {
        ElMessageBox({
            title: 'Delete this Item?',
            // message: 'Your setup will not be saved!',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel',
            showClose:false,
            center: true,
        beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
                store.deleteStaff(id)
                done()
                // router.push('/update')
            } else {
                done()
            }
        },
        }).then((action) => {
        })
    }
    const editItem = (id) => {
        emit('openEditStaff', id)
    }
    const selected = (id) => {
        store.setcurrentDetail(id)
    }


</script>

<style lang="scss" scoped>
.categories-list{
    margin-top: 150px;
    gap: 0px;
    svg{
        color: #000;
    }
    .mb-5:last-child{
        margin-bottom: 0 !important;
    }
    .item{
        height: 64px;
        border-radius: 12px;
        border: solid 1.5px #dfe3ff;
        display: grid;
        grid-template-columns: 30px 65px auto 65px 30px;
        @media (max-width: 1100px) {
            grid-template-columns: 30px 45px auto 35px 30px;
        }
        div{
            .color{
                border-radius: 50%;
                background-color: #546516;
                width: 30px;
                height: 30px;
            }
        }
    }
}
</style>