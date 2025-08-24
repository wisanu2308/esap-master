<template>
  <div>
    <v-form ref="form">
      <div class="flex flex-col md:flex-row pt-2 md:space-x-24">
        <div class="w-full md:w-3/5">
          <div>
            
            <legend>FREIGHT FORWARDER:</legend>

            <label class="font-13-400">Forwarder</label>
            <div class="flex flex-col md:flex-row">
            <v-combobox
              
              @keydown.enter="getIndexListDropDown"
              :rules="[false]"
              class="font-14-300"
              required
              v-model="form.exporter"
              :items="data.exporter"
              item-text="name"
              item-id="id"
              solo
              flat
              dense
              label="กรุณาเลือก"
              color="base_carm"
              outlined
            ></v-combobox>
            
          </div>

            <div class="flex flex-col md:flex-row">
              <div class="w-full md:w-1/2 mr-1">
                <label class="font-13-400">Company Tax</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  :rules="[false]"
                  required
                  dense
                  label="ระบุข้อมูล"
                  color="base_carm"
                  outlined
                  solo
                  maxLength="17"
                  v-model="form.companyTax"
                ></v-text-field>
              </div>
              <div class="w-full md:w-1/2 ml-1">
                <label class="font-13-400">Branch</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  :rules="[false]"
                  required
                  dense
                  label="000000"
                  color="base_carm"
                  outlined
                  maxLength="6"
                  solo
                  v-model="form.branchCompanyTax"
                ></v-text-field>
              </div>
            </div>
            
            <div class="w-full md:w-1/2">
                    <label class="font-13-400">Mode of Transport</label>
                    <v-combobox            
                      @keydown.enter="getIndexListDropDown"
                      class="font-14-300"
                      :rules="[false]"
                      required
                      v-model="form.modeOfTransport"
                      :items="data.modeOfTransport"
                      item-text="name"
                      item-id="id"
                      solo
                      flat
                      dense
                      label="กรุณาเลือก"
                      color="base_carm"
                      outlined
                    ></v-combobox>

                    
            </div>

            <div class="flex flex-col md:flex-row md:space-x-4">
                <div class="w-full md:w-1/2">
                  <label class="font-13-400">Message Fungtion</label>
                    <v-combobox            
                      @keydown.enter="getIndexListDropDown"
                      class="font-14-300"
                      :items="data.messagefungtion"
                      item-text="name"
                      item-id="id"
                      v-model="form.messagefungtion"
                      solo
                      flat
                      dense
                      label="กรุณาเลือก"
                      color="base_carm"
                      outlined
                      maxLength="70"
                    ></v-combobox>
                </div>
                <div class="w-full md:w-1/2">
                <label class="font-13-400">Processing Indicator</label>
                    <v-combobox
                      @keydown.enter="getIndexListDropDown"
                      required
                      :rules="[false]"
                      class="font-14-300"
                      :items="data.processingIndicator"
                      item-text="name"
                      item-id="id"
                      v-model="form.processingIndicator"
                      solo
                      flat
                      dense
                      label="กรุณาเลือก"
                      color="base_carm"
                      outlined
                    ></v-combobox>
                </div>            
              </div> 
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div>
              <div class="w-full">        
              <label class="font-13-400">Date :</label>
              <v-btn-toggle v-model="toggle_exclusive" style="width: 100%">
                <v-menu
                  :close-on-content-click="true"
                  transition="scale-transition"
                  offset-y>

                  <template v-slot:activator="{ on }">
                    <v-text-field
                      @keydown.enter="focusNext"
                      :rules="[false]"
                      id="test"
                      class="font-14-300"
                      hide-details
                      outlined
                      label="dd/mm/yyyy"
                      append-icon="mdi-calendar"
                      readonly
                      solo
                      color="base_carm"
                      v-on="on"
                      @click:append="on.click"
                      :value="getDateFormat(form.exportDate)"
                    >
                    </v-text-field>
                  </template>
                  <v-date-picker v-model="form.exportDate" no-title>
                  </v-date-picker>
                </v-menu>
              </v-btn-toggle>
                

                  <!-- <v-text-field
                    @keydown.enter="focusNext"
                    solo
                    flat
                    class="tt font-13-3002"
                    :rules="[false]"
                    required
                    dense
                    label=""
                    type="date"
                    color="base_ex"
                    outlined
                    v-model="form.exportDate"
                  ></v-text-field> -->
             </div>
             </div>
             <div class="w-full md:w-1/2"> 
              <label class="font-13-400">Master Bill</label>
              <v-text-field
                @keydown.enter="focusNext"
                solo
                flat
                class="font-14-300"
                dense
                label="ระบุข้อมูล..."
                color="base_carm"
                outlined
                maxLength="35"
                v-model="form.master"
              >
              </v-text-field>
            </div>
            
            <!-- <div class="w-full">
              <label class="font-13-400">Departure Date</label>
               <v-text-field @keydown.enter="focusNext"   
                solo
                flat
                class="tt font-14-3002"
                dense
                label=""
                type="date"
                color="base_ex"
                outlined
              ></v-text-field>
            </div> -->
            <!-- <div class="w-full">
              <label class="font-13-400">Departure Date</label>
               <v-text-field @keydown.enter="focusNext"   
                solo
                flat
                class="font-14-300"
                dense
                label=""
                type="date"
                color="base_ex"
                outlined
              ></v-text-field>
            </div> -->
          </div>

          

          <div class="flex flex-col md:flex-row md:space-x-4">
                        
          </div> 
          
          <div class="flex flex-col md:flex-row md:space-x-4">
                <div class="w-full md:w-1/2">
                  <label class="font-13-400">Port of loading</label>
                    <v-combobox                  
                      @keydown.enter="getIndexListDropDown"
                      v-model="form.countryCode"
                      :items="data.countryList"
                      item-text="name"
                      item-id="id"
                      class="font-14-300"
                      dense
                      solo
                      label="กรุณาเลือก"
                      color="base_carm"
                      outlined >
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
                <div class="w-full md:w-1/2">
                <label class="font-13-400">Port of Discharge</label>
                    <v-combobox                  
                      @keydown.enter="getIndexListDropDown"
                      v-model="form.countryCode"
                      :items="data.countryList"
                      item-text="name"
                      item-id="id"
                      class="font-14-300"
                      dense
                      solo
                      label="กรุณาเลือก"
                      color="base_carm"
                      outlined >
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
                  <label class="font-13-400">Place of Diliverly</label>
                    <v-combobox                  
                      @keydown.enter="getIndexListDropDown"
                      v-model="form.countryCode"
                      :items="data.countryList"
                      item-text="name"
                      item-id="id"
                      class="font-14-300"
                      dense
                      solo
                      label="กรุณาเลือก"
                      color="base_carm"
                      outlined >
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
            <div class="w-full md:w-1/4">
              <label class="font-13-400">SHED / RELEASE PORT</label>
              <v-combobox
                class="font-14-300"
                :rules="[false]"
                required
                v-model="form.port1"
                :items="data.portExport"
                item-text="id"
                item-id="id"
                solo
                flat
                dense
                label="กรุณาเลือก"
                color="base_carm"
                maxLength="4"
                outlined
                @change="
                  
                  changePort1($event);
                "
                @keydown.enter="getIndexListDropDown"
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
            <div class="w-full md:w-3/4">
              <v-text-field
                @keydown.enter="focusNext"
                solo
                flat
                class="font-14-300 pt-6"
                dense
                label="-"
                color="base_carm"
                outlined
                disabled
                v-model="form.port1Name"
              >
              </v-text-field>
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/4">
              <label class="font-13-400">BONDED PORT </label>
              <v-combobox
                class="font-14-300"
                :rules="[false]"
                required
                v-model="form.port2"
                :items="data.portExport"
                item-text="id"
                item-id="id"
                solo
                flat
                dense
                label="กรุณาเลือก"
                color="base_carm"
                outlined
                maxLength="35"
                @change="
                  
                  changePort2($event);
                "
                @keydown.enter="getIndexListDropDown"
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
            <div class="w-full md:w-3/4">
              <v-text-field
                @keydown.enter="focusNext"
                solo
                flat
                class="font-14-300 pt-6"
                dense
                label="-"
                color="base_carm"
                outlined
                disabled
                v-model="form.port2Name"
              >
              </v-text-field>
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Tax ID.(ระบบสิทธิประโยชน์)</label>
              <v-text-field
                @keydown.enter="focusNext"
                solo
                flat
                class="font-14-300"
                dense
                label="ระบุข้อมูล"
                color="base_carm"
                outlined
                maxLength="35"
              >
              </v-text-field>
            </div>            
          </div>
          
        <div class="w-full md:w-2/5">
          <P>รายละเอียดยานพาหนะ</P>
          <label class="font-13-400">Car Type</label>
          <v-combobox
            @keydown.enter="getIndexListDropDown"
            required
            :rules="[false]"
            class="font-14-300"
            v-model="data.cartype[0]"
            :items="this.data.cartype"
            item-text="name"
            item-id="id"
            solo
            flat
            dense
            label="กรุณาเลือก"
            color="base_carm"
            outlined
          ></v-combobox>
          <div class="w-full md:w-2/5">
            </div>

            <P>รถยนต์</P>         
          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Car License No.</label>
              <v-text-field
                @keydown.enter="focusNext"
                solo
                flat
                class="font-14-300"
                dense
                label="ระบุข้อมูล..."
                color="base_carm"
                outlined
                maxLength="35"
              >
              </v-text-field>
            </div>
            <div class="w-full md:w-1/2">
                <label class="font-13-400">Vihicle</label>
                <v-combobox
                  
                  @keydown.enter="getIndexListDropDown"
                  v-model="form.carbrand"
                  :items="data.carbrand"
                  item-text="name"
                  item-id="id"
                  class="font-14-300"
                  dense
                  solo
                  label="กรุณาเลือก"
                  color="base_carm"
                  outlined
                  maxLength="60"
                ></v-combobox>
              </div>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
                <label class="font-13-400">Province</label>
                <v-combobox
                  
                  @keydown.enter="getIndexListDropDown"
                  v-model="form.provinceList"
                  :items="provinceList2"
                  item-text="name"
                  item-id="id"
                  class="font-14-300"
                  dense
                  solo
                  label="กรุณาเลือก"
                  color="base_carm"
                  outlined
                  maxLength="60"
                ></v-combobox>
              </div>
            <div class="w-full md:w-1/2">
                 <label class="font-13-400">Country</label>
                <v-combobox
                  
                  @keydown.enter="getIndexListDropDown"
                  v-model="form.countryCode"
                  :items="data.countryList"
                  item-text="name"
                  item-id="id"
                  class="font-14-300"
                  dense
                  solo
                  label="กรุณาเลือก"
                  color="base_carm"
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
          </div>

            <P>รถพ่วง/กึ่งพ่วง คันที่ 1</P>                   
          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Car License No.</label>
              <v-text-field
                @keydown.enter="focusNext"
                solo
                flat
                class="font-14-300"
                dense
                label="ระบุข้อมูล..."
                color="base_carm"
                outlined
                maxLength="35"
              >
              </v-text-field>
            </div>
            <div class="w-full md:w-1/2">
                <label class="font-13-400">Vihicle</label>
                <v-combobox
                  
                  @keydown.enter="getIndexListDropDown"
                  v-model="form.carbrand"
                  :items="data.carbrand"
                  item-text="name"
                  item-id="id"
                  class="font-14-300"
                  dense
                  solo
                  label="กรุณาเลือก"
                  color="base_carm"
                  outlined
                  maxLength="60"
                ></v-combobox>
              </div>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
                <label class="font-13-400">Province</label>
                <v-combobox
                  
                  @keydown.enter="getIndexListDropDown"
                  v-model="form.provinceList"
                  :items="provinceList2"
                  item-text="name"
                  item-id="id"
                  class="font-14-300"
                  dense
                  solo
                  label="กรุณาเลือก"
                  color="base_carm"
                  outlined
                  maxLength="60"
                ></v-combobox>
              </div>
            <div class="w-full md:w-1/2">
                 <label class="font-13-400">Country</label>
                <v-combobox
                  
                  @keydown.enter="getIndexListDropDown"
                  v-model="form.countryCode"
                  :items="data.countryList"
                  item-text="name"
                  item-id="id"
                  class="font-14-300"
                  dense
                  solo
                  label="กรุณาเลือก"
                  color="base_carm"
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
          </div>

            <P>รถพ่วง/กึ่งพ่วง คันที่ 2</P>                   
          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Car License No.</label>
              <v-text-field
                @keydown.enter="focusNext"
                solo
                flat
                class="font-14-300"
                dense
                label="ระบุข้อมูล..."
                color="base_carm"
                outlined
                maxLength="35"
              >
              </v-text-field>
            </div>
            <div class="w-full md:w-1/2">
                <label class="font-13-400">Vihicle</label>
                <v-combobox
                  
                  @keydown.enter="getIndexListDropDown"
                  v-model="form.carbrand"
                  :items="data.carbrand"
                  item-text="name"
                  item-id="id"
                  class="font-14-300"
                  dense
                  solo
                  label="กรุณาเลือก"
                  color="base_carm"
                  outlined
                  maxLength="60"
                ></v-combobox>
              </div>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
                <label class="font-13-400">Province</label>
                <v-combobox
                  
                  @keydown.enter="getIndexListDropDown"
                  v-model="form.provinceList"
                  :items="provinceList2"
                  item-text="name"
                  item-id="id"
                  class="font-14-300"
                  dense
                  solo
                  label="กรุณาเลือก"
                  color="base_carm"
                  outlined
                  maxLength="60"
                ></v-combobox>
              </div>
            <div class="w-full md:w-1/2">
                 <label class="font-13-400">Country</label>
                <v-combobox
                  
                  @keydown.enter="getIndexListDropDown"
                  v-model="form.countryCode"
                  :items="data.countryList"
                  item-text="name"
                  item-id="id"
                  class="font-14-300"
                  dense
                  solo
                  label="กรุณาเลือก"
                  color="base_carm"
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
          </div>

          <P>อื่นๆ</P>
          <label class="font-13-400">GPS ID.</label>
          <v-text-field
            @keydown.enter="focusNext"
            class="font-14-300"
            solo
            flat
            dense
            label="ระบุข้อมูล..."
            color="base_carm"
            outlined
            v-model="form.package2"
          >
          </v-text-field>
          <label class="font-13-400">Seal No.</label>
          <v-text-field
            @keydown.enter="focusNext"
            class="font-14-300"
            solo
            flat
            dense
            label="ระบุข้อมูล..."
            color="base_carm"
            outlined
            v-model="form.package2"
          >
          </v-text-field>
          <label class="font-13-400">Driver ID Card No.</label>
          <v-text-field
            @keydown.enter="focusNext"
            class="font-14-300"
            solo
            flat
            dense
            label="ระบุข้อมูล..."
            color="base_carm"
            outlined
            v-model="form.package2"
          >
          </v-text-field>
          <label class="font-13-400">Driver Name</label>
          <v-text-field
            @keydown.enter="focusNext"
            class="font-14-300"
            solo
            flat
            dense
            label="ระบุข้อมูล..."
            color="base_carm"
            outlined
            v-model="form.package2"
          >
          </v-text-field>

          <div class="">
            <label class="font-13-400">Job No</label>
            <v-text-field
              @keydown.enter="focusNext"
              class="font-14-300"
              solo
              flat
              dense
              label="ระบุข้อมูล..."
              color="base_carm"
              outlined
            >
            </v-text-field>
            <p id="btnFocusOut"></p>
          </div>
        </div>


        </div>




      </div>
    </v-form>
  </div>
</template>

<script>
import countryList from "@/data/referent/rficc.json";
import countryCode from "@/data/countrycode.json";
import provinceList from "@/data/province-list.json";
import documentType from "@/data/document-type-export.json";
import companyStatus from "@/data/company-status.json";
import currencyCode from "@/data/currency-code.json";
import modeOfTransport from "@/data/mode-of-transport.json";
import cargoTypeCode from "@/data/cargo-type-code.json";
import weightUnit from "@/data/weight-unit.json";
import declarationType from "@/data/declartion-type-export.json";
import portExport from "@/data/referent/rfars.json";
import packageUnit from "@/data/package-unit.json";
import broker from "@/data/broker.json";
import vehicleName from "@/data/vehicle-name.json";
import exporter from "@/data/importer.json";
import cartype from "@/data/rfcar.json";
import carbrand from "@/data/referent/car-brand.json";
import processingIndicator from "@/data/processing-indicator.json";
import messagefungtion from "@/data/messagefungtion.json";

// service
import dateFormat from "@/services/dateFormat.js";
import numFormat from "@/services/numFormat.js";
import nextFocus from "@/services/nextFocus.js";

export default {
  name: "Declaration",
  async mounted() {
    await this.validate();
    this.getProvinceList();
    this.getDefaultData();
  },
  data: () => {
    return {
      countState: 1,
      form: {
        nextIndex: 0,
        broker: null,
        currencyRate: null,
        countryBuyer: null,
        countryDestinationName: null,
        port1Name: null,
        port2Name: null,
        netWeight: null,
        grossWeight: null,
        packageAmount: null,
        countryList: null,
        provinceList: null,
        countrycode: null,
        carbrand: null,
      },
      checkbox: true,
      checkbox1: true,
      valid: true,
      hidden: true,
      hidden2: true,
      errorMessages: "",
      select: "",
      currentInput: "",
      provinceList2: [],
      toggle_exclusive: null,
      items: [
        "ตัวอย่าง dropdown 01",
        "ตัวอย่าง dropdown 02",
        "ตัวอย่าง dropdown 03",
        "ตัวอย่าง dropdown 04",
      ],
      test: "",
      data: {
        countryList: countryList,
        countryCode: countryCode,
        provinceList: provinceList,
        documentTypes: documentType,
        companyStatus: companyStatus,
        currencyCode: currencyCode,
        modeOfTransport: modeOfTransport,
        cargoTypeCode: cargoTypeCode,
        netWeightUnit: weightUnit,
        grossWeightUnit: weightUnit,
        declarationType: declarationType,
        portExport: portExport,
        packageUnit: packageUnit,
        broker: broker,
        vehicleName: vehicleName,
        exporter: exporter,
        cartype: cartype,
        carbrand: carbrand,
        processingIndicator: processingIndicator,
        messagefungtion: messagefungtion,
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
    getProvinceList() {
      this.data.provinceList.forEach((x) => {
        this.provinceList2.push({ name: x.name_th });
      });
    },

    getDefaultData() {
      (this.form.broker = "E.D.I. SERVICE APPLICATION PROVIDER CO.,LTD."),
        (this.form.brokerTax = "105543025971");
      this.form.branchBroker = "000000";
      this.form.subBroker = "SCG LOGISTICS MANAGEMENT COMPANY LIMITED";
      this.form.branchSubBroker =
        "E.D.I. SERVICE APPLICATION PROVIDER CO.,LTD.";
      this.form.exporter = "E.D.I. SERVICE APPLICATION PROVIDER CO.,LTD.";
      this.form.companyTax = "105543025971";
      this.form.branchCompanyTax = "000000";
      this.form.thaiName =
        "บริษัท อีดีไอ เซอร์วิส แอพพลิเคชั่น โพรไวเดอร์ จำกัด";
      this.form.address = "520 ถนนรามคำแหง";
      this.form.district = "แขวงหัวหมาก";
      this.form.subProvince = "เขตบางกะปิ";
      this.form.province = "กรุงเทพมหานคร";
      this.form.postCode = "10240";
      this.form.countryCode = "TH : THAILAND";
      this.form.companyStatus = "OT - OTHER";
      this.form.incentive = "D0101100000889";
      this.form.phone = "02-377-9474-5";
      this.form.exportDate = "";
      this.form.currency = "AUD";
      this.form.currencyRate = this.data.currencyCode.find(
        (x) => x.id === "AUD"
      ).rate;
      this.form.processingIndicator = "23 - Import";
      this.form.messagefungtion = "2 - Pre Arrival";
      this.form.modeOfTransport = "3 - ทางรถยนต์";
      this.form.cartype = "1000 - รถขนาดเล็ก";
      this.form.transName = "WAN HAI";
      this.form.countrycode = "TH"
      this.form.cargoType = this.data.cargoTypeCode[2].name;

      this.form.countryBuyer = "TH";
      this.form.countryBuyerName = this.data.countryList.find(
        (x) => x.id === "TH"
      ).name;

      this.form.countryDestination = "TH";
      this.form.countryDestinationName = this.data.countryList.find(
        (x) => x.id === "TH"
      ).name;

      this.form.countryFrom = "US";
      this.form.countryCarry = "CN";
      this.form.portEntrance = "1190";
      this.form.portRelease = "1192";

      this.form.port1 = "2801";
      this.form.port2 = "2836";

      this.form.port1Name = this.data.portExport.find(
        (x) => x.id == this.form.port1
      ).name;
      this.form.port2Name = this.data.portExport.find(
        (x) => x.id == this.form.port2
      ).name;

      this.form.master = "N/A";
      this.form.house = "RTCHOUSE0010";
      this.form.nameFormalPass = "นายโร บลอง กิ";
      this.form.numberFormalPass = "M16334667";
      this.form.nameManager = "นายโร บลอง กิ";
      this.form.numberManager = "M16334667";
      this.form.netWeight = "20,000.000";
      this.form.grossWeight = "20,650.000";
      this.form.packageAmount = "60";
      this.form.package2 = "";
      this.form.shipping = "NO SHIPPING MARK";
      this.form.outsideReleasePort = "1192";

      // this.form.portEntranceName = this.data.port.find(x => x.id == +this.form.portEntrance).name;
      // this.form.portReleaseName= this.data.port.find(x => x.id == +this.form.portRelease).name;
      // this.form.outsideReleasePortName = this.data.port.find(x => x.id ==  +this.form.outsideReleasePort).name;
    },
    changeCurrency(currency) {
      if (currency) {
        this.form.currencyRate = this.data.currencyCode.find(
          (x) => x.id === currency.id
        ).rate;
      } else {
        this.form.currencyRate = "-";
      }
    },

    changeCountryBuyer(selected) {
      if (selected) {
        this.form.countryBuyerName = this.data.countryList.find(
          (x) => x.id === selected.id
        ).name;
      } else {
        this.form.countryBuyerName = "-";
      }
    },
    changeCountryDestination(selected) {
      if (selected) {
        this.form.countryDestinationName = this.data.countryList.find(
          (x) => x.id === selected.id
        ).name;
      } else {
        this.form.countryDestinationName = "-";
      }
    },
    changePort1(selected) {
      if (selected) {
        this.form.port1Name = this.data.portExport.find(
          (x) => x.id === selected.id
        ).name;
      } else {
        this.form.port1Name = "-";
      }
    },
    changePort2(selected) {
      if (selected) {
        this.form.port2Name = this.data.portExport.find(
          (x) => x.id === selected.id
        ).name;
      } else {
        this.form.port2Name = "-";
      }
    },

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

    getDateFormat(date) {
      return dateFormat.convertDateFormat(date);
    },

    convertNumFormat() {
      this.form.netWeight = numFormat.getUnitFormat(this.form.netWeight);
      this.form.grossWeight = numFormat.getUnitFormat(this.form.grossWeight);
      this.form.packageAmount = numFormat.getPackageFormat(
        this.form.packageAmount
      );
    },
  },
};
</script>

<style scoped>
.tt {
  width: 232px !important;
}

/* hard cord for fix color be better move to class  */
.input-exp::v-deep(.v-text-field__slot input) {
  caret-color: #d9bc6b !important;
}
.v-application .error--text,
::v-deep(i.v-icon.notranslate.mdi.mdi-menu-down.theme--light.error--text),
::v-deep(.v-input--selection-controls__input > .mdi-checkbox-marked) {
  color: #d9bc6b !important;
}

/* calendar error clolor */
::v-deep(.v-icon.notranslate.v-icon--link.mdi.mdi-calendar.theme--light.error--text) {
  color: #d9bc6b !important;
}
</style>