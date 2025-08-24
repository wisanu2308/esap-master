<template>
    <div>
        <Core-HeadBarEx :menus="menus" :action="action" :title="title" :name="name"></Core-HeadBarEx>
        <div class="hx-48 esap-bg-ex"> </div>

        <div class="-mt-9 es-container">
            <div class="flex flex-col md:flex-row">
                <div class="w-full md:w-3/12" v-if="!$vuetify.breakpoint.mobile">
                    <div class="espx-24 bar-box-ex h-screen rounded-8">
                        <div>
                            <div
                                class="btn-bar cursor-pointer font-14-300 flex rounded-t-lg bg-white h-10 items-center">
                                Reference No
                                <v-spacer></v-spacer>
                                <span class="font-semibold">ASDF123456800</span>
                            </div>
                            <div
                                class="btn-bar cursor-pointer font-14-300  flex  rounded-b-lg  bg-white h-10 items-center  mt-05">
                                Declaration No
                                <v-spacer></v-spacer>
                                <span class="font-semibold">-</span>
                            </div>

                            <div
                                class="bar-btn2 cursor-pointer flex bg-purple items-center  mt-6 p-2 text-white font-semibold">
                                Go to Declaration List
                                <v-spacer></v-spacer>
                                <span class="font-semibold">
                                    <img src="@/assets/images/svg/go.svg" alt="">
                                </span>
                            </div>
                            <div
                                class="bar-btn2 cursor-pointer flex bg-purple items-center  mt-1 p-2 text-white font-semibold">
                                Go to Declaration Control
                                <v-spacer></v-spacer>
                                <span class="font-semibold">
                                    <img src="@/assets/images/svg/go.svg" alt="">
                                </span>
                            </div>
                            <div
                                class="bar-btn2 cursor-pointer flex bg-purple items-center  mt-1 p-2 text-white font-semibold">
                                Calculate Tax
                                <v-spacer></v-spacer>
                                <span class="font-semibold">
                                    <img src="@/assets/images/svg/go.svg" alt="">
                                </span>
                            </div>
                            <div
                                class="bar-btn2 cursor-pointer flex bg-purple items-center  mt-1 p-2 text-white font-semibold">
                                Button Name
                                <v-spacer></v-spacer>
                                <span class="font-semibold">
                                    <img src="@/assets/images/svg/go.svg" alt="">
                                </span>
                            </div>
                            <div
                                class="bar-btn2 cursor-pointer flex bg-purple items-center  mt-1 p-2 text-white font-semibold">
                                Button Name
                                <v-spacer></v-spacer>
                                <span class="font-semibold">
                                    <img src="@/assets/images/svg/go.svg" alt="">
                                </span>
                            </div>

                            <div @click="$router.push('/import/invoice/')"
                                class="btn-bar3  cursor-pointer rounded-8 flex bg-white h-10 items-center  mt-6 btn-bar ">
                                <img src="@/assets/images/svg/folder.svg" alt="">
                                <span class="mlx-15">Invoice (s)</span>
                                <v-spacer></v-spacer>
                                <span class="text-val ">5</span>
                            </div>
                            <div class="btn-bar3 rounded-8 cursor-pointer flex bg-white   items-center  mt-1   ">
                                <img src="@/assets/images/svg/folder.svg" alt="">
                                <span class="mlx-15">Item (s)</span>
                                <v-spacer></v-spacer>
                                <span class="text-val ">0</span>
                            </div>

                        </div>
                    </div>
                </div>

                <div class=" w-full  rrt">
                    <div class="main-box">
                        <div class="main-padding">

                            <Core-MiniMenu></Core-MiniMenu>
                            <div class="flex flex-col md:flex-row">
                                <div class="
                                        w-full
                                        md:w-1/12
                                        flex flex-col
                                        md:flex-row
                                        h-full
                                        -pb-6
                                    ">
                                    <label class="font-13-400 mt-2">Item</label>
                                    <v-text-field @keydown.enter="focusNext" class="ml-1 font-14-3001" value="0001"
                                        dense placeholder="Filter Name" color="base_ex" outlined></v-text-field>
                                    <label class="font-13-400 ml-6 mt-2">Declare</label>
                                    <v-text-field @keydown.enter="focusNext" class="ml-1 font-14-3001" dense
                                        value="0001" color="base_ex" outlined>
                                    </v-text-field>
                                    <v-text-field @keydown.enter="focusNext" flat class="ml-1 font-14-3001" dense
                                        color="base_ex" outlined>
                                    </v-text-field>
                                    <v-btn height="36px" width="36px" dark fab small depressed class="rounded-lg ml-2"
                                        color="base_ex">Go</v-btn>
                                </div>
                                <v-spacer></v-spacer>
                                <div class="-mt-3">
                                    <Core-ButtonInfo v-if="!$vuetify.breakpoint.mobile"></Core-ButtonInfo>
                                </div>
                            </div>
                            <div>
                                <div class="flex   flex-wra mt-2">
                                    <div
                                        class="rrf flex flex-col md:flex-row justify-center items-center br bg-gray mr-2">
                                        <div @click="activeTab = index"
                                            :class="activeTab===index ? 'tab2-actionplus' : ' text-gray-500'"
                                            class="w-full md:w-1/5 text-center cursor-pointer py-2 px-4 br transition"
                                            v-for="(tab, index) in tabs" :key="index">
                                            <div
                                                class="font-semibold flex flex-col md:flex-row justify-center items-center ">

                                                <v-btn v-if="activeTab==index" style="width:24px; height:24px;"
                                                    :dark="activeTab===index" icon elevation="0" class="  round-ring "
                                                    x-small color="base_ex">
                                                    <span style="font-size: 14px;"
                                                        class="text-white font-semibold">{{index+1}}</span>
                                                </v-btn>
                                                <v-btn v-else style="width:24px; height:24px;"
                                                    :outlined="activeTab!=index" :dark="activeTab===index" icon
                                                    elevation="0" class="   " x-small color="base_ex">
                                                    <span style="font-size: 14px;"
                                                        class="tbg2 font-semibold">{{index+1}}</span>
                                                </v-btn>
                                                <span class=" txt-title">{{tab}}</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div v-if="activeTab == 0">
                                <InvocieDetailExport-Invociedetail></InvocieDetailExport-Invociedetail>
                            </div>
                            <div v-if="activeTab == 1">
                                <InvocieDetailExport-TaxIncentives></InvocieDetailExport-TaxIncentives>
                            </div>
                            <div v-if="activeTab == 2">
                                <InvocieDetailExport-Excise></InvocieDetailExport-Excise>
                            </div>
                            <div v-if="activeTab == 3">
                                <InvocieDetailExport-Charge></InvocieDetailExport-Charge>
                            </div>
                            <div v-if="activeTab == 4">
                                <InvocieDetailExport-Duty></InvocieDetailExport-Duty>
                            </div>
                            <div v-if="activeTab == 5">
                                <InvocieDetailExport-Permit></InvocieDetailExport-Permit>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
        <p id="btnFocusOut"></p>
    </div>
</template>

<script>
import nextFocus from "@/services/nextFocus.js";

export default {
    data: () => {
        return ({
            title: 'Invoice Control /',
            action: 'Invoice Detail',
            name: 'INVOICE DETAIL',
            menus: [{
                name: 'New',
                icon: 'fa-solid fa-circle-plus',
                path: '',
                color: '',
                save: false,
            }, {
                name: 'Copy',
                icon: '',
                path: '',
                color: '',
                save: false,
            },
            {
                name: 'Insert',
                icon: require('@/assets/images/svg/menu/insert.svg'),
                path: '',
                color: '',
                save: false,
            },
            {
                name: 'Delete',
                icon: require('@/assets/images/svg/delete.svg'),
                path: '/export/',
                color: '',
                save: false,
            },
            {
                name: 'Re Item',
                icon: require('@/assets/images/svg/menu/re.svg'),
                path: '',
                color: '',
                save: false,
            },
            {
                name: 'Save',
                icon: 'fa-solid fa-square-check',
                path: '',
                color: '#34C38F',
                save: true,
            }
            ],

            activeTab: 0,
            tabs: [
                "Invocie Detail",
                " Tax Incentives",
                "Charge",
                "Duty",
                "Permit",
            ]
        })
    },
    methods: {
        focusNext(event) { // enter and new focus (text input type).
      nextFocus.nextInput(event);
    },
    }
}
</script>
