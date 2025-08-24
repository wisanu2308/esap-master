<template>
  <div>
    <Core-Header13    
      name="FDA Restricted List"
      action="FDA Restricted List"
      title="FDA Restricter Goods Permit"
      bgcolor="#cbe9e2"
    >
    </Core-Header13>

    <div>
      <div class="hx-160 esap-bg-fda"></div>
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
                            >ค้นหาระบุ</label
                          >
                          <v-text-field
                            @keydown.enter="focusNext"
                            color="base_fda"
                            height="40px"
                            outlined
                            dense
                            class="fda w-full font-13-3002"
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
                                  class="datefdaL font-13-300"
                                  outlined
                                  v-on="on"
                                  placeholder="From"
                                  append-icon="mdi-calendar"
                                  @click:append="on.click"
                                  solo
                                  height="40px"
                                  color="base_fda"
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
                                  class="datefdaR font-13-3002"
                                  outlined
                                  placeholder="To"
                                  append-icon="mdi-calendar"
                                  solo
                                  height="40px"
                                  color="base_fda"
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
                                esap-bg-fda esap-btn-search
                                hover:esap-bg-fda
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
                v-model="selected"
                :headers="headers"
                :items="fdaTransition"
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
                    dark>
                    READY
                  </v-btn>

                  <v-btn
                    class="status font-12-btn"
                    width="100"
                    small
                    v-if="item.status == 2"
                    depressed
                    color="accepted"
                    dark>
                    ACCEPTED
                  </v-btn>

                  <v-btn
                    class="status font-12-btn"
                    width="100"
                    small
                    v-if="item.status == 3"
                    depressed
                    color="greenline"
                    dark>
                    GREEN LINE
                  </v-btn>

                  <v-btn
                    class="status font-12-btn"
                    width="100"
                    small
                    v-if="item.status == 4"
                    depressed
                    color="redline"
                    dark>
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
                    @click="$router.push('/fdapermit/fdapermitaddnew/')">                  
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
                    @click="$router.push('/fdapermit/fdapermitaddnew/')">
                    ERROR
                  </v-btn>

                  <v-btn
                    class="status font-12-btn"
                    width="100"
                    small
                    v-if="item.status == 7"
                    depressed
                    color="cancel"
                    dark>
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
              <Core-Page :isFdapermitPage="true"></Core-Page>
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
          text: "FDA restricted Goods List",
          disabled: false,
          light: true,
          href: "/",
        },
        {
          text: "FDA restricted Goods List",
          disabled: false,
          href: "/",
        },
      ],
      headers: [
        {
          text: "Reference No.",
          align: "start",
          sortable: false,
          value: "fdaReference",
          class: "subtitle-2 font-weight-black",
        },
        {
          text: "RGP Number",
          value: "rgpNo",
          class: "subtitle-2 font-weight-black",
        },
        {
          text: "Invoice No. ",
          value: "invoiceNo",
          class: "subtitle-2 font-weight-black",
          align: "center",
        },
        {
          text: "Invoice Date ",
          value: "invoiceDate",
          class: "subtitle-2 font-weight-black",
          align: "center",
        },
        {
          text: "LPI Company ",
          value: "companyName",
          class: "subtitle-2 font-weight-black",
          align: "center",
        },
        {
          text: ".Original Country",
          value: "consignmentCountryName",
          class: "subtitle-2 font-weight-black",
          align: "center",
        },
        {
          text: "Status",
          value: "status",
          class: "subtitle-2 font-weight-black",
          align: "center",
        },
        {
          text: "Remark",
          value: "remark",
          class: "subtitle-2 font-weight-black",
          align: "center",
        },
        {
          text: "User",
          value: "user",
          class: "subtitle-2 font-weight-black",
          align: "center",
        },
        {
          text: "Job No",
          value: "jobNo",
          class: "subtitle-2 font-weight-black",
        },
        
      ],
      fdaTransition: [
        {
          fdaReference: "ASDF123456889",
          rgpNo: "5900000007511",
          invoiceNo: "9931220914asdf01",
          invoiceDate: "04/08/2022",
          companyName: "EDI SERVICE APPLICATION CO.,LTD.",
          consignmentCountryName: "JAPAN",
          status: 1,
          remark: "",
          user: "Mint",
          jobNo: "",
          jobCounter: "ESAP"
        },
        {
          fdaReference: "ASDF123456888",
          rgpNo: "5900000007512",
          invoiceNo: "9931220914asdf02",
          invoiceDate: "04/08/2022",
          companyName: "SUKIJ TANNERY LTD.,PART.",
          consignmentCountryName: "JAPAN",
          status: 2,
          remark: "",
          user: "Mint",
          jobNo: "",
          jobCounter: "ESAP"
        },
        {
          fdaReference: "ASDF123456819",
          rgpNo: "",
          invoiceNo: "9931220914asdf03",
          invoiceDate: "04/08/2022",
          companyName: "SUKIJ TANNERY LTD.,PART.",
          consignmentCountryName: "JAPAN",
          status: 3,
          remark: "",
          user: "Mint",
          jobNo: "",
          jobCounter: "ESAP"
        },
        {
          fdaReference: "ASDF123456900",
          rgpNo: "",
          invoiceNo: "9931220914asdf04",
          invoiceDate: "04/08/2022",
          companyName: "SUKIJ TANNERY LTD.,PART.",
          consignmentCountryName: "JAPAN",
          status: 4,
          remark: "",
          user: "Mint",
          jobNo: "",
          jobCounter: "ESAP"
        },
        {
          fdaReference: "ASDF123456901",
          rgpNo: "5900000007513",
          invoiceNo: "9931220914asdf05",
          invoiceDate: "04/08/2022",
          companyName: "SUKIJ TANNERY LTD.,PART.",
          consignmentCountryName: "CHAINA",
          status: 5,
          remark: "",
          user: "Mint",
          jobNo: "",
          jobCounter: "ESAP"
        },
        {
          fdaReference: "ASDF123456902",
          rgpNo: "",
          invoiceNo: "9931220914asdf11",
          invoiceDate: "04/08/2022",
          companyName: "SUKIJ TANNERY LTD.,PART.",
          consignmentCountryName: "CHAINA",
          status: 6,
          remark: "",
          user: "Mint",
          jobNo: "",
          jobCounter: "ESAP"
        },
        {
          fdaReference: "ASDF123456903",
          rgpNo: "5900000007514",
          invoiceNo: "9931220914asdf12",
          invoiceDate: "04/08/2022",
          companyName: "SUKIJ TANNERY LTD.,PART.",
          consignmentCountryName: "CHAINA",
          status: 7,
          remark: "",
          user: "Mint",
          jobNo: "",
          jobCounter: "ESAP"
        },
        {
          fdaReference: "ASDF123456904",
          rgpNo: "5900000007515",
          invoiceNo: "9931220914asdf13",
          invoiceDate: "04/08/2022",
          companyName: "SUKIJ TANNERY LTD.,PART.",
          consignmentCountryName: "CHAINA",
          status: 8,
          remark: "",
          user: "Mint",
          jobNo: "",
          jobCounter: "ESAP"
        },
        {
          fdaReference: "ASDF123456905",
          rgpNo: "5900000007516",
          invoiceNo: "9931220914asdf14",
          invoiceDate: "04/08/2022",
          companyName: "SUKIJ TANNERY LTD.,PART.",
          consignmentCountryName: "CHAINA",
          status: 9,
          remark: "BKK-Accepted",
          user: "Mint",
          jobNo: "",
          jobCounter: "ESAP"
        },
         {
          fdaReference: "ASDF123456906",
          rgpNo: "",
          invoiceNo: "9931220914asdf15",
          invoiceDate: "04/08/2022",
          companyName: "SUKIJ TANNERY LTD.,PART.",
          consignmentCountryName: "CHAINA",
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
  color: #50e3c2!important;
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
  