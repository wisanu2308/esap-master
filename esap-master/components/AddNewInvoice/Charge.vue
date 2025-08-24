<template>
  <div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <div class="pt-6">
        <div class="flex flex-col md:flex-row md:space-x-4">
          <div class="w-full">
            <label class="font-13-400">Forwarding</label>
            <v-text-field
              @keydown.enter="focusNext"
              class="font-14-300 label-align-right"
              dense
              color="base"
              outlined
              v-model="form.forwarding"
              @change="convertNumFormat"
            ></v-text-field>
          </div>
          <div class="w-3/5">
            <label class="font-13-400">สกุลเงิน</label>
            <v-combobox
              class="font-14-300"
              dense
              solo
              outlined
              label="กรุณาเลือก"
              color="base"
              :items="data.currencyCode"
              item-text="name"
              item-id="id"
              v-model="form.forwardingCurrencyCode"
              @change="changeCurrency($event, 'forwardingRate')"
              @keydown.enter="getIndexListDropDown"
            >
              <template slot="item" slot-scope="data">
                <div class="dropdown-line">
                  <div>
                    {{ data.item.id }}
                  </div>
                  <div></div>
                  <div>{{ data.item.rate }}</div>
                </div>
              </template></v-combobox
            >
          </div>
          <div class="w-3/5">
            <br />
            <v-text-field
              @keydown.enter="focusNext"
              class="font-14-300 label-align-right"
              color="base"
              disabled
              dense
              outlined
              v-model="form.forwardingRate"
            ></v-text-field>
          </div>
          <div class="w-full">
            <label class="font-13-400">label</label>
            <v-text-field
              @keydown.enter="focusNext"
              dense
              color="base"
              outlined
              maxLength="35"
            ></v-text-field>
          </div>
          <div class="w-3/5">
            <label class="font-13-400">วิธีเฉลี่ย</label>
            <v-combobox
              :items="data.grossWeightDistribute"
              v-model="form.forwardingAvg"
              item-text="name"
              item-id="id"
              class="font-14-300"
              dense
              label="กรุณาเลือก"
              solo
              color="base"
              outlined
              @keydown.enter="getIndexListDropDown"
            ></v-combobox>
          </div>
          <div class="w-full">
            <v-radio-group v-model="ex7">
              <div class="flex flex-col md:flex-row md:space-x-4">
                <div class="-mt-3">
                  <label class="text-base pl-1 font-semibold">-</label>
                  <v-radio value="1" color="base" class="pt-2"></v-radio>
                </div>
                <div class="-mt-3">
                  <label class="text-base pl-1 font-semibold">0</label>
                  <v-radio value="3" color="base" class="pt-2"></v-radio>
                </div>
                <div class="-mt-3">
                  <label class="text-base pl-1 font-semibold">+</label>
                  <v-radio value="2" color="base" class="pt-2"></v-radio>
                </div>
              </div>
            </v-radio-group>
          </div>
        </div>

        <div class="flex flex-col md:flex-row md:space-x-4">
          <div class="w-full">
            <label class="font-13-400">Freight</label>
            <v-text-field
              @keydown.enter="focusNext"
              class="font-14-300 label-align-right"
              dense
              v-model="form.freight"
              color="base"
              outlined
              @change="convertNumFormat"
            ></v-text-field>
          </div>
          <div class="w-3/5">
            <label class="font-13-400">สกุลเงิน</label>
            <v-combobox
              class="font-14-300"
              dense
              solo
              outlined
              label="กรุณาเลือก"
              color="base"
              item-text="name"
              item-id="id"
              v-model="form.freightCurrencyCode"
              :items="data.currencyCode"
              @change="changeCurrency($event, 'freightRate')"
              @keydown.enter="getIndexListDropDown"
            >
            <template slot="item" slot-scope="data">
                <div class="dropdown-line">
                  <div>
                    {{ data.item.id }}
                  </div>
                  <div></div>
                  <div>{{ data.item.rate }}</div>
                </div>
              </template>
          </v-combobox>
          </div>
          <div class="w-3/5">
            <br />
            <v-text-field
              @keydown.enter="focusNext"
              class="font-14-300 label-align-right"
              disabled
              dense
              color="base"
              outlined
              v-model="form.freightRate"
            ></v-text-field>
          </div>
          <div class="w-full">
            <label class="font-13-400">label</label>
            <v-text-field
              @keydown.enter="focusNext"
              dense
              color="base"
              outlined
              maxLength="35"
            ></v-text-field>
          </div>
          <div class="w-3/5">
            <label class="font-13-400">วิธีเฉลี่ย</label>
            <v-combobox
              :items="data.grossWeightDistribute"
              v-model="form.freightAvg"
              item-text="name"
              item-id="id"
              class="font-14-300"
              dense
              label="กรุณาเลือก"
              solo
              color="base"
              outlined
              @keydown.enter="getIndexListDropDown"
            ></v-combobox>
          </div>
          <div class="w-full">
            <v-radio-group v-model="ex8">
              <div class="flex flex-col md:flex-row md:space-x-4">
                <div class="-mt-3">
                  <label class="text-base pl-1 font-semibold">-</label>
                  <v-radio value="1" color="base" class="pt-2"></v-radio>
                </div>
                <div class="-mt-3">
                  <label class="text-base pl-1 font-semibold">0</label>
                  <v-radio color="base" value="3" class="pt-2"></v-radio>
                </div>
                <div class="-mt-3">
                  <label class="text-base pl-1 font-semibold">+</label>
                  <v-radio color="base" value="2" class="pt-2"></v-radio>
                </div>
              </div>
            </v-radio-group>
          </div>
        </div>

        <div class="flex flex-col md:flex-row md:space-x-4">
          <div class="w-full">
            <label class="font-13-400">Insurance</label>
            <v-text-field
              @keydown.enter="focusNext"
              class="font-14-300 label-align-right"
              dense
              color="base"
              outlined
              v-model="form.insurance"
              @change="convertNumFormat"
            ></v-text-field>
          </div>
          <div class="w-3/5">
            <label class="font-13-400">สกุลเงิน</label>
            <v-combobox
              class="font-14-300"
              dense
              solo
              label="กรุณาเลือก"
              color="base"
              outlined
              v-model="form.insuranceCurrencyCode"
              :items="data.currencyCode"
              item-text="name"
              item-id="id"
              @change="changeCurrency($event, 'insuranceRate')"
              @keydown.enter="getIndexListDropDown"
            >  <template slot="item" slot-scope="data">
                <div class="dropdown-line">
                  <div>
                    {{ data.item.id }}
                  </div>
                  <div></div>
                  <div>{{ data.item.rate }}</div>
                </div>
              </template></v-combobox>
          </div>
          <div class="w-3/5">
            <br />
            <v-text-field
              class="font-14-300 label-align-right"
              disabled
              dense
              color="base"
              outlined
              @keydown.enter="focusNext"
              v-model="form.insuranceRate"
            ></v-text-field>
          </div>
          <div class="w-full">
            <label class="font-13-400">label</label>
            <v-text-field
              @keydown.enter="focusNext"
              dense
              color="base"
              outlined
              maxLength="35"
            ></v-text-field>
          </div>
          <div class="w-3/5">
            <label class="font-13-400">วิธีเฉลี่ย</label>
            <v-combobox
              v-model="form.insuranceAvg"
              :items="data.grossWeightDistribute"
              item-text="name"
              item-id="id"
              class="font-14-300"
              dense
              label="กรุณาเลือก"
              solo
              color="base"
              outlined
              @keydown.enter="getIndexListDropDown"
            ></v-combobox>
          </div>
          <div class="w-full">
            <v-radio-group v-model="ex9">
              <div class="flex flex-col md:flex-row md:space-x-4">
                <div class="-mt-3">
                  <label class="text-base pl-1 font-semibold">-</label>
                  <v-radio value="1" color="base" class="pt-2"></v-radio>
                </div>
                <div class="-mt-3">
                  <label class="text-base pl-1 font-semibold">0</label>
                  <v-radio value="3" color="base" class="pt-2"></v-radio>
                </div>
                <div class="-mt-3">
                  <label class="text-base pl-1 font-semibold">+</label>
                  <v-radio value="2" color="base" class="pt-2"></v-radio>
                </div>
              </div>
            </v-radio-group>
          </div>
        </div>

        <div class="flex flex-col md:flex-row md:space-x-4">
          <div class="w-full">
            <label class="font-13-400">Packing</label>
            <v-text-field
              @keydown.enter="focusNext"
              class="font-14-300 label-align-right"
              dense
              color="base"
              outlined
              v-model="form.packing"
              @change="convertNumFormat"
            ></v-text-field>
          </div>
          <div class="w-3/5">
            <label class="font-13-400">สกุลเงิน</label>
            <v-combobox
              class="font-14-300"
              dense
              solo
              label="กรุณาเลือก"
              color="base"
              outlined
              v-model="form.packingCurrencyCode"
              :items="data.currencyCode"
              item-text="name"
              item-id="id"
              @change="changeCurrency($event, 'packingRate')"
              @keydown.enter="getIndexListDropDown"
            >
            <template slot="item" slot-scope="data">
                <div class="dropdown-line">
                  <div>
                    {{ data.item.id }}
                  </div>
                  <div></div>
                  <div>{{ data.item.rate }}</div>
                </div>
              </template></v-combobox>
          </div>
          <div class="w-3/5">
            <br />
            <v-text-field
              @keydown.enter="focusNext"
              class="font-14-300 label-align-right"
              disabled
              dense
              v-model="form.packingRate"
              color="base"
              outlined
            ></v-text-field>
          </div>
          <div class="w-full">
            <label class="font-13-400">label</label>
            <v-text-field
              @keydown.enter="focusNext"
              dense
              color="base"
              outlined
              maxLength="35"
            ></v-text-field>
          </div>
          <div class="w-3/5">
            <label class="font-13-400">วิธีเฉลี่ย</label>
            <v-combobox
              v-model="form.packingAvg"
              :items="data.grossWeightDistribute"
              item-text="name"
              item-id="id"
              class="font-14-300"
              dense
              label="กรุณาเลือก"
              solo
              color="base"
              outlined
              @keydown.enter="getIndexListDropDown"
            ></v-combobox>
          </div>
          <div class="w-full">
            <v-radio-group v-model="ex10">
              <div class="flex flex-col md:flex-row md:space-x-4">
                <div class="-mt-3">
                  <label class="text-base pl-1 font-semibold">-</label>
                  <v-radio value="1" color="base" class="pt-2"></v-radio>
                </div>
                <div class="-mt-3">
                  <label class="text-base pl-1 font-semibold">0</label>
                  <v-radio value="3" color="base" class="pt-2"></v-radio>
                </div>
                <div class="-mt-3">
                  <label class="text-base pl-1 font-semibold">+</label>
                  <v-radio value="2" color="base" class="pt-2"></v-radio>
                </div>
              </div>
            </v-radio-group>
          </div>
        </div>

        <div class="flex flex-col md:flex-row md:space-x-4">
          <div class="w-full">
            <label class="font-13-400">Interior Transport</label>
            <v-text-field
              @keydown.enter="focusNext"
              @change="convertNumFormat"
              dense
              class="font-14-300 label-align-right"
              color="base"
              outlined
              v-model="form.interior"
            ></v-text-field>
          </div>
          <div class="w-3/5">
            <label class="font-13-400">สกุลเงิน</label>
            <v-combobox
              class="font-14-300"
              dense
              solo
              label="กรุณาเลือก"
              color="base"
              outlined
              v-model="form.interiorRateCurrencyCode"
              :items="data.currencyCode"
              item-text="name"
              item-id="id"
              @change="changeCurrency($event, 'interiorRate')"
              @keydown.enter="getIndexListDropDown"
            >
            <template slot="item" slot-scope="data">
                <div class="dropdown-line">
                  <div>
                    {{ data.item.id }}
                  </div>
                  <div></div>
                  <div>{{ data.item.rate }}</div>
                </div>
              </template></v-combobox>
          </div>
          <div class="w-3/5">
            <br />
            <v-text-field
              @keydown.enter="focusNext"
              class="font-14-300 label-align-right"
              color="base"
              disabled
              dense
              outlined
              v-model="form.interiorRate"
            ></v-text-field>
          </div>
          <div class="w-full">
            <label class="font-13-400">label</label>
            <v-text-field
              @keydown.enter="focusNext"
              dense
              color="base"
              outlined
              maxLength="35"
            ></v-text-field>
          </div>
          <div class="w-3/5">
            <label class="font-13-400">วิธีเฉลี่ย</label>
            <v-combobox
              :items="data.grossWeightDistribute"
              v-model="form.interiorAvg"
              item-text="name"
              item-id="id"
              class="font-14-300"
              dense
              label="กรุณาเลือก"
              solo
              color="base"
              outlined
              @keydown.enter="getIndexListDropDown"
            ></v-combobox>
          </div>
          <div class="w-full">
            <v-radio-group v-model="ex11">
              <div class="flex flex-col md:flex-row md:space-x-4">
                <div class="-mt-3">
                  <label class="text-base pl-1 font-semibold">-</label>
                  <v-radio value="1" color="base" class="pt-2"></v-radio>
                </div>
                <div class="-mt-3">
                  <label class="text-base pl-1 font-semibold">0</label>
                  <v-radio value="3" color="base" class="pt-2"></v-radio>
                </div>
                <div class="-mt-3">
                  <label class="text-base pl-1 font-semibold">+</label>
                  <v-radio value="2" color="base" class="pt-2"></v-radio>
                </div>
              </div>
            </v-radio-group>
          </div>
        </div>

        <div class="flex flex-col md:flex-row md:space-x-4">
          <div class="w-full">
            <label class="font-13-400">Landing</label>
            <v-text-field
              @keydown.enter="focusNext"
              class="font-14-300 label-align-right"
              dense
              color="base"
              outlined
              v-model="form.landing"
              @change="convertNumFormat"
            ></v-text-field>
          </div>
          <div class="w-3/5">
            <label class="font-13-400">สกุลเงิน</label>
            <v-combobox
              class="font-14-300"
              label="กรุณาเลือก"
              color="base"
              dense
              solo
              outlined
              v-model="form.landingCurrencyCode"
              :items="data.currencyCode"
              item-text="name"
              item-id="id"
              @change="changeCurrency($event, 'landingRate')"
              @keydown.enter="getIndexListDropDown"
            >
          
            <template slot="item" slot-scope="data">
                <div class="dropdown-line">
                  <div>
                    {{ data.item.id }}
                  </div>
                  <div></div>
                  <div>{{ data.item.rate }}</div>
                </div>
              </template></v-combobox>
          </div>
          <div class="w-3/5">
            <br />
            <v-text-field
              @keydown.enter="focusNext"
              class="font-14-300 label-align-right"
              color="base"
              outlined
              disabled
              dense
              v-model="form.landingRate"
            ></v-text-field>
          </div>
          <div class="w-full">
            <label class="font-13-400">label</label>
            <v-text-field
              @keydown.enter="focusNext"
              dense
              color="base"
              outlined
              maxLength="35"
            ></v-text-field>
          </div>
          <div class="w-3/5">
            <label class="font-13-400">วิธีเฉลี่ย</label>
            <v-combobox
              :items="data.grossWeightDistribute"
              v-model="form.landingAvg"
              item-text="name"
              item-id="id"
              class="font-14-300"
              dense
              label="กรุณาเลือก"
              solo
              color="base"
              outlined
              @keydown.enter="getIndexListDropDown"
            ></v-combobox>
          </div>
          <div class="w-full">
            <v-radio-group v-model="ex12">
              <div class="flex flex-col md:flex-row md:space-x-4">
                <div class="-mt-3">
                  <label class="text-base pl-1 font-semibold">-</label>
                  <v-radio value="1" color="base" class="pt-2"></v-radio>
                </div>
                <div class="-mt-3">
                  <label class="text-base pl-1 font-semibold">0</label>
                  <v-radio value="3" color="base" class="pt-2"></v-radio>
                </div>
                <div class="-mt-3">
                  <label class="text-base pl-1 font-semibold">+</label>
                  <v-radio value="2" color="base" class="pt-2"></v-radio>
                </div>
              </div>
            </v-radio-group>
          </div>
        </div>

        <div class="flex flex-col md:flex-row md:space-x-4">
          <div class="w-full">
            <label class="font-13-400">Other</label>
            <v-text-field
              @keydown.enter="focusNext"
              class="font-14-300 label-align-right"
              dense
              color="base"
              outlined
              v-model="form.other"
              @change="convertNumFormat"
            ></v-text-field>
          </div>
          <div class="w-3/5">
            <label class="font-13-400">สกุลเงิน</label>
            <v-combobox
              class="font-14-300"
              label="กรุณาเลือก"
              color="base"
              dense
              solo
              outlined
              v-model="form.otherCurrencyCode"
              :items="data.currencyCode"
              item-text="name"
              item-id="id"
              @change="changeCurrency($event, 'otherRate')"
              @keydown.enter="getIndexListDropDown"
            >  <template slot="item" slot-scope="data">
                <div class="dropdown-line">
                  <div>
                    {{ data.item.id }}
                  </div>
                  <div></div>
                  <div>{{ data.item.rate }}</div>
                </div>
              </template></v-combobox>
          </div>
          <div class="w-3/5">
            <br />
            <v-text-field
              @keydown.enter="focusNext"
              class="font-14-300 label-align-right"
              color="base"
              disabled
              dense
              v-model="form.otherRate"
              outlined
            ></v-text-field>
          </div>
          <div class="w-full">
            <label class="font-13-400">label</label>
            <v-text-field
              @keydown.enter="focusNext"
              dense
              color="base"
              outlined
              maxLength="35"
            ></v-text-field>
          </div>
          <div class="w-3/5">
            <label class="font-13-400">วิธีเฉลี่ย</label>
            <v-combobox
              v-model="form.otherAvg"
              :items="data.grossWeightDistribute"
              item-text="name"
              item-id="id"
              class="font-14-300"
              dense
              label="กรุณาเลือก"
              solo
              color="base"
              outlined
              @keydown.enter="getIndexListDropDown"
            ></v-combobox>
          </div>
          <div class="w-full">
            <v-radio-group v-model="ex13">
              <div class="flex flex-col md:flex-row md:space-x-4">
                <div class="-mt-3">
                  <label class="text-base pl-1 font-semibold">-</label>
                  <v-radio value="1" color="base" class="pt-2"></v-radio>
                </div>
                <div class="-mt-3">
                  <label class="text-base pl-1 font-semibold">0</label>
                  <v-radio value="3" color="base" class="pt-2"></v-radio>
                </div>
                <div class="-mt-3">
                  <label class="text-base pl-1 font-semibold">+</label>
                  <v-radio value="2" color="base" class="pt-2"></v-radio>
                </div>
              </div>
            </v-radio-group>
          </div>
        </div>
      </div>
    </v-form>
    <p id="btnFocusOut"></p>
  </div>
</template>

<script>
import currencyCode from "@/data/currency-code.json";
import grossWeightDistribute from "@/data/gross-weight-distribute.json";


//service
import numFormat from "@/services/numFormat.js";
import nextFocus from "@/services/nextFocus.js";

export default {
  name: "Declaration",
  async mounted() {
    await this.validate();
    this.getDefaultData();
  },
  data() {
    return {
      countState: 1,
      valid: true,
      ex7: "2",
      ex8: "2",
      ex9: "2",
      ex10: "2",
      ex11: "2",
      ex12: "2",
      ex13: "2",
      select: "",
      items: [
        "ตัวอย่าง dropdown 01",
        "ตัวอย่าง dropdown 02",
        "ตัวอย่าง dropdown 03",
        "ตัวอย่าง dropdown 04",
      ],
      data: {
        currencyCode: currencyCode,
        grossWeightDistribute: grossWeightDistribute,
      },
      form: {
        // rate section
        forwardingRate: null,
        freightRate: null,
        insuranceRate: null,
        packingRate: null,
        interiorRate: null,
        landingRate: null,
        otherRate: null,
        // value section
        forwarding: 37.03,
        freight: 55.54,
        insurance: "20,000.00",
        packing: "156.00",
        interior: 37.04,
        landing: 148.15,
        other: "185.00",
        //avg section
        forwardingAvg: grossWeightDistribute[0].name,
        freightAvg: grossWeightDistribute[0].name,
        insuranceAvg: grossWeightDistribute[0].name,
        packingAvg: grossWeightDistribute[0].name,
        interiorAvg: grossWeightDistribute[0].name,
        landingAvg: grossWeightDistribute[0].name,
        otherAvg: grossWeightDistribute[0].name,

        forwardingCurrencyCode: currencyCode.find(x => x.id === "USD").name,
        freightCurrencyCode: currencyCode.find(x => x.id === "AUD").name,
        insuranceCurrencyCode: currencyCode.find(x => x.id === "CAD").name,
        packingCurrencyCode: currencyCode.find(x => x.id === "CNY").name,
        interiorCurrencyCode: currencyCode.find(x => x.id === "JOD").name,
        landingCurrencyCode: currencyCode.find(x => x.id === "KWD").name,
        otherCurrencyCode: currencyCode.find(x => x.id === "THB").name,
        interiorRateCurrencyCode: currencyCode.find(x => x.id === "SEK").name
      },
    };
  },
  props: {},
  methods: {
    async validate() {
      this.$refs.form.validate();
    },
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
    changeCurrency(selected, type) {
      switch (type) {
        case "forwardingRate":
          this.form.forwardingRate = this.getCurrencyRate(selected?.id);
          break;
        case "freightRate":
          this.form.freightRate = this.getCurrencyRate(selected?.id);
          break;
        case "insuranceRate":
          this.form.insuranceRate = this.getCurrencyRate(selected?.id);
          break;
        case "packingRate":
          this.form.packingRate = this.getCurrencyRate(selected?.id);
          break;
        case "interiorRate":
          this.form.interiorRate = this.getCurrencyRate(selected?.id);
          break;
        case "landingRate":
          this.form.landingRate = this.getCurrencyRate(selected?.id);
          break;
        case "otherRate":
          this.form.otherRate = this.getCurrencyRate(selected?.id);
          break;
      }
    },
    getDefaultData() {
      this.form.forwardingRate = this.getCurrencyRate(
        this.form.forwardingCurrencyCode
      );
      this.form.freightRate = this.getCurrencyRate(
        this.form.freightCurrencyCode
      );
      this.form.insuranceRate = this.getCurrencyRate(
        this.form.insuranceCurrencyCode
      );
      this.form.packingRate = this.getCurrencyRate(
        this.form.packingCurrencyCode
      );
      this.form.interiorRate = this.getCurrencyRate(
        this.form.insuranceCurrencyCode
      );
      this.form.landingRate = this.getCurrencyRate(
        this.form.landingCurrencyCode
      );
      this.form.otherRate = this.getCurrencyRate(this.form.otherCurrencyCode);
    },
    getCurrencyRate(currencyCode) {
      if (currencyCode) {
        return this.data.currencyCode.find((x) => x.id === currencyCode)?.rate;
      } else {
        return 0;
      }
    },
    convertNumFormat() {
      this.form.forwarding = numFormat.getNumberFormat(this.form.forwarding);
      this.form.freight = numFormat.getNumberFormat(this.form.freight);
      this.form.insurance = numFormat.getNumberFormat(this.form.insurance);
      this.form.packing = numFormat.getNumberFormat(this.form.packing);
      this.form.interior = numFormat.getNumberFormat(this.form.interior);
      this.form.landing = numFormat.getNumberFormat(this.form.landing);
      this.form.other = numFormat.getNumberFormat(this.form.other);
    },
  },
};
</script>
