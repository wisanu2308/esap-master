<template>
    <div>
        <v-btn :block="block" class="rounded-lg w-tab" text>
            <v-icon color="#46BFCF" size="18" class="mr-2">fa-solid fa-file-arrow-down
            </v-icon>
            <span class="font-14-400">Import File</span>
        </v-btn>
        <v-btn :block="block" class="rounded-lg w-tab" text>
            <v-icon color="#FF7640" size="18" class="mr-2">fa-solid fa-arrow-rotate-right</v-icon>
            <span class="font-14-400">Re Invoice No.</span>
        </v-btn>
        <v-btn :block="block" class="rounded-lg w-tab" text>
            <v-icon color="#F46A6A" size="18" class="mr-2">fa-solid fa-xmark</v-icon>
            <span class="font-14-400">Delete</span>
        </v-btn>
        <v-btn :block="block" class="rounded-lg w-tab" text>
            <v-icon color="#6F9CDF" size="18" class="mr-2">fa-duotone fa-clone</v-icon>
            <span class="font-14-400">Copy</span>
        </v-btn>
        <v-btn width="100px" :block="block" @click="$router.push('/import/invoice/invoicecontrol/')" dark
            class="rounded-lg font-14-4003 " :color="color">
            <v-icon color="" size="14" class="mr-2">fa-solid fa-plus</v-icon>Add New
        </v-btn>
    </div>
</template>

<script>

export default {
    props: {
        block: {
            default: false
        },
        color: {
            default: "purple_base"
        }
    }
}
</script>