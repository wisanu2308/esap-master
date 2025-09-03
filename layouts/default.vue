<template>
  <v-app>
    <v-main>
      <div class="bg-slate-100 smooth-scroll">
        <Nuxt />
      </div>
      <div class="bg-gray-100 flex justify-center py-4">
        <span class="text-gray-600 text-sm">
          Copyright © {{ new Date().getFullYear() }} ESAP. All rights reserved
        </span>
      </div>
    </v-main>

  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "DefaultLayout",

  data() {
    return {
      mobileMenuOpen: false,
      openMobileSubMenus: {}, // Track open state of mobile sub menus

      menuItems: [
        {
          title: "Home",
          link: "/",
          items: [],
        },
        {
          title: "Application",
          link: "/application",
          items: [],
        },
        {
          title: "Systems",
          link: "#systems",
          items: [
            {
              title: "Customer",
              link: "/customer",
              icon: "bi bi-person-plus",
            },
            { title: "Settings", link: "/settings", icon: "bi bi-gear" },
            {
              title: "Exchange Rate",
              link: "/exchange-rate",
              icon: "bi bi-currency-exchange",
            },
            { title: "Tariff Rate", link: "/tariff-rate", icon: "bi bi-calculator" },
          ],
        },
        {
          title: "Contact",
          link: "/contact",
          items: [],
        },
      ],
    };
  },

  computed: {
    headerClasses() {
      return "header-modern";
    },
    ...mapGetters(["isAuthenticated", "username", "userInfo"]),
    
    // Helper computed properties
    displayName() {
      return this.username || "User";
    },
    
    companyName() {
      return this.userInfo?.company || "Company";
    }
  },

  async mounted() {
    // Initialize auth state when component mounts
    if (this.isAuthenticated) {
      console.log("User is already authenticated");
    }
  },

  methods: {

    isActiveParent(item) {
      // Check if any sub-item is active
      if (item.items && item.items.length > 0) {
        return item.items.some((subItem) => this.$route.path === subItem.link);
      }
      return false;
    },

    toggleMobileSubMenu(index) {
      this.$set(this.openMobileSubMenus, index, !this.openMobileSubMenus[index]);
    },

    scrollToSection(selector, event) {
      event.preventDefault();
      const element = document.querySelector(selector);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    },

    logout() {
      // Handle logout using store action
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      }).catch((error) => {
        console.error("Logout error:", error);
        // Fallback logout
        this.$router.push("/login");
      });
    },
  },

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

/* Custom Tailwind utilities */
.transition-colors {
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

/* Alpine.js transitions */
[x-cloak] {
  display: none !important;
}

/* Custom hover effects for better UX */
.hover\:scale-105:hover {
  transform: scale(1.05);
}

/* Custom shadow utilities */
.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.shadow-md {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

/* Custom gradient utilities */
.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

.from-blue-600 {
  --tw-gradient-from: #2563eb;
  --tw-gradient-stops: var(--tw-gradient-from),
    var(--tw-gradient-to, rgba(37, 99, 235, 0));
}

.to-blue-700 {
  --tw-gradient-to: #1d4ed8;
}

.hover\:from-blue-700:hover {
  --tw-gradient-from: #1d4ed8;
  --tw-gradient-stops: var(--tw-gradient-from),
    var(--tw-gradient-to, rgba(29, 78, 216, 0));
}

.hover\:to-blue-800:hover {
  --tw-gradient-to: #1e40af;
}

/* Responsive utilities that might not be in older Tailwind versions */
@media (max-width: 767px) {
  .md\:hidden {
    display: none;
  }
}

@media (min-width: 768px) {
  .md\:flex {
    display: flex;
  }
  .md\:hidden {
    display: block;
  }
}

/* Ring utilities for focus states */
.ring-1 {
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
}

.ring-black {
  --tw-ring-color: rgba(0, 0, 0, 1);
}

.ring-opacity-5 {
  --tw-ring-opacity: 0.05;
}

.focus\:ring-2:focus {
  box-shadow: 0 0 0 2px var(--tw-ring-color, rgba(59, 130, 246, 0.5));
}

.focus\:ring-inset:focus {
  box-shadow: inset 0 0 0 2px var(--tw-ring-color, rgba(59, 130, 246, 0.5));
}

.focus\:ring-blue-500:focus {
  --tw-ring-color: rgba(59, 130, 246, 1);
}

/* Z-index utilities */
.z-10 {
  z-index: 10;
}

.z-50 {
  z-index: 50;
}

/* Additional custom styles for specific components */
.v-main {
  background-color: #f9fafb; /* bg-gray-50 equivalent */
}

/* Ensure proper spacing for fixed header */
.pt-16 {
  padding-top: 4rem;
}

/* Custom styles for better mobile experience */
@media (max-width: 640px) {
  .h-16 {
    height: 3.5rem;
  }

  .pt-16 {
    padding-top: 3.5rem;
  }
}
</style>
