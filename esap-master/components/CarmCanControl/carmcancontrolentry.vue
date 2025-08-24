<template>
  <div>
    <v-form ref="form">
      <div class="flex flex-col md:flex-row pt-2 md:space-x-24">
        <div class="w-full md:w-3/5">
          <div>
            <P>ข้อมูลส่วนควบคุมการยกเลิก</P>

            <label class="font-13-400">Document Type</label>
            <v-combobox
            
              @keydown.enter="getIndexListDropDown"
              required
              :rules="[false]"
              class="font-14-300"
              :items="data.documentTypes"
              item-text="name"
              item-id="id"
              v-model="data.documentTypes"
              solo
              flat
              dense
              label="กรุณาเลือก"
              color="base_carm"
              outlined
            ></v-combobox>    
          </div>

            <label class="font-13-400">Forwarder</label>
          <div class="flex flex-col md:flex-row">
            <v-combobox
              
              @keydown.enter="getIndexListDropDown"
              :rules="[false]"
              class="font-14-300"
              required
              v-model="form.exporter"
              :items="data.exporter"
              item-text="name"
              item-id="id"
              solo
              flat
              dense
              label="กรุณาเลือก"
              color="base_carm"
              outlined
            ></v-combobox>           
          </div>

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
                  color="base_carm"
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
                  color="base_carm"
                  outlined
                  maxLength="6"
                  solo
                  v-model="form.branchCompanyTax"
                ></v-text-field>
              </div>             
            </div>

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Port of Discharge/Loading</label>
              <v-combobox
                class="font-14-300"
                :rules="[false]"
                required
                v-model="form.portdischarge"
                :items="data.portdischarge"
                item-text="Name"
                item-id="id1"
                solo
                flat
                dense
                label="กรุณาเลือก"
                color="base_carm"
                outlined
        
                @keydown.enter="getIndexListDropDown"
              >
                <template slot="item" slot-scope="data">
                  <div class="dropdown-line2">
                    <div>
                      {{ data.item.id1 }}
                    </div>
                    <div></div>
                    <div>{{ data.item.id1 }}</div>
                  </div>
                </template>
              </v-combobox>
            </div>
            <div class="w-full md:w-1/2">
              <v-text-field
                @keydown.enter="focusNext"
                solo
                flat
                class="font-14-300 pt-6"
                dense
                color="base_carm"
                outlined
                disabled
                v-model="form.countryDestinationName"
              >
              </v-text-field>
            </div>
          </div>
        </div>

        <div class="w-full md:w-2/5">
          
          <v-text-field
            @keydown.enter="focusNext"
            class="font-14-300"
            solo
            flat
            dense
            label="Receive Control No: 23680401300000002"
            color="base_carm"
            outlined
            v-model="form.package2"
          >
          </v-text-field>
          
          <div class="flex flex-col md:flex-row">
              <div class="w-full md:w-3/5 mr-1">
                <label class="font-13-400">Agent Tax</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  :rules="[false]"
                  required
                  dense
                  label="ระบุข้อมูล"
                  color="base_carm"
                  outlined
                  solo
                  maxLength="17"
                  v-model="form.companyTax"
                ></v-text-field>
              </div>
              <div class="w-full md:w-2/5 ml-1">
                <label class="font-13-400">Branch</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  :rules="[false]"
                  required
                  dense
                  label="000000"
                  color="base_carm"
                  outlined
                  maxLength="6"
                  solo
                  v-model="form.branchCompanyTax"
                ></v-text-field>
              </div>             
            </div>
            <div class="flex flex-col md:flex-row">
              <div class="w-full md:w-3/5 mr-1">
                <label class="font-13-400">Container Operator Tax</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  :rules="[false]"
                  required
                  dense
                  label="ระบุข้อมูล"
                  color="base_carm"
                  outlined
                  solo
                  maxLength="17"
                  v-model="form.companyTax"
                ></v-text-field>
              </div>
              <div class="w-full md:w-2/5 ml-1">
                <label class="font-13-400">Branch</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  :rules="[false]"
                  required
                  dense
                  label="000000"
                  color="base_carm"
                  outlined
                  maxLength="6"
                  solo
                  v-model="form.branchCompanyTax"
                ></v-text-field>
              </div>             
            </div>

          <label class="font-13-400">Contaner Number</label>
          <v-text-field
            @keydown.enter="focusNext"
            class="font-14-300"
            solo
            flat
            dense
            label="ระบุข้อมูล..."
            color="base_carm"
            outlined
            v-model="form.package2"
          >
          </v-text-field>
          <label class="font-13-400">Bill of Lading</label>
          <v-text-field
            @keydown.enter="focusNext"
            class="font-14-300"
            solo
            flat
            dense
            label="ระบุข้อมูล..."
            color="base_carm"
            outlined
            v-model="form.package2"
          >
          </v-text-field>

        </div>
      </div>
    </v-form>
  </div>
</template>

<script>
import countryList from "@/data/country-list-export.json";
import provinceList from "@/data/province-list.json";
import documentType from "@/data/canceltype.json";
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
import messagefungtion from "@/data/messagefungtion.json";
import portdischarge from "@/data/RFIPC.json";
import portloading from "@/data/RFIPC.json";
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
        portdischarge: null,
        portloading: null,
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
        messagefungtion: messagefungtion,
        portdischarge: portdischarge,
        portloading: portloading, 
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
      (this.form.broker = "E.D.I. SERVICE APPLICATION PROVIDER CO.,LTD."),
        (this.form.brokerTax = "105543025971");
      this.form.documentType = "ยกเลิก Carmanifest";
      this.form.branchBroker = "000000";
      this.form.subBroker = "SCG LOGISTICS MANAGEMENT COMPANY LIMITED";
      this.form.branchSubBroker =
        "E.D.I. SERVICE APPLICATION PROVIDER CO.,LTD.";
      this.form.exporter = "E.D.I. SERVICE APPLICATION PROVIDER CO.,LTD.";
      this.form.companyTax = "105543025971";
      this.form.branchCompanyTax = "000000";
      this.form.thaiName =
        "บริษัท อีดีไอ เซอร์วิส แอพพลิเคชั่น โพรไวเดอร์ จำกัด";
      this.form.address = "520 ถนนรามคำแหง";
      this.form.district = "แขวงหัวหมาก";
      this.form.subProvince = "เขตบางกะปิ";
      this.form.province = "กรุงเทพมหานคร";
      this.form.postCode = "10240";
      this.form.countryCode = "TH : THAILAND";
      this.form.companyStatus = "OT - OTHER";
      this.form.incentive = "D0101100000889";
      this.form.phone = "02-377-9474-5";
      this.form.exportDate = "2022-11-01";
      this.form.currency = "AUD";
      this.form.currencyRate = this.data.currencyCode.find(
        (x) => x.id === "AUD"
      ).rate;
      this.form.transType = "1 - ทางเรือ";
      this.form.transName = "WAN HAI";
      this.form.cargoType = this.data.cargoTypeCode[2].name;

      this.form.countryBuyer = "AU";
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
      this.form.package2 = "";
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
  caret-color: #d9bc6b !important;
}
.v-application .error--text,
::v-deep(i.v-icon.notranslate.mdi.mdi-menu-down.theme--light.error--text),
::v-deep(.v-input--selection-controls__input > .mdi-checkbox-marked) {
  color: #d9bc6b !important;
}

/* calendar error clolor */
::v-deep(.v-icon.notranslate.v-icon--link.mdi.mdi-calendar.theme--light.error--text) {
  color: #d9bc6b !important;
}
</style>,