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
      <template v-slot:header.new="{ item }">
        <v-btn depressed text class="font-14-500" v-bind="attrs" v-on="on">
          <v-icon color="base">mdi-plus-circle</v-icon>
          <span class="text-base text-gray-800 font-semiblod ml-1">New</span>
        </v-btn>
      </template>

      <template v-slot:item.number="{ item }">
        <div>
          <v-combobox
            
            @keydown.enter="getIndexListDropDown"
            label="กรุณาเลือก"
            dense
            :items="['นร1318R620900015352', 'EXEMPT99', 'EXEMPT3', '16-0026']"
            class="w-1/2 permit-field"
            color="base"
            solo
            outlined
            style="font-size: 14px"
          ></v-combobox>
        </div>
      </template>
      <template v-slot:item.agency="{ item }">
        <div>
          <v-combobox
            
            @keydown.enter="getIndexListDropDown"
            label="กรุณาเลือก"
            dense
            :items="[
              '994000740964',
              '994000160259',
              '994000159251',
              '994000163011',
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
          <v-btn
            class="rounded-lg"
            height="25"
            width="25"
            depressed
            x-small
            fab
            dark
            color="base"
            ><span class="text-base"></span
          ></v-btn>
        </div>
      </template>

      <template v-slot:item.date="{ item }">
        <div>
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
        <div>
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
          text: "เลขที่ใบอนุญาต",
          sortable: false,
          class: "font-14-500 ",
          value: "number",
        },
        {
          text: "วันที่ออก",
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
          text: "Tax หน่วยงานที่ออก",
          sortable: false,
          class: "font-14-500 ",
          value: "agency",
        },
        {
          text: "ชื่อหน่วยงาน",
          sortable: false,
          class: "font-14-500 ",
          value: "organization",
        },
        {
          text: "Action",
          sortable: false,
          class: "font-14-500 ",
          value: "action",
        },
        {
          text: "",
          sortable: false,
          class: "font-14-500 ",
          value: "new",
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
