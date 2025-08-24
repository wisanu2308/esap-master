<template>
  <div>
    <Core-Header14
      name="CANCEL FdaRestricted List DETAIL"
      action="Cancel FdaRestricted List Detail"
      title="FDA RESTRICTED GOODS"
      bgcolor="#e9ce9c"
      :isExport="true"
    >
    </Core-Header14>

     <div class="hx-48 esap-bg-fda"></div>
    <div
      class="-mt-9 es-container"
      :class="$vuetify.breakpoint.mobile ? 'pt-6' : ''"
    >
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-3/12 h-auto" v-if="!$vuetify.breakpoint.mobile">
          <div class="espx-24 bar-box-fda h-screen rounded-8" style="">
            <div
              class="
                btn-bar
                cursor-pointer
                font-14-300
                flex
                rounded-t-lg
                bg-white
                h-10
                items-center
              "
            >
              Reference No.
              <v-spacer></v-spacer>
              <span class="font-semibold">ASDF123456898</span>
            </div>

            <div
              class="
                btn-bar
                cursor-pointer
                font-14-300
                flex
                bg-white
                h-10
                items-center
                mt-05
              "
            >
              Receive Control No.
              <v-spacer></v-spacer>
              <span class="font-semibold">23680401300000002</span>
            </div>
            <div
              class="
                btn-bar-x
                cursor-pointer
                font-14-300
                flex
                rounded-b-lg
                bg-white
                h-10
                items-center
                mt-06
              "
            >
              <div
                class="
                  w-1/2
                  h-full
                  uppercase
                  flex flex-col
                  justify-center
                  items-center
                  bar-txt2
                "
              >
                P
              </div>
              <div
                class="
                  rbgx
                  bar-txt3
                  w-1/2
                  h-full
                  uppercase
                  flex flex-col
                  justify-center
                  rounded-br-lg
                  items-center
                  text-white
                "
                style="background-color: #FF7640;"
              >
                READY
              </div>
            </div>

            <div
              @click="$router.push('/fdapermit/')" class="
                bar-btn2
                cursor-pointer
                flex
                bg-purple
                items-center
                mt-6
                btn-bar
                text-white
              "
              style="background-color: #2F80ED;"
            >
              Go to FdaRestricted List
              <v-spacer></v-spacer>
              <span class="font-semibold">
                <img src="@/assets/images/svg/go.svg" alt="" />
              </span>
            </div>
            <div
              @click="$router.push('/fdapermit/fdapermitaddnew/')"
              class="
                bar-btn2
                cursor-pointer
                flex
                bg-purple
                items-center
                mt-1
                btn-bar
                text-white
              "
              style="background-color: #2F80ED;"
            >
              Go to FdaRestricted Control(ใบแจ้ง)
              <v-spacer></v-spacer>
              <span class="font-semibold">
                <img src="@/assets/images/svg/go.svg" alt="" />
              </span>
            </div>
            
            <div
              @click="$router.push('/fdapermit/Detail/')"
              class="
                bar-btn2
                cursor-pointer
                flex
                bg-purple
                items-center
                mt-1
                btn-bar
                text-white
              "
              style="background-color: #2F80ED;"
            >
              Add New FdaRestricted Detail
              <v-spacer></v-spacer>
                <span>
                  <i style="font-size: 20px;" class="mr-0.5 fa-solid fa-circle-plus"></i>
                </span>
            </div>
            <div
              @click="$router.push('/fdapermit/fdacanlist/fdacanlist/')"
              class="
                bar-btn2
                cursor-pointer
                flex
                bg-purple
                items-center
                mt-1
                btn-bar
                text-white
              "
              style="background-color: #0a3e83;"
            >
              Go to FdaRestricted Cancel
              <v-spacer></v-spacer>
              <span class="font-semibold">
                <img src="@/assets/images/svg/go.svg" alt="" />
              </span>
            </div>
            <div
            @click="$router.push('/carmanifest/Detail/')"
              class="
                btn-bar3
                cursor-pointer
                rounded-8
                flex
                bg-white
                h-10
                items-center
                mt-6
                btn-bar
              "
            >
              <img src="@/assets/images/svg/folder.svg" alt="" />
              <span class="mlx-15">Description (s)</span>
              <v-spacer></v-spacer>
              <span class="text-val">1</span>
            </div>
            <div
              @click="$router.push('/carmanifest/Detail/carmdetailcontrol/')"
              class="
                btn-bar3
                rounded-8
                cursor-pointer
                flex
                bg-white
                items-center
                mt-1
              "
            >
              <img src="@/assets/images/svg/folder.svg" alt="" />
              <span class="mlx-15">Item (s)</span>
              <v-spacer></v-spacer>
              <span class="text-val">1</span>
            </div>
          </div>
        </div>

        <div class="w-full rrt">
          <div class="main-box">
            <div class="main-paddinge">
              <Core-MiniMenu></Core-MiniMenu>
              
              <div class="flex flex-col md:flex-row border-b-2 border-gray-200">
                <button class="bb-action-carm">Cancel Restricted Goods Control</button>
              
                <v-spacer></v-spacer>
                <Core-ButtonInfo
                  v-if="!$vuetify.breakpoint.mobile"
                ></Core-ButtonInfo>
              </div>
              <div
                class="
                  flex flex-col
                  md:flex-row
                  justify-center
                  items-center
                  my-4
                  bg-gray
                "
              >
                <div
                  @click="activeTab = index"
                  :class="
                    activeTab === index ? 'tab2-action-carm' : ' text-gray-500'
                  "
                  class="
                    w-full
                    md:w-1/3
                    text-center
                    cursor-pointer
                    py-2
                    px-4
                    rounded
                    transition
                  "
                  v-for="(tab, index) in tabs"
                  :key="index"
                >
                  <div
                    class="
                      font-semibold
                      flex flex-col
                      md:flex-row
                      justify-center
                      items-center
                    "
                  >
                    <v-btn
                      v-if="activeTab == index"
                      style="width: 24px; height: 24px"
                      :dark="activeTab === index"
                      icon
                      elevation="0"
                      class="rounded-xl round-ring-carm"
                      x-small
                      color="base_carm"
                    >
                      <span
                        style="font-size: 14px"
                        class="text-white font-semibold"
                        >{{ index + 1 }}</span
                      >
                    </v-btn>
                    <v-btn
                      v-else
                      style="width: 24px; height: 24px"
                      :outlined="activeTab != index"
                      :dark="activeTab === index"
                      icon
                      elevation="0"
                      class="rounded-xl"
                      x-small
                      color="base_carm"
                    >
                      <span style="font-size: 14px" class="tbg2 font-semibold">{{
                        index + 1
                      }}</span>
                    </v-btn>
                    <span class="txt-title">{{ tab }}</span>
                  </div>
                </div>
              </div>

              <div v-if="activeTab == 0">
                <FdaCanControl-fdacancontrolentry></FdaCanControl-fdacancontrolentry>
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
import nextFocus from "@/services/nextFocusCarm.js";
export default {
  data: () => {
    return {
      activeTab: 0,
      tabs: ["Cancel Restricted Control"],

      menus: [
        {
          name: "Send",
          icon: "fa-solid fa-paper-plane",
          path: "",
          color: "#34C38F",
          save: false,
        },
        {
          name: "Receive",
          icon: "fa-solid fa-clipboard-check",
          path: "",
          color: "#F1B44C",
          save: false,
        },
        {
          name: "Message",
          icon: "fa-solid fa-envelope",
          path: "",
          color: "#74788D",
          save: false,
        },                
        {
          name: "XML",
          icon: require("@/assets/images/svg/menu/xml.svg"),
          path: "",
          color: "",
          save: false,
        },        
        {
          name: "Print",
          icon: "fa-solid fa-print",
          path: "",
          color: "#FF7640",
          save: false,
        },
        {
          name: "Validate",
          icon: "fa-solid fa-list-check",
          path: "",
          color: "#6F9CDF",
          save: false,
        },
        {
          name: "Save",
          icon: "fa-solid fa-square-check",
          path: "",
          bgcolor: "#2F80ED",
          color:"#FFFFFF",
          save: true,
        },
        {
          name: "Cancel",
          icon: "fa-solid fa-circle-xmark",
          path: "/export",
          color: "#F46A6A",
          save: false,
        },
      ],
    };
  },
  methods: {
    focusNext(event) { // enter and new focus (text input type).
      nextFocus.nextInput(event);
    },
  }
};
</script>,