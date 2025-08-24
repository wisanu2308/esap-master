<template>
  <div>
    <v-expansion-panels v-model="panel" value="0" class="mb-6 mt-6">
      <v-expansion-panel class="">
        <v-expansion-panel-header :style="bgHeader">
          <span class="font-14-5002">Invoice No. ESAP01</span>
          <v-spacer></v-spacer>
          <span class="boxslide-btn" :style="bgMiniBox">01</span>
          <template v-slot:actions>
            <v-icon color="white"> fa-solid fa-circle-chevron-down </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="mb-7 mt-1">
            <li>
              <v-icon x-small color="gray" style="font-size: 6px">
                fa-solid fa-circle</v-icon>
              <span class="font-14-4004 ml-3">0001-001</span>
            </li>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  props: ['bgcolor', 'bgminibox'],
  computed: {
    bgHeader() {
      return 'background-color: ' + this.bgcolor;
    },
    bgMiniBox() {
      return 'background-color: ' + this.bgminibox + '!important';
    }
  },
  data: () => {
    return {
      panel: 0,
      dialog: false,
    };
  }
};
</script>
