<template>
  <div>
    <div class="flex w-full flex-col md:flex-row flex-wrap">
      <v-card class="p-1 mb-6 mt-6 w-full md:w-7/12">
        <div class="esap_error p-4">
          <label class="font-18-800">Change (Inv.)</label>

          <div class="flex flex-col md:flex-row md:space-x-4 pt-2">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Forwarding</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  dense
                  class="font-14-300 label-align-right2"
                  color="base_ex"
                  background-color="white"
                  outlined
                  v-model="form.forwardingAmount"
                  @change="calcMultipleAmountAndRate"
                ></v-text-field>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">สกุลเงิน</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-combobox
                  solo
                  dense
                  class="font-14-300"
                  label="กรุณาเลือก"
                  :items="items"
                  item-text="name"
                  item-id="id"
                  color="base_ex"
                  background-color="white"
                  outlined
                  @change="
                    
                    changeCurrency($event, 'forwardingRate');
                  "
                  @keydown.enter="getIndexListDropDown"
                  v-model="form.forwardingCurrencyCode"
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
            </div>
            <div class="w-full md:w-1/2">
              <br />
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  class="label-align-right font-14-300"
                  disabled
                  dense
                  color="base_ex"
                  v-model="form.forwardingRate"
                  outlined
                ></v-text-field>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <br />
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  class="label-align-right font-14-300"
                  disabled
                  dense
                  color="base_ex"
                  outlined
                  v-model="form.calcForwardingAmount"
                ></v-text-field>
              </div>
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4 pt-2">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Freight</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  dense
                  color="base_ex"
                  class="font-14-300 label-align-right2"
                  background-color="white"
                  outlined
                  v-model="form.freightAmount"
                  @change="calcMultipleAmountAndRate"
                ></v-text-field>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">สกุลเงิน</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-combobox
                  solo
                  dense
                  color="base_ex"
                  class="font-14-300"
                  label="กรุณาเลือก"
                  :items="items"
                  item-text="name"
                  item-id="id"
                  value="THB"
                  background-color="white"
                  outlined
                  v-model="form.freightCurrencyCode"
                  @change="
                    
                    changeCurrency($event, 'freightRate');
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
            </div>
            <div class="w-full md:w-1/2">
              <br />
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  class="label-align-right font-14-300"
                  disabled
                  dense
                  color="base_ex"
                  v-model="form.freightRate"
                  outlined
                ></v-text-field>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <br />
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  class="label-align-right font-14-300"
                  disabled
                  dense
                  color="base_ex"
                  outlined
                  v-model="form.calcFreightAmount"
                ></v-text-field>
              </div>
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4 pt-2">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Insurance</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  dense
                  color="base_ex"
                  background-color="white"
                  class="font-14-300 label-align-right2"
                  outlined
                  v-model="form.insuranceAmount"
                  @change="calcMultipleAmountAndRate"
                ></v-text-field>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">สกุลเงิน</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-combobox
                  solo
                  dense
                  color="base_ex"
                  background-color="white"
                  class="font-14-300"
                  label="กรุณาเลือก"
                  :items="items"
                  item-text="name"
                  item-id="id"
                  value="KES"
                  outlined
                  @change="
                    
                    changeCurrency($event, 'insuranceRate');
                  "
                  @keydown.enter="getIndexListDropDown"
                  v-model="form.insuranceCurrencyCode"
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
            </div>
            <div class="w-full md:w-1/2">
              <br />
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  class="label-align-right font-14-300"
                  disabled
                  dense
                  color="base_ex"
                  outlined
                  v-model="form.insuranceRate"
                ></v-text-field>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <br />
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  dense
                  class="label-align-right font-14-300"
                  disabled
                  color="base_ex"
                  outlined
                  v-model="form.calcInsuranceAmount"
                ></v-text-field>
              </div>
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4 pt-2">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Packing</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  dense
                  color="base_ex"
                  class="font-14-300 label-align-right2"
                  background-color="white"
                  outlined
                  v-model="form.packingAmount"
                  @change="calcMultipleAmountAndRate"
                ></v-text-field>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">สกุลเงิน</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-combobox
                  solo
                  dense
                  color="base_ex"
                  background-color="white"
                  class="font-14-300"
                  label="กรุณาเลือก"
                  :items="items"
                  item-text="name"
                  item-id="id"
                  value="KWD"
                  outlined
                  @change="
                    
                    changeCurrency($event, 'packingRate');
                  "
                  @keydown.enter="getIndexListDropDown"
                  v-model="form.packingCurrencyCode"
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
            </div>
            <div class="w-full md:w-1/2">
              <br />
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  dense
                  color="base_ex"
                  outlined
                  class="label-align-right font-14-300"
                  disabled
                  v-model="form.packingRate"
                ></v-text-field>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <br />
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  dense
                  color="base_ex"
                  outlined
                  class="label-align-right font-14-300"
                  disabled
                  v-model="form.calcPackingAmount"
                ></v-text-field>
              </div>
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4 pt-2">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Interior Transport</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  dense
                  color="base_ex"
                  background-color="white"
                  outlined
                  class="font-14-300 label-align-right2"
                  v-model="form.interiorAmount"
                  @change="calcMultipleAmountAndRate"
                ></v-text-field>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">สกุลเงิน</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-combobox
                  solo
                  dense
                  color="base_ex"
                  background-color="white"
                  label="กรุณาเลือก"
                  :items="items"
                  item-text="name"
                  item-id="id"
                  value="THB"
                  class="font-14-300"
                  outlined
                  @change="
                    
                    changeCurrency($event, 'interiorRate');
                  "
                  @keydown.enter="getIndexListDropDown"
                  v-model="form.interiorCurrencyCode"
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
            </div>
            <div class="w-full md:w-1/2">
              <br />
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  dense
                  color="base_ex"
                  outlined
                  class="label-align-right font-14-300"
                  disabled
                  v-model="form.interiorRate"
                ></v-text-field>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <br />
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  dense
                  color="base_ex"
                  outlined
                  class="label-align-right font-14-300"
                  disabled
                  v-model="form.calcInteriorAmount"
                ></v-text-field>
              </div>
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4 pt-2">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Landing</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  dense
                  color="base_ex"
                  background-color="white"
                  class="font-14-300 label-align-right2"
                  outlined
                  v-model="form.landingAmount"
                  @change="calcMultipleAmountAndRate"
                ></v-text-field>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">สกุลเงิน</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-combobox
                  solo
                  dense
                  color="base_ex"
                  background-color="white"
                  label="กรุณาเลือก"
                  :items="items"
                  item-text="name"
                  item-id="id"
                  value="KES"
                  outlined
                  class="font-14-300"
                  @change="
                    
                    changeCurrency($event, 'landingRate');
                  "
                  @keydown.enter="getIndexListDropDown"
                  v-model="form.landingCurrencyCode"
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
            </div>
            <div class="w-full md:w-1/2">
              <br />
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  dense
                  color="base_ex"
                  value="0.27380"
                  outlined
                  class="label-align-right font-14-300"
                  disabled
                  v-model="form.landingRate"
                ></v-text-field>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <br />
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  dense
                  color="base_ex"
                  value="43,915.39"
                  outlined
                  class="label-align-right font-14-300"
                  disabled
                  v-model="form.calcLandingAmount"
                ></v-text-field>
              </div>
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4 pt-2">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Other</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  dense
                  color="base_ex"
                  class="font-14-300 label-align-right2"
                  background-color="white"
                  outlined
                  v-model="form.otherAmount"
                  @change="calcMultipleAmountAndRate"
                ></v-text-field>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">สกุลเงิน</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-combobox
                  solo
                  dense
                  color="base_ex"
                  background-color="white"
                  label="กรุณาเลือก"
                  :items="items"
                  item-text="name"
                  item-id="id"
                  value="KWD"
                  class="font-14-300"
                  outlined
                  @change="
                    
                    changeCurrency($event, 'otherRate');
                  "
                  @keydown.enter="getIndexListDropDown"
                  v-model="form.otherCurrencyCode"
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
            </div>
            <div class="w-full md:w-1/2">
              <br />
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  class="label-align-right font-14-300"
                  @keydown.enter="focusNext"
                  dense
                  color="base_ex"
                  outlined
                  disabled
                  v-model="form.otherRate"
                ></v-text-field>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <br />
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  dense
                  color="base_ex"
                  value="4.14"
                  outlined
                  class="label-align-right font-14-300"
                  disabled
                  v-model="form.calcOtherAmount"
                ></v-text-field>
              </div>
            </div>
          </div>
        </div>
      </v-card>
      <div class="w-full md:w-3/12"></div>
      <v-card class="p-1 mb-6 w-full md:w-7/12">
        <div class="bg-gray-200 p-4">
          <label class="font-18-800">Change (เอกสารอื่นๆ)</label>

          <div class="flex flex-col md:flex-row md:space-x-4 pt-2">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Forwarding</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  dense
                  class="font-14-300 label-align-right2"
                  color="base_ex"
                  background-color="white"
                  outlined
                  v-model="form.forwardingAmountOth"
                  @change="calcMultipleAmountAndRate"
                ></v-text-field>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">สกุลเงิน</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-combobox
                  solo
                  dense
                  label="กรุณาเลือก"
                  :items="items"
                  item-text="name"
                  item-id="id"
                  value="AUD"
                  class="font-14-300"
                  color="base_ex"
                  background-color="white"
                  outlined
                  v-model="form.forwardingCurrencyCodeOth"
                  @change="
                    
                    changeCurrency($event, 'forwardingRateOth');
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
            </div>
            <div class="w-full md:w-1/2">
              <br />
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  dense
                  class="label-align-right font-14-300"
                  disabled
                  color="base_ex"
                  outlined
                  v-model="form.forwardingRateOth"
                ></v-text-field>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <br />
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  dense
                  class="label-align-right font-14-300"
                  disabled
                  color="base_ex"
                  outlined
                  v-model="form.calcForwardingAmountOth"
                ></v-text-field>
              </div>
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4 pt-2">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Freight</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  dense
                  color="base_ex"
                  class="font-14-300 label-align-right2"
                  background-color="white"
                  outlined
                  v-model="form.freightAmountOth"
                  @change="calcMultipleAmountAndRate"
                ></v-text-field>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">สกุลเงิน</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-combobox
                  solo
                  dense
                  label="กรุณาเลือก"
                  :items="items"
                  item-text="name"
                  item-id="id"
                  value="KWD"
                  color="base_ex"
                  class="font-14-300"
                  background-color="white"
                  outlined
                  @change="
                    
                    changeCurrency($event, 'freightRateOth');
                  "
                  @keydown.enter="getIndexListDropDown"
                  v-model="form.freightCurrencyCodeOth"
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
            </div>
            <div class="w-full md:w-1/2">
              <br />
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  dense
                  color="base_ex"
                  class="label-align-right font-14-300"
                  disabled
                  outlined
                  v-model="form.freightRateOth"
                ></v-text-field>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <br />
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  dense
                  color="base_ex"
                  class="label-align-right font-14-300"
                  disabled
                  outlined
                  v-model="form.calcFreightAmountOth"
                ></v-text-field>
              </div>
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4 pt-2">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Insurance</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  dense
                  color="base_ex"
                  class="font-14-300 label-align-right2"
                  background-color="white"
                  outlined
                  v-model="form.insuranceAmountOth"
                  @change="calcMultipleAmountAndRate"
                ></v-text-field>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">สกุลเงิน</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-combobox
                  solo
                  label="กรุณาเลือก"
                  :items="items"
                  item-text="name"
                  item-id="id"
                  value="GBP"
                  dense
                  class="font-14-300"
                  color="base_ex"
                  background-color="white"
                  outlined
                  v-model="form.insuranceCurrencyCodeOth"
                  @change="
                    
                    changeCurrency($event, 'insuranceRateOth');
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
            </div>
            <div class="w-full md:w-1/2">
              <br />
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  class="label-align-right font-14-300"
                  disabled
                  dense
                  color="base_ex"
                  outlined
                  v-model="form.insuranceRateOth"
                ></v-text-field>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <br />
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  class="label-align-right font-14-300"
                  disabled
                  dense
                  color="base_ex"
                  outlined
                  v-model="form.calcInsuranceAmountOth"
                ></v-text-field>
              </div>
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4 pt-2">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Packing</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  dense
                  color="base_ex"
                  class="font-14-300 label-align-right2"
                  background-color="white"
                  outlined
                  v-model="form.packingAmountOth"
                  @change="calcMultipleAmountAndRate"
                ></v-text-field>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">สกุลเงิน</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-combobox
                  solo
                  label="กรุณาเลือก"
                  :items="items"
                  item-text="name"
                  item-id="id"
                  value="SEK"
                  dense
                  class="font-14-300"
                  color="base_ex"
                  background-color="white"
                  outlined
                  @change="
                    
                    changeCurrency($event, 'packingRateOth');
                  "
                  @keydown.enter="getIndexListDropDown"
                  v-model="form.packingCurrencyCodeOth"
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
            </div>
            <div class="w-full md:w-1/2">
              <br />
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  dense
                  class="label-align-right font-14-300"
                  disabled
                  color="base_ex"
                  outlined
                  v-model="form.packingRateOth"
                ></v-text-field>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <br />
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  dense
                  class="label-align-right font-14-300"
                  disabled
                  color="base_ex"
                  outlined
                  v-model="form.calcPackingAmountOth"
                ></v-text-field>
              </div>
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4 pt-2">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Interior Transport</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300 label-align-right2"
                  dense
                  color="base_ex"
                  background-color="white"
                  outlined
                  v-model="form.interiorAmountOth"
                  @change="calcMultipleAmountAndRate"
                ></v-text-field>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">สกุลเงิน</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-combobox
                  solo
                  label="กรุณาเลือก"
                  :items="items"
                  item-text="name"
                  item-id="id"
                  value="THB"
                  class="font-14-300"
                  dense
                  color="base_ex"
                  background-color="white"
                  outlined
                  v-model="form.interiorCurrencyCodeOth"
                  @change="
                    
                    changeCurrency($event, 'interiorRateOth');
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
            </div>
            <div class="w-full md:w-1/2">
              <br />
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  dense
                  class="label-align-right font-14-300"
                  disabled
                  color="base_ex"
                  v-model="form.interiorRateOth"
                  outlined
                ></v-text-field>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <br />
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  dense
                  class="label-align-right font-14-300"
                  disabled
                  color="base_ex"
                  outlined
                  v-model="form.calcInteriorAmountOth"
                ></v-text-field>
              </div>
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4 pt-2">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Landing</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  dense
                  class="font-14-300 label-align-right2"
                  color="base_ex"
                  background-color="white"
                  outlined
                  v-model="form.landingAmountOth"
                  @change="calcMultipleAmountAndRate"
                ></v-text-field>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">สกุลเงิน</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-combobox
                  solo
                  label="กรุณาเลือก"
                  :items="items"
                  item-text="name"
                  item-id="id"
                  value="CAD"
                  dense
                  class="font-14-300"
                  color="base_ex"
                  background-color="white"
                  outlined
                  v-model="form.landingCurrencyCodeOth"
                  @change="
                    
                    changeCurrency($event, 'landingRateOth');
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
            </div>
            <div class="w-full md:w-1/2">
              <br />
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  dense
                  class="label-align-right font-14-300"
                  disabled
                  color="base_ex"
                  outlined
                  v-model="form.landingRateOth"
                ></v-text-field>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <br />
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  dense
                  class="label-align-right font-14-300"
                  disabled
                  color="base_ex"
                  outlined
                  v-model="form.calcLandingAmountOth"
                ></v-text-field>
              </div>
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4 pt-2">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Other</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  dense
                  class="font-14-300 label-align-right2"
                  color="base_ex"
                  background-color="white"
                  outlined
                  v-model="form.otherAmountOth"
                  @change="calcMultipleAmountAndRate"
                ></v-text-field>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <label class="font-13-400">สกุลเงิน</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-combobox
                  solo
                  class="font-14-300"
                  dense
                  color="base_ex"
                  background-color="white"
                  label="กรุณาเลือก"
                  :items="items"
                  item-text="name"
                  item-id="id"
                  value="CNY"
                  outlined
                  v-model="form.otherCurrencyCodeOth"
                  @change="
                    
                    changeCurrency($event, 'otherRateOth');
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
            </div>
            <div class="w-full md:w-1/2">
              <br />
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  dense
                  class="label-align-right font-14-300"
                  disabled
                  color="base_ex"
                  outlined
                  v-model="form.otherRateOth"
                ></v-text-field>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <br />
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  dense
                  class="label-align-right font-14-300"
                  disabled
                  color="base_ex"
                  outlined
                  v-model="form.calcOtherAmountOth"
                ></v-text-field>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </div>
    <p id="btnFocusOut"></p>
  </div>
</template>

<script>
import currencyCode from "@/data/currency-code2.json";
import calcNum from "@/services/calcNum.js";
import numFormat from "@/services/numFormat.js";
import nextFocus from "@/services/nextFocus.js";

export default {
  data() {
    return {
      checkbox: true,
      countState: 1,
      items: currencyCode,
      form: {
        forwardingRate: null,
        freightRate: null,
        insuranceRate: null,
        packingRate: null,
        interiorRate: null,
        landingRate: null,
        otherRate: null,

        forwardingAmount: 112,
        freightAmount: 55.44,
        insuranceAmount: 124.2,
        packingAmount: 1150.3,
        interiorAmount: 123,
        landingAmount: 560,
        otherAmount: 77,

        // multiple amount and rate
        calcForwardingAmount: 0,
        calcFreightAmount: 0,
        calcInsuranceAmount: 0,
        calcPackingAmount: 0,
        calcInteriorAmount: 0,
        calcLandingAmount: 0,
        calcOtherAmount: 0,

        forwardingCurrencyCode: "USD",
        freightCurrencyCode: "AUD",
        insuranceCurrencyCode: "CAD",
        packingCurrencyCode: "CNY",
        interiorCurrencyCode: "JOD",
        landingCurrencyCode: "KWD",
        otherCurrencyCode: "THB",
        interiorRateCurrencyCode: "SEK",

        // other document section
        forwardingAmountOth: "123",
        freightAmountOth: "550",
        insuranceAmountOth: "120",
        packingAmountOth: "1250",
        interiorAmountOth: "67",
        landingAmountOth: "900",
        otherAmountOth: "3000",

        forwardingRateOth: null,
        freightRateOth: null,
        insuranceRateOth: null,
        packingRateOth: null,
        interiorRateOth: null,
        landingRateOth: null,
        otherRateOth: null,

        calcForwardingAmountOth: 0,
        calcFreightAmountOth: 0,
        calcInsuranceAmountOth: 0,
        calcPackingAmountOth: 0,
        calcInteriorAmountOth: 0,
        calcLandingAmountOth: 0,
        calcOtherAmountOth: 0,

        forwardingCurrencyCodeOth: "USD",
        freightCurrencyCodeOth: "AUD",
        insuranceCurrencyCodeOth: "CAD",
        packingCurrencyCodeOth: "CNY",
        interiorCurrencyCodeOth: "JOD",
        landingCurrencyCodeOth: "KWD",
        otherCurrencyCodeOth: "THB",
        interiorRateCurrencyCodeOth: "SEK",
      },
    };
  },
  mounted() {
    this.getDefaultData();
    this.calcMultipleAmountAndRate();
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
    changeCurrency(selected, type) {
      switch (type) {
        case "forwardingRate":
          this.form.forwardingRate = this.getCurrencyRate(selected.id);
          // this.form.calcForwardingAmount = calcNum.round(
          //   this.form.forwardingRate * this.form.forwardingAmount
          // );
          break;
        case "freightRate":
          this.form.freightRate = this.getCurrencyRate(selected.id);
          // this.form.calcFreightAmount = calcNum.round(
          //   this.form.freightRate * this.form.freightAmount
          // );
          break;
        case "insuranceRate":
          this.form.insuranceRate = this.getCurrencyRate(selected.id);
          // this.form.calcInsuranceAmount = calcNum.round(
          //   this.form.insuranceRate * this.form.insuranceAmount
          // );
          break;
        case "packingRate":
          this.form.packingRate = this.getCurrencyRate(selected.id);
          // this.form.calcPackingAmount = calcNum.round(
          //   this.form.packingRate * this.form.packingAmount
          // );
          break;
        case "interiorRate":
          this.form.interiorRate = this.getCurrencyRate(selected.id);
          // this.form.calcInteriorAmount = calcNum.round(
          //   this.form.interiorRate * this.form.interiorAmount
          // );
          break;
        case "landingRate":
          this.form.landingRate = this.getCurrencyRate(selected.id);
          // this.form.calcLandingAmount = calcNum.round(
          //   this.form.landingRate * this.form.landingAmount
          // );
          break;
        case "otherRate":
          this.form.otherRate = this.getCurrencyRate(selected.id);
          // this.form.calcOtherAmount = calcNum.round(
          //   this.form.otherRate * this.form.otherAmount
          // );
          break;
        case "forwardingRateOth":
          this.form.forwardingRateOth = this.getCurrencyRate(selected.id);
          // this.form.calcForwardingAmountOth = calcNum.round(
          //   this.form.forwardingRateOth * this.form.forwardingAmountOth
          // );
          break;
        case "freightRateOth":
          this.form.freightRateOth = this.getCurrencyRate(selected.id);
          // this.form.calcFreightAmountOth = calcNum.round(
          //   this.form.freightRateOth * this.form.freightAmountOth
          // );
          break;
        case "insuranceRateOth":
          this.form.insuranceRateOth = this.getCurrencyRate(selected.id);
          // this.form.calcInsuranceAmountOth = calcNum.round(
          //   this.form.insuranceRateOth * this.form.insuranceAmountOth
          // );
          break;
        case "packingRateOth":
          this.form.packingRateOth = this.getCurrencyRate(selected.id);
          // this.form.calcPackingAmountOth = calcNum.round(
          //   this.form.packingRateOth * this.form.packingAmountOth
          // );
          break;
        case "interiorRateOth":
          this.form.interiorRateOth = this.getCurrencyRate(selected.id);
          // this.form.calcInteriorAmountOth = calcNum.round(
          //   this.form.interiorAmountOth * this.form.interiorRateOth
          // );
          break;
        case "landingRateOth":
          this.form.landingRateOth = this.getCurrencyRate(selected.id);
          // this.form.calcLandingAmountOth = calcNum.round(
          //   this.form.landingAmountOth * this.form.landingRateOth
          // );
          break;
        case "otherRateOth":
          this.form.otherRateOth = this.getCurrencyRate(selected.id);
          // this.form.calcOtherAmountOth = calcNum.round(
          //   this.form.otherRateOth * this.form.otherAmountOth
          // );
          break;
      }

      //this.calcMultipleAmountAndRate();
    },
    getCurrencyRate(currencyCode) {
      return this.items.find((x) => x.name === currencyCode).rate;
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

      // other
      this.form.forwardingRateOth = this.getCurrencyRate(
        this.form.forwardingCurrencyCodeOth
      );
      this.form.freightRateOth = this.getCurrencyRate(
        this.form.freightCurrencyCodeOth
      );
      this.form.insuranceRateOth = this.getCurrencyRate(
        this.form.insuranceCurrencyCodeOth
      );
      this.form.packingRateOth = this.getCurrencyRate(
        this.form.packingCurrencyCodeOth
      );
      this.form.interiorRateOth = this.getCurrencyRate(
        this.form.insuranceCurrencyCodeOth
      );
      this.form.landingRateOth = this.getCurrencyRate(
        this.form.landingCurrencyCodeOth
      );
      this.form.otherRateOth = this.getCurrencyRate(
        this.form.otherCurrencyCodeOth
      );
    },

    calcMultipleAmountAndRate() {
      // this.form.calcForwardingAmount = calcNum.round(
      //   this.form.forwardingRate * this.form.forwardingAmount
      // );
      // this.form.calcFreightAmount = calcNum.round(
      //   this.form.freightRate * this.form.freightAmount
      // );
      // this.form.calcInsuranceAmount = calcNum.round(
      //   this.form.insuranceRate * this.form.insuranceAmount
      // );
      // this.form.calcPackingAmount = calcNum.round(
      //   this.form.packingRate * this.form.packingAmount
      // );
      // this.form.calcInteriorAmount = calcNum.round(
      //   this.form.interiorRate * this.form.interiorAmount
      // );
      // this.form.calcLandingAmount = calcNum.round(
      //   this.form.landingRate * this.form.landingAmount
      // );
      // this.form.calcOtherAmount = calcNum.round(
      //   this.form.otherRate * this.form.otherAmount
      // );

      // // other document section
      // this.form.calcForwardingAmountOth = calcNum.round(
      //   this.form.forwardingRateOth * this.form.forwardingAmountOth
      // );
      // this.form.calcFreightAmountOth = calcNum.round(
      //   this.form.freightRateOth * this.form.freightAmountOth
      // );
      // this.form.calcInsuranceAmountOth = calcNum.round(
      //   this.form.insuranceRateOth * this.form.insuranceAmountOth
      // );
      // this.form.calcPackingAmountOth = calcNum.round(
      //   this.form.packingRateOth * this.form.packingAmountOth
      // );
      // this.form.calcInteriorAmountOth = calcNum.round(
      //   this.form.interiorRateOth * this.form.interiorAmountOth
      // );
      // this.form.calcLandingAmountOth = calcNum.round(
      //   this.form.landingRateOth * this.form.landingAmountOth
      // );
      // this.form.calcOtherAmountOth = calcNum.round(
      //   this.form.otherRateOth * this.form.otherAmountOth
      // );

      this.convertNumFormat();
    },

    convertNumFormat() {
      this.form.forwardingAmount = numFormat.getNumberFormat(
        this.form.forwardingAmount
      );
      this.form.calcForwardingAmount = numFormat.getNumberFormat(
        this.form.calcForwardingAmount
      );

      this.form.calcFreightAmount = numFormat.getNumberFormat(
        this.form.calcFreightAmount
      );
      this.form.freightAmount = numFormat.getNumberFormat(
        this.form.freightAmount
      );

      this.form.calcInsuranceAmount = numFormat.getNumberFormat(
        this.form.calcInsuranceAmount
      );
      this.form.insuranceAmount = numFormat.getNumberFormat(
        this.form.insuranceAmount
      );

      this.form.calcPackingAmount = numFormat.getNumberFormat(
        this.form.calcPackingAmount
      );
      this.form.packingAmount = numFormat.getNumberFormat(
        this.form.packingAmount
      );

      this.form.calcInteriorAmount = numFormat.getNumberFormat(
        this.form.calcInteriorAmount
      );
      this.form.interiorAmount = numFormat.getNumberFormat(
        this.form.interiorAmount
      );

      this.form.calcLandingAmount = numFormat.getNumberFormat(
        this.form.calcLandingAmount
      );
      this.form.landingAmount = numFormat.getNumberFormat(
        this.form.landingAmount
      );

      this.form.calcOtherAmount = numFormat.getNumberFormat(
        this.form.calcOtherAmount
      );
      this.form.otherAmount = numFormat.getNumberFormat(this.form.otherAmount);

      this.form.calcFreightAmountOth = numFormat.getNumberFormat(
        this.form.calcFreightAmountOth
      );
      this.form.freightAmountOth = numFormat.getNumberFormat(
        this.form.freightAmountOth
      );

      this.form.calcInsuranceAmountOth = numFormat.getNumberFormat(
        this.form.calcInsuranceAmountOth
      );
      this.form.insuranceAmountOth = numFormat.getNumberFormat(
        this.form.insuranceAmountOth
      );

      this.form.calcPackingAmountOth = numFormat.getNumberFormat(
        this.form.calcPackingAmountOth
      );
      this.form.packingAmountOth = numFormat.getNumberFormat(
        this.form.packingAmountOth
      );

      this.form.calcInteriorAmountOth = numFormat.getNumberFormat(
        this.form.calcInteriorAmountOth
      );
      this.form.interiorAmountOth = numFormat.getNumberFormat(
        this.form.interiorAmountOth
      );

      this.form.calcLandingAmountOth = numFormat.getNumberFormat(
        this.form.calcLandingAmountOth
      );
      this.form.landingAmountOth = numFormat.getNumberFormat(
        this.form.landingAmountOth
      );

      this.form.calcOtherAmountOth = numFormat.getNumberFormat(
        this.form.calcOtherAmountOth
      );
      this.form.otherAmountOth = numFormat.getNumberFormat(
        this.form.otherAmountOth
      );

      this.form.calcForwardingAmountOth = numFormat.getNumberFormat(
        this.form.calcForwardingAmountOth
      );
    },
  },
};
</script>

<style>
</style>
