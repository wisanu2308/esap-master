<template>
    <div>
        <button class="btn-infox mt-1" @click="dialog=true">
            <v-icon>mdi-menu</v-icon>
        </button>
        <v-dialog v-model="dialog" scrollable transition="dialog-transition" max-width="358">
            <v-card>
                <div class="w-full overflow">
                    <div class="espx-24  bar-box-dialog h-full rounded-8 pb-8">
                        <div class="btn-bar cursor-pointer font-14-300 flex rounded-t-lg bg-white h-10 items-center ">
                            Reference No
                            <v-spacer></v-spacer>
                            <span class="font-14-500 ">ASDF1234568002</span>
                        </div>
                        <div
                            class="btn-bar cursor-pointer font-14-300  flex rounded-b-lg bg-white h-10 items-center  mt-05 ">
                            Declaration No
                            <v-spacer></v-spacer>
                            <span class="font-semibold">-</span>
                        </div>

                        <div @click="$router.push('/')"
                            class="bar-btn2 cursor-pointer flex bg-purple   items-center  mt-6 btn-bar text-white  ">
                            Go to Declaration List
                            <v-spacer></v-spacer>
                            <span class="font-semibol ">
                                <img src="@/assets/images/svg/go.svg" alt="">
                            </span>
                        </div>
                        <div
                            class="bar-btn2 cursor-pointer flex bg-purple h-10 items-center  mt-1 btn-bar text-white  ">
                            Go to Declaration Control
                            <v-spacer></v-spacer>
                            <span class="font-semibold">
                                <img src="@/assets/images/svg/go.svg" alt="">
                            </span>
                        </div>
                        <div
                            class="bar-btn2  cursor-pointer flex bg-purple h-10 items-center  mt-1 btn-bar text-white ">
                            Calculate Tax
                            <v-spacer></v-spacer>
                            <span class="font-semibold">
                                <img src="@/assets/images/svg/go.svg" alt="">
                            </span>
                        </div>
                        <div
                            class="bar-btn2 cursor-pointer flex bg-purple h-10 items-center  mt-1 btn-bar text-white  ">
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
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    data: () => {
        return ({
            dialog: false,
        })
    }
}
</script>