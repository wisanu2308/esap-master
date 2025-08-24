<template>
  <div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <div class="flex flex-col md:flex-row pt-6 md:space-x-4">
        <div class="w-full md:w-3/5 mr-10">
          <label class="font-13-400">Product Code</label>
          <div class="flex flex-col md:flex-row">
            <v-combobox
              class="font-14-3001"
              solo
              dense
              outlined
              required
              label="กรุณาเลือก"
              color="base"
              maxLength="35"
              :rules="[false]"
              :items="items"
              v-model="form.productCode"
              
              @keydown.enter="getIndexListDropDown"
            ></v-combobox>
            <v-btn
              fab
              small
              class="ml-3 rounded-lg"
              depressed
              color="secondary"
              dark
              height="36px"
              width="36px"
            >
              S</v-btn
            >
            <v-btn
              fab
              small
              class="ml-3 rounded-lg"
              depressed
              color="base"
              dark
              height="36px"
              width="36px"
            >
              L</v-btn
            >
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4 pt-3">
            <div class="w-full">
              <label class="font-13-400">Tariff Code</label>
              <v-combobox
                solo
                class="font-14-3001"
                required
                dense
                label="กรุณาเลือก"
                color="base"
                outlined
                maxLength="12"
                v-model="form.tariffCode"
                :items="data.tariffCode"
                item-text="name"
                item-id="id"
                
                @keydown.enter="getIndexListDropDown"
                :rules="[false]"
              ></v-combobox>
            </div>
            <div class="w-full">
              <label class="font-13-400">Stat</label>
              <v-combobox
                class="font-14-300"
                :rules="[false]"
                solo
                dense
                required
                label="กรุณาเลือก"
                color="base"
                outlined
                maxLength="3"
                
                @keydown.enter="getIndexListDropDown"
                v-model="form.tariffStatistical"
                :items="data.tariffStatistical"
                item-text="name"
                item-id="id"
              ></v-combobox>
            </div>
            <div class="mt-7">
              <span class="font-14-4002">KGM</span>
            </div>
            <div class="w-full">
              <label class="font-13-400">Privilege</label>
              <v-combobox
                class="font-14-300"
                solo
                required
                dense
                label="กรุณาเลือก"
                color="base"
                outlined
                maxLength="3"
                :rules="[false]"
                
                @keydown.enter="getIndexListDropDown"
                v-model="form.privilege"
                :items="data.privilegeCode"
                item-text="name"
              ></v-combobox>
            </div>
            <div class="w-full">
              <label class="font-13-400">Seq</label>
              <v-combobox
                class="font-14-300"
                
                @keydown.enter="getIndexListDropDown"
                solo
                required
                dense
                label="กรุณาเลือก"
                color="base"
                outlined
                maxLength="5"
                :rules="[false]"
                :items="data.tariffSequence"
                item-text="name"
                item-id="id"
                v-model="form.seq"
              >
                <template
                  slot="item"
                  slot-scope="data"
                  style="
                    display: flex;
                    flex-direction: row;
                    width: 500px;
                    overflow-x: auto;
                    overflow-y: auto;
                    white-space: nowrap;
                  "
                >
                  <div class="font-14-300" style="width: 50px">
                    {{ data.item.id }}
                  </div>
                  <div class="line-dropdown"></div>
                  <div class="font-14-300" style="width: 50px">
                    {{ data.item.id2 }}
                  </div>
                  <div class="line-dropdown"></div>
                  <div class="font-14-300" style="width: 50px">
                    {{ data.item.rate }}
                  </div>
                  <div class="line-dropdown"></div>
                  <div class="font-14-300" style="width: 50px">
                    {{ data.item.rate2 }}
                  </div>
                  <div class="line-dropdown"></div>
                  <div class="font-14-300" style="width: 90px">
                    {{ data.item.no1 }}
                  </div>
                  <div class="line-dropdown"></div>
                  <div class="font-14-300" style="width: 90px">
                    {{ data.item.startDate }}
                  </div>
                  <div class="line-dropdown"></div>
                  <div class="font-14-300" style="width: 90px">
                    {{ data.item.endDate }}
                  </div>
                  <div class="line-dropdown"></div>
                  <div class="font-14-300">{{ data.item.detail }}</div>
                </template>
              </v-combobox>
            </div>
          </div>

          <label class="font-13-400">Import Tariff</label>
          <div class="flex flex-col md:flex-row md:w-1/2">
            <v-combobox
              class="font-14-300"
              solo
              dense
              label="กรุณาเลือก"
              color="base"
              outlined
              maxLength="12"
              v-model="form.tariffImport"
              :items="data.tariffImport"
              item-text="name"
              item-id="id"
              
              @keydown.enter="getIndexListDropDown"
            >
            </v-combobox>
            <v-btn
              height="36px"
              width="36px"
              fab
              solo
              small
              class="ml-3 rounded-lg"
              depressed
              color="secondary"
              dark
            >
            </v-btn>
          </div>

          <label class="font-13-400">English Description</label>
          <v-textarea
            class="font-14-300"
            style="top: 5px !important"
            dense
            rows="3"
            solo
            required
            label="SUPER MILLION HART MIST"
            color="base"
            outlined
            maxLength="512"
            :rules="[false]"
            v-model="form.engDes"
          ></v-textarea>

          <label class="font-13-400">Thai Description</label>
          <v-textarea
            class="font-14-300"
            style="top: 5px !important"
            dense
            rows="3"
            solo
            required
            label="ผลิตภัณฑ์จัดแต่งทรงผม"
            color="base"
            outlined
            maxLength="512"
            :rules="[false]"
            v-model="form.thaiDes"
          ></v-textarea>

          <!-- <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Brand Name</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-combobox
                  solo
                  :rules="[(v) => !!v || '']"
                  required
                  class="font-14-300"
                  dense
                  label="กรุณาเลือก"
                  :items="items"
                  color="base"
                  outlined
                ></v-combobox>
                <v-btn
                  height="36px"
                  width="36px"
                  fab
                  small
                  class="ml-3 rounded-lg"
                  depressed
                  color="secondary"
                  dark
                  solo
                >
                  _</v-btn
                >
              </div>
            </div>
            <div class="w-full md:w-1/2"></div>
          </div> -->

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Brand Name</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-combobox
                  class="font-14-300"
                  solo
                  required
                  dense
                  label="กรุณาเลือก"
                  color="base"
                  outlined
                  maxLength="60"
                  
                  @keydown.enter="getIndexListDropDown"
                  :rules="[false]"
                  :items="data.brandName"
                  item-text="name"
                  item-id="name"
                  v-model="form.brandName"
                ></v-combobox>
                <v-btn
                  height="36px"
                  width="36px"
                  fab
                  small
                  class="ml-3 rounded-lg"
                  depressed
                  color="secondary"
                  dark
                >
                  _</v-btn
                >
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Product Year</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  class="font-14-300"
                  dense
                  color="base"
                  outlined
                  maxLength="4"
                  placeholder="ระบุข้อมูล"
                  @keydown.enter="focusNext"
                  v-model="form.productYear"
                  :rules="[false]"
                ></v-text-field>
              </div>
            </div>
          </div>
          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Nature Trans</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-combobox
                  class="font-14-300"
                  solo
                  :rules="[false]"
                  required
                  dense
                  placeholder="กรุณาเลือก"
                  color="base"
                  outlined
                  
                  @keydown.enter="getIndexListDropDown"
                  :items="data.natureTransaction"
                  :value="data.natureTransaction[0].name2"
                  item-text="name2"
                  item-id="id"
                ></v-combobox>
                <v-btn
                  height="36px"
                  width="36px"
                  fab
                  small
                  class="ml-3 rounded-lg"
                  depressed
                  color="secondary"
                  dark
                >
                  _</v-btn
                >
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Origin</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-combobox
                  class="font-14-300"
                  solo
                  required
                  dense
                  placeholder="กรุณาเลือก"
                  color="base"
                  outlined
                  
                  @keydown.enter="getIndexListDropDown"
                  :rules="[false]"
                  :items="data.country"
                  item-text="id"
                  item-id="id"
                  v-model="form.origin"
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
                <v-btn
                  height="36px"
                  width="36px"
                  fab
                  small
                  class="ml-3 rounded-lg"
                  depressed
                  color="secondary"
                  solo
                  dark
                >
                  _</v-btn
                >
              </div>
            </div>
          </div>
          <v-card class="mt-3 p-1" height="88" width="90%">
            <div class="bg-gray-200 pt-4 pl-4" style="height: 80px !important">
              <label class="font-18-600">การเฉลี่ย</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-checkbox
                  v-model="checkbox"
                  class="font-13-400 mt-1"
                  color="error"
                  solo
                  label="เฉลี่ย Charge"
                  dense
                >
                </v-checkbox>
                <v-checkbox
                  class="font-13-400 mt-1"
                  color="error"
                  label="เฉลี่ย Net Weight"
                  dense
                ></v-checkbox>
                <v-checkbox
                  class="font-13-400 mt-1"
                  color="error"
                  dense
                  label="เฉลี่ย Gross Weight"
                ></v-checkbox>
              </div>
            </div>
          </v-card>

          <div class="flex flex-col md:flex-row md:space-x-4 pt-3">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">ราคาต่อชิ้น</label>
              <v-text-field
                @keydown.enter="focusNext"
                class="font-14-300 label-align-right2"
                disabled
                dense
                label="50"
                color="base"
                outlined
              ></v-text-field>
            </div>
            <div class="w-full md:w-1/2">
              <br />
              <v-text-field
                @keydown.enter="focusNext"
                class="font-14-300 label-align-right2"
                disabled
                dense
                label="2,044.34"
                color="base"
                outlined
              ></v-text-field>
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">เงินเพิ่ม</label>
              <v-text-field
                @keydown.enter="focusNext"
                class="font-14-300 label-align-right2"
                disabled
                dense
                label="4"
                color="base"
                outlined
              ></v-text-field>
            </div>
            <div class="w-full md:w-1/2">
              <br />
              <v-text-field
                @keydown.enter="focusNext"
                class="font-14-300 label-align-right2"
                disabled
                dense
                label="4"
                color="base"
                outlined
              ></v-text-field>
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">FOB Foreign</label>
              <v-text-field
                @keydown.enter="focusNext"
                class="font-14-300 label-align-right2"
                disabled
                dense
                label="2,367.52"
                color="base"
                outlined
              ></v-text-field>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">FOB Baht</label>
              <v-text-field
                @keydown.enter="focusNext"
                class="font-14-300 label-align-right2"
                disabled
                dense
                label="96,800.43"
                color="base"
                outlined
              ></v-text-field>
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">FOB Assess</label>
              <v-text-field
                @keydown.enter="focusNext"
                required
                class="font-14-300 label-align-right2"
                dense
                label="0"
                color="base"
                solo
                outlined
                v-model="form.fobAssess"
                @change="convertNumFormat"
              ></v-text-field>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400 align-right">Deducted Amount</label>
              <v-text-field
                @keydown.enter="focusNext"
                :rules="[(v) => !!v || '']"
                required
                class="font-14-300 label-align-right2"
                dense
                label="0"
                color="base"
                outlined
                solo
                v-model="form.deducted"
                @change="convertNumFormat"
              ></v-text-field>
            </div>
          </div>
          <v-card class="p-1 mt-3">
            <div class="bg-gray-200 p-4">
              <div class="flex flex-col md:flex-row">
                <label class="font-18-600">ข้อมูลและรายละเอียดที่แสดงของ</label>
                <v-spacer></v-spacer>
                <v-btn
                  height="36px"
                  width="90px"
                  @click="sleepRefs()"
                  class="font-14-5002 ml-3 rounded-lg"
                  depressed
                  :color="!hidden ? '#495057' : 'base'"
                  dark
                >
                  <span v-if="!hidden">ปิด</span>
                  <span v-else>เพิ่มราคา</span>
                </v-btn>
              </div>
              <div v-if="!hidden" class="animate__animated animate__fadeIn">
                <label class="font-13-400">Increased Terms</label>
                <v-combobox
                  
                  @keydown.enter="getIndexListDropDown"
                  solo
                  background-color="white"
                  class="font-14-3001"
                  dense
                  label="กรุณาเลือก"
                  :items="data.tradeTerm"
                  item-text="name2"
                  item-id="id"
                  color="base"
                  outlined
                  maxLength="3"
                  value="FCA = FREE CARRIER"
                ></v-combobox>
                <div class="">
                  <v-radio-group hide-details row v-model="ex7">
                    <div class="font-13-400 mr-3">
                      <v-radio
                        class="mb-2"
                        color="#F46A6A"
                        dense
                        label="เพิ่มอีก"
                        value="เพิ่มอีก"
                      ></v-radio>
                      <v-radio
                        class="mb-2"
                        color="#F46A6A"
                        dense
                        label="ทั้งรายการ"
                        value="ทั้งรายการ"
                      ></v-radio>
                    </div>
                    <div class="font-13-400">
                      <v-radio
                        class="mb-2"
                        color="#F46A6A"
                        dense
                        label="เพิ่มเป็น"
                        value="เพิ่มเป็น"
                      ></v-radio>
                      <v-radio
                        class="mb-2"
                        color="#F46A6A"
                        dense
                        label="ต่อชิ้น"
                        value="ต่อชิ้น"
                      ></v-radio>
                    </div>
                  </v-radio-group>
                  <v-radio-group hide-details row v-if="ex7 == 'ต่อชิ้น'">
                    <div
                      class="font-13-400"
                      style="
                        margin-top: -20px !important;
                        margin-left: 115px !important;
                      "
                    >
                      <v-radio
                        class="mb-2"
                        color="#F46A6A"
                        dense
                        label="Invoice Qty"
                        value="Invoice "
                      ></v-radio>
                      <v-radio
                        class="mb-2"
                        color="#F46A6A"
                        dense
                        label="Declaration Qty"
                        value="Declaration "
                      >
                      </v-radio>
                      <v-radio
                        class="mb-2"
                        color="#F46A6A"
                        dense
                        label="Net Weight"
                        value="Net"
                      ></v-radio>
                    </div>
                  </v-radio-group>
                </div>
                <div class="flex flex-col md:flex-row md:space-x-4 pt-3">
                  <div class="w-full md:w-6/6">
                    <label class="font-13-400">ราคาที่เพิ่ม</label>
                    <v-text-field
                      @keydown.enter="focusNext"
                      background-color="white"
                      :rules="[false]"
                      required
                      class="font-14-300 label-align-right2"
                      dense
                      solo
                      label="1.00"
                      color="base"
                      outlined
                      v-model="form.additionPrice"
                      @change="convertNumFormat"
                    >
                    </v-text-field>
                  </div>
                  <div class="w-full md:w-2/6">
                    <label class="font-13-400">สกุลเงิน</label>
                    <v-combobox
                      class="font-14-300"
                      solo
                      background-color="white"
                      required
                      dense
                      placeholder="กรุณาเลือก"
                      color="base"
                      outlined
                      @change=" changeCurrency($event)"
                      @keydown.enter="getIndexListDropDown"
                      v-model="form.currencyCode"
                      :items="data.currencyCode"
                      :rules="[false]"
                      item-text="name"
                      item-id="id"
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
                  <div class="w-full md:w-4/6">
                    <br />
                    <v-text-field
                      class="font-14-300 label-align-right2"
                      solo
                      background-color="white"
                      dense
                      color="base"
                      type="number"
                      hide-spin-buttons
                      outlined
                      v-model="form.currencyRate"
                      @keydown.enter="focusNext"
                      @change="convertNumFormat"
                    ></v-text-field>
                  </div>
                  <div class="w-full pt-6 md:w-3/6">
                    <v-btn class="rounded-lg" depressed color="base" dark>
                      <img
                        :src="require('@/assets/images/svg/iconly/call.svg')"
                        alt=""
                      />&nbsp คำนวณ
                    </v-btn>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </div>

        <div class="w-full md:w-2/5">
          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Inv. Qty</label>
              <v-text-field
                class="font-14-300 label-align-right2"
                :rules="[false]"
                required
                solo
                dense
                label="0.000"
                color="base"
                outlined
                @keydown.enter="focusNext"
                @change="convertNumFormat"
                v-model="form.invQty"
              ></v-text-field>
            </div>
            <div class="w-full md:w-1/2">
              <br />
              <v-combobox
                class="font-14-300"
                solo
                required
                dense
                label="กรุณาเลือก"
                color="base"
                outlined
                
                @keydown.enter="getIndexListDropDown"
                :rules="[false]"
                v-model="form.invQtyUnit"
                :items="data.invClare"
                item-text="id"
                item-id="id"
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
              <label class="font-13-400">Declare Qty.</label>
              <v-text-field
                @keydown.enter="focusNext"
                class="font-14-300 label-align-right2"
                :rules="[false]"
                required
                solo
                dense
                label="0.000"
                color="base"
                outlined
                v-model="form.declareQty"
                @change="convertNumFormat"
              ></v-text-field>
            </div>
            <div class="w-full md:w-1/2">
              <br />
              <v-combobox
                
                @keydown.enter="getIndexListDropDown"
                solo
                class="font-14-300"
                :rules="[false]"
                required
                dense
                label="กรุณาเลือก"
                color="base"
                outlined
                v-model="form.declareQtyUnit"
                :items="data.invClare"
                item-text="id"
                item-id="id"
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

          <label class="font-13-400">Qty. 2</label>
          <v-text-field
            @keydown.enter="focusNext"
            class="font-14-300"
            required
            solo
            dense
            label="ระบุข้อมูล"
            color="base"
            outlined
            v-model="form.qty2"
            @change="convertNumFormat"
          ></v-text-field>

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">N.W. </label>
              <v-text-field
                @keydown.enter="focusNext"
                class="font-14-300 label-align-right2"
                :rules="[false]"
                required
                solo
                dense
                placeholder="0.000"
                color="base"
                outlined
                v-model="form.netWeight"
                @change="convertNumFormat"
              ></v-text-field>
            </div>
            <div class="w-full md:w-1/2">
              <br />
              <v-combobox
                
                @keydown.enter="getIndexListDropDown"
                solo
                class="font-14-300"
                dense
                :rules="[false]"
                required
                label="กรุณาเลือก"
                :items="data.netWeightUnit"
                item-text="id"
                item-id="id"
                v-model="form.netWeightUnit"
                color="base"
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
                </template></v-combobox>
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">G.W. </label>
              <v-text-field
                @keydown.enter="focusNext"
                class="font-14-300 label-align-right2"
                :rules="[false]"
                required
                solo
                dense
                placeholder="0.000"
                color="base"
                outlined
                v-model="form.grossWeight"
                @change="convertNumFormat"
              ></v-text-field>
            </div>
            <div class="w-full md:w-1/2">
              <br />
              <v-combobox
                class="font-14-300"
                solo
                required
                dense
                label="กรุณาเลือก"
                color="base"
                outlined
                
                @keydown.enter="getIndexListDropDown"
                :rules="[false]"
                :items="data.grossWeightUnit"
                v-model="form.grossWeightUnit"
                item-text="id"
                item-id="id"
              >
              <template slot="item" slot-scope="data">
                  <div class="dropdown-line2">
                    <div>
                      {{ data.item.id }}
                    </div>
                    <div></div>
                    <div>{{ data.item.name }}</div>
                  </div>
                </template></v-combobox>
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Package</label>
              <v-text-field
                @keydown.enter="focusNext"
                class="font-14-300 label-align-right2"
                dense
                solo
                label="0"
                color="base"
                outlined
                v-model="form.package"
                @change="convertNumFormat"
              ></v-text-field>
            </div>
            <div class="w-full md:w-1/2">
              <br />
              <v-combobox
                
                @keydown.enter="getIndexListDropDown"
                solo
                class="font-14-300"
                dense
                label="กรุณาเลือก"
                color="base"
                outlined
                v-model="form.packageUnit"
                :items="data.packageUnit"
                item-text="id"
                :item-id="name"
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
            <div class="w-full">
              <label class="font-13-400">Package 2</label>
              <v-text-field
                @keydown.enter="focusNext"
                class="font-14-300"
                dense
                solo
                placeholder="กรุณาระบุ"
                color="base"
                outlined
                v-model="form.package2"
              ></v-text-field>
            </div>
          </div>
          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full">
              <label class="font-13-400">Inv. Amount</label>
              <v-text-field
                class="font-14-300 label-align-right2"
                dense
                required
                solo
                placeholder="0.00"
                color="base"
                outlined
                @keydown.enter="focusNext"
                @change="invAmountChange"
                :rules="[false]"
                v-model="form.invAmount"
              ></v-text-field>
            </div>
            <div class="w-full">
              <br />
              <v-combobox
                class="font-14-300"
                solo
                dense
                required
                label="กรุณาเลือก"
                color="base"
                outlined
                @change="changeInvCurrency($event)"
                @keydown.enter="getIndexListDropDown"
                :rules="[false]"
                :items="data.currencyCode"
                item-text="name"
                item-id="id"
                v-model="form.invAmountCurrencyCode"
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
            <div class="w-full">
              <br />
              <v-text-field
                @keydown.enter="focusNext"
                class="font-14-300"
                dense
                disabled
                v-model="form.invAmountRate"
                color="base"
                outlined
              ></v-text-field>
            </div>
            <div class="w-full">
              <br />
              <v-text-field
                @keydown.enter="focusNext"
                disabled
                class="font-14-300"
                dense
                v-model="form.invMultipleAmountRate"
                color="base"
                outlined
              ></v-text-field>
            </div>
          </div>
          <v-card class="p-1 mb-6 mt-3">
            <div class="bg-gray-200 p-4">
              <div class="flex flex-col md:flex-row">
                <label class="font-18-600">Shipping Mark</label>
                <v-spacer></v-spacer>
                <div class="space-x-2">
                  <v-btn
                    fab
                    x-small
                    :rules="[(v) => !!v || '']"
                    required
                    solo
                    class="rounded-lg"
                    color="base"
                    depressed
                    dark
                    >|</v-btn
                  >
                  <v-btn
                    fab
                    x-small
                    class="rounded-lg"
                    color="base"
                    depressed
                    dark
                    >H</v-btn
                  >
                  <v-btn
                    fab
                    x-small
                    class="rounded-lg"
                    color="base"
                    depressed
                    dark
                    >_</v-btn
                  >
                </div>
              </div>
              <v-textarea
                class="pt-3 font-14-300"
                outlined
                :rules="[(v) => !!v || '']"
                required
                solo
                rows="3"
                background-color="white"
                v-model="form.shippingMark"
                color="base"
                maxLegth="512"
              ></v-textarea>
            </div>
          </v-card>
          <label class="font-13-400">Remark(ส่งกรมศุลฯ)</label>
          <div class="flex flex-col md:flex-row">
            <v-textarea
              :rules="[(v) => !!v || '']"
              required
              class="font-14-300"
              dense
              label=""
              color="base"
              outlined
              rows="1"
              maxLength="255"
            ></v-textarea>
            <v-btn
              fab
              height="36px"
              width="36px"
              small
              class="ml-3 rounded-lg"
              depressed
              color="secondary"
              dark
            >
              _</v-btn
            >
          </div>
        </div>
      </div>
    </v-form>
    <p id="btnFocusOut"></p>
  </div>
</template>

<script>
import natureTransaction from "@/data/nature-trans.json";
import weightUnit from "@/data/weight-unit.json";
import currencyCode from "@/data/currency-code.json";
import tariffCode from "@/data/tariff-code.json";
import tariffStatistical from "@/data/tariff-statistical.json";
import privilegeCode from "@/data/privilege-code.json";
import tariffSequence from "@/data/tariff-sequence.json";
import tariffImport from "@/data/tariff-import.json";
import brandName from "@/data/brand-name.json";
import invClare from "@/data/inv-clare-qty.json";
import packageUnit from "@/data/package-unit.json";
import tradeTerm from "@/data/trade-term.json";
import country from "@/data/country-list.json";

//services
import calcNum from "@/services/calcNum.js";
import numFormat from "@/services/numFormat.js";
import nextFocus from "@/services/nextFocus.js";

export default {
  name: "Declaration",
  async mounted() {
    await this.validate();
    this.getInvAmountRate();
  },
  data() {
    return {
      countState: 1,
      nextIndex: 0,
      currentIndex: 0,
      ex7: "",
      valid: true,
      hidden: false,
      checkbox: true,
      items: [
        "ตัวอย่าง dropdown 01",
        "ตัวอย่าง dropdown 02",
        "ตัวอย่าง dropdown 03",
        "ตัวอย่าง dropdown 04",
      ],
      select: "",
      data: {
        natureTransaction: natureTransaction,
        netWeightUnit: weightUnit,
        grossWeightUnit: weightUnit,
        currencyCode: currencyCode,
        tariffCode: tariffCode,
        tariffStatistical: tariffStatistical,
        privilegeCode: privilegeCode,
        tariffSequence: tariffSequence,
        tariffImport: tariffImport,
        brandName: brandName,
        invClare: invClare,
        packageUnit: packageUnit,
        tradeTerm: tradeTerm,
        country: country,
      },
      form: {
        productCode: "4400-001010-P",
        tariffCode: "000085395290",
        tariffStatistical: "000",
        privilege: "000",
        seq: "65004",
        tariffImport: "1PART4",
        engDes: "Boarder Floor,Felt LH Cover,PVC Car Met & PVC",
        thaiDes: "ยางกันเปี้อน#4550-049000-P",
        brandName: "NO BRAND",
        productYear: "2022",
        natureTrans: "CN",
        origin: "TH",
        currencyCode: "THB",
        currencyRate: "1.000",
        invQty: "480.001",
        invQtyUni: "SET",
        declareQty: "480.001",
        declareQtyUnit: "C62",
        invQtyUnit: "C62",
        netWeight: "414.094",
        netWeightUnit: "KGM",
        grossWeight: "630.000",
        grossWeightUnit: "KGM",
        package: "2",
        packageUnit: "PK",
        package2: "(1 SET)",
        invAmount: "14483",
        invAmountCurrencyCode: "USD",
        invAmountRate: null,
        shippingMark: "60790775016 Q146974",
        invMultipleAmountRate: 0,
        qty2: "7"
      },
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
    async sleepRefs() {
      this.hidden = !this.hidden;
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
    changeCurrency(currency) {
      this.form.currencyRate = currency.rate;
    },
    changeInvCurrency(currency) {
      this.form.invAmountRate = currency.rate;
      this.calcMultipleAmountAndRate();
    },
    getInvAmountRate() {
      this.form.invAmountRate = this.data.currencyCode.find(
        (x) => x.id === this.form.invAmountCurrencyCode
      ).rate;
      this.calcMultipleAmountAndRate();
    },
    calcMultipleAmountAndRate() {
      this.form.invMultipleAmountRate =
        this.form.invAmount * this.form.invAmountRate;
      this.form.invMultipleAmountRate = calcNum.round(
        this.form.invMultipleAmountRate
      );
    },
    invAmountChange() {
      this.calcMultipleAmountAndRate();
      this.convertNumFormat();
    },

    convertNumFormat() {
      this.form.fobAssess = numFormat.getNonDigitNumFormat(this.form.fobAssess);
      this.form.deducted = numFormat.getNonDigitNumFormat(this.form.deducted);
      this.form.currencyRate = numFormat.getCurrencyFormat(
        this.form.currencyRate
      );
      this.form.additionPrice = numFormat.getNumberFormat(
        this.form.additionPrice
      );
      this.form.invQty = numFormat.getUnitFormat(this.form.invQty);
      this.form.declareQty = numFormat.getUnitFormat(this.form.declareQty);
      this.form.netWeight = numFormat.getUnitFormat(this.form.netWeight);
      this.form.grossWeight = numFormat.getUnitFormat(this.form.grossWeight);
      this.form.package = numFormat.getNonDigitNumFormat(this.form.package);
      this.form.qty2 = numFormat.getNonDigitNumFormat(this.form.qty2);
      this.form.invAmount = numFormat.getNumberFormat(this.form.invAmount);
    }
  },
};
</script>