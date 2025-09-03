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
      <CustomerFormStep2 
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
import CustomerFormStep2 from "~/components/customer/CustomerFormStep2.vue";

export default {
  name: "AddCustomerStep2Page",
  layout: "portal",
  components: {
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

  methods: {
    handleStep2Completed(data) {
      // เสร็จสิ้นกระบวนการ ไปหน้าลิสต์ customer
      this.$store.dispatch("customer/resetForm");
      this.$router.push("/customers");
    },

    goBack() {
      this.$store.dispatch("customer/previousStep");
      this.$router.push("/customer/add");
    },

    clearData() {
      this.$store.dispatch("customer/resetForm");
      this.$router.push("/customer/add");
    }
  },

  mounted() {
    // ตรวจสอบว่ามี customer ID จาก step 1 หรือไม่
    if (!this.customerData.createdCustomerId) {
      this.$router.push("/customer/add");
    }
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
