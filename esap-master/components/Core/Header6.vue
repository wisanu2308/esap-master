<template>
  <div :class="!$vuetify.breakpoint.mobile ? 'sticky top-64p' : ''" style="height: 92px; z-index: 99">
    <div :class="
      !$vuetify.breakpoint.mobile ? 'esap-header-ex' : 'esap-header-hex'
    " style="height: 92px">
      <div class="h-full es-container">
        <div class="pt-4">
          <span class="text-breadcrumbs">{{ title }}</span>
          <span class="text-breadcrumbs font-semibold">{{ action }}</span>
        </div>
        <div class="flex">
          <div>
            <h2 class="m-title mt-6">{{ name }}</h2>
          </div>
          <v-spacer v-if="$vuetify.breakpoint.mobile"></v-spacer>
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
            <Core-ButtonHeadSmall name="Short Message" :icon="'fa-solid fa-message-lines'" color="#74788D">
            </Core-ButtonHeadSmall>
            <Core-ButtonHeadSmall name="Short" :icon="'fa-solid fa-comment-lines'" color="#6F9CDF">
            </Core-ButtonHeadSmall>
            <Core-ButtonHeadSmall name="XML" :icon="require('@/assets/images/svg/menu/xml.svg')"></Core-ButtonHeadSmall>
            <Core-ButtonHeadSmall name="Message" :icon="require('@/assets/images/svg/menu/message.svg')">
            </Core-ButtonHeadSmall>
            <Core-ButtonHeadSmall name="Receive" :icon="'fa-solid fa-clipboard-check'" color="#F1B44C">
            </Core-ButtonHeadSmall>
            <Core-ButtonHeadSmall name="Validate" :icon="'fa-solid fa-list-check'" color="#6F9CDF">
            </Core-ButtonHeadSmall>
            <Core-ButtonHeadSmall name="Send" :icon="'fa-solid fa-paper-plane'" color="#34C38F"></Core-ButtonHeadSmall>
            <Core-ButtonHeadSmall name="GCL" :icon="require('@/assets/images/svg/menu2/gcl.svg')">
            </Core-ButtonHeadSmall>
            <Core-ButtonHeadSmall name="Print" :icon="'fa-solid fa-print'" color="#FF7640"></Core-ButtonHeadSmall>
            <div @click="$router.go(-1)">
              <Core-ButtonHeadSmall name="Cancel" :icon="'fa-solid fa-circle-xmark'"></Core-ButtonHeadSmall>
            </div>
            <Core-ButtonHeadSmall :btnsave="true" otherclass="text-white" color="#34C38F" name="Save"
              :icon="'fa-solid fa-square-check'"></Core-ButtonHeadSmall>
          </div>
        </div>
      </div>
    </div>
    <v-bottom-sheet v-model="nav">
      <v-card class="p-4">
        <Core-ButtonHeadSmall block class="w-full mt-2" name="Short Message" :icon="'fa-solid fa-message-lines'"
          color="#74788D"></Core-ButtonHeadSmall>
        <Core-ButtonHeadSmall block class="w-full mt-2" name="Short" :icon="'fa-solid fa-comment-lines'"
          color="#6F9CDF"></Core-ButtonHeadSmall>
        <Core-ButtonHeadSmall block class="w-full mt-2" name="XML" :icon="require('@/assets/images/svg/menu/xml.svg')">
        </Core-ButtonHeadSmall>
        <Core-ButtonHeadSmall block class="w-full mt-2" name="Message"
          :icon="require('@/assets/images/svg/menu/message.svg')"></Core-ButtonHeadSmall>
        <Core-ButtonHeadSmall block class="w-full mt-2" name="Receive" :icon="'fa-solid fa-clipboard-check'"
          color="#F1B44C"></Core-ButtonHeadSmall>
        <Core-ButtonHeadSmall block class="w-full mt-2" name="Validate" :icon="'fa-solid fa-list-check'"
          color="#6F9CDF"></Core-ButtonHeadSmall>
        <Core-ButtonHeadSmall block class="w-full mt-2" name="Send" :icon="'fa-solid fa-paper-plane'" color="#34C38F">
        </Core-ButtonHeadSmall>
        <Core-ButtonHeadSmall block class="w-full mt-2" name="GCL" :icon="require('@/assets/images/svg/menu2/gcl.svg')">
        </Core-ButtonHeadSmall>
        <Core-ButtonHeadSmall block class="w-full mt-2" name="Print" :icon="'fa-solid fa-print'" color="#FF7640">
        </Core-ButtonHeadSmall>
        <div class="w-full mt-2" @click="$router.go(-1)">
          <Core-ButtonHeadSmall block class="w-full" name="Cancel" :icon="'fa-solid fa-circle-xmark'">
          </Core-ButtonHeadSmall>
        </div>
        <Core-ButtonHeadSmall block :btnsave="true" class="w-full mt-2" otherclass="text-white" color="#34C38F"
          name="Save" :icon="'fa-solid fa-square-check'"></Core-ButtonHeadSmall>
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
    },
    path: {
      default: ""
    }
  }
};
</script>
