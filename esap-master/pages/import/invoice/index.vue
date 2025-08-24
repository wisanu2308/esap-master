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
                @click="$router.push('/import/')"
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
                Add New Items
                <v-spacer></v-spacer>
                <span class="font-semibold">
                  <img src="@/assets/images/svg/plus2.svg" alt="" />
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
                Button Name
                <v-spacer></v-spacer>
                <span class="font-semibold">
                  <img src="@/assets/images/svg/go.svg" alt="" />
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
            </div>
          </div>
        </div>

        <div class="w-full rrt">
          <div class="main-box">
            <div class="main-padding pl-8 pr-8">
              <Core-MiniMenu></Core-MiniMenu>

              <div class="flex flex-col md:flex-row border-b-2 border-gray-200">
                <button @click="$router.push('/import/')" class="bb-inaction">
                  Declaration Control
                </button>
                <button
                  @click="$router.push('/import/invoice')"
                  class="bb-action"
                >
                  Invoice
                </button>
                <v-spacer></v-spacer>
                <center v-if="!$vuetify.breakpoint.mobile">
                  <Core-ButtonInfo></Core-ButtonInfo>
                </center>
              </div>
              <div class="mt-8">
                <div
                  class="flex flex-col md:flex-row justify-center items-center"
                >
                  <div class="w-full md:w-1/2 flex flex-col md:flex-row">
                    <div>
                      <label
                        v-if="!$vuetify.breakpoint.mobile"
                        class="font-13-400"
                        >First Name</label
                      >
                      <v-text-field
                        @keydown.enter="focusNext"
                        color="base"
                        outlined
                        height="40"
                        dense
                        placeholder="Filter Name"
                        class="font-13-3002"
                      >
                        <template v-slot:append>
                          <img
                            width="25"
                            height="25"
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
                          v-model="menu"
                          transition="scale-transition"
                          offset-y
                          max-width="290px"
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on }">
                            <v-text-field
                              @keydown.enter="focusNext"
                              class="tt font-13-3002"
                              outlined
                              :value="getDateFormat(computedDateFormatted)"
                              label="From"
                              placeholder="From"
                              append-icon="mdi-calendar"
                              readonly
                              solo
                              height="40px"
                              color="base"
                              v-on="on"
                              @click:append="on.click"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="computedDateFormatted"
                            no-title
                          ></v-date-picker>
                        </v-menu>
                      </div>
                      <div class="dd">
                        <br v-if="!$vuetify.breakpoint.mobile" />
                        <v-menu
                          v-model="menu2"
                          transition="scale-transition"
                          offset-y
                          max-width="290px"
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on }">
                            <v-text-field
                              @keydown.enter="focusNext"
                              class="tt font-13-3002"
                              outlined
                              :value="getDateFormat(computedDateFormatted2)"
                              label="To"
                              placeholder="To"
                              append-icon="mdi-calendar"
                              readonly
                              solo
                              height="40px"
                              color="base"
                              v-on="on"
                              @click:append="on.click"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="computedDateFormatted2"
                            no-title
                          ></v-date-picker>
                        </v-menu>
                      </div>
                      <div class="pb-6 ml-2">
                        <br v-if="!$vuetify.breakpoint.mobile" />
                        <button
                          class="
                            bg-orange-500
                            hover:bg-orange-400
                            px-5
                            py-2.5
                            leading-5
                            rounded-md
                            font-14-5002
                          "
                        >
                          Search
                        </button>
                      </div>
                    </v-btn-toggle>
                  </div>
                  <v-spacer class="pl-6"></v-spacer>
                  <Core-TableMenu
                    v-if="$vuetify.breakpoint.width > 1399"
                    class="w-full md:w-1/2 flex flex-wrap"
                  >
                  </Core-TableMenu>
                </div>
                <center class="-mt-4 mb-2" v-if="$vuetify.breakpoint.mobile">
                  <Core-TableMenu
                    :block="$vuetify.breakpoint.width <= 1399"
                    class="w-full"
                  ></Core-TableMenu>
                </center>

                <v-container fluid fill-height class="pl-0 pr-0">
                  <v-card
                    :max-width="
                      !$vuetify.breakpoint.mobile
                        ? $vuetify.breakpoint.width - 500
                        : $vuetify.breakpoint.width - 100
                    "
                    class="overflow-x-auto"
                    flat
                  >
                    <v-data-table
                      hide-default-footer
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
                          width="97"
                          height="24"
                          small
                          v-if="item.status == 1"
                          depressed
                          color="ready"
                          dark
                        >
                          REDY
                        </v-btn>
                        <v-btn
                          width="97"
                          height="24"
                          small
                          v-if="item.status == 2"
                          depressed
                          color="#F1B44C"
                          dark
                        >
                          ACCENT
                        </v-btn>
                      </template>

                      <template v-slot:item.ino="{ item }">
                        <span
                          class="cursor-pointer font-13-5001 font-semibold"
                          @click="
                            $router.push('/import/invoice/invoicecontrol/')
                          "
                          >{{ item.ino }}</span
                        >
                      </template>
                    </v-data-table>
                  </v-card>
                </v-container>

                <!-- <v-card flat class="overflow-x-auto	">
                                <v-data-table hide-default-footer :headers="headers" :items="items" :single-select="false" item-key="no" show-select :items-per-page="30" class="font-13-3">
                                    <template v-slot:item.status="{ item }">
                                        <v-btn width="120" small v-if="item.status == 1" depressed color="ready" dark>
                                            REDY
                                        </v-btn>
                                        <v-btn width="120" small v-if="item.status == 2" depressed color="#F1B44C" dark>
                                            ACCENT
                                        </v-btn>
                                    </template>

                                    <template v-slot:item.ino="{ item }">
                                        <span class="cursor-pointer font-13-5001" @click="$router.push('/import/invoice/invoicecontrol/')">{{ item.ino }}</span>
                                    </template>
                                </v-data-table>
                            </v-card> -->

                <Core-Page></Core-Page>
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
      title: "Import Declaration /Import Declaration List /",
      action: "Invoice List",
      name: "Invoice",
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
          bgcolor: "#34C38F",
          save: true,
        },
      ],

      headers: [
        {
          text: "Invoice No",
          align: "start",
          sortable: false,
          value: "ino",
          width: "105",
          class: "font-14-500 font-semibold",
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
          width: "135",
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
          width: "105",
          sortable: false,
          class: "font-14-500",
          align: "right",
        },
        {
          text: "Unit",
          sortable: false,
          value: "nunit",
          width: "10",
          class: "font-14-500",
          align: "center",
        },
        {
          text: "Gross Weight",
          value: "gross",
          width: "115",
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
          width: "120",
          sortable: false,
          class: "font-14-500",
          align: "right",
        },
        {
          text: "Unit",
          value: "tunit",
          width: "10",
          sortable: false,
          class: "font-14-500",
          align: "center",
        },
        {
          text: "CIF Baht",
          value: "cif",
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
          cif: "956,600.00",
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
          cif: "956,600.00",
          status: 1,
        },
      ],
    };
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

