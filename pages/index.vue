<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
    <main class="container mx-auto px-4">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full mb-4">
          Application
        </span>
        <h2 class="text-4xl font-bold text-gray-800 mb-4">Applications</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          A program for everyone to use to meet their needs and maximum benefit.
        </p>
      </div>

      <!-- Application Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div
          v-for="(item, index) in appItems"
          :key="index"
          class="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
        >
          <!-- Card Content -->
          <div class="text-center h-full flex flex-col p-10">
            <!-- Image Container -->
            <div class="mb-6 flex justify-center">
              <div
                class="rounded-2xl flex items-center justify-center "
              >
                <img :src="item.image" alt="" class="object-contain object-center w-full h-full rounded-2xl" />
              </div>
            </div>

            <!-- Title -->
            <h3 class="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
              {{ item.title }}
            </h3>

            <!-- Description -->
            <p class="text-gray-600 text-sm leading-relaxed flex-grow mb-6">
              {{ item.description }}
            </p>

            <!-- Link -->
            <NuxtLink
              :to="item.url"
              :target="item.external ? '_blank' : '_self'"
              class="absolute inset-0 z-10"
              aria-label="item.title"
            >
              <span class="sr-only">{{ item.title }}</span>
            </NuxtLink>

            <!-- Hover Effect Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>

          <!-- Highlighted Border for Featured Item -->
          <div 
            v-if="index === 1" 
            class="absolute inset-0 rounded-3xl border-4 border-blue-400 pointer-events-none"
          ></div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  middleware: "auth",
  data() {
    return {
      isScrolled: false,
      appItems: [
        {
          title: "Import Declaration",
          description:
            "A program for sending information on importing goods into Thailand to the Customs Department.",
          image: require(`~/assets/img/Import.png`),
          url: "/import/",
          external: true,
        },
        {
          title: "ESAP Export Dec.",
          description:
            "A program for sending information on exporting goods take out Thailand to the Customs Department.",
          image: require(`~/assets/img/Export.png`),
          url: "/export/",
          external: true,
        },
        {
          title: "ESAP Goods Control",
          description:
            "A program for creating a systematic shipping invoice in the form of electronic export without documents and Issuing GCL documents.",
          image: require(`~/assets/img/Goods.png`),
          url: "/goods/",
          external: true,
        },
        {
          title: "ESAP FDA Restricted Goods",
          description:
            "Data transmission program, license, agency, Food and Drug Administration.",
          image: require(`~/assets/img/rgp.png`),
          url: "/fdapermit/",
          external: true,
        },
        {
          title: "ESAP Car Manifest",
          description:
            "Vehicle movement data transmission program for entering and leaving the Kingdom of Thailand.",
          image: require(`~/assets/img/car.png`),
          url: "/carmanifest/",
          external: true,
        },
        {
          title: "ESAP EXPRESS Massage",
          description:
            "An express cargo data transmission program for import and export into the Kingdom of Thailand.",
          image: require(`~/assets/img/Express.png`),
          url: "/express/",
          external: true,
        },
        {
          title: "ESAP Transit,Transsipment Doc.",
          description:
            "Cross-border goods data transmission program for import and export into the Kingdom of Thailand.",
          image: require(`~/assets/img/Transit.png`),
          url: "/transit/",
          external: true,
        },
      ],
    };
  },
  computed: {
    headerClasses() {
      return {
        header: true,
        "d-flex": true,
        "align-items-center": true,
        "sticky-top": true,
        scrolled: this.isScrolled,
      };
    },
  },

  mounted() {
    // Check login status on component mount
    if (process.client) {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      if (isLoggedIn !== "true") {
        this.$router.push("/");
      }

      // Initialize AOS animations if available
      if (typeof AOS !== "undefined") {
        AOS.init({
          duration: 1000,
          easing: "ease-in-out",
          once: true,
          mirror: false,
        });
      }

      // Initialize scroll top button functionality
      this.initScrollTop();

      // Initialize mobile navigation
      this.initMobileNav();

      // Initialize preloader
      this.initPreloader();

      // Add scroll event listener for header effect
      window.addEventListener("scroll", this.handleScroll);
    }
  },
  methods: {
    getCardClasses(index) {
      // Highlight the Export card (index 1) with border
      return {
        'ring-4 ring-blue-400 ring-opacity-50': index === 1,
      };
    },

    getIconClasses(index) {
      const colorClasses = [
        'bg-gradient-to-br from-orange-400 to-orange-500', // Import - Orange
        'bg-gradient-to-br from-purple-400 to-purple-500', // Export - Purple  
        'bg-gradient-to-br from-purple-500 to-purple-600', // Goods - Purple
        'bg-gradient-to-br from-green-400 to-green-500',   // RGP - Green
        'bg-gradient-to-br from-yellow-400 to-yellow-500', // Car - Yellow
        'bg-gradient-to-br from-red-500 to-red-600',       // Express - Red
        'bg-gradient-to-br from-blue-400 to-blue-500',     // Transit - Blue
      ];
      
      return colorClasses[index] || 'bg-gradient-to-br from-gray-400 to-gray-500';
    },

    getIconText(title) {
      const iconMap = {
        'Import Declaration': 'Im',
        'ESAP Export Dec.': 'Ex',
        'ESAP Goods Control': 'Goods',
        'ESAP FDA Restricted Goods': 'RGP',
        'ESAP Car Manifest': 'Car',
        'ESAP EXPRESS Massage': 'Express',
        'ESAP Transit,Transsipment Doc.': 'Transit'
      };
      
      return iconMap[title] || 'App';
    },

    logout() {
      if (process.client) {
        localStorage.removeItem("isLoggedIn");
        window.location.href = "/";
      }
    },

    initScrollTop() {
      if (process.client) {
        const scrollTop = document.querySelector("#scroll-top");
        if (scrollTop) {
          const toggleScrollTop = () => {
            if (window.scrollY > 100) {
              scrollTop.classList.add("active");
            } else {
              scrollTop.classList.remove("active");
            }
          };

          window.addEventListener("scroll", toggleScrollTop);
          scrollTop.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          });
        }
      }
    },

    initMobileNav() {
      if (process.client) {
        const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
        if (mobileNavToggle) {
          mobileNavToggle.addEventListener("click", (e) => {
            e.preventDefault();
            document
              .querySelector("body")
              .classList.toggle("mobile-nav-active");
            mobileNavToggle.classList.toggle("bi-list");
            mobileNavToggle.classList.toggle("bi-x");
          });
        }

        // Close mobile nav when clicking on links
        document.querySelectorAll("#navmenu a").forEach((navmenu) => {
          navmenu.addEventListener("click", () => {
            if (document.querySelector(".mobile-nav-active")) {
              document
                .querySelector("body")
                .classList.remove("mobile-nav-active");
              if (mobileNavToggle) {
                mobileNavToggle.classList.toggle("bi-list");
                mobileNavToggle.classList.toggle("bi-x");
              }
            }
          });
        });

        // Handle dropdown toggles
        document
          .querySelectorAll(".navmenu .toggle-dropdown")
          .forEach((navmenu) => {
            navmenu.addEventListener("click", function (e) {
              e.preventDefault();
              this.parentNode.classList.toggle("active");
              this.parentNode.nextElementSibling.classList.toggle(
                "dropdown-active"
              );
              e.stopImmediatePropagation();
            });
          });
      }
    },

    initPreloader() {
      if (process.client) {
        const preloader = document.querySelector("#preloader");
        if (preloader) {
          window.addEventListener("load", () => {
            preloader.remove();
          });
        }
      }
    },

    // Handle header scroll effect
    handleScroll() {
      if (process.client) {
        this.isScrolled = window.scrollY > 100;
      }
    },

    // Smooth scroll to section
    scrollToSection(sectionId, event) {
      if (event) {
        event.preventDefault();
      }

      if (process.client) {
        const element = document.querySelector(sectionId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.offsetTop;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    },
  },

  beforeDestroy() {
    // Clean up event listeners
    if (process.client) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  },
};
</script>

<style scoped>
/* Custom animations and enhancements for Tailwind */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.group:hover .icon-container {
  animation: float 2s ease-in-out infinite;
}

/* Enhanced shadow for cards */
.group:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Smooth gradient transitions */
.bg-gradient-to-br {
  background-size: 200% 200%;
  transition: all 0.3s ease;
}

.group:hover .bg-gradient-to-br {
  background-position: right center;
}

/* Typography enhancements */
.text-4xl {
  letter-spacing: -0.025em;
}

/* Card border radius enhancement */
.rounded-3xl {
  border-radius: 1.5rem;
}

/* Icon container enhancement */
.icon-container {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.group:hover .icon-container {
  transform: scale(1.1) rotate(-5deg);
}

/* Responsive grid adjustments */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Enhanced focus states for accessibility */
.group:focus-within {
  outline: 2px solid #3B82F6;
  outline-offset: 2px;
}

/* Loading state placeholder */
.loading-skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
</style>
