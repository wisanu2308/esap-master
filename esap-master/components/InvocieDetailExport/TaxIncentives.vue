<template>
  <div>
    <v-form>
      <div class="flex w-full flex-col md:flex-row">
        <div class="w-full md:w-7/12">
          <v-card class="p-1 mb-6 mt-8" height="176" width="733">
            <div class="p-4 bg-gray-2">
              <label class="font-18-600">สิทธิประโยชน์</label>
              <div class="grid grid-cols-3">
                <div class="flex flex-col md:flex-row mt-1">
                  <v-checkbox
                    dense
                    class="font-13-400"
                    style="width: 120px"
                    hide-details
                    label="ชดเชยอากร"
                    v-model="checkbox"
                    color="base_ex"
                  >
                  </v-checkbox>
                  <v-btn
                    class="rounded-lg mt-1 mr-8"
                    fab
                    x-small
                    height="24"
                    width="24"
                    depressed
                    color="base_ex"
                    dark
                  >
                    _</v-btn
                  >
                </div>
                <div class="flex flex-col md:flex-row mt-1">
                  <v-checkbox
                    dense
                    hide-details
                    class="font-13-400"
                    style="width: 100px"
                    label="มาตรา29"
                    color="base_ex"
                  >
                  </v-checkbox>

                  <v-btn
                    class="rounded-lg mt-1 mr-8"
                    fab
                    x-small
                    height="24"
                    width="24"
                    depressed
                    color="base_ex"
                    dark
                  >
                    _</v-btn
                  >
                </div>
                <div class="flex flex-col md:flex-row mt-1">
                  <v-checkbox
                    dense
                    hide-details
                    class="font-13-400"
                    style="width: 110px"
                    color="base_ex"
                    label="BOI"
                  >
                  </v-checkbox>

                  <v-btn
                    class="rounded-lg mt-1 mr-8"
                    fab
                    x-small
                    depressed
                    height="24"
                    width="24"
                    color="base_ex"
                    dark
                  >
                    _</v-btn
                  >
                </div>
                <div class="flex flex-col md:flex-row mt-1">
                  <v-checkbox
                    dense
                    hide-details
                    class="font-13-400"
                    style="width: 120px"
                    color="base_ex"
                    label="Re-Import"
                  ></v-checkbox>
                  <v-btn
                    class="rounded-lg mt-1 mr-8"
                    fab
                    x-small
                    depressed
                    height="24"
                    width="24"
                    color="base_ex"
                    dark
                  >
                    _</v-btn
                  >
                </div>
                <div class="flex flex-col md:flex-row mt-1">
                  <v-checkbox
                    dense
                    hide-details
                    class="font-13-400"
                    style="width: 100px"
                    label="Bond"
                    color="base_ex"
                  >
                  </v-checkbox>

                  <v-btn
                    class="rounded-lg mt-1 mr-8"
                    fab
                    height="24"
                    width="24"
                    x-small
                    depressed
                    color="base_ex"
                    dark
                  >
                    _</v-btn
                  >
                </div>
                <div class="flex flex-col md:flex-row mt-1">
                  <v-checkbox
                    dense
                    hide-details
                    class="font-13-400"
                    style="width: 110px"
                    label="IEAT"
                    color="base_ex"
                  >
                  </v-checkbox>

                  <v-btn
                    class="rounded-lg mt-1 mr-8"
                    fab
                    height="24"
                    width="24"
                    x-small
                    depressed
                    color="base_ex"
                    dark
                  >
                    _</v-btn
                  >
                </div>
                <div class="flex flex-col md:flex-row mt-1">
                  <v-checkbox
                    dense
                    hide-details
                    class="font-13-400"
                    style="width: 120px"
                    label="Re-Export"
                    color="base_ex"
                  ></v-checkbox>
                  <v-btn
                    class="rounded-lg mt-1 mr-8"
                    fab
                    height="24"
                    width="24"
                    x-small
                    depressed
                    color="base_ex"
                    dark
                  >
                    _</v-btn
                  >
                </div>
                <div class="flex flex-col md:flex-row mt-1">
                  <v-checkbox
                    dense
                    hide-details
                    class="font-13-400"
                    style="width: 100px"
                    label="Free Zone"
                    color="base_ex"
                  ></v-checkbox>

                  <v-btn
                    class="rounded-lg mt-1 mr-8"
                    fab
                    x-small
                    height="24"
                    width="24"
                    depressed
                    color="base_ex"
                    dark
                  >
                    _</v-btn
                  >
                </div>
                <div class="flex flex-col md:flex-row mt-1">
                  <v-checkbox
                    dense
                    hide-details
                    class="font-13-400"
                    style="width: 110px"
                    label="FOC"
                    color="base_ex"
                  >
                  </v-checkbox>

                  <v-btn
                    class="rounded-lg mt-1 mr-8"
                    fab
                    x-small
                    depressed
                    height="24"
                    width="24"
                    color="base_ex"
                    dark
                  >
                    _</v-btn
                  >
                </div>
              </div>
            </div>
          </v-card>
          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Declaration No.</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  dense
                  color="base_ex"
                  value=""
                  outlined
                  maxLength="14"
                  label="ระบุข้อมูล"
                  solo
                  v-model="form.declarationNo"
                ></v-text-field>
                <v-btn
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
              <label class="font-13-400">Line No.</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  value=""
                  dense
                  color="base_ex"
                  outlined
                  maxLength="4"
                  v-model="form.lineNo"
                  label="ระบุข้อมูล"
                  solo
                ></v-text-field>
              </div>
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Company Product</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  dense
                  color="base_ex"
                  outlined
                  maxLength="35"
                  label="ระบุข้อมูล"
                solo
                ></v-text-field>
                <v-btn
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
              <label class="font-13-400">Customs Product</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  dense
                  color="base_ex"
                  outlined
                  maxLength="35"
                  label="ระบุข้อมูล"
                solo
                ></v-text-field>
                <v-btn
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

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Product Attribute 1</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  dense
                  color="base_ex"
                  outlined
                  maxLength="35"
                  label="ระบุข้อมูล"
                solo
                ></v-text-field>
                <v-btn
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
              <label class="font-13-400">Product Attribute 2</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  dense
                  color="base_ex"
                  maxLength="35"
                  outlined
                  label="ระบุข้อมูล"
                solo
                ></v-text-field>
                <v-btn
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

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Import Tax Incentives ID</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-combobox
                
@keydown.enter="getIndexListDropDown"
                  class="font-14-300"
                  label="กรุณาเลือก"
                  :items="['D0101100000889', 'D0101100000888']"
                  dense
                  background-color="white"
                  color="base_ex"
                  outlined
                  solo
                  maxLength="17"
                ></v-combobox>
                <v-btn
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
              <label class="font-13-400">BOI License No.</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-combobox
                
@keydown.enter="getIndexListDropDown"
                  class="font-14-300"
                  label="กรุณาเลือก"
                  :items="items"
                  dense
                  background-color="white"
                  color="base_ex"
                  outlined
                  solo
                  maxLength="35"
                ></v-combobox>
                <v-btn
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

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Origin Criteria</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  dense
                  color="base_ex"
                  outlined
                  maxLength="35"
                  label="ระบุข้อมูล"
                solo
                ></v-text-field>
                <v-btn
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
              <label class="font-13-400"> Certified Exporter No</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  dense
                  color="base_ex"
                  outlined
                  maxLength="35"
                  label="ระบุข้อมูล"
                solo
                ></v-text-field>
                <v-btn
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

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">AHTN Code</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  dense
                  color="base_ex"
                  outlined
                  maxLength="12"
                  label="ระบุข้อมูล"
                solo
                ></v-text-field>
                <v-btn
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
              <label class="font-13-400">UNDG Number</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  dense
                  color="base_ex"
                  outlined
                   label="ระบุข้อมูล"
                solo
                ></v-text-field>
                <v-btn
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

          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-1/2">
              <label class="font-13-400">Procedure Code</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  dense
                  color="base_ex"
                  outlined
                  maxLength="4"
                   label="ระบุข้อมูล"
                solo
                ></v-text-field>
                <v-btn
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
              <label class="font-13-400">Valuation Code</label>
              <div class="flex flex-col md:flex-row md:space-x-4">
                <v-text-field
                  @keydown.enter="focusNext"
                  class="font-14-300"
                  dense
                  color="base_ex"
                  outlined
                  maxLength="1"
                  label="ระบุข้อมูล"
                solo
                ></v-text-field>
                <v-btn
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
          <v-card class="p-1" style="margin-top: 48px">
            <div class="bg-gray-2 p-4">
              <label class="font-18-600">สูตรการผลิต</label>
              <div class="flex flex-col md:flex-row md:space-x-4 mt-5">
                <div class="w-full md:w-1/2">
                  <label class="font-13-400">Model Number</label>
                  <div class="flex flex-col md:flex-row md:space-x-4">
                    <v-combobox
                    
@keydown.enter="getIndexListDropDown"
                      class="font-14-300"
                      label="กรุณาเลือก"
                      :items="['00384604-00', '00384604-001']"
                      value="00384604-00"
                      dense
                      background-color="white"
                      color="base_ex"
                      outlined
                      solo
                      maxLength="35"
                    ></v-combobox>
                    <v-btn
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
                  <label class="font-13-400">Model Version</label>
                  <div class="flex flex-col md:flex-row md:space-x-4">
                    <v-text-field
                      @keydown.enter="focusNext"
                      class="font-14-300"
                      dense
                      background-color="white"
                      color="base_ex"
                      outlined
                      maxLength="4"
                      value="1"
                    >
                    </v-text-field>
                  </div>
                </div>
              </div>
              <div class="flex flex-col md:flex-row md:space-x-4 mt-5">
                <div class="w-full md:w-1/2">
                  <label class="font-13-400">Company Tax</label>
                  <div class="flex flex-col md:flex-row md:space-x-4">
                    <v-text-field
                      @keydown.enter="focusNext"
                      class="font-14-300"
                      dense
                      background-color="white"
                      color="base_ex"
                      outlined
                      maxLength="17"
                      label="ระบุข้อมูล"
                solo
                value="105543025971"
                    ></v-text-field>
                  </div>
                </div>
                <div class="w-full md:w-1/2">
                  <label class="font-13-400">19 bis Transfer No</label>
                  <div class="flex flex-col md:flex-row md:space-x-4">
                    <v-combobox
                      class="font-14-300"
                    :items="items"
                      dense
                      background-color="white"
                      color="base_ex"
                      outlined
                      solo
                      maxLength="35"
                      label="กรุณาเลือก"
                      
@keydown.enter="getIndexListDropDown"
                    ></v-combobox>
                    <v-btn
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
            </div>
          </v-card>
        </div>
        <div class="w-full mt-8">
          <div class="flex flex-col" style="width: 320px; margin-left: 30px">
            <div
              class="flex justify-end align-center"
              style="
                background-color: #bb6bd9;
                height: 44px;
                border-radius: 14px 14px 0px 0px;
              "
            >
              <label class="font-15-500 mr-3" style="color: white !important"
                >ใช้สิทธิพิเศษ</label
              >
            </div>

            <div
              style="
                height: 120px;
                background-color: ;
                border-radius: 0px 0px 14px 14px;
                box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.07);
              "
            >
              <div
                class="flex flex-col"
                style="margin-left: 20px; margin-top: 8px"
              >
                <div>
                  <label class="font-13-400 mr-3" style="color: #74788d"
                    >BOI</label
                  >
                  <label class="font-13-300 mr-3" style="margin-left: 8px"
                    >1355/2542</label
                  >
                </div>
                <div
                  style="
                    width: 280px;
                    height: 1px;
                    background-color: #eff2f7;
                    margin-top: 8px;
                  "
                ></div>
              </div>

              <div
                class="flex flex-col"
                style="margin-left: 20px; margin-top: 8px"
              >
                <div>
                  <label class="font-13-400 mr-3" style="color: #74788d"
                    >มาตรา 29</label
                  >
                  <label class="font-13-300 mr-3" style="margin-left: 8px"
                    >11-9999</label
                  >
                </div>
                <div
                  style="
                    width: 280px;
                    height: 1px;
                    background-color: #eff2f7;
                    margin-top: 8px;
                  "
                ></div>
              </div>
              <div
                class="flex flex-col"
                style="margin-left: 20px; margin-top: 8px; border-radius: 14px"
              >
                <div>
                  <label class="font-13-400 mr-3" style="color: #74788d"
                    >19 bis Transfer</label
                  >
                  <label class="font-13-300 mr-3" style="margin-left: 8px"
                    >D1234567894522789</label
                  >
                </div>
                <div
                  style="
                    width: 280px;
                    height: 1px;
                    background-color: #eff2f7;
                    margin-top: 8px;
                  "
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-form>
    <p id="btnFocusOut"></p>
  </div>
</template>

<script>
import nextFocus from "@/services/nextFocus.js";

export default {
  data() {
    return {
      countState: 1,
      checkbox: true,
      items: [
        "ตัวอย่าง dropdown 01",
        "ตัวอย่าง dropdown 02",
        "ตัวอย่าง dropdown 03",
        "ตัวอย่าง dropdown 04",
      ],
      form: {
        declarationNo: "A0020620907511",
        lineNo: "0002",
        modelNum: "00384604-00"
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
  },
};
</script>
