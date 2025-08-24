<template>
  <div>
    <Core-HeadBarCarm
      :fixedwidth="false"
      :menus="menus"
      action="Carmanifest Control "
      title="Car Manifest List / Car Manifest Control"
      name="CARMANIFEST DESCRIPTION DETAIL"
    ></Core-HeadBarCarm>

    <div class="hx-48 esap-bg-carm"></div>
    <div
      class="-mt-9 es-container"
      :class="$vuetify.breakpoint.mobile ? 'pt-6' : ''"
    >
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-3/12" v-if="!$vuetify.breakpoint.mobile">
          <div class="espx-24 bar-box-carm h-screen rounded-8">
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
                Receive Control No.
              <v-spacer></v-spacer>
              <span class="font-semibold">23680401300000001</span>
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
                  color="#FF7640"
                >
                  DRAFT
                </div>
              </div>

              <div
                @click="$router.push('/carmanifest/')"
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
                style="background-color: #2f80ed"
              >
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
                  btn-bar
                  text-white
                "
                style="background-color: #2f80ed"
              >
                Go to Car Manifest Control
                <v-spacer></v-spacer>
                <span class="font-semibold">
                  <img src="@/assets/images/svg/go.svg" alt="" />
                </span>
              </div>
              <div
                @click="$router.push('/carmanifest/carmdetaillist/')"
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
                style="background-color: #2f80ed"
              >
                Add New Description Detail
                <v-spacer></v-spacer>
                <span>
                  <i style="font-size: 20px" class="mr-0.5 fa-solid fa-circle-plus"></i>
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
                  btn-bar
                  text-white
                "
                style="background-color: #0a3e83"
              >
                Go to Car Manifest Cancel List
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
        </div>

        <div class="w-full rrt">
          <div class="main-box">
            <div class="main-paddinge">
              <Core-MiniMenu></Core-MiniMenu>

              <div class="flex flex-col md:flex-row border-b-2 border-gray-200">
                
                <button
                  @click="$router.push('/carmanifest/carmcontrol')"
                  class="bb-inaction"
                >
                  Carmanifest Control
                </button>
                <button
                  @click="$router.push('/carmanifest/carmdetailList')"
                  class="bb-action-carm"
                >
                  Description Detail
                </button>
                <v-spacer></v-spacer>
                <Core-ButtonInfo
                  v-if="!$vuetify.breakpoint.mobile"
                ></Core-ButtonInfo>
              </div>

              <div class="mt-8">
                <div class="group-btn-invoice">
                  <div class="ml-1 w-full flex flex-col md:flex-row">
                    <div>
                      <label
                        v-if="!$vuetify.breakpoint.mobile"
                        class="font-13-400"
                        >ค้นหาระบุ</label
                      >
                      <v-text-field
                        @keydown.enter="focusNext"
                        color="base_carm"
                        hide-details
                        outlined
                        dense
                        placeholder="Filter Name"
                        height="40px"
                        class="font-13-3002"
                      >
                        <template v-slot:append>
                          <img
                            width="20"
                            height="20"
                            src="@/assets/images/svg/iconly/filter2.svg"
                          />
                        </template>
                      </v-text-field>
                    </div>

                    <v-btn-toggle class="ml-2" v-model="toggle_exclusive">
                      <div class="input-left">
                        <label
                          class="font-13-400"
                          v-if="!$vuetify.breakpoint.mobile"
                          >วันที่สร้างเอกสาร</label
                        >
                        <v-menu
                          v-model="menu3"
                          :close-on-content-click="true"
                          transition="scale-transition"
                          offset-y
                          max-width="290px"
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on }">
                            <v-text-field
                              @keydown.enter="focusNext"
                              hide-details
                              class="tt font-13-300"
                              outlined
                              placeholder="From"
                              append-icon="mdi-calendar"
                              readonly
                              solo
                              height="40px"
                              color="base_ex"
                              v-on="on"
                              @click:append="on.click"
                              :value="getDateFormat(docFromDate)"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="docFromDate"
                            no-title
                          ></v-date-picker>
                        </v-menu>
                      </div>
                      <div class="dd">
                        <br v-if="!$vuetify.breakpoint.mobile" />
                        <v-menu
                          v-model="HeaderMenu2Vue"
                          :close-on-content-click="true"
                          transition="scale-transition"
                          offset-y
                          max-width="290px"
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on }">
                            <v-text-field
                              hide-details
                              class="tt font-13-3002"
                              outlined
                              :value="getDateFormat(docToDate)"
                              placeholder="To"
                              append-icon="mdi-calendar"
                              readonly
                              solo
                              height="40px"
                              color="base_ex"
                              v-on="on"
                              @click:append="on.click"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="docToDate"
                            no-title
                          ></v-date-picker>
                        </v-menu>
                      </div>
                      <div class="pb-6 ml-2">
                        <br v-if="!$vuetify.breakpoint.mobile" />
                        <button
                          class="
                            esap-bg-carm esap-btn-search
                            hover:esap-bg-carm
                            px-5
                            py-2.5
                            leading-5
                            rounded-md
                            font-14-5002
                          "
                          style="background-color: #e9ce9c"
                        >
                          Search
                        </button>
                      </div>
                    </v-btn-toggle>
                  </div>
                  <v-spacer class="pl-2"></v-spacer>
                  <div
                    v-if="!$vuetify.breakpoint.mobile"
                    class="group-btn-invoice2"
                  >
                    <v-btn class="rounded-lg" text>
                      <v-icon color="#6F9CDF" size="18" class="mr-2"
                        >fa-duotone fa-clone</v-icon
                      >
                      <span class="font-12-400">Copy</span>
                    </v-btn>
                    <v-btn class="ml-1rounded-lg" text>
                      <v-icon color="#46BFCF" size="18" class="mr-1"
                        >fa-solid fa-file-arrow-down</v-icon
                      >
                      <span class="font-12-400">Import File</span>
                    </v-btn>                    
                    <v-btn class="rounded-lg" text>
                      <v-icon color="#F46A6A" size="18" class="mr-1"
                        >fa-solid fa-xmark</v-icon
                      >
                      <span class="font-12-400">Delete</span>
                    </v-btn>
                    <v-btn
                      @click="$router.push('/carmanifest/Detail/carmdetailcontrol/')"
                      dark
                      class="rounded-lg"
                      color="#F7D716"
                    >
                      <v-icon color="" size="18" class="mr-2"
                        >fa-solid fa-plus</v-icon
                      >Add New
                    </v-btn>
                  </div>
                </div>
                <div
                  v-if="$vuetify.breakpoint.mobile"
                  class="mb-3 flex flex-row flex-wrap"
                >
                  <v-btn class="rounded-lg" text>
                    <v-icon color="#6F9CDF" size="18" class="mr-2"
                      >fa-duotone fa-clone</v-icon
                    >
                    <span class="font-14-400">Copy</span>
                  </v-btn>
                  <v-btn class="rounded-lg" text>
                    <v-icon color="#46BFCF" size="18" class="mr-2"
                      >fa-solid fa-file-arrow-down</v-icon
                    >
                    <span class="font-14-400">Import File</span>
                  </v-btn>
                  <v-btn class="rounded-lg" text>
                    <v-icon color="#F46A6A" size="18" class="mr-2"
                      >fa-solid fa-xmark</v-icon
                    >
                    <span class="font-14-400">Delete</span>
                  </v-btn>
                  <v-btn
                    @click="$router.push('/carmanifest/Detail/carmdetailcontrol/')"
                    dark
                    class="rounded-lg"
                    color="purple_base"
                  >
                    <v-icon color="" size="18" class="mr-2"
                      >fa-solid fa-plus</v-icon
                    >Add New
                  </v-btn>
                </div>
                <div class="mt-2">
                  <v-card flat>
                    <v-data-table
                      hide-default-footer
                      v-model="selece"
                      :headers="headers"
                      :items="items"
                      :single-select="false"
                      item-key="no"
                      show-select
                      :items-per-page="30"
                      class="font-13-3"
                    >
                      <template v-slot:item.status="{ item }">
                        <v-btn
                          width="120"
                          small
                          v-if="item.status == 1"
                          depressed
                          color="ready"
                          dark
                        >
                          REDY
                        </v-btn>
                        <v-btn
                          width="120"
                          small
                          v-if="item.status == 2"
                          depressed
                          color="#F1B44C"
                          dark
                        >
                          ACCEPTED
                        </v-btn>
                      </template>

                      <template v-slot:item.ino="{ item }">
                        <span
                          class="cursor-pointer font-13-5001"
                          @click="
                            $router.push('/carmanifest/Detail/carmdetailcontrol/')
                          "
                          >{{ item.ino }}</span
                        >
                      </template>
                    </v-data-table>
                    <Core-Page color="base_ex" isExportPage="true"></Core-Page>
                  </v-card>
                </div>
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
// service
import dateFormat from "@/services/dateFormat.js";
import nextFocus from "@/services/nextFocus.js";

export default {
  data: () => {
    return {
      docfromDate: null,
      docToDate: null,
      title: "Export Declaration / Export Declaration List /",
      action: "Invoice List",
      name: "INVOICE",
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
          name: "Save Dreft",
          icon: "fa-solid fa-square-check",
          path: "",
          bgcolor: "#2F80ED",
          color: "#FFFFFF",
          save: true,
        },
        {
          name: "Cancel",
          icon: "fa-solid fa-circle-xmark",
          path: "/carmnifest/carmcanlist",
          color: "#F46A6A",
          save: false,
        },
      ],
      headers: [
        {
          selece: "",
          text: "Invoice No",
          align: "start",
          sortable: false,
          value: "ino",
          width: "10%",
          class: "font-14-500",
        },
        {
          text: "Invoice Date",
          sortable: false,
          value: "date",
          width: "110",
          class: "font-14-500",
          align: "center",
        },
        {
          text: "Invoice Amount",
          sortable: false,
          value: "amount",
          // width: "135",
          class: "font-14-500",
          align: "right",
        },
        {
          text: "Term",
          sortable: false,
          value: "term",
          class: "font-14-500",
          align: "center",
        },
        {
          text: "Currency",
          value: "currency",
          sortable: false,
          class: "font-14-500",
          align: "center",
        },
        {
          text: "Net Weight",
          value: "net",
          // width: "105",
          sortable: false,
          class: "font-14-500",
          align: "right",
        },
        {
          text: "Unit",
          sortable: false,
          value: "nunit",
          // width: "10",
          class: "font-14-500",
          align: "center",
        },
        {
          text: "Gross Weight",
          value: "gross",
          // width: "115",
          sortable: false,
          class: "font-14-500",
          align: "right",
        },
        {
          text: "Unit",
          value: "gunit",
          sortable: false,
          width: "10",
          class: "font-14-500",
          align: "center",
        },
        {
          text: "Total Package",
          value: "total",
          // width: "120",
          sortable: false,
          class: "font-14-500",
          align: "right",
        },
        {
          text: "Unit",
          value: "tunit",
          // width: "10",
          sortable: false,
          class: "font-14-500",
          align: "center",
        },
        {
          text: "FOB Baht",
          value: "fob",
          sortable: false,
          class: "font-14-500",
          align: "right",
        },
        {
          text: "Status",
          value: "status",
          sortable: false,
          class: "font-14-500",
          align: "center",
        },
      ],
      items: [
        {
          no: 1,
          ino: "Test-00001",
          date: "01/06/2022",
          amount: "2,700.00",
          term: "FOB",
          currency: "USD",
          net: "100.250",
          nunit: "KGM",
          gross: "120.000",
          gunit: "KGM",
          total: "64",
          tunit: "CT",
          fob: "956,600.00",
          status: 1,
        },
        {
          no: 2,
          ino: "Test-00002",
          date: "01/06/2022",
          amount: "2,700.00",
          term: "FOB",
          currency: "USD",
          net: "100.250",
          nunit: "KGM",
          gross: "120.000",
          gunit: "KGM",
          total: "64",
          tunit: "CT",
          fob: "956,600.00",
          status: 1,
        },
      ],
    };
  },
  computed: {
    table() {
      return this.$vuetify.breakpoint.width;
    },
  },
  methods: {
    getDateFormat(date) {
      return dateFormat.convertDateFormat(date);
    },
    focusNext(event) { // enter and new focus (text input type).
      nextFocus.nextInput(event);
    },
  },
};
</script>

<style scoped>
::v-deep(.v-input--selection-controls__input > .mdi-checkbox-marked) {
  color: #bb6bd9 !important;
}
</style>