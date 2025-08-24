<template>
  <div>
    <v-form ref="form">
      <div class="flex flex-col md:flex-row md:space-x-20 pt-2">
        <div class="w-full md:w-3/5">
          <label class="font-13-400">ประเภทเอกสาร</label>
          <v-combobox
            class="font-14-300"
            height="36px"
            color="base"
            dense
            flat
            outlined
            solo
            required
            :rules="[false]"
            :items="data.documentType"
            :value="form.documentType"
            item-text="name"
            item-value="id"
            label="กรุณาเลือก"
            
            @keydown.enter="getIndexListDropDown"
          >
          </v-combobox>

          <label class="font-13-400">ประเภทใบขน</label>
          <v-combobox
            class="font-14-300"
            color="base"
            solo
            flat
            dense
            label="กรุณาเลือก"
            outlined
            
            @keydown.enter="getIndexListDropDown"
            :items="data.declarationType"
            :value="form.declarationType"
            item-text="name"
            item-value="id"
          >
          </v-combobox>

          <label class="font-13-400">Broker</label>
          <div class="flex flex-col md:flex-row">
            <v-combobox
              class="font-14-300"
              outlined
              solo
              flat
              dense
              label="กรุณาเลือก"
              color="base"
              
              @keydown.enter="getIndexListDropDown"
              :items="data.broker"
              :value="form.broker"
              item-text="name"
              item-value="id"
            ></v-combobox>
            <v-btn
              @click="sleepRefs()"
              class="ml-3 rounded-lg font-14-5002"
              depressed
              :color="!hidden ? 'gray1' : 'base'"
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
                :value="this.form.brokerTax"
                class="font-14-300"
                solo
                :rules="[false]"
                required
                flat
                dense
                label="000000"
                color="base"
                outlined
                maxlength="17"
              ></v-text-field>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Branch</label>
              <v-text-field
                @keydown.enter="focusNext"
                solo
                flat
                :value="this.form.branchBroker"
                class="font-14-300"
                dense
                label="000000"
                color="base"
                maxLength="6"
                outlined
              ></v-text-field>
            </div>
          </div>
          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Sub Broker</label>
              <v-combobox
                
                @keydown.enter="getIndexListDropDown"
                class="font-14-300"
                :value="this.form.subBroker"
                solo
                flat
                dense
                label="กรุณาเลือก"
                color="base"
                outlined
                :items="data.broker"
                item-text="name"
                item-id="id"
              ></v-combobox>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Branch</label>
              <v-text-field
                @keydown.enter="focusNext"
                :value="this.form.branchSubBroker"
                solo
                flat
                class="font-14-300"
                dense
                label="000000"
                maxLength="6"
                color="base"
                outlined
              ></v-text-field>
            </div>
          </div>

          <label class="font-13-400">ผู้นำเข้า</label>
          <div class="flex flex-col md:flex-row">
            <v-combobox
              
              @keydown.enter="getIndexListDropDown"
              class="font-14-300"
              :rules="[false]"
              required
              :value="this.form.importer"
              :items="data.importer"
              item-text="name"
              item-id="id"
              solo
              flat
              dense
              label="กรุณาเลือก"
              color="base"
              outlined
            ></v-combobox>
            <v-btn
              @click="sleepRefs2()"
              class="ml-3 rounded-lg font-14-5002"
              depressed
              :color="!hidden2 ? 'gray1' : 'base'"
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
                  :value="this.form.companyTax"
                  required
                  dense
                  solo
                  label="ระบุข้อมูล"
                  color="base"
                  outlined
                  maxLength="17"
                ></v-text-field>
              </div>
              <div class="w-full md:w-1/2 ml-1">
                <label class="font-13-400">Branch</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  :rules="[false]"
                  :value="this.form.branchCompanyTax"
                  required
                  solo
                  dense
                  label="ระบุข้อมูล"
                  color="base"
                  outlined
                  maxLength="6"
                ></v-text-field>
              </div>
              <v-btn class="ml-3 mt-6 rounded-lg" depressed color="base" dark>
                <v-icon left> fa-solid fa-square-check </v-icon>
                <span class="font-14-5002">บันทึก</span>
              </v-btn>
            </div>

            <label class="font-13-400">Thai Name</label>
            <v-text-field
              @keydown.enter="focusNext"
              class="font-14-300"
              :rules="[false]"
              :value="this.form.thaiName"
              required
              dense
              label="ระบุข้อมูล..."
              outlined
              color="base"
              maxLength="120"
              solo
            ></v-text-field>
            <label class="font-13-400">Address</label>
            <v-text-field
              @keydown.enter="focusNext"
              :rules="[false]"
              :value="this.form.address"
              required
              class="font-14-300"
              dense
              label="ระบุข้อมูล..."
              color="base"
              maxLength="120"
              outlined
              solo
            ></v-text-field>
            <div class="flex flex-col md:flex-row md:space-x-4">
              <div class="w-full md:w-1/2">
                <label class="font-13-400">District</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  :value="this.form.district"
                  dense
                  solo
                  label="ระบุข้อมูล"
                  color="base"
                  maxLength="60"
                  outlined
                ></v-text-field>
              </div>
              <div class="w-full md:w-1/2">
                <label class="font-13-400">Sub Province</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  :value="this.form.subProvince"
                  dense
                  label="ระบุข้อมูล..."
                  color="base"
                  maxLength="60"
                  outlined
                  solo
                ></v-text-field>
              </div>
            </div>

            <div class="flex flex-col md:flex-row md:space-x-4">
              <div class="w-full md:w-1/2">
                <label class="font-13-400">Province</label>
                <v-combobox
                
              @keydown.enter="getIndexListDropDown"
                  :value="this.form.province"
                  :items="data.provinceList"
                  item-text="name_th"
                  item-value="id"
                  class="font-14-300"
                  dense
                  label="กรุณาเลือก"
                  color="base"
                  maxLength="60"
                  outlined
                  solo
                ></v-combobox>
              </div>
              <div class="w-full md:w-1/2">
                <label class="font-13-400">Post Code</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  dense
                  :rules="[false]"
                  :value="this.form.postCode"
                  label="10240"
                  color="base"
                  outlined
                  maxLength="9"
                  solo
                ></v-text-field>
              </div>
            </div>

            <div class="flex flex-col md:flex-row md:space-x-4">
              <div class="w-full md:w-1/2">
                <label class="font-13-400">Country</label>
                <v-combobox
                
              @keydown.enter="getIndexListDropDown"
                  class="font-14-300"
                  :rules="[(v) => !!v || '']"
                  required
                  :items="data.countryList"
                  :value="this.form.countryCode"
                  item-text="name"
                  item-value="id"
                  solo
                  flat
                  dense
                  label="กรุณาเลือก"
                  color="base"
                  outlined
                >
                  <template slot="item" slot-scope="data">
                    <div class="dropdown-line2">
                      <div>
                        {{ data.item.id }}
                      </div>
                      <div></div>
                      <div>{{ data.item.name2 }}</div>
                    </div>
                  </template>
                </v-combobox>
              </div>
              <div class="w-full md:w-1/2">
                <label class="font-13-400">Status</label>
                <v-combobox
                
              @keydown.enter="getIndexListDropDown"
                  solo
                  class="font-14-300"
                  dense
                  :items="data.companyStatus"
                  :value="this.form.companyStatus"
                  item-text="name"
                  item-value="id"
                  label="กรุณาเลือก"
                  color="base"
                  outlined
                  :rules="[false]"
                ></v-combobox>
              </div>
            </div>
            <div class="flex flex-col md:flex-row md:space-x-4">
              <div class="w-full md:w-1/2">
                <label class="font-13-400">Export Tax Incentive</label>
                <v-combobox
                  
                  @keydown.enter="getIndexListDropDown"
                  solo
                  :value="select8"
                  :items="['dropdown1','dropdown2','dropdown3']"
                  class="font-14-300"
                  dense
                  label="กรุณาเลือก"
                  color="base"
                  outlined
                ></v-combobox>
              </div>
              <div class="w-full md:w-1/2">
                <label class="font-13-400">Phone/Fax</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  :value="this.form.phone"
                  solo
                  class="font-14-300"
                  dense
                  label="ระบุข้อมูล..."
                  color="base"
                  outlined
                  maxLength="35"
                ></v-text-field>
              </div>
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full">
              <label class="font-13-400">วันที่นำเข้า</label>
              <v-menu
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="auto"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    class="tt font-13-3002"
                    hide-details
                    outlined
                    label="From"
                    placeholder="From"
                    append-icon="mdi-calendar"
                    readonly
                    solo
                    height="32px"
                    style="width: 232px !important"
                    color="base"
                    :value="getDateFormat(computedDateFormatted)"
                    :rules="[false]"
                    @keydown.enter="focusNext"
                    v-on="on"
                    @click:append="on.click"
                  >
                  </v-text-field>
                </template>
                <v-date-picker
                  v-model="computedDateFormatted"
                  no-title
                ></v-date-picker>
              </v-menu>
            </div>
            <div class="w-full">
              <label class="font-13-400">สกุลเงิน</label>
              <v-combobox
                class="font-14-300"
                solo
                required
                flat
                dense
                label="กรุณาเลือก"
                color="base"
                maxLength="3"
                outlined
                :rules="[false]"
                @keydown.enter="getIndexListDropDown"
                @change="changeCurrency($event)"
                :value="this.form.currency"
                :items="data.currencyCode"
                item-text="id"
                item-id="id"
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
            <div class="w-full ml-1">
              <label class="font-13-400"></label>
              <v-text-field
                @keydown.enter="focusNext"
                @change="convertNumFormat"
                solo
                flat
                class="font-14-300 pt-6 label-align-right2"
                dense
                label="0.00000"
                v-model="form.currencyRate"
                color="base"
                outlined
              ></v-text-field>
            </div>
            <div class="w-full">
              <label class="font-13-400">Departure Date</label>
              <v-menu
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="auto"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    @keydown.enter="focusNext"
                    hide-details
                    class="tt font-13-3002"
                    outlined
                    :value="getDateFormat(computedDateFormatted2)"
                    label="dd/mm/yyyy"
                    placeholder="From"
                    append-icon="mdi-calendar"
                    readonly
                    solo
                    height="32px"
                    style="width: 232px !important"
                    color="base"
                    v-on="on"
                    @click:append="on.click"
                  >
                  </v-text-field>
                </template>
                <v-date-picker
                  v-model="computedDateFormatted2"
                  no-title
                ></v-date-picker>
              </v-menu>
            </div>
          </div>

          <label class="font-13-400">นำเข้าโดยทาง</label>
          <v-combobox
            
            @keydown.enter="getIndexListDropDown"
            class="font-14-300"
            :rules="[false]"
            required
            :value="this.form.transType"
            :items="data.modeOfTransport"
            item-text="name"
            item-value="id"
            solo
            flat
            dense
            label="กรุณาเลือก"
            color="base"
            outlined
          ></v-combobox>

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">ชื่อยานพาหนะ</label>
              <v-combobox
                class="font-14-300"
                solo
                flat
                dense
                label="กรุณาเลือก"
                color="base"
                outlined
                required
                :rules="[false]"
                :value="this.form.transName"
                :items="data.vehicleName"
                item-text="name"
                item-id="id"
                maxLength="35"
                
                @keydown.enter="getIndexListDropDown"
              ></v-combobox>
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
                color="base"
                outlined
                maxLength="35"
              ></v-text-field>
            </div>
          </div>

          <label class="font-13-400">ประเภทการบรรจุ</label>
          <v-combobox
            
            @keydown.enter="getIndexListDropDown"
            class="font-14-300"
            :rules="[false]"
            required
            :value="this.form.cargoType"
            :items="data.cargoTypeCode"
            item-text="name"
            item-value="id"
            solo
            flat
            dense
            label="กรุณาเลือก"
            color="base"
            outlined
          ></v-combobox>

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">ประเทศกำเนิด</label>
              <v-combobox
                @change="changeCountryFrom($event)"
                @keydown.enter="getIndexListDropDown"
                class="font-14-300"
                :rules="[false]"
                required
                :items="data.countryList"
                item-text="id"
                item-value="id"
                solo
                flat
                dense
                label="กรุณาเลือก"
                color="base"
                outlined
                v-model="form.countryFrom"
              >
                <template slot="item" slot-scope="data">
                  <div class="dropdown-line2">
                    <div>
                      {{ data.item.id }}
                    </div>
                    <div></div>
                    <div>{{ data.item.name2 }}</div>
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
                color="base"
                outlined
                disabled
                v-model="form.countryFromFullName"
              >
                <template></template>
              </v-text-field>
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">ประเทศต้นทางบรรทุก</label>
              <v-combobox
                class="font-14-300"
                :rules="[false]"
                required
                :value="this.form.countryCarry"
                :items="data.countryList"
                item-text="id"
                item-value="id"
                solo
                flat
                dense
                label="กรุณาเลือก"
                color="base"
                outlined
                @change="changeCountryTruck($event)"
                @keydown.enter="getIndexListDropDown"
              >
                <template slot="item" slot-scope="data">
                  <div class="dropdown-line2">
                    <div>
                      {{ data.item.id }}
                    </div>
                    <div></div>
                    <div>{{ data.item.name2 }}</div>
                  </div>
                </template></v-combobox
              >
            </div>
            <div class="w-full md:w-1/2">
              <v-text-field
                @keydown.enter="focusNext"
                solo
                flat
                class="font-14-300 pt-6"
                dense
                label="-"
                color="base"
                outlined
                disabled
                v-model="form.countryTruckFullName"
              ></v-text-field>
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">ท่าที่นำเข้า</label>
              <v-combobox
                class="font-14-300"
                solo
                flat
                dense
                label="กรุณาเลือก"
                color="base"
                outlined
                :rules="[false]"
                required
                :value="this.form.portEntrance"
                :items="data.port"
                item-text="id"
                item-value="id"
                @change="chagePort($event)"
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
              <!-- <label class="font-13-400">ท่าที่ตรวจปล่อย</label>
              <v-combobox
                class="font-14-300"
                solo
                flat
                dense
                label="กรุณาเลือก"
                color="base"
                outlined
                :rules="[(v) => !!v || '']"
                required
                @keydown.enter="focusNext"
                @change="chagePortRelease"
                :value="form.portRelease"
                :items="data.port"
                item-text="name2"
                item-value="id"
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
                class="font-14-300 pt-6"
                dense
                color="base"
                outlined
                disabled
                solo
                flat
                @keydown.enter="focusNext"
                v-model="form.portEntranceName"
              ></v-text-field>
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">ท่าที่ตรวจปล่อย</label>
              <v-combobox
                class="font-14-300"
                solo
                flat
                dense
                label="กรุณาเลือก"
                color="base"
                outlined
                required
                :rules="[false]"
                :value="form.portRelease"
                :items="data.port"
                item-text="id"
                item-value="id"
                @keydown.enter="getIndexListDropDown"
                @change="chagePortRelease($event)"
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
                v-model="form.portReleaseName"
                solo
                flat
                class="font-14-300 pt-6"
                dense
                label="-"
                color="base"
                outlined
                disabled
              ></v-text-field>
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
                color="base"
                outlined
                maxLength="35"
                :value="this.form.master"
              ></v-text-field>
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
                color="base"
                outlined
                maxLength="35"
                :value="this.form.house"
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
                class="font-14-300 combobox-width"
                :items="['นายโร บลอง กิ', 'นายโร บลอง กิ2', 'นายโร บลอง กิ3']"
                :value="this.form.nameFormalPass"
                :rules="[false]"
                required
                solo
                flat
                dense
                label="กรุณาเลือก"
                color="base"
                outlined
                maxLength="60"
                
                @keydown.enter="getIndexListDropDown"
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
                :value="this.form.numberFormalPass"
                required
                dense
                label="เลขบัตรผ่านพิธีการ"
                color="base"
                outlined
                maxLength="17"
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
                color="base"
                outlined
                maxLength="35"
              ></v-text-field>
            </div>
          </div>

          <div class="mt-2">
            <label class="font-18-600 pt-2">บัตรผู้จัดการ/ผู้รับมอบ</label>
          </div>
          <div class="flex flex-col md:flex-row md:space-x-4 pt-3">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">ชื่อ</label>
              <v-combobox
                class="font-14-300 combobox-width"
                solo
                flat
                dense
                label="กรุณาเลือก"
                color="base"
                outlined
                required
                :rules="[false]"
                :value="this.form.nameManager"
                :items="['นายโร บลอง กิ1', 'นายโร บลอง กิ2', 'นายโร บลอง กิ3']"
                maxLength="60"
                
                @keydown.enter="getIndexListDropDown"
              >
              </v-combobox>
            </div>
            <div class="w-full">
              <v-text-field
                @keydown.enter="focusNext"
                :value="this.form.numberManager"
                solo
                flat
                class="font-14-300 pt-6"
                :rules="[false]"
                required
                dense
                label="เลขบัตรผ่านพิธีการ"
                color="base"
                outlined
                maxLength="17"
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
                color="base"
                outlined
                maxLength="35"
              ></v-text-field>
            </div>
          </div>
        </div>

        <div class="w-full md:w-2/5">
          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Net Weight</label>
              <v-text-field
                class="font-14-300 label-align-right2"
                solo
                flat
                dense
                required
                outlined
                label="0.000"
                color="base"
                v-model="form.netWeight"
                :rules="[false]"
                @keydown.enter="focusNext"
                ></v-text-field>
            </div>
            <div class="w-full md:w-1/2">
              <v-combobox
                class="font-14-300 pt-6"
                required
                solo
                flat
                dense
                outlined
                item-text="id"
                item-value="id"
                value="KGM"
                label="กรุณาเลือก"
                color="base"
                :items="data.netWeightUnit"
                :rules="[false]"
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
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Gross Weight</label>
              <v-text-field
                @keydown.enter="focusNext"
                @change="convertNumFormat"
                class="font-14-300 label-align-right2"
                :rules="[false]"
                v-model="form.grossWeight"
                required
                solo
                flat
                dense
                label="0.000"
                color="base"
                outlined
                hide-spin-buttons
              ></v-text-field>
            </div>
            <div class="w-full md:w-1/2">
              <v-combobox
                class="font-14-300 pt-6"
                solo
                flat
                dense
                outlined
                required
                label="กรุณาเลือก"
                color="base"
                value="KGM"
                item-text="id"
                item-value="id"
                :rules="[false]"
                :items="data.grossWeightUnit"
                
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
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Package Amount</label>
              <v-text-field
                @keydown.enter="focusNext"
                @change="convertNumFormat"
                class="font-14-300 label-align-right2"
                :rules="[false]"
                v-model="form.packageAmount"
                required
                solo
                flat
                dense
                label="0"
                color="base"
                outlined
              ></v-text-field>
            </div>
            <div class="w-full md:w-1/2">
              <v-combobox
                class="font-14-300 pt-6"
                required
                solo
                flat
                dense
                outlined
                item-text="id"
                item-id="id"
                label="กรุณาเลือก"
                color="base"
                value="CT"
                :rules="[false]"
                :items="data.packageUnit"
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
                </template></v-combobox
              >
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
            color="base"
            outlined
            :value="this.form.package2"
          ></v-text-field>

          <v-card class="p-1">
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
                  color="base"
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
                  color="base"
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
                  color="base"
                >
                  <span class="font-13-5002"> _ </span>
                </v-btn>
              </div>

              <v-textarea
                rows="3"
                background-color="white"
                color="base"
                solo
                class="font-14-300"
                label="ระบุข้อมูล..."
                outlined
                :value="this.form.shipping"
                :rules="[(v) => !!v || '']"
                maxLegth="512"
              ></v-textarea>
              <v-checkbox
                class="font-13-4002 remove-mg-25"
                color="red"
                dense
                :value="checkbox"
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
              color="base"
              outlined
              maxLength="35"
            ></v-text-field>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/3">
              <label class="font-13-400">Outside Release Port</label>
              <v-combobox
                class="font-14-300"
                solo
                flat
                dense
                outlined
                label="กรุณาเลือก"
                color="base"
                maxLength="4"
                item-text="id"
                item-value="id"
                :value="form.outsideReleasePort"
                :items="data.port"
                @change="changePortOutside($event)"
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
            <div class="w-full md:w-2/3">
              <v-text-field
                class="font-14-300 pt-6"
                solo
                flat
                dense
                label="ระบุข้อมูล"
                color="base"
                outlined
                @keydown.enter="focusNext"
                :value="form.outsideReleasePortName"
              ></v-text-field>
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Approval No</label>
              <v-text-field
                @keydown.enter="focusNext"
                class="font-14-300"
                solo
                flat
                dense
                label="ระบุข้อมูล"
                color="base"
                outlined
                maxLength="6"
              ></v-text-field>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400"> Port</label>
              <v-combobox
                class="font-14-300"
                solo
                flat
                dense
                outlined
                label="กรุณาเลือก"
                color="base"
                maxLength="4"
                item-text="id"
                item-value="id"
                :items="data.port"
                
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
              color="base"
              outlined
              maxLength="255"
            ></v-text-field>
          </div>
        </div>
      </div>
    </v-form>
    <p id="btnFocusOut"></p>
  </div>
</template>

<script>
import countryList from "@/data/country-list.json";
import provinceList from "@/data/province-list.json";
import documentType from "@/data/document-type.json";
import companyStatus from "@/data/company-status.json";
import modeOfTransport from "@/data/mode-of-transport.json";
import cargoTypeCode from "@/data/cargo-type-code.json";
import weightUnit from "@/data/weight-unit.json";
import currencyCode from "@/data/currency-code.json";
import declarationType from "@/data/declartion-type.json";
import port from "@/data/port.json";
import packageUnit from "@/data/package-unit.json";
import broker from "@/data/broker.json";
import importer from "@/data/importer.json";
import vehicleName from "@/data/vehicle-name.json";

// service
import dateFormat from "@/services/dateFormat.js";
import numFormat from "@/services/numFormat.js";
import nextFocus from "@/services/nextFocus.js";

export default {
  name: "Declaration",
  async mounted() {
    await this.validate();
    this.getDefaultData();
  },
  data: () => {
    return {
      nextIndex: 0,
      countState: 1,
      countEnter: 0,
      computedDateFormatted2: null,
      computedDateFormatted3: null,
      form: {
        documentType: null,
        declarationType: null,
        portEntranceName: null,
        portReleaseName: null,
        currencyRate: null,
        outsideReleasePortName: null,
        countryFromFullName: null,
        countryTruckFullName: null,
        netWeight: null,
        grossWeight: null,
        packageAmount: null
      },
      checkbox: true,
      checkbox1: true,
      valid: true,
      hidden: true,
      hidden2: true,
      errorMessages: "",
      computedDateFormatted: "2022-11-01",
      select: "",
      menu2: null,
      select5: null,
      select7: null,
      select6: null,
      test: "",
      data: {
        countryList: countryList,
        provinceList: provinceList,
        documentType: documentType,
        companyStatus: companyStatus,
        modeOfTransport: modeOfTransport,
        cargoTypeCode: cargoTypeCode,
        netWeightUnit: weightUnit,
        grossWeightUnit: weightUnit,
        currencyCode: currencyCode,
        declarationType: declarationType,
        port: port,
        packageUnit: packageUnit,
        broker: broker,
        importer: importer,
        vehicleName: vehicleName,
      },
    };
  },
  methods: {
    numberFormat(event, digit) {
      event.target.value = numFormat.convertNumFormat(
        event.target.value,
        digit
      );
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
      if (this.hidden2) {
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

    getDateFormat(date) {
      return dateFormat.convertDateFormat(date);
    },
    getDefaultData() {
      this.form.documentType = this.data.documentType[0];
      this.form.declarationType = this.data.declarationType[0];
      (this.form.broker = "E.D.I. SERVICE APPLICATION PROVIDER CO.,LTD."),
        (this.form.brokerTax = "105543025971");
      this.form.branchBroker = "000000";
      this.form.subBroker = "SCG LOGISTICS MANAGEMENT COMPANY LIMITED";
      this.form.branchSubBroker = "000000";
      this.form.importer = "E.D.I. SERVICE APPLICATION PROVIDER CO.,LTD.";
      this.form.companyTax = "105543025971";
      this.form.branchCompanyTax = "000000";
      this.form.thaiName =
        "บริษัท อีดีไอ เซอร์วิส แอพพลิเคชั่น โพรไวเดอร์ จำกัด";
      this.form.address = "520 ถนนรามคำแหง";
      this.form.district = "แขวงหัวหมาก";
      this.form.subProvince = "เขตบางกะปิ";
      this.form.province = "กรุงเทพมหานคร";
      this.form.postCode = "10240";
      this.form.countryCode = "TH :  THAILAND";
      this.form.companyStatus = "OT - OTHER";
      this.form.phone = "02-377-9474-5";
      this.form.importDate = "2022-11-01";
      this.form.currency = "USD";
      this.form.currencyRate = "38.3565";
      this.form.transType = "4 - เครื่องบิน";
      this.form.transName = "TG623";
      this.form.cargoType = "4 - Palletized";
      this.form.countryFrom = "US";

      this.form.countryFromFullName = this.data.countryList.find(
        (x) => x.id === this.form.countryFrom
      ).name2;
      this.form.countryCarry = "CN";
      this.form.countryTruckFullName = this.data.countryList.find(
        (x) => x.id === this.form.countryCarry
      ).name2;
      this.form.portEntrance = "1190";
      this.form.portRelease = "1192";
      this.form.master = "60790775016";
      this.form.house = "Q146974";
      this.form.nameFormalPass = "นายโร บลอง กิ";
      this.form.numberFormalPass = "M16334667";
      this.form.nameManager = "นายโร บลอง กิ";
      this.form.numberManager = "M16334667";
      this.form.netWeight = 414.094;
      this.form.grossWeight = 630.001;
      this.form.packageAmount = "2";
      this.form.package2 = "12 Piece";
      this.form.shipping = "60790775016 Q146974";
      this.form.outsideReleasePort = null;

      this.form.portEntranceName = this.data.port.find(
        (x) => x.id == +this.form.portEntrance
      ).name2;
      this.form.portReleaseName = this.data.port.find(
        (x) => x.id == +this.form.portRelease
      ).name2;
      // this.form.outsideReleasePortName = this.data.port.find(
      //   (x) => x.id == +this.form.outsideReleasePort
      // ).name;
    },
    chagePort(selected) {
      if (selected) {
        this.form.portEntranceName = this.data.port.find(
          (x) => x.id == selected.id
        )?.name2;
      } else {
        this.form.portEntranceName = "-";
      }
    },
    chagePortRelease(selected) {
      if (selected) {
        this.form.portReleaseName = this.data.port.find(
          (x) => x.id == selected.id
        )?.name2;
      } else {
        this.form.portReleaseName = "-";
      }
    },
    changeCurrency(selected) {
      if (selected) {
        this.form.currencyRate = this.data.currencyCode.find(
          (x) => x.id == selected.id
        ).rate;
      } else {
        this.form.currencyRate = "-";
      }
    },
    changePortOutside(selected) {
      this.form.outsideReleasePortName = this.data.port.find(
        (x) => x.id == selected.id
      ).name;
    },
    changeCountryFrom(selected) {
      if (selected) {
        this.form.countryFromFullName = this.data.countryList.find(
          (x) => x.id == selected.id
        )?.name2;
      } else {
        this.form.countryFromFullName = "-";
      }
    },
    changeCountryTruck(selected) {
      if (selected) {
        this.form.countryTruckFullName = this.data.countryList.find(
          (x) => x.id == selected.id
        )?.name2;
      } else {
        this.form.countryTruckFullName = "-";
      }
    },
    convertNumFormat() {
      this.form.netWeight = numFormat.getUnitFormat(this.form.netWeight);
      this.form.grossWeight = numFormat.getUnitFormat(this.form.grossWeight);
      this.form.currencyRate = numFormat.getCurrencyFormat(
        this.form.currencyRate
      );
      this.form.packageAmount = numFormat.getNonDigitNumFormat(this.form.packageAmount)
    }
  },
};
</script>

<style scoped>
.tt {
  width: 232px !important;
}
</style>