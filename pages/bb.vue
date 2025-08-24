<template>
<div>
    <Core-Header2></Core-Header2>
    <div class="hx-48 esap-bg "> </div>
    <div class="-mt-9 es-container">
        <div class="flex flex-col md:flex-row">
            <div class="w-full md:w-3/12">
                <div class="espx-24 bar-box h-full rounded-8">
                    <div class="btn-bar cursor-pointer font-14-300 flex rounded-t-lg bg-white h-10 items-center ">
                        Reference No
                        <v-spacer></v-spacer>
                        <span class="font-14-500 ">ASDF123456800</span>
                    </div>
                    <div class="btn-bar cursor-pointer font-14-300  flex rounded-b-lg bg-white h-10 items-center  mt-05 ">
                        Declaration No
                        <v-spacer></v-spacer>
                        <span class="font-semibold">-</span>
                    </div>

                    <div @click="$router.push('/')" class="bar-btn2 cursor-pointer flex bg-purple   items-center  mt-6 btn-bar text-white  ">
                        Go to Declaration List
                        <v-spacer></v-spacer>
                        <span class="font-semibol ">
                            <img src="@/assets/images/svg/go.svg" alt="">
                        </span>
                    </div>
                    <div class="bar-btn2 cursor-pointer flex bg-purple h-10 items-center  mt-1 btn-bar text-white  ">
                        Go to Declaration Control
                        <v-spacer></v-spacer>
                        <span class="font-semibold">
                            <img src="@/assets/images/svg/go.svg" alt="">
                        </span>
                    </div>
                    <div class="bar-btn2  cursor-pointer flex bg-purple h-10 items-center  mt-1 btn-bar text-white ">
                        Calculate Tax
                        <v-spacer></v-spacer>
                        <span class="font-semibold">
                            <img src="@/assets/images/svg/go.svg" alt="">
                        </span>
                    </div>
                    <div class="bar-btn2 cursor-pointer flex bg-purple h-10 items-center  mt-1 btn-bar text-white  ">
                        Button Name
                        <v-spacer></v-spacer>
                        <span class="font-semibold">
                            <img src="@/assets/images/svg/go.svg" alt="">
                        </span>
                    </div>
                    <div class="bar-btn2 cursor-pointer flex bg-purple h-10 items-center  mt-1 btn-bar text-white ">
                        Button Name
                        <v-spacer></v-spacer>
                        <span class="font-semibold">
                            <img src="@/assets/images/svg/go.svg" alt="">
                        </span>
                    </div>

                    <div class="btn-bar3  cursor-pointer rounded-8 flex bg-white h-10 items-center  mt-6 btn-bar ">
                        <img src="@/assets/images/svg/folder.svg" alt="">
                        <span class="mlx-15">Invoice (s)</span>
                        <v-spacer></v-spacer>
                        <span class="text-val ">0</span>
                    </div>
                    <div class="btn-bar3 rounded-8 cursor-pointer flex bg-white   items-center  mt-1   ">
                        <img src="@/assets/images/svg/folder.svg" alt="">
                        <span class="mlx-15">Item (s)</span>
                        <v-spacer></v-spacer>
                        <span class="text-val ">0</span>
                    </div>

                </div>
            </div>

            <div class=" w-full  rrt" >
                <div class="main-box">
                    <div class="main-padding">
                        <div class="flex flex-col md:flex-row border-b-2 border-gray-200">
                            <button class="bb-action">
                                Declaration Control
                            </button>
                            <button @click="$router.push('/import/invoice')" class="bb-inaction">
                                Invoice
                            </button>
                            <v-spacer></v-spacer>
                            <Core-ButtonInfo></Core-ButtonInfo>
                        </div>

                        <div class="flex flex-col md:flex-row justify-center items-center my-4 bg-gray">
                            <div @click="activeTab = index" :class="activeTab===index ? 'tab2-action' : ' text-gray-500'" class="w-full md:w-1/3 text-center cursor-pointer py-2 px-4 rounded transition" v-for="(tab, index) in tabs" :key="index">
                                <div class="font-semibold flex flex-col md:flex-row justify-center items-center">

                                    <v-btn v-if="activeTab==index" style="width:24px; height:24px;" :dark="activeTab===index" icon elevation="0" class="rounded-xl round-ring " x-small color="base">
                                        <span style="font-size: 14px;" class="text-white font-semibold">{{index+1}}</span>
                                    </v-btn>
                                    <v-btn v-else style="width:24px; height:24px;" :outlined="activeTab!=index" :dark="activeTab===index" icon elevation="0" class="rounded-xl   " x-small color="base">
                                        <span style="font-size: 14px;" class="tbg font-semibold">{{index+1}}</span>
                                    </v-btn>
                                    <span class=" txt-title">{{tab}}</span>
                                </div>
                            </div>
                        </div>

                        <div v-if="activeTab == 0">
                            <AddNew-Declaration></AddNew-Declaration>
                        </div>
                        <div v-if="activeTab == 1">
                            <AddNew-Payment></AddNew-Payment>
                        </div>
                        <div v-if="activeTab == 2">
                            <AddNew-Trading></AddNew-Trading>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    data: () => {
        return ({
            activeTab: 0,
            tabs: [
                "Declaration Control",
                "Payment",
                "Trading Partner",
            ]
        })
    }
}
</script>

<style>

</style>
