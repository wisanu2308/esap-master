<template>
  <div>
    <table class="dd mt-6">
      <tr class="vftable">
        <th v-for="(head, i) in headers" :style="head.align" :key="i">
          <span :class="head.class"> {{ head.text }} </span>
        </th>
      </tr>
      <tr
        v-for="(dessert, ix) in desserts"
        :key="ix"
        v-if="ix != 3 && !(ix > 3 && ix < desserts.length - 1)"
      >
        <td style="padding: 4px">
          <span class="font-12-500" style="width: 150px !important">{{
            dessert.type
          }}</span>
        </td>
        <td style="width: 65px; padding: 1px">
          <v-text-field
            @keydown.enter="focusNext"
            hide-details
            value="10"
            type="number"
            hide-spin-buttons
            dense
            style="width: 60px"
            class="test font-12-300 label-align-right"
            color="base"
            outlined
          ></v-text-field>
        </td>
        <td style="width: 65px; padding: 4px">
          <v-text-field
            @keydown.enter="focusNext"
            hide-details
            value="0"
            style="width: 60px; heigth: 27px"
            class="font-12-300 label-align-right test"
            dense
            color="base"
            outlined
            type="number"
            hide-spin-buttons
          ></v-text-field>
        </td>
        <td style="width: 80px; padding: 4px">
          <v-text-field
            @keydown.enter="focusNext"
            hide-details
            value="9000"
            class="test font-12-300 label-align-right"
            style="width: 110px; heigth: 27px"
            dense
            color="base"
            outlined
            type="number"
            hide-spin-buttons
          ></v-text-field>
        </td>
        <td style="width: 110px; padding: 4px">
          <div class="flex">
            <v-text-field
              @keydown.enter="focusNext"
              hide-details
              value="0"
              style="width: 10px; heigth: 27px"
              class="test font-12-300 label-align-right"
              dense
              color="base"
              outlined
              type="number"
              hide-spin-buttons
            ></v-text-field>
            <v-btn
              class="ml-2 rounded-lg"
              depressed
              x-small
              fab
              dark
              color="base"
              >_</v-btn
            >
          </div>
        </td>
        <td style="padding: 4px">
          <v-text-field
            @keydown.enter="focusNext"
            hide-details
            value="9000"
            style="width: 110px; heigth: 27px"
            class="test font-12-300 label-align-right"
            dense
            color="base"
            outlined
            type="number"
            hide-spin-buttons
          ></v-text-field>
        </td>
        <td style="padding: 4px">
          <div class="flex">
            <v-text-field
              @keydown.enter="focusNext"
              hide-details
              value="0"
              style="width: 42px; heigth: 27px"
              class="test font-12-300 label-align-right"
              dense
              color="base"
              outlined
              type="number"
              hide-spin-buttons
            ></v-text-field>
            <v-btn
              class="ml-2 rounded-lg"
              depressed
              x-small
              fab
              dark
              color="base"
              >_</v-btn
            >
          </div>
        </td>
        <td style="width: 80px; padding: 4px">
          <v-text-field
            @keydown.enter="focusNext"
            hide-details
            value="0"
            style="width: 110px; heigth: 27px"
            class="test font-12-300 label-align-right"
            dense
            color="base"
            outlined
            type="number"
            hide-spin-buttons
          ></v-text-field>
        </td>
        <td style="padding: 4px">
          <div class="flex">
            <v-combobox
              @keydown.enter="focusNext"
              hide-details
              value="กรุณาเลือก"
              :items="data.dutyDepositReasonCode"
              item-text="name"
              item-id="id"
              style="width: 150px; heigth: 27px"
              class="test font-14-300"
              dense
              color="base"
              outlined
            ></v-combobox>
            <v-btn
              class="ml-2 rounded-lg"
              depressed
              x-small
              fab
              dark
              color="base"
              >_</v-btn
            >
          </div>
        </td>
        <td style="width: 80px; padding: 4px">
          <v-text-field
            @keydown.enter="focusNext"
            hide-details
            value="0"
            style="width: 80px; heigth: 27px"
            class="test font-12-300 label-align-right"
            dense
            color="base"
            outlined
            type="number"
            hide-spin-buttons
          ></v-text-field>
        </td>
        <td style="width: 80px; padding: 4px">
          <v-text-field
            @keydown.enter="focusNext"
            hide-details
            value="0"
            style="width: 80px; heigth: 27px"
            class="test font-12-300 label-align-right"
            dense
            color="base"
            outlined
            type="number"
            hide-spin-buttons
          ></v-text-field>
        </td>
      </tr>
      <tr v-else-if="ix > 3 && ix < desserts.length - 1">
        <td class="font-12-500" style="width: 300px; padding: 4px">
          {{ dessert.type }}
        </td>
        <td style="width: 80px; padding: 4px">
          <v-text-field
            @keydown.enter="focusNext"
            hide-details
            value="0 "
            dense
            style="width: 60px"
            class="test font-12-300 label-align-right"
            color="base"
            outlined
            type="number"
            hide-spin-buttons
          ></v-text-field>
        </td>
        <td style="width: 80px; padding: 4px">
          <v-text-field
            @keydown.enter="focusNext"
            hide-details
            value="0"
            style="width: 60px; heigth: 27px"
            class="test font-12-300 label-align-right"
            dense
            color="base"
            outlined
            type="number"
            hide-spin-buttons
          ></v-text-field>
        </td>
        <td style="width: 80px; padding: 4px">
          <v-text-field
            @keydown.enter="focusNext"
            hide-details
            value=" 0"
            style="width: 110px; heigth: 27px"
            class="test font-12-300 label-align-right"
            dense
            color="base"
            outlined
            type="number"
            hide-spin-buttons
          ></v-text-field>
        </td>
        <td style="padding: 4px">
          <div class="flex">
            <v-text-field
              @keydown.enter="focusNext"
              hide-details
              value="0"
              style="width: 30px; heigth: 27px"
              class="test font-12-300 label-align-right"
              dense
              color="base"
              outlined
              type="number"
              hide-spin-buttons
            ></v-text-field>
            <v-btn
              class="ml-2 rounded-lg"
              depressed
              x-small
              fab
              dark
              color="base"
              >_</v-btn
            >
          </div>
        </td>
        <td style="padding: 4px">
          <v-text-field
            @keydown.enter="focusNext"
            hide-details
            value="0"
            style="width: 110px; heigth: 27px"
            class="test font-12-300 label-align-right"
            dense
            color="base"
            outlined
            type="number"
            hide-spin-buttons
          ></v-text-field>
        </td>
        <td style="padding: 4px"></td>
        <td style="padding: 4px"></td>
        <td style="padding: 4px"></td>
        <td style="padding: 4px"></td>
        <td style="padding: 4px"></td>
      </tr>
      <tr v-else-if="ix == 3">
        <td class="font-12-500" style="width: 180px; padding: 4px">
          {{ dessert.type }}
        </td>
        <td style="width: 65px; padding: 1px">
          <v-text-field
            @keydown.enter="focusNext"
            hide-details
            value="10"
            dense
            style="width: 60px"
            class="test font-12-300 label-align-right"
            color="base"
            outlined
            type="number"
            hide-spin-buttons
          ></v-text-field>
        </td>
        <td style="width: 80px; padding: 4px">
          <v-text-field
            @keydown.enter="focusNext"
            hide-details
            value="0"
            style="width: 60px; heigth: 27px"
            class="test font-12-300 label-align-right"
            dense
            color="base"
            outlined
          ></v-text-field>
        </td>
        <td style="width: 110px; padding: 4px">
          <v-text-field
            @keydown.enter="focusNext"
            hide-details
            value="0"
            style="width: 110px; heigth: 27px"
            class="test font-12-300 label-align-right"
            dense
            color="base"
            outlined
            type="number"
            hide-spin-buttons
          ></v-text-field>
        </td>
        <td style="padding: 4px">
          <div class="flex">
            <v-text-field
              @keydown.enter="focusNext"
              hide-details
              value="0"
              style="width: 30px; heigth: 27px"
              class="test font-12-300 label-align-right"
              dense
              color="base"
              outlined
              type="number"
              hide-spin-buttons
            ></v-text-field>
            <v-btn
              class="ml-2 rounded-lg"
              depressed
              x-small
              fab
              dark
              color="base"
              >_</v-btn
            >
          </div>
        </td>
        <td style="width: 80px; padding: 4px">
          <v-text-field
            @keydown.enter="focusNext"
            hide-details
            value="0"
            style="width: 110px; heigth: 27px"
            class="test font-12-300 label-align-right"
            dense
            color="base"
            outlined
            type="number"
            hide-spin-buttons
          ></v-text-field>
        </td>
        <td style="padding: 4px"></td>
        <td style="padding: 4px"></td>
        <td style="padding: 4px">
          <div class="text-right">
            <span class="font-12-500">จำนวนเดือน </span>
          </div>
        </td>
        <td colspan="2" style="padding: 4px">
          <v-text-field
            @keydown.enter="focusNext"
            hide-details
            value="0"
            style="width: 80px; heigth: 27px"
            class="test font-12-300 label-align-right"
            dense
            color="base"
            outlined
            type="number"
            hide-spin-buttons
          ></v-text-field>
        </td>
        <td style="padding: 4px"></td>
      </tr>
    </table>
    <!-- /////////////// -->
    <table>
      <tr>
        <td style="width: 300px !important">
          <span class="font-12-500" style="width: 100px !important"
            >ฐานภาษีมูลค่าเพิ่ม</span
          >
        </td>
        <td>
          <v-text-field
            @keydown.enter="focusNext"
            hide-details
            value="189255.25"
            dense
            style="width: 130px"
            class="test font-12-300 label-align-right bg-grey-200"
            color="base"
            outlined
            type="number"
            hide-spin-buttons
          ></v-text-field>
        </td>
        <td v-for="i in 50"></td>
      </tr>
    </table>
    <div></div>
    <Core-Page></Core-Page>
    <p id="btnFocusOut"></p>
  </div>
</template>

<script>
import DutyDepositReasonCode from "@/data/duty-deposit-reason-code.json";

//services
import nextFocus from "@/services/nextFocus.js";

export default {
  data() {
    return {
      headers: [
        {
          text: "ประเภทค่าภาษีอากร",
          align: "text-align: start;",
          sortable: false,
          value: "type",
          class: "font-13-500",
        },
        {
          text: "ตาม %",
          align: "text-align: center;",
          sortable: false,
          value: "follow",
          class: "font-13-500",
        },
        {
          text: "ตามสภาพ",
          sortable: false,
          align: "text-align: center;",
          value: "according",
          class: "font-13-500",
        },
        {
          text: " อากรขาเข้าปกติ",
          align: "text-align: center;",
          class: "font-13-500",
          sortable: false,
          value: "normal",
        },
        {
          text: "% ลดหย่อน",
          align: "text-align: center;",
          sortable: false,
          value: "reduce",
          class: "font-13-500",
        },
        {
          text: "ภาษีที่ต้องชำระ",
          align: "text-align: center;",
          class: "font-13-500",
          sortable: false,
          value: "tax",
        },
        {
          text: "% วางประกัน",
          align: "text-align: center;",
          sortable: false,
          value: "insurance",
          class: "font-13-500",
        },
        {
          text: "ยอดประกัน",
          align: "text-align: center;",
          class: "font-13-500",
          sortable: false,
          value: "c",
        },
        {
          text: "เหตุผล",
          class: "font-13-500",
          align: "text-align: center;",
          sortable: false,
          value: "reason",
        },
        {
          text: "% เงินเพิ่ม",
          class: "font-13-500",
          align: "text-align: center;",
          sortable: false,
          value: "percentextra",
        },
        {
          text: "เงินเพิ่ม",
          sortable: false,
          align: "text-align: center;",
          class: "font-13-500",
          value: "extra",
        },
      ],
      desserts: [
        {
          type: "อากรเข้า",
          follow: 1,
          according: 1,
          normal: 1,
          reduce: 1,
          tax: 1,
          insurance: "1",
          balance: "1",
          c: "1",
          reason: "1",
          percentextra: "1",
          extra: "1",
        },
        {
          type: "ภาษีสรรสามิต",
          follow: 1,
          according: 1,
          normal: 1,
          reduce: 1,
          tax: 1,
          insurance: "1",
          balance: "1",
          c: "1",
          reason: "1",
          percentextra: "1",
          extra: "1",
        },
        {
          type: "ภาษีเพื่อมหาดไทย",
          follow: 1,
          according: 1,
          normal: 1,
          reduce: 1,
          tax: 1,
          insurance: "1",
          balance: "1",
          c: "1",
          reason: "1",
          percentextra: "1",
          extra: "1",
        },
        {
          type: "ค่าอากรพิเศษ",
          follow: 1,
          according: 1,
          normal: 1,
          reduce: 1,
          tax: 1,
        },
        {
          type: "ค่าธรรมเนียม",
          follow: 1,
          according: 1,
          normal: 1,
          reduce: 1,
          tax: 1,
        },
        {
          type: "ค่าธรรมเนียมพิเศษกระทรวงพาณิชย์",
          follow: 1,
          according: 1,
          normal: 1,
          reduce: 1,
          tax: 1,
        },
        {
          type: "ค่าอากรตอบโต้การทุ่มตลาดและการอุดหนุน",
          follow: 1,
          according: 1,
          normal: 1,
          reduce: 1,
          tax: 1,
        },
        {
          type: "ค่าอากรชั่วคราวตามมาตราปกป้อง",
          follow: 1,
          according: 1,
          normal: 1,
          reduce: 1,
          tax: 1,
        },
        {
          type: "เงินกองทุนน้ำมันเชื้อเพลิง",
          follow: 1,
          according: 1,
          normal: 1,
          reduce: 1,
          tax: 1,
        },
        {
          type: "เงินกองทุนเพื่อส่งเสริมการอนุรักษ์พลังงาน",
          follow: 1,
          according: 1,
          normal: 1,
          reduce: 1,
          tax: 1,
        },
        {
          type: "เงินกองทุน - สุรา",
          follow: 1,
          according: 1,
          normal: 1,
          reduce: 1,
          tax: 1,
        },
        {
          type: "เงินกองทุนบำรุง ส.ส.ท. สุรา",
          follow: 1,
          according: 1,
          normal: 1,
          reduce: 1,
          tax: 1,
        },
        {
          type: "เงินกองทุนเพื่อกีฬาแห่งชาติ - สุรา",
          follow: 1,
          according: 1,
          normal: 1,
          reduce: 1,
          tax: 1,
        },
        {
          type: "เงินกองทุนเพื่อผู้สูงอายุ - สุรา",
          follow: 1,
          according: 1,
          normal: 1,
          reduce: 1,
          tax: 1,
        },
        {
          type: "เงินกองทุน - ยาสูบ",
          follow: 1,
          according: 1,
          normal: 1,
          reduce: 1,
          tax: 1,
        },
        {
          type: "เงินกองทุนบำรุง ส.ส.ท. ยาสูบ",
          follow: 1,
          according: 1,
          normal: 1,
          reduce: 1,
          tax: 1,
        },
        {
          type: "เงินกองทุนเพื่อกีฬาแห่งชาติ - ยาสูบ",
          follow: 1,
          according: 1,
          normal: 1,
          reduce: 1,
          tax: 1,
        },
        {
          type: "เงินกองทุนเพื่อผู้สูงอายุ - ยาสูบ",
          follow: 1,
          according: 1,
          normal: 1,
          reduce: 1,
          tax: 1,
        },
        {
          type: "ภาษีมูลค่าเพิ่ม",
          follow: 1,
          according: 1,
          normal: 1,
          reduce: 1,
          tax: 1,

          insurance: "1",
          balance: "1",
          c: "1",
          reason: "1",
          percentextra: "1",
          extra: "1",
        },
      ],
      data: {
        dutyDepositReasonCode: DutyDepositReasonCode,
      },
    };
  },
  methods: {
    focusNext(e) {
      nextFocus.nextInput(e);
    },
  },
};
</script>
<style scoped>
.dd > tr > td {
  padding: 0px;
  height: 49px !important;
}
.xxw {
  width: 60px;
}

.bbtn {
  width: 110px;
  height: 27px;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td {
  border-bottom: 1px solid #eff2f7;
  text-align: left;
  padding: 2px;
  height: 49px !important;
}
th {
  border-bottom: 1px solid #eff2f7;
  text-align: left;
  padding: 2px;
  height: 49px !important;
}
.td {
  font-weight: 500 !important;
  font-size: 12px !important;
  line-height: 20px !important;
}
.vftable {
  background-color: #eff2f7;
}

.v-select__slot .v-input__slot {
  min-height: 27px !important;
}
.v-autocomplete.v-select.v-input--is-focused input {
  min-width: 55px !important;
}

/* triangle indropdown */
::v-deep(.v-icon.notranslate.mdi.mdi-menu-down.theme--light) {
  margin-top: -13px !important;
}
</style>
