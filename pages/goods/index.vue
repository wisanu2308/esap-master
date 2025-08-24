<template>
  <div>
    <Core-Header10
      name="Goods Transition List"
      action="Goods Transition List"
      title="Goods Transition /"
      bgcolor="#FCE6F6"
    >
    </Core-Header10>

    <div>
      <div class="hx-160 esap-bg-good"></div>
      <div class="es-container" style="margin-top: -150px">
        <div class="flex flex-col md:flex-row">
          <div class="w-full">
            <div class="main-box">
              <v-card-text style="padding-bottom: 5px">
                <div class="p-2">
                  <div class="flex">
                    <div class="w-full">
                      <div class="flex flex-col md:flex-row w-full">
                        <div class="md:w-2/12 sm:w-full">
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
                            class="goods w-full font-13-3002"
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

                        <v-btn-toggle class="w-full ml-2" v-model="toggle_exclusive">
                          <div class="input-left md:w-2/12 sm:w-1/2">
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
                              min-width="auto"
                            >
                              <template v-slot:activator="{ on }">
                                <v-text-field
                                  @keydown.enter="focusNext"
                                  hide-details
                                  class="dateGoodsL font-13-300"
                                  outlined
                                  v-on="on"
                                  placeholder="From"
                                  append-icon="mdi-calendar"
                                  @click:append="on.click"
                                  solo
                                  height="40px"
                                  color="base_goods2"
                                  :value="getDateFormat(docFromDate)"
                                >
                                </v-text-field>
                              </template>
                              <v-date-picker
                                v-model="docFromDate"
                                no-title
                              ></v-date-picker>
                            </v-menu>
                          </div>
                          <div class="md:w-2/12 dd sm:w-1/2">
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
                                  class="dateGoodsR font-13-3002"
                                  outlined
                                  placeholder="To"
                                  append-icon="mdi-calendar"
                                  solo
                                  height="40px"
                                  color="base_goods2"
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
                              style="background-color: #47b5ff"
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
                class="chk-exp font-14-300 mr-5 ml-5"
                hide-default-footer
                v-model="selected"
                :headers="headers"
                :items="goodTransition"
                :single-select="singleSelect"
                item-key="gclReference"
                show-select
                :items-per-page="30"
              >
                <template v-slot:item.reference="{ item }">
                  <p
                    style="font-weight: 500 !important;color: #495057 !important;"
                    class="ma-0">
                    {{ item.reference }}
                  </p>
                </template>
                <template v-slot:item.status="{ item }">
                  <v-btn
                    class="status font-12-btn"
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
                    class="status font-12-btn"
                    width="100"
                    small
                    v-if="item.status == 2"
                    depressed
                    color="accepted"
                    dark
                    @click="$router.push('/goods/goodsaddnew/')"
                  >
                    ACCEPTED
                  </v-btn>
                  <v-btn
                    class="status font-12-btn"
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
                    class="status font-12-btn"
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
                    class="status font-12-btn"
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
                    class="status font-12-btn"
                    width="100"
                    small
                    v-if="item.status == 6"
                    depressed
                    color="status stetus_error"
                    dark
                    @click="$router.push('/goods/goodsaddnew/')"
                  >
                    ERROR
                  </v-btn>
                  <v-btn
                    class="status font-12-btn"
                    width="100"
                    small
                    v-if="item.status == 7"
                    depressed
                    color="cancel"
                    dark
                    @click="$router.push('/goods/goodsaddnew/')"
                  >
                    CANCEL
                  </v-btn>
                  <v-btn
                    class="status font-12-btn"
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
                    class="status font-12-btn"
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
                    class="status font-12-btn"
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
                    class="status font-12-btn"
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
              <Core-Page :isGoodsPage="true"></Core-Page>
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
          text: "GCL Reference",
          align: "start",
          sortable: false,
          value: "gclReference",
          class: "subtitle-2 font-weight-black",
        },
        {
          text: "GCL No",
          value: "gclNo",
          class: "subtitle-2 font-weight-black",
        },
        {
          text: "Submit Date ",
          value: "submitDate",
          class: "subtitle-2 font-weight-black",
        },
        {
          text: "Depart Date ",
          value: "departDate",
          class: "subtitle-2 font-weight-black",
        },
        {
          text: "Exporter Name ",
          value: "exporterName",
          class: "subtitle-2 font-weight-black",
        },
        {
          text: "Container No.",
          value: "containerNo",
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
          value: "jobNo",
          class: "subtitle-2 font-weight-black",
        },
        {
          text: "Job Counter",
          value: "jobCounter",
          class: "subtitle-2 font-weight-black",
        },
      ],
      goodTransition: [
        {
          gclReference: "ASDF123456889",
          gclNo: "6507A0023301",
          submitDate: "27/07/2022",
          departDate: "04/08/2022",
          exporterName: "EDI SERVICE APPLICATION CO.,LTD.",
          containerNo: "TCLU5897975",
          status: 1,
          remark: "",
          user: "Mint",
          jobNo: "",
          jobCounter: "ESAP"
        },
        {
          gclReference: "ASDF123456888",
          gclNo: "6507A0023301",
          submitDate: "27/07/2022",
          departDate: "04/08/2022",
          exporterName: "SUKIJ TANNERY LTD.,PART.",
          containerNo: "TCLU5897975",
          status: 2,
          remark: "",
          user: "Mint",
          jobNo: "",
          jobCounter: "ESAP"
        },
        {
          gclReference: "ASDF123456819",
          gclNo: "",
          submitDate: "27/07/2022",
          departDate: "04/08/2022",
          exporterName: "SUKIJ TANNERY LTD.,PART.",
          containerNo: "TCLU5897975",
          status: 3,
          remark: "",
          user: "Mint",
          jobNo: "",
          jobCounter: "ESAP"
        },
        {
          gclReference: "ASDF123456900",
          gclNo: "",
          submitDate: "27/07/2022",
          departDate: "04/08/2022",
          exporterName: "SUKIJ TANNERY LTD.,PART.",
          containerNo: "TCLU5897975",
          status: 4,
          remark: "",
          user: "Mint",
          jobNo: "",
          jobCounter: "ESAP"
        },
        {
          gclReference: "ASDF123456901",
          gclNo: "",
          submitDate: "27/07/2022",
          departDate: "04/08/2022",
          exporterName: "SUKIJ TANNERY LTD.,PART.",
          containerNo: "TCLU5897975",
          status: 5,
          remark: "",
          user: "Mint",
          jobNo: "",
          jobCounter: "ESAP"
        },
        {
          gclReference: "ASDF123456902",
          gclNo: "",
          submitDate: "27/07/2022",
          departDate: "04/08/2022",
          exporterName: "SUKIJ TANNERY LTD.,PART.",
          containerNo: "TCLU5897975",
          status: 6,
          remark: "",
          user: "Mint",
          jobNo: "",
          jobCounter: "ESAP"
        },
        {
          gclReference: "ASDF123456903",
          gclNo: "",
          submitDate: "27/07/2022",
          departDate: "04/08/2022",
          exporterName: "SUKIJ TANNERY LTD.,PART.",
          containerNo: "TCLU5897975",
          status: 7,
          remark: "",
          user: "Mint",
          jobNo: "",
          jobCounter: "ESAP"
        },
        {
          gclReference: "ASDF123456904",
          gclNo: "6507A0023301",
          submitDate: "27/07/2022",
          departDate: "04/08/2022",
          exporterName: "SUKIJ TANNERY LTD.,PART.",
          containerNo: "TCLU5897975",
          status: 8,
          remark: "",
          user: "Mint",
          jobNo: "",
          jobCounter: "ESAP"
        },
        {
          gclReference: "ASDF123456905",
          gclNo: "6507A0023301",
          submitDate: "27/07/2022",
          departDate: "04/08/2022",
          exporterName: "SUKIJ TANNERY LTD.,PART.",
          containerNo: "TCLU5897975",
          status: 9,
          remark: "BKK-Accepted",
          user: "Mint",
          jobNo: "",
          jobCounter: "ESAP"
        },
         {
          gclReference: "ASDF123456906",
          gclNo: "",
          submitDate: "27/07/2022",
          departDate: "04/08/2022",
          exporterName: "SUKIJ TANNERY LTD.,PART.",
          containerNo: "TCLU5897975",
          status: 10,
          remark: "BKK-Accepted",
          user: "Mint",
          jobNo: "",
          jobCounter: "ESAP"
        },

      ],
    };
  },
  methods: {
    getColor(status) {
      if (status == 1) return "red";
      else if (status > 2) return "orange";
      else return "green";
    },
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
.chk-exp::v-deep(.v-input--selection-controls__input > .mdi-checkbox-marked) {
  color: #e190dd !important;
}

/* input text color border */
::v-deep(.v-input__control) {
  color: #e190dd !important;
}

::v-deep(.theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state) > .v-input__control > .v-input__slot fieldset) {
  color: #CED4DA !important;
}

.status {
  border-radius: 8px !important
}

</style>
  