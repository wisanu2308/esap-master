<template>
<v-app-bar height="64" max-height="64" fixed app color="white" flat class="md:pl-20 md:pr-20">
    <img @click="$router.push('/')" src="@/assets/images/svg/logo.svg" alt="">
    <v-spacer></v-spacer>
    <v-btn @click="$router.push('/export/')" style="border-radius:50px!important;" color="grey lighten-4" fab small elevation="0">
        <v-icon>mdi-cog</v-icon>
    </v-btn>
</v-app-bar>
</template>

<script>
export default {

}
</script>
