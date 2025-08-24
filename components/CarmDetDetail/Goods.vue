<template>
    <v-form ref="form">      
      <div class="flex flex-col md:flex-row pt-6 md:space-x-20">
        <div class="w-full md:w-3/5">
          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-2/5">
                <label class="font-13-400">Item No.</label>
                  <v-text-field
                    @keydown.enter="focusNext"
                    :rules="[false]"
                    required
                    class="font-14-300"
                    solo
                    dense
                    label="ระบุข้อมูลอัตโนมัติ"
                    color="base_carm"
                    outlined
                    v-model="form.itemNo"
                  ></v-text-field>
            </div>
          </div>
            <P>รายละเอียดสินค้า</P> 
            
            <div class="flex flex-col md:flex-row md:space-x-4">
                <div class="w-full md:w-1/2">
                  <label class="font-13-400">House</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  solo
                  dense
                  label="ระบุข้อมูล"
                  color="base_carm"
                  outlined
                  maxLength="50"
                ></v-text-field>                
            </div>
            </div>

              <div class="flex flex-col md:flex-row md:space-x-4">
                <div class="w-full md:w-1/2">
                  <label class="font-13-400">Cargo Movement</label>
                    <v-combobox            
                    @keydown.enter="getIndexListDropDown"
                    :items="data.cargomovement"
                    item-text="name"
                    item-id="id"
                    required
                    class="font-14-300"
                    solo
                    dense
                    label="กรุณาเลือก"
                    color="base_carm"
                    outlined
                    maxLength="50"
                    v-model="form.cargomovement"
                    :rules="[false]"
                    ></v-combobox>
                </div>
                <div class="w-full md:w-1/2">
                <label class="font-13-400">Goods Cargo Type</label>
                    <v-combobox            
                    @keydown.enter="getIndexListDropDown"
                    :items="data.goodscargotype"
                    item-text="name"
                    item-id="id"
                    required
                    class="font-14-300"
                    solo
                    dense
                    label="กรุณาเลือก"
                    color="base_carm"
                    outlined
                    maxLength="50"
                    v-model="form.goodscargotype"
                    :rules="[false]"
                    ></v-combobox>
                </div>            
              </div>

            
              <div class="flex flex-col md:flex-row md:space-x-4">
                <div class="w-full md:w-1/2">
                <label class="font-13-400">Pleace of Receipt</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  solo
                  dense
                  label="ระบุข้อมูล"
                  color="base_carm"
                  outlined
                  maxLength="50"
                ></v-text-field>
                </div>
                <div class="w-full md:w-1/2">
                <label class="font-13-400">UCR</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  solo
                  dense
                  label="ระบุข้อมูล"
                  color="base_carm"
                  outlined
                  maxLength="50">
                </v-text-field>
                </div>            
              </div>

            <v-card class="p-1" style="margin-top: 36px">
            <div class="bg-gray-100 roud-lg p-4">
              <div class="flex mb-2">                
                <label class="font-18-600">Description of Goods</label>
                <v-spacer></v-spacer>
              </div>
              <v-textarea
                rows="5"
                background-color="white"
                color="base_carm"
                solo
                class="font-14-300"
                label="ระบุข้อมูล..."
                outlined
                :rules="[false]"
                v-model="form.shipping">
              </v-textarea>
              <div class="flex mb-2">                
                <label class="font-18-600">Shipping Mark</label>
                <v-spacer></v-spacer>
              </div>
              <v-textarea
                rows="5"
                background-color="white"
                color="base_carm"
                solo
                class="font-14-300"
                label="ระบุข้อมูล..."
                outlined
                :rules="[false]"
                v-model="form.shipping"
              ></v-textarea>              
            </div>
            </v-card>          
              
              <div class="flex flex-col md:flex-row pt-3">
                <div class="md:w-2/6">
                  <label class="font-13-400">Quantity</label>
                    <v-text-field
                    @keydown.enter="focusNext"
                    :rules="[false]"
                    required
                    class="font-14-300 label-align-right2"
                    solo
                    dense
                    label="0.000"
                    color="base_carm"
                    outlined
                    v-model="form.netWeight"
                    @change="convertNumFormat">
                    </v-text-field>
                </div>
                <div class="ml-3 w-1/6">
                  <label class="font-13-400">หน่วย</label>
                 <v-combobox              
                    @keydown.enter="getIndexListDropDown"
                    :items="data.grossWeightUnit"
                    item-text="id"
                    item-id="id"
                    :rules="[(v) => !!v && '']"
                    required
                    class="font-14-300"
                    solo
                    dense
                    label="กรุณาเลือก"
                    color="base_carm"
                    outlined
                    v-model="form.grossWeightUnit">
                    <template slot="item" slot-scope="data">
                  <div class="dropdown-line2">
                    <div>
                      {{ data.item.id }}
                    </div>
                    <div>{{ data.item.name }}</div>
                  </div>
                    </template>
                 </v-combobox>
                </div>
              

             <div class="md:w-2/6">
              <label class="font-13-400">Net Weight</label>
              <v-text-field
                @keydown.enter="focusNext"
                :rules="[false]"
                required
                class="font-14-300 label-align-right2"
                solo
                dense
                label="0.000"
                color="base_carm"
                outlined
                v-model="form.netWeight"
                @change="convertNumFormat"
              ></v-text-field>
             </div>
             <div class="ml-3 w-1/6">
              <label class="font-13-400">หน่วย</label>
              <v-combobox
              
                @keydown.enter="getIndexListDropDown"
                :items="data.grossWeightUnit"
                item-text="id"
                item-id="id"
                :rules="[(v) => !!v && '']"
                required
                class="font-14-300"
                solo
                dense
                label="กรุณาเลือก"
                color="base_carm"
                outlined
                v-model="form.grossWeightUnit"
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
          

             <div class="w-full flex flex-col md:flex-row pt-3">
             <div class="md:w-2/6">
              <label class="font-13-400">Gross Weight</label>
              <v-text-field
                @keydown.enter="focusNext"
                :rules="[false]"
                required
                class="font-14-300 label-align-right2"
                solo
                dense
                label="0.000"
                color="base_carm"
                outlined
                v-model="form.grossWeight"
                @change="convertNumFormat"
              ></v-text-field>
             </div>
             <div class="ml-3 w-1/6">
              <label class="font-13-400">หน่วย</label>
              <v-combobox
              
                @keydown.enter="getIndexListDropDown"
                :items="data.grossWeightUnit"
                item-text="id"
                item-id="id"
                :rules="[(v) => !!v && '']"
                required
                class="font-14-300"
                solo
                dense
                label="กรุณาเลือก"
                color="base_carm"
                outlined
                v-model="form.grossWeightUnit"
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

             <div class="md:w-2/6">
              <label class="font-13-400">Package</label>
              <v-text-field
                @keydown.enter="focusNext"
                :rules="[false]"
                required
                class="font-14-300 label-align-right2"
                style="text-align: right !important"
                solo
                dense
                label="0"
                color="base_carm"
                outlined
                v-model="form.package"
                @change="convertNumFormat"
              ></v-text-field>
             </div>
             <div class="ml-3 w-1/6">
              <label class="font-13-400">หน่วย</label>
              <v-combobox
              
                @keydown.enter="getIndexListDropDown"
                :items="data.packageUnit"
                item-text="id"
                item-id="id"
                :rules="[(v) => !!v && '']"
                required
                class="font-14-300"
                solo
                dense
                label="กรุณาเลือก"
                color="base_carm"
                outlined
                v-model="form.packageUnit"
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
            
             <div class="flex flex-col md:flex-row pt-3">
                <div class="md:w-2/6">
                  <label class="font-13-400">Total Freight</label>
                    <v-text-field
                    @keydown.enter="focusNext"
                    :rules="[false]"
                    required
                    class="font-14-300 label-align-right2"
                    solo
                    dense
                    label="0.00"
                    color="base_carm"
                    outlined
                    v-model="form.netWeight"
                    @change="convertNumFormat">
                    </v-text-field>
                </div>
                <div class="ml-3 w-1/6">
                  <label class="font-13-400">สกุลเงิน</label>
                 <v-combobox              
                    @keydown.enter="getIndexListDropDown"
                    :items="data.currency"
                    item-text="id"
                    item-id="id"
                    :rules="[(v) => !!v && '']"
                    required
                    class="font-14-300"
                    solo
                    dense
                    label="กรุณาเลือก"
                    color="base_carm"
                    outlined
                    v-model="form.currency">
                    <template slot="item" slot-scope="data">
                  <div class="dropdown-line2">
                    <div>
                      {{ data.item.id }}
                    </div>
                    <div>{{ data.item.name }}</div>
                  </div>
                    </template>
                 </v-combobox>
                </div>
              

             <div class="md:w-2/6">
              <label class="font-13-400">Basic Freight</label>
              <v-text-field
                @keydown.enter="focusNext"
                :rules="[false]"
                required
                class="font-14-300 label-align-right2"
                solo
                dense
                label="0.00"
                color="base_carm"
                outlined
                v-model="form.netWeight"
                @change="convertNumFormat"
              ></v-text-field>
             </div>
             <div class="ml-3 w-1/6">
              <label class="font-13-400">สกุลเงิน</label>
              <v-combobox
              
                @keydown.enter="getIndexListDropDown"
                :items="data.currency"
                item-text="id"
                item-id="id"
                :rules="[(v) => !!v && '']"
                required
                class="font-14-300"
                solo
                dense
                label="กรุณาเลือก"
                color="base_carm"
                outlined
                v-model="form.currency"
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


        </div>
      </div>
    </v-form>
</template>

<script>
import countryList from "@/data/country-list.json";
import consigneeStatus from "@/data/consignee-status-export.json";
import terms from "@/data/trade-term.json";
import currency from "@/data/referent/rfcuc.json";
import weightUnit from "@/data/weight-unit.json";
import grossWeightDistribute from "@/data/gross-weight-distribute.json";
import commercialLevel from "@/data/comercial-level.json";
import sellerStatus from "@/data/seller-status";
import dateFormat from "@/services/dateFormat.js";
import shipTo from "@/data/importer.json";
import packageUnit from "@/data/package-unit.json";
import cargomovement from "@/data/cargomovement.json";
import goodscargotype from "@/data/goodscargotype.json"

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
      currency: null,
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
        packageUnit: packageUnit,
        cargomovement: cargomovement,
        goodscargotype: goodscargotype,

      },
      form: {
        invoiceNo: null,
        currencyRate: null,
        totalInvoice: null,
        netWeight: null,
        grossWeight: null,
        package: null,
        cargomovement: null,
        goodscargotype: null,
        currency: null,

      },
    };
  },
  methods: {
    getDefaultData() {
      this.form.invoiceNo = "";
      this.form.invoiceDate = "";
      this.form.shipTo = "";
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
      this.form.netWeight = "";
      this.form.grossWeight = "";

      this.form.netWeightAVG = "ราคา";
      this.form.grossWeightAVG = "ราคา";

      this.form.netWeightUnit = "KGM";
      this.form.grossWeightUnit = "KGM";

      this.form.package = "";
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
