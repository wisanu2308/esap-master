<template>
  <v-menu class="fixsha" content-class="fixsha">
    <template v-slot:activator="{ on, attrs }">
      <!-- <v-btn small fab color="grey" outlined v-bind="attrs" v-on="on">
            <img src="@/assets/images/svg/info.svg" alt="">
        </v-btn> -->
      <button class="btn-infox mt-1" v-bind="attrs" v-on="on">
        <img class="ico-infox" src="@/assets/images/svg/info.svg" alt="" />
      </button>
    </template>
    <div class="dropdown-card">
      <div class="flex items-center boxx border-b-2 border-gray-100">
        <span class="txt">รหัสประจำตัวของผู้ส่งข้อมูล</span>
        <v-spacer></v-spacer>
        <span class="smtxt">AB0002365899147</span>
      </div>
      <div class="flex items-center boxx border-b-2 border-gray-100">
        <span class="txt">ผู้สร้าง</span>
        <v-spacer></v-spacer>
        <span class="smtxt">นัฐพล สะอาดตา</span>
      </div>
      <div class="flex items-center boxx border-b-2 border-gray-100">
        <span class="txt">วัน-เวลา ที่สร้าง</span>
        <v-spacer></v-spacer>
        <span class="smtxt">15/7/2565 15:30</span>
      </div>
      <div class="flex items-center boxx border-b-2 border-gray-100">
        <span class="txt">ผู้แก้ไข</span>
        <v-spacer></v-spacer>
        <span class="smtxt">นัฐพล สะอาดตา</span>
      </div>
      <div class="flex items-center boxx border-b-2 border-gray-100">
        <span class="txt">วันที่แก้ไข</span>
        <v-spacer></v-spacer>
        <span class="smtxt">15/7/2565 15:30</span>
      </div>
      <div class="flex items-center boxx border-b-2 border-gray-100">
        <span class="txt">ผู้ส่งข้อมูล</span>
        <v-spacer></v-spacer>
        <span class="smtxt">นัฐพล สะอาดตา</span>
      </div>
      <div class="flex items-center boxx">
        <span class="txt">วัน-เวลา ที่ส่ง</span>
        <v-spacer></v-spacer>
        <span class="smtxt">15/7/2565 15:30</span>
      </div>
    </div>
    <!-- <v-list>
        <v-list-item>
            <v-list-item-title class="w-300px">
                <div class="flex w-full">
                    <span class="text-gray-500">ผู้สร้าง</span>
                    <v-spacer></v-spacer>
                    <span>นัฐพล สะอาดตา </span>
                </div>
            </v-list-item-title>
        </v-list-item>
        <v-list-item>
            <v-list-item-title class="w-300px">
                <div class="flex w-full">
                    <span class="text-gray-500">วัน-เวลา ที่สร้าง</span>
                    <v-spacer></v-spacer>
                    <span>15/7/2565 15:30 </span>
                </div>
            </v-list-item-title>
        </v-list-item>
        <v-list-item>
            <v-list-item-title class="w-300px">
                <div class="flex w-full">
                    <span class="text-gray-500">ผู้แก้ไข</span>
                    <v-spacer></v-spacer>
                    <span>นัฐพล สะอาดตา </span>
                </div>
            </v-list-item-title>
        </v-list-item>
        <v-list-item>
            <v-list-item-title class="w-300px">
                <div class="flex w-full">
                    <span class="text-gray-500">วัน-เวลา ที่แก้ไข</span>
                    <v-spacer></v-spacer>
                    <span>20/7/2565 15:30</span>
                </div>
            </v-list-item-title>
        </v-list-item>
    </v-list> -->
  </v-menu>
</template>

<script>
export default {};
</script>

<style>
.fixsha {
  box-shadow: none;
}

.boxx {
  height: 37px;
}

.txt {
  font-family: "Kanit" !important;
  font-style: normal !important;
  font-weight: 400 !important;
  font-size: 13px !important;
  line-height: 19px !important;
  color: #74788d !important;
}

.smtxt {
  font-family: "Kanit" !important;
  font-style: normal !important;
  font-weight: 300 !important;
  font-size: 13px !important;
  line-height: 19px !important;
  text-align: right !important;
  color: #212529 !important;
}
</style>
