<template>
  <div>
    <v-data-table
      hide-default-footer
      class="font-14-300"
      :headers="headers"
      :items="desserts"
      :items-per-page="20"
    >
      <template v-slot:header.new="{ item }">
        <div class="flex">
          <v-btn
            class="rounded-lg"
            depressed
            color="base_goods2"
            height="35"
            width="35"
            style="min-width: 0"
            dark
          >
            S</v-btn
          >
          <v-btn
            class="ml-1 rounded-lg"
            depressed
            color="base_goods2"
            height="35"
            width="35"
            style="min-width: 0"
            dark
          >
            P</v-btn
          >
        </div>
      </template>
      <template v-slot:item.no="{ item }">
        <div class="flex justify-center">
          <p class="font-12-500">{{ item.no }}</p>
        </div>
      </template>
      <template v-slot:item.declarationNo="{ item }">
        <div>
          <p class="font-12-500">{{ item.declarationNo }}</p>
        </div>
      </template>

      <template v-slot:item.branch="{ item }">
        <v-text-field
          @keydown.enter="focusNext"
          class="font-14-300"
          solo
          dense
          maxLength="6"
          label="ระบุข้อมูล"
          color="base_goods2"
          outlined
        ></v-text-field>
      </template>
      <template colspan="3" v-slot:item.branch="{ item }">
        <div v-if="!item.istotal">
          <v-text-field
            @keydown.enter="focusNext"
            class="font-14-300"
            solo
            dense
            :value="item.branch"
            maxLength="6"
            label="ระบุข้อมูล"
            color="base_goods2"
            outlined
          ></v-text-field>
        </div>
        <div v-else>
          <v-text-field
            style="position: absolute; width: calc(+15.5%)"
            @keydown.enter="focusNext"
            class="font-14-300"
            solo
            dense
            value="60"
            label="ระบุข้อมูล"
            color="base_goods2"
            outlined
          ></v-text-field>
        </div>
      </template>
      <template v-slot:item.package="{ item }">
        <div v-if="!item.istotal">
          <v-text-field
            @keydown.enter="focusNext"
            class="font-14-300"
            solo
            dense
            type="number"
            hide-spin-buttons
            :value="item.package"
            label="ระบุข้อมูล"
            color="base_goods2"
            outlined
            maxLength="4"
          ></v-text-field>
        </div>
        <div v-else></div>
      </template>
      <template v-slot:item.grossWeight="{ item }">
        <v-text-field
          @keydown.enter="focusNext"
          class="font-14-300"
          solo
          dense
          type="number"
          hide-spin-buttons
          :value="item.grossWeight"
          label="ระบุข้อมูล"
          color="base_goods2"
          outlined
        ></v-text-field>
      </template>
      <template v-slot:item.masterBL="{ item }">
        <div v-if="!item.istotal">
          <v-text-field
            @keydown.enter="focusNext"
            class="font-14-300"
            solo
            dense
            :value="item.masterBL"
            label="ระบุข้อมูล"
            color="base_goods2"
            outlined
          ></v-text-field>
        </div>
        <div v-else></div>
      </template>
      <template v-slot:item.houseBL="{ item }">
        <div v-if="!item.istotal">
          <v-text-field
            @keydown.enter="focusNext"
            class="font-14-300"
            solo
            dense
            :value="item.houseBL"
            label="ระบุข้อมูล"
            color="base_goods2"
            outlined
          ></v-text-field>
        </div>
        <div v-else></div>
      </template>
      <template v-slot:item.company="{ item }">
        <div>
          <div v-if="!item.istotal">
            <v-combobox
            
@keydown.enter="getIndexListDropDown"
              label="กรุณาเลือก"
              :value="item.company"
              dense
              :items="['ทดสอบ', 'ทดสอบ2', 'ทดสอบ3']"
              solo
              color="base_goods2"
              outlined
            ></v-combobox>
          </div>
          <div v-else>
            <div class="flex justify-end">
              <p class="font-13-500">รวม / ยกไป</p>
            </div>
          </div>
        </div>
      </template>

      <template v-slot:item.unit="{ item }">
        <div>
          <v-combobox
          
@keydown.enter="getIndexListDropDown"
            label="กรุณาเลือก"
            dense
            :value="item.unit"
            :items="data.packageUnit"
            item-text="id"
            item-id="id"
            solo
            color="base_goods2"
            outlined
          >
            <template slot="item" slot-scope="data">
              <div class="dropdown-line2">
                <div>
                  {{ data.item.id }}
                </div>
                <div></div>
                <div>{{ data.item.name }}</div>
              </div>
            </template>
          </v-combobox>
        </div>
      </template>

      <template v-slot:item.unit2="{ item }">
        <div>
          <v-combobox
          
@keydown.enter="getIndexListDropDown"
            label="กรุณาเลือก"
            dense
            :value="item.unit2"
            :items="data.unitGross"
            item-text="id"
            item-id="id"
            solo
            color="base_goods2"
            outlined
          >
            <template slot="item" slot-scope="data">
              <div class="dropdown-line2">
                <div>
                  {{ data.item.id }}
                </div>
                <div></div>
                <div>{{ data.item.name }}</div>
              </div>
            </template>
          </v-combobox>
        </div>
      </template>
      <template v-slot:item.new="{ item }">
        <div v-if="!item.istotal" class="flex justify-center md:md:space-x-2">
          <v-btn
            class="rounded-lg"
            depressed
            x-small
            fab
            dark
            color="base_goods2"
            ><span class="text-base">D</span></v-btn
          >
        </div>
      </template>
    </v-data-table>
    <p id="btnFocusOut"></p>
  </div>
</template>
  
  <script>
import weightUnit from "@/data/weight-unit";
import packageUnit from "@/data/package-unit";
import nextFocus from "@/services/nextFocus.js";

export default {
  data() {
    return {
      countState: 1,
      data: {
        unitGross: weightUnit,
        packageUnit: packageUnit,
      },
      items: ["ทดสอบ 1", "ทดสอบ 2", "ทดสอบ 3"],
      headers: [
        {
          text: "Item",
          align: "center",
          sortable: false,
          class: "font-14-500 ",
          value: "no",
        },
        {
          text: "Declaration No",
          sortable: false,
          class: "font-14-500 ",
          value: "declarationNo",
        },
        {
          text: "Company",
          sortable: false,
          class: "font-14-500 ",
          value: "company",
          width: "14%",
        },
        {
          text: "Branch",
          sortable: false,
          class: "font-14-500 ",
          value: "branch",
          width: "10%",
        },
        {
          text: "Package",
          sortable: false,
          class: "font-14-500 ",
          value: "package",
        },
        {
          text: "Unit",
          sortable: false,
          class: "font-14-500 ",
          value: "unit",
        },
        {
          text: "Gross Weight",
          sortable: false,
          class: "font-14-500 ",
          value: "grossWeight",
          width: "10%",
        },
        {
          text: "Unit",
          sortable: false,
          class: "font-14-500 ",
          value: "unit2",
          width: "9%",
        },
        {
          text: "House B/L",
          sortable: false,
          class: "font-14-500 ",
          value: "houseBL",
        },
        {
          text: "Master B/L",
          sortable: false,
          class: "font-14-500 ",
          value: "masterBL",
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
          declarationNo: "A0071651107559",
          company: "บริษัท อีดีไอ เซอร์วิส แอพพลิเคชั่น โพรไวเดอร์ จากัด",
          branch: "000000",
          package: 17,
          unit: "PK",
          grossWeight: "20650.000",
          unit2: "KGM",
          masterBL: "N/A",
          houseBL: "N/A",
        },

        {
          no: "",
          declarationNo: "",
          company: "รวมยกไป",
          branch: "000000",
          unit: "PX",
          grossWeight: "20650.000",
          unit2: "KGM",
          istotal: true,
        },
      ],
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
    
    //-------------------------------
  },
};
</script>

<style scoped>
::v-deep(.v-text-field--outlined.v-input--dense.v-text-field--outlined
    > .v-input__control
    > .v-input__slot) {
  min-height: 9px !important;
  font-size: 12px !important;
}
</style>
  