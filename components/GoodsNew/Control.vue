<template>
  <div>
    <v-form ref="form">
      <div class="flex flex-col md:flex-row md:space-x-20 pt-2">
        <div class="w-full md:w-3/5">
          <label class="font-13-400">ผู้รับผิดชอบการบรรจุ</label>
          <div class="flex flex-col md:flex-row">
            <v-combobox
              
              @keydown.enter="getIndexListDropDown"
              class="font-14-300"
              :items="items"
              solo
              flat
              dense
              label="กรุณาเลือก"
              color="base_goods2"
              outlined
              v-model="form.responsiblePerson"
            ></v-combobox>
            <v-btn
              @click="sleepRefs2()"
              class="ml-3 rounded-lg font-14-5002"
              depressed
              :color="!hidden2 ? 'gray1' : 'base_goods2'"
              dark
            >
              <span v-if="!hidden2">ซ่อน</span>
              <span v-else>แสดง</span>
            </v-btn>
            <v-btn
              class="ml-3 rounded-lg"
              style="min-width: 0"
              depressed
              color="#DB89D7"
              dark
            >
              ...</v-btn
            >
          </div>
          <div v-if="!hidden2" class="animate__animated animate__fadeIn">
            <div class="w-full">
              <label class="font-13-400">Thai Name</label>
              <v-text-field
                @keydown.enter="focusNext"
                class="font-14-300"
                :rules="[false]"
                required
                dense
                label="ระบุข้อมูล"
                color="base_goods2"
                outlined
                solo
                maxLength="120"
                v-model="form.thaiName"
              ></v-text-field>
            </div>
            <div class="flex flex-col md:flex-row">
              <div class="w-full md:w-1/2 mr-1">
                <label class="font-13-400">Company Tax</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  :rules="[(v) => !!v && '']"
                  required
                  dense
                  solo
                  label="ระบุข้อมูล"
                  color="base_goods2"
                  outlined
                  maxLength="17"
                  v-model="form.companyTax"
                ></v-text-field>
              </div>
              <div class="w-full md:w-1/2 ml-1">
                <label class="font-13-400">Branch</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  :rules="[false]"
                  required
                  class="font-14-300"
                  dense
                  label="ระบุข้อมูล"
                  color="base_goods2"
                  outlined
                  solo
                  maxLength="6"
                  v-model="form.branch"
                ></v-text-field>
              </div>
            </div>

            <label class="font-13-400">Address</label>
            <v-text-field
              @keydown.enter="focusNext"
              :rules="[false]"
              required
              class="font-14-300"
              dense
              label="ระบุข้อมูล"
              color="base_goods2"
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
                  :rules="[false]"
                  required
                  class="font-14-300"
                  dense
                  label="ระบุข้อมูล"
                  color="base_goods2"
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
                  label="ระบุข้อมูล"
                  color="base_goods2"
                  outlined
                  solo
                  maxLength="60"
                  v-model="form.subProvince"
                ></v-text-field>
              </div>
            </div>

            <div class="flex flex-col md:flex-row md:space-x-4">
              <div class="w-full md:w-1/2">
                <label class="font-13-400">Province</label>
                <v-combobox
                  
                  @keydown.enter="getIndexListDropDown"
                  :items="provinceList2"
                  :item-text="(item) => item.name"
                  class="font-14-300"
                  dense
                  label="กรุณาเลือก"
                  color="base_goods2"
                  outlined
                  solo
                  maxLength="60"
                  v-model="form.province"
                ></v-combobox>
              </div>
              <div class="w-full md:w-1/2">
                <label class="font-13-400">Post Code</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  dense
                  :rules="[false]"
                  label="10240"
                  color="base_goods2"
                  outlined
                  solo
                  maxLength="9"
                  v-model="form.postCode"
                ></v-text-field>
              </div>
            </div>

            <div class="flex flex-col md:flex-row md:space-x-4">
              <div class="w-full">
                <label class="font-13-400">Authorized Name</label>
                <v-combobox
                  
                  @keydown.enter="getIndexListDropDown"
                  :items="items"
                  class="font-14-300"
                  solo
                  dense
                  label="กรุณาเลือก"
                  color="base_goods2"
                  outlined
                  maxLegth="60"
                ></v-combobox>
              </div>
            </div>
          </div>

          <v-checkbox
            dense
            class="font-13-400"
            hide-details
            label="บรรจุคอนเทนเนอร์"
            v-model="checkbox"
          ></v-checkbox>

          <div class="flex flex-col">
            <!-- 1 -->
            <div class="flex flex-row">
              <!-- 1.1 -->
              <div class="w-1/2">
                <label class="font-13-400">Container No.</label>
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  dense
                  label="ระบุข้อมูล"
                  color="base_goods2"
                  outlined
                  solo
                  maxLength="17"
                  v-model="form.containerNo"
                ></v-text-field>
              </div>
              <!-- 1.2 -->
              <div class="flex flex-row ml-3 w-1/2">
                <div>
                  <label class="font-13-400">Container Size / Type</label>
                  <v-combobox
                    
                    @keydown.enter="getIndexListDropDown"
                    :items="data.containerSize"
                    item-text="id"
                    item-id="id"
                    class="font-14-300"
                    solo
                    dense
                    label="กรุณาเลือก"
                    color="base_goods2"
                    outlined
                    maxLength="4"
                    v-model="form.containerSize"
                  ></v-combobox>
                </div>
                <div class="ml-3">
                  <label class="font-13-400">Container Status</label>
                  <v-combobox
                    
                    @keydown.enter="getIndexListDropDown"
                    :items="data.containerStatus"
                    class="font-14-300"
                    solo
                    dense
                    label="กรุณาเลือก"
                    color="base_goods2"
                    outlined
                    v-model="form.containerStatus"
                  ></v-combobox>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col">
            <!-- 2 -->
            <div class="flex flex-row">
              <!-- 2.1 -->
              <div class="w-1/2">
                <label class="font-13-400">ประเภทรถ</label>
                <div class="flex flex-row">
                  <v-combobox
                    
                    @keydown.enter="getIndexListDropDown"
                    :items="data.carType"
                    :value="data.carType[0]"
                    class="font-14-300"
                    solo
                    dense
                    label="กรุณาเลือก"
                    color="base_goods2"
                    outlined
                    v-model="form.vehicleType"
                  ></v-combobox>
                  <v-btn
                    class="ml-4 rounded-lg"
                    depressed
                    color="base_goods2"
                    style="min-width: 0"
                    dark
                  >
                    S</v-btn
                  >
                </div>
              </div>
              <!-- 2.2 -->
              <div class="w-1/2 flex flex-row ml-3"></div>
            </div>
          </div>

          <div class="flex flex-col">
            <!-- 3 -->
            <div class="flex flex-row">
              <!-- 3.1 -->
              <div class="w-1/2">
                <label class="font-13-400">ทะเบียนรถยนต์</label>
                <div class="flex flex-row">
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="font-14-300"
                    solo
                    dense
                    label="ระบุข้อมูล"
                    color="base_goods2"
                    outlined
                    maxLength="10"
                    v-model="form.licenseVehicle"
                  ></v-text-field>
                  <v-btn
                    class="ml-3 rounded-lg"
                    depressed
                    color="base_goods2"
                    style="min-width: 0"
                    dark
                  >
                    S</v-btn
                  >
                </div>
              </div>
              <!-- 3.2 -->
              <div class="w-1/2 flex flex-row ml-3">
                <div class="w-full">
                  <label class="font-13-400">ทะเบียนจังหวัด</label>
                  <v-combobox
                    
                    @keydown.enter="getIndexListDropDown"
                    :items="provinceList2"
                    :item-text="(item) => item.name"
                    class="font-14-300"
                    solo
                    dense
                    label="กรุณาเลือก"
                    color="base_goods2"
                    outlined
                    maxLength="2"
                    v-model="form.licenseProvince"
                  ></v-combobox>
                </div>
                <div class="ml-3 w-1/3">
                  <label class="font-13-400">รหัสประเทศ</label>
                  <v-combobox
                    style="width: 100px !important"
                    
                    @keydown.enter="getIndexListDropDown"
                    value="TH"
                    :items="data.countryCode"
                    item-text="id"
                    item-id="id"
                    class="font-14-300"
                    solo
                    dense
                    label="กรุณาเลือก"
                    color="base_goods2"
                    outlined
                    maxLength="2"
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
              </div>
            </div>
          </div>

          <div class="flex flex-col">
            <!-- 4 -->
            <div class="flex flex-row">
              <!-- 4.1 -->
              <div class="w-1/2">
                <label class="font-13-400">ทะเบียนรถพ่วง / กึ่งพ่วง</label>
                <div class="flex flex-row">
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="font-14-300"
                    solo
                    dense
                    label="ระบุข้อมูล"
                    color="base_goods2"
                    outlined
                    maxLength="10"
                  ></v-text-field>
                </div>
              </div>
              <!-- 4.2 -->
              <div class="w-1/2 flex flex-row ml-3">
                <div class="w-full">
                  <label class="font-13-400">ทะเบียนจังหวัด</label>
                  <v-combobox
                    
                    @keydown.enter="getIndexListDropDown"
                    :items="items"
                    class="font-14-300"
                    solo
                    dense
                    label="กรุณาเลือก"
                    color="base_goods2"
                    outlined
                    maxLength="2"
                  ></v-combobox>
                </div>
                <div class="ml-3 w-1/3">
                  <label class="font-13-400">รหัสประเทศ</label>
                  <v-combobox
                    style="width: 100px !important"
                    
                    @keydown.enter="getIndexListDropDown"
                    value="TH"
                    :items="data.countryCode"
                    item-text="id"
                    item-id="id"
                    class="font-14-300"
                    solo
                    dense
                    label="กรุณาเลือก"
                    color="base_goods2"
                    outlined
                    maxLength="2"
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
              </div>
            </div>
          </div>

          <div class="flex flex-col">
            <!-- 5 -->
            <div class="flex flex-row">
              <!-- 5.1 -->
              <div class="w-1/2">
                <label class="font-13-400">ส่งออกโดยทาง</label>
                <div class="flex flex-row">
                  <v-combobox
                    
                    @keydown.enter="getIndexListDropDown"
                    :rules="[(v) => !!v && '']"
                    required
                    :items="data.modeOfTransport"
                    item-text="name"
                    item-id="id"
                    class="font-14-300"
                    solo
                    dense
                    label="กรุณาเลือก"
                    color="base_goods2"
                    outlined
                    v-model="form.exportVehicle"
                  ></v-combobox>
                </div>
              </div>
              <!-- 5.2 -->
              <div class="w-1/2 flex flex-row ml-3">
                <div class="w-full">
                  <label class="font-13-400">Departure Date</label>
                  <div class="flex flex-row">
                    <v-menu
                      v-model="HeaderMenu2Vue"
                      :close-on-content-click="true"
                      transition="scale-transition"
                      offset-y
                      max-width="290px"
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          @keydown.enter="focusNext"
                          :rules="[(v) => !!v && '']"
                          required
                          hide-details
                          class="dateGoodsR font-14-300"
                          outlined
                          placeholder="ระบุข้อมูล"
                          append-icon="mdi-calendar"
                          solo
                          color="base_goods"
                          v-on="on"
                          @click:append="on.click"
                          :value="getDateFormat(form.departDate)"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="form.departDate"
                        no-title
                      ></v-date-picker>
                    </v-menu>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col">
            <!-- 6 -->
            <div class="flex flex-row">
              <!-- 6.1 -->
              <div class="w-1/2">
                <label class="font-13-400">ชื่อยานพาหนะ</label>
                <div class="flex flex-row">
                  <v-combobox
                    
                    @keydown.enter="getIndexListDropDown"
                    :rules="[(v) => !!v && '']"
                    required
                    :items="data.vehicleName"
                    item-text="id"
                    item-id="id"
                    class="font-14-300"
                    solo
                    dense
                    label="กรุณาเลือก"
                    color="base_goods2"
                    outlined
                    maxLength="35"
                    v-model="form.nameVehicle"
                  ></v-combobox>
                </div>
              </div>
              <!-- 6.2 -->
              <div class="w-1/2 flex flex-row ml-3">
                <div class="w-full">
                  <label class="font-13-400">เที่ยวเรือ / เที่ยวบิน</label>
                  <div class="flex flex-row">
                    <v-text-field
                      @keydown.enter="focusNext"
                      class="font-14-300"
                      solo
                      dense
                      label="ระบุข้อมูล"
                      color="base_goods2"
                      outlined
                      maxLength="17"
                      v-model="form.figtht"
                    ></v-text-field>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col">
            <!-- 7 -->
            <div class="flex flex-row">
              <!-- 7.1 -->
              <div class="w-1/2 flex flex-row">
                <!-- 7.1.1 -->
                <div>
                  <label class="font-13-400">ท่าที่รับรถบรรทุก</label>
                  <div class="flex flex-row">
                    <v-combobox
                      :rules="[(v) => !!v && '']"
                      required
                      :items="data.portLoad"
                      item-text="id"
                      item-id="id"
                      class="font-14-300"
                      solo
                      dense
                      label="กรุณาเลือก"
                      color="base_goods2"
                      outlined
                      maxLength="4"
                      v-model="form.portLoad"
                      @change="
                        
                        portLoadChange($event);
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
                      </template></v-combobox
                    >
                  </div>
                </div>
                <div class="ml-3">
                  <label class="font-13-400">&nbsp;</label>
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="font-14-300"
                    disabled
                    solo
                    dense
                    label="ระบุข้อมูล"
                    color="base_goods2"
                    outlined
                    v-model="form.portLoadName"
                  ></v-text-field>
                </div>
              </div>
              <!-- 7.2 -->
              <div class="w-1/2 flex flex-row ml-3">
                <div class="flex flex-row">
                  <div>
                    <label class="font-13-400">ท่าที่ตรวจปล่อย</label>
                    <div class="flex flex-row">
                      <v-combobox
                        :rules="[(v) => !!v && '']"
                        required
                        :items="data.portLoad"
                        item-text="id"
                        item-id="id"
                        class="font-14-300"
                        solo
                        dense
                        label="กรุณาเลือก"
                        color="base_goods2"
                        outlined
                        maxLength="4"
                        v-model="form.portRelease"
                        @change="
                          
                          changePortRelease($event);
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
                        </template></v-combobox
                      >
                    </div>
                  </div>
                  <div class="ml-3">
                    <label class="font-13-400">&nbsp;</label>
                    <v-text-field
                      @keydown.enter="focusNext"
                      class="font-14-300"
                      disabled
                      solo
                      dense
                      label="ระบุข้อมูล"
                      color="base_goods2"
                      outlined
                      v-model="form.portReleaseName"
                    ></v-text-field>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col">
            <!-- 8 -->
            <div class="flex flex-row">
              <!-- 8.1 -->
              <div class="w-1/2 flex flex-row">
                <!-- 8.1.1 -->
                <div>
                  <label class="font-13-400">ท่าที่ขนถ่ายสินค้า</label>
                  <div class="flex flex-row">
                    <v-combobox
                      :rules="[(v) => !!v && '']"
                      required
                      :items="data.portDischagre"
                      item-text="id"
                      item-id="id"
                      class="font-14-300"
                      solo
                      dense
                      label="กรุณาเลือก"
                      color="base_goods2"
                      outlined
                      maxLength="4"
                      v-model="form.portTransport"
                      @change="
                        
                        chagePortTransport($event);
                      "
                      @keydown.enter="getIndexListDropDown"
                    >
                      <template slot="item" slot-scope="data">
                        <div class="dropdown-line2">
                          <div class="mr-2">
                            {{ data.item.id }}
                          </div>
                          <div></div>
                          <div>{{ data.item.name }}</div>
                        </div>
                      </template></v-combobox
                    >
                  </div>
                </div>
                <div class="ml-3">
                  <label class="font-13-400">&nbsp;</label>
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="font-14-300"
                    disabled
                    solo
                    dense
                    label="ระบุข้อมูล"
                    color="base_goods2"
                    outlined
                    v-model="form.portTransportName"
                  ></v-text-field>
                </div>
                <div class="ml-3">
                  <label class="font-13-400">&nbsp;</label>
                  <v-btn
                    class="rounded-lg"
                    style="min-width: 0"
                    depressed
                    color="#DB89D7"
                    dark
                  >
                    ...</v-btn
                  >
                </div>
              </div>
              <!-- 8.2 -->
              <div class="w-1/2 flex flex-row ml-3">
                <div class="flex flex-row">
                  <div>
                    <label class="font-13-400">รหัสสถานที่บรรจุ</label>
                    <div class="flex flex-row">
                      <v-combobox
                        :items="data.portLoad"
                        item-text="id"
                        item-id="id"
                        class="font-14-300"
                        solo
                        dense
                        label="กรุณาเลือก"
                        color="base_goods2"
                        outlined
                        maxLength="4"
                        v-model="form.packing"
                        @change="
                          
                          changePacking($event);
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
                        </template></v-combobox
                      >
                    </div>
                  </div>
                  <div class="ml-3">
                    <label class="font-13-400">&nbsp;</label>
                    <v-text-field
                      @keydown.enter="focusNext"
                      class="font-14-300"
                      disabled
                      solo
                      dense
                      label="ระบุข้อมูล"
                      color="base_goods2"
                      outlined
                      v-model="form.packingName"
                    ></v-text-field>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col">
            <div class="flex flex-row">
              <div class="w-1/2">
                <label class="font-13-400">Seal</label>
                <div class="flex flex-row">
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="font-14-300"
                    solo
                    dense
                    label="ระบุข้อมูล"
                    color="base_goods2"
                    outlined
                    maxLength="35"
                    v-model="form.seal"
                  ></v-text-field>
                </div>
              </div>
              <div class="w-1/2 flex flex-row ml-3">
                <div class="w-full">
                  <label class="font-13-400">Seal 2</label>
                  <div class="flex flex-row">
                    <v-text-field
                      @keydown.enter="focusNext"
                      class="font-14-300"
                      solo
                      dense
                      label="ระบุข้อมูล"
                      color="base_goods2"
                      outlined
                      maxLength="35"
                    ></v-text-field>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col">
            <div class="flex flex-row">
              <div class="w-1/2">
                <label class="font-13-400">ชนิดของสินค้า</label>
                <div class="flex flex-row">
                  <v-combobox
                    
                    @keydown.enter="getIndexListDropDown"
                    :rules="[(v) => !!v && '']"
                    required
                    :items="data.productType"
                    item-text="name2"
                    item-id="id"
                    class="font-14-300"
                    solo
                    dense
                    label="กรุณาเลือก"
                    color="base_goods2"
                    outlined
                    v-model="form.productType"
                  ></v-combobox>
                </div>
              </div>
              <div class="w-1/2 flex flex-row ml-3">
                <div class="w-full">
                  <label class="font-13-400">Mode of Movement</label>
                  <div class="flex flex-row">
                    <v-combobox
                      
                      @keydown.enter="getIndexListDropDown"
                      :items="data.modeofMovement"
                      item-text="name"
                      item-id="id"
                      class="font-14-300"
                      solo
                      dense
                      label="กรุณาเลือก"
                      color="base_goods2"
                      outlined
                      v-model="form.modeOfMovement"
                    ></v-combobox>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col">
            <div class="flex flex-row">
              <div class="w-1/2">
                <label class="font-13-400">UNDG No</label>
                <div class="flex flex-row">
                  <v-text-field
                    maxLength="4"
                    @keydown.enter="focusNext"
                    class="font-14-300"
                    solo
                    dense
                    label="ระบุข้อมูล"
                    color="base_goods2"
                    outlined
                  ></v-text-field>
                </div>
              </div>
              <div class="w-1/2 flex flex-row ml-3">
                <div class="w-full">
                  <label class="font-13-400">IMO Class</label>
                  <div class="flex flex-row">
                    <v-text-field
                      @keydown.enter="focusNext"
                      class="font-14-300"
                      solo
                      dense
                      label="ระบุข้อมูล"
                      color="base_goods2"
                      outlined
                      maxLength="4"
                    ></v-text-field>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col">
            <div class="flex flex-row">
              <div class="w-1/2">
                <label class="font-13-400">GPS ID</label>
                <div class="flex flex-row">
                  <v-text-field
                    @keydown.enter="focusNext"
                    class="font-14-300"
                    solo
                    dense
                    label="ระบุข้อมูล"
                    color="base_goods2"
                    outlined
                    maxLength="35"
                  ></v-text-field>
                </div>
              </div>
              <div class="w-1/2 flex flex-row ml-3">
                <div class="w-full">
                  <label class="font-13-400">Remark</label>
                  <div
                    class="flex flex-row"
                    style="margin-top: -1px !important"
                  >
                    <v-textarea
                      class="font-14-300"
                      dense
                      rows="1"
                      solo
                      label="ระบุข้อมูล"
                      color="base_goods2"
                      outlined
                      maxLength="512"
                    ></v-textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10">
        <label class="font-18-600 pt-2">Detail</label>
      </div>
      <div
        class="mt-10"
        style="
          height: 200px;
          overflow: scroll;
          overflow-x: hidden;
          overflow-y: visible;
          position: relative;
        "
      >
        <GoodsNew-ControlDetail></GoodsNew-ControlDetail>
      </div>

      <label class="mt-10 font-13-400">Inv. No. (ไม่ส่งกรมศุลฯ)</label>
      <v-textarea
        class="font-14-300 w-3/4"
        style="top: 5px !important"
        dense
        rows="3"
        solo
        :rules="[(v) => !!v || '']"
        required
        v-model="form.invNo"
        color="base_goods2"
        outlined
        maxLenngth="512"
      ></v-textarea>

      <div class="flex flex-row w-full justify-start mt-5">
        <div class="">
          <v-checkbox
            dense
            :value="true"
            class="font-13-400"
            hide-details
            label="พิมพ์ Inv. No. เต็มหน้าถัดจากรายการสุดท้าย"
            v-model="checkbox_co1"
          ></v-checkbox>
        </div>

        <div class="ml-5">
          <v-checkbox
            dense
            class="ml-5 font-13-400"
            hide-details
            label="พิมพ์ Status"
            v-model="checkbox_print"
          ></v-checkbox>
        </div>

        <p style="width: 60px !important" class="ml-5 mt-2.5 font-13-400">
          Font Size
        </p>
        <div style="width: 100px !important">
          <div class="flex justify-center align-center">
            <v-combobox
              
              @keydown.enter="getIndexListDropDown"
              v-model="select7"
              :rules="[(v) => !!v && '']"
              required
              :items="[9, 10]"
              class="-ml-10 font-14-300"
              solo
              dense
              :value="[0]"
              label="กรุณาเลือก"
              color="base_goods2"
              outlined
            ></v-combobox>
          </div>
        </div>
      </div>
    </v-form>
    <p id="btnFocusOut"></p>
  </div>
</template>
  
  <script>
import provinceList from "@/data/province-list.json";
import modeOfTransport from "@/data/mode-of-transport.json";
import productType from "@/data/product-type.json";
import modeofMovement from "@/data/mode-of-movement.json";
import containerSize from "@/data/container-size.json";
import vehicleName from "@/data/vehicle-name.json";
import portLoad from "@/data/port-export.json";
import portDischagre from "@/data/dischagre-port.json";
import countryCode from "@/data/country-list.json";

import dateFormat from "@/services/dateFormat.js";
import nextFocus from "@/services/nextFocus.js";

export default {
  name: "Declaration",
  async mounted() {
    await this.validate();
    this.getProvinceList();
    this.getdefaultPort();
  },
  data: () => {
    return {
      countState: 1,
      form: {},
      checkbox: true,
      checkbox1: true,
      valid: true,
      hidden: true,
      hidden2: true,
      errorMessages: "",
      select1: null,
      select2: null,
      select3: null,
      select5: null,
      select6: null,
      select7: null,
      select8: null,
      select: "",
      model1: null,
      provinceList2: [],
      items: [
        "ตัวอย่าง dropdown 01",
        "ตัวอย่าง dropdown 02",
        "ตัวอย่าง dropdown 03",
        "ตัวอย่าง dropdown 04",
      ],
      items2: ["TH", "TH2", "TH3", "TH4"],
      items4: ["TH", "TH2", "TH3", "TH4"],
      test: "",
      checkbox_print: null,
      data: {
        vehicleName: vehicleName,
        containerSize: containerSize,
        provinceList: provinceList,
        productType: productType,
        portLoad: portLoad,
        portDischagre: portDischagre,
        countryCode: countryCode,
        carType: [
          "รถยนต์บรรทุก",
          "รถยนต์บรรทุก 10 ล้อ",
          "รถยนต์บรรทุก 6 ล้อ",
          "รถยนต์บรรทุก 8 ล้อ",
        ],
        modeOfTransport: modeOfTransport,
        modeofMovement: modeofMovement,
        containerStatus: [
          "1/4",
          "1/2",
          "3/4",
          "MTY",
          "Full",
          "N/A",
          "LCL",
          "FCL",
          "LCL/ CFS",
        ],
      },
      form: {
        responsiblePerson: "E.D.I. SERVICE APPLICATION PROVIDER CO.,LTD.",
        thaiName: "บริษัท อีดีไอ เซอร์วิส แอพพลิเคชั่น โพรไวเดอร์ จำกัด",
        companyTax: "105543025971",
        branch: "000000",
        address: "520 ถนนรามคำแหง",
        district: "แขวงหัวหมาก",
        subProvince: "เขตบางกะปิ",
        province: "กรุงเทพมหานคร",
        postCode: "10240",
        containerNo: "TRHU4943737",
        containerSize: "45G1",
        containerStatus: "FCL",
        vehicleType: "รถยนต์บรรทุก 10 ล้อ",
        licenseVehicle: "31-9711",
        licenseProvince: "กรุงเทพมหานคร",
        provinceCode: "TH",
        exportVehicle: "1 - ทางเรือ",
        departDate: "2022-12-06",
        nameVehicle: "WAN HAI",
        figtht: "213S",
        portLoad: "2801",
        portLoadName: null,
        portRelease: "2836",
        portReleaseName: null,
        portTransport: "USUAG",
        portTransportName: null,
        packing: "2801",
        packingName: null,
        seal: "EMCLRR5102",
        productType: "1 - General",
        modeOfMovement: "3 - ทางรถยนต์",
        invNo: "Invoice No. SI2/4514655",
      },
    };
  },
  methods: {
    getDateFormat(date) {
      return dateFormat.convertDateFormat(date);
    },
    getProvinceList() {
      this.data.provinceList.forEach((x) => {
        this.provinceList2.push({ name: x.name_th });
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
        await this.sleep(1000);
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
    getdefaultPort() {
      this.form.portLoadName = this.data.portLoad.find(
        (x) => x.id === this.form.portLoad
      ).name;
      this.form.portReleaseName = this.data.portLoad.find(
        (x) => x.id === this.form.portRelease
      ).name;
      this.form.portTransportName = this.data.portDischagre.find(
        (x) => x.id === this.form.portTransport
      ).name;
      this.form.packingName = this.data.portLoad.find(
        (x) => x.id === this.form.packing
      ).name;
    },
    portLoadChange(selected) {
      if (selected) {
        this.form.portLoadName = selected.name;
      } else {
        this.form.portLoadName = "-";
      }
    },
    changePortRelease(selected) {
      if (selected) {
        this.form.portReleaseName = selected.name;
      } else {
        this.form.portReleaseName = "-";
      }
    },
    chagePortTransport(selected) {
      if (selected) {
        this.form.portTransportName = selected.name;
      } else {
        this.form.portTransportName = "-";
      }
    },
    changePacking(selected) {
      if (selected) {
        this.form.packingName = selected.name;
      } else {
        this.form.packingName = "-";
      }
    },
  },
};
</script>
  
  <style scoped>
.tt {
  width: 232px !important;
}
.input-exp::v-deep(.v-text-field__slot input) {
  caret-color: #db89d7 !important;
}
.v-application .error--text,
::v-deep(i.v-icon.notranslate.mdi.mdi-menu-down.theme--light.error--text),
::v-deep(.v-input--selection-controls__input > .mdi-checkbox-marked) {
  color: #db89d7 !important;
}

::v-deep(.v-icon.notranslate.v-icon--link.mdi.mdi-calendar.theme--light.error--text) {
  color: #db89d7 !important;
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
  background: #db89d7;
  border-radius: 2px;
}
</style>