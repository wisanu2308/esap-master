<template>
  <div>
    <!-- Section Header -->
    <PageTitle
      title="Application"
      description="A platform for managing applications"
    />

    <div class="container-fluid">
      <div class="w-full md:w-3/4 mx-auto grid grid-cols-3 gap-4">
        <ApplicationCard
          v-for="(item, index) in applicationItems"
          :key="index"
          :image="
            applicationFiltered.find(
              (icon) => icon.code === item.ApplicationCode
            )?.src || '/img/logo.png'
          "
          :title="item.ApplicationName"
          :description="item.OwnerName"
          :url="
            applicationFiltered.find(
              (icon) => icon.code === item.ApplicationCode
            )?.appUrl || '#'
          "
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "portal",
  name: "IndexPage",
  middleware: "auth",
  data() {
    return {
      isScrolled: false,
      applicationFiltered: [
        {
          code: "ESAPImport",
          src: "/img/Import.png",
          appUrl: "/import/welcomeimport",
        },
        {
          code: "ESAPExport",
          src: "/img/Export.png",
          appUrl: "/export/welcomeexport",
        },
        {
          code: "ESAPGoods",
          src: "/img/Goods.png",
          appUrl: "/goods/welcomegoods",
        },
        {
          code: "ESAPCarManifest",
          src: "/img/Car.png",
          appUrl: "/carmanifest/welcomecar",
        },
        {
          code: "ESAPTransit",
          src: "/img/Transit.png",
          appUrl: "#",
        },
        {
          code: "ESAPRGP",
          src: "/img/RGP.png",
          appUrl: "/fdapermit/welcomefda",
        },
        {
          code: "ESAPExpress",
          src: "/img/Express.png",
          appUrl: "#",
        },
        {
          code: "ESAPAirManifest",
          src: "/img/logo.png",
          appUrl: "#",
        },
      ],
      applicationItems: [
        {
          id: 1,
          ApplicationCode: "ESAPImport",
          ApplicationName: "Import Declaration System",
          Version: "1.0.0.0",
          OwnerName: "EDI SERVICE APPLICATION PROVIDER CO.,LTD.",
          StartDate: "2025-08-26T02:17:40.938Z",
          EndDate: "9999-09-08T17:00:00.000Z",
          Active: true,
        },
        {
          id: 2,
          ApplicationCode: "ESAPExport",
          ApplicationName: "Export Declaration System",
          Version: "1.0.0.0",
          OwnerName: "EDI SERVICE APPLICATION PROVIDER CO.,LTD.",
          StartDate: "2025-08-26T02:17:40.938Z",
          EndDate: "9999-09-08T17:00:00.000Z",
          Active: true,
        },
        {
          id: 3,
          ApplicationCode: "ESAPGoods",
          ApplicationName: "Goods Transition",
          Version: "1.0.0.0",
          OwnerName: "EDI SERVICE APPLICATION PROVIDER CO.,LTD.",
          StartDate: "2025-08-26T02:17:40.938Z",
          EndDate: "9999-09-08T17:00:00.000Z",
          Active: true,
        },
        {
          id: 4,
          ApplicationCode: "ESAPCarManifest",
          ApplicationName: "Car Manifest System",
          Version: "1.0.0.0",
          OwnerName: "EDI SERVICE APPLICATION PROVIDER CO.,LTD.",
          StartDate: "2025-08-26T02:17:40.938Z",
          EndDate: "9999-09-08T17:00:00.000Z",
          Active: true,
        },
        {
          id: 5,
          ApplicationCode: "ESAPTransit",
          ApplicationName: "Transit and Transshipment System",
          Version: "1.0.0.0",
          OwnerName: "EDI SERVICE APPLICATION PROVIDER CO.,LTD.",
          StartDate: "2025-08-26T02:17:40.938Z",
          EndDate: "9999-09-08T17:00:00.000Z",
          Active: true,
        },
        {
          id: 6,
          ApplicationCode: "ESAPRGP",
          ApplicationName: "Restricted Goods Permit",
          Version: "1.0.0.0",
          OwnerName: "EDI SERVICE APPLICATION PROVIDER CO.,LTD.",
          StartDate: "2025-08-26T02:17:40.938Z",
          EndDate: "9999-09-08T17:00:00.000Z",
          Active: true,
        },
        {
          id: 7,
          ApplicationCode: "ESAPExpress",
          ApplicationName: "Express Cargo System",
          Version: "1.0.0.0",
          OwnerName: "EDI SERVICE APPLICATION PROVIDER CO.,LTD.",
          StartDate: "2025-08-26T02:17:40.938Z",
          EndDate: "9999-09-08T17:00:00.000Z",
          Active: true,
        },
        {
          id: 8,
          ApplicationCode: "ESAPAirManifest",
          ApplicationName: "Air Manifest System",
          Version: "1.0.0.1",
          OwnerName: "EDI SERVICE APPLICATION PROVIDER CO.,LTD.",
          StartDate: "2025-08-26T02:17:40.938Z",
          EndDate: "9999-09-08T17:00:00.000Z",
          Active: true,
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
    // ApplicationCards event handlers
    handleCardClick(item) {
      console.log("Card clicked:", item.title);

      // Show loading state
      this.$set(item, "loading", true);

      // Simulate loading delay
      setTimeout(() => {
        this.$set(item, "loading", false);

        // Navigate if not disabled
        if (!item.disabled && item.url) {
          if (item.external) {
            window.open(item.url, "_blank");
          } else {
            this.$router.push(item.url);
          }
        }
      }, 1000);
    },

    handleActionClick(item) {
      console.log("Action clicked:", item.title);

      // Show notification for disabled items
      if (item.disabled) {
        this.$toast.info(`${item.title} is currently under maintenance`);
        return;
      }

      // Handle different action types
      if (item.status === "pending") {
        this.$toast.warning(`${item.title} is pending approval`);
        return;
      }

      this.handleCardClick(item);
    },

    handleMenuAction({ item, action }) {
      console.log("Menu action:", action, "for item:", item.title);

      switch (action) {
        case "info":
          this.showApplicationInfo(item);
          break;
        case "bookmark":
          this.$toast.success(`${item.title} has been bookmarked`);
          break;
        case "remove-bookmark":
          this.$toast.info(`${item.title} has been removed from bookmarks`);
          break;
        default:
          console.log("Unknown action:", action);
      }
    },

    handleShowInfo(item) {
      // Show detailed information about the application
      this.$dialog.notify.info({
        title: item.title,
        text: `
          <div>
            <p><strong>Description:</strong> ${item.description}</p>
            <p><strong>Status:</strong> ${this.getStatusText(item.status)}</p>
            <p><strong>Type:</strong> ${
              item.external ? "External" : "Internal"
            }</p>
            ${
              item.featured
                ? "<p><strong>Featured Application</strong></p>"
                : ""
            }
          </div>
        `,
        persistent: true,
      });
    },

    handleBookmarkChanged({ item, bookmarked }) {
      console.log("Bookmark changed:", item.title, bookmarked);

      // You can save bookmark state to localStorage or API here
      if (process.client) {
        const bookmarks = JSON.parse(
          localStorage.getItem("appBookmarks") || "[]"
        );

        if (bookmarked) {
          if (!bookmarks.includes(item.title)) {
            bookmarks.push(item.title);
          }
        } else {
          const index = bookmarks.indexOf(item.title);
          if (index > -1) {
            bookmarks.splice(index, 1);
          }
        }

        localStorage.setItem("appBookmarks", JSON.stringify(bookmarks));
      }
    },

    getStatusText(status) {
      const statusTexts = {
        active: "Active",
        inactive: "Inactive",
        pending: "Pending Approval",
        maintenance: "Under Maintenance",
      };
      return statusTexts[status] || status;
    },

    showApplicationInfo(item) {
      // Implementation for showing application details
      console.log("Showing info for:", item.title);
    },

    getCardClasses(index) {
      // Highlight the Export card (index 1) with border
      return {
        "ring-4 ring-blue-400 ring-opacity-50": index === 1,
      };
    },

    getIconClasses(index) {
      const colorClasses = [
        "bg-gradient-to-br from-orange-400 to-orange-500", // Import - Orange
        "bg-gradient-to-br from-purple-400 to-purple-500", // Export - Purple
        "bg-gradient-to-br from-purple-500 to-purple-600", // Goods - Purple
        "bg-gradient-to-br from-green-400 to-green-500", // RGP - Green
        "bg-gradient-to-br from-yellow-400 to-yellow-500", // Car - Yellow
        "bg-gradient-to-br from-red-500 to-red-600", // Express - Red
        "bg-gradient-to-br from-blue-400 to-blue-500", // Transit - Blue
      ];

      return (
        colorClasses[index] || "bg-gradient-to-br from-gray-400 to-gray-500"
      );
    },

    getIconText(title) {
      const iconMap = {
        "Import Declaration": "Im",
        "ESAP Export Dec.": "Ex",
        "ESAP Goods Control": "Goods",
        "ESAP FDA Restricted Goods": "RGP",
        "ESAP Car Manifest": "Car",
        "ESAP EXPRESS Massage": "Express",
        "ESAP Transit,Transsipment Doc.": "Transit",
      };

      return iconMap[title] || "App";
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
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.application-cards {
  padding: 20px 0;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 16px;
  letter-spacing: -0.025em;
}

.section-description {
  font-size: 1.1rem;
  color: #6c757d;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Section Header Styles */
.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.header-badge {
  margin-bottom: 16px;
}

.badge-text {
  display: inline-block;
  padding: 8px 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-size: 14px;
  font-weight: 500;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.group:hover .icon-container {
  animation: float 2s ease-in-out infinite;
}

/* Icon container enhancement */
.icon-container {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.group:hover .icon-container {
  transform: scale(1.1) rotate(-5deg);
}

/* Enhanced focus states for accessibility */
.group:focus-within {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Loading state placeholder */
.loading-skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
