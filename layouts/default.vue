<template>
  <v-app>
    <header
      id="header"
      class="bg-white shadow-lg fixed top-0 left-0 right-0 z-50"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex items-center justify-between h-16">
          <!-- Logo -->
          <a
            href="/"
            class="flex items-center space-x-3 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <img
              src="/assets/img/LogoESAP.png"
              alt="ESAP Logo"
              class="h-10 w-auto"
            />
            <span class="text-xl font-semibold">ESAP</span>
          </a>

          <!-- Mobile menu toggle -->
          <button
            class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            type="button"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <!-- Desktop Navigation Menu -->
          <div class="hidden md:flex items-center space-x-8">
            <div class="flex items-baseline space-x-4">
              <!-- Dynamic Menu Items -->
              <div v-for="(item, index) in menuItems" :key="index">
                <!-- Menu with sub-items (dropdown) -->
                <div
                  v-if="item.items && item.items.length > 0"
                  class="relative"
                  x-data="{ open: false }"
                  @mouseenter="$refs.dropdown.style.display = 'block'"
                  @mouseleave="$refs.dropdown.style.display = 'none'"
                >
                  <NuxtLink
                    :to="item.link"
                    class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                    :class="{ 'bg-blue-50 text-blue-600': isActiveParent(item) }"
                  >
                    {{ item.title }}
                    <svg
                      class="ml-1 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </NuxtLink>

                  <!-- Dropdown Menu -->
                  <div
                    ref="dropdown"
                    class="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                    style="display: none;"
                  >
                    <div class="py-1">
                      <NuxtLink
                        v-for="(subItem, subIndex) in item.items"
                        :key="subIndex"
                        :to="subItem.link"
                        class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        <i v-if="subItem.icon" :class="subItem.icon + ' mr-2'"></i>
                        {{ subItem.title }}
                      </NuxtLink>
                    </div>
                  </div>
                </div>

                <!-- Menu without sub-items -->
                <NuxtLink
                  v-else
                  :to="item.link"
                  class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  :class="{ 'bg-blue-50 text-blue-600': $route.path === item.link }"
                >
                  {{ item.title }}
                </NuxtLink>
              </div>
            </div>

            <!-- Sign Out Button -->
            <button
              @click="logout"
              class="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Sign Out
            </button>

            <!-- User Auth Section -->
            <div class="relative ml-3" x-data="{ open: false }">
              <button
                @click="open = !open"
                class="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center space-x-2 shadow-md hover:shadow-lg"
              >
                <i class="bi bi-person-circle"></i>
                <span>{{ username || "User" }}</span>
                <svg
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                x-show="open"
                @click.away="open = false"
                x-transition:enter="transition ease-out duration-100"
                x-transition:enter-start="transform opacity-0 scale-95"
                x-transition:enter-end="transform opacity-100 scale-100"
                x-transition:leave="transition ease-in duration-75"
                x-transition:leave-start="transform opacity-100 scale-100"
                x-transition:leave-end="transform opacity-0 scale-95"
                class="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
              >
                <div class="py-1">
                  <div
                    class="px-4 py-2 text-xs text-gray-500 border-b border-gray-200 bg-blue-50"
                  >
                    <div class="font-medium text-blue-600">
                      {{ companyName || "Company Name" }}
                    </div>
                  </div>
                  <a
                    href="/profile"
                    class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <i class="bi bi-person mr-2"></i>Profile
                  </a>
                  <a
                    href="/settings"
                    class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <i class="bi bi-gear mr-2"></i>Settings
                  </a>
                  <hr class="my-1 border-gray-200" />
                  <a
                    href="#"
                    @click="logout"
                    class="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <i class="bi bi-box-arrow-right mr-2"></i>Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <!-- Mobile Navigation Menu -->
        <div
          class="md:hidden"
          :class="{ block: mobileMenuOpen, hidden: !mobileMenuOpen }"
        >
          <div
            class="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200"
          >
            <!-- Dynamic Mobile Menu Items -->
            <div v-for="(item, index) in menuItems" :key="index">
              <!-- Menu with sub-items -->
              <div v-if="item.items && item.items.length > 0" class="space-y-1">
                <button
                  @click="toggleMobileSubMenu(index)"
                  class="w-full text-left flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  <span>{{ item.title }}</span>
                  <svg
                    class="h-4 w-4 transform transition-transform"
                    :class="{ 'rotate-180': openMobileSubMenus[index] }"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <!-- Sub Menu Items -->
                <div
                  v-show="openMobileSubMenus[index]"
                  x-collapse
                  class="space-y-1"
                >
                  <NuxtLink
                    v-for="(subItem, subIndex) in item.items"
                    :key="subIndex"
                    :to="subItem.link"
                    @click="mobileMenuOpen = false"
                    class="block pl-6 pr-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    <i v-if="subItem.icon" :class="subItem.icon + ' mr-2'"></i>
                    {{ subItem.title }}
                  </NuxtLink>
                </div>
              </div>

              <!-- Menu without sub-items -->
              <NuxtLink
                v-else
                :to="item.link"
                @click="mobileMenuOpen = false"
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                :class="{ 'text-blue-600 bg-blue-50': $route.path === item.link }"
              >
                {{ item.title }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </header>

    <v-main>
      <div class="pt-16">
        <Nuxt />
      </div>
    </v-main>

    <v-footer app class="bg-gray-100 flex justify-center py-4">
      <span class="text-gray-600 text-sm">
        Copyright © {{ new Date().getFullYear() }} ESAP. All rights reserved
      </span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",

  data() {
    return {
      username: "John Doe", // ดึงจาก store หรือ API
      companyName: "ABC Company", // ดึงจาก store หรือ API
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
              title: "Add Customer",
              link: "/customer/add",
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
  },

  async mounted() {
    // Initialize auth state จาก localStorage เมื่อ app เริ่มต้น
    if (this.$store && this.$store.dispatch) {
      await this.$store.dispatch("initAuth");
    }
    // ดึงข้อมูล user
    this.loadUserData();
  },

  methods: {
    loadUserData() {
      // ดึงข้อมูล user จาก store หรือ localStorage
      try {
        const user =
          (this.$store && this.$store.state && this.$store.state.user) ||
          JSON.parse(localStorage.getItem("user") || "{}");
        this.username = user.name || "User";
        this.companyName = user.company || "Company";
      } catch (error) {
        console.warn("Error loading user data:", error);
        this.username = "User";
        this.companyName = "Company";
      }
    },

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
      // Handle logout
      try {
        if (this.$store && this.$store.dispatch) {
          this.$store.dispatch("logout");
        }
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        this.$router.push("/login");
      } catch (error) {
        console.warn("Error during logout:", error);
        // Fallback logout
        localStorage.clear();
        window.location.href = "/login";
      }
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
