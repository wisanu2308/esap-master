<template>
  <div class="text-center font-['Raleway'] relative mb-10">
    <div
      class="relative z-10 text-slate-200 text-5xl font-semibold font-wider py-2 px-4 rounded-full uppercase tracking-wide translate-y-8"
    >
      {{ title }}
    </div>
    <div
      class="relative z-20 uppercase text-slate-600 text-3xl font-semibold mb-4 tracking-wide"
    >
      {{ title }}
    </div>
    <div class="font-thin">
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
};
</script>
