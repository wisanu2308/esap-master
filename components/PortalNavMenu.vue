<template>
  <div class="bg-white shadow fixed top-0 left-0 right-0 z-50">
    <div class="lg:container mx-auto px-4 sm:px-6 lg:px-8">
      <nav class="flex items-center justify-between h-16">
        <!-- Logo -->
        <a
          href="/"
          class="flex items-center gap-3 text-cyan-300 hover:text-cyan-700 transition-colors"
        >
          <img src="/img/LogoESAP.png" alt="ESAP Logo" class="h-10 w-auto" />
        </a>

        <!-- Mobile menu toggle -->
        <button
          class="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-cyan-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
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
        <div class="hidden lg:flex items-center gap-8">
          <div class="flex items-baseline gap-4">
            <!-- Dynamic Menu Items -->
            <div v-for="(item, index) in menuItems" :key="index">
              <!-- Menu with sub-items (dropdown) -->
              <div
                v-if="item.items && item.items.length > 0"
                class="relative"
                @mouseenter="showDropdown(index)"
                @mouseleave="scheduleHideDropdown(index)"
              >
                <NuxtLink
                  :to="item.link"
                  class="text-gray-700 hover:text-cyan-300 px-3 py-2 text-sm font-thin transition-colors flex items-center tracking-wide"
                  :class="{ 'text-cyan-600': isActiveParent(item) }"
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
                  v-show="openDropdowns[index]"
                  @mouseenter="cancelHideDropdown(index)"
                  @mouseleave="scheduleHideDropdown(index)"
                  class="absolute left-0 mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 tracking-wide"
                >
                  <div class="py-1">
                    <NuxtLink
                      v-for="(subItem, subIndex) in item.items"
                      :key="subIndex"
                      :to="subItem.link"
                      class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-300 transition-colors"
                    >
                      <i
                        v-if="subItem.icon"
                        :class="subItem.icon + ' mr-2'"
                      ></i>
                      {{ subItem.title }}
                    </NuxtLink>
                  </div>
                </div>
              </div>

              <!-- Menu without sub-items -->
              <NuxtLink
                v-else
                :to="item.link"
                class="text-gray-700 hover:text-cyan-300 px-3 py-2 text-sm font-thin transition-colors flex items-center tracking-wide"
                :class="{ 'text-cyan-600': $route.path === item.link }"
              >
                {{ item.title }}
              </NuxtLink>
            </div>
          </div>

          <!-- User Auth Section -->
          <div class="relative ml-3">
            <button
              @click="userDropdownOpen = !userDropdownOpen"
              class="bg-gradient-to-r from-cyan-300 to-cyan-700 text-white px-4 py-2 rounded-full text-sm font-thin hover:from-cyan-700 hover:to-cyan-800 transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              <i class="bi bi-person-circle"></i>
              <span>{{ displayName }}</span>
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
              v-show="userDropdownOpen"
              @click.away="userDropdownOpen = false"
              class="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
            >
              <div class="py-1">
                <div
                  class="px-4 py-2 text-xs text-gray-500 border-b border-gray-200 bg-cyan-50"
                >
                  <div class="font-medium text-cyan-600">
                    {{ companyName || "Company Name" }}
                  </div>
                </div>
                <a
                  href="#"
                  class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-300 transition-colors"
                >
                  <i class="bi bi-person mr-2"></i>Profile
                </a>
                <a
                  href="#"
                  class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-300 transition-colors"
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
        <div class="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
          <!-- Dynamic Mobile Menu Items -->
          <div v-for="(item, index) in menuItems" :key="index">
            <!-- Menu with sub-items -->
            <div v-if="item.items && item.items.length > 0" class="space-y-1">
              <button
                @click="toggleMobileSubMenu(index)"
                class="w-full text-left flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cyan-300 hover:bg-cyan-50 transition-colors"
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
              <div v-show="openMobileSubMenus[index]" class="space-y-1">
                <NuxtLink
                  v-for="(subItem, subIndex) in item.items"
                  :key="subIndex"
                  :to="subItem.link"
                  @click="mobileMenuOpen = false"
                  class="block pl-6 pr-3 py-2 text-sm text-gray-600 hover:text-cyan-300 hover:bg-cyan-50 transition-colors"
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
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cyan-300 hover:bg-cyan-50 transition-colors"
              :class="{ 'text-cyan-300 bg-cyan-50': $route.path === item.link }"
            >
              {{ item.title }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PortalNavMenu",

  data() {
    return {
      mobileMenuOpen: false,
      openMobileSubMenus: {},
      openDropdowns: {},
      userDropdownOpen: false,
      dropdownTimeouts: {},

      menuItems: [
        {
          title: "Home",
          link: "/",
          items: [],
        },
        {
          title: "Application",
          link: "/",
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
            {
              title: "Tariff Rate",
              link: "/tariff-rate",
              icon: "bi bi-calculator",
            },
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
    ...mapGetters(["isAuthenticated", "user", "customerName"]),

    // Helper computed properties
    displayName() {
      // แสดงชื่อจากข้อมูลที่ login มา
      if (this.user) {
        return this.user.customerName || this.user.UserLogin || "User";
      }
      return "Guest";
    },

    companyName() {
      // แสดงชื่อบริษัท/Customer Name
      if (this.user) {
        return this.user.customerName || this.user.CustomerName || "Company";
      }
      return "Guest Company";
    },

    userInfo() {
      // ข้อมูลผู้ใช้ทั้งหมด
      return this.user || null;
    },
  },

  async mounted() {
    // Initialize auth state when component mounts
    if (this.isAuthenticated) {
      console.log("User is authenticated:", this.user);
      console.log("Display name:", this.displayName);
    }
  },

  methods: {
    isActiveParent(item) {
      if (item.items && item.items.length > 0) {
        return item.items.some((subItem) => this.$route.path === subItem.link);
      }
      return false;
    },

    showDropdown(index) {
      if (this.dropdownTimeouts[index]) {
        clearTimeout(this.dropdownTimeouts[index]);
        delete this.dropdownTimeouts[index];
      }
      this.$set(this.openDropdowns, index, true);
    },

    scheduleHideDropdown(index) {
      this.dropdownTimeouts[index] = setTimeout(() => {
        this.$set(this.openDropdowns, index, false);
        delete this.dropdownTimeouts[index];
      }, 150);
    },

    cancelHideDropdown(index) {
      if (this.dropdownTimeouts[index]) {
        clearTimeout(this.dropdownTimeouts[index]);
        delete this.dropdownTimeouts[index];
      }
    },

    toggleMobileSubMenu(index) {
      this.$set(
        this.openMobileSubMenus,
        index,
        !this.openMobileSubMenus[index]
      );
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
      this.$store
        .dispatch("logout")
        .then(() => {
          this.$router.push("/login");
        })
        .catch((error) => {
          console.error("Logout error:", error);
          this.$router.push("/login");
        });
    },
  },

  beforeDestroy() {
    Object.values(this.dropdownTimeouts).forEach((timeout) => {
      clearTimeout(timeout);
    });
  },
};
</script>

<style>
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

.from-cyan-300 {
  --tw-gradient-from: #2563eb;
  --tw-gradient-stops: var(--tw-gradient-from),
    var(--tw-gradient-to, rgba(37, 99, 235, 0));
}

.to-cyan-700 {
  --tw-gradient-to: #1d4ed8;
}

.hover\:from-cyan-700:hover {
  --tw-gradient-from: #1d4ed8;
  --tw-gradient-stops: var(--tw-gradient-from),
    var(--tw-gradient-to, rgba(29, 78, 216, 0));
}

.hover\:to-cyan-800:hover {
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

.focus\:ring-cyan-500:focus {
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
