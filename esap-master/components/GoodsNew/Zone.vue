<template>
  <div>
    <v-form ref="form">
      <div class="flex flex-col md:flex-row md:space-x-20 pt-2">
        <div class="w-full md:w-11/12">
          <div class="flex flex-col">
            <div class="flex flex-row">
              <div class="w-1/4">
                <label class="font-13-400">โซนของท่าส่งออก</label>
                <div class="flex flex-row">
                  <v-combobox
                    @keydown.enter="focusNext"
                    v-model="select7"
                    :items="items"
                    class="font-14-300"
                    solo
                    dense
                    label="กรุณาเลือก"
                    color="base_goods2"
                    outlined
                  ></v-combobox>
                </div>
              </div>
              <div class="w-1/2 flex flex-row ml-3">
                <div class="w-full">
                  <label class="font-13-400">IMO Class</label>
                  <v-textarea
                    class="font-14-300 w-3/4 -mt-1"
                    dense
                    rows="7"
                    solo
                    :rules="[(v) => !!v || '']"
                    required
                    value="Relesase Port เป็น 0254 ระบุ โซนส่งออกเป็น ท่าเรือกรุงเทพฯ
Relesase Port เป็น 0513 ระบุ โซนส่งออกเป็น ท่าเรือฯ บ.แอคทู-ลั่ม จากัด (สกท.)
Relesase Port เป็น 0520 ระบุ โซนส่งออกเป็น ท่าเรือฯ บ.แอคทู-ลั่ม จากัด สาหรับการส่งออก
Relesase Port เป็น 2809 ระบุ โซนส่งออกเป็น ท่าเรือสยามคอมเมอร์เชียล ซีพอร์ท
Relesase Port เป็น 2816 ระบุ โซนส่งออกเป็น ท่าเรือสยามเคอรี่
Relesase Port เป็น 2817 ระบุ โซนส่งออกเป็น ท่าเรือศรีราชาฮาเบอร์ (สทบ.)"
                    color="base_goods2"
                    outlined
                  ></v-textarea>
                </div>
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
  name: "Declaration",
  async mounted() {
    await this.validate();
  },
  data: () => {
    return {
      form: {},
      checkbox: true,
      checkbox1: true,
      valid: true,
      hidden: true,
      hidden2: true,
      errorMessages: "",
      select5: null,
      select6: null,
      select7: "ท่าเรือแหลมฉบัง",
      select8: null,
      select: "",
      model1: null,
      items: [
        "ตัวอย่าง dropdown 01",
        "ตัวอย่าง dropdown 02",
        "ตัวอย่าง dropdown 03",
        "ตัวอย่าง dropdown 04",
      ],
      items2: ["TH", "TH2", "TH3", "TH4"],
      items3: ["KGM", "KGM2", "KGM3", "KGM4"],
      test: "",
    };
  },
  methods: {
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
    focusNext(event) { // enter and new focus (text input type).
      nextFocus.nextInput(event);
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
</style>