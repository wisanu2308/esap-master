<template>
  <div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <div class="flex flex-col md:flex-row pt-6 md:space-x-4">
        <div class="w-full md:w-3/5 mr-10">
          <label class="font-13-400">Product Code</label>
          <div class="flex flex-col md:flex-row">
            <v-combobox
              
              @keydown.enter="getIndexListDropDown"
              solo
              class="font-14-3001"
              :rules="[false]"
              required
              dense
              label="กรุณาเลือก"
              :items="items"
              color="base_ex"
              outlined
              maxLength="35"
              v-model="form.productCode"
            ></v-combobox>
            <v-btn
              fab
              small
              class="ml-3 rounded-lg"
              depressed
              color="base_ex"
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
              color="base_ex"
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
                
                @keydown.enter="getIndexListDropDown"
                solo
                class="font-14-300"
                dense
                label="กรุณาเลือก"
                color="base_ex"
                outlined
                maxLength="12"
                v-model="form.tariffCode"
                :items="data.tariffCode"
                item-text="name"
                item-id="id"
                :rules="[false]"
              >
              </v-combobox>
            </div>
            <div class="w-1/3">
              <label class="font-13-400">Stat</label>
              <v-combobox
                @
                @keydown.enter="getIndexListDropDown"
                solo
                class="font-14-300"
                dense
                :rules="[false]"
                required
                label="กรุณาเลือก"
                color="base_ex"
                outlined
                maxLength="3"
                v-model="form.tariffStatistical"
                :items="data.tariffStatistical"
                item-text="name"
                item-id="id"
              ></v-combobox>
            </div>
            <div class="mt-7">
              <span class="font-14-4002">KGM</span>
            </div>
            <div class="w-1/3">
              <label class="font-13-400">Privilege</label>
              <v-combobox
                
                @keydown.enter="getIndexListDropDown"
                solo
                class="font-14-300"
                :rules="[false]"
                required
                dense
                label="กรุณาเลือก"
                color="base_ex"
                outlined
                maxLength="3"
                v-model="form.privilege"
                :items="data.privilegeCode"
                item-text="name"
              ></v-combobox>
            </div>
            <div class="w-1/3">
              <label class="font-13-400">Seq</label>
              <v-combobox
                class="font-14-300"
                
                @keydown.enter="getIndexListDropDown"
                solo
                required
                dense
                label="กรุณาเลือก"
                color="base_ex"
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
                  <div class="font-14-300 ml-3" style="width: 50px">
                    {{ data.item.id2 }}
                  </div>
                  <div class="line-dropdown"></div>
                  <div class="font-14-300 ml-3" style="width: 50px">
                    {{ data.item.rate }}
                  </div>
                  <div class="line-dropdown"></div>
                  <div class="font-14-300 ml-3" style="width: 50px">
                    {{ data.item.rate2 }}
                  </div>
                  <div class="line-dropdown"></div>
                  <div class="font-14-300 ml-3" style="width: 90px">
                    {{ data.item.no1 }}
                  </div>
                  <div class="line-dropdown"></div>
                  <div class="font-14-300 ml-3" style="width: 90px">
                    {{ data.item.startDate }}
                  </div>
                  <div class="line-dropdown"></div>
                  <div class="font-14-300 ml-3" style="width: 90px">
                    {{ data.item.endDate }}
                  </div>
                  <div class="line-dropdown"></div>
                  <div class="font-14-300 ml-3">{{ data.item.detail }}</div>
                </template>
              </v-combobox>
            </div>
          </div>

          <label class="font-13-400">Export Tariff</label>
          <div class="flex flex-col md:flex-row md:w-1/2">
            <v-combobox
              
              @keydown.enter="getIndexListDropDown"
              solo
              class="font-14-300"
              dense
              label="กรุณาเลือก"
              color="base_ex"
              outlined
              v-model="form.tariffExport"
              :items="data.tariffExport"
              item-text="id"
              item-id="id2"
            >
              <template
                slot="item"
                slot-scope="data"
                style="
                  display: flex;
                  flex-direction: row;
                  overflow-x: auto;
                  overflow-y: auto;
                "
              >
                <div class="dropdown-line3">
                  <div class="font-14-300" style="width: 120px">
                    {{ data.item.id }}
                  </div>
                  <div class="line-dropdown"></div>
                  <div class="font-14-300 ml-3" style="width: 50px">
                    {{ data.item.id }}
                  </div>
                  <div class="line-dropdown"></div>
                  <div class="font-14-300 ml-3" style="width: 50px">
                    {{ data.item.id2 }}
                  </div>
                  <div class="line-dropdown"></div>
                  <div class="font-14-300 ml-3" style="width: 400px">
                    {{ data.item.detail }}
                  </div>
                </div>
              </template>
            </v-combobox>
            <v-btn
              height="36px"
              width="36px"
              fab
              solo
              small
              class="ml-3 rounded-lg"
              depressed
              color="base_ex"
              dark
            >
              _</v-btn
            >
          </div>

          <label class="font-13-400">English Description</label>
          <v-textarea
            class="font-14-300"
            dense
            rows="3"
            solo
            :rules="[false]"
            required
            label="SUPER MILLION HART MIST"
            color="base_ex"
            @keydown.enter="focusNext"
            outlined
            maxLength="512"
            v-model="form.engDes"
          ></v-textarea>

          <label class="font-13-400">Thai Description</label>
          <v-textarea
            class="font-14-300"
            dense
            rows="3"
            solo
            :rules="[false]"
            required
            label="ผลิตภัณฑ์จัดแต่งทรงผม"
            color="base_ex"
            @keydown.enter="focusNext"
            outlined
            maxLength="512"
            v-model="form.thaiDes"
          ></v-textarea>

          <div
            class="flex flex-col md:flex-row md:space-x-4"
            style="margin-top: -3px"
          >
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Brand Name</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-combobox
                  
                  @keydown.enter="getIndexListDropDown"
                  solo
                  :rules="[false]"
                  required
                  value="No BRAND"
                  class="font-14-300"
                  dense
                  label="กรุณาเลือก"
                  color="base_ex"
                  outlined
                  maxLength="60"
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
                  color="base_ex"
                  dark
                  solo
                >
                  _</v-btn
                >
              </div>
            </div>
            <div class="w-full md:w-1/2"></div>
          </div>

          <div
            class="flex flex-col md:flex-row md:space-x-4"
            style="margin-top: -3px"
          >
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Nature Trans</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-combobox
                  
                  @keydown.enter="getIndexListDropDown"
                  solo
                  :rules="[false]"
                  required
                  class="font-14-300"
                  dense
                  label="กรุณาเลือก"
                  :items="data.natureTransaction"
                  :value="form.natureTransaction"
                  item-text="name2"
                  item-id="id"
                  color="base_ex"
                  outlined
                ></v-combobox>
                <v-btn
                  height="36px"
                  width="36px"
                  fab
                  small
                  class="ml-3 rounded-lg"
                  depressed
                  color="base_ex"
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
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  dense
                  :rules="[false]"
                  required
                  solo
                  label="ระบุข้อมูล"
                  color="base_ex"
                  outlined
                  maxLength="4"
                  v-model="form.productYear"
                ></v-text-field>
                <v-btn
                  height="36px"
                  width="36px"
                  fab
                  small
                  class="ml-3 rounded-lg"
                  depressed
                  color="base_ex"
                  dark
                >
                  _</v-btn
                >
              </div>
            </div>
          </div>

          <div
            class="flex flex-col md:flex-row md:space-x-4"
            style="margin-top: -3px"
          >
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Origin</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-combobox
                  class="font-14-300"
                  solo
                  required
                  dense
                  placeholder="กรุณาเลือก"
                  color="base_ex"
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
                  color="base_ex"
                  dark
                >
                  _</v-btn
                >
              </div>
            </div>

            <div class="w-full md:w-1/2">
              <label class="font-13-400">Purchase</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-combobox
                  class="font-14-300"
                  solo
                  required
                  dense
                  placeholder="กรุณาเลือก"
                  color="base_ex"
                  outlined
                  
                  @keydown.enter="getIndexListDropDown"
                  :rules="[false]"
                  :items="data.country"
                  item-text="id"
                  item-id="id"
                  v-model="form.purchase"
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
                  color="base_ex"
                  dark
                >
                  _</v-btn
                >
              </div>
            </div>
          </div>

          <v-card class="mt-3 p-1" height="88">
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
                value="100.00"
                color="base_ex"
                outlined
              >
              </v-text-field>
            </div>
            <div class="w-full md:w-1/2">
              <br />
              <v-text-field
                @keydown.enter="focusNext"
                class="font-14-300 label-align-right2"
                disabled
                dense
                value="1000.00"
                color="base_ex"
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
                value="0"
                color="base_ex"
                outlined
              >
              </v-text-field>
            </div>
            <div class="w-full md:w-1/2">
              <br />
              <v-text-field
                @keydown.enter="focusNext"
                class="font-14-300 label-align-right2"
                disabled
                dense
                value="0"
                color="base_ex"
                outlined
              >
              </v-text-field>
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
                color="base_ex"
                outlined
              ></v-text-field>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">FOB Bath</label>
              <v-text-field
                @keydown.enter="focusNext"
                class="font-14-300 label-align-right2"
                disabled
                dense
                color="base_ex"
                outlined
                v-model="form.fobBath"
              ></v-text-field>
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400 label-align-right2">FOB Assess</label>
              <v-text-field
                @keydown.enter="focusNext"
                class="font-14-300 label-align-right2"
                dense
                color="base_ex"
                outlined
                solo
                type="number"
                hide-spin-buttons
                v-model="form.fobAssistant"
              >
              </v-text-field>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400 label-align-right2"
                >Deducted Amount</label
              >
              <v-text-field
                @keydown.enter="focusNext"
                class="font-14-300 label-align-right2"
                dense
                label="0"
                color="base_ex"
                outlined
                solo
                type="number"
                hide-spin-buttons
              >
              </v-text-field>
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
                  :color="!hidden ? '#495057' : 'base_ex'"
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
                  color="base_ex"
                  outlined
                  maxLength="3"
                  v-model="form.tradeTerm"
                ></v-combobox>
                <div class="">
                  <v-radio-group hide-details class="mb-5" row v-model="ex7">
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
                      :rules="[(v) => !!v || '']"
                      required
                      class="font-14-300 label-align-right2"
                      dense
                      solo
                      label="1.00"
                      color="base_ex"
                      outlined
                      v-model="form.additionPrice"
                      @change="convertNumFormat"
                    >
                    </v-text-field>
                  </div>
                  <div class="w-full md:w-2/6">
                    <label class="font-13-400">สกุลเงิน</label>
                    <v-combobox
                      :items="data.currency"
                      item-text="id"
                      item-id="id"
                      solo
                      background-color="white"
                      :rules="[(v) => !!v || '']"
                      required
                      class="font-14-300"
                      dense
                      @change="
                        
                        changeCurrency($event);
                      "
                      @keydown.enter="getIndexListDropDown"
                      v-model="form.currencyCode"
                      color="base_ex"
                      outlined
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
                      @keydown.enter="focusNext"
                      solo
                      background-color="white"
                      class="font-14-300"
                      dense
                      color="base_ex"
                      outlined
                      type="number"
                      v-model="form.currencyRate"
                      hide-spin-buttons
                    ></v-text-field>
                  </div>
                  <div class="w-full pt-6 md:w-3/6">
                    <v-btn class="rounded-lg" depressed color="base_ex" dark>
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
              <label class="font-13-400">inv. Qty</label>
              <v-text-field
                @keydown.enter="focusNext"
                class="font-14-300 label-align-right2"
                :rules="[false]"
                required
                solo
                dense
                label="0.000"
                color="base_ex"
                outlined
                item-text="name"
                item-id="id"
                v-model="form.invQty"
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
                color="base_ex"
                outlined
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
                color="base_ex"
                outlined
                @change="convertNumFormat"
                v-model="form.declareQty"
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
                color="base_ex"
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
            color="base_ex"
            outlined
          >
          </v-text-field>

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
                label="0.000"
                color="base_ex"
                outlined
                @change="convertNumFormat"
                v-model="form.netWeight"
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
                color="base_ex"
                outlined
                :items="data.netWeightUnit"
                item-text="id"
                item-id="id"
                v-model="form.netWeightUnit"
                label="กรุณาเลือก"
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
              <label class="font-13-400">G.W. </label>
              <v-text-field
                @keydown.enter="focusNext"
                class="font-14-300 label-align-right2"
                :rules="[false]"
                required
                solo
                dense
                label="0.000"
                color="base_ex"
                outlined
                v-model="form.grossWeight"
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
                color="base_ex"
                outlined
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
                </template>
              </v-combobox>
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
                color="base_ex"
                outlined
                v-model="form.package"
                @change="convertNumFormat"
              >
              </v-text-field>
            </div>
            <div class="w-full md:w-1/2">
              <br />
              <v-combobox
                
                @keydown.enter="getIndexListDropDown"
                solo
                class="font-14-300"
                dense
                label="กรุณาเลือก"
                color="base_ex"
                outlined
                v-model="form.packageUnit"
                :items="data.packageUnit"
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

          <label class="font-13-400">Package 2</label>
          <v-text-field
            @keydown.enter="focusNext"
            class="font-14-300"
            required
            solo
            dense
            label="ระบุข้อมูล"
            color="base_ex"
            outlined
            v-model="form.package2"
          >
          </v-text-field>

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-4/6">
              <label class="font-13-400">Inv. Amount</label>
              <v-text-field
                @keydown.enter="focusNext"
                class="font-14-300 label-align-right2"
                dense
                :rules="[false]"
                required
                solo
                label="0.00"
                color="base_ex"
                outlined
                @change="convertNumFormat"
                v-model="form.invAmount"
              ></v-text-field>
            </div>
            <div class="w-2/5">
              <br />
              <v-combobox
                solo
                class="font-14-300"
                dense
                :rules="[false]"
                required
                label="กรุณาเลือก"
                color="base_ex"
                outlined
                :items="data.currency"
                item-text="id"
                item-id="id"
                v-model="form.invAmountCurrencyCode"
                @change="
                  
                  changeInvCurrency($event);
                "
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
            <div class="">
              <br />
              <v-text-field
                @keydown.enter="focusNext"
                class="font-14-300"
                dense
                disabled
                v-model="form.invAmountRate"
                color="base_ex"
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
                    color="base_ex"
                    depressed
                    dark
                    >|</v-btn
                  >
                  <v-btn
                    fab
                    x-small
                    class="rounded-lg"
                    color="base_ex"
                    depressed
                    dark
                    >H</v-btn
                  >
                  <v-btn
                    fab
                    x-small
                    class="rounded-lg"
                    color="base_ex"
                    depressed
                    dark
                    >_</v-btn
                  >
                </div>
              </div>
              <v-textarea
                class="pt-3 font-14-300"
                outlined
                :rules="[false]"
                required
                solo
                rows="3"
                background-color="white"
                color="base_ex"
                maxLegth="512"
                v-model="form.shippingMark"
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
              color="base_ex"
              outlined
              solo
              rows="1"
              maxLength="255"
              placeholder="ระบุข้อมูล"
            ></v-textarea>
            <v-btn
              fab
              height="36px"
              width="36px"
              small
              class="ml-3 rounded-lg"
              depressed
              color="base_ex"
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
import currency from "@/data/currency-code2.json";
import tariffCode from "@/data/tariff-code.json";
import tariffStatistical from "@/data/tariff-statistical-export.json";
import privilegeCode from "@/data/privilege-code-export.json";
import tariffSequence from "@/data/tariff-sequence.json";
import brandName from "@/data/brand-name.json";
import invClare from "@/data/inv-clare-qty.json";
import packageUnit from "@/data/package-unit.json";
import tariffExport from "@/data/tariff-export.json";
import tradeTerm from "@/data/trade-term.json";
import country from "@/data/country-list.json";

//service
import numFormat from "@/services/numFormat.js";
import nextFocus from "@/services/nextFocus.js";

export default {
  name: "Declaration",
  async mounted() {
    await this.validate();
    //this.getInvAmountRate();
  },
  data() {
    return {
      countState: 1,
      ex7: "",
      valid: true,
      hidden: false,
      checkbox: true,
      beforeIndexInput: null,
      items: [
        "ตัวอย่าง dropdown 01",
        "ตัวอย่าง dropdown 02",
        "ตัวอย่าง dropdown 03",
        "ตัวอย่าง dropdown 04",
      ],
      select: "",
      data: {
        natureTransaction: natureTransaction,
        currency: currency,
        netWeightUnit: weightUnit,
        grossWeightUnit: weightUnit,
        tariffCode: tariffCode,
        tariffStatistical: tariffStatistical,
        privilegeCode: privilegeCode,
        tariffSequence: tariffSequence,
        brandName: brandName,
        invClare: invClare,
        packageUnit: packageUnit,
        tariffExport: tariffExport,
        tradeTerm: tradeTerm,
        country: country,
      },
      form: {
        productCode: "39239090",
        tariffCode: "000085395290",
        tariffStatistical: "090",
        privilege: "003",
        seq: "50001",
        tariffExport: "9PART3",
        engDes: "GLOBAL PACK",
        thaiDes: "หลอดพลาสติกเปล่าสำหรับบรรจุเครื่องสำอางค์พร้อมฝา",
        brandName: "NO BRAND",
        productYear: "2022",
        natureTrans: "11 - เป็นการค้า",
        origin: "TH",
        purchase: "AU",
        currencyCode: "THB",
        currencyRate: "1.000",
        invQty: "8,000.001",
        invQtyUnit: "KGM",
        declareQty: "8,000.000",
        declareQtyUnit: "KGM",
        netWeight: "20,000.001",
        netWeightUnit: "KGM",
        grossWeight: "20,000.651",
        grossWeightUnit: "KGM",
        package: "60",
        packageUnit: "PK",
        package2: "(1,000 BAGS)",
        invAmount: "36173.61",
        invAmountCurrencyCode: "AUD",
        invAmountRate: null,
        shippingMark: "NO SHIPPING MARK",
        invMultipleAmountRate: 0,
        fobBath: "87,1476.29",
        fobAssistant: 0,
        natureTransaction: "11 = เป็นการค้า",
        tradeTerm: "FCA = FREE CARRIER",
        additionPrice: 1.01,
        declareQtyUnit: "KGM",
      },
    };
  },
  props: {},
  methods: {
    focusOut(e) {
      console.log("up");
      const inputs = Array.from(
        e.target.form.querySelectorAll('input[type="text"]')
      );
      const index = inputs.indexOf(e.target);
      index.blur();
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
    async sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
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
    changeCurrency(currency) {
      if (currency) {
        this.form.currencyRate = currency.rate;
      } else {
        this.form.currencyRate = "-";
      }
    },
    changeInvCurrency(currency) {
      if (currency) {
        this.form.invAmountRate = currency.rate;
      } else {
        this.form.invAmountRate = "-";
      }
    },
    getInvAmountRate() {
      this.form.invAmountRate = this.data.currency.find(
        (x) => x.id === this.form.invAmountCurrencyCode
      ).rate;
    },

    convertNumFormat() {
      this.form.package = this.form.currencyRate = numFormat.getPackageFormat(
        this.form.package
      );

      this.form.additionPrice = numFormat.getNumberFormat(
        this.form.additionPrice
      );

      this.form.invAmount = numFormat.getNumberFormat(this.form.invAmount);

      this.form.currencyRate = numFormat.getCurrencyFormat(
        this.form.currencyRate
      );
      this.form.invQty = numFormat.getUnitFormat(this.form.invQty);
      this.form.declareQty = numFormat.getUnitFormat(this.form.declareQty);
      this.form.netWeight = numFormat.getUnitFormat(this.form.netWeight);
      this.form.grossWeight = numFormat.getUnitFormat(this.form.grossWeight);
    },
  },
};
</script>

<style scoped>
/* color droupdown, checkbox ,input require */
.v-application .error--text,
::v-deep(i.v-icon.notranslate.mdi.mdi-menu-down.theme--light.error--text),
::v-deep(.v-input--selection-controls__input > .mdi-checkbox-marked) {
  color: #bb6bd9 !important;
}

::v-deep(.v-input--selection-controls__ripple) {
  color: #bb6bd9 !important;
  caret-color: #bb6bd9 !important;
}
</style>
  
