<template>
<v-app>

    <Core-Navbar></Core-Navbar>
    <v-main>
        <div >
            <Nuxt />
        </div>

    </v-main>

    <v-footer color="#F2F2F5" fixed app class="esap-footer d-flex justify-center">
        <span class="font-14-3002">Copyright © {{ new Date().getFullYear() }} ESAP. All rights reserved</span>
    </v-footer>
</v-app>
</template>

<script>
export default {
    name: 'DefaultLayout',
    data() {
        return {

        }
    },
    methods: {
        eieitest() {
            console.log('ok')
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap');

* {
    font-family: 'Kanit', sans-serif;
}

.es-container {
    padding-left: 75px;
    padding-right: 75px;
}

 
@media only screen and (max-width: 1367px) {
    .es-container {
        padding-left: 15px;
        padding-right: 15px;
    }
}
</style>
