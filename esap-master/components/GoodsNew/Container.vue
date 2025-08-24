<template>
  <div>
    <v-form ref="form">
      <div class="flex flex-col md:flex-row md:space-x-20 pt-2">
        <div class="w-full md:w-3/5">
          <div class="flex flex-col">
            <div class="flex flex-row">
              <div class="w-1/2">
                <label class="font-13-400">Container Operator Tax</label>
                <div class="flex flex-row">
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="font-14-300"
                    solo
                    dense
                    label="ระบุข้อมูล"
                    color="base_goods2"
                    outlined
                    maxLength="17"
                    v-model="form.containerOp"
                  ></v-text-field>
                  <v-btn
                    class="ml-3 rounded-lg"
                    depressed
                    color="base_goods2"
                    style="min-width: 0"
                    dark
                  >
                    S</v-btn
                  >
                </div>
              </div>
              <div class="w-1/2 flex flex-row ml-3">
                <div class="w-full">
                  <label class="font-13-400">Branch</label>
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="font-14-300"
                    solo
                    dense
                    label="ระบุข้อมูล"
                    color="base_goods2"
                    maxLength="6"
                    outlined
                    v-model="form.branch"
                  ></v-text-field>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col">
            <div class="flex flex-row">
              <div class="w-1/2">
                <label class="font-13-400">Booking No</label>
                <div class="flex flex-row">
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="font-14-300"
                    solo
                    dense
                    maxLength="35"
                    label="ระบุข้อมูล"
                    color="base_goods2"
                    outlined
                  ></v-text-field>
                </div>
              </div>

              <div class="w-1/2 flex flex-row ml-3">
                <div class="w-full">
                  <label class="font-13-400">Total Gross Weight (VGM)</label>
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="font-14-300"
                    solo
                    dense
                    label="0.000"
                    color="base_goods2"
                    maxLength="3"
                    type="number"
                    hide-spin-buttons
                    outlined
                    v-model="form.totalGross"
                  ></v-text-field>
                </div>
                <div class="ml-3 w-2/5">
                  <label class="font-13-400">Unit</label>
                  <v-combobox
                    style="width: 150px !important"
                    
@keydown.enter="getIndexListDropDown"
                    :items="data.totalGrossWeightUnit"
                    item-text="id"
                    item-id="id"
                    class="font-14-300"
                    solo
                    dense
                    label="กรุณาเลือก"
                    color="base_goods2"
                    outlined
                    value="TNE"
                  >
                  <template slot="item" slot-scope="data">
                    <div class="dropdown-line2">
                      <div class="mr-2">
                        {{ data.item.id }}
                      </div>
                      <div></div>
                      <div>{{ data.item.name }}</div>
                    </div>
                  </template>
                </v-combobox>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col">
            <div class="flex flex-row">
              <div class="w-1/2">
                <label class="font-13-400">Authorized Name</label>
                <div class="flex flex-row">
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="font-14-300"
                    solo
                    dense
                    label="ระบุข้อมูล"
                    color="base_goods2"
                    outlined
                    maxLegth="60"
                    v-model="form.authorizedName"
                  ></v-text-field>
                </div>
              </div>

              <div class="w-1/2 flex flex-row ml-3"></div>
            </div>
          </div>

          <div class="flex flex-col">
            <!-- 8 -->
            <div class="flex flex-row">
              <!-- 8.1 -->
              <div class="w-1/2 flex flex-row">
                <!-- 8.1.1 -->
                <div>
                  <label class="font-13-400">รหัสท่า Transited</label>
                  <div class="flex flex-row">
                    <v-combobox
                      :items="data.portDischagre"
                      item-text="id"
                      item-id="id"
                      class="font-14-300"
                      solo
                      dense
                      label="กรุณาเลือก"
                      color="base_goods2"
                      outlined
                      maxLength="5"
                      v-model="form.transitPort"
                      @change=" changeTransitPort($event)"
  @keydown.enter="getIndexListDropDown"
                    >
                    <template slot="item" slot-scope="data">
                    <div class="dropdown-line2">
                      <div class="mr-2">
                        {{ data.item.id }}
                      </div>
                      <div></div>
                      <div>{{ data.item.name }}</div>
                    </div>
                  </template>
                  </v-combobox>
                  </div>
                </div>
                <div class="ml-3">
                  <label class="font-13-400">&nbsp;</label>
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="font-14-300"
                    disabled
                    solo
                    dense
                    label="ระบุข้อมูล"
                    color="base_goods2"
                    outlined
                    v-model="form.transitPortName"
                  ></v-text-field>
                </div>
                <div class="ml-3">
                  <label class="font-13-400">&nbsp;</label>
                  <v-btn
                    class="rounded-lg"
                    style="min-width: 0"
                    depressed
                    color="#DB89D7"
                    dark
                  >
                    ...</v-btn
                  >
                </div>
              </div>
              <div class="w-1/2 flex flex-row ml-3">
                <div class="flex flex-row">
                  <div>
                    <label class="font-13-400">รหัสเมืองปลายทางขนถ่าย</label>
                    <div class="flex flex-row">
                      <v-combobox

                        :items="data.portDischagre"
                        item-text="id"
                        item-id="id"
                        class="font-14-300"
                        solo
                        dense
                        label="กรุณาเลือก"
                        color="base_goods2"
                        outlined
                        maxLength="5"
                        @change=" changeTransDes($event)"
  @keydown.enter="getIndexListDropDown"
                        v-model="form.transDestinationId"
                      >
                      <template slot="item" slot-scope="data">
                    <div class="dropdown-line2">
                      <div class="mr-2">
                        {{ data.item.id }}
                      </div>
                      <div></div>
                      <div>{{ data.item.name }}</div>
                    </div>
                  </template>
                    </v-combobox>
                    </div>
                  </div>
                  <div class="ml-3">
                    <label class="font-13-400">&nbsp;</label>
                    <v-text-field
                      @keydown.enter="focusNext"
                      class="font-14-300"
                      disabled
                      solo
                      dense
                      label="ระบุข้อมูล"
                      color="base_goods2"
                      outlined
                      v-model="form.transDestinationName"
                    ></v-text-field>
                  </div>
                  <div class="ml-3">
                    <label class="font-13-400">&nbsp;</label>
                    <v-btn
                      class="rounded-lg"
                      style="min-width: 0"
                      depressed
                      color="#DB89D7"
                      dark
                    >
                      ...</v-btn
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-10">
            <label class="font-18-600 pt-2">ประเภทตู้ Reefer</label>
          </div>

          <v-radio-group v-model="ex7">
            <div class="flex flex-row">
              <v-radio value="1" color="base_goods2"></v-radio>
              <label class="text-base pl-1 font-13-400 mt-1"
                >Y : บรรจุสินค้าทั่วไป</label
              ><v-radio class="ml-3" value="2" color="base_goods"></v-radio>
              <label class="text-base pl-1 font-13-400 mt-1"
                >: บรรจุสินค้าแช่เย็น</label
              >
            </div>
          </v-radio-group>

          <div class="flex flex-col">
            <div class="flex flex-row">
              <div class="w-1/2">
                <label class="font-13-400">อุณหภูมิตู้สินค้าห้องเย็น</label>
                <div class="flex flex-row">
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="font-14-300"
                    solo
                    dense
                    label="ระบุข้อมูล"
                    color="base_goods2"
                    outlined
                    maxLength="5"
                    v-model="form.temperature"
                  ></v-text-field>
                </div>
              </div>
              <div class="w-1/2 flex flex-row ml-3">
                <div class="w-full">
                  <label class="font-13-400">ค่าระบายอากาศ</label>
                  <div class="flex flex-row">
                    <v-combobox
                    
@keydown.enter="getIndexListDropDown"
                      class="font-14-300"
                      :items="data.ventUnit"
                      item-text="name"
                      item-id="id"
                      solo
                      dense
                      label="กรุณาเลือก"
                      color="base_goods2"
                      outlined
                    ></v-combobox>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col">
            <div class="flex flex-row">
              <div class="w-1/2">
                <label class="font-13-400">Overheight</label>
                <div class="flex flex-row">
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="font-14-300"
                    solo
                    dense
                    label="ระบุข้อมูล"
                    color="base_goods2"
                    outlined
                    maxLength="3"
                  ></v-text-field>
                </div>
              </div>
              <div class="w-1/2 flex flex-row ml-3">
                <div class="w-full">
                  <label class="font-13-400">Overlength-Fore</label>
                  <div class="flex flex-row">
                    <v-text-field
                      @keydown.enter="focusNext"
                      class="font-14-300"
                      solo
                      dense
                      label="ระบุข้อมูล"
                      color="base_goods2"
                      outlined
                      maxLength="3"
                    ></v-text-field>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col">
            <div class="flex flex-row">
              <div class="w-1/2">
                <label class="font-13-400">Overlength-After</label>
                <div class="flex flex-row">
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="font-14-300"
                    solo
                    dense
                    label="ระบุข้อมูล"
                    color="base_goods2"
                    outlined
                    maxLength="3"
                  ></v-text-field>
                </div>
              </div>
              <div class="w-1/2 flex flex-row ml-3">
                <div class="w-full">
                  <label class="font-13-400">Overwidth-Right</label>
                  <div class="flex flex-row">
                    <v-text-field
                      @keydown.enter="focusNext"
                      class="font-14-300"
                      solo
                      dense
                      label="ระบุข้อมูล"
                      color="base_goods2"
                      outlined
                      maxLength="3"
                    ></v-text-field>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col">
            <div class="flex flex-row">
              <div class="w-1/2">
                <label class="font-13-400">Overwidth-Left</label>
                <div class="flex flex-row">
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="font-14-300"
                    solo
                    dense
                    label="ระบุข้อมูล"
                    color="base_goods2"
                    outlined
                    maxLength="3"
                  ></v-text-field>
                </div>
              </div>
              <div class="w-1/2 flex flex-row ml-3"></div>
            </div>
          </div>
        </div>
      </div>
    </v-form>
    <p id="btnFocusOut"></p>
  </div>
</template>
    
    <script>
import totalGrossWeightUnit from "@/data/weight-unit.json";
import ventUnit from "@/data/vent-unit.json";
import portDischagre from "@/data/dischagre-port.json";

//services
import nextFocus from "@/services/nextFocus.js";

export default {
  name: "Declaration",
  async mounted() {
    await this.validate();
    this.getDefaultPort();
  },
  data: () => {
    return {
      countState: 1,
      form: {
        containerOp: "099300020010011",
        branch: "000000",
        bookingNo: "HASLS19220500184",
        totalGross: "24350.00",
        unit: "KGM",
        authorizedName: "MR.NIYOM JAMPONG",
        transitPort: "USUAG",
        transitPortName: null,
        transDestinationId: "USUAG",
        transDestinationName: null,
        temperature: "-18 C"
      },
      checkbox: true,
      checkbox1: true,
      valid: true,
      hidden: true,
      hidden2: true,
      errorMessages: "",
      select5: null,
      select6: null,
      select7: null,
      select8: null,
      select: "",
      model1: null,
      ex7: "2",
      items: [
        "ตัวอย่าง dropdown 01",
        "ตัวอย่าง dropdown 02",
        "ตัวอย่าง dropdown 03",
        "ตัวอย่าง dropdown 04",
      ],
      items2: ["TH", "TH2", "TH3", "TH4"],
      items3: ["KGM", "KGM2", "KGM3", "KGM4"],
      test: "",
      data: {
        ventUnit: ventUnit,
        totalGrossWeightUnit: totalGrossWeightUnit,
        portDischagre: portDischagre
      },
      
    };
  },
  methods: {
    async sleepRefs() {
      this.hidden = !this.hidden;
      if (this.hidden) {
        await this.validate();
      } else {
        await this.sleep(1000);

        await this.validate();
      }
    },
    async sleepRefs2() {
      this.hidden2 = !this.hidden2;
      if (this.hidden) {
        await this.sleep(1000);
        await this.validate();
      } else {
        await this.sleep(1000);
        await this.validate();
      }
    },
    async sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    async validate() {
      this.$refs.form.validate();
    },
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
    getDefaultPort() {
      this.form.transitPortName = this.data.portDischagre.find(x => x.id === this.form.transitPort).name;
      this.form.transDestinationName = this.data.portDischagre.find(x => x.id === this.form.transDestinationId).name;
    },
    changeTransitPort(selected) {
      if (selected) {
        this.form.transitPortName = selected.name;
      } else {
        this.form.transitPortName = "-";
      }
      
    },
    changeTransDes(selected) {
      if (selected) {
        this.form.transDestinationName = selected.name;
      } else {
        this.form.transDestinationName = "-";
      }
      
    }
  },
};
</script>
    
    <style scoped>
.tt {
  width: 232px !important;
}
.input-exp::v-deep(.v-text-field__slot input) {
  caret-color: #db89d7 !important;
}
.v-application .error--text,
::v-deep(i.v-icon.notranslate.mdi.mdi-menu-down.theme--light.error--text),
::v-deep(.v-input--selection-controls__input > .mdi-checkbox-marked) {
  color: #db89d7 !important;
}

::v-deep(.v-icon.notranslate.v-icon--link.mdi.mdi-calendar.theme--light.error--text) {
  color: #db89d7 !important;
}
</style>