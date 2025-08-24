<template>
    <div :class="(!$vuetify.breakpoint.mobile)?'sticky top-64p':''" style="z-index:999; ">
        <div :class="(!$vuetify.breakpoint.mobile)?'esap-header':'esap-header-h'" style="height:140px;">

            <div class="flex  h-full  es-container">
                <div>
                    <div class="mt-4">
                        <span class="text-breadcrumbs ">Import Declaration List /</span>
                        <span class="text-breadcrumbs font-semibold">Import Declaration List</span>
                    </div>
                    <h2 class="head5txt mt-11 text-white">Import Declaration List</h2>
                </div>
                <v-spacer></v-spacer>
                <v-btn v-if="($vuetify.breakpoint.mobile)" @click="nav =!nav" class="rounded-lg mt-4" small fab>
                    <v-icon>mdi-menu</v-icon>
                </v-btn>
                <div v-if="(!$vuetify.breakpoint.mobile)" class="flex items-center h-full">
                    <Core-HeaderMenu1 headclass="flex flex-col md:flex-row flex-wrap justify-end"></Core-HeaderMenu1>
                </div>
            </div>

        </div>
        <v-bottom-sheet v-model="nav">
            <v-card class="p-4">
                <Core-HeaderMenu1 block divclass="w-full" inclass="w-full" headclass="flex flex-col"></Core-HeaderMenu1>
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
    }
}
</script>
