<template>
  <div :class="headclass">
    <Core-ButtonHead :block="block" :class="inclass" name="Receive" color="#F1B44C"
      :icon="'fa-solid fa-clipboard-check'"></Core-ButtonHead>
    <Core-ButtonHead :block="block" :class="inclass" name="Send" :icon="'fa-solid fa-paper-plane'" color="#34C38F">
    </Core-ButtonHead>
    <Core-ButtonHead :block="block" :class="inclass" name="Print" :icon="'fa-solid fa-print'" color="#FF7640">
    </Core-ButtonHead>
    <Core-ButtonHead :block="block" :class="inclass" name="Export" :icon="'fa-solid fa-file-arrow-up'" color="#50A5F1">
    </Core-ButtonHead>
    <Core-ButtonHead :block="block" :class="inclass" name="Import File" :icon="'fa-solid fa-file-arrow-down'"
      color="#46BFCF"></Core-ButtonHead>
    <Core-ButtonHead :block="block" :class="inclass" name="Delete" :icon="'fa-solid fa-trash-can'" color="#F46A6A">
    </Core-ButtonHead>
    <Core-ButtonHead :block="block" :class="inclass" name="Copy" :icon="'fa-solid fa-copy'" color="#74788D">
    </Core-ButtonHead>
    <div :class="divclass" @click="$router.push('/import/')">
      <Core-ButtonHead :block="block" optclass="ml-2" :btnsave="true" :class="inclass" otherclass="btextS"
        color="#4F4BFF" bgcolor="#4F4BFF" name="Add New" :icon="'fa-solid fa-plus'"></Core-ButtonHead>
    </div>
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
      default: ""
    },
    divclass: {
      default: ""
    },
  }
};
</script>