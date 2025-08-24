<template>
  <div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <div class="flex flex-row">
        <div class="flex flex-col md:w-3/4">
          <div class="w-full">
            <label class="font-13-400">วิธีการชำระเงิน</label>
            <v-combobox
              
              @keydown.enter="getIndexListDropDown"
              v-model="data.paymentMethod[2]"
              :items="data.paymentMethod"
              item-text="name"
              item-id="id"
              :rules="[false]"
              required
              class="font-14-300"
              solo
              dense
              label="กรุณาเลือก"
              color="base_ex"
              outlined
            ></v-combobox>
            <label class="font-13-400">วิธีการวางประกัน</label>
            <v-combobox
              
              @keydown.enter="getIndexListDropDown"
              v-model="data.guaranteeMethod[2]"
              :items="data.guaranteeMethod"
              item-text="name"
              item-id="id"
              :rules="[false]"
              required
              class="font-14-300"
              solo
              dense
              label="กรุณาเลือก"
              color="base_ex"
              outlined
            ></v-combobox>
            <label class="font-13-400">ประเภทการวางประกัน</label>
            <v-combobox
              
              @keydown.enter="getIndexListDropDown"
              :items="data.guaranteeType"
              item-text="name"
              item-id="id"
              class="font-14-300"
              solo
              dense
              label="กรุณาเลือก"
              color="base_ex"
              outlined
            ></v-combobox>
          </div>
        </div>
        <div class="md:w-1/2">
          <div class="flex flex-col ml-5">
            <div class="flex flex-row">
              <div class="w-5/6">
                <label class="font-13-400 ml-1">ราคา FOB เงินต่างประเทศ</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300 label-align-right"
                  :rules="[false]"
                  required
                  solo
                  flat
                  dense
                  outlined
                  color="base_ex"
                  placeholder="0"
                  v-model="form.fobForeign"
                  @change="convertNumFormat"
                >
                </v-text-field>
              </div>
              <div class="ml-3">
                <label class="font-13-400">สกุลเงิน</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  disabled
                  dense
                  label=""
                  value="AUD"
                  color="base_ex"
                  class="font-14-300"
                  solo
                  outlined
                ></v-text-field>
              </div>
            </div>

            <div class="flex flex-col">
              <div class="flex flex-row">
                <div class="w-5/6">
                  <label class="font-13-400 ml-1">ราคา FOB เงินบาท</label>
                  <v-text-field
                    @keydown.enter="focusNext"
                    :rules="[false]"
                    required
                    dense
                    solo
                    color="base_ex"
                    class="font-14-300 label-align-right"
                    outlined
                    placeholder="0"
                    v-model="form.fobBath"
                    @change="convertNumFormat"
                  >
                  </v-text-field>
                </div>
                <div class="ml-3">
                  <label class="font-13-400">สกุลเงิน</label>
                  <v-text-field
                    @keydown.enter="focusNext"
                    disabled
                    dense
                    label=""
                    value="THB"
                    solo
                    color="base_ex"
                    class="font-14-300"
                    outlined
                  ></v-text-field>
                </div>
              </div>
            </div>

            <div class="flex flex-col">
              <div class="flex flex-row">
                <div class="w-5/6">
                  <label class="font-13-400 ml-1">ค่าภาษีอากรรวม</label>
                  <v-text-field
                    @keydown.enter="focusNext"
                    dense
                    disabled
                    type="number"
                    hide-spin-buttons
                    label=""
                    class="font-14-300 label-align-right disable_base_ex"
                    value="0.00"
                    :rules="[(v) => !!v && '']"
                    required
                    color="base_ex"
                    solo
                    outlined
                    placeholder="0"
                  ></v-text-field>
                </div>
                <div class="ml-3">
                  <label class="font-13-400">สกุลเงิน</label>
                  <v-text-field
                    @keydown.enter="focusNext"
                    dense
                    disabled
                    class="font-14-300 align-center"
                    label=""
                    solo
                    value="THB"
                    color="base_ex"
                    outlined
                  ></v-text-field>
                </div>
              </div>
            </div>

            <div class="flex flex-col">
              <div class="flex flex-row">
                <div class="w-5/6">
                  <label class="font-13-400 ml-1">เงินประกันรวม</label>
                  <v-text-field
                    @keydown.enter="focusNext"
                    dense
                    type="number"
                    hide-spin-buttons
                    disabled
                    class="font-14-300 label-align-right disable_base_ex"
                    label=""
                    value="0.00"
                    :rules="[false]"
                    required
                    solo
                    color="base_ex"
                    outlined
                  >
                  </v-text-field>
                </div>
                <div class="ml-3">
                  <label class="font-13-400">สกุลเงิน</label>
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="font-14-300"
                    dense
                    label=""
                    value="THB"
                    disabled
                    solo
                    color="base_ex"
                    outlined
                  ></v-text-field>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col md:space-x-20">
        <div class="w-full md:w-3/5">
          <div style="margin-top: -45px">
            <v-card class="p-1">
              <div class="roud-lg p-4" style="background-color: #eff2f7">
                <label class="font-18-600">ธนาคาร RGS</label>
                <div class="flex flex-col md:flex-row md:space-x-4 pt-4">
                  <div>
                    <label class="font-13-400">ธนาคาร</label>
                    <v-combobox
                      :items="data.bankCode"
                      item-text="id"
                      item-id="id"
                      class="font-14-300"
                      style="width: 148px !important"
                      solo
                      dense
                      color="base_ex"
                      outlined
                      maxLength="3"
                      @change="
                        
                        changeBankRgs($event);
                      "
                      @keydown.enter="getIndexListDropDown"
                      v-model="form.bankRgs"
                    >
                    </v-combobox>
                  </div>
                  <div class="w-full">
                    <br />
                    <v-text-field
                      @keydown.enter="focusNext"
                      dense
                      class="font-14-300"
                      disabled
                      solo
                      label=""
                      v-model="form.bankRgsName"
                      color="base_ex"
                      outlined
                    ></v-text-field>
                  </div>
                </div>
              </div>
            </v-card>
          </div>

          <div style="margin-top: 8px">
            <v-card class="p-1">
              <div class="roud-lg p-4" style="background-color: #eff2f7">
                <label class="font-18-600">ธนาคารรับอนุญาตจากกรมศุลกากร</label>
                <div class="flex flex-col md:flex-row md:space-x-4 pt-4">
                  <div>
                    <label class="font-13-400">ธนาคาร</label>
                    <v-combobox
                      class="font-14-300"
                      style="width: 148px !important"
                      solo
                      dense
                      color="base_ex"
                      outlined
                      maxLength="3"
                      :items="data.bankCode"
                      item-text="id"
                      item-value="id"
                      v-model="form.bank1"
                      @change="
                        
                        changeBank1($event);
                      "
                      @keydown.enter="getIndexListDropDown"
                    >
                    </v-combobox>
                  </div>
                  <div class="w-full">
                    <br />
                    <v-text-field
                      @keydown.enter="focusNext"
                      dense
                      label=""
                      dolo
                      disabled
                      class="font-14-300"
                      color="base_ex"
                      outlined
                      v-model="form.bankName1"
                    ></v-text-field>
                  </div>
                </div>
              </div>
            </v-card>
          </div>

          <div style="margin-top: 8px">
            <v-card class="p-1">
              <div class="roud-lg p-4" style="background-color: #eff2f7">
                <label class="font-18-600">ธนาคารผู้ส่งออก</label>
                <div class="pt-4">
                  <label class="font-13-400">เลขที่บัญชีผู้ส่งออก</label>
                  <v-combobox
                    
                    @keydown.enter="getIndexListDropDown"
                    value="032"
                    :items="bank"
                    class="font-14-300"
                    solo
                    dense
                    label="กรุณาเลือก"
                    color="base_ex"
                    outlined
                    maxLength="35"
                  ></v-combobox>

                  <label class="font-13-400">ชื่อบัญชี</label>
                  <v-text-field
                    @keydown.enter="focusNext"
                    dense
                    solo
                    class="font-14-300"
                    label="ระบุข้อมูล"
                    color="base_ex"
                    outlined
                    maxLength="70"
                  >
                  </v-text-field>
                </div>

                <div class="flex flex-col md:flex-row md:space-x-4 pt-4">
                  <div>
                    <label class="font-13-400">ธนาคาร</label>
                    <v-combobox
                      :items="data.bankCode"
                      item-text="id"
                      item-id="id"
                      class="font-14-300"
                      style="width: 98px !important"
                      solo
                      dense
                      v-model="form.bank2"
                      color="base_ex"
                      outlined
                      maxLength="3"
                      @change="
                        
                        changeBank2($event);
                      "
                      @keydown.enter="getIndexListDropDown"
                    >
                    </v-combobox>
                  </div>
                  <div class="w-full">
                    <br />
                    <v-text-field
                      @keydown.enter="focusNext"
                      dense
                      label=""
                      dolo
                      disabled
                      class="font-14-300"
                      v-model="form.bankName2"
                      color="base_ex"
                      outlined
                    ></v-text-field>
                  </div>
                </div>
                <div class="flex flex-col md:flex-row md:space-x-4 pt-4">
                  <div class="w-full md:w-1/3">
                    <label class="font-13-400">สาขา</label>
                    <v-text-field
                      @keydown.enter="focusNext"
                      dense
                      label="ระบุข้อมูล"
                      class="font-14-300"
                      style="width: 230px !important"
                      color="base_ex"
                      solo
                      outlined
                      maxLength="6"
                    >
                    </v-text-field>
                  </div>
                  <div class="w-full md:w-2/3">
                    <label class="font-13-400 ml-1">ยอดเงินที่ให้ตัด</label>
                    <v-text-field
                      @keydown.enter="focusNext"
                      dense
                      solo
                      label="0.00"
                      class="label-align-right font-14-300"
                      style="margin-left: -5px"
                      color="base_ex"
                      outlined
                      type="number"
                      hide-spin-buttons
                    >
                    </v-text-field>
                  </div>
                </div>
              </div>
            </v-card>
          </div>

          <div style="margin-top: 8px">
            <v-card class="p-1">
              <div class="roud-lg p-4" style="background-color: #eff2f7">
                <label class="font-18-600">ธนาคารค้ำประกัน</label>
                <div class="pt-4">
                  <label class="font-13-400"
                    >เลขสัญญาหนังสือธนาคารค้ำประกัน</label
                  >
                  <v-combobox
                    
                    @keydown.enter="getIndexListDropDown"
                    value="032"
                    :items="bank"
                    class="font-14-300"
                    solo
                    dense
                    label="กรุณาเลือก"
                    color="base_ex"
                    outlined
                    maxLength="35"
                  ></v-combobox>

                  <label class="font-13-400">ชื่อสัญญา</label>
                  <v-text-field
                    @keydown.enter="focusNext"
                    solo
                    dense
                    class="font-14-300"
                    label="ระบุข้อมูล"
                    color="base_ex"
                    outlined
                    maxLength="70"
                  >
                  </v-text-field>
                </div>

                <div class="flex flex-col md:flex-row md:space-x-4 pt-4">
                  <div>
                    <label class="font-13-400">ธนาคาร</label>
                    <v-combobox
                      :items="data.bankCode"
                      item-text="id"
                      item-id="id"
                      class="font-14-300"
                      style="width: 148px !important"
                      solo
                      dense
                      v-model="form.bank3"
                      color="base_ex"
                      outlined
                      maxLength="3"
                      @change="
                        
                        changeBank3($event);
                      "
                      @keydown.enter="getIndexListDropDown"
                    >
                    </v-combobox>
                  </div>
                  <div class="w-full">
                    <br />
                    <v-text-field
                      @keydown.enter="focusNext"
                      dense
                      label=""
                      dolo
                      disabled
                      class="font-14-300"
                      v-model="form.bankName3"
                      color="base_ex"
                      outlined
                    ></v-text-field>
                  </div>
                </div>
                <div class="flex flex-col md:flex-row md:space-x-4 pt-4">
                  <div class="w-full md:w-1/3">
                    <label class="font-13-400">สาขา</label>
                    <v-text-field
                      @keydown.enter="focusNext"
                      dense
                      solo
                      label="ระบุข้อมูล"
                      color="base_ex"
                      class="font-14-300"
                      outlined
                      maxLength="6"
                    >
                    </v-text-field>
                  </div>
                  <div class="w-full md:w-2/3">
                    <label class="font-13-400">ยอดเงินวางประกัน</label>
                    <v-text-field
                      @keydown.enter="focusNext"
                      dense
                      solo
                      value="0.00"
                      class="label-align-right font-14-300"
                      style="margin-left: -5px"
                      color="base_ex"
                      outlined
                      type="number"
                      hide-spin-buttons
                    >
                    </v-text-field>
                  </div>
                </div>
              </div>
            </v-card>
          </div>

          <div style="margin-top: 8px">
            <v-card class="p-1">
              <div class="roud-lg p-4" style="background-color: #eff2f7">
                <label class="font-18-600">ธนาคารบัญชีเคบิตบัตรภาษี</label>
                <div class="pt-4">
                  <label class="font-13-400">เลขทะเบียนผู้รับเงินชดเชย</label>
                  <v-combobox
                    
                    @keydown.enter="getIndexListDropDown"
                    value="032"
                    :items="bank"
                    class="font-14-300"
                    solo
                    dense
                    label="กรุณาเลือก"
                    color="base_ex"
                    outlined
                    maxLength="17"
                  ></v-combobox>

                  <label class="font-13-400">ชื่อผู้รับเงินชดเชย</label>
                  <v-text-field
                    @keydown.enter="focusNext"
                    dense
                    class="font-14-300"
                    label="ระบุข้อมูล"
                    color="base_ex"
                    outlined
                    solo
                    maxLength="70"
                  >
                  </v-text-field>
                </div>

                <div class="flex flex-col md:flex-row md:space-x-4 pt-4">
                  <div>
                    <label class="font-13-400">ธนาคาร</label>
                    <v-combobox
                      :items="data.bankCode"
                      item-text="id"
                      item-id="id"
                      class="font-14-300"
                      style="width: 148px !important"
                      solo
                      dense
                      color="base_ex"
                      outlined
                      maxLength="3"
                      v-model="form.bank4"
                      @change="
                        
                        changeBank4($event);
                      "
                      @keydown.enter="getIndexListDropDown"
                    >
                    </v-combobox>
                  </div>
                  <div class="w-full">
                    <br />
                    <v-text-field
                      @keydown.enter="focusNext"
                      dense
                      label=""
                      dolo
                      disabled
                      class="font-14-300"
                      color="base_ex"
                      outlined
                      v-model="form.bankName4"
                    ></v-text-field>
                  </div>
                </div>
                <div class="flex flex-col md:flex-row md:space-x-4 pt-4">
                  <div class="w-full md:w-1/3">
                    <label class="font-13-400">สาขา</label>
                    <v-text-field
                      @keydown.enter="focusNext"
                      dense
                      solo
                      label="ระบุข้อมูล"
                      class="font-14-300"
                      color="base_ex"
                      outlined
                      maxLength="6"
                    >
                    </v-text-field>
                  </div>
                  <div class="w-full md:w-2/3">
                    <label class="label-align-right font-13-400"
                      >ยอดวงเงินชดเชย</label
                    >
                    <v-text-field
                      @keydown.enter="focusNext"
                      dense
                      label="0.00"
                      class="label-align-right font-14-300"
                      style="margin-left: -5px"
                      color="base_ex"
                      outlined
                      solo
                      type="number"
                      hide-spin-buttons
                    ></v-text-field>
                  </div>
                </div>
              </div>
            </v-card>
          </div>
        </div>

        <div class="w-full md:w-2/5"></div>
      </div>
    </v-form>
  </div>
</template>

<script>
import paymentMethod from "@/data/payment-method.json";
import guaranteeMethod from "@/data/guarantee-method.json";
import guaranteeType from "@/data/guarantee-type.json";
import bankCode from "@/data/bank-code.json";

// service
import numFormat from "@/services/numFormat.js";
import nextFocus from "@/services/nextFocus.js";

export default {
  name: "Payment",
  async mounted() {
    await this.validate();
  },
  data() {
    return {
      valid: true,
      countState: 1,
      select: "",
      bankselect: "",
      items: [
        "ตัวอย่าง dropdown 01",
        "ตัวอย่าง dropdown 02",
        "ตัวอย่าง dropdown 03",
        "ตัวอย่าง dropdown 04",
      ],
      bank: ["004", "025", "018", "032"],
      data: {
        paymentMethod: paymentMethod,
        guaranteeMethod: guaranteeMethod,
        guaranteeType: guaranteeType,
        bankCode: bankCode,
      },
      form: {
        bankRgs: "004",
        bankRgsName: "ธนาคารกสิกรไทย จำกัด(มหาชน)",
        bank1: "004",
        bank2: "004",
        bank3: "004",
        bank4: "004",
        bank5: "004",
        bankName1: "ธนาคารกสิกรไทย จำกัด(มหาชน)",
        bankName2: "ธนาคารกสิกรไทย จำกัด(มหาชน)",
        bankName3: "ธนาคารกสิกรไทย จำกัด(มหาชน)",
        bankName4: "ธนาคารกสิกรไทย จำกัด(มหาชน)",
        bankName5: "ธนาคารกสิกรไทย จำกัด(มหาชน)",
        fobForeign: "2,359709.98",
        fobBath: "73,109,478.50",
      },
    };
  },
  props: {},
  methods: {
    changeBankRgs(selected) {
      this.form.bankRgsName = this.data.bankCode.find(
        (x) => x.id === selected.id
      ).name;
    },
    changeBank1(selected) {
      this.form.bankName1 = this.data.bankCode.find(
        (x) => x.id === selected.id
      ).name;
    },
    changeBank2(selected) {
      this.form.bankName2 = this.data.bankCode.find(
        (x) => x.id === selected.id
      ).name;
    },
    changeBank3(selected) {
      this.form.bankName3 = this.data.bankCode.find(
        (x) => x.id === selected.id
      ).name;
    },
    changeBank4(selected) {
      this.form.bankName4 = this.data.bankCode.find(
        (x) => x.id === selected.id
      ).name;
    },
    async validate() {
      this.$refs.form.validate();
    },
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
    convertNumFormat() {
      this.form.fobBath = numFormat.getNumberFormat(this.form.fobBath);
      this.form.fobForeign = numFormat.getNumberFormat(this.form.fobForeign);
    },
  },
};
</script>

<style scoped>
.v-application .error--text,
::v-deep(i.v-icon.notranslate.mdi.mdi-menu-down.theme--light.error--text) {
  color: #bb6bd9 !important;
}

/* disable and border box */
::v-deep(.disable_base_ex.theme--light.v-text-field--outlined:not(.v-input--is-focused).v-input--is-disabled
    > .v-input__control
    > .v-input__slot
    fieldset) {
  color: #bb6bd9 !important;
  border-width: revert;
}
</style>

  