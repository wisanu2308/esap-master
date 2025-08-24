<template>
  <div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <div class="pt-8">
        <label class="text-sm font-semibold">Trading Partner Tax No</label>
        <v-text-field @keydown.enter="focusNext" 
          dense
          label="ระบุข้อมูล..."
          color="base"
          outlined
        ></v-text-field>

        <label class="text-sm font-semibold">Branch</label>
        <v-text-field @keydown.enter="focusNext" 
          dense
          label="ระบุข้อมูล..."
          color="base"
          outlined
        ></v-text-field>

        <label class="text-sm font-semibold"
          >Deferred Payment of Duty / Tax / Free</label
        >
        <v-text-field @keydown.enter="focusNext" 
          dense
          label="ระบุข้อมูล..."
          color="base"
          outlined
        ></v-text-field>
      </div>
    </v-form>
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
      valid: true,
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
  },
};
</script>
