<template>
  <div>
    <Core-Header5
      name="Export Declaration List"
      action="Export Declaration List"
      title="Export Declaration /"
      :isExport="true"
    >
    </Core-Header5>

    <div>
      <div class="hx-160 esap-bg-ex"></div>
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
                            >First Name</label
                          >
                          <v-text-field
                            @keydown.enter="focusNext"
                            color="base_ex"
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
                                  color="base_ex"
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
                                  color="base_ex"
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
                                esap-bg-ex esap-btn-search
                                hover:esap-bg-ex
                                px-5
                                py-2.5
                                leading-5
                                rounded-md
                                font-14-5002
                              "
                              style="background-color: #bb6bd9"
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
                        <v-btn
                          depressed
                          class="rounded-lg font-14-5002"
                          color="#2F80ED"
                          dark
                        >
                          <img
                            class="mr-1"
                            src="@/assets/images/svg/checked.svg"
                            alt=""
                            srcset=""
                          />
                          ตรวจสอบสถานะ 04
                        </v-btn>
                        <br v-if="$vuetify.breakpoint.mobile" />
                        <v-btn
                          depressed
                          class="rounded-lg font-14-5002"
                          color="#46BFCF"
                          dark
                        >
                          <img
                            class="mr-1"
                            src="@/assets/images/svg/report.svg"
                            alt=""
                            srcset=""
                          />
                          รายงานสถานะ 04
                        </v-btn>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="flex flex-col md:flex-row"
                  v-if="$vuetify.breakpoint.mobile"
                >
                  <v-btn
                    depressed
                    class="rounded-lg font-14-5002"
                    color="#2F80ED"
                    dark
                  >
                    <img
                      class="mr-1"
                      src="@/assets/images/svg/checked.svg"
                      alt=""
                      srcset=""
                    />
                    ตรวจสอบสถานะ 04
                  </v-btn>
                  <br v-if="$vuetify.breakpoint.mobile" />
                  <v-btn
                    depressed
                    class="rounded-lg font-14-5002 ml-2"
                    color="#46BFCF"
                    dark
                  >
                    <img
                      class="mr-1"
                      src="@/assets/images/svg/report.svg"
                      alt=""
                      srcset=""
                    />
                    รายงานสถานะ 04
                  </v-btn>
                </div>
              </v-card-text>
              <v-data-table
                class="chk-exp font-14-300 mr-5 ml-5"
                hide-default-footer
                v-model="selected"
                :headers="headers"
                :items="ExportDeclaration"
                :single-select="singleSelect"
                item-key="reference"
                show-select
                :items-per-page="30"
              >
                <template v-slot:item.reference="{ item }">
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
                    @click="$router.push('/export/exportaddnew/')"
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
                    @click="$router.push('/export/exportaddnew/')"
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
                    @click="$router.push('/export/exportaddnew/')"
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
          text: "Import Declaration List",
          disabled: false,
          light: true,
          href: "/",
        },
        {
          text: "Import Declaration List",
          disabled: false,
          href: "/",
        },
      ],
      headers: [
        {
          text: "Reference No",
          align: "start",
          sortable: false,
          value: "reference",
          class: "subtitle-2 font-weight-black",
        },
        {
          text: "Declaration No",
          value: "declaration",
          class: "subtitle-2 font-weight-black",
        },
        {
          text: "Transmit Date ",
          value: "date",
          class: "subtitle-2 font-weight-black",
        },
        {
          text: "Invoice No",
          value: "no",
          class: "subtitle-2 font-weight-black",
        },
        {
          text: "Exporter Name ",
          value: "name",
          class: "subtitle-2 font-weight-black",
        },
        {
          text: "MAWB.",
          value: "mawb",
          class: "subtitle-2 font-weight-black",
        },
        {
          text: "HAWB.",
          value: "hawb",
          class: "subtitle-2 font-weight-black",
        },
        {
          text: "Status",
          value: "status",
          class: "subtitle-2 font-weight-black",
        },
        {
          text: "Remark",
          value: "remark",
          class: "subtitle-2 font-weight-black",
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
        {
          text: "Job Counter",
          value: "jobcounter",
          class: "font-15-500",
        },
      ],
      ExportDeclaration: [
        {
          no: "Test-0001",
          reference: "ASDF12341",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          mawb: "RTCMASTER",
          hawb: "RTCHOUSE0001",
          status: 1,
          user: "Naree",
          job: "BOND",
          remark: "Short Accepted",
          jobcounter: "DHL",
        },
        {
          no: "Test-0001",
          reference: "ASDF12342",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 2,
          user: "Naree",
          job: "BOND",
          remark: "",
          jobcounter: "DHL",
        },
        {
          no: "Test-0001",
          reference: "ASDF12343",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 3,
          user: "Naree",
          remark: "Short Accepted",
          job: "BOND",
          jobcounter: "DHL",
        },
        {
          no: "Test-0001",
          reference: "ASDF12344",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 4,
          user: "Naree",
          remark: "",
          job: "BOND",
          jobcounter: "DHL",
        },
        {
          no: "Test-0001",
          reference: "ASDF12345",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 5,
          remark: "Short Accepted",
          user: "Naree",
          job: "BOND",
          jobcounter: "DHL",
        },
        {
          no: "Test-0001",
          reference: "ASDF12346",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 6,
          remark: "",
          user: "Naree",
          job: "BOND",
          jobcounter: "DHL",
        },
        {
          no: "Test-0001",
          reference: "ASDF12347",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 7,
          remark: "",
          user: "Naree",
          job: "BOND",
          jobcounter: "DHL",
        },
        {
          no: "Test-0001",
          reference: "ASDF12348",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 8,
          remark: "Short Accepted",
          user: "Naree",
          job: "BOND",
          remark: "",
          jobcounter: "DHL",
        },
        {
          no: "Test-0001",
          reference: "ASDF12349",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 9,
          user: "Naree",
          job: "BOND",
          remark: "Short Accepted",
          remark: "",
          jobcounter: "DHL",
        },
        {
          no: "Test-0001",
          reference: "ASDF123410",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 10,
          user: "Naree",
          remark: "Short Accepted",
          job: "BOND",
          jobcounter: "DHL",
        },
        {
          no: "Test-0001",
          reference: "ASDF123411",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 11,
          user: "Naree",
          job: "BOND",
          remark: "Short Accepted",
          jobcounter: "DHL",
        },
        {
          no: "Test-0001",
          reference: "ASDF123412",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 1,
          user: "Naree",
          job: "BOND",
          remark: "Short Accepted",
          jobcounter: "DHL",
        },
        {
          no: "Test-0001",
          reference: "ASDF123413",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 1,
          user: "Naree",
          job: "BOND",
          remark: "Short Accepted",
          jobcounter: "DHL",
        },
        {
          no: "Test-0001",
          reference: "ASDF123414",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 1,
          user: "Naree",
          job: "BOND",
          jobcounter: "DHL",
          remark: "Short Accepted",
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
