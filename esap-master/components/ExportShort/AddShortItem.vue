<template>
  <div>
    <div class="flex flex-row justify-between" style="margin-top: 32.21px">
      <div>
        <label class="font-18-600">Detail ({{ id }})</label>
      </div>
      <div>
        <v-btn class="rounded-lg font-14-5002" depressed color="base_ex" dark>
          <i class="fa-solid fa-square-check mr-2"></i>
          <span>Save</span>
        </v-btn>
        <v-btn class="rounded-lg font-14-5002" depressed color="#F32424" dark>
          <i class="fa-solid fa-trash-can mr-2"></i>
          <span>Delete</span>
        </v-btn>
      </div>
    </div>

    <div
      class="flex flex-col md:flex-row space-x-4"
      style="margin-top: 31.93px"
    >
      <div class="w-1/4 flex flex-row align-center">
        <label class="text-sm font-semibold mb-3 mr-1">Item</label>
        <v-text-field
          @keydown.enter="focusNext"
          class="font-12-300"
          dense
          label=""
          disabled
          value=""
          color="base"
          outlined
        ></v-text-field>
      </div>

      <div class="w-2/4 flex flex-row align-center">
        <label class="text-sm font-semibold mb-3 mr-1">Traff Code</label>
        <v-text-field
          @keydown.enter="focusNext"
          class="font-12-300"
          dense
          label=""
          disabled
          value="000033041000"
          color="base"
          outlined
        >
        </v-text-field>
      </div>

      <div class="w-2/4 flex flex-row align-center">
        <label class="text-sm font-semibold mb-3 mr-1">Stat Code</label>
        <v-text-field
          @keydown.enter="focusNext"
          class="font-12-300"
          dense
          label=""
          disabled
          value="000"
          color="base"
          outlined
        ></v-text-field>
      </div>

      <div class="w-2/4 flex flex-row align-center">
        <label class="text-sm font-semibold mb-3 mr-1">Declaration</label>
        <v-text-field
          @keydown.enter="focusNext"
          class="font-12-300"
          dense
          label=""
          disabled
          value="ลิปสติก"
          color="base"
          outlined
        ></v-text-field>
      </div>

      <div class="w-1/4 flex flex-row align-center">
        <v-text-field
          @keydown.enter="focusNext"
          class="font-12-300"
          dense
          label=""
          disabled
          value="ARTICLE 702134"
          color="base"
          outlined
        >
        </v-text-field>
      </div>
    </div>

    <div class="flex flex-row" style="margin-top: 30px">
      <div class="w-1/2">
        <v-card class="p-1">
          <div class="roud-lg p-4" style="background-color: #eff2f7">
            <label style="font-size: 16px; font-weight: 600">ข้อมูลเดิม</label>
            <div style="margin-top: 12px">
              <label style="font-size: 13px; font-weight: 400">QTY.</label>
              <div class="flex flex-col md:flex-row w-full">
                <div class="w-full">
                  <v-text-field
                    class="label-align-right2"
                    @keydown.enter="focusNext"
                    style="font-size: 12px; font-weight: 300"
                    dense
                    label=""
                    disabled
                    value="14,752.830"
                    color="base"
                    outlined
                  >
                  </v-text-field>
                </div>
                <div class="mr-5 label-align-center" style="width: 110px">
                  <v-text-field
                    style="font-size: 12px; font-weight: 300"
                    @keydown.enter="focusNext"
                    class="ml-3"
                    dense
                    value="C62"
                    disabled
                    color="base"
                    outlined
                  ></v-text-field>
                </div>
              </div>

              <label style="font-size: 13px; font-weight: 400">N.W.</label>
              <div class="flex flex-col md:flex-row w-full">
                <div class="w-full">
                  <v-text-field
                    class="label-align-right2"
                    @keydown.enter="focusNext"
                    style="font-size: 12px; font-weight: 300"
                    dense
                    label=""
                    disabled
                    value="0.128000"
                    color="base"
                    outlined
                  >
                  </v-text-field>
                </div>
                <div class="mr-5 label-align-center" style="width: 110px">
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="ml-3"
                    style="
                      align-item: center !important;
                      font-size: 12px;
                      font-weight: 300;
                    "
                    dense
                    label=""
                    value="KGM"
                    disabled
                    color="base"
                    outlined
                  ></v-text-field>
                </div>
              </div>

              <label style="font-size: 13px; font-weight: 400">G.W</label>
              <div class="flex flex-col md:flex-row w-full">
                <div class="w-full">
                  <v-text-field
                    class="label-align-right2"
                    @keydown.enter="focusNext"
                    style="
                      font-size: 12px;
                      font-weight: 300;
                      align-content: center;
                    "
                    dense
                    label=""
                    disabled
                    value="120.000"
                    color="base"
                    outlined
                  >
                  </v-text-field>
                </div>
                <div class="mr-5 label-align-center" style="width: 110px">
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="ml-3"
                    style="font-size: 12px; font-weight: 300"
                    dense
                    label=""
                    value="KGM"
                    disabled
                    color="base"
                    outlined
                  ></v-text-field>
                </div>
              </div>

              <label style="font-size: 13px; font-weight: 400">PACKAGE</label>
              <div class="flex flex-col md:flex-row w-full">
                <div class="w-full">
                  <v-text-field
                    class="label-align-right2"
                    @keydown.enter="focusNext"
                    style="
                      font-size: 12px;
                      font-weight: 300;
                      align-content: center;
                    "
                    dense
                    label=""
                    disabled
                    value="2"
                    color="base"
                    outlined
                  >
                  </v-text-field>
                </div>
                <div class="mr-5 label-align-center" style="width: 110px">
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="ml-3"
                    style="font-size: 12px; font-weight: 300"
                    dense
                    label=""
                    value="CT"
                    disabled
                    color="base"
                    outlined
                  ></v-text-field>
                </div>
              </div>

              <label style="font-size: 13px; font-weight: 400"
                >FOB foreign</label
              >
              <div class="flex flex-col md:flex-row w-full">
                <div class="w-full">
                  <v-text-field
                    class="label-align-right2"
                    @keydown.enter="focusNext"
                    style="
                      font-size: 12px;
                      font-weight: 300;
                      align-content: center;
                    "
                    dense
                    label=""
                    disabled
                    value="1500.00"
                    color="base"
                    outlined
                  >
                  </v-text-field>
                </div>
                <div class="mr-5 label-align-center" style="width: 110px">
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="ml-3"
                    style="font-size: 12px; font-weight: 300"
                    dense
                    label=""
                    value="USD"
                    disabled
                    color="base"
                    outlined
                  ></v-text-field>
                </div>
              </div>

              <label style="font-size: 13px; font-weight: 400">FOB Baht</label>
              <div class="flex flex-col md:flex-row w-full">
                <div class="w-full">
                  <v-text-field
                    class="label-align-right2"
                    @keydown.enter="focusNext"
                    style="
                      font-size: 12px;
                      font-weight: 300;
                      align-content: center;
                    "
                    dense
                    label=""
                    disabled
                    value="14,752.83"
                    color="base"
                    outlined
                  >
                  </v-text-field>
                </div>
                <div class="mr-5 label-align-center" style="width: 110px">
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="ml-3"
                    style="font-size: 12px; font-weight: 300"
                    dense
                    label=""
                    value="C62"
                    disabled
                    color="base"
                    outlined
                  ></v-text-field>
                </div>
              </div>
            </div>
          </div>
        </v-card>
      </div>

      <div class="w-1/2" style="margin-left: 18px">
        <v-card class="p-1">
          <div
            class="esap_error roud-lg p-4"
            style="background-color: white !important"
          >
            <label style="font-size: 16px; font-weight: 600">ข้อมูลใหม่</label>
            <div style="margin-top: 12px">
              <label style="font-size: 13px; font-weight: 400">QTY.</label>
              <div class="flex flex-col md:flex-row w-full">
                <div class="w-full">
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="input-exp font-12-300 label-align-right2"
                    style="align-content: center"
                    dense
                    label=""
                    value="14,752.831"
                    color="base_ex"
                    outlined
                    v-model="form.qty"
                    @change="convertNumFormat"
                  >
                  </v-text-field>
                </div>
                <div class="mr-5 label-align-center" style="width: 110px">
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="ml-3 input-exp font-12-300"
                    dense
                    label=""
                    value="C62"
                    disabled
                    color="base_ex"
                    outlined
                  ></v-text-field>
                </div>
              </div>

              <label style="font-size: 13px; font-weight: 400">N.W.</label>
              <div class="flex flex-col md:flex-row w-full">
                <div class="w-full">
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="input-exp font-12-300 label-align-right2"
                    style="align-content: center"
                    dense
                    label=""
                    value="0.128000"
                    color="base_ex"
                    outlined
                    v-model="form.nw"
                    @change="convertNumFormat"
                  >
                  </v-text-field>
                </div>
                <div class="mr-5 label-align-center" style="width: 110px">
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="ml-3 input-exp font-12-300"
                    dense
                    label=""
                    value="KGM"
                    disabled
                    color="base_ex"
                    outlined
                  ></v-text-field>
                </div>
              </div>

              <label style="font-size: 13px; font-weight: 400">G.W</label>
              <div class="flex flex-col md:flex-row w-full">
                <div class="w-full">
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="input-exp font-12-300 label-align-right2"
                    style="align-content: center"
                    dense
                    label=""
                    value="120.000"
                    color="base_ex"
                    outlined
                    v-model="form.gw"
                    @change="convertNumFormat"
                  >
                  </v-text-field>
                </div>
                <div class="mr-5 label-align-center" style="width: 110px">
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="ml-3 input-exp font-12-300"
                    dense
                    label=""
                    value="KGM"
                    disabled
                    color="base_ex"
                    outlined
                  ></v-text-field>
                </div>
              </div>

              <label style="font-size: 13px; font-weight: 400">PACKAGE</label>
              <div class="flex flex-col md:flex-row w-full">
                <div class="w-full">
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="input-exp font-12-300 label-align-right2"
                    style="align-content: center"
                    dense
                    label=""
                    value="2"
                    color="base_ex"
                    outlined
                    v-model="form.package"
                    @change="convertNumFormat"
                  >
                  </v-text-field>
                </div>
                <div class="mr-5 label-align-center" style="width: 110px">
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="ml-3 input-exp font-12-300"
                    dense
                    label=""
                    value="CT"
                    disabled
                    color="base_ex"
                    outlined
                  ></v-text-field>
                </div>
              </div>

              <label style="font-size: 13px; font-weight: 400"
                >FOB foreign</label
              >
              <div class="flex flex-col md:flex-row w-full">
                <div class="w-full">
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="input-exp font-12-300 label-align-right2"
                    style="align-content: center"
                    dense
                    label=""
                    value="1500.00"
                    color="base_ex"
                    outlined
                    v-model="form.fobForeign"
                    @change="convertNumFormat"
                  >
                  </v-text-field>
                </div>
                <div class="mr-5 label-align-center" style="width: 110px">
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="ml-3 input-exp font-12-300"
                    dense
                    label=""
                    value="USD"
                    disabled
                    color="base_ex"
                    outlined
                  ></v-text-field>
                </div>
              </div>

              <label style="font-size: 13px; font-weight: 400">FOB Baht</label>
              <div class="flex flex-col md:flex-row w-full">
                <div class="w-full">
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="input-exp font-12-300 label-align-right2"
                    style="align-content: center"
                    dense
                    label=""
                    value="14,752.83"
                    color="base_ex"
                    outlined
                    v-model="form.fobBath"
                    @change="convertNumFormat"
                  >
                  </v-text-field>
                </div>
                <div class="mr-5 label-align-center" style="width: 110px">
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="ml-3 input-exp font-12-300"
                    dense
                    label=""
                    value="C62"
                    disabled
                    color="base_ex"
                    outlined
                  ></v-text-field>
                </div>
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

import numFormat from "@/services/numFormat.js";
import nextFocus from "@/services/nextFocus.js";

export default {
  name: "AddShortItem",
  data: () => {
    return {
      id: "00001",
      form: {
        qty: 25.123,
        nw: 5000.333,
        gw: 4999.333,
        package: 90,
        fobForeign: 1250.44,
        fobBath: 1250.55
      }
    };
  },
  async mounted() {
    this.convertNumFormat();
  },
  methods: {
    focusNext(event) { // enter and new focus (text input type).
      nextFocus.nextInput(event);
    },

    convertNumFormat() {
      this.form.qty = numFormat.getUnitFormat(this.form.qty);
      this.form.nw = numFormat.getUnitFormat(this.form.nw);
      this.form.gw = numFormat.getUnitFormat(this.form.gw);

      this.form.package = numFormat.getPackageFormat(this.form.package);
      this.form.fobForeign = numFormat.getNumberFormat(this.form.fobForeign);
      this.form.fobBath = numFormat.getNumberFormat(this.form.fobBath);

    }
  },
};
</script>

<style scoped>
.input-exp::v-deep(.v-text-field__slot input) {
  caret-color: #bb6bd9 !important;
  border-color: #bb6bd9 !important;
}

::v-deep(.v-icon.notranslate.mdi.mdi-menu-down.theme--light.error--text) {
  color: #bb6bd9 !important;
}
</style>