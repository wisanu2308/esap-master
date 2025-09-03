<template>
  <div class="">
    <PageTitle 
      :title="`Edit Customer - ${customerData.CustomerName || 'Loading...'}`" 
      description="Update customer information" 
    />

    <!-- Back to List Button -->
    <div class="w-max my-2 flex justify-start">
      <button
        @click="$router.push('/customer')"
        class="w-max flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
      >
        <i class="bi bi-arrow-left"></i>
        Back
      </button>
    </div>

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

    <!-- Loading State -->
    <div v-if="isLoading" class="flex justify-center items-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>

    <!-- Form Steps -->
    <div v-else class="w-full flex flex-col gap-6">
      <!-- Step 1: Company Information -->
      <CustomerFormStep1 
        v-if="currentStep === 1"
        :initial-data="formData"
        :is-edit-mode="true"
        :customer-id="customerId"
        @step1-completed="handleStep1Completed"
      />

      <!-- Step 2: Address & Programs -->
      <CustomerFormStep2 
        v-if="currentStep === 2"
        :customer-id="customerId"
        :initial-data="formData"
        :is-edit-mode="true"
        @step2-completed="handleStep2Completed"
        @go-back="goBack"
        @clear-data="clearData"
      />
    </div>

    
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CustomerFormStep1 from "~/components/customer/CustomerFormStep1.vue";
import CustomerFormStep2 from "~/components/customer/CustomerFormStep2.vue";

export default {
  name: "EditCustomerPage",
  layout: "portal",
  components: {
    CustomerFormStep1,
    CustomerFormStep2
  },

  data() {
    return {
      isLoading: false,
      customerId: null,
      customerData: {},
      formData: {}
    };
  },

  computed: {
    ...mapGetters("customer", [
      "currentStep",
      "totalSteps",
      "progressPercentage",
    ]),
  },

  async mounted() {
    this.customerId = parseInt(this.$route.params.id);
    await this.fetchCustomerData();
    
    // Reset step เป็น 1 เมื่อเข้าหน้า edit
    this.$store.dispatch("customer/updateStep", 1);
  },

  methods: {
    async fetchCustomerData() {
      this.isLoading = true;
      try {
        const response = await this.$axios.get(`/customers/${this.customerId}`);
        if (response.data.success) {
          this.customerData = response.data.data;
          
          // แปลงข้อมูลจาก API เป็นรูปแบบที่ form ใช้
          this.formData = {
            customerId: this.customerData.CustomerID,
            fullNameThai: this.customerData.CustomerName,
            fullNameEnglish: this.customerData.CustomerNameEng,
            email: this.customerData.EMailAddress,
            phone: this.customerData.PhoneNo,
            contractName: this.customerData.ContractName,
            taxId: this.customerData.CustomerTaxNo,
            taxBranch: this.customerData.CustomerBranch,
            status: this.customerData.Active ? "active" : "inactive",
            
            // Address data
            addressThai1: this.customerData.Address1,
            addressThai2: this.customerData.Address2,
            province: this.customerData.Province,
            addressEng1: this.customerData.AddressEng1,
            addressEng2: this.customerData.AddressEng2,
            postCode: this.customerData.PostCode,
            
            // Programs data (จะต้องดึงจาก EnabledApps)
            activePrograms: {
              program1: this.getEnabledAppsByCategory(1),
              program2: this.getEnabledAppsByCategory(2),
              program3: this.getEnabledAppsByCategory(3)
            }
          };

          // อัพเดท store
          this.$store.dispatch("customer/setEditCustomer", this.customerData);
        }
      } catch (error) {
        console.error("Error fetching customer:", error);
        this.$swal.fire(
          "Error!",
          "Failed to fetch customer data",
          "error"
        );
        this.$router.push("/customer");
      } finally {
        this.isLoading = false;
      }
    },

    getEnabledAppsByCategory(category) {
      // สมมติว่า EnabledApps มีการจัดกลุ่มตาม category
      // ถ้าไม่มีการจัดกลุ่ม สามารถ return ทั้งหมดได้
      if (!this.customerData.EnabledApps) return [];
      
      return this.customerData.EnabledApps
        .filter(app => app.Category === category || !app.Category)
        .map(app => app.AppName);
    },

    handleStep1Completed(data) {
      // อัพเดทข้อมูลใน step 1
      this.formData = { ...this.formData, ...data.formData };
      this.$store.dispatch("customer/nextStep");
    },

    handleStep2Completed(data) {
      // เสร็จสิ้นการแก้ไข กลับไปหน้าลิสต์
      this.$swal.fire(
        "Success!",
        "Customer updated successfully",
        "success"
      );
      this.$store.dispatch("customer/resetForm");
      this.$router.push("/customer");
    },

    goBack() {
      this.$store.dispatch("customer/previousStep");
    },

    clearData() {
      if (confirm("Are you sure you want to reset all changes?")) {
        this.fetchCustomerData(); // รีโหลดข้อมูลเดิม
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

/* Responsive adjustments */
@media (max-width: 768px) {
  .grid-cols-3 {
    grid-template-columns: 1fr;
  }
}
</style>