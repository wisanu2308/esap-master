<template>
  <div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <div class="flex flex-col md:flex-row pt-8 md:space-x-20">
        <div class="w-3/5">
          <label class="text-sm font-semibold">วิธีการชำระเงิน</label>
          <v-combobox
            dense
            label=""
            value="A  =  ชำระที่กรมศุลกากร"
            color="base"
            outlined
            @keydown.enter="focusNext"
          ></v-combobox>

          <label class="text-sm font-semibold">วิธีการวางประกัน</label>
          <v-combobox
            dense
            label=""
            value="L   =  ไม่มีการวางประกัน"
            color="base"
            outlined
            @keydown.enter="focusNext" 
          ></v-combobox>

          <label class="text-sm font-semibold">ประเภทการวางประกัน</label>
          <v-combobox
            dense
            label=""
            value="C  =  เงินสด"
            color="base"
            outlined
            @keydown.enter="focusNext" 
          ></v-combobox>

          <label class="text-xl font-semibold"
            >ธนาคารรับอนุญาตจากกรมศุลกากร</label
          >
          <div class="flex flex-col md:flex-row space-x-4 pt-4">
            <div class="w-1/2">
              <label class="text-sm font-semibold">ธนาคาร</label>
              <v-combobox
                dense
                label=""
                value="032"
                color="base"
                outlined
                @keydown.enter="focusNext" 
              ></v-combobox>
            </div>
            <div class="w-1/2">
              <br />
              <v-text-field @keydown.enter="focusNext" 
                dense
                label=""
                value="ธนาคาร ดอยช์แบงก์ เอจี สาขากรุงเทพ"
                color="base"
                outlined
              ></v-text-field>
            </div>
          </div>

          <div>
            <v-card class="p-2">
              <div class="bg-gray-100 roud-lg p-4">
                <label class="text-xl font-semibold">ธนาคาร RGS</label>
                <div class="flex flex-col md:flex-row space-x-4 pt-4">
                  <div class="w-1/2">
                    <label class="text-base font-semibold">ธนาคาร</label>
                    <v-combobox
                      dense
                      label=""
                      value="032"
                      color="base"
                      outlined
                      @keydown.enter="focusNext" 
                    ></v-combobox>
                  </div>
                  <div class="w-1/2">
                    <br />
                    <v-text-field @keydown.enter="focusNext" 
                      dense
                      label=""
                      value="ธนาคาร ดอยช์แบงก์ เอจี สาขากรุงเทพ"
                      color="base"
                      outlined
                    ></v-text-field>
                  </div>
                </div>
              </div>
            </v-card>
          </div>

          <div class="pt-6">
            <v-card class="p-2">
              <div class="bg-gray-100 roud-lg p-4">
                <label class="text-xl font-semibold">ธนาคารผู้นำเข้า</label>
                <div class="pt-4">
                  <label class="text-sm font-semibold"
                    >เลขที่บัญชีผู้นำเข้า</label
                  >
                  <v-combobox
                    dense
                    label="กรุณาเลือก"
                    color="base"
                    outlined
                    @keydown.enter="focusNext" 
                  ></v-combobox>

                  <label class="text-sm font-semibold">ชื่อบัญชี</label>
                  <v-text-field @keydown.enter="focusNext" 
                    dense
                    label="กรุณาเลือก"
                    color="base"
                    outlined
                  ></v-text-field>
                </div>

                <div class="flex flex-col md:flex-row space-x-4 pt-4">
                  <div class="w-1/2">
                    <label class="text-base font-semibold">ธนาคาร</label>
                    <v-combobox
                      @keydown.enter="focusNext" 
                      dense
                      label=""
                      value="032"
                      color="base"
                      outlined
                    ></v-combobox>
                  </div>
                  <div class="w-1/2">
                    <br />
                    <v-text-field @keydown.enter="focusNext" 
                      dense
                      label=""
                      value="ธนาคาร ดอยช์แบงก์ เอจี สาขากรุงเทพ"
                      color="base"
                      outlined
                    ></v-text-field>
                  </div>
                </div>
                <div class="flex flex-col md:flex-row space-x-4 pt-4">
                  <div class="w-1/2">
                    <label class="text-base font-semibold">สาขา</label>
                    <v-text-field @keydown.enter="focusNext" 
                      dense
                      label="กรุณาเลือก"
                      color="base"
                      outlined
                    ></v-text-field>
                  </div>
                  <div class="w-1/2">
                    <label class="text-base font-semibold"
                      >ยอดเงินที่ให้ตัด</label
                    >
                    <v-text-field @keydown.enter="focusNext" 
                      dense
                      label=""
                      value="0.00"
                      color="base"
                      outlined
                    ></v-text-field>
                  </div>
                </div>
              </div>
            </v-card>
          </div>

          <div class="pt-6">
            <v-card class="p-2">
              <div class="bg-gray-100 roud-lg p-4">
                <label class="text-xl font-semibold">ธนาคารค้ำประกัน</label>
                <div class="pt-4">
                  <label class="text-sm font-semibold"
                    >เลขสัญญาหนังสือธนาคารค้ำประกัน</label
                  >
                  <v-combobox
                    @keydown.enter="focusNext" 
                    dense
                    label="กรุณาเลือก"
                    color="base"
                    outlined
                  ></v-combobox>

                  <label class="text-sm font-semibold">ชื่อสัญญา</label>
                  <v-text-field @keydown.enter="focusNext" 
                    dense
                    label="ระบุข้อมูล..."
                    color="base"
                    outlined
                  ></v-text-field>
                </div>

                <div class="flex flex-col md:flex-row space-x-4 pt-4">
                  <div class="w-1/2">
                    <label class="text-base font-semibold">ธนาคาร</label>
                    <v-combobox
                      @keydown.enter="focusNext" 
                      dense
                      label=""
                      value="032"
                      color="base"
                      outlined
                    ></v-combobox>
                  </div>
                  <div class="w-1/2">
                    <br />
                    <v-text-field @keydown.enter="focusNext" 
                      dense
                      label=""
                      value="ธนาคาร ดอยช์แบงก์ เอจี สาขากรุงเทพ"
                      color="base"
                      outlined
                    ></v-text-field>
                  </div>
                </div>
                <div class="flex flex-col md:flex-row space-x-4 pt-4">
                  <div class="w-1/2">
                    <label class="text-base font-semibold">สาขา</label>
                    <v-text-field @keydown.enter="focusNext" 
                      dense
                      label=""
                      value="000001"
                      color="base"
                      outlined
                    ></v-text-field>
                  </div>
                  <div class="w-1/2">
                    <label class="text-base font-semibold"
                      >ยอดเงินวางประกัน</label
                    >
                    <v-text-field @keydown.enter="focusNext" 
                      dense
                      label=""
                      value="0.00"
                      color="base"
                      outlined
                    ></v-text-field>
                  </div>
                </div>
              </div>
            </v-card>
          </div>

          <div class="pt-6">
            <v-card class="p-2">
              <div class="bg-gray-100 roud-lg p-4">
                <label class="text-xl font-semibold"
                  >ธนาคารบัญชีเคบิตบัตรภาษี</label
                >
                <div class="pt-4">
                  <label class="text-sm font-semibold"
                    >เลขทะเบียนผู้รับเงินชดเชย</label
                  >
                  <v-combobox
                    @keydown.enter="focusNext" 
                    dense
                    label="กรุณาเลือก"
                    color="base"
                    outlined
                  ></v-combobox>

                  <label class="text-sm font-semibold">ผู้รับเงินชดเชย</label>
                  <v-text-field @keydown.enter="focusNext" 
                    dense
                    label="ระบุข้อมูล..."
                    color="base"
                    outlined
                  ></v-text-field>
                </div>

                <div class="flex flex-col md:flex-row space-x-4 pt-4">
                  <div class="w-1/2">
                    <label class="text-base font-semibold">ธนาคาร</label>
                    <v-combobox
                      @keydown.enter="focusNext" 
                      dense
                      label="กรุณาเลือก"
                      color="base"
                      outlined
                    ></v-combobox>
                  </div>
                  <div class="w-1/2">
                    <br />
                    <v-text-field @keydown.enter="focusNext" 
                      dense
                      label=""
                      color="base"
                      outlined
                    ></v-text-field>
                  </div>
                </div>
                <div class="flex flex-col md:flex-row space-x-4 pt-4">
                  <div class="w-1/2">
                    <label class="text-base font-semibold">สาขา</label>
                    <v-text-field @keydown.enter="focusNext" 
                      dense
                      label="กรุณาเลือก"
                      color="base"
                      outlined
                    ></v-text-field>
                  </div>
                  <div class="w-1/2">
                    <label class="text-base font-semibold"
                      >ยอดเงินวางประกัน</label
                    >
                    <v-text-field @keydown.enter="focusNext" 
                      dense
                      label="00"
                      color="base"
                      outlined
                    ></v-text-field>
                  </div>
                </div>
              </div>
            </v-card>
          </div>

          <div class="pt-6">
            <v-card class="p-2">
              <div class="bg-gray-100 roud-lg p-4">
                <label class="text-xl font-semibold">E-Payment</label>
                <div class="pt-4">
                  <label class="text-sm font-semibold">เลขที่ใบเสร็จ</label>
                  <v-text-field @keydown.enter="focusNext" 
                    dense
                    label="ระบุข้อมูล.."
                    color="base"
                    outlined
                  ></v-text-field>

                  <label class="text-sm font-semibold"
                    >Bank Transaction No</label
                  >
                  <v-text-field @keydown.enter="focusNext" 
                    dense
                    label="ระบุข้อมูล..."
                    color="base"
                    outlined
                  ></v-text-field>

                  <label class="text-sm font-semibold">ยอดเงินหักในบัญชี</label>
                  <v-text-field @keydown.enter="focusNext" 
                    dense
                    label=""
                    value="0.00"
                    color="base"
                    outlined
                  ></v-text-field>

                  <label class="text-sm font-semibold">Payment Type</label>
                  <v-text-field @keydown.enter="focusNext" 
                    dense
                    label="ระบุข้อมูล..."
                    color="base"
                    outlined
                  ></v-text-field>

                  <label class="text-sm font-semibold">Payment Status</label>
                  <v-text-field @keydown.enter="focusNext" 
                    dense
                    label="ระบุข้อมูล..."
                    color="base"
                    outlined
                  ></v-text-field>

                  <label class="text-sm font-semibold">Payment Message</label>
                  <v-text-field @keydown.enter="focusNext" 
                    dense
                    label="ระบุข้อมูล..."
                    color="base"
                    outlined
                  ></v-text-field>
                </div>
              </div>
            </v-card>
          </div>
        </div>

        <div class="w-2/5">
          <div class="w-full">
            <label class="text-sm font-semibold">ราคา CIF เงินต่างประเทศ</label>
            <div class="flex flex-col md:flex-row w-full">
              <v-text-field @keydown.enter="focusNext" 
                dense
                label=""
                value="14,752.83"
                color="base"
                outlined
              ></v-text-field>
              <v-btn class="ml-3 rounded-lg" depressed color="#CED4DA">
                USD</v-btn
              >
            </div>
          </div>

          <div class="w-full">
            <label class="text-sm font-semibold">ราคา CIF เงินบาท</label>
            <div class="flex flex-col md:flex-row w-full">
              <v-text-field @keydown.enter="focusNext" 
                dense
                label=""
                value="496,745.49"
                color="base"
                outlined
              ></v-text-field>
              <v-btn class="ml-3 rounded-lg" depressed color="#CED4DA">
                THB</v-btn
              >
            </div>
          </div>

          <div class="w-full">
            <label class="text-sm font-semibold">ค่าภาษีอากรรวม</label>
            <div class="flex flex-col md:flex-row w-full">
              <v-text-field @keydown.enter="focusNext" 
                dense
                label=""
                value="0.00"
                color="base"
                outlined
              ></v-text-field>
              <v-btn class="ml-3 rounded-lg" depressed color="#CED4DA">
                THB</v-btn
              >
            </div>
          </div>

          <div class="w-full">
            <label class="text-sm font-semibold">เงินประกันรวม</label>
            <div class="flex flex-col md:flex-row w-full">
              <v-text-field @keydown.enter="focusNext" 
                dense
                label=""
                value="0.00"
                color="base"
                outlined
              ></v-text-field>
              <v-btn class="ml-3 rounded-lg" depressed color="#CED4DA">
                THB</v-btn
              >
            </div>
          </div>
        </div>
      </div>
    </v-form>
  </div>
</template>

<script>
import nextFocus from "@/services/nextFocus.js";
export default {
  name: "Payment",
  async mounted() {
    await this.validate();
  },
  data() {
    return {
      valid: true,
    };
  },
  methods: {
    async validate() {
      this.$refs.form.validate();
    },
    focusNext(event) { // enter and new focus (text input type).
      nextFocus.nextInput(event);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
