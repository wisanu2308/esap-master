
<template>
    <div class="text-center">
        <v-dialog v-model="dialog" width="50%">
            <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" class="rounded-lg font-14-5002" depressed color="#BB6BD9" dark>
                    <i class="fa-solid fa-plus"></i>
                    Add Short Item
                </v-btn>
            </template>

            <v-card style="padding-left: 60px; padding-right: 60px; padding-top: 29px;">
                <div class="flex flex-column">
                    <div class="flex flex-row" style="justify-content: space-between; align-items: center;">
                        <div>
                            <v-card-title style="font-size: 18px;">
                                Declaration item for Short
                            </v-card-title>
                        </div>
                        <div>
                            <v-btn class="rounded-lg" depressed color="base_ex" dark
                                @click="dialog = false, AddShortItem()">
                                Select
                            </v-btn>

                            <v-btn class="rounded-lg" depressed color="#BDBDBD" dark @click="dialog = false">
                                Close
                            </v-btn>
                        </div>
                    </div>

                    <div class="" style="width: 100%; padding-bottom: 30px;">
                        <v-container>
                            <v-card :max-width="table" flat>
                                <v-data-table class="chk-exp" hide-default-footer :headers="headers" :items="items"
                                    :single-select="false" item-key="no" :items-per-page="20" show-select>
                                    <template v-slot:item.ino="{ item }">
                                        <span class="cursor-pointer font-13-5001" @click="
                                          $router.push('/export/invoice/invoicecontrol/')
                                        ">{{ item.ino }}</span>
                                    </template>
                                </v-data-table>
                                <Core-Page color="base_ex" isExportPage="true"></Core-Page>
                            </v-card>
                        </v-container>
                    </div>
                </div>

            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: "DialogShortItem",
    methods: {
        AddShortItem() {
            this.$emit('addShortItem', true);
        }
    },
    data() {
        return {
            dialog: false,
            headers: [
                {
                    text: "Invoice No",
                    align: "start",
                    sortable: false,
                    value: "ino",
                    width: "110",
                    class: "font-14-500",
                    cellClass: "font-12333"
                },
                {
                    text: "Items",
                    sortable: false,
                    align: "center",
                    value: "item",
                    width: "110",
                    class: "font-14-500",
                    align: "center"
                },
                {
                    text: "Description",
                    sortable: false,
                    align: "center",
                    value: "desctiption",
                    width: "200",
                    class: "font-14-500"
                },
                {
                    text: "Weight",
                    sortable: false,
                    align: "center",
                    value: "weight",
                    class: "font-14-500",
                    width: "50"
                },
                {
                    text: "Unit",
                    sortable: false,
                    value: "unit2",
                    width: "10",
                    class: "font-14-500",
                    align: "center"
                },
                {
                    text: "Quantity",
                    value: "quantity",
                    align: "center",
                    width: "105",
                    sortable: false,
                    class: "font-14-500"
                },
                {
                    text: "Unit",
                    sortable: false,
                    value: "unit",
                    width: "10",
                    class: "font-14-500",
                    align: "center"
                }
            ],
            items: [
                {
                    no: 1,
                    ino: "Test-00001",
                    item: "0001",
                    desctiption: "ลิปสติก ARTICLE 702134",
                    weight: "0.000",
                    unit2: "KGM",
                    quantity: "10.000",
                    unit: "C62"
                },
                {
                    no: 2,
                    ino: "Test-00001",
                    item: "0001",
                    desctiption: "ลิปสติก ARTICLE 702134",
                    weight: "0.000",
                    unit2: "KGM",
                    quantity: "10.000",
                    unit: "C62"
                },
                {
                    no: 3,
                    ino: "Test-00001",
                    item: "0001",
                    desctiption: "ลิปสติก ARTICLE 702134",
                    weight: "0.000",
                    unit2: "KGM",
                    quantity: "10.000",
                    unit: "C62"
                },
                {
                    no: 4,
                    ino: "Test-00001",
                    item: "0001",
                    desctiption: "ลิปสติก ARTICLE 702134",
                    weight: "0.000",
                    unit2: "KGM",
                    quantity: "10.000",
                    unit: "C62"
                },
                {
                    no: 5,
                    ino: "Test-00001",
                    item: "0001",
                    desctiption: "ลิปสติก ARTICLE 702134",
                    weight: "0.000",
                    unit2: "KGM",
                    quantity: "10.000",
                    unit: "C62"
                },
                {
                    no: 6,
                    ino: "Test-00001",
                    item: "0001",
                    desctiption: "ลิปสติก ARTICLE 702134",
                    weight: "0.000",
                    unit2: "KGM",
                    quantity: "10.000",
                    unit: "C62"
                },
                {
                    no: 8,
                    ino: "Test-00001",
                    item: "0001",
                    desctiption: "ลิปสติก ARTICLE 702134",
                    weight: "0.000",
                    unit2: "KGM",
                    quantity: "10.000",
                    unit: "C62"
                },
                {
                    no: 7,
                    ino: "Test-00001",
                    item: "0001",
                    desctiption: "ลิปสติก ARTICLE 702134",
                    weight: "0.000",
                    unit2: "KGM",
                    quantity: "10.000",
                    unit: "C62"
                }
            ],
        }
    },
};
</script>

<style scoped>
.chk-exp::v-deep(.v-input--selection-controls__input>.mdi-checkbox-marked) {
    color: #BB6BD9 !important;
}

</style>
    
