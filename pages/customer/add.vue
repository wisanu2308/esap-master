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

    <!-- Form Steps -->
    <div class="w-full flex flex-col gap-6">
      <!-- Step 1: Company Information -->
      <CustomerFormStep1 
        v-if="currentStep === 1"
        :initial-data="customerData"
        @step1-completed="handleStep1Completed"
      />

      <!-- Step 2: Address & Programs -->
      <CustomerFormStep2 
        v-if="currentStep === 2"
        :customer-id="customerData.createdCustomerId"
        :initial-data="customerData"
        @step2-completed="handleStep2Completed"
        @go-back="goBack"
        @clear-data="clearData"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CustomerFormStep1 from "~/components/Customer/CustomerFormStep1.vue";
import CustomerFormStep2 from "~/components/Customer/CustomerFormStep2.vue";

export default {
  name: "AddCustomerPage",
  layout: "portal",
  components: {
    CustomerFormStep1,
    CustomerFormStep2
  },

  computed: {
    ...mapGetters("customer", [
      "currentStep",
      "totalSteps",
      "customerData",
      "progressPercentage",
    ]),
  },

  mounted() {
    // Reset step เป็น 1 เมื่อเข้าหน้า add
    this.$store.dispatch("customer/updateStep", 1);
    // Reset form data เมื่อเข้าหน้า add ใหม่
    this.$store.dispatch("customer/resetForm");
  },

  methods: {
    handleStep1Completed(data) {
      // อัพเดท store และไปขั้นตอนถัดไป
      this.$store.dispatch("customer/updateCustomerData", {
        ...data.formData,
        createdCustomerId: data.customerId
      });
      this.$store.dispatch("customer/nextStep");
    },

    handleStep2Completed(data) {
      // เสร็จสิ้นกระบวนการ ไปหน้าลิสต์ customer
      this.$swal.fire(
        "Success!",
        "Customer created successfully",
        "success"
      );
      this.$store.dispatch("customer/resetForm");
      this.$router.push("/customer");
    },

    goBack() {
      this.$store.dispatch("customer/previousStep");
    },

    clearData() {
      if (confirm("Are you sure you want to clear all data?")) {
        this.$store.dispatch("customer/resetForm");
        this.$store.dispatch("customer/updateStep", 1);
      }
    }
  },

  beforeDestroy() {
    // Reset store เมื่อออกจากหน้า
    this.$store.dispatch("customer/resetForm");
  }
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
