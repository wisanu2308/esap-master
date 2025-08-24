<template>
  <div>
    <div v-if="btnsave">
      <v-btn
        dark
        :color="bgcolor"
        :block="block"
        :class="optclass"
        elevation="6"
        class="btnh3 ml-4"
      >
        <!-- <i class="fa-solid fa-square-check"></i> -->
        <template v-if="isCustomIcon">
          <img :src="require('@' + icon)" />
        </template>
        <template v-else>
          <v-icon small :color="color">{{ icon }}</v-icon>
        </template>
        <span :class="otherclass" class="ml-1">{{ name }}</span>
      </v-btn>
    </div>
    <div v-else-if="name == 'XML' || name == 'GCL'">
      <v-hover v-slot="{ hover }">
        <v-btn
          :block="block"
          :class="optclass"
          elevation="0"
          class="btnh2"
          :style="{ 'background-color': hover ? '#FFFFFF' : bgcolor }"
        >
        <template v-if="isCustomIcon">
          <img :src="require('@' + icon)" />
        </template>
        <template v-else>
          <span :class="otherclass" class="ml-1 btextP">{{ name }}</span>
        </template>
        </v-btn>
      </v-hover>
    </div>
    <div v-else>
      <v-hover v-slot="{ hover }">
        <v-btn
          :block="block"
          :class="optclass"
          elevation="0"
          class="btnh2"
          :style="{ 'background-color': hover ? '#FFFFFF' : bgcolor }"
        >
          <!-- <i class="fa-solid fa-x"></i> -->
          <!-- <i class="fa-solid fa-circle-xmark"></i> -->
          <!-- <i class="fa-solid fa-square-check"></i> -->
          <template v-if="isCustomIcon">
            <img :src="icon">
          </template>
          <template v-else>
            <v-icon small :color="color">{{ icon }} </v-icon>
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
    icon: {
      default: "fa-solid fa-print",
    },
    name: {
      default: "Name",
    },
    bgcolor: {
      default: "#F3E6FC",
    },

    optclass: {
      default: "ml-1",
    },
    color: {
      default: "#FFE0D3",
    },
    otherclass: {
      default: "",
    },
    fontss: {
      default: "font-14-400",
    },
    btnsave: {
      default: false,
    },
    block: {
      default: false,
    },
    isCustomIcon: {
      default: false
    }
    ,isBtnSave: {
      default: false
    }
  },
  mounted() {
  }
};
</script>