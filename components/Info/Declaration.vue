<template>
  <div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <div class="flex flex-col md:flex-row pt-8 md:space-x-20">
        <div class="w-3/5">
          <label class="text-sm font-semibold">ประเภทเอกสาร</label>
          <v-combobox
            dense
            label=""
            value="0 = ใบขนสินค้าขาเข้าปกติ"
            color="base"
            outlined
          ></v-combobox>

          <label class="text-sm font-semibold">ประเภทใบขน</label>
          <v-combobox
            dense
            label=""
            value="100 = ใบขนสินค้าขาเข้าปกติ"
            color="base"
            outlined
          ></v-combobox>

          <label class="text-sm font-semibold">Broker</label>
          <div class="flex">
            <v-combobox
              dense
              label=""
              value="EDI SERVICE APPLICATION PROVIDER CO.,LTD."
              color="base"
              outlined
            >
            </v-combobox>
            <v-btn class="ml-3 rounded-lg" depressed color="base" dark>
              เเสดง</v-btn
            >
          </div>

          <div class="flex flex-col md:flex-row space-x-4">
            <div class="w-1/2">
              <label class="text-sm font-semibold">Sub Broker</label>
              <v-combobox
                dense
                label="กรุณาเลือก"
                color="base"
                outlined
              ></v-combobox>
            </div>
            <div class="w-1/2">
              <label class="text-sm font-semibold">Branch</label>
              <v-text-field
                @keydown.enter="focusNext"
                dense
                label="000000"
                color="base"
                outlined
              ></v-text-field>
            </div>
          </div>

          <label class="text-sm font-semibold">ผู้นำเข้า</label>
          <div class="flex">
            <v-combobox
              dense
              label=""
              value="EDI SERVICE APPLICATION PROVIDER CO.,LTD."
              color="base"
              outlined
            >
            </v-combobox>
            <v-btn class="ml-3 rounded-lg" depressed color="base" dark>
              เเสดง</v-btn
            >
          </div>

          <div class="flex flex-col md:flex-row space-x-4">
            <div class="w-full">
              <label class="text-sm font-semibold">วันที่นำเข้า</label>
              <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="auto"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    @keydown.enter="focusNext"
                    hide-details
                    class="tt font-13-3002"
                    outlined
                    :value="getDateFormat(computedDateFormatted)"
                    label="dd/mm/yyyy"
                    placeholder="From"
                    append-icon="mdi-calendar"
                    readonly
                    solo
                    height="32px"
                    style="width: 170px !important"
                    color="base"
                    v-on="on"
                    @click:append="on.click"
                  >
                  </v-text-field>
                </template>
                <v-date-picker
                  v-model="computedDateFormatted"
                  no-title
                ></v-date-picker>
              </v-menu>
            </div>
            <div class="w-full">
              <label class="text-sm font-semibold">สกุลเงิน</label>
              <v-combobox
                dense
                label=""
                value="USD"
                color="base"
                outlined
              ></v-combobox>
            </div>
            <div class="w-full">
              <br />
              <v-text-field
                @keydown.enter="focusNext"
                class="pt-1"
                dense
                label=" "
                value="31.71770"
                color="base"
                outlined
              ></v-text-field>
            </div>
            <div class="w-full">
              <label class="text-sm font-semibold">Departure Date</label>
              <v-text-field
                @keydown.enter="focusNext"
                dense
                label="000000"
                color="base"
                outlined
              ></v-text-field>
            </div>
          </div>

          <label class="text-sm font-semibold">นำเข้าโดยทาง</label>
          <v-combobox
            dense
            label=""
            value="1 = ทางเรือ"
            color="base"
            outlined
          ></v-combobox>

          <div class="flex flex-col md:flex-row space-x-4">
            <div class="w-1/2">
              <label class="text-sm font-semibold">ชื่อยานพาหนะ</label>
              <v-combobox
                dense
                label=""
                value="RTCHIP"
                color="base"
                outlined
              ></v-combobox>
            </div>
            <div class="w-1/2">
              <label class="text-sm font-semibold">Voyage No</label>
              <v-text-field
                @keydown.enter="focusNext"
                dense
                label=""
                value="015N"
                color="base"
                outlined
              ></v-text-field>
            </div>
          </div>

          <label class="text-sm font-semibold">ประเภทการบรรจุ</label>
          <v-combobox
            dense
            label=""
            value="3 = Other freight containers"
            color="base"
            outlined
          ></v-combobox>

          <div class="flex flex-col md:flex-row space-x-4">
            <div class="w-1/2">
              <label class="text-sm font-semibold">ประเภทกำเนิด</label>
              <v-combobox
                dense
                label=""
                value="JP"
                color="base"
                outlined
              ></v-combobox>
            </div>
            <div class="w-1/2">
              <br />
              <v-text-field
                @keydown.enter="focusNext"
                class="pt-1"
                dense
                label=""
                value="JAPAN"
                color="base"
                outlined
              >
              </v-text-field>
            </div>
          </div>

          <div class="flex flex-col md:flex-row space-x-4">
            <div class="w-1/2">
              <label class="text-sm font-semibold">ประเทศต้นทางบรรทุก</label>
              <v-combobox
                dense
                label=""
                value="HK"
                color="base"
                outlined
              ></v-combobox>
            </div>
            <div class="w-1/2">
              <br />
              <v-text-field
                @keydown.enter="focusNext"
                class="pt-1"
                dense
                label=""
                value="HONGKONG"
                color="base"
                outlined
              ></v-text-field>
            </div>
          </div>

          <div class="flex flex-col md:flex-row space-x-4">
            <div class="w-1/2">
              <label class="text-sm font-semibold">ท่าที่นำเข้า</label>
              <v-combobox
                dense
                label=""
                value="1990"
                color="base"
                outlined
              ></v-combobox>
            </div>
            <div class="w-1/2">
              <br />
              <v-text-field
                @keydown.enter="focusNext"
                class="pt-1"
                dense
                label=""
                value="สนามบินสุวรรณภูมิ"
                color="base"
                outlined
              ></v-text-field>
            </div>
          </div>

          <div class="flex flex-col md:flex-row space-x-4">
            <div class="w-1/2">
              <label class="text-sm font-semibold">ท่าที่ตรวจปล่อย</label>
              <v-combobox
                dense
                label=""
                value="1992"
                color="base"
                outlined
              ></v-combobox>
            </div>
            <div class="w-1/2">
              <br />
              <v-text-field
                @keydown.enter="focusNext"
                class="pt-1"
                dense
                label=""
                value="สนามบินคลังสินค้า บ.ดับบลิวเอฟเอาจีคาร์โก้"
                color="base"
                outlined
              ></v-text-field>
            </div>
          </div>

          <div class="flex flex-col md:flex-row space-x-4">
            <div class="w-1/2">
              <label class="text-sm font-semibold">Master</label>
              <v-text-field
                @keydown.enter="focusNext"
                dense
                label=""
                value="RTCMATER"
                color="base"
                outlined
              >
              </v-text-field>
            </div>
            <div class="w-1/2">
              <label class="text-sm font-semibold"> House</label>
              <v-text-field
                @keydown.enter="focusNext"
                dense
                label=""
                value="RTCHOUSE00001"
                color="base"
                outlined
              >
              </v-text-field>
            </div>
          </div>

          <label class="text-xl font-semibold">บัตรผ่านพิธีการ</label>
          <div class="flex flex-col md:flex-row space-x-4 pt-3">
            <div class="w-full">
              <label class="text-sm font-semibold">ชื่อ</label>
              <v-text-field
                @keydown.enter="focusNext"
                dense
                label=""
                value="นายวายุ เพลิงนิล"
                color="base"
                outlined
              >
              </v-text-field>
            </div>
            <div class="w-full">
              <br />
              <v-text-field
                @keydown.enter="focusNext"
                dense
                label=""
                value="3XXXXXXXXXXXXX"
                color="base"
                outlined
              >
              </v-text-field>
            </div>
            <div class="w-full">
              <br />
              <v-text-field
                @keydown.enter="focusNext"
                dense
                label=""
                value="02-3779478"
                color="base"
                outlined
              >
              </v-text-field>
            </div>
          </div>

          <label class="text-xl font-semibold">บัตรผู้จัดการ/ผู้รับมอบ</label>

          <div class="flex flex-col md:flex-row space-x-4 pt-3">
            <div class="w-full">
              <label class="text-sm font-semibold">ชื่อ</label>
              <v-text-field
                @keydown.enter="focusNext"
                dense
                label=""
                value="นายวายุ เพลิงนิล"
                color="base"
                outlined
              >
              </v-text-field>
            </div>
            <div class="w-full">
              <br />
              <v-text-field
                @keydown.enter="focusNext"
                dense
                label=""
                value="3XXXXXXXXXXXXX"
                color="base"
                outlined
              >
              </v-text-field>
            </div>
            <div class="w-full">
              <br />
              <v-text-field
                @keydown.enter="focusNext"
                dense
                label=""
                value="02-3779478"
                color="base"
                outlined
              >
              </v-text-field>
            </div>
          </div>
        </div>

        <div class="w-2/5">
          <div class="flex flex-col md:flex-row space-x-4">
            <div class="w-1/2">
              <label class="text-sm font-semibold">Net Weight</label>
              <v-text-field
                @keydown.enter="focusNext"
                dense
                label=""
                value="100.000"
                color="base"
                outlined
              >
              </v-text-field>
            </div>
            <div class="w-1/2">
              <br />
              <v-combobox
                class="pt-1"
                dense
                label=""
                value="KGM"
                color="base"
                outlined
              ></v-combobox>
            </div>
          </div>

          <div class="flex flex-col md:flex-row space-x-4">
            <div class="w-1/2">
              <label class="text-sm font-semibold">Gross Weight</label>
              <v-text-field
                @keydown.enter="focusNext"
                dense
                label=""
                value="100.000"
                color="base"
                outlined
              >
              </v-text-field>
            </div>
            <div class="w-1/2">
              <br />
              <v-combobox
                class="pt-1"
                dense
                label=""
                value="KGM"
                color="base"
                outlined
              ></v-combobox>
            </div>
          </div>

          <div class="flex flex-col md:flex-row space-x-4">
            <div class="w-1/2">
              <label class="text-sm font-semibold">Package Amount</label>
              <v-text-field
                @keydown.enter="focusNext"
                dense
                label=""
                value="20"
                color="base"
                outlined
              ></v-text-field>
            </div>
            <div class="w-1/2">
              <br />
              <v-combobox
                class="pt-1"
                dense
                label=""
                value="CT"
                color="base"
                outlined
              ></v-combobox>
            </div>
          </div>

          <label class="text-sm font-semibold">Package 2</label>
          <v-text-field
            @keydown.enter="focusNext"
            dense
            label=""
            value="2 SET"
            color="base"
            outlined
          ></v-text-field>

          <v-card class="p-1">
            <div class="bg-gray-100 roud-lg p-4">
              <label class="text-xl font-semibold">Shipping Mark</label>
              <div class="flex flex-col md:flex-row justify-end space-x-2 p-2">
                <v-btn
                  class="rounded-lg"
                  depressed
                  fab
                  dark
                  x-small
                  color="base"
                >
                  <span class="text-base"> | </span>
                </v-btn>
                <v-btn
                  class="rounded-lg"
                  depressed
                  fab
                  dark
                  x-small
                  color="base"
                >
                  <span class="text-base"> H </span>
                </v-btn>
                <v-btn
                  class="rounded-lg"
                  depressed
                  fab
                  dark
                  x-small
                  color="base"
                >
                  <span class="text-base"> _ </span>
                </v-btn>
              </div>

              <v-textarea
                background-color="white"
                color="base"
                dense
                label=""
                value="ESAP CO.,LTD. P/O NO. PO/62009009 CASE (S) No.1-1 MADE IN HONGKONG"
                outlined
              ></v-textarea>
              <v-checkbox
                class="font-13-4002 remove-mg-25"
                color="red"
                dense
                label="มีปัญหาเรื่องพิกัด/ราคา/ต้องการให้ตรวจสอบ (ขอพบเจ้าหน้าที่)"
              ></v-checkbox>
              <v-checkbox
                class="font-13-4002 remove-mg-25"
                color="red"
                dense
                label="ขออนุญาตเปิดตรวจนอกสถานที่ (มัดลวด)"
              ></v-checkbox>
              <v-checkbox
                class="font-13-4002 remove-mg-25"
                color="red"
                dense
                label="ชำระค่าธรรมเนียมการผ่านพิธีการศุลกากร"
              ></v-checkbox>
            </div>
          </v-card>
          <div class="pt-4">
            <label class="text-sm font-semibold">
              Reference No of Common Access</label
            >
            <v-text-field
              @keydown.enter="focusNext"
              dense
              label="ระบุข้อมูล..."
              color="base"
              outlined
            ></v-text-field>
          </div>

          <div class="flex flex-col md:flex-row space-x-4">
            <div class="w-1/2">
              <label class="text-sm font-semibold">Outside Release Port</label>
              <v-combobox
                dense
                label="กรุณาเลือก"
                color="base"
                outlined
              ></v-combobox>
            </div>
            <div class="w-1/2">
              <br />
              <v-text-field
                @keydown.enter="focusNext"
                class="pt-1"
                dense
                label="ระบุข้อมูล..."
                color="base"
                outlined
              >
              </v-text-field>
            </div>
          </div>

          <div class="flex flex-col md:flex-row space-x-4">
            <div class="w-1/2">
              <label class="text-sm font-semibold">Approval No</label>
              <v-text-field
                @keydown.enter="focusNext"
                dense
                label="ระบุข้อมูล..."
                color="base"
                outlined
              ></v-text-field>
            </div>
            <div class="w-1/2">
              <label class="text-sm font-semibold"> Port</label>
              <v-text-field
                @keydown.enter="focusNext"
                dense
                label="ระบุข้อมูล..."
                color="base"
                outlined
              ></v-text-field>
            </div>
          </div>

          <div class="">
            <label class="text-sm font-semibold"> Job No</label>
            <v-text-field
              @keydown.enter="focusNext"
              dense
              label="ระบุข้อมูล..."
              color="base"
              outlined
            ></v-text-field>
          </div>
        </div>
      </div>
    </v-form>
    <p id="btnFocusOut"></p>
  </div>
</template>

<script>
import dateFormat from "@/services/dateFormat.js";
import nextFocus from "@/services/nextFocus.js";

export default {
  name: "Declaration",
  async mounted() {
    await this.validate();
  },
  data() {
    return {
      valid: true,
    };
  },
  methods: {
    getDateFormat(date) {
      return dateFormat.convertDateFormat(date);
    },
    async validate() {
      this.$refs.form.validate();
    },
    focusNext(event) { // enter and new focus (text input type).
      nextFocus.nextInput(event);
    },
  },
};
</script>
