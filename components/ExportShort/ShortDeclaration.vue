<template>
  <div>
    <v-form ref="form">
      <div class="flex flex-col md:flex-row pt-2 md:space-x-24">
        <!-- Declaration Type -->
        <div class="w-full">
          <label class="font-13-400">Declaration Type</label>
          <v-combobox
            @keydown.enter="focusNext"
            :rules="[(v) => !!v && '']"
            class="font-14-300"
            :v-model="Export"
            value="Export"
            :items="['Export', 'Export2', 'Export3']"
            flat
            height="36px"
            dense
            color="base_ex"
            outlined
            solo
          >
          </v-combobox>
          <label class="font-13-400">Broker</label>
          <div class="flex flex-col md:flex-row">
            <v-text-field
              @keydown.enter="focusNext"
              class="input-exp font-14-300"
              solo
              :rules="[(v) => !!v && '']"
              required
              flat
              dense
              value="ESAP CO.,LTD."
              color="base_ex"
              outlined
            ></v-text-field>
            <v-btn
              @click="sleepRefs()"
              class="ml-3 rounded-lg font-14-5002"
              depressed
              :color="!hidden ? 'gray1' : 'base_ex'"
              dark
            >
              <span v-if="!hidden">ซ่อน</span>
              <span v-else>แสดง</span>
            </v-btn>
          </div>
          <div
            v-if="!hidden"
            class="
              animate__animated animate__fadeIn
              flex flex-col
              md:flex-row md:space-x-4
            "
          >
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Broker Tax</label>
              <v-text-field
                @keydown.enter="focusNext"
                class="input-exp font-14-300"
                solo
                :rules="[(v) => !!v || '']"
                required
                flat
                dense
                value="03178015334953"
                color="base_ex"
                outlined
              ></v-text-field>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Branch</label>
              <v-text-field
                @keydown.enter="focusNext"
                class="input-exp font-14-300"
                solo
                :rules="[(v) => !!v || '']"
                required
                flat
                dense
                value="000000"
                color="base_ex"
                outlined
              ></v-text-field>
            </div>
          </div>
          <div v-if="!hidden2" class="animate__animated animate__fadeIn">
            <div class="flex flex-col md:flex-row">
              <div class="w-full md:w-1/2 mr-1">
                <label class="font-13-400">Company Tax</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="input-exp font-14-300"
                  :rules="[(v) => !!v || '']"
                  required
                  dense
                  label="กรุณาเลือก"
                  color="base_ex"
                  outlined
                  solo
                  maxLength="17"
                ></v-text-field>
              </div>
              <div class="w-full md:w-1/2 ml-1">
                <label class="font-13-400">Branch</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="input-exp font-14-300"
                  :rules="[(v) => !!v || '']"
                  required
                  dense
                  label="กรุณาเลือก"
                  color="base_ex"
                  outlined
                  solo
                ></v-text-field>
              </div>
            </div>
          </div>
        </div>

        <!-- Declaration No -->
        <div class="w-full" style="margin-left: 20px; !important">
          <label class="font-13-400">Declaration No</label>
          <v-text-field
            @keydown.enter="focusNext"
            class="input-exp font-14-300"
            solo
            :rules="[(v) => !!v || '']"
            required
            flat
            dense
            value="A0041650710359"
            color="base_ex"
            outlined
          ></v-text-field>
          <label class="font-13-400">Company</label>
          <div class="flex flex-col md:flex-row">
            <v-text-field
              @keydown.enter="focusNext"
              class="input-exp font-14-300"
              solo
              :rules="[(v) => !!v || '']"
              required
              flat
              dense
              value="EDI SERVICE APPLICATION PROVIDER CO.,LTD."
              color="base_ex"
              outlined
            ></v-text-field>
            <v-btn
              @click="sleepRefs3()"
              class="ml-3 rounded-lg font-14-5002"
              depressed
              :color="!hidden3 ? 'gray1' : 'base_ex'"
              dark
            >
              <span v-if="!hidden3">ซ่อน</span>
              <span v-else>แสดง</span>
            </v-btn>
          </div>
          <div
            v-if="!hidden3"
            class="
              animate__animated animate__fadeIn
              flex flex-col
              md:flex-row md:space-x-4
            "
          >
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Company Tax</label>
              <v-text-field
                @keydown.enter="focusNext"
                class="input-exp font-14-300"
                solo
                :rules="[(v) => !!v || '']"
                required
                flat
                dense
                value="03178015334953"
                color="base_ex"
                outlined
                maxLength="17"
              ></v-text-field>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Branch</label>
              <v-text-field
                @keydown.enter="focusNext"
                class="input-exp font-14-300"
                solo
                :rules="[(v) => !!v || '']"
                required
                flat
                dense
                value="000000"
                color="base_ex"
                outlined
              ></v-text-field>
            </div>
          </div>

          <div class="flex flex-row md:flex-row mt-6 justify-end">
            <div>
              <v-btn class="rounded-lg font-14-5002" color="#A96BD9" dark>
                <i class="fa-solid fa-plus"></i>
                Add For Details
              </v-btn>
            </div>
            <div class="ml-3">
              <ExportShort-DialogShortItem
                @addShortItem="addShortItem"
              ></ExportShort-DialogShortItem>
            </div>
          </div>
        </div>

        <!-- Unit -->
        <div class="w-full" style="margin-left: 64px; !important">
          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Net Weight</label>
              <v-text-field
                @keydown.enter="focusNext"
                class="input-exp font-14-300 label-align-right2"
                :rules="[false]"
                required
                solo
                flat
                dense
                label="0"
                value="6711.140"
                color="base_ex"
                outlined
                v-model="form.netWeight"
                @change="convertNumFormat"
              ></v-text-field>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">หน่วย</label>
              <v-combobox
              
@keydown.enter="getIndexListDropDown"
                :rules="[false]"
                class="font-14-300"
                value="KGM"
                :items="data.unit"
                item-text="name"
                flat
                height="36px"
                dense
                color="base_ex"
                outlined
                solo
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
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Gross Weight</label>
              <v-text-field
                @keydown.enter="focusNext"
                class="input-exp font-14-300 label-align-right2"
                :rules="[false]"
                required
                solo
                flat
                dense
                label="0"
                value="6711.140"
                color="base_ex"
                outlined
                v-model="form.grossWeight"
                @change="convertNumFormat"
              ></v-text-field>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">หน่วย</label>
              <v-combobox
              
@keydown.enter="getIndexListDropDown"
                :rules="[false]"
                class="font-14-300"
                value="KGM"
                :items="data.unit"
                item-text="name"
                flat
                height="36px"
                dense
                color="base_ex"
                outlined
                solo
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
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Package</label>
              <v-text-field
                @keydown.enter="focusNext"
                class="input-exp font-14-300 label-align-right2"
                :rules="[false]"
                required
                solo
                flat
                dense
                label="0"
                value="10"
                color="base_ex"
                outlined
                v-model="form.package"
                @change="convertNumFormat"
              ></v-text-field>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">หน่วย</label>
              <v-combobox
              
@keydown.enter="getIndexListDropDown"
                :rules="[false]"
                class="font-14-300"
                value="CT"
                :items="data.packageUnit"
                item-text="name"
                flat
                height="36px"
                dense
                color="base_ex"
                outlined
                solo
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
          </div>
        </div>
      </div>
    </v-form>

    <!-- Add short Items -->
    <v-form v-if="isAddShortItem">
      <div class="flex flex-col md:flex-row pt-2 md:space-x-24">
        <div
          class="w-full"
          style="height: 660px;
            overflow: scroll;
            overflow-x: hidden;
            overflow-y: visible;
            padding: 5px;
            padding-right: 30px;
          "
        >
          <ExportShort-AddShortItem></ExportShort-AddShortItem>
          <ExportShort-AddShortItem></ExportShort-AddShortItem>
        </div>
      </div>
    </v-form>
    <p id="btnFocusOut"></p>
  </div>
</template>

<script>

import unit from "@/data/weight-unit.json"
import packageUnit from "@/data/package-unit.json"

//services
import numFormat from "@/services/numFormat.js";
import nextFocus from "@/services/nextFocus.js";

export default {
  name: "ShortDeclaration",
  async mounted() {
    await this.validate();
  },
  data: () => {
    return {
      countState: 1,
      form: {
        netWeight: "6,352.462",
        grossWeight: "6,711.122",
        package: "87"
      },
      valid: true,
      hidden: true,
      hidden3: true,
      isDeclaration: true,
      hidden2: true,
      errorMessages: "",
      isAddShortItem: false,
      select: "",
      items: [
        "ตัวอย่าง dropdown 01",
        "ตัวอย่าง dropdown 02",
        "ตัวอย่าง dropdown 03",
        "ตัวอย่าง dropdown 04",
      ],
      data: {
        packageUnit: packageUnit,
        unit: unit
      },
      
    };
  },
  methods: {
    addShortItem(isadd) {
      this.isAddShortItem = isadd;
    },
    async sleepRefs() {
      this.hidden = !this.hidden;
      if (this.hidden) {
        await this.validate();
      } else {
        this.hidden3 = !this.hidden;
        await this.sleep(1000);
        await this.validate();
      }
    },
    async sleepRefs3() {
      this.hidden3 = !this.hidden3;
      if (this.hidden3) {
        await this.validate();
      } else {
        this.hidden = !this.hidden3;
        await this.sleep(1000);
        await this.validate();
      }
    },
    async sleepRefs2() {
      this.hidden2 = !this.hidden2;
      if (this.hidden) {
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

    convertNumFormat() {
      this.form.netWeight = numFormat.getUnitFormat(this.form.netWeight);
      this.form.grossWeight = numFormat.getUnitFormat(this.form.grossWeight);
      this.form.package = numFormat.getPackageFormat(this.form.package)
    }
  },
};
</script>

<style scoped>
.input-exp::v-deep(.v-text-field__slot input) {
  caret-color: #bb6bd9 !important;
}
.combo-ex.error--text {
  color: #bb6bd9 !important;
  caret-color: #bb6bd9 !important;
}

.tt {
  width: 232px !important;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background-color: #d9dfea;
  border-radius: 2px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #bb6bd9;
  border-radius: 2px;
}

.v-application .error--text {
  color: #bb6bd9 !important;
  caret-color: #bb6bd9 !important;
}

::v-deep(.v-icon.notranslate.mdi.mdi-menu-down.theme--light.error--text) {
  color: #bb6bd9 !important;
  caret-color: #bb6bd9 !important;
}


</style>