<template>
  <div>
    <div class="flex w-full flex-col md:flex-row">
      <div class="w-full md:w-7/12">
        <v-card class="p-1 mb-6 mt-8" height="176" width="733">
          <div class="p-4 hx-168 wx-725 bg-gray-2">
            <label class="font-18-600">สิทธิประโยชน์</label>
            <div class="grid grid-cols-3">
              <div class="flex flex-col md:flex-row">
                <v-checkbox
                  dense
                  class="font-13-400"
                  hide-details
                  label="BOI"
                  v-model="checkbox"
                  color="base"
                ></v-checkbox>

                <v-btn
                  class="rounded-lg mt-1 mr-8"
                  style="margin-left: 68px"
                  fab
                  x-small
                  height="24"
                  width="24"
                  depressed
                  color="esap_primary"
                  dark
                >
                  _</v-btn
                >
              </div>
              <div class="flex flex-col md:flex-row">
                <v-checkbox
                  dense
                  class="font-13-400"
                  hide-details
                  label="มาตรา29"
                  color="base"
                ></v-checkbox>

                <v-btn
                  class="ml-7 rounded-lg mt-1 mr-8"
                  fab
                  x-small
                  height="24"
                  width="24"
                  depressed
                  color="esap_primary"
                  dark
                >
                  _</v-btn
                >
              </div>
              <div class="flex flex-col md:flex-row">
                <v-checkbox
                  dense
                  class="font-13-400"
                  hide-details
                  label="ฺBond"
                  color="base"
                ></v-checkbox>

                <v-btn
                  class="rounded-lg mt-1 mr-8"
                  style="margin-left: 55px"
                  fab
                  x-small
                  depressed
                  height="24"
                  width="24"
                  color="esap_primary"
                  dark
                >
                  _</v-btn
                >
              </div>
              <div class="flex flex-col md:flex-row">
                <v-checkbox
                  dense
                  class="font-13-400"
                  hide-details
                  label="Re-Import"
                  color="base"
                ></v-checkbox>
                <v-btn
                  class="ml-7 rounded-lg mt-1 mr-8"
                  fab
                  x-small
                  depressed
                  height="24"
                  width="24"
                  color="esap_primary"
                  dark
                >
                  _</v-btn
                >
              </div>
              <div class="flex flex-col md:flex-row">
                <v-checkbox
                  dense
                  class="font-13-400"
                  hide-details
                  label="IEAT"
                  color="base"
                ></v-checkbox>
                <v-btn
                  class="rounded-lg mt-1 mr-8"
                  style="margin-left: 50px"
                  fab
                  height="24"
                  width="24"
                  x-small
                  depressed
                  color="esap_primary"
                  dark
                >
                  _</v-btn
                >
              </div>
              <div class="flex flex-col md:flex-row">
                <v-checkbox
                  dense
                  class="font-13-400"
                  hide-details
                  label="Free Zone"
                  color="base"
                ></v-checkbox>

                <v-btn
                  class="ml-7 rounded-lg mt-1 mr-8"
                  fab
                  height="24"
                  width="24"
                  x-small
                  depressed
                  color="esap_primary"
                  dark
                >
                  _</v-btn
                >
              </div>
              <div class="flex flex-col md:flex-row">
                <v-checkbox
                  dense
                  class="font-13-400"
                  hide-details
                  label="Re-Export"
                  color="base"
                ></v-checkbox>

                <v-btn
                  class="ml-7 rounded-lg mt-1 mr-8"
                  fab
                  height="24"
                  width="24"
                  x-small
                  depressed
                  color="esap_primary"
                  dark
                >
                  _</v-btn
                >
              </div>
              <div class="flex flex-col md:flex-row">
                <v-checkbox
                  dense
                  class="font-13-400"
                  hide-details
                  label="Several"
                  color="base"
                ></v-checkbox>

                <v-btn
                  class="rounded-lg mt-1 mr-8"
                  style="margin-left: 33px"
                  fab
                  x-small
                  height="24"
                  width="24"
                  depressed
                  color="esap_primary"
                  dark
                >
                  _</v-btn
                >
              </div>
              <div class="flex flex-col md:flex-row">
                <v-checkbox
                  dense
                  class="font-13-400"
                  hide-details
                  label="FOC"
                  color="base"
                ></v-checkbox>

                <v-btn
                  style="margin-left: 62px"
                  class="rounded-lg mt-1 mr-8"
                  fab
                  x-small
                  depressed
                  height="24"
                  width="24"
                  color="esap_primary"
                  dark
                >
                  _</v-btn
                >
              </div>
            </div>
          </div>
        </v-card>
        <div class="flex flex-col md:flex-row md:space-x-4">
          <div class="w-full md:w-1/2">
            <label class="font-13-400">Declaration No.</label>
            <div class="flex flex-col md:flex-row md:space-x-4">
              <v-text-field
                @keydown.enter="focusNext"
                class="font-14-300"
                dense
                color="base"
                outlined
                maxLength="14"
                v-model="form.declarationNo"
                label="ระบุข้อมูล"
                solo
              ></v-text-field>
              <v-btn
                fab
                small
                class="ml-3 rounded-lg"
                depressed
                color="esap_primary"
                dark
              >
                _</v-btn
              >
            </div>
          </div>

          <div class="w-full md:w-1/2">
            <label class="font-13-400">Line No.</label>
            <div class="flex flex-col md:flex-row md:space-x-4">
              <v-text-field
                @keydown.enter="focusNext"
                class="font-14-300"
                value="0"
                dense
                color="base"
                maxLength="4"
                outlined
                v-model="form.lineNo"
                label="ระบุข้อมูล"
                solo
              >
              </v-text-field>
            </div>
          </div>
        </div>

        <div class="flex flex-col md:flex-row md:space-x-4">
          <div class="w-full md:w-1/2">
            <label class="font-13-400">Company Product</label>
            <div class="flex flex-col md:flex-row md:space-x-4">
              <v-text-field
                @keydown.enter="focusNext"
                class="font-14-300"
                dense
                color="base"
                maxLength="35"
                outlined
                label="ระบุข้อมูล"
                solo
              ></v-text-field>
              <v-btn
                fab
                small
                class="ml-3 rounded-lg"
                depressed
                color="esap_primary"
                dark
              >
                _</v-btn
              >
            </div>
          </div>

          <div class="w-full md:w-1/2">
            <label class="font-13-400">Customs Product</label>
            <div class="flex flex-col md:flex-row md:space-x-4">
              <v-text-field
                @keydown.enter="focusNext"
                class="font-14-300"
                dense
                color="base"
                maxLength="35"
                outlined
                label="ระบุข้อมูล"
                solo
              ></v-text-field>
              <v-btn
                fab
                small
                class="ml-3 rounded-lg"
                depressed
                color="esap_primary"
                dark
              >
                _</v-btn
              >
            </div>
          </div>
        </div>

        <div class="flex flex-col md:flex-row md:space-x-4">
          <div class="w-full md:w-1/2">
            <label class="font-13-400">Product Attribute 1</label>
            <div class="flex flex-col md:flex-row md:space-x-4">
              <v-text-field
                @keydown.enter="focusNext"
                class="font-14-300"
                dense
                color="base"
                maxLength="35"
                outlined
                label="ระบุข้อมูล"
                solo
              ></v-text-field>
              <v-btn
                fab
                small
                class="ml-3 rounded-lg"
                depressed
                color="esap_primary"
                dark
              >
                _</v-btn
              >
            </div>
          </div>

          <div class="w-full md:w-1/2">
            <label class="font-13-400">Product Attribute 2</label>
            <div class="flex flex-col md:flex-row md:space-x-4">
              <v-text-field
                @keydown.enter="focusNext"
                class="font-14-300"
                dense
                color="base"
                maxLength="35"
                outlined
                label="ระบุข้อมูล"
                solo
              ></v-text-field>
              <v-btn
                fab
                small
                class="ml-3 rounded-lg"
                depressed
                color="esap_primary"
                dark
              >
                _</v-btn
              >
            </div>
          </div>
        </div>

        <div class="flex flex-col md:flex-row md:space-x-4">
          <div class="w-full md:w-1/2">
            <label class="font-13-400">Import Tax Incentives ID</label>
            <div class="flex flex-col md:flex-row md:space-x-4">
              <v-combobox
                
                @keydown.enter="getIndexListDropDown"
                label="กรุณาเลือก"
                :items="items"
                maxLength="17"
                dense
                class="font-14-300"
                background-color="white"
                color="base"
                outlined
                solo
              ></v-combobox>
              <v-btn
                fab
                small
                class="ml-3 rounded-lg"
                depressed
                color="esap_primary"
                dark
              >
                _</v-btn
              >
            </div>
          </div>

          <div class="w-full md:w-1/2">
            <label class="font-13-400">BOI License No.</label>
            <div class="flex flex-col md:flex-row md:space-x-4">
              <v-combobox
                
                @keydown.enter="getIndexListDropDown"
                label="กรุณาเลือก"
                :items="items"
                maxLength="35"
                dense
                class="font-14-300"
                background-color="white"
                color="base"
                outlined
                solo
              ></v-combobox>
              <v-btn
                fab
                small
                class="ml-3 rounded-lg"
                depressed
                color="esap_primary"
                dark
              >
                _</v-btn
              >
            </div>
          </div>
        </div>

        <div class="flex flex-col md:flex-row md:space-x-4">
          <div class="w-full md:w-1/2">
            <label class="font-13-400">Origin Criteria</label>
            <div class="flex flex-col md:flex-row md:space-x-4">
              <v-text-field
                @keydown.enter="focusNext"
                class="font-14-300"
                dense
                color="base"
                maxLength="35"
                outlined
                label="ระบุข้อมูล"
                solo
              ></v-text-field>
              <v-btn
                fab
                small
                class="ml-3 rounded-lg"
                depressed
                color="esap_primary"
                dark
              >
                _</v-btn
              >
            </div>
          </div>

          <div class="w-full md:w-1/2">
            <label class="font-13-400"> Certified Exporter No</label>
            <div class="flex flex-col md:flex-row md:space-x-4">
              <v-text-field
                @keydown.enter="focusNext"
                class="font-14-300"
                dense
                color="base"
                maxLength="35"
                outlined
                label="ระบุข้อมูล"
                solo
              ></v-text-field>
              <v-btn
                fab
                small
                class="ml-3 rounded-lg"
                depressed
                color="esap_primary"
                dark
              >
                _</v-btn
              >
            </div>
          </div>
        </div>

        <div class="flex flex-col md:flex-row md:space-x-4">
          <div class="w-full md:w-1/2">
            <label class="font-13-400">Royalty</label>
            <div class="flex flex-col md:flex-row md:space-x-4">
              <v-combobox
                
                @keydown.enter="getIndexListDropDown"
                label="กรุณาเลือก"
                :items="data.royalty"
                item-text="name"
                item-id="id"
                dense
                class="font-14-300"
                background-color="white"
                color="base"
                outlined
                solo
              ></v-combobox>
              <v-btn
                fab
                small
                class="ml-3 rounded-lg"
                depressed
                color="esap_primary"
                dark
              >
                _</v-btn
              >
            </div>
          </div>

          <div class="w-full md:w-1/2">
            <label class="font-13-400">Royalty Detail</label>
            <div class="flex flex-col md:flex-row md:space-x-4">
              <v-combobox
                
                @keydown.enter="getIndexListDropDown"
                label="กรุณาเลือก"
                :items="data.detailOfRoyalty"
                item-text="name"
                item-id="id"
                dense
                class="font-14-300"
                background-color="white"
                color="base"
                outlined
                solo
              ></v-combobox>
              <v-btn
                fab
                small
                class="ml-3 rounded-lg"
                depressed
                color="esap_primary"
                dark
              >
                _</v-btn
              >
            </div>
          </div>
        </div>
        <div class="flex flex-col md:flex-row md:space-x-4">
          <div class="w-full md:w-1/2">
            <label class="font-13-400">AHTN Code</label>
            <div class="flex flex-col md:flex-row md:space-x-4">
              <v-text-field
                @keydown.enter="focusNext"
                class="font-14-300"
                dense
                color="base"
                outlined
                maxLength="12"
                label="ระบุข้อมูล"
                solo
              ></v-text-field>
              <v-btn
                fab
                small
                class="ml-3 rounded-lg"
                depressed
                color="esap_primary"
                dark
              >
                _</v-btn
              >
            </div>
          </div>

          <div class="w-full md:w-1/2">
            <label class="font-13-400">UNDG Number</label>
            <div class="flex flex-col md:flex-row md:space-x-4">
              <v-text-field
                @keydown.enter="focusNext"
                class="font-14-300"
                value="0001"
                dense
                color="base"
                outlined
                maxLength="4"
                label="ระบุข้อมูล"
                solo
              >
              </v-text-field>
              <v-btn
                fab
                small
                class="ml-3 rounded-lg"
                depressed
                color="esap_primary"
                dark
              >
                _</v-btn
              >
            </div>
          </div>
        </div>
        <div class="flex flex-col md:flex-row md:space-x-4">
          <div class="w-full md:w-1/2">
            <label class="font-13-400">Procedure Code</label>
            <div class="flex flex-col md:flex-row md:space-x-4">
              <v-text-field
                @keydown.enter="focusNext"
                class="font-14-300"
                dense
                color="base"
                outlined
                maxLength="4"
                label="ระบุข้อมูล"
                solo
              ></v-text-field>
              <v-btn
                fab
                small
                class="ml-3 rounded-lg"
                depressed
                color="esap_primary"
                dark
              >
                _</v-btn
              >
            </div>
          </div>

          <div class="w-full md:w-1/2">
            <label class="font-13-400">Valuation Code</label>
            <div class="flex flex-col md:flex-row md:space-x-4">
              <v-text-field
                @keydown.enter="focusNext"
                class="font-14-300"
                dense
                color="base"
                outlined
                maxLength="1"
                label="ระบุข้อมูล"
                solo
              ></v-text-field>
              <v-btn
                fab
                small
                class="ml-3 rounded-lg"
                depressed
                color="esap_primary"
                dark
              >
                _</v-btn
              >
            </div>
          </div>
        </div>
        <v-card class="p-1 mt-10">
          <div class="bg-gray-200 p-4">
            <label class="font-18-600">สูตรการผลิต</label>
            <div class="flex flex-col md:flex-row md:space-x-4 mt-5">
              <div class="w-full md:w-1/2">
                <label class="font-13-400">Model Number</label>
                <div class="flex flex-col md:flex-row md:space-x-4">
                  <v-combobox
                    
                    @keydown.enter="getIndexListDropDown"
                    label="กรุณาเลือก"
                    :items="items"
                    dense
                    class="font-14-300"
                    background-color="white"
                    color="base"
                    outlined
                    maxLength="35"
                    solo
                  ></v-combobox>
                </div>
              </div>

              <div class="w-full md:w-1/2">
                <label class="font-13-400">Model Version</label>
                <div class="flex flex-col md:flex-row md:space-x-4">
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="font-14-300"
                    dense
                    background-color="white"
                    color="base"
                    outlined
                    maxLength="4"
                    label="ระบุข้อมูล"
                    solo
                  ></v-text-field>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Company Tax</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  dense
                  background-color="white"
                  color="base"
                  outlined
                  maxLength="17"
                  label="ระบุข้อมูล"
                  solo
                ></v-text-field>
              </div>
            </div>
          </div>
        </v-card>
      </div>
    </div>
    <p id="btnFocusOut"></p>
  </div>
</template>

<script>
import royalty from "@/data/royalty.json";
import detailOfRoyalty from "@/data/detail-of-royalty.json";

//services
import nextFocus from "@/services/nextFocus.js";

export default {
  data() {
    return {
      checkbox: true,
      countState: 1,
      nextIndex: 0,
      currentIndex: 0,
      items: [
        "ตัวอย่าง dropdown 01",
        "ตัวอย่าง dropdown 02",
        "ตัวอย่าง dropdown 03",
        "ตัวอย่าง dropdown 04",
      ],
      data: {
        royalty: royalty,
        detailOfRoyalty: detailOfRoyalty,
      },
      form: {
        declarationNo: "A0020620907511",
        lineNo: "0002",
      },
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
  },
};
</script>

<style scoped>
::v-deep(.v-application .primary--text) {
  color: #fe763f !important;
}
</style>