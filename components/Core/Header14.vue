<template>
  <div
    :class="!$vuetify.breakpoint.mobile ? 'sticky top-64p' : ''"
    style="z-index: 999"
  >
    <div
      :class="
        !$vuetify.breakpoint.mobile
          ? 'esap-header-fda'
          : 'esap-header-fda-hex'
      "
      style="height: 120px"
    >
      <div class="flex h-full es-container">
        <div>
          <div class="mt-4">
            <span class="text-breadcrumbs">{{ title }}</span>
            <span class="text-breadcrumbs font-semibold">{{ action }}</span>
          </div>
          <h2 class="head5txt mt-11">{{ name }}</h2>
        </div>
        <v-spacer></v-spacer>
        <v-btn
          v-if="$vuetify.breakpoint.mobile"
          @click="nav = !nav"
          class="rounded-lg mt-4"
          small
          fab
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <div
          v-if="!$vuetify.breakpoint.mobile"
          class="
            flex
            items-center
            h-full
            md:flex-row
            flex-wrap
            justify-start
            mt-8
          "
          v-for="menu in headerMenu"
          :key="menu.name"
        >
          <Core-ButtonHead
            v-if="!menu.isBtnSave"
            :color="menu.color"
            :name="menu.name"
            :isCustomIcon="menu.isCustomIcon"
            :icon="menu.icon"
            :bgcolor="menu.bgColor"
          ></Core-ButtonHead>

          <div v-else @click="$router.push({ path: '/fdapermit/fdacancellist' })">
            <Core-ButtonHead
              class="ml-3"
              :btnsave="menu.isBtnSave"
              :otherclass="menu.otherclass"
              :bgcolor="menu.bgColor"
              :name="menu.name"
              elevation="0"
              :icon="menu.icon"
            ></Core-ButtonHead>
          </div>
        </div>
      </div>
    </div>

    <v-bottom-sheet v-model="nav">
      <v-card class="p-4">
        <div v-for="menu in headerMenu" :key="menu.name">
          <Core-ButtonHead
            v-if="!menu.isBtnSave"
            class="w-full mt-2"
            :color="menu.color"
            :name="menu.name"
            :isCustomIcon="menu.isCustomIcon"
            :icon="menu.icon"
            :bgcolor="red"
            :isGoodpage="true"
          ></Core-ButtonHead>

          <div v-else @click="$router.push({ path: '/fda/fdacanaddnew' })">
            <Core-ButtonHead
              class="w-full mt-2"
              :btnsave="menu.isBtnSave"
              :otherclass="menu.otherclass"
              :bgcolor="menu.bgColor"
              :name="menu.name"
              elevation="0"
              :icon="menu.icon"
            ></Core-ButtonHead>
          </div>
        </div>
      </v-card>
    </v-bottom-sheet>
  </div>
</template>

<script>
export default {
  name: "Header.vue",
  data() {
    return {
      nav: false,
      headerMenu: [
        {
          name: "Send",
          icon: require("@/assets/images/svg/good/send.svg"),
          iconColor: "#F1B44C",
          bgColor: this.bgcolor,
          isCustomIcon: true,
        },
        {
          name: "Receive",
          icon: require("@/assets/images/svg/good/receive.svg"),
          iconColor: "#F1B44C",
          bgColor: this.bgcolor,
          isCustomIcon: true,
        },
        {
          name: "Copy",
          icon: require("@/assets/images/svg/good/copy.svg"),
          iconColor: "#F1B44C",
          bgColor: this.bgcolor,
          isCustomIcon: true,
        },        
        {
          name: "Export",
          icon: require("@/assets/images/svg/good/export.svg"),
          iconColor: "#F1B44C",
          bgColor: this.bgcolor,
          isCustomIcon: true,
        },       
        
      ],
    };
  },
  props: {
    name: {
      default: "MANIFEST CONTROL",
    },
    title: {
      default: "Carmanifest / Carmanifest List /",
    },
    action: {
      default: "Add New",
    },
    isExport: {
      default: false,
    },
    bgcolor: {
      default: "#74788D",
    },
  },
};
</script>

<style scoped>
.flex,
.child-flex > * {
  flex: 0 !important;
}
</style>