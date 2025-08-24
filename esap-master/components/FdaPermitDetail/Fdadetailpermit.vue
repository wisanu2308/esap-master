<template>
  <div class="w-full">
    <v-data-table
      hide-default-footer
      class="font-14-300 mt-4"
      :headers="headers"
      :items="desserts"
      :items-per-page="20"
      style="width: 1200px"
    >
      
      <template v-slot:item.LotNumber="{ item }">
        <div class="" style="width: 180px">
          <v-text-field
            class="font-14-300 label-align-right2"
            required
            solo
            dense
            label="ระบุ"
            color="base"
            outlined
            maxLength="30"
            @keydown.enter="focusNext"
          ></v-text-field>
        </div>
      </template>

      <template v-slot:item.Measurement="{ item }">
        <div class="" style="width: 120px">
          <v-text-field
            class="font-14-300 label-align-right2"
            :rules="[false]"
            required
            solo
            dense
            label="0.000"
            color="base"
            outlined
            @keydown.enter="focusNext"
            @change="convertNumFormat"
          ></v-text-field>

        </div>
      </template>

      <template v-slot:item.MeasurementUnitCode="{ item }">
        <div class="" style="width: 75px">
          <v-combobox
            
            @keydown.enter="getIndexListDropDown"
            label=" "
            dense
            :items="[
              'U2',
              '19',
              'TY',
              'TK',
            ]"
            solo
            class="w-1/2 permit-field"
            style="font-size: 14px"
            color="base"
            outlined
          ></v-combobox>
        </div>
      </template>

      <template v-slot:item.Quantity="{ item }">
        <div class="" style="width: 120px">
          <v-text-field
            class="font-14-300 label-align-right2"
            :rules="[false]"
            required
            solo
            dense
            label="0.000"
            color="base"
            outlined
            @keydown.enter="focusNext"
            @change="convertNumFormat"
          ></v-text-field>

        </div>
      </template>

      <template v-slot:item.QuantityUnitCode="{ item }">
        <div class="" style="width: 80px">
          <v-combobox
            
            @keydown.enter="getIndexListDropDown"
            label=" "
            dense
            :items="[
              'C62',
              'KGM',
              'M98',
              'KD',
            ]"
            solo
            class="w-1/2 permit-field"
            style="font-size: 14px"
            color="base"
            outlined
          ></v-combobox>
        </div>
      </template>

      <template v-slot:item.organization="{ item }">
        <div class="" style="width: 250px">
          {{ item.organization }}
        </div>
      </template>

      <template v-slot:item.action="{ item }">
        <div class="flex md:md:space-x-2">
          <v-btn
            class="rounded-lg"
            height="25"
            width="25"
            depressed
            x-small
            fab
            dark
            color="base"
            ><span class="text-base">S</span></v-btn
          >
          <v-btn
            class="rounded-lg"
            depressed
            height="25"
            width="25"
            x-small
            fab
            dark
            color="base"
            ><span class="text-base">D</span></v-btn
          >
          
        </div>
      </template>

      <template v-slot:item.date="{ item }">
        <div class="" style="width: 120px">
          <v-menu
            :close-on-content-click="true"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="auto"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                @keydown.enter="focusNext"
                hide-details
                class="tt font-13-300"
                outlined
                placeholder="dd/mm/yyyy"
                append-icon="mdi-calendar"
                readonly
                solo
                style="width: 200px"
                color="base"
                v-on="on"
                @click:append="on.click"
                :value="getDateFormat(item.date)"
              ></v-text-field>
            </template>
            <v-date-picker v-model="item.date" no-title></v-date-picker>
          </v-menu>
        </div>
      </template>

      <template v-slot:item.expiration="{ item }">
        <div class="" style="width: 120px">
          <v-menu
            :close-on-content-click="true"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="auto"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                style="width: 200px"
                @keydown.enter="focusNext"
                hide-details
                class="tt font-13-300"
                outlined
                placeholder="dd/mm/yyyy"
                append-icon="mdi-calendar"
                readonly
                solo
                height="36px"
                color="base"
                v-on="on"
                @click:append="on.click"
                :value="getDateFormat(item.expiration)"
              ></v-text-field>
            </template>
            <v-date-picker v-model="item.expiration" no-title></v-date-picker>
          </v-menu>
        </div>
      </template>
    </v-data-table>
    <Core-Page></Core-Page>
    <p id="btnFocusOut"></p>
  </div>
</template>

<script>
// service
import dateFormat from "@/services/dateFormat.js";
import nextFocus from "@/services/nextFocus.js";

export default {
  data() {
    return {
      countState: 1,
      nextIndex: 0,
      currentIndex: 0,
      items: ["ทดสอบ 1", "ทดสอบ 2", "ทดสอบ 3"],
      headers: [
        {
          text: "Item",
          align: "start",
          sortable: false,
          class: "font-14-500 ",
          value: "no",
        },
        {
          text: "Lot Number",
          sortable: false,
          class: "font-14-500 ",
          value: "LotNumber",
        },
        {
          text: "วันที่ผลิต",
          sortable: false,
          class: "font-14-500 ",
          value: "date",
        },
        {
          text: " วันที่หมดอายุ",
          sortable: false,
          class: "font-14-500 ",
          value: "expiration",
        },
        {
          text: " ขนาดบรรจุุ",
          sortable: false,
          class: "font-14-500 ",
          value: "Measurement",
        },
        {
          text: "หน่วย",
          sortable: false,
          class: "font-14-500 ",
          value: "MeasurementUnitCode",
        },
        {
          text: "ปริมาณ ผลิต/นำเข้า",
          sortable: false,
          class: "font-14-500 ",
          value: "Quantity",
        },
        {
          text: "หน่วย",
          sortable: false,
          class: "font-14-500 ",
          value: "QuantityUnitCode",
        },
        {
          text: "Action",
          sortable: false,
          class: "font-14-500 ",
          value: "action",
        },
        
      ],
      desserts: [
        {
          no: "1",
          date: "2022-01-01",
          expiration: "2022-01-01",
          organization: "กรมศุลกากร กรมศุลกากร กรมศุลกากร กรมศุลกากร",
        },
        {
          no: "2",
          date: "2022-01-01",
          expiration: "2022-01-01",
          organization: "กรมประมง",
        },
        {
          no: "3",
          date: "2022-01-01",
          expiration: "2022-01-01",
          organization: "กรมประมง กรมศุลกากร",
        },
      ],
      
    };
  },
  methods: {
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
    getDateFormat(date) {
      return dateFormat.convertDateFormat(date);
    },
  },
};
</script>

<style scoped>
::v-deep(.v-text-field--outlined.v-input--dense.v-text-field--outlined
    > .v-input__control
    > .v-input__slot) {
  min-height: 16px !important;
}
</style>
