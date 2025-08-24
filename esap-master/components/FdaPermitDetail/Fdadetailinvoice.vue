<template>
  <div>
    <v-form ref="form" v-model="valid" lazy-validation>
                <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/4">
              <label class="font-13-400">รายการที่</label>
              <v-text-field
                @keydown.enter="focusNext"
                required
                class="font-14-300 label-align-right2"
                dense
                label=""
                color="base-fda"
                solo
                outlined
              ></v-text-field>
            </div>
            <div class="w-full md:w-1/4">
              <label class="font-13-400 align-right">ลำดับที่ใน Invoice</label>
              <v-text-field
                @keydown.enter="focusNext"
                :rules="[(v) => !!v || '']"
                required
                class="font-14-300 label-align-right2"
                dense
                label=""
                color="base-fda"
                outlined
                solo
              ></v-text-field>
            </div>
          </div>           

      <div class="flex flex-col md:flex-row pt-6 md:space-x-4">
        <div class="w-full md:w-3/5 mr-10">
          <label class="font-13-400">Product Code</label>
          <div class="flex flex-col md:flex-row">
            <v-combobox
              class="font-14-3001"
              solo
              dense
              outlined
              required
              label="กรุณาเลือก"
              color="base-fda"
              maxLength="35"
              :rules="[false]"
              :items="items"
              v-model="form.productCode"
              
              @keydown.enter="getIndexListDropDown"
            ></v-combobox>
            <v-btn
              fab
              small
              class="ml-3 rounded-lg"
              depressed
              color="secondary"
              dark
              height="36px"
              width="36px"
            >
              S</v-btn
            >
            <v-btn
              fab
              small
              class="ml-3 rounded-lg"
              depressed
              color="base-fda"
              dark
              height="36px"
              width="36px"
            >
              L</v-btn
            >
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4 pt-3">
            <div class="w-full">
              <label class="font-13-400">รหัสพิกัดศุลกากร</label>
              <v-combobox
                solo
                class="font-14-3001"
                required
                dense
                label="กรุณาเลือก"
                color="base-fda"
                outlined
                maxLength="12"
                v-model="form.tariffCode"
                :items="data.tariffCode"
                item-text="name"
                item-id="id"
                
                @keydown.enter="getIndexListDropDown"
                :rules="[false]"
              ></v-combobox>
            </div>
            <div class="w-full">
              <label class="font-13-400">รหัสสถิติ</label>
              <v-combobox
                class="font-14-300"
                :rules="[false]"
                solo
                dense
                required
                label="กรุณาเลือก"
                color="base-fda"
                outlined
                maxLength="3"
                
                @keydown.enter="getIndexListDropDown"
                v-model="form.tariffStatistical"
                :items="data.tariffStatistical"
                item-text="name"
                item-id="id"
              ></v-combobox>
            </div>            
          </div>          

          <label class="font-13-400">English Description</label>
          <v-textarea
            class="font-14-300"
            style="top: 5px !important"
            dense
            rows="3"
            solo
            required
            label="ระบุชื่อสินค้า(Eng.)"
            color="base-fda"
            outlined
            maxLength="512"
            :rules="[false]"
            v-model="form.engDes"
          ></v-textarea>

          <label class="font-13-400">ชื่อสินค้าภาษาไทย</label>
          <v-textarea
            class="font-14-300"
            style="top: 5px !important"
            dense
            rows="3"
            solo
            required
            label="ระบุชื่อสินค้า(ไทย)"
            color="base-fda"
            outlined
            maxLength="512"
            :rules="[false]"
            v-model="form.thaiDes"
          ></v-textarea>

          <!-- <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Brand Name</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-combobox
                  solo
                  :rules="[(v) => !!v || '']"
                  required
                  class="font-14-300"
                  dense
                  label="กรุณาเลือก"
                  :items="items"
                  color="base"
                  outlined
                ></v-combobox>
                <v-btn
                  height="36px"
                  width="36px"
                  fab
                  small
                  class="ml-3 rounded-lg"
                  depressed
                  color="secondary"
                  dark
                  solo
                >
                  _</v-btn
                >
              </div>
            </div>
            <div class="w-full md:w-1/2"></div>
          </div> -->

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">เครื่องหมายการค้า</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  class="font-14-300"
                  dense
                  color="base-fda"
                  outlined
                  maxLength="35"
                  placeholder="ระบุข้อมูล"
                  @keydown.enter="focusNext"
                  v-model="form.brandName"
                  :rules="[false]"
                ></v-text-field>                
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">ลักษณะผลิตภัณฑ์(Characterstic)</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  class="font-14-300"
                  dense
                  color="base-fda"
                  outlined
                  maxLength="256"
                  placeholder="ระบุข้อมูล"
                  @keydown.enter="focusNext"
                  v-model="form.productYear"
                  :rules="[false]"
                ></v-text-field>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full md:w-2/5">
          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-3/4">
              <label class="font-13-400">ปริมาณ (Quantity)</label>
              <v-text-field
                class="font-14-300 label-align-right2"
                :rules="[false]"
                required
                solo
                dense
                label="0.000"
                color="base"
                outlined
                @keydown.enter="focusNext"
                @change="convertNumFormat"
                v-model="form.invQty"
              ></v-text-field>
            </div>
            <div class="w-full md:w-1/4">
              <br />
              <v-combobox
                class="font-14-300"
                solo
                required
                dense
                label="กรุณาเลือก"
                color="base"
                outlined
                
                @keydown.enter="getIndexListDropDown"
                :rules="[false]"
                v-model="form.invQtyUnit"
                :items="data.invClare"
                item-text="id"
                item-id="id"
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
            <div class="w-full md:w-3/4">
              <label class="font-13-400">น้ำหนัก(Net Weight)</label>
              <v-text-field
                @keydown.enter="focusNext"
                class="font-14-300 label-align-right2"
                :rules="[false]"
                required
                solo
                dense
                label="0.000"
                color="base"
                outlined
                v-model="form.netWeight"
                @change="convertNumFormat"
              ></v-text-field>
            </div>
            <div class="w-full md:w-1/4">
              <br />
              <v-combobox
                
                @keydown.enter="getIndexListDropDown"
                solo
                class="font-14-300"
                :rules="[false]"
                required
                dense
                label="กรุณาเลือก"
                color="base"
                outlined
                v-model="form.netWeightUnit"
                :items="data.invClare"
                item-text="id"
                item-id="id"
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
            <div class="w-full md:w-1/2">
                <label class="font-13-400">รหัสประเทศต้นกำเนิด</label>
                <v-combobox
                  
                  @keydown.enter="getIndexListDropDown"
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
                <label class="font-13-400">รหัสประเทศผู้ซื้อ</label>
                <v-combobox
                  
                  @keydown.enter="getIndexListDropDown"
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


          
          <label class="font-13-400">Remark</label>
          <div class="flex flex-col md:flex-row">
            <v-textarea
              :rules="[(v) => !!v || '']"
              required
              class="font-14-300"
              dense
              label=""
              color="base"
              outlined
              rows="1"
              maxLength="255"
            ></v-textarea>
            
            
          </div>
        </div>
      </div>
    </v-form>
    <p id="btnFocusOut"></p>
  </div>
</template>

<script>
import natureTransaction from "@/data/nature-trans.json";
import weightUnit from "@/data/weight-unit.json";
import currencyCode from "@/data/currency-code.json";
import tariffCode from "@/data/tariff-code.json";
import tariffStatistical from "@/data/tariff-statistical.json";
import privilegeCode from "@/data/privilege-code.json";
import tariffSequence from "@/data/tariff-sequence.json";
import tariffImport from "@/data/tariff-import.json";
import brandName from "@/data/brand-name.json";
import invClare from "@/data/inv-clare-qty.json";
import packageUnit from "@/data/package-unit.json";
import tradeTerm from "@/data/trade-term.json";
import country from "@/data/country-list.json";
import countryList from "@/data/country-list-export.json";

//services
import calcNum from "@/services/calcNum.js";
import numFormat from "@/services/numFormat.js";
import nextFocus from "@/services/nextFocus.js";

export default {
  name: "Declaration",
  async mounted() {
    await this.validate();
    this.getInvAmountRate();
  },
  data() {
    return {
      countState: 1,
      nextIndex: 0,
      currentIndex: 0,
      ex7: "",
      valid: true,
      hidden: false,
      checkbox: true,
      items: [
        "ตัวอย่าง dropdown 01",
        "ตัวอย่าง dropdown 02",
        "ตัวอย่าง dropdown 03",
        "ตัวอย่าง dropdown 04",
      ],
      select: "",
      data: {
        natureTransaction: natureTransaction,
        netWeightUnit: weightUnit,
        grossWeightUnit: weightUnit,
        currencyCode: currencyCode,
        tariffCode: tariffCode,
        tariffStatistical: tariffStatistical,
        privilegeCode: privilegeCode,
        tariffSequence: tariffSequence,
        tariffImport: tariffImport,
        brandName: brandName,
        invClare: invClare,
        packageUnit: packageUnit,
        tradeTerm: tradeTerm,
        country: country,
        countryList: countryList,
      },
      form: {
        productCode: " ",
        tariffCode: " ",
        tariffStatistical: " ",
        privilege: " ",
        seq: " ",
        invQty: "0.000",
        invQtyUnit: "C62",
        netWeight: "0.000",
        netWeightUnit: "KGM",
        invAmountCurrencyCode: "USD",
      },
    };
  },
  methods: {
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
      this.$refs.form.validate();
    },
    changeCurrency(currency) {
      this.form.currencyRate = currency.rate;
    },
    changeInvCurrency(currency) {
      this.form.invAmountRate = currency.rate;
      this.calcMultipleAmountAndRate();
    },
    getInvAmountRate() {
      this.form.invAmountRate = this.data.currencyCode.find(
        (x) => x.id === this.form.invAmountCurrencyCode
      ).rate;
      this.calcMultipleAmountAndRate();
    },
    calcMultipleAmountAndRate() {
      this.form.invMultipleAmountRate =
        this.form.invAmount * this.form.invAmountRate;
      this.form.invMultipleAmountRate = calcNum.round(
        this.form.invMultipleAmountRate
      );
    },
    invAmountChange() {
      this.calcMultipleAmountAndRate();
      this.convertNumFormat();
    },

    convertNumFormat() {
      this.form.fobAssess = numFormat.getNonDigitNumFormat(this.form.fobAssess);
      this.form.deducted = numFormat.getNonDigitNumFormat(this.form.deducted);
      this.form.currencyRate = numFormat.getCurrencyFormat(
        this.form.currencyRate
      );
      this.form.additionPrice = numFormat.getNumberFormat(
        this.form.additionPrice
      );
      this.form.invQty = numFormat.getUnitFormat(this.form.invQty);
      this.form.declareQty = numFormat.getUnitFormat(this.form.declareQty);
      this.form.netWeight = numFormat.getUnitFormat(this.form.netWeight);
      this.form.grossWeight = numFormat.getUnitFormat(this.form.grossWeight);
      this.form.package = numFormat.getNonDigitNumFormat(this.form.package);
      this.form.qty2 = numFormat.getNonDigitNumFormat(this.form.qty2);
      this.form.invAmount = numFormat.getNumberFormat(this.form.invAmount);
    }
  },
};
</script>