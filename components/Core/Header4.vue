<template>
    <div :class="(!$vuetify.breakpoint.mobile)?'sticky top-64p':''" style="height:92px; z-index: 99;">
        <div :class="(!$vuetify.breakpoint.mobile)?'esap-header':'esap-header-h'" style="height:92px;">
            <div class="flex  h-full  es-container">
                <div>
                    <div class="mt-4">
                        <span class="text-breadcrumbs ">{{title}}</span>
                        <span class="text-breadcrumbs font-semibold">{{action}}</span>
                    </div>
                    <h2 class="m-title mt-6">{{name}}</h2>
                </div>
                <v-spacer></v-spacer>
                <v-btn v-if="($vuetify.breakpoint.mobile)" @click="nav =!nav" class="rounded-lg mt-4" small fab>
                    <v-icon>mdi-menu</v-icon>
                </v-btn>
                <div v-if="(!$vuetify.breakpoint.mobile)"
                    class="flex items-center h-full flex flex-col md:flex-row flex-wrap justify-end">
                    <Core-ButtonHead name="Copy" :icon="'fa-solid fa-copy'" color="#74788D"></Core-ButtonHead>
                    <div @click="$router.push('/import/invoice/invoicecontrol')">
                        <Core-ButtonHead name="Delete" :icon="'fa-solid fa-trash-can'" color="#F46A6A">
                        </Core-ButtonHead>
                    </div>
                    <Core-ButtonHead name="Print" :icon="'fa-solid fa-print'" color="#FF7640"></Core-ButtonHead>
                    <Core-ButtonHead name="Calculate" :icon="'fa-solid fa-calculator'" color="#FF7640">
                    </Core-ButtonHead>
                    <Core-ButtonHead name="Validate" :icon="'fa-solid fa-list-check'" color="#6F9CDF"></Core-ButtonHead>
                    <Core-ButtonHead :btnsave="true" width="142px" otherclass="text-white" color="#34C38F" name="Save"
                        :icon="'fa-solid fa-square-check'"></Core-ButtonHead>

                </div>

            </div>
        </div>
        <v-bottom-sheet v-model="nav">
            <v-card class="p-4 w-full ">
                <Core-ButtonHead block class="w-full mt-2" name="Copy" :icon="'fa-solid fa-copy'" color="#74788D">
                </Core-ButtonHead>
                <div class="w-full mt-2" @click="$router.push('/import/invoice/invoicecontrol')">
                    <Core-ButtonHead block class="w-full " name="Delete" :icon="'fa-solid fa-trash-can'"
                        color="#F46A6A"></Core-ButtonHead>
                </div>
                <Core-ButtonHead block class="w-full mt-2" name="Print" :icon="'fa-solid fa-print'" color="#FF7640">
                </Core-ButtonHead>
                <Core-ButtonHead block class="w-full mt-2" name="Calculate" :icon="'fa-solid fa-calculator'"
                    color="#FF7640"></Core-ButtonHead>
                <Core-ButtonHead block class="w-full mt-2" name="Validate" :icon="'fa-solid fa-list-check'"
                    color="#6F9CDF"></Core-ButtonHead>
                <Core-ButtonHead block :btnsave="true" width="142px" class="w-full mt-2" otherclass="text-white"
                    color="#34C38F" name="Save" :icon="'fa-solid fa-square-check'"></Core-ButtonHead>

            </v-card>
        </v-bottom-sheet>
    </div>
</template>

<script>
export default {
    name: 'Header.vue',
    data() {
        return {
            nav: false
        }
    },
    props: {
        name: {
            default: 'DECLARATION CONTROL'
        },
        title: {
            default: 'Import Declaration / Import Declaration List /'
        },
        action: {
            default: 'Add New'
        }
    }
}
</script>