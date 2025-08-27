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

        <!-- Address Details Section -->
        <div class="mb-8">
          <h3 class="text-lg font-medium text-gray-700 mb-4">
            Address Details
          </h3>

          <!-- Address Thai Row -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div class="md:col-span-2">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Address (Thai)
              </label>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  v-model="customer.addressThai1"
                  type="text"
                  placeholder="Enter Address (Thai)1"
                  class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  v-model="customer.addressThai2"
                  type="text"
                  placeholder="Enter Address (Thai)2"
                  class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Provincer
              </label>
              <select
                v-model="customer.province"
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Province</option>
                <option value="bangkok">Bangkok</option>
                <option value="chiangmai">Chiang Mai</option>
                <option value="phuket">Phuket</option>
                <option value="pattaya">Pattaya</option>
                <!-- Add more provinces as needed -->
              </select>
            </div>
          </div>

          <!-- Address English Row -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="md:col-span-2">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Address (English)
              </label>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  v-model="customer.addressEng1"
                  type="text"
                  placeholder="Enter Address (Eng)1"
                  class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  v-model="customer.addressEng2"
                  type="text"
                  placeholder="Enter Address (Eng)2"
                  class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                PostCode
              </label>
              <input
                v-model="customer.postCode"
                type="text"
                placeholder="Enter Post Code"
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        <!-- Customer Active Program Section -->
        <div class="mb-8">
          <h3 class="text-lg font-medium text-gray-700 mb-4">
            Customer Active Program
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Active Program 1 -->
            <div>
              <h4 class="text-md font-medium text-gray-600 mb-3">
                Active Program 1
              </h4>
              <div class="space-y-3">
                <label class="flex items-center">
                  <input
                    v-model="activePrograms.program1"
                    value="ESAP Import"
                    type="checkbox"
                    class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span class="ml-2 text-sm text-gray-700">ESAP Import</span>
                </label>
                <label class="flex items-center">
                  <input
                    v-model="activePrograms.program1"
                    value="ESAP Export"
                    type="checkbox"
                    class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span class="ml-2 text-sm text-gray-700">ESAP Export</span>
                </label>
                <label class="flex items-center">
                  <input
                    v-model="activePrograms.program1"
                    value="Goods Transition"
                    type="checkbox"
                    class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span class="ml-2 text-sm text-gray-700"
                    >Goods Transition</span
                  >
                </label>
              </div>
            </div>

            <!-- Active Program 2 -->
            <div>
              <h4 class="text-md font-medium text-gray-600 mb-3">
                Active Program 2
              </h4>
              <div class="space-y-3">
                <label class="flex items-center">
                  <input
                    v-model="activePrograms.program2"
                    value="ESAP FDA Permit"
                    type="checkbox"
                    class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span class="ml-2 text-sm text-gray-700"
                    >ESAP FDA Permit</span
                  >
                </label>
                <label class="flex items-center">
                  <input
                    v-model="activePrograms.program2"
                    value="ESAP Carmanifest"
                    type="checkbox"
                    class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span class="ml-2 text-sm text-gray-700"
                    >ESAP Carmanifest</span
                  >
                </label>
                <label class="flex items-center">
                  <input
                    v-model="activePrograms.program2"
                    value="ESAP EXPRESS"
                    type="checkbox"
                    class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span class="ml-2 text-sm text-gray-700">ESAP EXPRESS</span>
                </label>
              </div>
            </div>

            <!-- Active Program 3 -->
            <div>
              <h4 class="text-md font-medium text-gray-600 mb-3">
                Active Program 3
              </h4>
              <div class="space-y-3">
                <label class="flex items-center">
                  <input
                    v-model="activePrograms.program3"
                    value="ESAP Transit"
                    type="checkbox"
                    class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span class="ml-2 text-sm text-gray-700">ESAP Transit</span>
                </label>
                <label class="flex items-center">
                  <input
                    v-model="activePrograms.program3"
                    value="ESAP Label 1"
                    type="checkbox"
                    class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span class="ml-2 text-sm text-gray-700"
                    >ESAP .../label></span
                  >
                </label>
                <label class="flex items-center">
                  <input
                    v-model="activePrograms.program3"
                    value="ESAP Label 2"
                    type="checkbox"
                    class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span class="ml-2 text-sm text-gray-700"
                    >ESAP .../label></span
                  >
                </label>
              </div>
            </div>
          </div>
        </div>

        <!-- Action Buttons Section -->
        <div class="mb-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button
              @click="handleAddUserLogin"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
            >
              UserLogin
            </button>
            <button
              @click="handleAddProfile"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
            >
              Profile
            </button>
            <button
              @click="handleAddCertificate"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
            >
              Certificate
            </button>
            <button
              @click="handleSettingConfig"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
            >
              Setting Config
            </button>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="w-full flex justify-between items-center">
          <div class="w-1/2 flex gap-4">
            <div class="w-max">
              <button
                @click="goBack"
                class="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
              >
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
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
                Back
              </button>
            </div>
          </div>

          <div class="w-1/2 flex justify-end gap-4">
            <div class="w-max">
              <button
                @click="saveData"
                class="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
              >
                Submit
              </button>
            </div>
            <button
              @click="clearData"
              class="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
            >
              Clear Data
            </button>

            <!-- <button
              @click="exitForm"
              class="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
            >
              Exit
            </button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AddCustomerStep2Page",
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

    activePrograms: {
      get() {
        return this.customerData.activePrograms;
      },
      set(value) {
        this.$store.dispatch("customer/updateActivePrograms", value);
      },
    },
  },

  watch: {
    activePrograms: {
      handler(newVal) {
        this.$store.dispatch("customer/updateCustomerData", {
          activePrograms: newVal,
        });
      },
      deep: true,
    },
  },

  methods: {
    async saveData() {
      try {
        // Update store with current form data
        await this.$store.dispatch("customer/updateCustomerData", {
          ...this.customer,
          activePrograms: this.activePrograms,
        });

        // Save customer to database
        const result = await this.$store.dispatch("customer/saveCustomer");

        if (result.success) {
        //   this.$toast.success("Customer saved successfully!");
          this.$router.push("/customers"); // Redirect to customer list
        } else {
        //   this.$toast.error("Failed to save customer");
        }
      } catch (error) {
        console.error("Error saving customer:", error);
        // this.$toast.error("Failed to save customer");
      }
    },

    goBack() {
      this.$store.dispatch("customer/previousStep");
      this.$router.push("/customer/add");
    },

    clearData() {
      if (confirm("Are you sure you want to clear all data?")) {
        this.$store.dispatch("customer/resetForm");
        this.$router.push("/customer/add");
        // this.$toast.success("Data cleared successfully");
      }
    },

    exitForm() {
      if (
        confirm("Are you sure you want to exit? All unsaved data will be lost.")
      ) {
        this.$store.dispatch("customer/resetForm");
        this.$router.push("/");
      }
    },

    // Placeholder methods for action buttons
    handleAddUserLogin() {
      //   this.$toast.info("Add UserLogin functionality not implemented yet");
      console.log("Add UserLogin functionality not implemented yet");
    },

    handleAddProfile() {
      //   this.$toast.info("Add Profile functionality not implemented yet");
      console.log("Add Profile functionality not implemented yet");
    },

    handleAddCertificate() {
      //   this.$toast.info("Add Certificate functionality not implemented yet");
      console.log("Add Certificate functionality not implemented yet");
    },

    handleSettingConfig() {
      //   this.$toast.info("Setting Config functionality not implemented yet");
      console.log("Add Setting Config functionality not implemented yet");
    },
  },

  // Set current step when component mounts
  mounted() {
    this.$store.dispatch("customer/updateStep", 2);
  },
};
</script>

<style scoped>
/* Custom styles for form inputs */
.form-input:focus {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Custom checkbox styles */
input[type="checkbox"]:checked {
  background-color: #2563eb;
  border-color: #2563eb;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .grid-cols-3 {
    grid-template-columns: 1fr;
  }

  .grid-cols-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
