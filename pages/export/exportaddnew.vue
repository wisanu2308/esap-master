<template>
  <div>
    <Core-HeadBarEx
      :fixedwidth="false"
      :menus="menus"
      action="Declaration Control "
      title="Export Declaration /Export Declaration List/"
      name="DECLARATION CONTROL"
    ></Core-HeadBarEx>

    <div class="hx-48 esap-bg-ex"></div>
    <div
      class="-mt-9 es-container"
      :class="$vuetify.breakpoint.mobile ? 'pt-6' : ''"
    >
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-3/12 h-auto" v-if="!$vuetify.breakpoint.mobile">
          <div class="espx-24 bar-box-ex h-screen rounded-8" style="">
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
              Reference No
              <v-spacer></v-spacer>
              <span class="font-semibold">ASDF123456800</span>
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
              Declaration No
              <v-spacer></v-spacer>
              <span class="font-semibold">-</span>
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
              @click="$router.push('/export/')"
              class="
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
              Go to Declaration List
              <v-spacer></v-spacer>
              <span class="font-semibold">
                <img src="@/assets/images/svg/go.svg" alt="" />
              </span>
            </div>
            <div
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
              Go to Declaration Control
              <v-spacer></v-spacer>
              <span class="font-semibold">
                <img src="@/assets/images/svg/go.svg" alt="" />
              </span>
            </div>
            <div
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
              Calculate Tax
              <v-spacer></v-spacer>
              <span class="font-semibold">
                <img src="@/assets/images/svg/go.svg" alt="" />
              </span>
            </div>
            <div
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
              Add New Items
              <v-spacer></v-spacer>
                <span>
                  <i style="font-size: 20px;" class="mr-0.5 fa-solid fa-circle-plus"></i>
                </span>
            </div>
            <div
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
              Button Name
              <v-spacer></v-spacer>
              <span class="font-semibold">
                <img src="@/assets/images/svg/go.svg" alt="" />
              </span>
            </div>
            <div
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
              <span class="mlx-15">Invoice (s)</span>
              <v-spacer></v-spacer>
              <span class="text-val">0</span>
            </div>
            <div
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
              <span class="text-val">0</span>
            </div>
          </div>
        </div>

        <div class="w-full rrt">
          <div class="main-box">
            <div class="main-paddinge">
              <Core-MiniMenu></Core-MiniMenu>
              <div class="flex flex-col md:flex-row border-b-2 border-gray-200">
                <button class="bb-action-ex">Declaration Control</button>
                <button
                  @click="$router.push('/export/exportinvoice')"
                  class="bb-inaction"
                >
                  Invoice
                </button>
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
                    activeTab === index ? 'tab2-action-export' : ' text-gray-500'
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
                      class="rounded-xl round-ring-export"
                      x-small
                      color="base_ex"
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
                      color="base_ex"
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
                <ExportNew-Declaration></ExportNew-Declaration>
              </div>
              <div v-if="activeTab == 1">
                <ExportNew-Expayment></ExportNew-Expayment>
              </div>
              <div v-if="activeTab == 2">
                <ExportNew-Trading></ExportNew-Trading>
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
    return {
      activeTab: 0,
      tabs: ["Declaration Control", "Payment", "Trading Partner"],

      menus: [
        {
          name: "Short Message",
          icon: "fa-solid fa-message",
          path: "",
          color: "#74788D",
          save: false,
        },
        {
          name: "Short",
          icon: "fa-solid fa-comment",
          path: "/export/short/exportshort",
          color: "#6F9CDF",
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
          name: "Message",
          icon: "fa-solid fa-envelope",
          path: "",
          color: "#74788D",
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
          name: "Validate",
          icon: "fa-solid fa-list-check",
          path: "",
          color: "#6F9CDF",
          save: false,
        },
        {
          name: "Send",
          icon: "fa-solid fa-paper-plane",
          path: "",
          color: "#34C38F",
          save: false,
        },
        {
          name: "GCL",
          icon: require("@/assets/images/svg/menu2/gcl.svg"),
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
          name: "Cancel",
          icon: "fa-solid fa-circle-xmark",
          path: "/export",
          color: "#F46A6A",
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
      ],
    };
  },
  methods: {
    focusNext(event) { // enter and new focus (text input type).
      nextFocus.nextInput(event);
    },
  }
};
</script>