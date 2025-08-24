<template>
  <div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <div class="flex flex-col md:flex-row pt-8 md:space-x-20">
        <div class="w-full md:w-3/5">
          <label class="font-13-400">วิธีการชำระเงิน</label>
          <v-combobox @keydown.enter="focusNext" v-model="select1" :items="items" :rules="[(v) => !!v || '']" required class="font-13-4003" dense
            label="กรุณาเลือก" color="base" outlined></v-combobox>

          <label class="font-13-400">วิธีการวางประกัน</label>
          <v-combobox v-model="select2" :items="items" :rules="[(v) => !!v || '']" required class="font-13-4003" solo
            dense label="กรุณาเลือก" color="base" outlined></v-combobox>

          <label class="font-13-400">ประเภทการวางประกัน</label>
          <v-combobox @keydown.enter="focusNext" v-model="select3" :items="items" class="font-13-4003" solo dense label="กรุณาเลือก" color="base"
            outlined></v-combobox>

          <div class="flex flex-col md:flex-row md:space-x-4 pt-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">ราคา FOB เงินต่างประเทศ</label>
              <v-combobox @keydown.enter="focusNext" v-model="select4" :items="items" :rules="[(v) => !!v || '']" required class="font-13-4003"
                solo dense label="กรุณาเลือก" color="base" outlined></v-combobox>
            </div>
            <div class="w-full md:w-1/2">
              <br />
              <v-text-field @keydown.enter="focusNext" disabled dense label="" value="USD" color="base"
                class="font-13-4003" outlined></v-text-field>
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4 pt-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">ราคา FOB เงินบาท</label>
              <v-text-field @keydown.enter="focusNext" :rules="[(v) => !!v || '']" required dense label="กรุณาระบุ"
                color="base" class="font-13-4003" outlined></v-text-field>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">สกุลเงิน</label>
              <v-text-field @keydown.enter="focusNext" disabled dense label="" value="USD" color="base"
                class="font-13-4003" outlined></v-text-field>
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4 pt-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">ค่าภาษีอากรรวม</label>
              <v-text-field @keydown.enter="focusNext" dense label="" class="font-13-4003" value="2,359,709.98"
                color="base" outlined></v-text-field>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">เงินประกันรวม</label>
              <v-text-field @keydown.enter="focusNext" dense disabled class="font-13-4003" label="" value="THB"
                color="base" outlined></v-text-field>
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4 pt-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">ธนาคาร</label>
              <v-text-field @keydown.enter="focusNext" dense class="font-13-4003" label="" value="USD" color="base"
                outlined></v-text-field>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">เงินประกันรวม</label>
              <v-text-field @keydown.enter="focusNext" class="font-13-4003" dense label="" value="THB" disabled
                color="base" outlined></v-text-field>
            </div>
          </div>

          <div>
            <v-card class="p-1">
              <div class="bg-gray-100 roud-lg p-4">
                <label class="font-15-500">ธนาคาร RGS</label>
                <div class="flex flex-col md:flex-row md:space-x-4 pt-4">
                  <div class="w-full md:w-1/2">
                    <label class="font-13-400">ธนาคาร</label>
                    <v-combobox @keydown.enter="focusNext" v-model="bankselect" :items="bank" class="font-13-4003" solo dense value="032"
                      color="base" outlined></v-combobox>
                  </div>
                  <div class="w-full md:w-1/2">
                    <br />
                    <v-text-field @keydown.enter="focusNext" dense class="font-13-4003" disabled label=""
                      value="ธนาคาร ดอยช์แบงก์ เอจี สาขากรุงเทพ" color="base" outlined></v-text-field>
                  </div>
                </div>
              </div>
            </v-card>
          </div>

          <div class="pt-6">
            <v-card class="p-1">
              <div class="bg-gray-100 roud-lg p-4">
                <label class="font-15-500">ธนาคารรับอนุญาตจากกรมศุลกากร</label>
                <div class="flex flex-col md:flex-row md:space-x-4 pt-4">
                  <div class="w-full md:w-1/2">
                    <label class="font-13-400">ธนาคาร</label>
                    <v-combobox @keydown.enter="focusNext" v-model="bankselect" :items="bank" class="font-14-300" solo dense value="032"
                      color="base" outlined></v-combobox>
                  </div>
                  <div class="w-full md:w-1/2">
                    <br />
                    <v-text-field @keydown.enter="focusNext" dense label="" disabled class="font-13-4003"
                      value="ธนาคาร ดอยช์แบงก์ เอจี สาขากรุงเทพ" color="base" outlined></v-text-field>
                  </div>
                </div>
              </div>
            </v-card>
          </div>

          <div class="pt-6">
            <v-card class="p-1">
              <div class="bg-gray-100 roud-lg p-4">
                <label class="font-15-500">ธนาคารผู้ส่งออก</label>
                <div class="pt-4">
                  <label class="font-13-400">เลขที่บัญชีผู้นำเข้า</label>
                  <v-combobox @keydown.enter="focusNext" v-model="bankselect" :items="bank" class="font-14-300" solo dense label="กรุณาเลือก"
                    color="base" outlined></v-combobox>

                  <label class="font-13-400">ชื่อบัญชี</label>
                  <v-text-field @keydown.enter="focusNext" dense solo class="font-13-4003" label="กรุณาเลือก"
                    color="base" outlined></v-text-field>
                </div>

                <div class="flex flex-col md:flex-row md:space-x-4 pt-4">
                  <div class="w-full md:w-1/4">
                    <label class="font-13-400">ธนาคาร</label>
                    <v-combobox @keydown.enter="focusNext" v-model="bankselect" :items="bank" class="font-14-300" solo dense value="032"
                      color="base" outlined></v-combobox>
                  </div>
                  <div class="w-full md:w-3/4">
                    <br />
                    <v-text-field @keydown.enter="focusNext" dense label="" disabled class="font-13-4003"
                      value="ธนาคาร ดอยช์แบงก์ เอจี สาขากรุงเทพ" color="base" outlined></v-text-field>
                  </div>
                </div>
                <div class="flex flex-col md:flex-row md:space-x-4 pt-4">
                  <div class="w-full md:w-1/3">
                    <label class="font-13-400">สาขา</label>
                    <v-text-field @keydown.enter="focusNext" dense label="กรุณาเลือก" class="font-13-4003" color="base"
                      outlined></v-text-field>
                  </div>
                  <div class="w-full md:w-2/3">
                    <label class="font-13-400">ยอดเงินที่ให้ตัด</label>
                    <v-text-field @keydown.enter="focusNext" dense label="00" class="font-13-4003" color="base"
                      outlined></v-text-field>
                  </div>
                </div>
              </div>
            </v-card>
          </div>

          <div class="pt-6">
            <v-card class="p-1">
              <div class="bg-gray-100 roud-lg p-4">
                <label class="font-15-500">ธนาคารค้ำประกัน</label>
                <div class="pt-4">
                  <label class="font-13-400">เลขสัญญาหนังสือธนาคารค้ำประกัน</label>
                  <v-combobox @keydown.enter="focusNext" v-model="bankselect" :items="bank" class="font-13-4003" solo dense label="กรุณาเลือก"
                    color="base" outlined></v-combobox>

                  <label class="font-13-400">ชื่อสัญญา</label>
                  <v-text-field @keydown.enter="focusNext" solo dense class="font-13-4003" label="ระบุข้อมูล..."
                    color="base" outlined></v-text-field>
                </div>

                <div class="flex flex-col md:flex-row md:space-x-4 pt-4">
                  <div class="w-full md:w-1/4">
                    <label class="font-13-400">ธนาคาร</label>
                    <v-combobox @keydown.enter="focusNext" v-model="bankselect" :items="bank" class="font-13-4003" solo dense value="032"
                      color="base" outlined></v-combobox>
                  </div>
                  <div class="w-full md:w-3/4">
                    <br />
                    <v-text-field @keydown.enter="focusNext" dense label="" class="font-13-4003"
                      value="ธนาคาร ดอยช์แบงก์ เอจี สาขากรุงเทพ" color="base" outlined disabled></v-text-field>
                  </div>
                </div>
                <div class="flex flex-col md:flex-row md:space-x-4 pt-4">
                  <div class="w-full md:w-1/3">
                    <label class="font-13-400">สาขา</label>
                    <v-text-field @keydown.enter="focusNext" dense label="000001" color="base" class="font-13-4003"
                      outlined></v-text-field>
                  </div>
                  <div class="w-full md:w-2/3">
                    <label class="font-13-400">ยอดเงินวางประกัน</label>
                    <v-text-field @keydown.enter="focusNext" dense label="00" class="font-13-4003" color="base"
                      outlined></v-text-field>
                  </div>
                </div>
              </div>
            </v-card>
          </div>

          <div class="pt-6">
            <v-card class="p-1">
              <div class="bg-gray-100 roud-lg p-4">
                <label class="font-15-500">ธนาคารบัญชีเคบิตบัตรภาษี</label>
                <div class="pt-4">
                  <label class="font-13-400">เลขทะเบียนผู้รับเงินชดเชย</label>
                  <v-combobox @keydown.enter="focusNext" v-model="bankselect" :items="bank" class="font-13-4003" solo dense label="กรุณาเลือก"
                    color="base" outlined></v-combobox>

                  <label class="font-13-400">ผู้รับเงินชดเชย</label>
                  <v-text-field @keydown.enter="focusNext" dense class="font-13-4003" label="ระบุข้อมูล..." color="base"
                    outlined></v-text-field>
                </div>

                <div class="flex flex-col md:flex-row md:space-x-4 pt-4">
                  <div class="w-full md:w-1/4">
                    <label class="font-13-400">ธนาคาร</label>
                    <v-combobox @keydown.enter="focusNext" v-model="bankselect" :items="bank" class="font-13-4003" solo dense value="032"
                      color="base" outlined></v-combobox>
                  </div>
                  <div class="w-full md:w-3/4">
                    <br />
                    <v-text-field @keydown.enter="focusNext" dense label="" class="font-13-4003" disabled
                      value="ธนาคาร ดอยช์แบงก์ เอจี สาขากรุงเทพ" color="base" outlined></v-text-field>
                  </div>
                </div>
                <div class="flex flex-col md:flex-row md:space-x-4 pt-4">
                  <div class="w-full md:w-1/3">
                    <label class="font-13-400">สาขา</label>
                    <v-text-field @keydown.enter="focusNext" dense label="กรุณาเลือก" class="font-13-4003" color="base"
                      outlined></v-text-field>
                  </div>
                  <div class="w-full md:w-2/3">
                    <label class="font-13-400">ยอดเงินวางประกัน</label>
                    <v-text-field @keydown.enter="focusNext" dense label="00" class="font-13-4003" color="base"
                      outlined></v-text-field>
                  </div>
                </div>
              </div>
            </v-card>
          </div>
        </div>

        <div class="w-full md:w-2/5"></div>
      </div>
    </v-form>
    <p id="btnFocusOut"></p>
  </div>
</template>

<script>
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
        "ตัวอย่าง dropdown 04",
      ],
      bank: ["032", "033", "034", "035"]
    };
  },
  props: {},
  methods: {
    async validate() {
      this.$refs.form.validate();
    },
    focusNext(event) { // enter and new focus (text input type).
      nextFocus.nextInput(event);
    }
  },
};
</script>

<style scoped>

.v-application .error--text {
    color: #FE7640 !important;
    caret-color: #FE7640 !important;
};
.v-icon notranslate v-icon--link mdi mdi-calendar theme--light error--text {
  color: #FE7640 !important;
}
::v-deep(.v-icon.notranslate.v-icon--link.mdi.mdi-calendar.theme--light.error--text) {
  color: #FE7640 !important;
}
</style>
