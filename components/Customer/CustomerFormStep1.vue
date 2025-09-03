<template>
  <div class="bg-white border border-slate-200 rounded-lg shadow-md p-6">
    <div class="mb-6">
      <h2 class="text-xl font-semibold text-gray-800 mb-2">
        Company Information
      </h2>
      <div class="w-12 h-1 bg-blue-500 rounded"></div>
    </div>

    <!-- Customer Details Section -->
    <div class="mb-8">
      <h3 class="text-lg font-medium text-gray-700 mb-4">Customer Details</h3>

      <!-- First Row: Customer ID, Full Name Thai, Full Name English -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Customer ID
          </label>
          <input
            v-model="formData.customerId"
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
            v-model="formData.fullNameThai"
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
            v-model="formData.fullNameEnglish"
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
            v-model="formData.email"
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
            v-model="formData.phone"
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
            v-model="formData.contractName"
            type="text"
            placeholder="Name of contract"
            class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>

    <!-- Identity Details Section -->
    <div class="mb-8">
      <h3 class="text-lg font-medium text-gray-700 mb-4">Identity Details</h3>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        <!-- TAX ID -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            TAX ID
          </label>
          <input
            v-model="formData.taxId"
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
            v-model="formData.taxBranch"
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
                v-model="formData.status"
                type="radio"
                value="active"
                class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span class="ml-2 text-sm text-gray-700">Active</span>
            </label>
            <label class="flex items-center">
              <input
                v-model="formData.status"
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
          @click="handleSubmit"
          :disabled="isLoading"
          class="w-full flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50"
        >
          <div>{{ isLoading ? "Creating..." : "Next" }}</div>
          <svg
            v-if="!isLoading"
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
</template>

<script>
export default {
  name: "CustomerFormStep1",
  props: {
    initialData: {
      type: Object,
      default: () => ({})
    },
    isEditMode: {
      type: Boolean,
      default: false
    },
    customerId: {
      type: [String, Number],
      default: null
    }
  },
  data() {
    return {
      isLoading: false,
      formData: {
        customerId: "",
        fullNameThai: "",
        fullNameEnglish: "",
        email: "",
        phone: "",
        contractName: "",
        taxId: "",
        taxBranch: "",
        status: "active",
        ...this.initialData
      }
    };
  },
  watch: {
    initialData: {
      handler(newData) {
        this.formData = { ...this.formData, ...newData };
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    async handleSubmit() {
      if (!this.validateForm()) {
        return;
      }

      this.isLoading = true;

      try {
        // สร้าง payload สำหรับ API
        const customerData = {
          CustomerID: this.formData.customerId,
          CustomerName: this.formData.fullNameThai,
          CustomerNameEng: this.formData.fullNameEnglish,
          EMailAddress: this.formData.email,
          PhoneNo: this.formData.phone,
          ContractName: this.formData.contractName,
          CustomerTaxNo: this.formData.taxId,
          CustomerBranch: this.formData.taxBranch,
          Active: this.formData.status === "active"
        };

        let response;
        
        if (this.isEditMode && this.customerId) {
          // Update existing customer
          response = await this.$axios.patch(`/customers/${this.customerId}`, customerData);
        } else {
          // Create new customer
          response = await this.$axios.post("/customers", customerData);
        }

        if (response.data.success) {
          this.$emit("step1-completed", {
            customerId: this.isEditMode ? this.customerId : response.data.data.id,
            formData: this.formData,
            customerData: response.data.data
          });

        //   this.$swal.fire(
        //     "Success!",
        //     this.isEditMode ? "Customer updated successfully" : "Customer created successfully",
        //     "success"
        //   );
        }
      } catch (error) {
        console.error("Error saving customer:", error);
        
        let errorMessage = this.isEditMode ? "Failed to update customer" : "Failed to create customer";
        if (error.response?.data?.message) {
          errorMessage = error.response.data.message;
        }

        this.$swal.fire(
          "Error!",
          errorMessage,
          "error"
        );
      } finally {
        this.isLoading = false;
      }
    },

    validateForm() {
      const required = ["customerId", "fullNameThai", "email", "phone"];

      for (let field of required) {
        if (!this.formData[field]) {
          this.$swal.fire(
            "Validation Error",
            `Please fill in ${field.replace(/([A-Z])/g, " $1").toLowerCase()}`,
            "warning"
          );
          return false;
        }
      }

      // Email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.formData.email)) {
        this.$swal.fire(
          "Validation Error",
          "Please enter a valid email address",
          "warning"
        );
        return false;
      }

      return true;
    },

    resetForm() {
      this.formData = {
        customerId: "",
        fullNameThai: "",
        fullNameEnglish: "",
        email: "",
        phone: "",
        contractName: "",
        taxId: "",
        taxBranch: "",
        status: "active"
      };
    }
  }
};
</script>
