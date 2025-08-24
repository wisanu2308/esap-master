<template>
  <div :class="headclass">
    <Core-ButtonHead :block="block" :class="inclass" name="XML" :icon="require('@/assets/images/svg/menu/xml.svg')">
    </Core-ButtonHead>
    <Core-ButtonHead :block="block" :class="inclass" name="Message"
      :icon="require('@/assets/images/svg/menu/message.svg')"></Core-ButtonHead>
    <Core-ButtonHead :block="block" :class="inclass" name="Receive" :icon="'fa-solid fa-clipboard-check'"
      color="#F1B44C"></Core-ButtonHead>
    <Core-ButtonHead :block="block" :class="inclass" name="Validate" :icon="'fa-solid fa-list-check'" color="#6F9CDF">
    </Core-ButtonHead>
    <Core-ButtonHead :block="block" :class="inclass" name="Send" :icon="'fa-solid fa-paper-plane'"></Core-ButtonHead>
    <Core-ButtonHead :block="block" :class="inclass" name="Print" :icon="'fa-solid fa-print'" color="#FF7640">
    </Core-ButtonHead>
    <div :class="divclass" @click="$router.go(-1)">
      <Core-ButtonHead :block="block" name="Cancel" :icon="'fa-solid fa-circle-xmark'"></Core-ButtonHead>
    </div>
    <Core-ButtonHead :block="block" :btnsave="true" optclass="ml-2" :class="inclass" width="142px"
      otherclass="text-white" color="#34C38F" name="Save" :icon="'fa-solid fa-square-check'"></Core-ButtonHead>
  </div>
</template>

<script>
export default {
  name: "HeaderMenu1",
  props: {
    block: {
      default: false
    },
    headclass: {
      default: ""
    },
    inclass: {
      default: "font-14-400"
    },
    divclass: {
      default: ""
    },
  }
};
</script>
