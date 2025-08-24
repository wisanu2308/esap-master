<template>
  <div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <div class="flex flex-col md:flex-row pt-2 md:space-x-20">
        <div class="w-full md:w-3/5">
          <label class="font-13-400">วิธีการชำระเงิน</label>
          <v-combobox
          :rules="[false]"
          required
          outlined
          dense
          solo
          class="font-14-300"
          item-text="name"
          item-value="id"
          label="กรุณาเลือก"
          color="base"
          v-model="data.paymentMethod[0]"
          :items="data.paymentMethod"
          @keydown.enter="getIndexListDropDown"
          ></v-combobox>

          <label class="font-13-400">วิธีการวางประกัน</label>
          <v-combobox
            :rules="[false]"
            required
            class="font-14-300"
            v-model="data.guaranteeMethod[2]"
            :items="data.guaranteeMethod"
            item-text="name"
            item-value="id"
            dense
            solo
            label="กรุณาเลือก"
            color="base"
            outlined
            @keydown.enter="getIndexListDropDown"
          ></v-combobox>

          <label class="font-13-400">ประเภทการวางประกัน</label>
          <v-combobox
            class="font-14-300"
            dense
            solo
            :items="data.guaranteeType"
            v-model="data.guaranteeType[0]"
            label="กรุณาเลือก"
            item-text="name"
            item-value="id"
            color="base"
            outlined
            @keydown.enter="getIndexListDropDown"
          ></v-combobox>

          <div class="mt-3">
            <v-card class="p-1">
              <div class="esap_error roud-lg p-4">
                <label class="font-18-600">ธนาคาร RGS</label>
                <div class="flex flex-col md:flex-row md:space-x-4 pt-1">
                  <div class="w-full md:w-1/4 pt-0">
                    <label class="font-13-400">ธนาคาร</label>
                    <v-combobox
                      class="font-14-300"
                      solo
                      dense
                      outlined
                      label="กรุณาเลือก"
                      color="base"
                      maxLength="3"
                      item-text="id"
                      item-value="id"
                      :items="data.bankCode"
                      @change="changeBankRGS($event)"
                      @keydown.enter="getIndexListDropDown"
                    ></v-combobox>
                  </div>
                  <div class="w-full md:w-3/4">
                    <br />
                    <v-text-field
                      class="font-14-300"
                      disabled
                      dense
                      label=""
                      color="base"
                      outlined
                      @keydown.enter="focusNext"
                      v-model="form.bankRGS"
                    ></v-text-field>
                  </div>
                </div>
              </div>
            </v-card>
          </div>

          <div class="pt-6">
            <v-card class="p-1">
              <div class="esap_error roud-lg p-4">
                <label class="font-15-500">ธนาคารรับอนุญาตจากกรมศุลกากร</label>
                <div class="flex flex-col md:flex-row md:space-x-4 pt-4">
                  <div class="w-full md:w-1/2">
                    <label class="font-13-400">ธนาคาร</label>
                    <v-combobox
                      class="font-14-300"
                      solo
                      dense
                      outlined
                      color="base"
                      maxLength="3"
                      label="กรุณาเลือก"
                      item-text="id"
                      item-value="id"
                      :items="data.bankCode"
                      @change="changeBankCustomerDepart($event)"
                      @keydown.enter="getIndexListDropDown"
                    ></v-combobox>
                  </div>
                  <div class="w-full md:w-1/2">
                    <br />
                    <v-text-field
                      @keydown.enter="focusNext"
                      dense
                      label=""
                      disabled
                      class="font-14-300"
                      color="base"
                      outlined
                      v-model="form.bankCustomsDepartment"
                    ></v-text-field>
                  </div>
                </div>
              </div>
            </v-card>
          </div>

          <div class="mt-2">
            <v-card class="p-1">
              <div class="esap_error roud-lg p-4">
                <label class="font-18-600">ธนาคารผู้นำเข้า</label>
                <div class="pt-3">
                  <label class="font-13-400">เลขที่บัญชีผู้นำเข้า</label>
                  <v-combobox
                    class="font-14-300"
                    dense
                    outlined
                    solo
                    maxLength="35"
                    label="ระบุข้อมูล"
                    color="base"
                    v-model="select8"
                    :items="items"
                    @keydown.enter="getIndexListDropDown"
                  ></v-combobox>

                  <label class="font-13-400">ชื่อบัญชี</label>
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="font-14-300"
                    dense
                    label="กรุณาเลือก"
                    v-model="select9"
                    :items="items"
                    color="base"
                    maxLength="70"
                    solo
                    outlined
                  ></v-text-field>
                </div>

                <div class="flex flex-col md:flex-row md:space-x-4 pt-1">
                  <div class="w-full md:w-1/4">
                    <label class="font-13-400">ธนาคาร</label>
                    <v-combobox
                      class="font-14-300"
                      solo
                      outlined
                      dense
                      maxLength="3"
                      label="กรุณาเลือก"
                      color="base"
                      item-text="id"
                      item-value="id"
                      :items="data.bankCode"
                      @change="changeBankImport($event)"
                      @keydown.enter="getIndexListDropDown"
                    ></v-combobox>
                  </div>
                  <div class="w-full md:w-3/4">
                    <br />
                    <v-text-field
                      @keydown.enter="focusNext"
                      class="font-14-300"
                      dense
                      disabled
                      label=""
                      color="base"
                      solo
                      outlined
                      v-model="form.bankImport"
                    ></v-text-field>
                  </div>
                </div>
                <div class="flex flex-col md:flex-row md:space-x-4 pt-1">
                  <div class="w-full md:w-1/3">
                    <label class="font-13-400">สาขา</label>
                    <v-text-field
                      @keydown.enter="focusNext"
                      class="font-14-300"
                      dense
                      label="000001"
                      solo
                      color="base"
                      maxLength="6"
                      outlined
                    ></v-text-field>
                  </div>
                  <div class="w-full md:w-2/3">
                    <label class="font-13-400">ยอดเงินที่ให้ตัด</label>
                    <v-text-field
                      @keydown.enter="focusNext"
                      class="font-14-300 label-align-right"
                      dense
                      label="0.00"
                      color="base"
                      solo
                      outlined
                    ></v-text-field>
                  </div>
                </div>
              </div>
            </v-card>
          </div>

          <div class="mt-2">
            <v-card class="p-1">
              <div class="esap_error roud-lg p-4">
                <label class="font-18-600">ธนาคารค้ำประกัน</label>
                <div class="pt-3">
                  <label class="font-13-400"
                    >เลขสัญญาหนังสือธนาคารค้ำประกัน</label
                  >
                  <v-combobox
                    maxLength="35"
                    class="font-14-300"
                    dense
                    solo
                    outlined
                    v-model="select11"
                    :items="items"
                    label="กรุณาเลือก"
                    color="base"
                    @keydown.enter="getIndexListDropDown"
                  ></v-combobox>

                  <label class="font-13-400">ชื่อสัญญา</label>
                  <v-text-field
                    maxLength="70"
                    @keydown.enter="focusNext"
                    class="font-14-300"
                    dense
                    label="ระบุข้อมูล..."
                    color="base"
                    outlined
                    solo
                  ></v-text-field>
                </div>

                <div class="flex flex-col md:flex-row md:space-x-4 pt-1">
                  <div class="w-full md:w-1/4">
                    <label class="font-13-400">ธนาคาร</label>
                    <v-combobox
                      class="font-14-300"
                      solo
                      outlined
                      dense
                      label="กรุณาเลือก"
                      maxLength="3"
                      color="base"
                      item-text="id"
                      item-value="id"
                      v-model="select12"
                      :items="data.bankCode"
                      @change="changeBankGuarantee($event)"
                      @keydown.enter="getIndexListDropDown"
                    ></v-combobox>
                  </div>
                  <div class="w-full md:w-3/4">
                    <br />
                    <v-text-field
                      @keydown.enter="focusNext"
                      dense
                      disabled
                      class="font-14-300"
                      label=""
                      solo
                      v-model="form.bankGuarantee"
                      color="base"
                      outlined
                    ></v-text-field>
                  </div>
                </div>
                <div class="flex flex-col md:flex-row md:space-x-4 pt-1">
                  <div class="w-full md:w-1/3">
                    <label class="font-13-400">สาขา</label>
                    <v-text-field
                      @keydown.enter="focusNext"
                      maxLength="6"
                      dense
                      class="font-14-300"
                      label="000001"
                      solo
                      color="base"
                      outlined
                    ></v-text-field>
                  </div>
                  <div class="w-full md:w-2/3">
                    <label class="font-13-400">ยอดเงินวางประกัน</label>
                    <v-text-field
                      @keydown.enter="focusNext"
                      dense
                      label="0.00"
                      class="font-14-300 label-align-right"
                      solo
                      color="base"
                      outlined
                    ></v-text-field>
                  </div>
                </div>
              </div>
            </v-card>
          </div>

          <div class="mt-2">
            <v-card class="p-1">
              <div class="esap_error roud-lg p-4">
                <label class="font-18-600">ธนาคารบัญชีเคบิตบัตรภาษี</label>
                <div class="pt-3">
                  <label class="font-13-400">เลขทะเบียนผู้รับเงินชดเชย</label>
                  <v-combobox
                    class="font-14-300"
                    dense
                    label="กรุณาเลือก"
                    solo
                    v-model="select13"
                    :items="items"
                    maxLength="35"
                    color="base"
                    outlined
                    @keydown.enter="getIndexListDropDown"
                  ></v-combobox>

                  <label class="font-13-400">ผู้รับเงินชดเชย</label>
                  <v-text-field
                    class="font-14-300"
                    maxLength="70"
                    dense
                    label="ระบุข้อมูล..."
                    color="base"
                    solo
                    outlined
                    @keydown.enter="focusNext"
                  ></v-text-field>
                </div>

                <div class="flex flex-col md:flex-row md:space-x-4 pt-1">
                  <div class="w-full md:w-1/4">
                    <label class="font-13-400">ธนาคาร</label>
                    <v-combobox
                      class="font-14-300"
                      dense
                      label="กรุณาเลือก"
                      solo
                      maxLength="3"
                      color="base"
                      outlined
                      :items="data.bankCode"
                      item-text="id"
                      item-value="id"
                      @change="changeBankCredit($event)"
                      @keydown.enter="getIndexListDropDown"
                    ></v-combobox>
                  </div>
                  <div class="w-full md:w-3/4">
                    <br />
                    <v-text-field
                      @keydown.enter="focusNext"
                      class="font-14-300"
                      dense
                      disabled
                      label=""
                      color="base"
                      solo
                      outlined
                      v-model="form.bankCredit"
                    ></v-text-field>
                  </div>
                </div>
                <div class="flex flex-col md:flex-row md:space-x-4 pt-1">
                  <div class="w-full md:w-1/3">
                    <label class="font-13-400">สาขา</label>
                    <v-text-field
                      @keydown.enter="focusNext"
                      class="font-14-300"
                      dense
                      solo
                      label="000001"
                      color="base"
                      maxLength="6"
                      outlined
                    ></v-text-field>
                  </div>
                  <div class="w-full md:w-2/3">
                    <label class="font-13-400">ยอดเงินวางประกัน</label>
                    <v-text-field
                      @keydown.enter="focusNext"
                      class="font-14-300 label-align-right"
                      dense
                      label="0.00"
                      color="base"
                      outlined
                      solo
                    ></v-text-field>
                  </div>
                </div>
              </div>
            </v-card>
          </div>

          <div class="mt-2">
            <v-card class="p-1">
              <div class="esap_error roud-lg p-4">
                <label class="font-18-600">E-Payment</label>
                <div class="pt-3">
                  <label class="font-13-400">เลขที่ใบเสร็จ</label>
                  <v-text-field
                    @keydown.enter="focusNext"
                    disabled
                    dense
                    class="font-13-4003"
                    solo
                    label="ระบุข้อมูล.."
                    color="base"
                    outlined
                  ></v-text-field>

                  <label class="font-13-400">Bank Transaction No</label>
                  <v-text-field
                    @keydown.enter="focusNext"
                    dense
                    class="font-13-4003"
                    disabled
                    label="ระบุข้อมูล..."
                    color="base"
                    solo
                    outlined
                  ></v-text-field>

                  <label class="font-13-400">ยอดเงินหักในบัญชี</label>
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="label-align-right font-13-4003"
                    dense
                    disabled
                    label=" 0.00"
                    color="base"
                    solo
                    outlined
                  ></v-text-field>

                  <label class="font-13-400">Payment Type</label>
                  <v-text-field
                    @keydown.enter="focusNext"
                    dense
                    class="font-13-4003"
                    disabled
                    label="ระบุข้อมูล..."
                    color="base"
                    outlined
                    solo
                  ></v-text-field>

                  <label class="font-13-400">Payment Status</label>
                  <v-text-field
                    @keydown.enter="focusNext"
                    dense
                    class="font-13-4003"
                    disabled
                    label="ระบุข้อมูล..."
                    color="base"
                    outlined
                    solo
                  ></v-text-field>

                  <label class="font-13-400">Payment Message</label>
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="font-13-4003"
                    dense
                    disabled
                    label="ระบุข้อมูล..."
                    color="base"
                    outlined
                    solo
                  ></v-text-field>
                </div>
              </div>
            </v-card>
          </div>
        </div>

        <div class="w-full md:w-2/5">
          <div class="w-full">
            <label class="font-13-400">ราคา CIF เงินต่างประเทศ</label>
            <div class="flex flex-col md:flex-row w-full">
              <v-text-field
                @keydown.enter="focusNext"
                disabled
                class="label-align-right font-14-4002"
                dense
                label="0.00"
                color="base"
                outlined
                solo
              ></v-text-field>
              <v-btn
                class="ml-3 rounded-lg font-14-4004"
                depressed
                color="#EFF2F7"
              >
                USD</v-btn
              >
            </div>
          </div>

          <div class="w-full">
            <label class="font-13-400">ราคา CIF เงินบาท</label>
            <div class="flex flex-col md:flex-row w-full">
              <v-text-field
                @keydown.enter="focusNext"
                disabled
                class="label-align-right font-14-4002"
                dense
                label="0.00"
                color="base"
                outlined
                solo
              ></v-text-field>
              <v-btn
                class="ml-3 rounded-lg font-14-4004"
                depressed
                color="#EFF2F7"
              >
                THB</v-btn
              >
            </div>
          </div>

          <div class="w-full">
            <label class="font-13-400">ค่าภาษีอากรรวม</label>
            <div class="flex flex-col md:flex-row w-full">
              <v-text-field
                @keydown.enter="focusNext"
                disabled
                class="label-align-right font-14-4002"
                dense
                label="0.00"
                color="base"
                solo
                outlined
              ></v-text-field>
              <v-btn
                class="ml-3 rounded-lg font-14-4004"
                depressed
                color="#EFF2F7"
              >
                THB</v-btn
              >
            </div>
          </div>

          <div class="w-full">
            <label class="font-13-400">เงินประกันรวม</label>
            <div class="flex flex-col md:flex-row w-full">
              <v-text-field
                @keydown.enter="focusNext"
                disabled
                class="label-align-right font-14-4002"
                dense
                label="0.00"
                solo
                color="base"
                outlined
              ></v-text-field>
              <v-btn
                class="ml-3 rounded-lg font-14-4004"
                depressed
                color="#EFF2F7"
              >
                THB</v-btn
              >
            </div>
          </div>
        </div>
      </div>
      <p id="btnFocusOut"></p>
    </v-form>
  </div>
</template>

<script>
import paymentMethod from "@/data/payment-method.json";
import guaranteeMethod from "@/data/guarantee-method.json";
import guaranteeType from "@/data/guarantee-type.json";
import bankCode from "@/data/bank-code.json";

// services
import nextFocus from "@/services/nextFocus.js"

export default {
  name: "Payment",
  async mounted() {
    await this.validate();
  },
  data() {
    return {
      countState: 1,
      nextIndex: 0,
      currentIndex: 0,
      valid: true,
      select: "",
      bankselect: "",
      form: {
        bankRGS: null,
        bankCustomsDepartment: null,
        bankImport: null,
        bankGuarantee: null,
        bankCredit: null
      },
      items: [
        "ตัวอย่าง dropdown 01",
        "ตัวอย่าง dropdown 02",
        "ตัวอย่าง dropdown 03",
        "ตัวอย่าง dropdown 04",
      ],
      bank: ["032", "033", "034", "035"],
      data: {
        paymentMethod: paymentMethod,
        guaranteeMethod: guaranteeMethod,
        guaranteeType: guaranteeType,
        bankCode: bankCode
      },
    };
  },
  props: {},
  methods: {
    async validate() {
      this.$refs.form.validate();
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
    changeBankRGS(selected) {
      this.form.bankRGS = this.data.bankCode.find(x => x.id == +selected.id).name;
    },
    changeBankCustomerDepart(selected) {
      this.form.bankCustomsDepartment = this.data.bankCode.find(x => x.id == +selected.id).name;
    },
    changeBankImport(selected) {
      this.form.bankImport = this.data.bankCode.find(x => x.id == +selected.id).name;
    },
    changeBankGuarantee(selected) {
      this.form.bankGuarantee = this.data.bankCode.find(x => x.id == +selected.id).name;
    },
    changeBankCredit(selected) {
      this.form.bankCredit = this.data.bankCode.find(x => x.id == +selected.id).name;
    },
  },
};
</script>