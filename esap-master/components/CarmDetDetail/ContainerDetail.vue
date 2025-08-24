<template>  
    <v-form ref="form">      
      <div class="flex flex-col md:flex-row pt-6 md:space-x-20">
        <div class="w-full md:w-4/5">
          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-2/6">
                <label class="font-13-400">Item No.</label>
                  <v-text-field
                    @keydown.enter="focusNext"
                    :rules="[false]"
                    required
                    class="font-14-300"
                    solo
                    dense
                    label="ระบุข้อมูลอัตโนมัติ"
                    color="red"
                    outlined
                    v-model="form.itemNo"
                  ></v-text-field>
            </div>
          </div>
            <P>รายละเอียดสินค้า Container</P> 

            <div class="w-full md:w-1/5">
                <label class="font-13-400">Item No.</label>
                  <v-text-field
                    @keydown.enter="focusNext"
                    :rules="[false]"
                    required
                    class="font-14-300"
                    solo
                    dense
                    label="ระบุลำดับที่"
                    color="base_carm"
                    outlined
                    v-model="form.itemNo"
                  ></v-text-field>
             </div>

              <div class="flex flex-col md:flex-row md:space-x-4">
                <div class="w-full md:w-1/4">
                <label class="font-13-400">Container Number</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  solo
                  dense
                  label="ระบุข้อมูล"
                  color="base_carm"
                  outlined
                  maxLength="50"
                  v-model="form.district"
                ></v-text-field>
                </div>
                <div class="w-full md:w-1/4">
                <label class="font-13-400">Size and Type</label>
                <v-combobox                  
                  @keydown.enter="getIndexListDropDown"
                  v-model="form.containersizeandtype"
                  :items="data.containersizeandtype"
                  :item-text="name"
                  :item-id="id"
                  class="font-14-300"
                  dense
                  solo
                  label="กรุณาเลือก"
                  color="base_carm"
                  outlined
                  maxLength="60"
                ></v-combobox>
                </div>
                <div class="w-full md:w-1/4">
                <label class="font-13-400">Continer Status</label>
                <v-combobox                  
                  @keydown.enter="getIndexListDropDown"
                  v-model="form.countryList"
                  :items="countryList"
                  :item-text="name"
                  :item-id="id"
                  class="font-14-300"
                  dense
                  solo
                  label="กรุณาเลือก"
                  color="base_carm"
                  outlined
                  maxLength="60"
                ></v-combobox>
                </div>
                <div class="w-full md:w-1/4">
                <label class="font-13-400">Sael Number</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  solo
                  dense
                  label="ระบุข้อมูล"
                  color="base_carm"
                  outlined
                  maxLength="50"
                  v-model="form.subProvince">
                </v-text-field>
              </div>               
            </div>

            <div class="w-full md:w-1/5">
                <label class="font-13-400">Item No.</label>
                  <v-text-field
                    @keydown.enter="focusNext"
                    :rules="[false]"
                    required
                    class="font-14-300"
                    solo
                    dense
                    label="ระบุลำดับที่"
                    color="base_carm"
                    outlined
                    v-model="form.itemNo"
                  ></v-text-field>
             </div>

              <div class="flex flex-col md:flex-row md:space-x-4">
                <div class="w-full md:w-1/4">
                <label class="font-13-400">Container Number</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  solo
                  dense
                  label="ระบุข้อมูล"
                  color="base_carm"
                  outlined
                  maxLength="50"
                  v-model="form.district"
                ></v-text-field>
                </div>
                <div class="w-full md:w-1/4">
                <label class="font-13-400">Size and Type</label>
                <v-combobox                  
                  @keydown.enter="getIndexListDropDown"
                  v-model="form.countryList"
                  :items="countryList"
                  :item-text="name"
                  :item-id="id"
                  class="font-14-300"
                  dense
                  solo
                  label="กรุณาเลือก"
                  color="base_carm"
                  outlined
                  maxLength="60"
                ></v-combobox>
                </div>
                <div class="w-full md:w-1/4">
                <label class="font-13-400">Continer Status</label>
                <v-combobox                  
                  @keydown.enter="getIndexListDropDown"
                  v-model="form.countryList"
                  :items="countryList"
                  :item-text="name"
                  :item-id="id"
                  class="font-14-300"
                  dense
                  solo
                  label="กรุณาเลือก"
                  color="base_carm"
                  outlined
                  maxLength="60"
                ></v-combobox>
                </div>
                <div class="w-full md:w-1/4">
                <label class="font-13-400">Sael Number</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  solo
                  dense
                  label="ระบุข้อมูล"
                  color="base_ex"
                  outlined
                  maxLength="50"
                  v-model="form.subProvince">
                </v-text-field>
              </div>               
            </div>

            <div class="w-full md:w-1/5">
                <label class="font-13-400">Item No.</label>
                  <v-text-field
                    @keydown.enter="focusNext"
                    :rules="[false]"
                    required
                    class="font-14-300"
                    solo
                    dense
                    label="ระบุลำดับที่"
                    color="base_carm"
                    outlined
                    v-model="form.itemNo"
                  ></v-text-field>
             </div>

            <div class="flex flex-col md:flex-row md:space-x-4">
                <div class="w-full md:w-1/4">
                <label class="font-13-400">Container Number</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  solo
                  dense
                  label="ระบุข้อมูล"
                  color="base_carm"
                  outlined
                  maxLength="50"
                  v-model="form.district"
                ></v-text-field>
                </div>
                <div class="w-full md:w-1/4">
                <label class="font-13-400">Size and Type</label>
                <v-combobox                  
                  @keydown.enter="getIndexListDropDown"
                  v-model="form.countryList"
                  :items="countryList"
                  :item-text="name"
                  :item-id="id"
                  class="font-14-300"
                  dense
                  solo
                  label="กรุณาเลือก"
                  color="base_carm"
                  outlined
                  maxLength="60"
                ></v-combobox>
                </div>
                <div class="w-full md:w-1/4">
                <label class="font-13-400">Continer Status</label>
                <v-combobox                  
                  @keydown.enter="getIndexListDropDown"
                  v-model="form.countryList"
                  :items="countryList"
                  :item-text="name"
                  :item-id="id"
                  class="font-14-300"
                  dense
                  solo
                  label="กรุณาเลือก"
                  color="base_carm"
                  outlined
                  maxLength="60"
                ></v-combobox>
                </div>
                <div class="w-full md:w-1/4">
                <label class="font-13-400">Sael Number</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  solo
                  dense
                  label="ระบุข้อมูล"
                  color="base_carm"
                  outlined
                  maxLength="50"
                  v-model="form.subProvince">
                </v-text-field>
              </div>               
            </div>
              
          </div>
        </div>
      </v-form>  
</template>

<script>
import countryList from "@/data/country-list.json";
import consigneeStatus from "@/data/consignee-status-export.json";
import containersizeandtype from "@/data/referent/refctc.json";
import terms from "@/data/trade-term.json";
import currency from "@/data/currency-code.json";
import weightUnit from "@/data/weight-unit.json";
import grossWeightDistribute from "@/data/gross-weight-distribute.json";
import commercialLevel from "@/data/comercial-level.json";
import sellerStatus from "@/data/seller-status";
import dateFormat from "@/services/dateFormat.js";
import shipTo from "@/data/importer.json";
import packageUnit from "@/data/package-unit.json"

// services
import numFormat from "@/services/numFormat.js";
import nextFocus from "@/services/nextFocus.js";

export default {
  name: "Declaration",
  async mounted() {
    await this.validate();
    this.getCountryList();
    this.getDefaultData();
  },
  async creat() {
    await this.validate();
  },
  data() {
    return {
      valid: true,
      countState: 1,
      hidden: false,
      hidden2: false,
      consiger_name: "",
      street_number: "",
      date: null,
      computedDateFormatted: "",
      toggle_exclusive: null,
      containersizeandtype: "",
      menu2: false,
      countryList2: [],
      data: {
        countryList: countryList,
        terms: terms,
        sellerStatus: sellerStatus,
        commercialLevel: commercialLevel,
        netWeightUnit: weightUnit,
        consigneeStatus: consigneeStatus,
        grossWeightUnit: weightUnit,
        typeDistribute: grossWeightDistribute,
        currency: currency,
        shipTo: shipTo,
        containersizeandtype: containersizeandtype, 
        packageUnit: packageUnit
      },
      form: {
        invoiceNo: null,
        currencyRate: null,
        totalInvoice: null,
        netWeight: null,
        grossWeight: null,
        package: null,
        containersizeandtype: null,
      },
    };
  },
  methods: {
    getDefaultData() {
      this.form.invoiceNo = "SI2/4514655";
      this.form.invoiceDate = "2022-11-09";
      this.form.shipTo = "GRIFFITHFOOD AU";
      this.form.name = "GRIFM CULINARY PTY LTD.";
      this.form.address = "223-225 GOVERNOR ROAD";
      this.form.district = "BRAESIDE,";
      this.form.subProvince = "VICTORIA";
      this.form.postCode = "3195";
      this.form.countryCode = "AUSTRALIA";
      this.form.consignorStatus = "OT - OTHER";

      this.form.billingTo = "GRIFFITHFOOD AU";
      this.form.billingToName = "GRIFM CULINARY PTY LTD.";
      this.form.billingToAddress = "223-225 GOVERNOR ROAD";
      this.form.billingToDistrict = "BRAESIDE,";
      this.form.billingToSubProvince = "VICTORIA";
      this.form.billingToPostCode = "3195";
      this.form.billingToCountryCode = "AUSTRALIA";
      this.form.billingToConsignorStatus = "OT - OTHER";
      this.form.consigneeStatus = "OT - OTHER";

      this.form.term = "FOB = FREE ON BOARD";
      this.form.totalInvoice = "36,173.62";
      this.form.currencyCode = "AUD";
      this.form.currencyRate = this.data.currency.find(
        (x) => x.id === "AUD"
      ).rate;
      this.form.netWeight = "20,000.001";
      this.form.grossWeight = "20,650.001";

      this.form.netWeightAVG = "ราคา";
      this.form.grossWeightAVG = "ราคา";

      this.form.netWeightUnit = "KGM";
      this.form.grossWeightUnit = "KGM";

      this.form.package = "60";
      this.form.packageUnit = "PK";

      this.form.poNo = "PBP13771";
      this.form.termOfPayment = "N/A";
      this.form.sellerStatus = "OTHER";
      this.form.commercialLevel = "WHOLESALE";
      this.form.fobForeign = "36,173.62";
      this.form.fobBath = "87,1476.29";
    },
    getCountryList() {
      this.data.countryList.forEach((x) => {
        this.countryList2.push({ name: x.name });
      });
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
      await this.$refs.form.validate();
    },
    // enter focus section ---------
    focusNext(event) { // enter and new focus (text input type).
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
    currencyCodeChange(selected) {
      if (selected) {
        this.form.currencyRate = selected.rate;
      } else {
        this.form.currencyRate = "-";
      }
    },
    getDateFormat(date) {
      return dateFormat.convertDateFormat(date);
    },
    convertNumFormat() {
      this.form.totalInvoice = numFormat.getNumberFormat(
        this.form.totalInvoice
      );
      this.form.netWeight = numFormat.getUnitFormat(this.form.netWeight);
      this.form.grossWeight = numFormat.getUnitFormat(this.form.grossWeight);
      this.form.package = numFormat.getPackageFormat(this.form.package);
    },
  },
};
</script>

<style scoped>
.v-application .error--text,
::v-deep(i.v-icon.notranslate.mdi.mdi-menu-down.theme--light.error--text),
::v-deep(.v-input--selection-controls__input > .mdi-checkbox-marked) {
  color: #ecb347 !important;
}

/* calendar error clolor */
::v-deep(.v-icon.notranslate.v-icon--link.mdi.mdi-calendar.theme--light.error--text) {
  color: #ecb347 !important;
}
</style>