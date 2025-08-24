<template>
  <div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <div class="flex flex-col md:flex-row pt-2 md:space-20">
        <div class="w-full md:w-3/5">
          <label class="font-13-400">วิธีการชำระเงิน</label>
          <v-combobox
            @keydown.enter="focusNext"
            :rules="[false]"
            required
            class="font-14-300"
            v-model="select1"
            :items="paymentMethod"
            item-text="name"
            item-id="id"
            dense
            solo
            label="กรุณาเลือก"
            color="base_ex"
            outlined
          ></v-combobox>

          <label class="font-13-400">วิธีการวางประกัน</label>
          <v-combobox
            @keydown.enter="focusNext"
            :rules="[false]"
            required
            class="font-14-300"
            v-model="select2"
            :items="items"
            dense
            solo
            label="กรุณาเลือก"
            color="base_ex"
            outlined
          ></v-combobox>

          <label class="font-13-400">ประเภทการวางประกัน</label>
          <v-combobox
            @keydown.enter="focusNext"
            class="font-14-300"
            v-model="select3"
            :items="items"
            dense
            solo
            label="กรุณาเลือก"
            color="base_ex"
            outlined
          ></v-combobox>
          <div class="pt-3">
            <label class="font-18-600">ธนาคารรับอนุญาตจากกรมศุลกากร</label>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4 pt-2">
            <div class="w-full md:w-1/4">
              <label class="font-13-400">ธนาคาร</label>
              <v-combobox
                @keydown.enter="focusNext"
                v-model="select4"
                :items="items"
                class="font-14-300"
                dense
                label="กรุณาเลือก"
                color="base_ex"
                outlined
                solo
              ></v-combobox>
            </div>
            <div class="w-full md:w-3/4">
              <br />
              <v-text-field
                @keydown.enter="focusNext"
                class="font-14-300"
                dense
                v-model="select5"
                :items="items"
                disabled
                label=""
                value="ธนาคาร ดอยช์แบงก์ เอจี สาขากรุงเทพ"
                color="base_ex"
                outlined
              ></v-text-field>
            </div>
          </div>

          <div class="mt-3">
            <v-card class="p-1">
              <div class="esap_error roud-lg p-4">
                <label class="font-18-600">ธนาคาร RGS</label>
                <div class="flex flex-col md:flex-row md:space-x-4 pt-1">
                  <div class="w-full md:w-1/4 pt-0">
                    <label class="font-13-400">ธนาคาร</label>
                    <v-combobox
                      @keydown.enter="focusNext"
                      solo
                      v-model="select6"
                      :items="items"
                      class="font-14-300"
                      dense
                      label="กรุณาเลือก"
                      color="base_ex"
                      outlined
                    ></v-combobox>
                  </div>
                  <div class="w-full md:w-3/4">
                    <br />
                    <v-text-field
                      @keydown.enter="focusNext"
                      disabled
                      v-model="select7"
                      :items="items"
                      dense
                      label=""
                      value="ธนาคาร ดอยช์แบงก์ เอจี สาขากรุงเทพ"
                      color="base_ex"
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
                <label class="font-18-600">ธนาคารผู้นำเข้า</label>
                <div class="pt-3">
                  <label class="font-13-400">เลขที่บัญชีผู้นำเข้า</label>
                  <v-combobox
                    @keydown.enter="focusNext"
                    class="font-14-300"
                    v-model="select8"
                    :items="items"
                    dense
                    label="กรุณาเลือก"
                    color="base_ex"
                    outlined
                    solo
                  ></v-combobox>

                  <label class="font-13-400">ชื่อบัญชี</label>
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="font-14-300"
                    dense
                    label="กรุณาเลือก"
                    v-model="select9"
                    :items="items"
                    color="base_ex"
                    solo
                    outlined
                  ></v-text-field>
                </div>

                <div class="flex flex-col md:flex-row md:space-x-4 pt-1">
                  <div class="w-full md:w-1/4">
                    <label class="font-13-400">ธนาคาร</label>
                    <v-combobox
                      @keydown.enter="focusNext"
                      dense
                      class="font-14-300"
                      v-model="select10"
                      :items="items"
                      label="ระบุข้อมูล..."
                      color="base_ex"
                      solo
                      outlined
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
                      value="ธนาคาร ดอยช์แบงก์ เอจี สาขากรุงเทพ"
                      color="base_ex"
                      solo
                      outlined
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
                      label="กรุณาเลือก"
                      solo
                      color="base_ex"
                      outlined
                    >
                    </v-text-field>
                  </div>
                  <div class="w-full md:w-2/3">
                    <label class="font-13-400">ยอดเงินที่ให้ตัด</label>
                    <v-text-field
                      @keydown.enter="focusNext"
                      class="font-14-300 label-align-right"
                      dense
                      label="0.00"
                      color="base_ex"
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
                    @keydown.enter="focusNext"
                    class="font-14-300"
                    dense
                    v-model="select11"
                    :items="items"
                    label="กรุณาเลือก"
                    color="base_ex"
                    solo
                    outlined
                  ></v-combobox>

                  <label class="font-13-400">ชื่อสัญญา</label>
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="font-14-300"
                    dense
                    label="ระบุข้อมูล..."
                    color="base_ex"
                    outlined
                    solo
                  >
                  </v-text-field>
                </div>

                <div class="flex flex-col md:flex-row md:space-x-4 pt-1">
                  <div class="w-full md:w-1/4">
                    <label class="font-13-400">ธนาคาร</label>
                    <v-combobox
                      @keydown.enter="focusNext"
                      class="font-14-300"
                      solo
                      v-model="select12"
                      :items="items"
                      dense
                      label="กรุณาเลือก"
                      color="base_ex"
                      outlined
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
                      value="ธนาคาร ดอยช์แบงก์ เอจี สาขากรุงเทพ"
                      color="base_ex"
                      outlined
                    ></v-text-field>
                  </div>
                </div>
                <div class="flex flex-col md:flex-row md:space-x-4 pt-1">
                  <div class="w-full md:w-1/3">
                    <label class="font-13-400">สาขา</label>
                    <v-text-field
                      @keydown.enter="focusNext"
                      dense
                      class="font-14-300"
                      label="000001"
                      solo
                      color="base_ex"
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
                      color="base_ex"
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
                    @keydown.enter="focusNext"
                    class="font-14-300"
                    dense
                    label="กรุณาเลือก"
                    solo
                    v-model="select13"
                    :items="items"
                    color="base_ex"
                    outlined
                  ></v-combobox>

                  <label class="font-13-400">ผู้รับเงินชดเชย</label>
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="font-14-300"
                    dense
                    label="ระบุข้อมูล..."
                    color="base_ex"
                    solo
                    outlined
                  >
                  </v-text-field>
                </div>

                <div class="flex flex-col md:flex-row md:space-x-4 pt-1">
                  <div class="w-full md:w-1/4">
                    <label class="font-13-400">ธนาคาร</label>
                    <v-combobox
                      @keydown.enter="focusNext"
                      class="font-14-300"
                      dense
                      v-model="select14"
                      :items="items"
                      label="กรุณาเลือก"
                      solo
                      color="base_ex"
                      outlined
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
                      value="ธนาคาร ดอยช์แบงก์ เอจี สาขากรุงเทพ"
                      color="base_ex"
                      solo
                      outlined
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
                      label="กรุณาเลือก"
                      color="base_ex"
                      outlined
                    >
                    </v-text-field>
                  </div>
                  <div class="w-full md:w-2/3">
                    <label class="font-13-400">ยอดเงินวางประกัน</label>
                    <v-text-field
                      @keydown.enter="focusNext"
                      class="font-14-300 label-align-right"
                      dense
                      label="0.00"
                      color="base_ex"
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
                    color="base_ex"
                    outlined
                  >
                  </v-text-field>

                  <label class="font-13-400">Bank Transaction No</label>
                  <v-text-field
                    @keydown.enter="focusNext"
                    dense
                    class="font-13-4003"
                    disabled
                    label="ระบุข้อมูล..."
                    color="base_ex"
                    solo
                    outlined
                  >
                  </v-text-field>

                  <label class="font-13-400">ยอดเงินหักในบัญชี</label>
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="label-align-right font-13-4003"
                    dense
                    disabled
                    label=" 0.00"
                    color="base_ex"
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
                    color="base_ex"
                    outlined
                    solo
                  >
                  </v-text-field>

                  <label class="font-13-400">Payment Status</label>
                  <v-text-field
                    @keydown.enter="focusNext"
                    dense
                    class="font-13-4003"
                    disabled
                    label="ระบุข้อมูล..."
                    color="base_ex"
                    outlined
                    solo
                  >
                  </v-text-field>

                  <label class="font-13-400">Payment Message</label>
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="font-13-4003"
                    dense
                    disabled
                    label="ระบุข้อมูล..."
                    color="base_ex"
                    outlined
                    solo
                  >
                  </v-text-field>
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
                color="base_ex"
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
                color="base_ex"
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
                color="base_ex"
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
                color="base_ex"
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
    </v-form>
  </div>
</template>

</script>

import paymentMethod from "@/data/payment-methods.json";
import nextFocus from "@/services/nextFocus.js";

export default {
  name: "Payment",
  async mounted() {
    await this.validate();
  },
  data() {
    return {
      valid: true,
      select: "",
      bankselect: "",
      items: [
        "ตัวอย่าง dropdown 01",
        "ตัวอย่าง dropdown 02",
        "ตัวอย่าง dropdown 03",
        "ตัวอย่าง dropdown 04"
      ],
      bank: ["032", "033", "034", "035"],
      data: {
        paymentMethod: paymentMethod,
        guaranteeMethod: [
          "A – วางประกันที่กรมศุลกากร",
          "H – วางประกันผ่านธนาคาร",
          "L – ไม่มีการวางประกัน"
        ],
        guaranteeType: [
          "C - เงินสด",
          "B - หนังสือธนาคารค้ำประกัน",
          "E - e-Guarantee Deposit",
          "O - RGS",
          "M – หนังสือราชการ"
        ]
      }
    };
  },
  methods: {
    async validate() {
      this.$refs.form.validate();
    },
    focusNext(event) { // enter and new focus (text input type).
      nextFocus.nextInput(event);
    },

  }
};
</script>
