<template>
  <div>
    <v-form ref="form">
      <div class="flex flex-col md:flex-row pt-6 md:space-x-24">
        <div class="w-full md:w-3/5">
          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-2/3">
              <label class="font-13-400">Invoice No.</label>
              <v-text-field
                @keydown.enter="focusNext"
                :value="this.form.invoiceNo"
                :rules="[false]"
                required
                class="font-14-300"
                solo
                dense
                label="ระบุข้อมูล"
                color="base"
                outlined
              ></v-text-field>
            </div>
            <div class="w-full md:w-1/3">
              <label class="font-13-400">Invoice Date</label>
              <v-btn-toggle v-model="toggle_exclusive" style="width: 100%">
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      :rules="[false]"
                      @keydown.enter="focusNext"
                      class="font-13-3002"
                      hide-details
                      outlined
                      label="dd/mm/yyyy"
                      placeholder="dd/mm/yyyy"
                      append-icon="mdi-calendar"
                      readonly
                      solo
                      height="36"
                      color="base"
                      v-on="on"
                      :value="getDateFormat(computedDateFormatted)"
                      @click:append="on.click"
                    >
                    </v-text-field>
                  </template>
                  <v-date-picker
                    v-model="computedDateFormatted"
                    no-title
                  ></v-date-picker>
                </v-menu>
              </v-btn-toggle>
            </div>
          </div>

          <label class="font-13-400">Consignor Code</label>
          <div class="flex flex-col md:flex-row">
            <v-combobox
              class="font-14-300"
              :items="['ทดสอบ', 'ทดสอบ2', 'ทดสอบ3']"
              required
              solo
              dense
              outlined
              label="กรุณาเลือก"
              color="base"
              maxLength="35"
              :value="this.form.consignorCode"
              
              @keydown.enter="getIndexListDropDown"
            ></v-combobox>

            <v-btn
              @click="sleepRefs()"
              class="ml-3 rounded-lg"
              depressed
              :color="!hidden ? '#495057' : 'base'"
              dark
            >
              <span v-if="!hidden">ซ่อน</span>
              <span v-else>แสดง</span>
            </v-btn>
            <v-btn class="ml-3 rounded-lg" depressed color="base" dark>
              L</v-btn
            >
          </div>
          <div v-if="!hidden" class="animate__animated animate__fadeIn">
            <label class="font-13-400">Consignor Name</label>
            <div class="flex flex-col md:flex-row">
              <v-text-field
                @keydown.enter="focusNext"
                :rules="[false]"
                required
                class="font-14-300"
                solo
                dense
                :value="this.form.consignorName"
                label="ระบุข้อมูล"
                color="base"
                maxLength="120"
                outlined
              ></v-text-field>
              <v-btn class="ml-3 rounded-lg" depressed color="base" dark>
                S</v-btn
              >
            </div>

            <label class="font-13-400">Street And Number</label>
            <v-text-field
              @keydown.enter="focusNext"
              :rules="[false]"
              required
              class="font-14-300"
              solo
              :value="this.form.address"
              dense
              label="ระบุข้อมูล..."
              color="base"
              outlined
              maxLength="120"
            ></v-text-field>

            <div class="flex flex-col md:flex-row md:space-x-4">
              <div class="w-full md:w-1/2">
                <label class="font-13-400">District</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  :value="this.form.district"
                  class="font-14-300"
                  solo
                  dense
                  label="ระบุข้อมูล"
                  color="base"
                  outlined
                  maxLength="60"
                ></v-text-field>
              </div>
              <div class="w-full md:w-1/2">
                <label class="font-13-400">Sub Province</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  solo
                  dense
                  label="ระบุข้อมูล..."
                  color="base"
                  maxLength="60"
                  outlined
                ></v-text-field>
              </div>
            </div>

            <div class="flex flex-col md:flex-row md:space-x-4">
              <div class="w-full md:w-1/2">
                <label class="font-13-400">Province</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  :value="this.form.province"
                  class="font-14-300"
                  solo
                  dense
                  label="ระบุข้อมูล..."
                  color="base"
                  maxLength="60"
                  outlined
                ></v-text-field>
              </div>
              <div class="w-full md:w-1/2">
                <label class="font-13-400">Post Code</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  :value="this.form.postCode"
                  :rules="[(v) => !!v || '']"
                  required
                  class="font-14-300"
                  solo
                  dense
                  label="ระบุข้อมูล"
                  color="base"
                  outlined
                  maxLength="9"
                ></v-text-field>
              </div>
            </div>

            <div class="flex flex-col md:flex-row md:space-x-4">
              <div class="w-full md:w-1/2">
                <label class="font-13-400">Country</label>
                <v-combobox
                  :items="data.countryList"
                  item-text="name2"
                  item-id="id"
                  :rules="[false]"
                  :value="form.countryCode"
                  required
                  class="font-14-300"
                  solo
                  dense
                  label="กรุณาเลือก"
                  color="base"
                  outlined
                  
                  @keydown.enter="getIndexListDropDown"
                >
                  <template slot="item" slot-scope="data">
                    <div class="dropdown-line2">
                      <div>
                        {{ data.item.id }}
                      </div>
                      <div></div>
                      <div>{{ data.item.name2 }}</div>
                    </div>
                  </template></v-combobox
                >
              </div>
              <div class="w-full md:w-1/2">
                <label class="font-13-400">Consignor Status</label>
                <v-combobox
                  class="font-14-300"
                  required
                  solo
                  dense
                  outlined
                  item-text="name"
                  item-id="name"
                  label="กรุณาเลือก"
                  color="base"
                  :rules="[false]"
                  :items="data.buyerStatus"
                  :value="this.form.consignorStatus"
                  
                  @keydown.enter="getIndexListDropDown"
                ></v-combobox>
              </div>
            </div>

            <label class="font-13-400">Email</label>
            <v-text-field
              @keydown.enter="focusNext"
              :value="this.form.email"
              class="font-14-300"
              solo
              dense
              label="ระบุข้อมูล..."
              color="base"
              outlined
              maxLength="50"
            ></v-text-field>
          </div>

          <label class="font-13-400">Terms</label>
          <v-combobox
            :items="data.terms"
            item-text="name2"
            item-value="id"
            :value="this.form.term"
            :rules="[false]"
            required
            dense
            class="font-14-300"
            solo
            label="กรุณาเลือก"
            color="base"
            outlined
            maxLength="17"
            
            @keydown.enter="getIndexListDropDown"
          ></v-combobox>

          <div class="flex flex-col md:flex-row pt-3">
            <div style="width: 232px">
              <label class="font-13-400">Total Invoice</label>
              <v-text-field
                @keydown.enter="focusNext"
                @change="convertNumFormat"
                :rules="[false]"
                v-model="form.totalInvoice"
                required
                class="font-14-300 label-align-right2"
                solo
                dense
                label="ระบุข้อมูล..."
                color="base"
                outlined
              ></v-text-field>
            </div>
            <div style="width: 115px; margin-left: 16px">
              <label class="font-13-400">สกุลเงิน</label>
              <v-combobox
                class="font-14-300"
                solo
                dense
                label="กรุณาเลือก"
                color="base"
                outlined
                required
                item-text="id"
                item-id="id"
                :items="data.currencyCode"
                :value="this.form.currencyCode"
                :rules="[false]"
                @change="
                  
                  changeCurrency($event);
                "
                @keydown.enter="getIndexListDropDown"
              >
                <template slot="item" slot-scope="data">
                  <div class="dropdown-line2">
                    <div>
                      {{ data.item.id }}
                    </div>
                    <div></div>
                    <div>{{ data.item.rate }}</div>
                  </div>
                </template></v-combobox
              >
            </div>
            <div style="width: 115px; margin-left: 16px">
              <v-text-field
                class="font-14-300 mt-6"
                color="base"
                outlined
                solo
                dense
                disabled
                label="ระบุข้อมูล..."
                @keydown.enter="focusNext"
                v-model="form.currencyRate"
              ></v-text-field>
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4 pt-3">
            <div style="width: 232px">
              <label class="font-13-400">Net Weight</label>
              <v-text-field
                @keydown.enter="focusNext"
                @change="convertNumFormat"
                :rules="[false]"
                required
                class="font-14-300 label-align-right2"
                solo
                dense
                label="ระบุข้อมูล..."
                v-model="form.netWeight"
                color="base"
                outlined
              ></v-text-field>
            </div>
            <div style="width: 115px; margin-left: 16px">
              <label class="font-13-400">หน่วย</label>
              <v-combobox
                class="font-14-300"
                solo
                dense
                required
                outlined
                :items="data.netWeightUnit"
                :rules="[false]"
                item-text="id"
                item-id="id"
                value="KGM"
                label="กรุณาเลือก"
                color="base"
                
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
            <div style="width: 115px; margin-left: 16px">
              <label class="font-13-400">วิธีเฉลี่ย</label>
              <v-combobox
                
                @keydown.enter="getIndexListDropDown"
                :items="data.grossWeightDistribute"
                :value="form.netWeightAVG"
                item-text="name"
                item-id="id"
                class="font-14-300"
                solo
                dense
                label="กรุณาเลือก"
                color="base"
                outlined
              ></v-combobox>
            </div>
            <div style="width: 115px; margin-left: 16px">
              <br />
              <!-- <v-btn dense depressed color="base" dark></v-btn> -->
              <v-btn class="rounded-lg" depressed color="base" dark>
                <v-icon>mdi-menu</v-icon> เฉลี่ย
              </v-btn>
            </div>
          </div>

          <div class="flex flex-col md:flex-row pt-3">
            <div style="width: 232px">
              <label class="font-13-400">Gross Weight</label>
              <v-text-field
                @keydown.enter="focusNext"
                @change="convertNumFormat"
                style="width: 232px"
                :rules="[false]"
                required
                class="font-14-300 label-align-right2"
                solo
                dense
                label="ระบุข้อมูล..."
                v-model="form.grossWeight"
                color="base"
                outlined
              ></v-text-field>
            </div>
            <div style="width: 115px; margin-left: 16px">
              <label class="font-13-400">หน่วย</label>
              <v-combobox
                class="font-14-300"
                style="width: 115px"
                solo
                dense
                required
                :items="data.netWeightUnit"
                :rules="[false]"
                label="กรุณาเลือก"
                color="base"
                value="KGM"
                item-text="id"
                item-id="id"
                outlined
                
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
                </template></v-combobox
              >
            </div>
            <div style="width: 115px; margin-left: 16px">
              <label class="font-13-400">วิธีเฉลี่ย</label>
              <v-combobox
                class="font-14-300"
                style="width: 115px"
                item-text="name"
                label="กรุณาเลือก"
                color="base"
                item-id="id"
                solo
                dense
                outlined
                :items="data.grossWeightDistribute"
                :value="form.grossWeightAVG"
                
                @keydown.enter="getIndexListDropDown"
              ></v-combobox>
            </div>
            <div class="w-full" style="margin-left: 16px">
              <v-btn class="rounded-lg mt-6" depressed color="base" dark>
                <v-icon>mdi-menu</v-icon> เฉลี่ย
              </v-btn>
            </div>
          </div>

          <div class="flex flex-col md:flex-row pt-3">
            <div style="width: 232px">
              <label class="font-13-400">Package</label>
              <v-text-field
                @keydown.enter="focusNext"
                @change="convertNumFormat"
                :rules="[false]"
                required
                class="font-14-300 label-align-right2"
                solo
                dense
                label="ระบุข้อมูล..."
                v-model="form.package"
                color="base"
                outlined
              >
              </v-text-field>
            </div>
            <div style="width: 115px; margin-left: 16px">
              <label class="font-13-400">หน่วย</label>
              <v-combobox
                class="font-14-300"
                required
                solo
                dense
                outlined
                item-text="id"
                item-id="id"
                label="กรุณาเลือก"
                color="base"
                :rules="[false]"
                :items="data.packageUnit"
                value="PK"
                
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
                </template></v-combobox
              >
            </div>
          </div>
        </div>

        <div class="w-full md:w-2/5">
          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">PO No.</label>
              <v-text-field
                @keydown.enter="focusNext"
                :rules="[false]"
                :value="form.poNo"
                required
                class="font-14-300"
                solo
                dense
                label="ระบุข้อมูล..."
                color="base"
                outlined
              ></v-text-field>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Term of Payment</label>
              <v-text-field
                @keydown.enter="focusNext"
                :value="form.termOfPayment"
                :rules="[false]"
                required
                class="font-14-300"
                solo
                dense
                label="ระบุข้อมูล..."
                color="base"
                outlined
                maxLength="17"
              ></v-text-field>
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Buyer Status</label>
              <v-combobox
                class="font-14-300"
                solo
                dense
                outlined
                required
                item-text="name"
                item-id="id"
                color="base"
                label="กรุณาเลือก"
                :rules="[false]"
                :items="data.buyerStatus"
                :value="form.buyerStatus"
                
                @keydown.enter="getIndexListDropDown"
              ></v-combobox>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Commercial Level</label>
              <v-combobox
                class="font-14-300"
                required
                dense
                solo
                outlined
                label="กรุณาเลือก"
                color="base"
                item-id="id"
                item-text="name"
                :rules="[false]"
                :items="data.commercialLevel"
                :value="form.commercialLevel"
                
                @keydown.enter="getIndexListDropDown"
              ></v-combobox>
            </div>
          </div>

          <label class="font-13-400">AEOs Reference No.</label>
          <v-text-field
            @keydown.enter="focusNext"
            dense
            label="ระบุข้อมูล"
            class="font-14-300"
            solo
            color="base"
            outlined
            maxLength="35"
          ></v-text-field>

          <label class="font-13-400">Detail of Other Charge</label>
          <v-text-field
            @keydown.enter="focusNext"
            rows="1"
            dense
            label="ระบุข้อมูล..."
            class="font-14-300"
            solo
            color="base"
            outlined
            maxLength="512"
          ></v-text-field>

          <div class="pt-4">
            <label class="font-13-400"> Self Certification Remark</label>
            <v-textarea
              rows="1"
              dense
              label="ระบุข้อมูล..."
              class="font-14-300"
              solo
              color="base"
              maxLength="512"
              outlined
            >
            </v-textarea>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">CIF Foreign </label>
              <v-text-field
                @keydown.enter="focusNext"
                disabled
                class="font-14-300 label-align-right2 label-align-right2"
                solo
                dense
                label="ระบุข้อมูล..."
                color="base"
                outlined
              ></v-text-field>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400"> CIF Baht</label>
              <v-text-field
                @keydown.enter="focusNext"
                disabled
                class="font-14-300 label-align-right2"
                solo
                dense
                label="ระบุข้อมูล..."
                color="base"
                outlined
              ></v-text-field>
            </div>
          </div>
        </div>
      </div>
      <p id="btnFocusOut"></p>
    </v-form>
  </div>
</template>

<script>
import countryList from "@/data/country-list.json";
import provinceList from "@/data/province-list.json";
import terms from "@/data/trade-term.json";
import buyerStatus from "@/data/buyer-status.json";
import commercialLevel from "@/data/comercial-Level.json";
import weightUnit from "@/data/weight-unit.json";
import currencyCode from "@/data/currency-code.json";
import grossWeightDistribute from "@/data/gross-weight-distribute.json";
import packageUnit from "@/data/package-unit.json";

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
  async creat() {
    await this.validate();
  },
  data() {
    return {
      nextIndex: 0,
      currentIndex: 0,
      countState: 1,
      menu2: null,
      toggle_exclusive: null,
      valid: true,
      hidden: false,
      consiger_name: "",
      street_number: "",
      computedDateFormatted: null,
      date: "",
      countryList2: [],
      provinceList2: [],
      form: {
        terms: null,
        currencyRate: null,
        totalInvoice: null,
        netWeight: null,
        grossWeight: null,
        package: null
      },
      data: {
        countryList: countryList,
        provinceList: provinceList,
        terms: terms,
        buyerStatus: buyerStatus,
        commercialLevel: commercialLevel,
        netWeightUnit: weightUnit,
        currencyCode: currencyCode,
        grossWeightDistribute: grossWeightDistribute,
        packageUnit: packageUnit,
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
    getDefaultData() {
      this.form.invoiceNo = "17-11TH-03";
      this.form.invoiceDate = "2022-11-03";
      this.form.poNo = "N/A";
      this.form.termOfPayment = "N/A";
      this.form.consignorCode = "BIO US";
      this.form.consignorName = "SYBARITIC,INC";
      this.form.address = "9220 JAMES AVENUE SOUTH";
      this.form.district = "BLOOMINGTON, MN 55431";
      this.form.province = "MINNEAPOLIS";
      this.form.postCode = "000000";
      this.form.countryCode = "UNITED STATES";
      this.form.consignorStatus = "OT - OTHER";
      this.form.email = "info@sybaritic.com";
      this.form.buyerStatus = "DISTRIBUTOR";
      this.form.commercialLevel = "WHOLESALE";
      this.form.term = "FOB = FREE ON BOARD";
      this.form.totalInvoice = "14,483.15";
      this.form.currencyCode = "USD";
      this.form.currencyRate = "38.3565";
      this.form.netWeight = "414.094";
      this.form.grossWeight = "630.000";
      this.form.netWeightAVG = "ราคา";
      this.form.grossWeightAVG = "ราคา";
      this.form.package = "2";
      this.form.packageUnit = "PK";
    },
    getCountryList() {
      this.data.countryList.forEach((x) => {
        this.countryList2.push({ name: x.name });
      });
    },

    getProvinceList() {
      this.data.provinceList.forEach((x) => {
        this.provinceList2.push({ name: x.name_th });
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
    async sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    async validate() {
      await this.$refs.form.validate();
    },
    changeCurrency(selected) {
      if (selected) {
        this.form.currencyRate = this.data.currencyCode.find(
          (x) => x.id == selected.id
        ).rate;
      } else {
        this.form.currencyRate = "-";
      }
    },
    getDateFormat(date) {
      return dateFormat.convertDateFormat(date);
    },
    convertNumFormat() {
      this.form.netWeight = numFormat.getUnitFormat(this.form.netWeight);
      this.form.grossWeight = numFormat.getUnitFormat(this.form.grossWeight);
      this.form.totalInvoice = numFormat.getNumberFormat(
        this.form.totalInvoice
      );
      this.form.package = numFormat.getPackageFormat(this.form.package);
    },
  },
};
</script>