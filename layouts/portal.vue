<template>
  <div class="">
    <PortalNavMenu />
    <div class="min-h-screen py-32">
      <Nuxt class="container mx-auto px-4 pb-4" />
    </div>
    <!-- <v-main>
      <div class="pt-16 bg-slate-100 smooth-scroll">
        <Nuxt />
      </div>
    </v-main> -->
    <div class="bg-gray-100 flex justify-center py-4">
      <span class="text-gray-600 text-sm">
        Copyright © {{ new Date().getFullYear() }} ESAP. All rights reserved
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",

  head() {
    return {
      title: "ESAP - Electronic Single Administrative Platform",
      link: [
        { rel: "icon", href: "/assets/img/ESAPFavicon.png" },
        { rel: "apple-touch-icon", href: "/assets/img/LogoESAP.png" },
        // Tailwind CSS
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css",
        },
        // Google Fonts
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap",
        },
        // Bootstrap Icons (for icons only)
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css",
        },
      ],
      script: [
        // Alpine.js for dropdown functionality
        {
          src: "https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js",
          defer: true,
        },
      ],
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600&display=swap");

* {
  font-family: "Kanit", sans-serif;
}
</style>
