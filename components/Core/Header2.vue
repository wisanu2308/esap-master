<template>
  <div
    :class="$vuetify.breakpoint.width > 1400 ? 'sticky' : ''"
    style="height: 92px; z-index: 99"
  >
    <div
      :class="
        $vuetify.breakpoint.width > 1400 ? 'esap-header' : 'esap-header-h'
      "
      class="p-4"
    >
      <div class="flex h-full es-container">
        <div>
          <div class="mt-4">
            <span class="text-breadcrumbs">{{ title }}</span>
            <span class="text-breadcrumbs font-semibold">{{ action }}</span>
          </div>
          <h2 class="m-title mt-6">{{ name }}</h2>
        </div>
        <v-spacer></v-spacer>
        <v-btn
          v-if="$vuetify.breakpoint.mobile"
          @click="nav = !nav"
          class="rounded-lg mt-2"
          small
          fab
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <div
          class="flex items-center h-full"
          v-if="!$vuetify.breakpoint.mobile"
        >
          <Core-HeaderMenu2
            headclass="flex flex-col md:flex-row flex-wrap justify-end"
          ></Core-HeaderMenu2>
        </div>
      </div>
    </div>
    <v-bottom-sheet v-model="nav">
      <v-card class="p-4">
        <Core-HeaderMenu2
          divclass="w-full"
          inclass="w-full"
          headclass="flex flex-col"
        ></Core-HeaderMenu2>
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
    };
  },
  props: {
    name: {
      default: "DECLARATION CONTROL",
    },
    title: {
      default: "Import Declaration / Import Declaration List /",
    },
    action: {
      default: "Add New",
    },
  },
};
</script>
