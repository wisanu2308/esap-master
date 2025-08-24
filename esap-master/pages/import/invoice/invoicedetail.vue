<template>
  <div>
    <Core-HeadBar
      :menus="menus"
      :action="action"
      :title="title"
      :name="name"
    ></Core-HeadBar>
    <div class="hx-48 esap-bg"></div>
    <div class="-mt-9 es-container">
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-3/12" v-if="!$vuetify.breakpoint.mobile">
          <div class="espx-24 bar-box h-screen rounded-8">
            <div>
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
                <span class="font-semibold">AFDF123456800</span>
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
                Invoice No
                <v-spacer></v-spacer>
                <span class="font-semibold">-</span>
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
                  mt-06
                "
              >
                Order
                <v-spacer></v-spacer>
                <span class="font-semibold">001</span>
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
                  style="background-color: #FF7640"
                >
                  READY
                </div>
              </div>

              <div
                @click="$router.push('/import/')"
                class="
                  bar-btn2
                  cursor-pointer
                  flex
                  bg-purple
                  items-center
                  mt-6
                  p-2
                  text-white
                  font-semibold
                "
              >
                Go to Declaration List
                <v-spacer></v-spacer>
                <span class="font-semibold">
                  <img src="@/assets/images/svg/go.svg" alt="" />
                </span>
              </div>
              <div
                @click="$router.push('/import/invoice/')"
                class="
                  bar-btn2
                  cursor-pointer
                  flex
                  bg-purple
                  items-center
                  mt-1
                  p-2
                  text-white
                  font-semibold
                "
              >
                Go to Invoice List
                <v-spacer></v-spacer>
                <span class="font-semibold">
                  <img src="@/assets/images/svg/go.svg" alt="" />
                </span>
              </div>
              <div
                @click="$router.push('/import/invoice/invoicecontrol/')"
                class="
                  bar-btn2
                  cursor-pointer
                  flex
                  bg-purple
                  items-center
                  mt-1
                  p-2
                  text-white
                  font-semibold
                "
              >
                Go to Invoice Control
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
                  p-2
                  text-white
                  font-semibold
                "
              >
                Calculate Tax
                <v-spacer></v-spacer>
                <span class="font-semibold">
                  <img src="@/assets/images/svg/go.svg" alt="" />
                </span>
              </div>
              <div
                @click="$router.push('/import/invoice/invoicedetail/')"
                class="
                  bar-btn2
                  cursor-pointer
                  flex
                  bg-purple
                  items-center
                  mt-1
                  p-2
                  text-white
                  font-semibold
                "
              >
                Add New Items
                <v-spacer></v-spacer>
                <span class="font-semibold">
                  <img src="@/assets/images/svg/plus2.svg" alt="" />
                </span>
              </div>

              <div
                @click="$router.push('/import/invoice/')"
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
                <span class="text-val">5</span>
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

              <Core-Expansion bgcolor="#FF7640"></Core-Expansion>
            </div>
          </div>
        </div>

        <div class="w-full rrt">
          <div class="main-box">
            <div class="main-padding">
              <Core-MiniMenu></Core-MiniMenu>
              <div class="flex flex-col md:flex-row">
                <div
                  class="
                    w-full
                    md:w-1/12
                    flex flex-col
                    md:flex-row
                    h-full
                    -pb-6
                  "
                >
                  <label class="font-13-400 mt-2">Item</label>
                  <v-text-field @keydown.enter="focusNext" 
                    class="ml-1 font-14-3001"
                    value="0001"
                    dense
                    placeholder="Filter Name"
                    color="base"
                    outlined
                  ></v-text-field>
                  <label class="font-13-400 ml-6 mt-2">Declare</label>
                  <v-text-field @keydown.enter="focusNext" 
                    class="ml-1 font-14-3001"
                    dense
                    value="0001"
                    color="base"
                    outlined
                  ></v-text-field>
                  <v-text-field @keydown.enter="focusNext" 
                    flat
                    class="ml-1 font-14-3001"
                    dense
                    color="base"
                    outlined
                  ></v-text-field>
                  <v-btn
                    height="36px"
                    width="36px"
                    dark
                    fab
                    small
                    depressed
                    class="rounded-lg ml-2"
                    color="base"
                    >Go</v-btn
                  >
                </div>
                <v-spacer></v-spacer>
                <div class="-mt-3">
                  <Core-ButtonInfo
                    v-if="!$vuetify.breakpoint.mobile"
                  ></Core-ButtonInfo>
                </div>
              </div>
              <v-divider></v-divider>
              <div
                class="
                  rrf
                  flex flex-col
                  md:flex-row
                  justify-center
                  items-center
                  br
                  bg-gray
                  mr-2
                  mt-4
                "
              >
                <div
                  @click="activeTab = index"
                  :class="
                    activeTab === index ? 'tab2-action' : ' text-gray-500'
                  "
                  class="
                    w-full
                    md:w-1/3
                    text-center
                    cursor-pointer
                    py-2
                    px-4
                    br
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
                      class="round-ring"
                      x-small
                      color="base"
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
                      class=""
                      x-small
                      color="base"
                    >
                      <span style="font-size: 14px" class="tbg font-semibold">{{
                        index + 1
                      }}</span>
                    </v-btn>
                    <span class="txt-title">{{ tab }}</span>
                  </div>
                </div>
              </div>

              <div v-if="activeTab == 0">
                <InvocieDetail-Invociedetail></InvocieDetail-Invociedetail>
              </div>
              <div v-if="activeTab == 1">
                <InvocieDetail-TaxIncentives></InvocieDetail-TaxIncentives>
              </div>
              <div v-if="activeTab == 2">
                <InvocieDetail-Excise></InvocieDetail-Excise>
              </div>
              <div v-if="activeTab == 3">
                <InvocieDetail-Charge></InvocieDetail-Charge>
              </div>
              <div v-if="activeTab == 4">
                <InvocieDetail-Duty></InvocieDetail-Duty>
              </div>
              <div v-if="activeTab == 5">
                <InvocieDetail-Permit></InvocieDetail-Permit>
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
      title: "",
      action: "Invoice Control",
      name: "INVOICE CONTROL",
      menus: [
        {
          name: "New",
          icon: 'fa-solid fa-circle-plus',
          path: "/import/invoice/invoicecontrol",
          color: "#34C38F",
          save: false,
        },
        {
          name: "Copy",
          icon: "fa-solid fa-copy",
          path: "",
          color: "#6F9CDF",
          save: false,
        },
        {
          name: "Insert",
          icon: "fa-solid fa-file-arrow-down",
          path: "",
          color: "#FF7640",
          save: false,
        },
        {
          name: "Delete",
          icon: 'fa-solid fa-circle-xmark',
          path: "/import/invoice/invoicecontrol/",
          color: "#F46A6A",
          save: false,
        },
        {
          name: "Re Item",
          icon: "fa-solid fa-rotate-right",
          path: "/",
          color: "#34C38F",
          save: false,
        },
        {
          name: "Save",
          icon: 'fa-solid fa-square-check',
          path: "",
          color: "#34C38F",
          bgcolor: "#34C38F",
          save: true,
        },
      ],
      activeTab: 0,
      tabs: [
        "Invocie Detail",
        "Tax Incentives",
        "Excise",
        "Charge",
        "Duty",
        "Permit",
      ],
    };
  },
  methods: {
    focusNext(event) { // enter and new focus (text input type).
      nextFocus.nextInput(event);
    }
  }
};
</script>