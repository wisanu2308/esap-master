<template>
  <div class="">
    <PageTitle title="Add Customer" description="" />

    <!-- Progress Bar -->
    <div class="w-full mb-6">
      <div class="bg-white rounded-lg shadow-md p-4">
        <div class="flex justify-between items-center mb-2">
          <span class="text-sm font-medium text-gray-700"
            >Step {{ currentStep }} of {{ totalSteps }}</span
          >
          <span class="text-sm font-medium text-gray-700"
            >{{ Math.round(progressPercentage) }}%</span
          >
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div
            class="bg-blue-600 h-2 rounded-full transition-all duration-300"
            :style="{ width: progressPercentage + '%' }"
          ></div>
        </div>
        <div class="flex justify-between mt-2">
          <span class="text-xs text-gray-500">Company Information</span>
          <span class="text-xs text-gray-500">Address & Programs</span>
        </div>
      </div>
    </div>

    <div class="w-full flex flex-col gap-6">
      <div class="bg-white border border-slate-200 rounded-lg shadow-md p-6">
        <div class="mb-6">
          <h2 class="text-xl font-semibold text-gray-800 mb-2">
            Company Information
          </h2>
          <div class="w-12 h-1 bg-blue-500 rounded"></div>
        </div>

        <!-- Customer Details Section -->
        <div class="mb-8">
          <h3 class="text-lg font-medium text-gray-700 mb-4">
            Customer Details
          </h3>

          <!-- First Row: Customer ID, Full Name Thai, Full Name English -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Customer ID
              </label>
              <input
                v-model="customer.customerId"
                type="text"
                placeholder="Create ID"
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Full Name(Thai)
              </label>
              <input
                v-model="customer.fullNameThai"
                type="text"
                placeholder="Enter name"
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Full Name(English)
              </label>
              <input
                v-model="customer.fullNameEnglish"
                type="text"
                placeholder="Enter name(English)"
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <!-- Second Row: Email, Phone, Contact Name -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                E Mail Address
              </label>
              <input
                v-model="customer.email"
                type="email"
                placeholder="Enter email address"
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Phone No.
              </label>
              <input
                v-model="customer.phone"
                type="tel"
                placeholder="Enter Phone no."
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Contract Name
              </label>
              <input
                v-model="customer.contractName"
                type="text"
                placeholder="Name of contract"
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        <!-- Identity Details Section -->
        <div class="mb-8">
          <h3 class="text-lg font-medium text-gray-700 mb-4">
            Identity Details
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <!-- TAX ID -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                TAX ID
              </label>
              <input
                v-model="customer.taxId"
                type="text"
                placeholder="Enter Company Tax ID."
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <!-- TAX Branch -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                TAX Branch
              </label>
              <input
                v-model="customer.taxBranch"
                type="text"
                placeholder="Enter branch no."
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <!-- Status Radio Buttons -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <div class="flex gap-6">
                <label class="flex items-center">
                  <input
                    v-model="customer.status"
                    type="radio"
                    value="active"
                    class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span class="ml-2 text-sm text-gray-700">Active</span>
                </label>
                <label class="flex items-center">
                  <input
                    v-model="customer.status"
                    type="radio"
                    value="inactive"
                    class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span class="ml-2 text-sm text-gray-700">Non Active</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="w-full flex justify-end items-center gap-10">
          <div class="w-max">
            <button
              @click="submitForm"
              class="w-full flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
            >
              <div>Next</div>
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AddCustomerPage",
  layout: "portal",

  computed: {
    ...mapGetters("customer", [
      "currentStep",
      "totalSteps",
      "customerData",
      "progressPercentage",
    ]),

    customer: {
      get() {
        return this.customerData;
      },
      set(value) {
        this.$store.dispatch("customer/updateCustomerData", value);
      },
    },
  },

  methods: {
    async submitForm() {
      // Validate form
      if (!this.validateForm()) {
        return;
      }

      console.log(this.customer);

      try {
        // Update store with current form data
        await this.$store.dispatch(
          "customer/updateCustomerData",
          this.customer
        );

        // Navigate to next step
        await this.$store.dispatch("customer/nextStep");

        // this.$toast.success("Step 1 completed successfully!");

        // Navigate to step 2
        this.$router.push("/customer/add-step2");
      } catch (error) {
        console.error("Error proceeding to next step:", error);
        this.$toast.error("Failed to proceed to next step");
      }
    },

    validateForm() {
      return true;
      // Basic validation
      const required = ["customerId", "fullNameThai", "email", "phone"];

      for (let field of required) {
        if (!this.customer[field]) {
          this.$toast.error(
            `Please fill in ${field.replace(/([A-Z])/g, " $1").toLowerCase()}`
          );
          return false;
        }
      }

      // Email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.customer.email)) {
        this.$toast.error("Please enter a valid email address");
        return false;
      }

      return true;
    },

    resetForm() {
      this.$store.dispatch("customer/resetForm");
    },
  },
};
</script>

<style scoped>
/* Custom styles for form inputs */
.form-input:focus {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Custom radio button styles */
input[type="radio"]:checked {
  background-color: #2563eb;
  border-color: #2563eb;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .grid-cols-3 {
    grid-template-columns: 1fr;
  }
}
</style>
