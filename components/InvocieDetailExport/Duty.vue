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
            value="0"
            dense
            style="width: 65px"
            class="test font-12-300 label-align-right"
            color="base_ex"
            outlined
            type="number"
            hide-spin-buttons
          ></v-text-field>
        </td>
        <td style="width: 115px; padding: 4px">
          <v-text-field
            @keydown.enter="focusNext"
            hide-details
            value="0"
            style="width: 115px; heigth: 27px"
            class="font-12-300 label-align-right test"
            dense
            color="base_ex"
            outlined
            type="number"
            hide-spin-buttons
          ></v-text-field>
        </td>
        <td style="width: 120px; padding: 4px">
          <v-combobox
            @keydown.enter="focusNext"
            hide-details
            value="เลือก"
            :items="['ข้อมูล']"
            style="width: 120px; heigth: 27px"
            class="test font-14-300"
            dense
            color="base_ex"
            outlined
          ></v-combobox>
        </td>
        <td style="width: 110px; padding: 4px">
          <div class="flex">
            <v-text-field
              @keydown.enter="focusNext"
              hide-details
              value="0"
              style="width: 65px; heigth: 27px"
              class="test font-12-300 label-align-right"
              dense
              color="base_ex"
              outlined
              type="number"
              hide-spin-buttons
            ></v-text-field>
            <v-btn
              class="ml-2 rounded-lg"
              style="height: 27px !important"
              depressed
              x-small
              fab
              dark
              color="base_ex"
              >_
            </v-btn>
          </div>
        </td>
        <td style="width: 110px; padding: 4px">
          <v-text-field
            @keydown.enter="focusNext"
            hide-details
            value="9000"
            style="width: 110px; heigth: 27px"
            class="test font-12-300 label-align-right"
            dense
            color="base_ex"
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
              style="width: 60px; heigth: 27px"
              class="test font-12-300 label-align-right"
              dense
              color="base_ex"
              outlined
              type="number"
              hide-spin-buttons
            ></v-text-field>
          </div>
        </td>
        <td style="width: 110px; padding: 4px">
          <div class="flex">
            <v-text-field
              @keydown.enter="focusNext"
              hide-details
              value="0"
              style="width: 60px; heigth: 27px"
              class="test font-12-300 label-align-right"
              dense
              color="base_ex"
              outlined
              type="number"
              hide-spin-buttons
            ></v-text-field>
            <v-btn
              class="ml-2 rounded-lg"
              style="height: 27px !important"
              depressed
              x-small
              fab
              dark
              color="base_ex"
              >_
            </v-btn>
          </div>
        </td>
        <td style="width: 110px; padding: 4px">
          <v-text-field
            @keydown.enter="focusNext"
            hide-details
            value="0"
            style="width: 110px; heigth: 27px"
            class="test font-12-300 label-align-right"
            dense
            color="base_ex"
            outlined
            type="number"
            hide-spin-buttons
          ></v-text-field>
        </td>
        <td style="padding: 4px">
          <div class="flex">
            <v-combobox
              hide-details
              value="เลือก"
              :items="dutyDepositReasonCode"
              item-text="name"
              item-id="id"
              style="width: 100px; heigth: 27px"
              class="test font-14-300"
              dense
              color="base_ex"
              outlined
            ></v-combobox>
            <v-btn
              class="ml-2 rounded-lg"
              style="height: 27px !important"
              depressed
              x-small
              fab
              dark
              color="base_ex"
              >_
            </v-btn>
          </div>
        </td>
      </tr>
    </table>
    <div></div>
    <Core-Page color="base_ex" isExportPage="true"></Core-Page>
    <p id="btnFocusOut"></p>
  </div>
</template>

<script>
import dutyDepositReasonCode from "@/data/duty-deposit-reason-code.json";

// services
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
          text: " คำนวณตามสภาพ",
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
          text: "ภาษีปกติ",
          align: "text-align: center;",
          sortable: false,
          value: "nomal",
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
      ],
      desserts: [
        {
          type: "อากรขาออก",
          follow: 1,
          according: 1,
          normal: 1,
          reduce: 1,
          tax: 1,
          insurance: "1",
          balance: "1",
          c: "1",
          reason: "1",
          nomal: "1",
        },
      ],
      dutyDepositReasonCode: dutyDepositReasonCode,
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

.test
  > .v-text-field--outlined.v-input--dense.v-text-field--outlined
  > .v-input__control
  > .v-input__slot {
  min-height: 27px !important;
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
