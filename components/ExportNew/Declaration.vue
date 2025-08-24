<template>
  <div>
    <v-form ref="form">
      <div class="flex flex-col md:flex-row pt-2 md:space-x-24">
        <div class="w-full md:w-3/5">
          <label class="font-13-400">ประเภทเอกสาร</label>
          <v-combobox
            
            @keydown.enter="getIndexListDropDown"
            required
            :rules="[false]"
            class="font-14-300"
            :items="data.documentTypes"
            item-text="name"
            item-id="id"
            v-model="data.documentTypes[0]"
            solo
            flat
            dense
            label="กรุณาเลือก"
            color="base_ex"
            outlined
          ></v-combobox>

          <label class="font-13-400">ประเภทใบขน</label>
          <v-combobox
            
            @keydown.enter="getIndexListDropDown"
            class="font-14-300"
            :items="data.declarationType"
            item-text="name"
            item-id="id"
            v-model="data.declarationType[3]"
            solo
            flat
            dense
            label="กรุณาเลือก"
            color="base_ex"
            outlined
            maxLength="70"
          ></v-combobox>

          <label class="font-13-400">Broker</label>
          <div class="flex flex-col md:flex-row">
            <v-combobox
              class="font-14-300"
              solo
              flat
              dense
              label="กรุณาเลือก"
              color="base_ex"
              outlined
              maxLength="120"
              
              @keydown.enter="getIndexListDropDown"
              :items="data.broker"
              item-text="name"
              item-id="id"
              v-model="form.broker"
            ></v-combobox>
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
                :rules="[false]"
                @keydown.enter="focusNext"
                solo
                flat
                v-model="form.brokerTax"
                class="input-exp font-14-300"
                dense
                label="000000"
                maxLength="17"
                color="base_ex"
                outlined
              ></v-text-field>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Branch</label>
              <v-text-field
                maxLength="6"
                @keydown.enter="focusNext"
                solo
                flat
                v-model="form.branchBroker"
                class="input-exp font-14-300"
                dense
                label="000000"
                color="base_ex"
                outlined
              ></v-text-field>
            </div>
          </div>
          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Sub Broker</label>
              <v-combobox
                class="font-14-300"
                solo
                flat
                dense
                label="กรุณาเลือก"
                color="base_ex"
                outlined
                
                @keydown.enter="getIndexListDropDown"
                v-model="form.branchSubBroker"
                :items="data.broker"
                item-text="name"
                item-id="id"
              ></v-combobox>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Branch</label>
              <v-text-field
                @keydown.enter="focusNext"
                solo
                flat
                class="font-14-300"
                dense
                label="000000"
                color="base_ex"
                maxLength="6"
                outlined
                v-model="form.branchBroker"
              ></v-text-field>
            </div>
          </div>

          <label class="font-13-400">ผู้ส่งออก</label>
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
              color="base_ex"
              outlined
            ></v-combobox>
            <v-btn
              @click="sleepRefs2()"
              class="ml-3 rounded-lg font-14-5002"
              depressed
              :color="!hidden2 ? 'gray1' : 'base_ex'"
              dark
            >
              <span v-if="!hidden2">ซ่อน</span>
              <span v-else>แสดง</span>
            </v-btn>
          </div>
          <div v-if="!hidden2" class="animate__animated animate__fadeIn">
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
                  color="base_ex"
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
                  color="base_ex"
                  outlined
                  maxLength="6"
                  solo
                  v-model="form.branchCompanyTax"
                ></v-text-field>
              </div>
              <v-btn
                class="ml-3 mt-6 rounded-lg"
                depressed
                color="base_ex"
                dark
              >
                <v-icon left> fa-solid fa-square-check </v-icon>
                <span class="font-14-5002">บันทึก</span>
              </v-btn>
            </div>

            <label class="font-13-400">Thai Name</label>
            <v-text-field
              @keydown.enter="focusNext"
              class="font-14-300"
              :rules="[false]"
              required
              dense
              label="ระบุข้อมูล..."
              color="base_ex"
              outlined
              solo
              maxLength="120"
              v-model="form.thaiName"
            ></v-text-field>
            <label class="font-13-400">Address</label>
            <v-text-field
              @keydown.enter="focusNext"
              :rules="[false]"
              required
              class="font-14-300"
              dense
              label="ระบุข้อมูล..."
              color="base_ex"
              outlined
              solo
              maxLength="120"
              v-model="form.address"
            ></v-text-field>
            <div class="flex flex-col md:flex-row md:space-x-4">
              <div class="w-full md:w-1/2">
                <label class="font-13-400">District</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  dense
                  label="ระบุข้อมูล"
                  color="base_ex"
                  outlined
                  solo
                  maxLength="60"
                  v-model="form.district"
                ></v-text-field>
              </div>
              <div class="w-full md:w-1/2">
                <label class="font-13-400">Sub Province</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  dense
                  label="ระบุข้อมูล..."
                  color="base_ex"
                  outlined
                  solo
                  maxLength="60"
                  v-model="form.subProvince"
                >
                </v-text-field>
              </div>
            </div>

            <div class="flex flex-col md:flex-row md:space-x-4">
              <div class="w-full md:w-1/2">
                <label class="font-13-400">Province</label>
                <v-combobox
                  
                  @keydown.enter="getIndexListDropDown"
                  v-model="form.province"
                  :items="provinceList2"
                  :item-text="(item) => item.name"
                  class="font-14-300"
                  dense
                  solo
                  label="กรุณาเลือก"
                  color="base_ex"
                  outlined
                  maxLength="60"
                ></v-combobox>
              </div>
              <div class="w-full md:w-1/2">
                <label class="font-13-400">Post Code</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  :rules="[false]"
                  dense
                  label="10240"
                  color="base_ex"
                  solo
                  outlined
                  maxLength="9"
                  v-model="form.postCode"
                ></v-text-field>
              </div>
            </div>

            <div class="flex flex-col md:flex-row md:space-x-4">
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
                  color="base_ex"
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
              <div class="w-full md:w-1/2">
                <label class="font-13-400">Status</label>
                <v-combobox
                  
                  @keydown.enter="getIndexListDropDown"
                  class="font-14-300"
                  :items="data.companyStatus"
                  item-text="name"
                  item-id="id"
                  dense
                  solo
                  :rules="[false]"
                  required
                  label="กรุณาเลือก"
                  color="base_ex"
                  outlined
                  v-model="form.companyStatus"
                >
                </v-combobox>
              </div>
            </div>
            <div class="flex flex-col md:flex-row md:space-x-4">
              <div class="w-full md:w-1/2">
                <label class="font-13-400">Export Tax Incentive</label>
                <v-combobox
                  
                  @keydown.enter="getIndexListDropDown"
                  :items="items"
                  class="font-14-300"
                  dense
                  solo
                  label="ระบุข้อมูล..."
                  color="base_ex"
                  outlined
                  maxLength="17"
                  v-model="form.incentive"
                ></v-combobox>
              </div>
              <div class="w-full md:w-1/2">
                <label class="font-13-400">Phone/Fax</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  :rules="[(v) => !!v || '']"
                  dense
                  label="ระบุข้อมูล"
                  color="base_ex"
                  solo
                  outlined
                  maxLength="35"
                  v-model="form.phone"
                ></v-text-field>
              </div>
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div>
              <label class="font-13-400">วันที่ส่งออก</label>

              <v-btn-toggle v-model="toggle_exclusive" style="width: 100%">
                <v-menu
                  :close-on-content-click="true"
                  transition="scale-transition"
                  offset-y
                >
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
                      color="base_ex"
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
            <div class="w-1/5">
              <label class="font-13-400">สกุลเงิน</label>
              <v-combobox
                class="font-14-300"
                :rules="[false]"
                required
                v-model="form.currency"
                :items="data.currencyCode"
                item-text="name"
                item-id="id"
                solo
                flat
                dense
                label="กรุณาเลือก"
                color="base_ex"
                outlined
                @change="
                  
                  changeCurrency($event);
                "
                @keydown.enter="getIndexListDropDown"
              >
                <template slot="item" slot-scope="data">
                  <div class="dropdown-line2">
                    <div>
                      {{ data.item.id }}
                    </div>
                    <div></div>
                    <div>{{ data.item.rate }}</div>
                  </div>
                </template>
              </v-combobox>
            </div>
            <div class="w-1/5">
              <label class="font-13-400"></label>
              <v-text-field
                @keydown.enter="focusNext"
                solo
                flat
                class="font-14-300 pt-6 label-align-right2"
                dense
                disabled
                color="base_ex"
                outlined
                v-model="form.currencyRate"
              ></v-text-field>
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

          <label class="font-13-400">ส่งออกโดยทาง</label>
          <v-combobox
            
            @keydown.enter="getIndexListDropDown"
            class="font-14-300"
            :rules="[false]"
            required
            v-model="form.transType"
            :items="data.modeOfTransport"
            item-text="name"
            item-id="id"
            solo
            flat
            dense
            label="กรุณาเลือก"
            color="base_ex"
            outlined
          ></v-combobox>

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">ชื่อยานพาหนะ</label>
              <v-combobox
                
                @keydown.enter="getIndexListDropDown"
                class="font-14-300"
                :rules="[false]"
                required
                v-model="form.transName"
                :items="this.data.vehicleName"
                item-text="name"
                item-id="id"
                solo
                flat
                dense
                label="กรุณาเลือก"
                color="base_ex"
                outlined
                maxLength="35"
              >
              </v-combobox>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Voyage No</label>
              <v-text-field
                @keydown.enter="focusNext"
                solo
                flat
                class="font-14-300"
                dense
                label="ระบุข้อมูล..."
                color="base_ex"
                outlined
                maxLength="35"
              >
              </v-text-field>
            </div>
          </div>

          <label class="font-13-400">ประเภทการบรรจุ</label>
          <v-combobox
            
            @keydown.enter="getIndexListDropDown"
            class="font-14-300"
            :rules="[false]"
            required
            v-model="form.cargoType"
            :items="data.cargoTypeCode"
            item-text="name"
            item-id="id"
            solo
            flat
            dense
            label="กรุณาเลือก"
            color="base_ex"
            outlined
          ></v-combobox>

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">ประเทศผู้ซื้อ</label>
              <v-combobox
                class="font-14-300"
                :rules="[false]"
                required
                v-model="form.countryBuyer"
                :items="data.countryList"
                item-text="id"
                item-id="id"
                solo
                flat
                dense
                label="กรุณาเลือก"
                color="base_ex"
                outlined
                @change="
                  
                  changeCountryBuyer($event);
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
            <div class="w-full md:w-1/2">
              <!-- <label class="font-13-400">ประเทศปลายทาง</label>
              <v-combobox
                @keydown.enter="focusNext"
                class="font-14-300"
                :rules="[(v) => !!v || '']"
                required
                v-model="form.countryDestination"
                :items="data.countryList"
                item-text="name"
                item-id="id"
                solo
                flat
                dense
                label="กรุณาเลือก"
                color="base_ex"
                outlined
                @change="changeCountryDestination"
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
              </v-combobox> -->
              <v-text-field
                @keydown.enter="focusNext"
                solo
                flat
                class="font-14-300 pt-6"
                dense
                label="-"
                color="base_ex"
                outlined
                disabled
                v-model="form.countryBuyerName"
              >
                <template></template>
              </v-text-field>
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">ประเทศปลายทาง</label>
              <v-combobox
                class="font-14-300"
                :rules="[false]"
                required
                v-model="form.countryDestination"
                :items="data.countryList"
                item-text="id"
                item-id="id"
                solo
                flat
                dense
                label="กรุณาเลือก"
                color="base_ex"
                outlined
                @change="
                  
                  changeCountryDestination($event);
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
            <div class="w-full md:w-1/2">
              <v-text-field
                @keydown.enter="focusNext"
                solo
                flat
                class="font-14-300 pt-6"
                dense
                color="base_ex"
                outlined
                disabled
                v-model="form.countryDestinationName"
              >
              </v-text-field>
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">ท่าที่รับบรรทุก</label>
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
                color="base_ex"
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
            <div class="w-full md:w-1/2">
              <v-text-field
                @keydown.enter="focusNext"
                solo
                flat
                class="font-14-300 pt-6"
                dense
                label="-"
                color="base_ex"
                outlined
                disabled
                v-model="form.port1Name"
              >
              </v-text-field>
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">ท่าที่ตรวจปล่อย</label>
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
                color="base_ex"
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
            <div class="w-full md:w-1/2">
              <v-text-field
                @keydown.enter="focusNext"
                solo
                flat
                class="font-14-300 pt-6"
                dense
                label="-"
                color="base_ex"
                outlined
                disabled
                v-model="form.port2Name"
              >
              </v-text-field>
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Master</label>
              <v-text-field
                @keydown.enter="focusNext"
                solo
                flat
                class="font-14-300"
                dense
                label="ระบุข้อมูล"
                color="base_ex"
                outlined
                maxLength="35"
                v-model="form.master"
              >
              </v-text-field>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400"> House</label>
              <v-text-field
                @keydown.enter="focusNext"
                solo
                flat
                class="font-14-300"
                :rules="[false]"
                required
                dense
                label="ระบุข้อมูล..."
                color="base_ex"
                outlined
                maxLength="35"
                v-model="form.house"
              ></v-text-field>
            </div>
          </div>

          <div class="mt-2">
            <label class="font-18-600 pt-2">บัตรผ่านพิธีการ</label>
          </div>
          <div class="flex flex-col md:flex-row md:space-x-4 pt-3">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">ชื่อ</label>
              <v-combobox
                
                @keydown.enter="getIndexListDropDown"
                class="font-14-300 combobox-width"
                :rules="[false]"
                required
                v-model="form.nameFormalPass"
                :items="['นายโร บลอง กิ1', 'นายโร บลอง กิ2', 'นายโร บลอง กิ3']"
                solo
                flat
                dense
                label="กรุณาเลือก"
                color="base_ex"
                outlined
                maxLength="60"
              >
              </v-combobox>
            </div>
            <div class="w-full pt-6">
              <v-text-field
                @keydown.enter="focusNext"
                solo
                flat
                class="font-14-300"
                :rules="[false]"
                required
                dense
                label="เลขบัตรผ่านพิธีการ"
                color="base_ex"
                outlined
                maxLength="17"
                v-model="form.numberFormalPass"
              ></v-text-field>
            </div>
            <div class="w-full">
              <v-text-field
                @keydown.enter="focusNext"
                solo
                flat
                class="font-14-300 pt-6"
                dense
                label="หมายเลขโทรศัพท์"
                color="base_ex"
                outlined
                maxLength="35"
              >
              </v-text-field>
            </div>
          </div>

          <div class="mt-2">
            <label class="font-18-600 pt-2">บัตรผู้จัดการ/ผู้รับมอบ</label>
          </div>
          <div class="flex flex-col md:flex-row md:space-x-4 pt-3">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">ชื่อ</label>
              <v-combobox
                
                @keydown.enter="getIndexListDropDown"
                class="font-14-300 combobox-width"
                :rules="[false]"
                required
                v-model="form.nameManager"
                :items="['นายโร บลอง กิ1', 'นายโร บลอง กิ2', 'นายโร บลอง กิ3']"
                solo
                flat
                dense
                label="กรุณาเลือก"
                color="base_ex"
                outlined
                maxLength="60"
              >
              </v-combobox>
            </div>
            <div class="w-full">
              <v-text-field
                @keydown.enter="focusNext"
                solo
                flat
                class="font-14-300 pt-6"
                :rules="[false]"
                required
                dense
                label="เลขบัตรผ่านพิธีการ"
                color="base_ex"
                outlined
                maxLength="17"
                v-model="form.numberManager"
              ></v-text-field>
            </div>
            <div class="w-full">
              <v-text-field
                @keydown.enter="focusNext"
                class="font-14-300 pt-6"
                solo
                flat
                dense
                label="หมายเลขโทรศัพท์"
                color="base_ex"
                outlined
                maxLength="35"
              >
              </v-text-field>
            </div>
          </div>
        </div>

        <div class="w-full md:w-2/5">
          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Net Weight</label>
              <v-text-field
                @keydown.enter="focusNext"
                maxLegth="3"
                hide-spin-buttons
                class="font-14-300 label-align-right2"
                :rules="[false]"
                required
                solo
                flat
                dense
                label="0.000"
                color="base_ex"
                v-model="form.netWeight"
                outlined
                @change="convertNumFormat"
              >
              </v-text-field>
            </div>
            <div class="w-full md:w-1/2">
              <v-combobox
                
                @keydown.enter="getIndexListDropDown"
                class="font-14-300 pt-6"
                :items="data.netWeightUnit"
                :rules="[false]"
                item-text="id"
                item-id="id"
                required
                solo
                flat
                dense
                label="กรุณาเลือก"
                color="base_ex"
                outlined
                value="KGM"
              >
                <template slot="item" slot-scope="data">
                  <div class="dropdown-line2">
                    <div style="font-size: 13px">
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
                class="font-14-300 label-align-right2"
                :rules="[false]"
                required
                solo
                flat
                dense
                maxLegth="3"
                label="0.000"
                color="base_ex"
                outlined
                v-model="form.grossWeight"
              >
              </v-text-field>
            </div>
            <div class="w-full md:w-1/2">
              <v-combobox
                
                @keydown.enter="getIndexListDropDown"
                class="font-14-300 pt-6"
                :rules="[false]"
                required
                :items="data.grossWeightUnit"
                item-text="id"
                item-id="name"
                solo
                flat
                dense
                label="กรุณาเลือก"
                color="base_ex"
                outlined
                value="KGM"
              >
                <template slot="item" slot-scope="data">
                  <div class="dropdown-line2">
                    <div style="font-size: 13px">
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
              <label class="font-13-400">Package Amount</label>
              <v-text-field
                @keydown.enter="focusNext"
                class="font-14-300 label-align-right2"
                :rules="[false]"
                required
                solo
                flat
                dense
                label="0"
                color="base_ex"
                outlined
                v-model="form.packageAmount"
                @change="convertNumFormat"
              ></v-text-field>
            </div>
            <div class="w-full md:w-1/2">
              <v-combobox
                @keydown.enter="getIndexListDropDown"
                class="font-14-300 pt-6"
                value="CT"
                :rules="[false]"
                required
                :items="data.packageUnit"
                item-text="id"
                item-id="id"
                solo
                flat
                dense
                label="กรุณาเลือก"
                color="base_ex"
                outlined
              >
                <template slot="item" slot-scope="data">
                  <div class="dropdown-line2">
                    <div style="font-size: 13px">
                      {{ data.item.id }}
                    </div>
                    <div></div>
                    <div>{{ data.item.name }}</div>
                  </div>
                </template>
              </v-combobox>
            </div>
          </div>

          <label class="font-13-400">Package 2</label>
          <v-text-field
            @keydown.enter="focusNext"
            class="font-14-300"
            solo
            flat
            dense
            label="ระบุข้อมูล..."
            color="base_ex"
            outlined
            v-model="form.package2"
          >
          </v-text-field>

          <v-card class="p-1" style="margin-top: 36px">
            <div class="bg-gray-100 roud-lg p-4">
              <div class="flex mb-2">
                <label class="font-18-600">Shipping Mark</label>
                <v-spacer></v-spacer>
                <v-btn
                  class="rounded-lg ml-1"
                  depressed
                  fab
                  dark
                  solo
                  height="24px"
                  width="24px"
                  color="base_ex"
                  maxLength="512"
                >
                  <span class="font-13-5002"> | </span>
                </v-btn>
                <v-btn
                  class="rounded-lg ml-1"
                  depressed
                  fab
                  dark
                  height="24px"
                  width="24px"
                  color="base_ex"
                >
                  <span class="font-13-5002"> H </span>
                </v-btn>
                <v-btn
                  class="rounded-lg ml-1"
                  depressed
                  fab
                  dark
                  height="24px"
                  width="24px"
                  color="base_ex"
                >
                  <span class="font-13-5002"> _ </span>
                </v-btn>
              </div>

              <v-textarea
                rows="3"
                background-color="white"
                color="base_ex"
                solo
                class="font-14-300"
                label="ระบุข้อมูล..."
                outlined
                :rules="[false]"
                v-model="form.shipping"
              ></v-textarea>
              <v-checkbox
                class="font-13-4002 remove-mg-25"
                color="red"
                dense
                v-model="checkbox"
                label="มีปัญหาเรื่องพิกัด/ราคา/ต้องการให้ตรวจสอบ (ขอพบเจ้าหน้าที่)"
              ></v-checkbox>
              <v-checkbox
                class="font-13-4002 remove-mg-25"
                color="red"
                dense
                label="ขออนุญาตเปิดตรวจนอกสถานที่ (มัดลวด)"
              ></v-checkbox>
              <v-checkbox
                class="font-13-4002 remove-mg-20"
                color="red"
                dense
                label="ชำระค่าธรรมเนียมการผ่านพิธีการศุลกากร"
              ></v-checkbox>
            </div>
          </v-card>

          <div class="pt-4">
            <label class="font-13-400"> Reference No of Common Access</label>
            <v-text-field
              @keydown.enter="focusNext"
              class="font-14-300"
              solo
              flat
              dense
              required
              label="ระบุข้อมูล..."
              color="base_ex"
              outlined
              maxLength="35"
            >
            </v-text-field>
          </div>

          <div class="">
            <label class="font-13-400">Job No</label>
            <v-text-field
              @keydown.enter="focusNext"
              class="font-14-300"
              solo
              flat
              dense
              label="ระบุข้อมูล..."
              color="base_ex"
              outlined
            >
            </v-text-field>
            <p id="btnFocusOut"></p>
          </div>
        </div>
      </div>
    </v-form>
  </div>
</template>

<script>
import countryList from "@/data/country-list-export.json";
import provinceList from "@/data/province-list.json";
import documentType from "@/data/document-type-export.json";
import companyStatus from "@/data/company-status.json";
import currencyCode from "@/data/currency-code.json";
import modeOfTransport from "@/data/mode-of-transport.json";
import cargoTypeCode from "@/data/cargo-type-code.json";
import weightUnit from "@/data/weight-unit.json";
import declarationType from "@/data/declartion-type-export.json";
import portExport from "@/data/port-export.json";
import packageUnit from "@/data/package-unit.json";
import broker from "@/data/broker.json";
import vehicleName from "@/data/vehicle-name.json";
import exporter from "@/data/importer.json";

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
      this.form.exportDate = "2022-11-01";
      this.form.currency = "AUD";
      this.form.currencyRate = this.data.currencyCode.find(
        (x) => x.id === "AUD"
      ).rate;
      this.form.transType = "1 - ทางเรือ";
      this.form.transName = "WAN HAI";
      this.form.cargoType = this.data.cargoTypeCode[2].name;

      this.form.countryBuyer = "AU";
      this.form.countryBuyerName = this.data.countryList.find(
        (x) => x.id === "AU"
      ).name;

      this.form.countryDestination = "AU";
      this.form.countryDestinationName = this.data.countryList.find(
        (x) => x.id === "AU"
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

      this.form.master = "RTCMASTER";
      this.form.house = "RTCHOUSE0010";
      this.form.nameFormalPass = "นายโร บลอง กิ";
      this.form.numberFormalPass = "M16334667";
      this.form.nameManager = "นายโร บลอง กิ";
      this.form.numberManager = "M16334667";
      this.form.netWeight = "20,000.000";
      this.form.grossWeight = "20,650.000";
      this.form.packageAmount = "60";
      this.form.package2 = "12 Piece";
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
  caret-color: #bb6bd9 !important;
}
.v-application .error--text,
::v-deep(i.v-icon.notranslate.mdi.mdi-menu-down.theme--light.error--text),
::v-deep(.v-input--selection-controls__input > .mdi-checkbox-marked) {
  color: #bb6bd9 !important;
}

/* calendar error clolor */
::v-deep(.v-icon.notranslate.v-icon--link.mdi.mdi-calendar.theme--light.error--text) {
  color: #bb6bd9 !important;
}
</style>