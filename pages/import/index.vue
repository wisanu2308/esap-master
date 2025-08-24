<template>
  <div>
    <Core-HeadBar
      :menus="menus"
      :action="action"
      :title="title"
      :name="name"
    ></Core-HeadBar>

    <div class="hx-48 esap-bg"></div>
    <div
      class="-mt-9 es-container"
      :class="$vuetify.breakpoint.mobile ? 'pt-6' : ''"
    >
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-3/12" v-if="!$vuetify.breakpoint.mobile">
          <div class="espx-24 bar-box h-full rounded-8" style="padding-bottom: 30px;">
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
              <span class="font-14-500">ASDF1234568002</span>
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
                    w-1/2
                    flex
                    justify-center
                    items-center
                    h-full
                    rbg
                    bar-txt3
                    rounded-br-lg
                    text-white
                  "
                  color="ready"
                >
                  READY
                </div>
              </div>

            <div
              @click="$router.push('/')"
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
            >
              Go to Declaration List
              <v-spacer></v-spacer>
              <span class="font-semibol">
                <img src="@/assets/images/svg/go.svg" alt="" />
              </span>
            </div>
            <div
              class="
                bar-btn2
                cursor-pointer
                flex
                bg-purple
                h-10
                items-center
                mt-1
                btn-bar
                text-white
              "
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
                h-10
                items-center
                mt-1
                btn-bar
                text-white
              "
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
                h-10
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
                bar-btn2
                cursor-pointer
                flex
                bg-purple
                h-10
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
            <div class="main-padding">
              <Core-MiniMenu></Core-MiniMenu>
              <div class="flex flex-col md:flex-row border-gray-200">
                <button class="bb-action">Declaration Control</button>
                <button
                  @click="$router.push('/import/invoice')"
                  class="bb-inaction"
                >
                  Invoice
                </button>
                <v-spacer></v-spacer>
                <center v-if="!$vuetify.breakpoint.mobile">
                  <Core-ButtonInfo></Core-ButtonInfo>
                </center>
              </div>
              <v-divider></v-divider>

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
                    activeTab === index ? 'tab2-action' : ' text-gray-500'
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
                      class="rounded-xl round-ring"
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
                      class="rounded-xl"
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
    return {
      dialog: true,
      activeTab: 0,
      tabs: ["Declaration Control", "Payment", "Trading Partner"],
      name: "DECLARATION CONTROL",
      title: "Import Declaration / Import Declaration List /",
      action: "Add New",
      menus: [
        {
          name: "XML",
          icon: "fa-solid fa-file",
          path: "",
          color: "#FE7640",
          save: false,
        },
        {
          name: "Message",
          icon: "fa-solid fa-message",
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
          name: "Print",
          icon: 'fa-solid fa-print',
          path: "",
          color: "#FF7640",
          save: false,
        },
        {
          name: "Cancel",
          icon: "fa-solid fa-circle-xmark",
          path: "/",
          color: "#F46A6A",
          save: false,
        },
        {
          name: "Save",
          icon: "fa-solid fa-square-check",
          path: "",
          color: "#34C38F",
          bgcolor: "#34C38F",
          save: true,
        },
      ],
    };
  },
};
</script>