<template>
  <div>
    <Core-HeadBarEx :fixedwidth="false" :menus="menus" :action="action" :title="title" :name="name"></Core-HeadBarEx>
    <div class="hx-48 esap-bg-ex"></div>
    <div class="-mt-9 es-container">
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-3/12" v-if="!$vuetify.breakpoint.mobile">
          <div>
            <div class="espx-24 bar-box-ex h-screen rounded-8">
              <div class="
                  btn-bar
                  cursor-pointer
                  font-14-300
                  flex
                  rounded-t-lg
                  bg-white
                  h-10
                  items-center
                ">
                Reference No
                <v-spacer></v-spacer>
                <span class="font-semibold">ASDF123456800</span>
              </div>
              <div class="
                  btn-bar
                  cursor-pointer
                  font-14-300
                  flex
                  rounded-b-lg
                  bg-white
                  h-10
                  items-center
                  mt-05
                ">
                Declaration No
                <v-spacer></v-spacer>
                <span class="font-semibold">-</span>
              </div>

              <div class="
                  bar-btn2
                  cursor-pointer
                  flex
                  bg-purple
                  items-center
                  mt-6
                  btn-bar
                  text-white
                ">
                Go to Declaration List
                <v-spacer></v-spacer>
                <span class="font-semibold">
                  <img src="@/assets/images/svg/go.svg" alt="" />
                </span>
              </div>
              <div class="
                  bar-btn2
                  cursor-pointer
                  flex
                  bg-purple
                  items-center
                  mt-1
                  btn-bar
                  text-white
                ">
                Go to Declaration Control
                <v-spacer></v-spacer>
                <span class="font-semibold">
                  <img src="@/assets/images/svg/go.svg" alt="" />
                </span>
              </div>
              <div class="
                  bar-btn2
                  cursor-pointer
                  flex
                  bg-purple
                  items-center
                  mt-1
                  btn-bar
                  text-white
                ">
                Calculate Tax
                <v-spacer></v-spacer>
                <span class="font-semibold">
                  <img src="@/assets/images/svg/go.svg" alt="" />
                </span>
              </div>
              <div class="
                  bar-btn2
                  cursor-pointer
                  flex
                  bg-purple
                  items-center
                  mt-1
                  btn-bar
                  text-white
                ">
                Button Name
                <v-spacer></v-spacer>
                <span class="font-semibold">
                  <img src="@/assets/images/svg/go.svg" alt="" />
                </span>
              </div>
              <div class="
                  bar-btn2
                  cursor-pointer
                  flex
                  bg-purple
                  items-center
                  mt-1
                  btn-bar
                  text-white
                ">
                Button Name
                <v-spacer></v-spacer>
                <span class="font-semibold">
                  <img src="@/assets/images/svg/go.svg" alt="" />
                </span>
              </div>

              <div class="
                  btn-bar3
                  cursor-pointer
                  rounded-8
                  flex
                  bg-white
                  h-10
                  items-center
                  mt-6
                  btn-bar
                ">
                <img src="@/assets/images/svg/folder.svg" alt="" />
                <span class="mlx-15">Invoice (s)</span>
                <v-spacer></v-spacer>
                <span class="text-val">0</span>
              </div>
              <div class="
                  btn-bar3
                  rounded-8
                  cursor-pointer
                  flex
                  bg-white
                  items-center
                  mt-1
                ">
                <img src="@/assets/images/svg/folder.svg" alt="" />
                <span class="mlx-15">Item (s)</span>
                <v-spacer></v-spacer>
                <span class="text-val">0</span>
              </div>
              <br />
            </div>
          </div>
        </div>

        <div class="w-full rrt">
          <div class="main-box">
            <div class="main-paddinge">
              <Core-MiniMenu></Core-MiniMenu>
              <div class="flex">
                <div class="
                    rrf
                    flex flex-col
                    md:flex-row
                    justify-center
                    items-center
                    br
                    bg-gray
                    mr-2
                  ">
                  <div @click="activeTab = index" :class="
                    activeTab === index ? 'tab2-action' : ' text-gray-500'
                  " class="
                      w-full
                      md:w-1/3
                      text-center
                      cursor-pointer
                      py-2
                      px-4
                      br
                      transition
                    " v-for="(tab, index) in tabs" :key="index">
                    <div class="
                        font-semibold
                        flex flex-col
                        md:flex-row
                        justify-center
                        items-center
                      ">
                      <v-btn v-if="activeTab == index" style="width: 24px; height: 24px" :dark="activeTab === index"
                        icon elevation="0" class="round-ring" x-small color="base_ex">
                        <span style="font-size: 14px" class="text-white font-semibold">{{ index + 1 }}</span>
                      </v-btn>
                      <v-btn v-else style="width: 24px; height: 24px" :outlined="activeTab != index"
                        :dark="activeTab === index" icon elevation="0" class="" x-small color="base_ex">
                        <span style="font-size: 14px" class="tbg2 font-semibold">{{ index + 1 }}</span>
                      </v-btn>
                      <span class="txt-title">{{ tab }}</span>
                    </div>
                  </div>
                </div>
                <div class="-mt-1">
                  <Core-ButtonInfo v-if="!$vuetify.breakpoint.mobile"></Core-ButtonInfo>
                </div>
              </div>

              <div v-if="activeTab == 0">
                <ExportNewInvoice-Invoicecontrol></ExportNewInvoice-Invoicecontrol>
              </div>
              <div v-if="activeTab == 1">
                <ExportNewInvoice-Charge></ExportNewInvoice-Charge>
              </div>
              <div v-if="activeTab == 2">
                <ExportNewInvoice-Chargedoc></ExportNewInvoice-Chargedoc>
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
      title: "Export Declaration / Export Declaration List /",
      action: "Declaration Control",
      name: "DECLARATION CONTROL",
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
          icon: "",
          path: "/export/short/exportshort",
          color: "",
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
          icon: "",
          path: "",
          color: "",
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
          path: "/",
          color: "#F46A6A",
          save: false,
        },
        {
          name: "Save",
          icon: "fa-solid fa-square-check",
          path: "",
          color: "#34C38F",
          save: true,
        },
      ],
      activeTab: 0,
      tabs: ["Invoice Control", "Charge (Inv.)", "Charge (เอกสารอื่นๆ)"],
    };
  },
};
</script>