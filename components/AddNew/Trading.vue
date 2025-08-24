<template>
  <div>
    <v-form ref="form">
      <div class="pt-2">
        <div class="w-full md:w-3/5">
          <label class="font-13-400">Trading Partner Tax No</label>
          <v-text-field @keydown.enter="focusNext" class="font-14-3002" dense label="ระบุข้อมูล..." color="base" solo
            outlined maxLength="17" style="width: 733px !important"></v-text-field>
        </div>
        <div class="w-full md:w-3/5">
          <label class="font-13-400">Branch</label>
          <v-text-field @keydown.enter="focusNext" class="font-14-3002" dense label="ระบุข้อมูล..." color="base" solo maxLength="6"
            style="width: 733px !important" outlined></v-text-field>
        </div>
        <div class="w-full md:w-3/5">
          <label class="font-13-400">Deferred Payment of Duty / Tax / Free</label>
          <v-text-field @keydown.enter="focusNext" class="font-14-3002" dense label="ระบุข้อมูล..." color="base" solo maxLength="5"
            style="width: 733px !important" outlined></v-text-field>
        </div>
      </div>
    </v-form>
    <p id="btnFocusOut"></p>
  </div>
</template>

<script>
import nextFocus from "@/services/nextFocus.js";
export default {
  name: "Trading",
  async mounted() {
    await this.validate();
  },
  data() {
    return {
      valid: true
    };
  },
  props: {},
  methods: {
    async validate() {
      this.$refs.form.validate();
    },
    focusNext(event) { // enter and new focus (text input type).
      nextFocus.nextInput(event);
    },
  }
};
</script>