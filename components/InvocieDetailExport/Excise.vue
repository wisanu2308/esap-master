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
                  class="font-14-300"
                  v-model="select"
                  dense
                  solo
                  label="กรุณาเลือก"
                  :items="items"
                  color="base_ex"
                  background-color="white"
                  outlined
                ></v-combobox>
              </div>
            </div>
          </div>
          <div class="flex flex-col md:flex-row md:space-x-4 pt-2">
            <div class="w-full md:w-4/6">
              <label class="font-13-400"> อัตราตาม %</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field @keydown.enter="focusNext" 
                  disabled
                  class="label-align-right font-14-300"
                  dense
                  solo
                  value="22"
                  color="base_ex"
                  outlined
                ></v-text-field>
              </div>
            </div>

            <div class="w-full md:w-3/6">
              <label class="font-13-400">อัตราตามสภาพ</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field @keydown.enter="focusNext" 
                  class="font-14-300 label-align-right"
                  disabled
                  dense
                  solo
                  color="base_ex"
                  value="6.5"
                  outlined
                ></v-text-field>
              </div>
            </div>
            <div class="w-full md:w-20">
              <label class="font-13-400">หน่วย</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field @keydown.enter="focusNext" 
                  class="font-14-300 label-align-right"
                  dense
                  solo
                  color="base_ex"
                  value="LTR"
                  outlined
                ></v-text-field>
              </div>
            </div>
          </div>
          <div class="flex flex-col md:flex-row md:space-x-4 pt-2">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">ปริมาณ</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field @keydown.enter="focusNext" 
                  class="font-14-300 label-align-right"
                  dense
                  solo
                  label="ระบุข้อมูล..."
                  color="base_ex"
                  background-color="white"
                  outlined
                ></v-text-field>
              </div>
            </div>

            <div class="w-full md:w-1/2">
              <label class="font-13-400">ปริมาณประเมิน</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field @keydown.enter="focusNext" 
                  class="font-14-300 label-align-right"
                  dense
                  label="ระบุข้อมูล..."
                  solo
                  color="base_ex"
                  background-color="white"
                  outlined
                ></v-text-field>
              </div>
            </div>
          </div>
          <div class="flex flex-col md:flex-row md:space-x-4 pt-2">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">ราคาขายปลีก</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field @keydown.enter="focusNext" 
                  class="font-14-300 label-align-right"
                  label="ระบุข้อมูล..."
                  dense
                  color="base_ex"
                  solo
                  background-color="white"
                  outlined
                ></v-text-field>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">ค่าใช้จ่ายอื่นๆ</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field @keydown.enter="focusNext" 
                  class="font-14-300 label-align-right"
                  label="ระบุข้อมูล..."
                  dense
                  solo
                  color="base_ex"
                  background-color="white"
                  outlined
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
                    <span :class="otherclass" class="font-14-btn">คำนวน </span
                    ><span class="font-10-btn">ราคาขายปลีก </span>
                  </div></v-btn
                >
              </div>
            </div>
          </div>
          <div class="flex flex-col md:flex-row md:space-x-4 pt-2">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">ดีกรีสุรา</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field @keydown.enter="focusNext" 
                  class="font-14-300 label-align-right"
                  label="ระบุข้อมูล..."
                  dense
                  color="base_ex"
                  solo
                  background-color="white"
                  outlined
                ></v-text-field>
              </div>
            </div>

            <div class="w-full md:w-1/2"></div>
          </div>
          <div class="flex flex-col md:flex-row md:space-x-4 pt-2">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">ขนาดบรรจุต่อภาชนะ</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field @keydown.enter="focusNext" 
                  class="font-14-300 label-align-right"
                  dense
                  label="ระบุข้อมูล..."
                  color="base_ex"
                  solo
                  background-color="white"
                  outlined
                ></v-text-field>
              </div>
            </div>

            <div class="w-full md:w-1/2">
              <label class="font-13-400">จำนวนที่นำเข้า</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field @keydown.enter="focusNext" 
                  class="font-14-300 label-align-right"
                  dense
                  color="base_ex"
                  solo
                  label="ระบุข้อมูล..."
                  background-color="white"
                  outlined
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
              <span :class="otherclass" class="ml-1 btextP font-14-5002"
                >คำนวน</span
              ></v-btn
            >
          </div>
        </div>
      </v-card>
    </div>
    <p id="btnFocusOut"></p>
  </div>
</template>

<script>
import nextFocus from "@/services/nextFocus.js";
export default {
  data: () => {
    return {
      select: "",
      items: [
        "ตัวอย่าง dropdown 01",
        "ตัวอย่าง dropdown 02",
        "ตัวอย่าง dropdown 03",
        "ตัวอย่าง dropdown 04",
      ],
    };
  },
  methods: {
    focusNext(event) { // enter and new focus (text input type).
      nextFocus.nextInput(event);
    },
  }
};
</script>
