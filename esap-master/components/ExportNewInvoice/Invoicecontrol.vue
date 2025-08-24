<template>
  <div>
    <v-form ref="form">
      <div class="flex flex-col md:flex-row pt-6 md:space-x-20">
        <div class="w-full md:w-3/5">
          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-2/3">
              <label class="font-13-400">Invoice No.</label>
              <v-text-field
                @keydown.enter="focusNext"
                :rules="[false]"
                required
                class="font-14-300"
                solo
                dense
                label="ระบุข้อมูล"
                color="red"
                outlined
                v-model="form.invoiceNo"
              ></v-text-field>
            </div>
            <div class="w-full md:w-1/3">
              <label class="font-13-400">Invoice Date</label>
              <v-btn-toggle v-model="toggle_exclusive" style="width: 100%">
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      :rules="[false]"
                      @keydown.enter="focusNext"
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
                      :value="getDateFormat(form.invoiceDate)"
                    >
                    </v-text-field>
                  </template>
                  <v-date-picker v-model="form.invoiceDate" no-title>
                  </v-date-picker>
                </v-menu>
              </v-btn-toggle>
              <!-- <template>
                  <v-text-field @keydown.enter="focusNext" 
                    hide-details
                    class="tt font-13-3002"
                    outlined
                    v-model="computedDateFormatted"
                    label="dd/mm/yyyy"
                    placeholder="From"
                    append-icon="mdi-calendar"
                    readonly
                    solo
                    height="32px"
                    style="width: 232px !important"
                    color="base"
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  no-title
                  @input="menu2 = false"
                ></v-date-picker> -->
            </div>
          </div>

          <label class="font-13-400">Ship To / ผู้รับปลายทาง</label>
          <div class="flex flex-col md:flex-row">
            <v-combobox
            
@keydown.enter="getIndexListDropDown"
              :items="data.shipTo"
              item-text="name"
              item-id="id"
              required
              class="font-14-300"
              solo
              dense
              label="กรุณาเลือก"
              color="base_ex"
              outlined
              maxLength="50"
              v-model="form.shipTo"
              :rules="[false]"
            ></v-combobox>

            <v-btn
              @click="sleepRefs()"
              class="ml-3 rounded-lg"
              depressed
              :color="!hidden ? '#495057' : 'base_ex'"
              dark
            >
              <span v-if="!hidden">ซ่อน</span>
              <span v-else>แสดง</span>
            </v-btn>
            <v-btn class="ml-3 rounded-lg" depressed color="base_ex" dark>
              L</v-btn
            >
          </div>
          <div v-if="!hidden" class="animate__animated animate__fadeIn">
            <label class="font-13-400">Name</label>
            <div class="flex flex-col md:flex-row">
              <v-text-field
                @keydown.enter="focusNext"
                :rules="[false]"
                required
                class="font-14-300"
                solo
                dense
                label="ระบุข้อมูล"
                color="base_ex"
                outlined
                maxLength="150"
                v-model="form.name"
              ></v-text-field>
            </div>

            <label class="font-13-400">Street And Number</label>
            <v-text-field
              @keydown.enter="focusNext"
              :rules="[false]"
              required
              class="font-14-300"
              solo
              v-model="form.address"
              dense
              label="ระบุข้อมูล..."
              color="base_ex"
              outlined
              maxLength="120"
            ></v-text-field>

            <div class="flex flex-col md:flex-row md:space-x-4">
              <div class="w-full md:w-1/2">
                <label class="font-13-400">District</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  solo
                  dense
                  label="ระบุข้อมูล"
                  color="base_ex"
                  outlined
                  maxLength="50"
                  v-model="form.district"
                ></v-text-field>
              </div>
              <div class="w-full md:w-1/2">
                <label class="font-13-400">Sub Province</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  solo
                  dense
                  label="ระบุข้อมูล"
                  color="base_ex"
                  outlined
                  maxLength="50"
                  v-model="form.subProvince"
                >
                </v-text-field>
              </div>
            </div>

            <div class="flex flex-col md:flex-row md:space-x-4">
              <div class="w-full md:w-1/2">
                <label class="font-13-400">Province</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  solo
                  dense
                  label="ระบุข้อมูล..."
                  color="base_ex"
                  outlined
                  maxLength="50"
                  v-model="form.province"
                >
                </v-text-field>
              </div>
              <div class="w-full md:w-1/2">
                <label class="font-13-400">Post Code</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  :rules="[(v) => !!v && '']"
                  required
                  solo
                  dense
                  label="ระบุข้อมูล"
                  color="base_ex"
                  outlined
                  maxLength="9"
                  v-model="form.postCode"
                >
                </v-text-field>
              </div>
            </div>

            <div class="flex flex-col md:flex-row md:space-x-4">
              <div class="w-full md:w-1/2">
                <label class="font-13-400">Country</label>
                <v-combobox
                  required
                  class="font-14-300"
                  solo
                  dense
                  label="กรุณาเลือก"
                  color="base_ex"
                  outlined
                  
@keydown.enter="getIndexListDropDown"
                  :rules="[(v) => !!v || '']"
                  :items="data.countryList"
                  item-text="name2"
                  item-id="id"
                  v-model="form.countryCode"
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
                <label class="font-13-400">Consignee Status</label>
                <v-combobox
                  required
                  class="font-14-300"
                  solo
                  dense
                  label="กรุณาเลือก"
                  color="base_ex"
                  outlined
                  
@keydown.enter="getIndexListDropDown"
                  :items="data.consigneeStatus"
                  item-text="name2"
                  item-id="id"
                  :rules="[false]"
                  v-model="form.consigneeStatus"
                >
                </v-combobox>
              </div>
            </div>

            <label class="font-13-400">Email</label>
            <v-text-field
              @keydown.enter="focusNext"
              class="font-14-300"
              solo
              dense
              label="ระบุข้อมูล..."
              color="base_ex"
              outlined
              maxLength="50"
              value="ESAP CO., LTD."
            ></v-text-field>
          </div>

          <label class="font-13-400">Bill To / ผู้ซื้อ</label>
          <div class="flex flex-col md:flex-row">
            <v-combobox
            
@keydown.enter="getIndexListDropDown"
              :items="data.shipTo"
              item-text="name"
              item-id="id"
              required
              class="font-14-300"
              solo
              dense
              label="กรุณาเลือก"
              color="base_ex"
              outlined
              maxLength="35"
              v-model="form.billingTo"
            ></v-combobox>

            <v-btn
              @click="sleepRefs2()"
              class="ml-3 rounded-lg"
              depressed
              :color="!hidden2 ? '#495057' : 'base_ex'"
              dark
            >
              <span v-if="!hidden2">ซ่อน</span>
              <span v-else>แสดง</span>
            </v-btn>
            <v-btn class="ml-3 rounded-lg" depressed color="base_ex" dark>
              L</v-btn
            >
          </div>
          <div v-if="!hidden2" class="animate__animated animate__fadeIn">
            <label class="font-13-400">Name</label>
            <div class="flex flex-col md:flex-row">
              <v-text-field
                @keydown.enter="focusNext"
                :rules="[false]"
                required
                class="font-14-300"
                solo
                dense
                v-model="form.billingToName"
                label="กรุณาเลือก"
                color="base_ex"
                outlined
                maxLength="150"
              ></v-text-field>
            </div>

            <label class="font-13-400">Street And Number</label>
            <v-text-field
              @keydown.enter="focusNext"
              :rules="[false]"
              required
              class="font-14-300"
              solo
              v-model="form.billingToAddress"
              dense
              label="ระบุข้อมูล..."
              color="base_ex"
              outlined
              maxLength="120"
            ></v-text-field>

            <div class="flex flex-col md:flex-row md:space-x-4">
              <div class="w-full md:w-1/2">
                <label class="font-13-400">District</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  solo
                  dense
                  label="ระบุข้อมูล"
                  color="base_ex"
                  outlined
                  maxLength="50"
                  v-model="form.billingToDistrict"
                ></v-text-field>
              </div>
              <div class="w-full md:w-1/2">
                <label class="font-13-400">Sub Province</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  solo
                  dense
                  label="ระบุข้อมูล"
                  color="base_ex"
                  outlined
                  maxLength="50"
                  v-model="form.billingToSubProvince"
                >
                </v-text-field>
              </div>
            </div>

            <div class="flex flex-col md:flex-row md:space-x-4">
              <div class="w-full md:w-1/2">
                <label class="font-13-400">Province</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  solo
                  dense
                  label="ระบุข้อมูล"
                  color="base_ex"
                  outlined
                  maxLength="50"
                >
                </v-text-field>
              </div>
              <div class="w-full md:w-1/2">
                <label class="font-13-400">Post Code</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  solo
                  dense
                  label="ระบุข้อมูล"
                  :rules="[false]"
                  required
                  color="base_ex"
                  outlined
                  maxLength="9"
                  v-model="form.billingToPostCode"
                >
                </v-text-field>
              </div>
            </div>

            <div class="flex flex-col md:flex-row md:space-x-4">
              <div class="w-full md:w-1/2">
                <label class="font-13-400">Country</label>
                <v-combobox
                
@keydown.enter="getIndexListDropDown"
                  :items="data.countryList"
                  item-text="name2"
                  item-id="id"
                  :rules="[false]"
                  required
                  class="font-14-300"
                  solo
                  dense
                  label="กรุณาเลือก"
                  color="base_ex"
                  outlined
                  v-model="form.billingToCountryCode"
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
                <label class="font-13-400">Consignee Status</label>
                <v-combobox
                
@keydown.enter="getIndexListDropDown"
                  :items="data.consigneeStatus"
                  :rules="[false]"
                  item-text="name2"
                  item-id="id"
                  required
                  class="font-14-300"
                  solo
                  dense
                  label="กรุณาเลือก"
                  color="base_ex"
                  outlined
                  v-model="form.billingToConsignorStatus"
                ></v-combobox>
              </div>
            </div>

            <label class="font-13-400">Email</label>
            <v-text-field
              @keydown.enter="focusNext"
              class="font-14-300"
              solo
              dense
              label="ระบุข้อมูล..."
              color="base_ex"
              outlined
              maxLength="50"
              value="ESAP CO., LTD."
            ></v-text-field>
          </div>
          <label class="font-13-400">Terms</label>
          <v-combobox
          
@keydown.enter="getIndexListDropDown"
            :items="data.terms"
            item-text="name2"
            item-id="id"
            :rules="[false]"
            required
            dense
            class="font-14-300"
            solo
            label="กรุณาเลือก"
            color="base_ex"
            outlined
            v-model="form.term"
          ></v-combobox>

          <div class="w-full flex flex-col md:flex-row pt-3">
            <div class="md:w-1/2">
              <label class="font-13-400">Total Invoice</label>
              <v-text-field
                @keydown.enter="focusNext"
                :rules="[false]"
                required
                class="font-14-300 label-align-right2"
                solo
                dense
                label="0.00"
                color="base_ex"
                outlined
                v-model="form.totalInvoice"
                @change="convertNumFormat"
              ></v-text-field>
            </div>
            <div class="ml-3 w-1/6">
              <label class="font-13-400">สกุลเงิน</label>
              <v-combobox
                :items="data.currency"
                item-text="name"
                item-id="id"
                :rules="[false]"
                required
                class="font-14-300"
                solo
                dense
                label="กรุณาเลือก"
                color="base_ex"
                outlined
                v-model="form.currencyCode"


                @change=" currencyCodeChange($event)"
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
            <div class="ml-3 w-1/6">
              <v-text-field
                @keydown.enter="focusNext"
                disabled
                class="font-14-300 mt-6"
                solo
                dense
                color="base_ex"
                outlined
                v-model="form.currencyRate"
              ></v-text-field>
            </div>
            <div class="ml-3 w-1/6"></div>
          </div>

          <div class="w-full flex flex-col md:flex-row pt-3">
            <div class="md:w-1/2">
              <label class="font-13-400">Net Weight</label>
              <v-text-field
                @keydown.enter="focusNext"
                :rules="[false]"
                required
                class="font-14-300 label-align-right2"
                solo
                dense
                label="0.000"
                color="base_ex"
                outlined
                v-model="form.netWeight"
                @change="convertNumFormat"
              ></v-text-field>
            </div>
            <div class="ml-3 w-1/6">
              <label class="font-13-400">หน่วย</label>
              <v-combobox
              
@keydown.enter="getIndexListDropDown"
                :items="data.netWeightUnit"
                item-text="id"
                item-id="id"
                :rules="[(v) => !!v && '']"
                required
                class="font-14-300"
                solo
                dense
                label="กรุณาเลือก"
                color="base_ex"
                outlined
                v-model="form.netWeightUnit"
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
            <div class="ml-3 w-1/6">
              <label class="font-13-400">วิธีเฉลี่ย</label>
              <v-combobox
              
@keydown.enter="getIndexListDropDown"
                :items="data.typeDistribute"
                item-text="name"
                item-id="id"
                class="font-14-300"
                solo
                dense
                color="base_ex"
                outlined
                v-model="form.netWeightAVG"
              ></v-combobox>
            </div>
            <div class="ml-3 w-1/6">
              <br />
              <!-- <v-btn dense depressed color="base_ex" dark></v-btn> -->
              <v-btn class="rounded-lg" depressed color="base_ex" dark>
                <v-icon>mdi-menu</v-icon> เฉลี่ย
              </v-btn>
            </div>
          </div>

          <div class="w-full flex flex-col md:flex-row pt-3">
            <div class="md:w-1/2">
              <label class="font-13-400">Gross Weight</label>
              <v-text-field
                @keydown.enter="focusNext"
                :rules="[false]"
                required
                class="font-14-300 label-align-right2"
                solo
                dense
                label="0.000"
                color="base_ex"
                outlined
                v-model="form.grossWeight"
                @change="convertNumFormat"
              ></v-text-field>
            </div>
            <div class="ml-3 w-1/6">
              <label class="font-13-400">หน่วย</label>
              <v-combobox
              
@keydown.enter="getIndexListDropDown"
                :items="data.grossWeightUnit"
                item-text="id"
                item-id="id"
                :rules="[(v) => !!v && '']"
                required
                class="font-14-300"
                solo
                dense
                label="กรุณาเลือก"
                color="base_ex"
                outlined
                v-model="form.grossWeightUnit"
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
            <div class="ml-3 w-1/6">
              <label class="font-13-400">วิธีเฉลี่ย</label>
              <v-combobox
              
@keydown.enter="getIndexListDropDown"
                :items="data.typeDistribute"
                item-text="name"
                item-id="id"
                class="font-14-300"
                solo
                dense
                label="ราคา"
                color="base_ex"
                outlined
                v-model="form.grossWeightAVG"
              ></v-combobox>
            </div>
            <div class="ml-3 w-1/6">
              <br />
              <!-- <v-btn dense depressed color="base_ex" dark></v-btn> -->
              <v-btn class="rounded-lg" depressed color="base_ex" dark>
                <v-icon>mdi-menu</v-icon> เฉลี่ย
              </v-btn>
            </div>
          </div>

          <div class="flex flex-col md:flex-row pt-3">
            <div class="md:w-1/2">
              <label class="font-13-400">Package</label>
              <v-text-field
                @keydown.enter="focusNext"
                :rules="[false]"
                required
                class="font-14-300 label-align-right2"
                style="text-align: right !important"
                solo
                dense
                label="0"
                color="base_ex"
                outlined
                v-model="form.package"
                @change="convertNumFormat"
              ></v-text-field>
            </div>
            <div class="ml-3 w-1/6">
              <label class="font-13-400">หน่วย</label>
              <v-combobox
              
@keydown.enter="getIndexListDropDown"
                :items="data.packageUnit"
                item-text="id"
                item-id="id"
                :rules="[(v) => !!v && '']"
                required
                class="font-14-300"
                solo
                dense
                label="กรุณาเลือก"
                color="base_ex"
                outlined
                v-model="form.packageUnit"
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
            <div class="ml-3 w-1/6"></div>
            <div class="ml-3 w-1/6"></div>
          </div>
        </div>

        <div class="w-full md:w-2/5">
          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">PO No.</label>
              <v-text-field
                @keydown.enter="focusNext"
                :rules="[false]"
                required
                class="font-14-300"
                solo
                dense
                label="ระบุข้อมูล..."
                color="base_ex"
                outlined
                v-model="form.poNo"
              ></v-text-field>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Term of Payment</label>
              <v-text-field
                @keydown.enter="focusNext"
                :rules="[false]"
                required
                class="font-14-300"
                solo
                dense
                label="ระบุข้อมูล..."
                color="base_ex"
                outlined
                maxLength="17"
                v-model="form.termOfPayment"
              ></v-text-field>
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Seller Status</label>
              <v-combobox
              
@keydown.enter="getIndexListDropDown"
                :items="data.sellerStatus"
                item-text="name"
                item-id="id"
                class="pt-1 font-14-300"
                dense
                solo
                :rules="[false]"
                label="กรุณาเลือก"
                color="base_ex"
                outlined
                v-model="form.sellerStatus"
              ></v-combobox>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Commercial Level</label>
              <v-combobox
              
@keydown.enter="getIndexListDropDown"
                :items="data.commercialLevel"
                item-text="name"
                item-id="id"
                :rules="[false]"
                required
                class="pt-1 font-14-300"
                dense
                solo
                label="กรุณาเลือก"
                color="base_ex"
                outlined
                v-model="form.commercialLevel"
              ></v-combobox>
            </div>
          </div>

          <label class="font-13-400">AEOs Reference No.</label>
          <v-text-field
            @keydown.enter="focusNext"
            dense
            label="ระบุข้อมูล"
            class="font-14-300"
            solo
            color="base_ex"
            outlined
            maxLength="35"
          ></v-text-field>

          <label class="font-13-400">Detail of Other Charge</label>
          <v-text-field
            @keydown.enter="focusNext"
            rows="1"
            dense
            label="ระบุข้อมูล..."
            class="font-14-300"
            solo
            color="base_ex"
            outlined
            maxLength="512"
          >
          </v-text-field>

          <div class="pt-4">
            <label class="font-13-400"> Self Certification Remark</label>
            <v-text-field
              rows="1"
              dense
              label="ระบุข้อมูล..."
              class="font-14-300"
              solo
              color="base_ex"
              outlined
              maxLength="512"
            >
            </v-text-field>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">FOB Foreign </label>
              <v-text-field
                disabled
                class="font-14-300 label-align-right2"
                solo
                dense
                color="base_ex"
                outlined
                v-model="form.fobForeign"
              >
              </v-text-field>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">FoB Baht</label>
              <v-text-field
                disabled
                class="font-14-300 label-align-right2"
                solo
                dense
                color="base_ex"
                outlined
                v-model="form.fobBath"
              >
              </v-text-field>
            </div>
          </div>
        </div>
      </div>
    </v-form>
    <p id="btnFocusOut"></p>
  </div>
</template>

<script>
import countryList from "@/data/country-list.json";
import consigneeStatus from "@/data/consignee-status-export.json";
import terms from "@/data/trade-term.json";
import currency from "@/data/currency-code.json";
import weightUnit from "@/data/weight-unit.json";
import grossWeightDistribute from "@/data/gross-weight-distribute.json";
import commercialLevel from "@/data/comercial-level.json";
import sellerStatus from "@/data/seller-status";
import dateFormat from "@/services/dateFormat.js";
import shipTo from "@/data/importer.json";
import packageUnit from "@/data/package-unit.json"

// services
import numFormat from "@/services/numFormat.js";
import nextFocus from "@/services/nextFocus.js";

export default {
  name: "Declaration",
  async mounted() {
    await this.validate();
    this.getCountryList();
    this.getDefaultData();
  },
  async creat() {
    await this.validate();
  },
  data() {
    return {
      valid: true,
      countState: 1,
      hidden: false,
      hidden2: false,
      consiger_name: "",
      street_number: "",
      date: null,
      computedDateFormatted: "",
      toggle_exclusive: null,
      menu2: false,
      countryList2: [],
      data: {
        countryList: countryList,
        terms: terms,
        sellerStatus: sellerStatus,
        commercialLevel: commercialLevel,
        netWeightUnit: weightUnit,
        consigneeStatus: consigneeStatus,
        grossWeightUnit: weightUnit,
        typeDistribute: grossWeightDistribute,
        currency: currency,
        shipTo: shipTo,
        packageUnit: packageUnit
      },
      form: {
        invoiceNo: null,
        currencyRate: null,
        totalInvoice: null,
        netWeight: null,
        grossWeight: null,
        package: null,
      },
    };
  },
  methods: {
    getDefaultData() {
      this.form.invoiceNo = "SI2/4514655";
      this.form.invoiceDate = "2022-11-09";
      this.form.shipTo = "GRIFFITHFOOD AU";
      this.form.name = "GRIFM CULINARY PTY LTD.";
      this.form.address = "223-225 GOVERNOR ROAD";
      this.form.district = "BRAESIDE,";
      this.form.subProvince = "VICTORIA";
      this.form.postCode = "3195";
      this.form.countryCode = "AUSTRALIA";
      this.form.consignorStatus = "OT - OTHER";

      this.form.billingTo = "GRIFFITHFOOD AU";
      this.form.billingToName = "GRIFM CULINARY PTY LTD.";
      this.form.billingToAddress = "223-225 GOVERNOR ROAD";
      this.form.billingToDistrict = "BRAESIDE,";
      this.form.billingToSubProvince = "VICTORIA";
      this.form.billingToPostCode = "3195";
      this.form.billingToCountryCode = "AUSTRALIA";
      this.form.billingToConsignorStatus = "OT - OTHER";
      this.form.consigneeStatus = "OT - OTHER";

      this.form.term = "FOB = FREE ON BOARD";
      this.form.totalInvoice = "36,173.62";
      this.form.currencyCode = "AUD";
      this.form.currencyRate = this.data.currency.find(
        (x) => x.id === "AUD"
      ).rate;
      this.form.netWeight = "20,000.001";
      this.form.grossWeight = "20,650.001";

      this.form.netWeightAVG = "ราคา";
      this.form.grossWeightAVG = "ราคา";

      this.form.netWeightUnit = "KGM";
      this.form.grossWeightUnit = "KGM";

      this.form.package = "60";
      this.form.packageUnit = "PK";

      this.form.poNo = "PBP13771";
      this.form.termOfPayment = "N/A";
      this.form.sellerStatus = "OTHER";
      this.form.commercialLevel = "WHOLESALE";
      this.form.fobForeign = "36,173.62";
      this.form.fobBath = "87,1476.29";
    },
    getCountryList() {
      this.data.countryList.forEach((x) => {
        this.countryList2.push({ name: x.name });
      });
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
      await this.$refs.form.validate();
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
    currencyCodeChange(selected) {
      if (selected) {
        this.form.currencyRate = selected.rate;
      } else {
        this.form.currencyRate = "-";
      }
    },
    getDateFormat(date) {
      return dateFormat.convertDateFormat(date);
    },
    convertNumFormat() {
      this.form.totalInvoice = numFormat.getNumberFormat(
        this.form.totalInvoice
      );
      this.form.netWeight = numFormat.getUnitFormat(this.form.netWeight);
      this.form.grossWeight = numFormat.getUnitFormat(this.form.grossWeight);
      this.form.package = numFormat.getPackageFormat(this.form.package);
    },
  },
};
</script>

<style scoped>
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
