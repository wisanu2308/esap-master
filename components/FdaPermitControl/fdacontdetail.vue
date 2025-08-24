<template>
  <div>
    <v-form ref="form">
      <div class="flex flex-col md:flex-row pt-2 md:space-x-24">
        <div class="w-full md:w-3/5">
          <div>
            <P>ใบแจ้งการนำเข้า/ส่งออก สินค้าควบคุม</P>

            <label class="font-13-400">ใบอนุญาตสำหรับ</label>
            <v-combobox
              @keydown.enter="getIndexListDropDown"
              required
              :rules="[false]"
              class="font-14-300"
              :items="data.licensetype"
              item-text="name"
              item-id="id"
              v-model="data.processinglicensetype"
              solo
              flat
              dense
              label="กรุณาเลือก"
              color="base_fda"
              outlined
            ></v-combobox>

            <label class="font-13-400">ชื่อคำขอใบแจ้ง:</label>
            <div class="w-full ">
            <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  dense
                  label="กรุณาระบุ"
                  color="base_fda"
                  outlined
                  solo
                  maxLength="256"
                  v-model="form.requestfactname"
                ></v-text-field>
            </div>
          </div>

            <div class="flex flex-col md:flex-row md:space-x-4">
              <div class="flex flex-col md:flex-row">
              <div class="w-full md:w-1/2">
                <label class="font-13-400">ข้อมูลผู้แจ้ง</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  dense
                  label="ชื่อผู้แจ้ง"
                  color="base_fda"
                  outlined
                  solo
                  maxLength="60"
                  v-model="form.informantName"
                ></v-text-field>
              </div>
              <div class="w-full md:w-1/2">
                <label class="font-13-400">เลขที่บัตร</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  dense
                  label="เลขที่บัตร"
                  color="base_fda"
                  outlined
                  solo
                  maxLength="60"
                  v-model="form.informantIDCardNumber"
                >
                </v-text-field>
              </div>
              </div>
            </div>

            <div class="flex flex-col md:flex-row md:space-x-4">
              <div class="flex flex-col md:flex-row">
                <div class="w-full md:w-1/2">
                  <label class="font-13-400">ข้อมูลผู้รับมอบ</label>
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="font-14-300"
                    dense
                    label="ชื่อผู้แจ้ง"
                    color="base_fda"
                    outlined
                    solo
                    maxLength="60"
                    v-model="form.informantName"
                  ></v-text-field>
                </div>


                <div class="w-full md:w-1/2">
                  <label class="font-13-400">เลขที่บัตร</label>
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="font-14-300"
                    dense
                    label="เลขที่บัตร"
                    color="base_fda"
                    outlined

                    solo
                    maxLength="60"
                    v-model="form.SenderRegistrationID"
                  >
                  </v-text-field>
                </div>
              </div>
            </div>
            
            <div class="flex flex-col md:flex-row md:space-x-4">
              <div class="flex flex-col md:flex-row">
                
                <div class="w-full md:w-1/2">
                  <label class="font-13-400">เลขที่บัตรผู้รับมอบอำนาจ (ถ้ามี)</label>
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="font-14-300"
                    dense
                    label="เลขที่บัตร"
                    color="base_fda"
                    outlined

                    solo
                    maxLength="60"
                    v-model="form.SenderRegistrationID"
                  >
                  </v-text-field>
                </div>
              </div>
            </div>




              <P>ผู้ประกอบการ</P>

            <label class="font-13-400">Company Name</label>
            <div class="flex flex-col md:flex-row">
            <v-combobox
              
              @keydown.enter="getIndexListDropDown"
              :rules="[false]"
              class="font-14-300"
              required
              v-model="form.companyname"
              :items="data.companyname"
              item-text="name"
              item-id="id"
              solo
              flat
              dense
              label="กรุณาเลือก"
              color="base_fda"
              outlined
            ></v-combobox>
            <v-btn
              @click="sleepRefs2()"
              class="ml-3 rounded-lg font-14-5002"
              depressed
              :color="!hidden2 ? 'gray1' : 'base_fda'"
              dark
            >
              <span v-if="!hidden2">ซ่อน</span>
              <span v-else>แสดง</span>
            </v-btn>
          </div>

          <div v-if="!hidden2" class="animate__animated animate__fadeIn">
            <div class="flex flex-col md:flex-row">
              <div class="w-full md:w-1/2 mr-1">
                <label class="font-13-400">Company Tax</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  :rules="[false]"
                  required
                  dense
                  label="ระบุข้อมูล"
                  color="base_fda"
                  outlined
                  solo
                  maxLength="17"
                  v-model="form.companyTax"
                ></v-text-field>
              </div>
              <div class="w-full md:w-1/2 ml-1">
                <label class="font-13-400">Branch</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  :rules="[false]"
                  required
                  dense
                  label="000000"
                  color="base_fda"
                  outlined
                  maxLength="6"
                  solo
                  v-model="form.branchCompanyTax"
                ></v-text-field>
              </div>
              <v-btn
                class="ml-3 mt-6 rounded-lg"
                depressed
                color="base_fda"
                dark
              >
                <v-icon left> fa-solid fa-square-check </v-icon>
                <span class="font-14-5002">บันทึก</span>
              </v-btn>
            </div>

            <label class="font-13-400">Thai Name</label>
            <v-text-field
              @keydown.enter="focusNext"
              class="font-14-300"
              :rules="[false]"
              required
              dense
              label="ระบุข้อมูล..."
              color="base_fda"
              outlined
              solo
              maxLength="120"
              v-model="form.thaiName"
            ></v-text-field>
            <label class="font-13-400">Address</label>
            <v-text-field
              @keydown.enter="focusNext"
              :rules="[false]"
              required
              class="font-14-300"
              dense
              label="ระบุข้อมูล..."
              color="base_fda"
              outlined
              solo
              maxLength="120"
              v-model="form.address"
            ></v-text-field>
            <div class="flex flex-col md:flex-row md:space-x-4">
              <div class="w-full md:w-1/2">
                <label class="font-13-400">Sub District</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  dense
                  label="ระบุข้อมูล"
                  color="base_fda"
                  outlined
                  solo
                  maxLength="60"
                  v-model="form.district"
                ></v-text-field>
              </div>
              <div class="w-full md:w-1/2">
                <label class="font-13-400">District</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  dense
                  label="ระบุข้อมูล..."
                  color="base_fda"
                  outlined
                  solo
                  maxLength="60"
                  v-model="form.subProvince"
                >
                </v-text-field>
              </div>
            </div>

            <div class="flex flex-col md:flex-row md:space-x-4">
              <div class="w-full md:w-1/2">
                <label class="font-13-400">Province</label>
                <v-combobox
                  
                  @keydown.enter="getIndexListDropDown"
                  v-model="form.province"
                  :items="provinceList2"
                  :item-text="(item) => item.name"
                  class="font-14-300"
                  dense
                  solo
                  label="กรุณาเลือก"
                  color="base_fda"
                  outlined
                  maxLength="60"
                ></v-combobox>
              </div>
              <div class="w-full md:w-1/2">
                <label class="font-13-400">Post Code</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  :rules="[false]"
                  dense
                  label="10240"
                  color="base_fda"
                  solo
                  outlined
                  maxLength="9"
                  v-model="form.postCode"
                ></v-text-field>
              </div>
            </div>

            <div class="flex flex-col md:flex-row md:space-x-4">
              <div class="w-full md:w-1/2">
                <label class="font-13-400">Country</label>
                <v-combobox
                  
                  @keydown.enter="getIndexListDropDown"
                  v-model="form.countryCode"
                  :items="data.countryList"
                  item-text="name"
                  item-id="id"
                  class="font-14-300"
                  dense
                  solo
                  label="กรุณาเลือก"
                  color="base_fda"
                  outlined
                >
                  <template slot="item" slot-scope="data">
                    <div class="dropdown-line2">
                      <div>
                        {{ data.item.id }}
                      </div>
                      <div></div>
                      <div>{{ data.item.name }}</div>
                    </div>
                  </template>
                </v-combobox>
              </div>
              <div class="w-full md:w-1/2">
                <label class="font-13-400">Phone/Fax</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  :rules="[(v) => !!v || '']"
                  dense
                  label="ระบุข้อมูล"
                  color="base_fda"
                  solo
                  outlined
                  maxLength="35"
                  v-model="form.phone"
                ></v-text-field>
              </div>
            </div>           
          </div>
        </div>

        <div class="w-full md:w-2/5">
          <P>ข้อมูลรายงาน เข้า/ออก ยานพาหนะ</P>

          <div class="flex flex-col md:flex-row md:space-x-4">
            
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Invoice Number</label>
              <v-text-field
                @keydown.enter="focusNext"
                solo
                flat
                class="font-14-300"
                dense
                label="ระบุข้อมูล..."
                color="base_fda"
                outlined
                maxLength="35"
              >
              </v-text-field>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Invoice Date</label>
              <div class="input-left">
                <label
                  class="font-13-400"
                  v-if="!$vuetify.breakpoint.mobile"></label>
                <v-menu
                  :close-on-content-click="true"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="auto">
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      @keydown.enter="focusNext"
                      class="tt font-13-3002"
                      outlined
                      label="Date"
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
            </div>
          </div>



          <div class="flex flex-col md:flex-row md:space-x-4">
            
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Arrival Date(วันที่นำเข้า)</label>
              <div class="input-left">
                <label
                  class="font-13-400"
                  v-if="!$vuetify.breakpoint.mobile"></label>
                <v-menu
                  :close-on-content-click="true"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="auto">
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      @keydown.enter="focusNext"
                      class="tt font-13-3002"
                      outlined
                      label="Date"
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
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Departture Date(วันที่ส่งออก)</label>
              <div class="input-left">
                <label
                  class="font-13-400"
                  v-if="!$vuetify.breakpoint.mobile"></label>
                <v-menu
                  :close-on-content-click="true"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="auto">
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      @keydown.enter="focusNext"
                      class="tt font-13-3002"
                      outlined
                      label="Date"
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
            </div>
          </div>          
         

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
                <label class="font-13-400">ประเทศต้นทาง</label>
                <v-combobox
                  
                  @keydown.enter="getIndexListDropDown"
                  v-model="form.countryList"
                  :items="data.countryList"
                  item-text="name"
                  item-id="id"
                  class="font-14-300"
                  dense
                  solo
                  label="กรุณาเลือก"
                  color="base_fda"
                  outlined
                >
                  <template slot="item" slot-scope="data">
                    <div class="dropdown-line2">
                      <div>
                        {{ data.item.id }}
                      </div>
                      <div></div>
                      <div>{{ data.item.name }}</div>
                    </div>
                  </template>
                </v-combobox>
              </div>
              
            <div class="w-full md:w-1/2">
                <label class="font-13-400">ประเทศปลายทาง</label>
                <v-combobox
                  
                  @keydown.enter="getIndexListDropDown"
                  v-model="form.countryList"
                  :items="data.countryList"
                  item-text="name"
                  item-id="id"
                  class="font-14-300"
                  dense
                  solo
                  label="กรุณาเลือก"
                  color="base_fda"
                  outlined
                >
                  <template slot="item" slot-scope="data">
                    <div class="dropdown-line2">
                      <div>
                        {{ data.item.id }}
                      </div>
                      <div></div>
                      <div>{{ data.item.name }}</div>
                    </div>
                  </template>
                </v-combobox>
              </div>
          </div> 
          
          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/4">
              <label class="font-13-400">สถานที่ท่าส่งออก</label>
              <v-combobox
                class="font-14-300"
                :rules="[false]"
                required
                v-model="form.loadport"
                :items="data.loadport"
                item-text="id"
                item-id="id"
                solo
                flat
                dense
                label="กรุณาเลือก"
                color="base_carm"
                maxLength="4"
                outlined
                @change="
                  
                  changePort1($event);
                "
                @keydown.enter="getIndexListDropDown"
              >
                <template slot="item" slot-scope="data">
                  <div class="dropdown-line2">
                    <div>
                      {{ data.item.id }}
                    </div>
                    <div></div>
                    <div>{{ data.item.name }}</div>
                  </div>
                </template>
              </v-combobox>
            </div>
            <div class="w-full md:w-3/4">
              <v-text-field
                @keydown.enter="focusNext"
                solo
                flat
                class="font-14-300 pt-6"
                dense
                label="-"
                color="base_carm"
                outlined
                disabled
                v-model="form.loadport"
              >
              </v-text-field>
            </div>
          </div>
                   
        </div>
      </div>
    </v-form>
  </div>
</template>

<script>
import countryList from "@/data/country-list-export.json";
import provinceList from "@/data/province-list.json";
import documentType from "@/data/document-type-export.json";
import companyStatus from "@/data/company-status.json";
import currencyCode from "@/data/currency-code.json";
import modeOfTransport from "@/data/mode-of-transport.json";
import cargoTypeCode from "@/data/cargo-type-code.json";
import weightUnit from "@/data/weight-unit.json";
import declarationType from "@/data/declartion-type-export.json";
import portExport from "@/data/port-export.json";
import packageUnit from "@/data/package-unit.json";
import broker from "@/data/broker.json";
import vehicleName from "@/data/vehicle-name.json";
import exporter from "@/data/importer.json";
import cartype from "@/data/rfcar-console.json";
import carbrand from "@/data/car-brand.json";
import processingIndicator from "@/data/processing-indicator.json";
import licensetype from "@/data/processing-licensetype.json";
import messagefungtion from "@/data/messagefungtion.json";
import requestfactname from "@/data/requestfact-name.json";
import companyname from "@/data/companyname.json";
import loadport from "@/data/loadport.json";


// service
import dateFormat from "@/services/dateFormat.js";
import numFormat from "@/services/numFormat.js";
import nextFocus from "@/services/nextFocus.js";

export default {
  name: "Declaration",
  async mounted() {
    await this.validate();
    this.getProvinceList();
    this.getDefaultData();
  },
  data: () => {
    return {
      countState: 1,
      form: {
        nextIndex: 0,
        broker: null,
        currencyRate: null,
        countryBuyer: null,
        countryDestinationName: null,
        port1Name: null,
        port2Name: null,
        netWeight: null,
        grossWeight: null,
        packageAmount: null,
        informantIDCardNumber: null,
     },
      checkbox: true,
      checkbox1: true,
      valid: true,
      hidden: true,
      hidden2: true,
      errorMessages: "",
      select: "",
      currentInput: "",
      provinceList2: [],
      toggle_exclusive: null,
      items: [
        "ตัวอย่าง dropdown 01",
        "ตัวอย่าง dropdown 02",
        "ตัวอย่าง dropdown 03",
        "ตัวอย่าง dropdown 04",
      ],
      test: "",
      data: {
        countryList: countryList,
        provinceList: provinceList,
        documentTypes: documentType,
        companyStatus: companyStatus,
        currencyCode: currencyCode,
        modeOfTransport: modeOfTransport,
        cargoTypeCode: cargoTypeCode,
        netWeightUnit: weightUnit,
        grossWeightUnit: weightUnit,
        declarationType: declarationType,
        portExport: portExport,
        packageUnit: packageUnit,
        broker: broker,
        vehicleName: vehicleName,
        exporter: exporter,
        cartype: cartype,
        carbrand: carbrand,
        processingIndicator: processingIndicator,
        licensetype: licensetype,
        messagefungtion: messagefungtion,
        requestfactname: requestfactname,
        companyname: companyname,
        loadport: loadport,

        
      },
    };
  },
  methods: {
    // enter focus section ---------
    focusNext(event) {
      // enter and new focus (text input type).
      nextFocus.nextInput(event);
    },
    getIndexListDropDown(event) { // enter and get index in list of dropdown.
      if (this.countState > 1) {
        this.nextIndex = nextFocus.getIndex(event);
        this.countState = 0;
      }
      this.countState++;
    },
    
    //-------------------------------
    getProvinceList() {
      this.data.provinceList.forEach((x) => {
        this.provinceList2.push({ name: x.name_th });
      });
    },

    getDefaultData() {
      (this.form.broker = " "),
        (this.form.brokerTax = " ");
      this.form.branchBroker = "000000";
      this.form.subBroker = " ";
      this.form.branchSubBroker = " ";
      this.form.exporter = " ";
      this.form.companyTax = " ";
      this.form.branchCompanyTax = " ";
      this.form.thaiName = " ";
      this.form.address = " ";
      this.form.district = " ";
      this.form.subProvince = " ";
      this.form.province = " ";
      this.form.postCode = " ";
      this.form.countryCode = " ";
      this.form.companyStatus = " ";
      this.form.incentive = " ";
      this.form.phone = " ";
      this.form.exportDate = " ";
      this.form.currency = "USD";
      this.form.currencyRate = this.data.currencyCode.find((x) => x.id === "USD"
      ).rate;
      this.form.transType = " ";
      this.form.transName = " ";
      this.form.cargoType = this.data.cargoTypeCode[2].name;

      this.form.countryBuyer = " ";
      this.form.countryBuyerName = this.data.countryList.find(
        (x) => x.id === "AU"
      ).name;

      this.form.countryDestination = "AU";
      this.form.countryDestinationName = this.data.countryList.find(
        (x) => x.id === "AU"
      ).name;

      this.form.countryFrom = "US";
      this.form.countryCarry = "CN";
      this.form.portEntrance = "1190";
      this.form.portRelease = "1192";

      this.form.port1 = "2801";
      this.form.port2 = "2836";

      this.form.port1Name = this.data.portExport.find(
        (x) => x.id == this.form.port1
      ).name;
      this.form.port2Name = this.data.portExport.find(
        (x) => x.id == this.form.port2
      ).name;

      this.form.master = "RTCMASTER";
      this.form.house = "RTCHOUSE0010";
      this.form.nameFormalPass = "นายโร บลอง กิ";
      this.form.numberFormalPass = "M16334667";
      this.form.nameManager = "นายโร บลอง กิ";
      this.form.numberManager = "M16334667";
      this.form.netWeight = "20,000.000";
      this.form.grossWeight = "20,650.000";
      this.form.packageAmount = "60";
      this.form.package2 = "12 Piece";
      this.form.shipping = "NO SHIPPING MARK";
      this.form.outsideReleasePort = "1192";

      // this.form.portEntranceName = this.data.port.find(x => x.id == +this.form.portEntrance).name;
      // this.form.portReleaseName= this.data.port.find(x => x.id == +this.form.portRelease).name;
      // this.form.outsideReleasePortName = this.data.port.find(x => x.id ==  +this.form.outsideReleasePort).name;
    },
    changeCurrency(currency) {
      if (currency) {
        this.form.currencyRate = this.data.currencyCode.find(
          (x) => x.id === currency.id
        ).rate;
      } else {
        this.form.currencyRate = "-";
      }
    },

    changeCountryBuyer(selected) {
      if (selected) {
        this.form.countryBuyerName = this.data.countryList.find(
          (x) => x.id === selected.id
        ).name;
      } else {
        this.form.countryBuyerName = "-";
      }
    },
    changeCountryDestination(selected) {
      if (selected) {
        this.form.countryDestinationName = this.data.countryList.find(
          (x) => x.id === selected.id
        ).name;
      } else {
        this.form.countryDestinationName = "-";
      }
    },
    changePort1(selected) {
      if (selected) {
        this.form.port1Name = this.data.portExport.find(
          (x) => x.id === selected.id
        ).name;
      } else {
        this.form.port1Name = "-";
      }
    },
    changePort2(selected) {
      if (selected) {
        this.form.port2Name = this.data.portExport.find(
          (x) => x.id === selected.id
        ).name;
      } else {
        this.form.port2Name = "-";
      }
    },

    async sleepRefs() {
      this.hidden = !this.hidden;
      if (this.hidden) {
        await this.validate();
      } else {
        await this.sleep(1000);
        await this.validate();
      }
    },
    async sleepRefs2() {
      this.hidden2 = !this.hidden2;
      if (this.hidden) {
        await this.validate();
      } else {
        await this.sleep(1000);
        await this.validate();
      }
    },
    async sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    async validate() {
      this.$refs.form.validate();
    },

    getDateFormat(date) {
      return dateFormat.convertDateFormat(date);
    },

    convertNumFormat() {
      this.form.netWeight = numFormat.getUnitFormat(this.form.netWeight);
      this.form.grossWeight = numFormat.getUnitFormat(this.form.grossWeight);
      this.form.packageAmount = numFormat.getPackageFormat(
        this.form.packageAmount
      );
    },
  },
};
</script>

<style scoped>
.tt {
  width: 232px !important;
}

/* hard cord for fix color be better move to class  */
.input-exp::v-deep(.v-text-field__slot input) {
  caret-color: #6bd986 !important;
}
.v-application .error--text,
::v-deep(i.v-icon.notranslate.mdi.mdi-menu-down.theme--light.error--text),
::v-deep(.v-input--selection-controls__input > .mdi-checkbox-marked) {
  color: #6bd986 !important;
}

/* calendar error clolor */
::v-deep(.v-icon.notranslate.v-icon--link.mdi.mdi-calendar.theme--light.error--text) {
  color: #6bd986 !important;
}
</style>