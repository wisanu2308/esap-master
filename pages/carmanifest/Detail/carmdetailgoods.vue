<template>
  <div>
    <Core-HeadBarCarm
      :fixedwidth="false"
      :menus="menus"
      action="Carmanifest Decription Detail "
      title="CarManifest / CarManifest Description Control"
      name="CARMANIFEST DESCRIPTION DETAIL"
    ></Core-HeadBarCarm>

    <div class="hx-48 esap-bg-carm"></div>
    <div class="-mt-9 es-container">
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-3/12" v-if="!$vuetify.breakpoint.mobile">
          <div class="espx-24 bar-box-carm h-screen rounded-8">
            <div>
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
                  bg-white
                  h-10
                  items-center
                  mt-05
                ">
                Receive Control No.
                <v-spacer></v-spacer>
                <span class="font-semibold">23680401300000001</span>
              </div>
              <div class="
                  btn-bar-x
                  cursor-pointer
                  font-14-300
                  flex
                  rounded-b-lg
                  bg-white
                  h-10
                  items-center
                  mt-06
                ">
                <div class="
                    w-1/2
                    h-full
                    uppercase
                    flex flex-col
                    justify-center
                    items-center
                    bar-txt2
                  ">
                  P
                </div>
                <div class="
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
                  " style="background-color: #FF7640;">
                  READY
                </div>
              </div>

              <div @click="$router.push('/carmanifest/')" class="
                  bar-btn2
                  cursor-pointer
                  flex
                  bg-purple
                  items-center
                  mt-6
                  p-2
                  text-white
                  font-semibold
                " style="background-color: #2F80ED;">

                Go to Car Manifest List
                <v-spacer></v-spacer>
                <span class="font-semibold">
                  <img src="@/assets/images/svg/go.svg" alt="" />
                </span>
              </div>
              <div 
                @click="$router.push('/carmanifest/carmcontrol/')"
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
                " style="background-color: #2F80ED;">
                Go to Car Manifest Control
                <v-spacer></v-spacer>
                <span class="font-semibold">
                  <img src="@/assets/images/svg/go.svg" alt="" />
                </span>
              </div>

              <div 
                @click="$router.push('/carmanifest/Detail/carmdetailcontrol/')"
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
                " style="background-color: #2F80ED;"
              >
                Add New Description Detail
                <v-spacer></v-spacer>
                <span class="font-semibold">
                  <img src="@/assets/images/svg/plus2.svg" alt="" />
                </span>
              </div>
              <div
              @click="$router.push('/carmanifest/carmcanlist/')"
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
                " style="background-color: #0a3e83;"
              >
                Go to Car Manifest Cancel List
                <v-spacer></v-spacer>
                <span class="font-semibold">
                  <img src="@/assets/images/svg/go.svg" alt="" />
                </span>
              </div>

              <div @click="$router.push('/carmanifest/Detail/')"
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
                ">
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
                ">
                <img src="@/assets/images/svg/folder.svg" alt="" />
                <span class="mlx-15">Item (s)</span>
                <v-spacer></v-spacer>
                <span class="text-val">1</span>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full rrt">
          <div class="main-box">
            <div class="main-padding">
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
                    activeTab === index ? 'tab2-action-carm' : ' text-gray-500'
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
                        icon elevation="0" class="round-ring-carm" x-small color="base_carm">
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
                <CarmDetDetail-NameAddress class="w-full"></CarmDetDetail-NameAddress>
              </div>
              <div v-if="activeTab == 1">
                <CarmDetDetail-DetailDanger class="w-full"></CarmDetDetail-DetailDanger>
              </div>
              <div v-if="activeTab == 2">
                <CarmDetDetail-Container class="w-full"></CarmDetDetail-Container>
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
      title: "",
      action: "Invoice Control",
      name: "INVOICE CONTROL",
      menus: [
        {
          name: "Copy",
          icon: 'fa-solid fa-copy',
          path: "",
          color: "#6F9CDF",
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
          path: "/",
          color: "#6F9CDF",
          save: false,
        },
        {
          name: "Save Dreft",
          icon: 'fa-solid fa-square-check',
          path: "",
          color: "#34C38F",
          save: false,
        },
        {
          name: "Add New",
          icon: 'fa-solid fa-plus',
          path: "/carmanifest/Detail/carmdetailcontrol/",
          color: "#F7D716",
          bgcolor: "#F7D716",
          save: true,
        },
        {
          name: "Delete",
          icon: 'fa-solid fa-circle-xmark',
          path: "/export/invoice/",
          color: "#F46A6A",
          save: false,
        },
      ],

      activeTab: 0,
      tabs: ["Name Address ", "Detail Cargo & Dangerous Goods", "Container Detail"],
    };
  },
};
</script>

<style scoped>


/* button color Header  */
::v-deep(.v-btn.v-btn--has-bg.theme--light.elevation-0.ml-1.btnh) {
  background-color: #fcfae6 !important;
}

/* dropdown color export require */
.v-application .error--text,
::v-deep(i.v-icon.notranslate.mdi.mdi-menu-down.theme--light.error--text) {
  color: #d9d26b !important;
}
</style>