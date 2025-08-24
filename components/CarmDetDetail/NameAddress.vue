<template>
  <div>   
    <v-form ref="form">      
          <div class="flex flex-col md:flex-row pt-6 md:space-x-20">
            <div class="w-full md:w-3/5">
              <div class="flex flex-col md:flex-row md:space-x-4">
                <div class="w-full md:w-2/5">
                  <label class="font-13-400">Item No.</label>
                  <v-text-field
                    @keydown.enter="focusNext"
                    :rules="[false]"
                    required
                    class="font-14-300"
                    solo
                    dense
                    label="ระบุข้อมูลอัตโนมัติ"
                    color="base_carm"
                    outlined
                    v-model="form.itemNo"
                  ></v-text-field>
                </div>          
               </div>
                <P>ข้อมูลผู้รับ/ผู้ส่ง</P>

               <label class="font-13-400">Consingnee / ผู้รับสินค้า</label>
               <div class="flex flex-col md:flex-row">
                <v-combobox
                
               @keydown.enter="getIndexListDropDown"
                  :items="data.consingnee"
                  v-model="form.consingnee"
                  item-text="companyenglish"
                  item-id="companycode"
                  required
                  class="font-14-300"
                  solo
                  dense
                  label="กรุณาเลือก"
                  color="base_carm"
                  outlined
                  maxLength="50"
                  :rules="[false]"
                ></v-combobox>

                <v-btn
                  @click="sleepRefs()"
                  class="ml-3 rounded-lg"
                  depressed
                  :color="!hidden ? '#495057' : 'base_carm'"
                  dark
                >
                  <span v-if="!hidden">ซ่อน</span>
                  <span v-else>แสดง</span>
                </v-btn>
                <v-btn class="ml-3 rounded-lg" depressed color="base_carm" dark>
                  Save</v-btn
                >
               </div>
              
               <div class="flex flex-col md:flex-row md:space-x-4">
                  <div class="w-full md:w-3/4">
                    <label class="font-13-400">TAX ID.</label>
                    <v-text-field
                      @keydown.enter="focusNext"
                      :items="data.consingnee"
                      v-model="form.consingnee"
                      item-text="taxcode"
                      class="font-14-300"
                      solo
                      dense
                      label="ระบุข้อมูล"
                      color="base_carm"
                      outlined
                      maxLength="50"
                    ></v-text-field>
                  </div>
                  <div class="w-full md:w-1/4">
                    <label class="font-13-400">Branch</label>
                    <v-text-field
                      @keydown.enter="focusNext"
                      class="font-14-300"
                      solo
                      dense
                      label="ระบุข้อมูล"
                      color="base_carm"
                      outlined
                      maxLength="50"
                    >
                    </v-text-field>
                  </div>
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
                    color="base_carm"
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
                  dense
                  label="ระบุข้อมูล..."
                  color="base_carm"
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
                      color="base_carm"
                      outlined
                      maxLength="50"
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
                      color="base_carm"
                      outlined
                      maxLength="50"
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
                      color="base_carm"
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
                      color="base_carm"
                      outlined
                      maxLength="9"
                    >
                    </v-text-field>
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
                        color="base_carm"
                        outlined>
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

                <label class="font-13-400">Email</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  solo
                  dense
                  label="ระบุข้อมูล..."
                  color="base_carm"
                  outlined
                  maxLength="50"
                  value=""
                ></v-text-field>
               </div>

                <label class="font-13-400">Shipper / ผู้ส่งสินค้า</label>
                  <div class="flex flex-col md:flex-row">
                <v-combobox
                
               @keydown.enter="getIndexListDropDown"
                  :items="data.consingnee"
                  v-model="form.consingnee"
                  item-text="companyenglish"
                  item-id="companycode"
                  required
                  class="font-14-300"
                  solo
                  dense
                  label="กรุณาเลือก"
                  color="base_carm"
                  outlined
                  maxLength="50"
                  :rules="[false]"
                ></v-combobox>

                <v-btn
                  @click="sleepRefs()"
                  class="ml-3 rounded-lg"
                  depressed
                  :color="!hidden1 ? '#495057' : 'base_carm'"
                  dark
                >
                  <span v-if="!hidden1">ซ่อน</span>
                  <span v-else>แสดง</span>
                </v-btn>
                <v-btn class="ml-3 rounded-lg" depressed color="base_carm" dark>
                  Save</v-btn
                >
               </div>
              
               <div class="flex flex-col md:flex-row md:space-x-4">
                  <div class="w-full md:w-3/4">
                    <label class="font-13-400">TAX ID.</label>
                    <v-text-field
                      @keydown.enter="focusNext"
                      class="font-14-300"
                      solo
                      dense
                      label="ระบุข้อมูล"
                      color="base_carm"
                      outlined
                      maxLength="50"
                    ></v-text-field>
                  </div>
                  <div class="w-full md:w-1/4">
                    <label class="font-13-400">Branch</label>
                    <v-text-field
                      @keydown.enter="focusNext"
                      class="font-14-300"
                      solo
                      dense
                      label="ระบุข้อมูล"
                      color="base_carm"
                      outlined
                      maxLength="50"
                    >
                    </v-text-field>
                  </div>
                </div>

               <div v-if="!hidden1" class="animate__animated animate__fadeIn">
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
                    color="base_carm"
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
                  dense
                  label="ระบุข้อมูล..."
                  color="base_carm"
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
                      color="base_carm"
                      outlined
                      maxLength="50"
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
                      color="base_carm"
                      outlined
                      maxLength="50"
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
                      color="base_carm"
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
                      color="base_carm"
                      outlined
                      maxLength="9"
                    >
                    </v-text-field>
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
                        color="base_carm"
                        outlined>
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

                <label class="font-13-400">Email</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  solo
                  dense
                  label="ระบุข้อมูล..."
                  color="base_carm"
                  outlined
                  maxLength="50"
                  value=""
                ></v-text-field>
               </div>
                
                  <P>ข้อมูลผู้เกี่ยวข้องอื่นๆ(ถ้ามี)</P>

                  <label class="font-13-400">Notify Party / ผู้ที่ต้องแจ้ง</label>
              <div class="flex flex-col md:flex-row">
                <v-combobox
                
              @keydown.enter="getIndexListDropDown"
                  :items="data.shipTo"
                  v-model="form.billingTo"
                  item-text="name"
                  item-id="id"
                  required
                  class="font-14-300"
                  solo
                  dense
                  label="กรุณาเลือก"
                  color="base_carm"
                  outlined
                  maxLength="35"
                ></v-combobox>

                <v-btn
                  @click="sleepRefs2()"
                  class="ml-3 rounded-lg"
                  depressed
                  :color="!hidden2 ? '#495057' : 'base_carm'"
                  dark
                >
                  <span v-if="!hidden2">ซ่อน</span>
                  <span v-else>แสดง</span>
                </v-btn>
                <v-btn class="ml-3 rounded-lg" depressed color="base_carm" dark>
                  L</v-btn
                >
              </div>

              <div class="flex flex-col md:flex-row md:space-x-4">
                  <div class="w-full md:w-3/4">
                    <label class="font-13-400">TAX ID.</label>
                    <v-text-field
                      @keydown.enter="focusNext"
                      class="font-14-300"
                      solo
                      dense
                      label="ระบุข้อมูล"
                      color="base_carm"
                      outlined
                      maxLength="50"
                      v-model="form.district"
                    ></v-text-field>
                  </div>
                  <div class="w-full md:w-1/4">
                    <label class="font-13-400">Branch</label>
                    <v-text-field
                      @keydown.enter="focusNext"
                      class="font-14-300"
                      solo
                      dense
                      label="ระบุข้อมูล"
                      color="base_carm"
                      outlined
                      maxLength="50"
                      v-model="form.subProvince"
                    >
                    </v-text-field>
                  </div>
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
                    color="base_carm"
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
                  color="base_carm"
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
                      color="base_carm"
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
                      color="base_carm"
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
                      color="base_carm"
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
                      color="base_carm"
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
                        v-model="form.countryCode"
                        :items="data.countryList"
                        item-text="name"
                        item-id="id"
                        class="font-14-300"
                        dense
                        solo
                        label="กรุณาเลือก"
                        color="base_carm"
                        outlined>
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

              <label class="font-13-400">Email</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  solo
                  dense
                  label="ระบุข้อมูล..."
                  color="base_carm"
                  outlined
                  maxLength="50"
                  value="ESAP CO., LTD."
                ></v-text-field>
                </div>

                <P>Transhipment / ผู้ถ่ายลำ-ผ่านแดน</P>

                  <label class="font-13-400">Transhipment Applicant / ผู้ขนถ่ายสินค้า</label>
              <div class="flex flex-col md:flex-row">
                <v-combobox
                
              @keydown.enter="getIndexListDropDown"
                  :items="data.shipTo"
                  v-model="form.billingTo"
                  item-text="name"
                  item-id="id"
                  required
                  class="font-14-300"
                  solo
                  dense
                  label="กรุณาเลือก"
                  color="base_carm"
                  outlined
                  maxLength="35"
                ></v-combobox>

                <v-btn
                  @click="sleepRefs2()"
                  class="ml-3 rounded-lg"
                  depressed
                  :color="!hidden3 ? '#495057' : 'base_carm'"
                  dark
                >
                  <span v-if="!hidden3">ซ่อน</span>
                  <span v-else>แสดง</span>
                </v-btn>
                <v-btn class="ml-3 rounded-lg" depressed color="base_carm" dark>
                  L</v-btn
                >
              </div>

              <div class="flex flex-col md:flex-row md:space-x-4">
                  <div class="w-full md:w-3/4">
                    <label class="font-13-400">TAX ID.</label>
                    <v-text-field
                      @keydown.enter="focusNext"
                      class="font-14-300"
                      solo
                      dense
                      label="ระบุข้อมูล"
                      color="base_carm"
                      outlined
                      maxLength="50"
                      v-model="form.district"
                    ></v-text-field>
                  </div>
                  <div class="w-full md:w-1/4">
                    <label class="font-13-400">Branch</label>
                    <v-text-field
                      @keydown.enter="focusNext"
                      class="font-14-300"
                      solo
                      dense
                      label="ระบุข้อมูล"
                      color="base_carm"
                      outlined
                      maxLength="50"
                      v-model="form.subProvince"
                    >
                    </v-text-field>
                  </div>
                </div>

              <div v-if="!hidden3" class="animate__animated animate__fadeIn">
                <label class="font-13-400">Englist Name</label>
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
                    color="base_carm"
                    outlined
                    maxLength="150"
                  ></v-text-field>
                </div>

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
                    color="base_carm"
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
                  color="base_carm"
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
                      color="base_carm"
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
                      color="base_carm"
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
                      color="base_carm"
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
                      color="base_carm"
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
                        v-model="form.countryCode"
                        :items="data.countryList"
                        item-text="name"
                        item-id="id"
                        class="font-14-300"
                        dense
                        solo
                        label="กรุณาเลือก"
                        color="base_carm"
                        outlined>
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

              <label class="font-13-400">Email</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  solo
                  dense
                  label="ระบุข้อมูล..."
                  color="base_carm"
                  outlined
                  maxLength="50"
                  value="ESAP CO., LTD."
                ></v-text-field>
                </div>                
            </div>
          </div>                
    </v-form>
    <p id="btnFocusOut"></p>
  </div>
</template>

<script>
import countryList from "@/data/referent/rficc.json";
import consigneeStatus from "@/data/consignee-status-export.json";
import terms from "@/data/trade-term.json";
import currency from "@/data/currency-code.json";
import weightUnit from "@/data/weight-unit.json";
import grossWeightDistribute from "@/data/gross-weight-distribute.json";
import commercialLevel from "@/data/comercial-level.json";
import sellerStatus from "@/data/seller-status";
import dateFormat from "@/services/dateFormat.js";
import shipTo from "@/data/importer.json";
import companycarmanifest from "@/data/companycarmanifest.json";
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
        consingnee: companycarmanifest,
        packageUnit: packageUnit
      },
      form: {
        invoiceNo: null,
        currencyRate: null,
        totalInvoice: null,
        netWeight: null,
        grossWeight: null,
        package: null,
        consingnee: null,
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
  color: #ecb347 !important;
}

/* calendar error clolor */
::v-deep(.v-icon.notranslate.v-icon--link.mdi.mdi-calendar.theme--light.error--text) {
  color: #ecb347 !important;
}
</style>
