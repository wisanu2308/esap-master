<template>
  <center class="mt-4">
    <div class="flex items-center justify-center" style="width: 279px">
      <v-text-field @keydown.enter="focusNext" dense style="width: 46px" 
        class="font-14-300 m-2" solo label="1" :color="color" outlined></v-text-field>
      <v-combobox append-icon="" dense style="max-width: 70px; width: 70px" 
        class="font-14-300 ml-2" solo v-model="page" :color="color" outlined></v-combobox>
      <span class="f2 ml-2">Page :
        <template v-if="isExportPage">
          <span class="tbg2">1</span>
        </template>
        <template v-if="iscarmanifestPage">
          <span class="tbg4">1</span>
        </template>
        <template v-if="isfdapermitPage">
          <span class="tbg5">1</span>
        </template>
        <template v-else-if="isGoodsPage">
          <span class="tbg3">1</span>
        </template>
        <template v-else>
          <span class="tbg">1</span>
        </template>
        /2 - 15
      </span>
      <template>
        <template v-if="isExportPage">
          <img class="cursor-pointer ml-2" src="@/assets/images/svg/prv-export.svg" alt="" />
          <img class="cursor-pointer ml-2" src="@/assets/images/svg/next-export.svg" alt="" />
        </template>
        <template v-if="isCarmanifestPage">
          <img class="cursor-pointer ml-2" src="@/assets/images/svg/prv-export.svg" alt="" />
          <img class="cursor-pointer ml-2" src="@/assets/images/svg/next-export.svg" alt="" />
        </template>
        <template v-if="isFdapermitPage">
          <img class="cursor-pointer ml-2" src="@/assets/images/svg/prv-export.svg" alt="" />
          <img class="cursor-pointer ml-2" src="@/assets/images/svg/next-export.svg" alt="" />
        </template>
        <template v-else-if="isGoodsPage">      
          <img class="cursor-pointer ml-2" src="@/assets/images/svg/prv-goods.svg" alt="" />
          <img class="cursor-pointer ml-2" src="@/assets/images/svg/next-goods.svg" alt="" />
        </template>
        <template v-else>      
          <img class="cursor-pointer ml-2" src="@/assets/images/svg/prv.svg" alt="" />
          <img class="cursor-pointer ml-2" src="@/assets/images/svg/next.svg" alt="" />
        </template>
      </template>
      
    </div>
  </center>
</template>

<script>
export default {
  props: {
    color: {
      default: "base"
    },
    isExportPage: {
      default: false
    },
    isGoodsPage: {
      default: false
    }
  },
  data: () => {
    return {
      page: 25
    };
  },
};
</script>