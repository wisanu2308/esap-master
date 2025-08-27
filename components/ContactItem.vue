<template>
  <div class="flex items-center gap-3">
    <div
      class="text-center text-xl px-3 py-2 rounded-full text-cyan-200 bg-cyan-200/50"
    >
      <i :class="iconClass" class="flex-shrink-0"></i>
    </div>
    <div class="flex flex-col items-start">
      <div>{{ title }}</div>
      <div class="text-nowrap">{{ value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    iconClass: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
};
</script>
