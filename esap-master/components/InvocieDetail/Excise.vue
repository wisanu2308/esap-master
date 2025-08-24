<template>
  <div>
    <div class="flex w-full flex-col md:flex-row">
      <v-card class="p-1 mb-6 mt-8 w-full md:w-7/12">
        <div class="esap_error p-4">
          <label class="font-18-600">พิกัดสรรสามิต</label>
          <div class="flex flex-col md:flex-row md:space-x-4 pt-2">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Excise Code</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-combobox
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  v-model="select"
                  dense
                  solo
                  label="กรุณาเลือก"
                  :items="form.exciseCode"
                  item-text="id"
                  item-id="id"
                  color="base"
                  background-color="white"
                  outlined
                  maxLength="17"
                >
                <template slot="item" slot-scope="data" style="display: flex; flex-direction:row; overflow-x: auto; overflow-y:auto;">
                  <div class="dropdown-line3">
                    <div class="font-14-300" style="width: 120px">
                      {{ data.item.id }}
                    </div>
                    <div class="line-dropdown"></div>
                    <div class="font-14-300 ml-3" style="width: 50px">{{ data.item.rate1 }}</div>
                    <div class="line-dropdown"></div>
                    <div  class="font-14-300 ml-3" style="width: 50px">{{ data.item.rate2 }}</div>
                    <div class="line-dropdown"></div>
                    <div class="font-14-300 ml-3" style="width: 50px">{{ data.item.unit }}</div>
                    <div class="line-dropdown"></div>
                    <div class="font-14-300 ml-3" style="width: 80px">{{ data.item.startDate }}</div>
                    <div class="line-dropdown"></div>
                    <div class="font-14-300 ml-3" style="width: 80px">{{ data.item.endDate}}</div>
                  </div>
                </template>
              </v-combobox>
              </div>
            </div>
          </div>
          <div class="flex flex-col md:flex-row md:space-x-4 pt-2">
            <div class="w-full md:w-4/6">
              <label class="font-13-400"> อัตราตาม %</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  disabled
                  class="label-align-right2 font-14-300"
                  dense
                  solo
                  value="22"
                  color="base"
                  outlined
                ></v-text-field>
              </div>
            </div>

            <div class="w-full md:w-3/6">
              <label class="font-13-400">อัตราตามสภาพ</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300 label-align-right2"
                  disabled
                  dense
                  solo
                  color="base"
                  value="6.5"
                  outlined
                ></v-text-field>
              </div>
            </div>
            <div class="w-full md:w-20">
              <label class="font-13-400">หน่วย</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300 label-align-right2"
                  dense
                  solo
                  color="base"
                  value="LTR"
                  outlined
                  maxLength="3"
                ></v-text-field>
              </div>
            </div>
          </div>
          <div class="flex flex-col md:flex-row md:space-x-4 pt-2">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">ปริมาณ</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300 label-align-right2"
                  dense
                  solo
                  label="ระบุข้อมูล..."
                  color="base"
                  background-color="white"
                  outlined
                  v-model="form.amount"
                  @change="convertNumFormat"
                ></v-text-field>
              </div>
            </div>

            <div class="w-full md:w-1/2">
              <label class="font-13-400">ปริมาณประเมิน</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300 label-align-right2"
                  dense
                  label="ระบุข้อมูล..."
                  solo
                  color="base"
                  background-color="white"
                  outlined
                  v-model="form.estimateQuantity"
                  @change="convertNumFormat"
                ></v-text-field>
              </div>
            </div>
          </div>
          <div class="flex flex-col md:flex-row md:space-x-4 pt-2">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">ราคาขายปลีก</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300 label-align-right2"
                  label="ระบุข้อมูล..."
                  dense
                  color="base"
                  solo
                  background-color="white"
                  outlined
                  maxLength="17"
                  v-model="form.price"
                  @change="convertNumFormat"
                ></v-text-field>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">ค่าใช้จ่ายอื่นๆ</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300 label-align-right2"
                  label="ระบุข้อมูล..."
                  dense
                  solo
                  color="base"
                  background-color="white"
                  outlined
                  v-model="form.priceOther"
                  @change="convertNumFormat"
                ></v-text-field>
                <v-btn
                  fab
                  height="36px"
                  width="120px"
                  small
                  class="ml-3 p-2 rounded-lg center"
                  depressed
                  color="secondary"
                  dark
                >
                  <img
                    :src="require('@/assets/images/svg/iconly/call.svg')"
                    alt=""
                    class="ml-3"
                  />
                  <div class="flex flex-col">
                    <span class="font-14-btn">คำนวน </span
                    ><span class="font-10-btn">ราคาขายปลีก </span>
                  </div>
                </v-btn>
              </div>
            </div>
          </div>
          <div class="flex flex-col md:flex-row md:space-x-4 pt-2">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">ดีกรีสุรา</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300 label-align-right2"
                  label="ระบุข้อมูล..."
                  dense
                  color="base"
                  solo
                  background-color="white"
                  outlined
                  v-model="form.degree"
                  @change="convertNumFormat"
                ></v-text-field>
              </div>
            </div>

            <div class="w-full md:w-1/2"></div>
          </div>
          <div class="flex flex-col md:flex-row md:space-x-4 pt-2">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">ขนาดบรรจุต่อภาชนะ</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300 label-align-right2"
                  dense
                  label="ระบุข้อมูล..."
                  color="base"
                  solo
                  background-color="white"
                  outlined
                  v-model="form.size"
                  @change="convertNumFormat"
                ></v-text-field>
              </div>
            </div>

            <div class="w-full md:w-1/2">
              <label class="font-13-400">จำนวนที่นำเข้า</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300 label-align-right2"
                  dense
                  color="base"
                  solo
                  label="ระบุข้อมูล..."
                  background-color="white"
                  outlined
                  v-model="form.amountImport"
                  @change="convertNumFormat"
                ></v-text-field>
              </div>
            </div>
          </div>
          <div class="flex justify-center">
            <v-btn
              fab
              height="36px"
              width="120px"
              small
              class="ml-3 mt-3 rounded-lg center"
              depressed
              color="secondary"
              dark
            >
              <img
                :src="require('@/assets/images/svg/iconly/call.svg')"
                class="font-14-5002"
                alt=""
              />
              <span class="ml-1 btextP font-14-5002"
                >คำนวน</span
              >
            </v-btn>
          </div>
        </div>
      </v-card>
    </div>
    <p id="btnFocusOut"></p>
  </div>
</template>

<script>

import exciseCode from "@/data/excise.json"

//services
import nextFocus from "@/services/nextFocus.js";
import numFormat from "@/services/numFormat.js";

export default {
  data: () => {
    return {
      countState: 1,
      nextIndex: 0,
      currentIndex: 0,
      select: "",
      items: [
        "ตัวอย่าง dropdown 01",
        "ตัวอย่าง dropdown 02",
        "ตัวอย่าง dropdown 03",
        "ตัวอย่าง dropdown 04",
      ],
      form: {
        exciseCode: exciseCode,
        amount: "1,350.55",
        estimateQuantity: "1,550.25",
        price: "5,000.25",
        degree: "52.25",
        priceOther: "1,500.77",
        size: "2,000.15",
        amountImport: "7,000.15"
      }
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
    convertNumFormat() {
      this.form.amount = numFormat.getNumberFormat(this.form.amount);
      this.form.estimateQuantity = numFormat.getNumberFormat(this.form.estimateQuantity);
      this.form.price = numFormat.getNumberFormat(this.form.price);
      this.form.degree = numFormat.getNumberFormat(this.form.degree);
      this.form.priceOther= numFormat.getNumberFormat(this.form.priceOther);
      this.form.size= numFormat.getNumberFormat(this.form.size);
      this.form.amountImport= numFormat.getNumberFormat(this.form.amountImport);
    }
    //-------------------------------
  },
};
</script>

<style>
</style>
