<template>
<v-toolbar class="mb-2" color="transparent" flat v-if="($vuetify.breakpoint.mobile)">
    <Core-BarDialog></Core-BarDialog>
    <v-spacer></v-spacer>
    <Core-ButtonInfo></Core-ButtonInfo>
</v-toolbar>
</template>

<script>
export default {

}
</script>