<template>
  <div>
    <Core-Header11
      name="Car Manifest List"
      action="Car Manifest List"
      title="CAR MANIFEST"
      bgcolor="#e9ce9c"
      :isExport="true"
    >
    </Core-Header11>

    <div>
      <div class="hx-160 esap-bg-carm"></div>
      <div class="es-container" style="margin-top: -150px">
        <div class="flex flex-col md:flex-row">
          <div class="w-full">
            <div class="main-box">
              <v-card-text style="padding-bottom: 5px">
                <div class="p-2">
                  <div class="flex">
                    <div class="w-full md:w-1/2">
                      <div class="flex flex-col md:flex-row w-full">
                        <div>
                          <label
                            v-if="!$vuetify.breakpoint.mobile"
                            class="font-13-400"
                            >ค้นหาระบุ</label
                          >
                          <v-text-field
                            @keydown.enter="getIndexListDropDown"
                            color="base_carm"
                            height="40px"
                            outlined
                            dense
                            class="font-13-3002"
                            placeholder="Filter Name"
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
                                  :value="getDateFormat(docFromDate)"
                                  v-on="on"
                                  placeholder="From"
                                  append-icon="mdi-calendar"
                                  @click:append="on.click"
                                  solo
                                  height="40px"
                                  color="base_carm"
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
                                  placeholder="To"
                                  append-icon="mdi-calendar"
                                  solo
                                  height="40px"
                                  color="base_carm"
                                  v-on="on"
                                  @click:append="on.click"
                                  :value="getDateFormat(docToDate)"
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
                              style="background-color: #47b5ff"
                            >
                              Search
                            </button>
                          </div>
                        </v-btn-toggle>
                      </div>
                    </div>
                    <div
                      v-if="!$vuetify.breakpoint.mobile"
                      class="w-full md:w-1/2"
                    >
                      <div
                        class="
                          flex flex-col
                          md:flex-row
                          w-full
                          pt-7
                          md:space-x-4
                          justify-end
                        "
                      >
                      </div>
                    </div>
                  </div>
                </div>
              </v-card-text>
              <v-data-table
                class="chk-exp font-14-300 mr-5 ml-5"
                v-model="selected"
                :headers="headers"
                :items="carmanifestList"
                :single-select="singleSelect"
                item-key="reference"
                show-select
                :items-per-page="30"
              >
                <template v-slot:item. reference="{ item }">
                  <p
                    style="
                      font-weight: 500 !important;
                      color: #495057 !important;
                    "
                    class="ma-0"
                  >
                    {{ item.reference }}
                  </p>
                </template>
                <template v-slot:item.status="{ item }">
                  <v-btn
                    class="font-12-btn"
                    width="100"
                    small
                    v-if="item.status == 1"
                    depressed
                    color="ready"
                    dark
                  >
                    READY
                  </v-btn>
                  <v-btn
                    class="font-12-btn"
                    width="100"
                    small
                    v-if="item.status == 2"
                    depressed
                    color="accepted"
                    dark
                  >
                    ACCEPTED
                  </v-btn>
                  <v-btn
                    class="font-12-btn"
                    width="100"
                    small
                    v-if="item.status == 3"
                    depressed
                    color="greenline"
                    dark
                  >
                    GREEN LINE
                  </v-btn>
                  <v-btn
                    class="font-12-btn"
                    width="100"
                    small
                    v-if="item.status == 4"
                    depressed
                    color="redline"
                    dark
                  >
                    RED LINE
                  </v-btn>
                  <v-btn
                    class="font-12-btn"
                    width="100"
                    small
                    v-if="item.status == 5"
                    depressed
                    color="rejected"
                    dark
                    @click="$router.push('/carmanifest/carmcontrol/')"
                  >
                    REJECTED
                  </v-btn>
                  <v-btn
                    class="font-12-btn"
                    width="100"
                    small
                    v-if="item.status == 6"
                    depressed
                    color="stetus_error"
                    dark
                    @click="$router.push('/carmanifest/carmcontrol/')"
                  >
                    ERROR
                  </v-btn>
                  <v-btn
                    class="font-12-btn"
                    width="100"
                    small
                    v-if="item.status == 7"
                    depressed
                    color="cancel"
                    dark
                  >
                    CANCEL
                  </v-btn>
                  <v-btn
                    class="font-12-btn"
                    width="100"
                    small
                    v-if="item.status == 8"
                    depressed
                    color="wait"
                    dark
                  >
                    WAIT
                  </v-btn>
                  <v-btn
                    class="font-12-btn"
                    width="100"
                    small
                    v-if="item.status == 9"
                    depressed
                    color="waitcancel"
                    dark
                  >
                    WAIT CANCEL
                  </v-btn>
                  <v-btn
                    class="font-12-btn"
                    width="100"
                    small
                    v-if="item.status == 10"
                    depressed
                    color="checked"
                    dark
                  >
                    CHECKED
                  </v-btn>
                  <v-btn
                    class="font-12-btn"
                    width="100"
                    small
                    v-if="item.status == 11"
                    depressed
                    color="loaded"
                    dark
                  >
                    LOADED
                  </v-btn>
                  <v-btn
                    class="font-12-btn"
                    width="100"
                    small
                    v-if="item.status == 12"
                    depressed
                    color="wait"
                    dark
                  >
                    WAIT ERROR
                  </v-btn>


                </template>
              </v-data-table>
              <Core-Page color="base_ex" isExportPage="true"></Core-Page>
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
  name: "IndexPage",
  data: () => {
    return {
      docfromDate: null,
      docToDate: null,
      singleSelect: false,
      selected: [],
      toggle_exclusive: 2,
      menu2: null,
      data: null,
      breadcrumbs: [
        {
          text: "Car Manifest List",
          disabled: false,
          light: true,
          href: "/",
        },
        {
          text: "Car Manifest List",
          disabled: false,
          href: "/",
        },
      ],
      headers: [
        {
          text: "Reference No.",
          align: "start",
          sortable: false,
          value: "reference",
          class: "subtitle-2 font-weight-black",
        },
        {
          text: "Received Control No.",
          value: "receivedcontrol",
          class: "subtitle-2 font-weight-black",
          align: "center"
        },
        {
          text: "Arrival/Departure Date ",
          value: "addate",
          class: "subtitle-2 font-weight-black",
          align: "center",
        },
        {
          text: "Indicator ",
          value: "indicator",
          class: "subtitle-2 font-weight-black",
          align: "center",
        },
        {
          text: "Car License",
          value: "carlicense",
          class: "subtitle-2 font-weight-black",
          align: "center",
        },
        {
          text: "MASTER Bill",
          value: "masterbill",
          class: "subtitle-2 font-weight-black",
        },
        {
          text: "Status",
          value: "status",
          class: "subtitle-2 font-weight-black",
          align: "center",
        },
        {
          text: "User",
          value: "user",
          class: "subtitle-2 font-weight-black",
        },
        {
          text: "Job No",
          value: "job",
          class: "subtitle-2 font-weight-black",
        },
      ],
      carmanifestList: [
        {
          no: "Test-0001",
          reference: "ASDF12341",
          receivedcontrol: "23680331300000001",
          addate: "24/4/2022",
          indicator: "IMPORT",
          carlicense: "88-0123",
          masterbill: "RTCHOUSE0001",
          status: 1,
          user: "Naree",
          job: "BOND",
        },
        {
          no: "Test-0001",
          reference: "ASDF12342",
          receivedcontrol: "23680331300000002",
          addate: "24/4/2022",
          indicator: "IMPORT",
          carlicense: "88-0123",
          masterbill: "RTCHOUSE0002",
          status: 2,
          user: "Naree",
          job: "BOND",
        },
        {
          no: "Test-0001",
          reference: "ASDF12343",
          receivedcontrol: "23680331300000003",
          addate: "24/4/2022",
          indicator: "IMPORT",
          carlicense: "88-0123",
          masterbill: "RTCHOUSE0003",
          status: 3,
          user: "Naree",
          job: "BOND",
        },
        {
          no: "Test-0001",
          reference: "ASDF12344",
          receivedcontrol: "23680331300000004",
          addate: "24/4/2022",
          indicator: "IMPORT",
          carlicense: "88-0123",
          masterbill: "RTCHOUSE0004",
          status: 4,
          user: "Naree",
          job: "BOND",
        },
        {
          no: "Test-0001",
          reference: "ASDF12345",
          receivedcontrol: "23680331300000005",
          addate: "24/4/2022",
          indicator: "IMPORT",
          carlicense: "88-0123",
          masterbill: "RTCHOUSE0005",
          status: 5,
          user: "Naree",
          job: "BOND",
        },
        {
          no: "Test-0001",
          reference: "ASDF12346",
          receivedcontrol: "23680331300000006",
          addate: "24/4/2022",
          indicator: "IMPORT",
          carlicense: "88-0123",
          masterbill: "RTCHOUSE0006",
          status: 6,
          user: "Naree",
          job: "BOND",
        },
        {
          no: "Test-0001",
          reference: "ASDF12347",
          receivedcontrol: "23680331300000007",
          addate: "24/4/2022",
          indicator: "IMPORT",
          carlicense: "88-0123",
          masterbill: "RTCHOUSE0007",
          status: 7,
          user: "Naree",
          job: "BOND",
        },
        {
          no: "Test-0001",
          reference: "ASDF12348",
          receivedcontrol: "23680331300000008",
          addate: "24/4/2022",
          indicator: "IMPORT",
          carlicense: "88-0122",
          masterbill: "RTCHOUSE0008",
          status: 8,
          remark: "Short Accepted",
          user: "Naree",
          job: "BOND",
        },
        {
          no: "Test-0001",
          reference: "ASDF12349",
          receivedcontrol: "23680331300000009",
          addate: "24/4/2022",
          indicator: "IMPORT",
          carlicense: "88-0122",
          masterbill: "RTCHOUSE0009",
          status: 9,
          user: "Naree",
          job: "BOND",
        },
        {
          no: "Test-0001",
          reference: "ASDF123410",
          receivedcontrol: "23680331300000010",
          addate: "24/4/2022",
          indicator: "IMPORT",
          carlicense: "88-0122",
          masterbill: "RTCHOUSE0010",
          status: 12,
          user: "Naree",
          job: "BOND",
        },
        {
          no: "Test-0001",
          reference: "ASDF123411",
          receivedcontrol: "23680331300000011",
          addate: "24/4/2022",
          indicator: "IMPORT",
          carlicense: "88-0133",
          masterbill: "RTCHOUSE0011",
          status: 11,
          user: "Naree",
          job: "BOND",
        },
        {
          no: "Test-0001",
          reference: "ASDF123412",
          receivedcontrol: "23680331300000012",
          addate: "24/4/2022",
          indicator: "IMPORT",
          carlicense: "88-0133",
          masterbill: "RTCHOUSE0012",
          status: 10,
          user: "Naree",
          job: "BOND",
        },
        {
          no: "Test-0001",
          reference: "ASDF123413",
          receivedcontrol: "23680331300000013",
          addate: "24/4/2022",
          indicator: "IMPORT",
          carlicense: "88-0133",
          masterbill: "RTCHOUSE0013",
          status: 2,
          user: "Naree",
          job: "BOND",
        },
        {
          no: "Test-0001",
          reference: "ASDF123414",
          receivedcontrol: "23680331300000014",
          addate: "24/4/2022",
          indicator: "IMPORT",
          carlicense: "88-0133",
          masterbill: "RTCHOUSE0014",
          status: 2,
          user: "Naree",
          job: "BOND",
        },
      ],
    };
  },
  methods: {
    getDateFormat(date) {
      return dateFormat.convertDateFormat(date);
    },
    getColor(status) {
      if (status == 1) return "red";
      else if (status > 2) return "orange";
      else return "green";
    },
    focusNext(event) { // enter and new focus (text input type).
      nextFocus.nextInput(event);
    },
  },
};
</script>

<style scoped>
.chk-exp::v-deep(.v-input--selection-controls__input > .mdi-checkbox-marked) {
  color: #bb6bd9 !important;
}
</style>
