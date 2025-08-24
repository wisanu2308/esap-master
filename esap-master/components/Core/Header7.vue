<template>
  <div :class="!$vuetify.breakpoint.mobile ? 'sticky top-64p' : ''" style="height: 92px; z-index: 99">
    <div :class="!$vuetify.breakpoint.mobile ? 'esap-header' : 'esap-header-h'" style="height: 92px">
      <div class="flex h-full es-container">
        <div>
          <div class="mt-4">
            <span class="text-breadcrumbs">{{ title }}</span>
            <span class="text-breadcrumbs font-semibold">{{ action }}</span>
          </div>
          <h2 class="m-title mt-6">{{ name }}</h2>
        </div>
        <v-spacer></v-spacer>
        <v-btn v-if="$vuetify.breakpoint.mobile" @click="nav = !nav" class="rounded-lg mt-4" small fab>
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <div v-if="!$vuetify.breakpoint.mobile" class="
            flex
            items-center
            h-full
            flex flex-col
            md:flex-row
            flex-wrap
            justify-end
          ">
          <Core-ButtonHead name="Receive" color="#F1B44C" :icon="'fa-solid fa-clipboard-check'"></Core-ButtonHead>
          <Core-ButtonHead name="Send" :icon="'fa-solid fa-paper-plane'" color="#34C38F"></Core-ButtonHead>
          <Core-ButtonHead name="Print" :icon="'fa-solid fa-print'" color="#FF7640"></Core-ButtonHead>
          <Core-ButtonHead name="Export" :icon="'fa-solid fa-file-arrow-up'" color="#50A5F1"></Core-ButtonHead>
          <Core-ButtonHead name="Import File" :icon="'fa-solid fa-file-arrow-down'" color="#46BFCF"></Core-ButtonHead>
          <Core-ButtonHead name="Delete" :icon="'fa-solid fa-trash-can'" color="#F46A6A"></Core-ButtonHead>
          <Core-ButtonHead name="Copy" :icon="'fa-solid fa-copy'" color="#74788D"></Core-ButtonHead>
          <div @click="$router.push('/export/exportaddnew')">
            <Core-ButtonHead :btnsave="true" width="142px" otherclass="text-white" color="#34C38F" name="Save"
              :icon="'fa-solid fa-square-check'"></Core-ButtonHead>
          </div>
        </div>
      </div>
    </div>

    <v-bottom-sheet v-model="nav">
      <v-card class="p-4">
        <Core-ButtonHead block name="Receive" color="#F1B44C" :icon="'fa-solid fa-clipboard-check'"></Core-ButtonHead>
        <Core-ButtonHead block name="Send" :icon="'fa-solid fa-paper-plane'" color="#34C38F"></Core-ButtonHead>

        <Core-ButtonHead block name="Print" :icon="'fa-solid fa-print'" color="#FF7640"></Core-ButtonHead>
        <Core-ButtonHead block name="Export" :icon="'fa-solid fa-file-arrow-up'" color="#50A5F1"></Core-ButtonHead>
        <Core-ButtonHead block name="Import File" :icon="'fa-solid fa-file-arrow-down'" color="#46BFCF">
        </Core-ButtonHead>
        <Core-ButtonHead block name="Delete" :icon="'fa-solid fa-trash-can'" color="#F46A6A"></Core-ButtonHead>
        <Core-ButtonHead block name="Copy" :icon="'fa-solid fa-copy'" color="#74788D"></Core-ButtonHead>
        <div @click="$router.push('/export/exportaddnew')">
          <Core-ButtonHead block :btnsave="true" width="142px" otherclass="text-white" color="#34C38F" name="Save"
            :icon="'fa-solid fa-square-check'"></Core-ButtonHead>
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
      nav: false
    };
  },
  props: {
    name: {
      default: "DECLARATION CONTROL"
    },
    title: {
      default: "Import Declaration / Import Declaration List /"
    },
    action: {
      default: "Add New"
    }
  }
};
</script>
