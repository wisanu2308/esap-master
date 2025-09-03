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
      <CustomerFormStep1 
        :initial-data="customerData"
        @step1-completed="handleStep1Completed"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CustomerFormStep1 from "~/components/customer/CustomerFormStep1.vue";

export default {
  name: "AddCustomerPage",
  layout: "portal",
  components: {
    CustomerFormStep1
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
    handleStep1Completed(data) {
      // อัพเดท store และไปหน้าถัดไป
      this.$store.dispatch("customer/updateCustomerData", {
        ...data.formData,
        createdCustomerId: data.customerId
      });
      this.$store.dispatch("customer/nextStep");
      this.$router.push("/customer/add-step2");
    }
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
