<template>
  <div
    :class="!$vuetify.breakpoint.mobile ? 'sticky top-64p' : ''"
    style="height: 92px; z-index: 99"
  >
    <div
      :class="
        !$vuetify.breakpoint.mobile
          ? 'esap-header-carm'
          : 'esap-header-carm-hex'
      "
      style="height: 92px"
    >
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
              flex flex-col
              md:flex-row
              flex-wrap
              justify-end
              -mt-2
              rrtt
            "
          >
            <div
              v-for="(menu, i) in menus"
              :key="i"
              @click="$router.push(menu.path)"
            >
              <Core-ButtonHead
                v-if="fixedwidth"
                :color="menu.color"
                :btnsave="menu.save"
                :isCustomIcon="menu.isCustomIcon"
                :name="menu.name"
                :icon="menu.icon"
                :bgcolor="menu.bgcolor"
              ></Core-ButtonHead>
              <Core-ButtonHeadSmall
                v-else
                :color="menu.color"
                :btnsave="menu.save"
                :name="menu.name"
                :isCustomIcon="menu.isCustomIcon"
                :icon="menu.icon"
                :bgcolor="menu.bgcolor"
                :isBtnSave="menu.isBtnSave"
              ></Core-ButtonHeadSmall>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-bottom-sheet v-model="nav">
      <v-card class="p-4">
        <div
          v-for="(menu, i) in menus"
          :key="i"
          @click="$router.push(menu.path)"
          class="w-full mt-2"
        >
          <Core-ButtonHeadSmall
            block
            :color="menu.color"
            :btnsave="menu.save"
            :name="menu.name"
            :icon="menu.icon"
            :bgcolor="menu.bgcolor"
            :isCustomIcon="menu.isCustomIcon"
            :isBtnSave="menu.isBtnSave"
          ></Core-ButtonHeadSmall>
        </div>
      </v-card>
    </v-bottom-sheet>
  </div>
</template>

<script>
export default {
  name: "HeadBar",
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
    fixedwidth: {
      default: true,
    },
    menus: [
      {
        name: "",
        icon: "",
        path: "",
        color: "",
        bgcolor: "",
        save: {
            default: false
        },
        isBtnSave: {
            default: false
        }
      },
    ],
    isCustomIcon: {
      default: false,
    },
    
  },
};
</script>