<template>
  <div
    :class="!$vuetify.breakpoint.mobile ? 'sticky' : ''"
    style="z-index: 999"
  >
    <div
      :class="
        !$vuetify.breakpoint.mobile ? 'esap-header-ex' : 'esap-header-hex'
      "
      class="p-4"
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
            justify-end
            mt-8
          "
        >
          <Core-ButtonHead
            name="Receive"
            :icon="'fa-solid fa-clipboard-check'"
            color="#F1B44C"
            bgcolor="#F3E6FC"
            :isExport="isExport"
          ></Core-ButtonHead>
          <Core-ButtonHead
            name="Send"
            :icon="'fa-solid fa-paper-plane'"
            color="#34C38F"
            bgcolor="#F3E6FC"
            :isExport="isExport"
          ></Core-ButtonHead>
          <Core-ButtonHead
            name="PDF"
            color="#FF7640"
            bgcolor="#F3E6FC"
            :isExport="isExport"
            :icon="'fa-solid fa-file-pdf'"
          ></Core-ButtonHead>
          <Core-ButtonHead
            name="Print"
            bgcolor="#F3E6FC"
            :icon="'fa-solid fa-print'"
            color="#FF7640"
            :isExport="isExport"
          ></Core-ButtonHead>
          <Core-ButtonHead
            name="Export"
            bgcolor="#F3E6FC"
            :icon="'fa-solid fa-file-arrow-up'"
            color="#50A5F1"
            :isExport="isExport"
          ></Core-ButtonHead>
          <Core-ButtonHead
            name="Import File"
            bgcolor="#F3E6FC"
            :icon="'fa-solid fa-file-arrow-down'"
            color="#46BFCF"
            :isExport="isExport"
          ></Core-ButtonHead>
          <Core-ButtonHead
            name="Delete"
            color="#F46A6A"
            bgcolor="#F3E6FC"
            :icon="'fa-solid fa-trash-can'"
            :isExport="isExport"
          ></Core-ButtonHead>
          <Core-ButtonHead
            name="Copy"
            :icon="'fa-solid fa-copy'"
            color="#74788D"
            bgcolor="#F3E6FC"
            :isExport="isExport"
          ></Core-ButtonHead>
          <div @click="$router.push('/export/exportaddnew')">
            <Core-ButtonHead
              :btnsave="true"
              otherclass="font-16-600 "
              bgcolor="#F7D716"
              name="Add New"
              elevation="0"
              :icon="'fa-solid fa-plus'"
            ></Core-ButtonHead>
          </div>
        </div>
      </div>
    </div>

    <v-bottom-sheet v-model="nav">
      <v-card class="p-4">
        <Core-ButtonHead
          class="w-full mt-2"
          name="Receive"
          :icon="'fa-solid fa-clipboard-check'"
          color="#F1B44C"
          :isExport="isExport"
          :bgcolor="red"
        ></Core-ButtonHead>
        <Core-ButtonHead
          class="w-full mt-2"
          name="Send"
          :icon="'fa-solid fa-paper-plane'"
          :isExport="isExport"
          color="#34C38F"
        ></Core-ButtonHead>
        <Core-ButtonHead
          class="w-full mt-2"
          name="Print"
          :icon="'fa-solid fa-print'"
          :isExport="isExport"
          color="#FF7640"
        ></Core-ButtonHead>
        <Core-ButtonHead
          class="w-full mt-2"
          name="Export"
          :icon="'fa-solid fa-file-arrow-up'"
          :isExport="isExport"
          color="#50A5F1"
        ></Core-ButtonHead>
        <Core-ButtonHead
          class="w-full mt-2"
          name="Import File"
          :icon="'fa-solid fa-file-arrow-down'"
          :isExport="isExport"
          color="#46BFCF"
        ></Core-ButtonHead>
        <Core-ButtonHead
          class="w-full mt-2"
          name="Delete"
          :icon="'fa-solid fa-trash-can'"
          :isExport="isExport"
          color="#F46A6A"
        ></Core-ButtonHead>
        <Core-ButtonHead
          class="w-full mt-2"
          name="Copy"
          :icon="'fa-solid fa-copy'"
          :isExport="isExport"
          color="#74788D"
        ></Core-ButtonHead>
        <div class="w-full mt-2" @click="$router.push('/export/exportaddnew')">
          <Core-ButtonHead
            :btnsave="true"
            class="w-full"
            otherclass="text-white"
            :isExport="isExport"
            color="#4F4BFF"
            name="Add New"
          ></Core-ButtonHead>
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
    },
    isExport: {
      default: false
    },
    bgcolor: {
      default: "#74788D"
    }
  }
};
</script>