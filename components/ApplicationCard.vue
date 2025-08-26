<template>
  <div
    class="w-full bg-white border border-gray-200 rounded-lg cursor-pointer transition-all transform duration-400 hover:border-blue-500 p-10"
    @click="openApplication(url)"
  >
    <!-- Card Image -->
    <div class="w-3/5 mx-auto">
      <img
        :src="image"
        :alt="title"
        class="w-full w-full rounded-lg object-contain"
      />
    </div>

    <!-- Card Content -->
    <div class="p-5 flex-grow flex flex-col items-center">
      <h3
        class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3 line-clamp-2"
      >
        {{ title }}
      </h3>
      <p
        class="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow line-clamp-3"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ApplicationCard",
  props: {
    image: String,
    title: String,
    description: String,
    url: String,
  },
  data() {
    return {};
  },
  methods: {
    openApplication(url) {
      window.open(url, "_blank");
    },
  },
};
</script>
