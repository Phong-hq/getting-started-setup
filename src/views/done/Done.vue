<template>
    <div class="done">
        <div class="overflow-x-hidden flex justify-center">
            <div class="box relative flex justify-center">
                <div class="content  flex flex-col items-center">
                    <p class=" mb-4 text-48px font-semibold text-center">Congratulation, you’re done with the setup GO CHECKIN POS</p>
                    <p class="mb-8 text-24px text-center">Billing, Payroll, Turning, Management, Appointment and Marketing System for Nail Salons</p>
                    <el-button class="submit-btn text-22px text-white bg-purple-ct"  color="#5669FF" plain >Next</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .done{
        .box{
            margin-top: 16vh;
            width: 1330px;
            min-width: 1330px;
            height: 600px;
            background-size: cover;
            background-image: url(../../assets/images/end-background.png);
            background-position: center;
            @media (max-width:950px) {
                background-image: none;
                 .content{
                    margin-top: 50px  !important;
                    width: 90vw !important;
                    .text-24px{
                        max-width: 85vw !important;
                    }
                 }
            }
            .content{
                margin-top: 200px;
                max-width: 815px;
                .text-24px{
                    max-width: 637px;
                }
                button{
                    background: #5669FF;
                    border-radius: 12px;
                    width: 282px;
                    height: 64px;
                    color: #fff;
                    span{
                        font-size: 22px;
                    }
                }
            }
        }
        @media (max-height: 660px) {
            .box{
                background-image: none !important;
            }
            .content{
                    margin-top: 50px  !important;
                    width: 90vw !important;
                    .text-24px{
                        font-size: 18px;
                    }
                    .text-48px{
                        font-size: 36px;
                    }
                 }
        }
    }
</style>