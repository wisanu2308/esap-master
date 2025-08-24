<template>
  <div>
    <div v-if="btnsave">
      <v-btn :block="block" :class="`${optclass} ${classActive}`" :width="viewWidth" :height="viewHeight" elevation="6"
        :style="isExport ? 'background-color: #F7D716' : 'background-color: '+ bgcolor ">
        <template v-if="isCustomIcon">
          <img :src="require('@'+ icon)" />
        </template>
        <template v-else>
          <v-icon small color="#ffffff"> {{ icon }} </v-icon>
        </template>
        <span :class="otherclass" class="ml-1 text-white">{{ name }}</span>
      </v-btn>
    </div>
    <div v-else>
      <v-hover v-slot="{ hover }">
        <v-btn :block="block" :class="`${optclass} ${classBtn}`" :elevation="elevation" :width="viewWidth"
          :height="viewHeight" :style="{ 'background-color': hover ? color : '#FFFFFF' , 'background':bgcolor}">
          <template v-if="isCustomIcon">
            <img :src="icon">
          </template>
          <template v-else>
            <v-icon small :color="color"> {{ icon }} </v-icon>
          </template>
          <span :class="otherclass" class="ml-1 btextP">{{ name }}</span>
        </v-btn>
      </v-hover>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    isCustomIcon: {
      default: false
    },
    icon2: {
      default: null
    },
    icon: {
      default: 'fa-solid fa-circle-plus',
    },
    name: {
      default: "Name"
    },
    width: {
      default: "120px"
    },
    height: {
      default: "48px"
    },
    optclass: {
      default: "ml-1"
    },
    color: {
      default: "#FFE0D3"
    },
    bgcolor: {
      default: "#FFE0D3"
    },
    otherclass: {
      default: ""
    },
    fontss: {
      default: "font-14-400"
    },
    btnsave: {
      default: false
    },
    block: {
      default: false
    },
    elevation: {
      default: 0
    },
    isExport: {
      default: false
    },
    isGoodpage: {
      default: false
    }
  },
  computed: {
    viewHeight() {
      return this.$vuetify.breakpoint.width > 1400 ? this.height : "";
    },
    viewWidth() {
      return this.$vuetify.breakpoint.width > 1400 ? this.width : '100%';
    },
    classBtn() {
      if (this.$vuetify.breakpoint.width > 1400) {
        return this.isExport ? "btnh" + " export" : this.isGoodpage ?  "btnh" + " good" : "btnh";
      } else {
        return this.isExport ? "btnhc" + " export" : this.isGoodpage ?  "btnhc" + " good" : "btnhc";
      }
    },
    classActive() {
      //return this.$vuetify.breakpoint.width > 1400 ? "btnh3" : "";
    }
  }
};
</script>