<template>
  <div>
    <Core-HeadBarGoods
      :fixedwidth="false"
      :menus="menus"
      action="Goods Control"
      title="Goods Transition List/"
      name="GOODS CONTROL"
    ></Core-HeadBarGoods>

    <div class="hx-48 esap-bg-good"></div>
    <div
      class="-mt-9 es-container"
      :class="$vuetify.breakpoint.mobile ? 'pt-6' : ''"
    >
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-3/12 h-auto" v-if="!$vuetify.breakpoint.mobile">
          <div class="espx-24 bar-box-goods h-screen rounded-8" style="">
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
              GCL No
              <v-spacer></v-spacer>
              <span class="font-semibold">-</span>
            </div>
            <div
              class="
                btn-bar-x
                cursor-pointer
                font-14-300
                flex
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
                  items-center
                  text-white
                "
                style="background-color: #ff7640"
              >
                READY
              </div>
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
                style="background-color: #ff7640"
              >
                READY
              </div>
            </div>
            <div
              @click="$router.push('/goods/')"
              class="
                bar-btn2
                cursor-pointer
                flex
                bg-blue-goods
                items-center
                mt-6
                btn-bar
                text-white
              "
            >
              Go to Goods Transition List
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
                bg-blue-goods
                items-center
                mt-1
                btn-bar
                text-white
              "
            >
              Add New Items
              <v-spacer></v-spacer>
              <span>
                <i
                  style="font-size: 20px"
                  class="mr-0.5 fa-solid fa-circle-plus"
                ></i>
              </span>
            </div>
            <div
              class="
                bar-btn2
                cursor-pointer
                flex
                bg-blue-goods
                items-center
                mt-1
                btn-bar
                text-white
              "
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
                rounded-8
                cursor-pointer
                flex
                bg-white
                items-center
                mt-6
              "
            >
              <img src="@/assets/images/svg/folder.svg" alt="" />
              <span class="mlx-15">Item (s)</span>
              <v-spacer></v-spacer>
              <span class="text-val">2</span>
            </div>

            <div
              class="
                btn-bar
                cursor-pointer
                font-14-300
                flex
                bg-white
                rounded-8
                mt-6
                flex-col
                justify-start
                p-4
              "
            >
              <div>
                <span class="font-semibold">&#8226; ASDF123456800</span>
              </div>
              <div>
                <span class="font-semibold">&#8226; ASDF123456800</span>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full rrt">
          <div class="main-box">
            <div class="main-paddinge">
              <Core-MiniMenu></Core-MiniMenu>
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
                    activeTab === index ? getClassActive(index): ' text-gray-500'"
                  class="
                    w-full
                    md:w-1/3
                    text-center
                    cursor-pointer
                    py-3
                    px-4
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
                      class="rounded-xl round-ring-goods"
                      x-small
                      color="base_goods"
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
                      color="base_goods"
                    >
                      <span
                        style="font-size: 14px"
                        class="tbg3 font-semibold"
                        >{{ index + 1 }}</span
                      >
                    </v-btn>
                    <span
                      v-if="activeTab == index"
                      class="txt-title"
                      style="color: #db89d7"
                      >{{ tab }}</span
                    >
                    <span v-else class="txt-title">{{ tab }}</span>
                  </div>
                </div>
                <div class="-mt-1 ml-3">
                  <Core-ButtonInfo
                    v-if="!$vuetify.breakpoint.mobile"
                  ></Core-ButtonInfo>
                </div>
              </div>

              <div v-if="activeTab == 0">
                <GoodsNew-Control></GoodsNew-Control>
              </div>
              <div v-if="activeTab == 1">
                <GoodsNew-Container></GoodsNew-Container>
              </div>
              <div v-if="activeTab == 2">
                <GoodsNew-Zone></GoodsNew-Zone>
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
      tabs: ["Goods Control", "Container", "Zone"],

      menus: [
        {
          name: "Back Status",
          icon: require("@/assets/images/svg/good/back-status.svg"),
          path: "",
          color: "base_goods",
          save: false,
          isCustomIcon: true,
        },
        {
          name: "Cancel",
          icon: require("@/assets/images/svg/good/cancel.svg"),
          path: "",
          color: "base_goods",
          save: false,
          isCustomIcon: true,
        },
        {
          name: "Receive",
          icon: require("@/assets/images/svg/good/receive.svg"),
          path: "",
          color: "base_goods",
          save: false,
          isCustomIcon: true,
        },
        {
          name: "Send",
          icon: require("@/assets/images/svg/good/send.svg"),
          path: "",
          color: "base_goods",
          save: false,
          isCustomIcon: true,
        },
        {
          name: "Message",
          icon: require("@/assets/images/svg/good/message.svg"),
          path: "",
          color: "base_goods",
          save: false,
          isCustomIcon: true,
        },
        {
          name: "Data Entry Form",
          icon: require("@/assets/images/svg/good/data-entry-form.svg"),
          path: "",
          color: "base_goods",
          save: false,
          isCustomIcon: true,
        },
        {
          name: "Validate",
          icon: require("@/assets/images/svg/good/validate.svg"),
          path: "",
          color: "base_goods",
          save: false,
          isCustomIcon: true,
        },
        {
          name: "Print",
          icon: require("@/assets/images/svg/good/print.svg"),
          path: "",
          color: "base_goods",
          save: false,
          isCustomIcon: true,
        },
        {
          name: "Copy",
          icon: require("@/assets/images/svg/good/copy.svg"),
          path: "",
          color: "base_goods",
          save: false,
          isCustomIcon: true,
        },
        {
          name: "Save",
          icon: "fa-solid fa-square-check",
          bgcolor: "#47B5FF", //button color
          color: "white", // font color
          otherclass: "font-16-600",
          save: true,
          isCustomIcon: false,
        },
      ],
    };
  },
  methods: {
    focusNext(event) { // enter and new focus (text input type).
      nextFocus.nextInput(event);
    },
    getClassActive(index){
      switch (index) {
        case 0: return 'tab2-action-goods'
        case 1: return 'tab3-action-goods'
        case 2: return 'tab4-action-goods'
      }
    }
  },
};
</script>