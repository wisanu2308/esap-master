<template>
  <div>
    <Core-Header></Core-Header>

    <div>
      <div class="hx-160 esap-bg"></div>
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
                            color="base"
                            outlined
                            height="40px"
                            dense
                            placeholder="Filter Name"
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
                              :close-on-content-click="true"
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
                                  label="From"
                                  placeholder="From"
                                  append-icon="mdi-calendar"
                                  readonly
                                  solo
                                  height="40px"
                                  color="base"
                                  v-on="on"
                                  @click:append="on.click"
                                  :value="getDateFormat(fromDate)"
                                ></v-text-field>
                              </template>
                              <v-date-picker
                                v-model="fromDate"
                                no-title
                              ></v-date-picker>
                            </v-menu>
                          </div>
                          <div class="dd">
                            <br v-if="!$vuetify.breakpoint.mobile" />
                            <v-menu
                              :close-on-content-click="true"
                              transition="scale-transition"
                              offset-y
                              max-width="290px"
                              min-width="auto"
                            >
                              <template v-slot:activator="{ on }">
                                <v-text-field
                                  class="tt font-13-3002"
                                  outlined
                                  :value="getDateFormat(toDate)"
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
                                v-model="toDate"
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
                    </div>
                  </div>
                </div>
              </v-card-text>
              <v-data-table
                hide-default-footer
                class="font-14-300 mr-5 ml-5"
                v-model="selected"
                :headers="headers"
                :items="ImportDeclaration"
                :single-select="singleSelect"
                item-key="reference"
                show-select
                :items-per-page="30"
              >
                <template v-slot:item.refernce="{ item }">
                  <p
                    style="
                      font-weight: 500 !important;
                      color: #495057 !important;
                    "
                    @click="$router.push('/import/indexedit/')"
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
                </template>
              </v-data-table>
              <Core-Page color="base_ex" isExportPage="true"></Core-Page>
              <p id="btnFocusOut"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mdiReceive } from "@/assets/images/svg/receive.svg";
import dateFormat from "@/services/dateFormat.js";
import nextFocus from "@/services/nextFocus.js";

export default {
  name: "IndexPage",
  data: () => {
    return {
      fromDate: null,
      toDate: null,
      inputService: null,
      icons: {
        mdiReceive,
      },
      nav: false,
      singleSelect: false,
      selected: [],
      toggle_exclusive: 2,
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
          text: " Import Date",
          value: "date",
          class: "subtitle-2 font-weight-black",
        },
        {
          text: "Import Name",
          value: "name",
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
          class: "subtitle-2 font-weight-black",
        },
      ],
      ImportDeclaration: [
        {
          reference: "ASDF12301",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "EDI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 1,
          user: "Naree",
          job: "BOND",
          jobcounter: "DHL",
        },
        {
          reference: "ASDF12302",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 2,
          user: "Naree",
          job: "BOND",
          jobcounter: "DHL",
        },
        {
          reference: "ASDF12303",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 3,
          user: "Naree",
          job: "BOND",
          jobcounter: "DHL",
        },
        {
          reference: "ASDF12304",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 4,
          user: "Naree",
          job: "BOND",
          jobcounter: "DHL",
        },
        {
          reference: "ASDF12305",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 5,
          user: "Naree",
          job: "BOND",
          jobcounter: "DHL",
        },
        {
          reference: "ASDF12306",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 6,
          user: "Naree",
          job: "BOND",
          jobcounter: "DHL",
        },
        {
          reference: "ASDF12307",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 7,
          user: "Naree",
          job: "BOND",
          jobcounter: "DHL",
        },
        {
          reference: "ASDF12308",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 8,
          user: "Naree",
          job: "BOND",
          jobcounter: "DHL",
        },
        {
          reference: "ASDF12309",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 9,
          user: "Naree",
          job: "BOND",
          jobcounter: "DHL",
        },
        {
          reference: "ASDF12310",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 10,
          user: "Naree",
          job: "BOND",
          jobcounter: "DHL",
        },
        {
          reference: "ASDF12311",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 11,
          user: "Naree",
          job: "BOND",
          jobcounter: "DHL",
        },
        {
          reference: "ASDF12312",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 1,
          user: "Naree",
          job: "BOND",
          jobcounter: "DHL",
        },
        {
          reference: "ASDF12313",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 1,
          user: "Naree",
          job: "BOND",
          jobcounter: "DHL",
        },
        {
          reference: "ASDF12314",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 1,
          user: "Naree",
          job: "BOND",
          jobcounter: "DHL",
        },
        {
          reference: "ASDF12315",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 1,
          user: "Naree",
          job: "BOND",
          jobcounter: "DHL",
        },
        {
          reference: "ASDF12316",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 1,
          user: "Naree",
          job: "BOND",
          jobcounter: "DHL",
        },
        {
          reference: "ASDF12317",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 1,
          user: "Naree",
          job: "BOND",
          jobcounter: "DHL",
        },
        {
          reference: "ASDF12318",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 1,
          user: "Naree",
          job: "BOND",
          jobcounter: "DHL",
        },
        {
          reference: "ASDF12319",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 1,
          user: "Naree",
          job: "BOND",
          jobcounter: "DHL",
        },
        {
          reference: "ASDF12320",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 1,
          user: "Naree",
          job: "BOND",
          jobcounter: "DHL",
        },
        {
          reference: "ASDF12321",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 1,
          user: "Naree",
          job: "BOND",
          jobcounter: "DHL",
        },
        {
          reference: "ASDF12322",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 1,
          user: "Naree",
          job: "BOND",
          jobcounter: "DHL",
        },
        {
          reference: "ASDF12323",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 1,
          user: "Naree",
          job: "BOND",
          jobcounter: "DHL",
        },
        {
          reference: "ASDF12324",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 1,
          user: "Naree",
          job: "BOND",
          jobcounter: "DHL",
        },
        {
          reference: "ASDF12325",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 1,
          user: "Naree",
          job: "BOND",
          jobcounter: "DHL",
        },
        {
          reference: "ASDF12326",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 1,
          user: "Naree",
          job: "BOND",
          jobcounter: "DHL",
        },
        {
          reference: "ASDF12345",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 1,
          user: "Naree",
          job: "BOND",
          jobcounter: "DHL",
        },
        {
          reference: "ASDF12327",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 1,
          user: "Naree",
          job: "BOND",
          jobcounter: "DHL",
        },
        {
          reference: "ASDF12328",
          declaration: "A007897984",
          date: "24/4/2022",
          name: "DEI SERVICE APPLICATIO CO.,LTD.",
          hawb: "RTCMASTER",
          status: 1,
          user: "Naree",
          job: "BOND",
          jobcounter: "DHL",
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
.v-text-field {
  width: 284px !important;
  height: 40px !important;
}
</style>