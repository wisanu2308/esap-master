<template>
  <div class="bg-white border border-slate-200 rounded-lg shadow-md p-6">
    <div class="mb-6">
      <h2 class="text-xl font-semibold text-gray-800 mb-2">
        Address & Programs
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
              v-model="formData.addressThai1"
              type="text"
              placeholder="Enter Address (Thai)1"
              class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              v-model="formData.addressThai2"
              type="text"
              placeholder="Enter Address (Thai)2"
              class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Province
          </label>
          <select
            v-model="formData.province"
            class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Province</option>
            <option value="bangkok">Bangkok</option>
            <option value="chiangmai">Chiang Mai</option>
            <option value="phuket">Phuket</option>
            <option value="pattaya">Pattaya</option>
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
              v-model="formData.addressEng1"
              type="text"
              placeholder="Enter Address (Eng)1"
              class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              v-model="formData.addressEng2"
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
            v-model="formData.postCode"
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

      <!-- Loading State -->
      <div v-if="loadingApplications" class="flex justify-center items-center py-8">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>

      <!-- Applications Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- จัดกลุ่ม Applications -->
        <div v-for="(group, groupIndex) in applicationGroups" :key="groupIndex">
          <h4 class="text-md font-medium text-gray-600 mb-3">
            {{ group.title }}
          </h4>
          <div class="space-y-3">
            <label 
              v-for="app in group.applications" 
              :key="app.id" 
              class="flex items-center"
            >
              <input
                v-model="formData.selectedApplications"
                :value="app.id"
                type="checkbox"
                class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                @change="handleApplicationChange"
              />
              <span class="ml-2 text-sm text-gray-700">
                {{ app.ApplicationName }}
                <small class="text-gray-500">(v{{ app.Version }})</small>
              </span>
            </label>
          </div>
        </div>
      </div>

      <!-- Error State -->
      <div v-if="applicationError" class="text-center py-8">
        <p class="text-red-600">{{ applicationError }}</p>
        <button 
          @click="fetchApplications" 
          class="mt-2 text-blue-600 hover:text-blue-800"
        >
          Try Again
        </button>
      </div>
    </div>

    <!-- Action Buttons Section -->
    <div class="mb-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <UserLoginModal />
        <ProfileModal />
        <CertificateModal />
        <SettingConfigModal />
      </div>
    </div>

    <!-- Navigation Buttons -->
    <div class="w-full flex justify-between items-center">
      <div class="w-1/2 flex gap-4">
        <div class="w-max">
          <button
            @click="$emit('go-back')"
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
            @click="handleSubmit"
            :disabled="isLoading"
            class="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50"
          >
            {{ isLoading ? 'Updating...' : 'Submit' }}
          </button>
        </div>
        <button
          @click="clearData"
          class="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
        >
          Clear Data
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomerFormStep2",
  props: {
    customerId: {
      type: [String, Number],
      required: true
    },
    initialData: {
      type: Object,
      default: () => ({})
    },
    isEditMode: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isLoading: false,
      loadingApplications: false,
      applicationError: null,
      applications: [],
      formData: {
        addressThai1: "",
        addressThai2: "",
        province: "",
        addressEng1: "",
        addressEng2: "",
        postCode: "",
        selectedApplications: []
      }
    };
  },

  computed: {
    applicationGroups() {
      // จัดกลุ่ม applications (สามารถปรับได้ตามความต้องการ)
      const itemsPerGroup = Math.ceil(this.applications.length / 3);
      
      return [
        {
          title: "Core Applications",
          applications: this.applications.slice(0, itemsPerGroup)
        },
        {
          title: "Extended Services", 
          applications: this.applications.slice(itemsPerGroup, itemsPerGroup * 2)
        },
        {
          title: "Additional Tools",
          applications: this.applications.slice(itemsPerGroup * 2)
        }
      ].filter(group => group.applications.length > 0);
    }
  },

  watch: {
    initialData: {
      handler(newData) {
        // ป้องกันการ reset form data เมื่อมีการอัพเดท
        if (newData && Object.keys(newData).length > 0) {
          this.formData = { 
            ...this.formData, 
            ...newData,
            // ถ้ามี EnabledApps ใน initialData ให้แปลงเป็น selectedApplications
            selectedApplications: newData.EnabledApps ? 
              this.convertEnabledAppsToSelectedIds(newData.EnabledApps) : 
              this.formData.selectedApplications
          };
        }
      },
      deep: true,
      immediate: true
    }
  },

  async mounted() {
    await this.fetchApplications();
    
    // หลังจากโหลด applications แล้ว ถ้ามี initialData ให้ set ค่า
    if (this.initialData && this.initialData.EnabledApps) {
      this.formData.selectedApplications = this.convertEnabledAppsToSelectedIds(this.initialData.EnabledApps);
    }
  },

  methods: {
    async fetchApplications() {
      this.loadingApplications = true;
      this.applicationError = null;

      try {
        const response = await this.$axios.get('/esap-application');
        if (response.data.success) {
          // กรองเฉพาะ applications ที่ active
          this.applications = response.data.data.filter(app => app.Active);
        }
      } catch (error) {
        console.error('Error fetching applications:', error);
        this.applicationError = 'Failed to load applications';
      } finally {
        this.loadingApplications = false;
      }
    },

    convertEnabledAppsToSelectedIds(enabledApps) {
      if (!enabledApps || !Array.isArray(enabledApps)) return [];
      
      // แปลง EnabledApps เป็น array ของ IDs
      return enabledApps.map(app => {
        // ถ้า app เป็น object ที่มี id
        if (typeof app === 'object' && app.id) {
          return app.id;
        }
        // ถ้า app เป็น string หา id จาก applications
        if (typeof app === 'string') {
          const foundApp = this.applications.find(a => a.ApplicationName === app);
          return foundApp ? foundApp.id : null;
        }
        return app;
      }).filter(id => id !== null);
    },

    handleApplicationChange() {
      // ไม่ต้องทำอะไรพิเศษ เพราะ v-model จะจัดการให้
      // เพียงแค่ป้องกันไม่ให้ form ข้างบน reset
    },

    async handleSubmit() {
      this.isLoading = true;

      try {
        // สร้าง payload สำหรับ update
        const updateData = {
          Address1: this.formData.addressThai1,
          Address2: this.formData.addressThai2,
          AddressEng1: this.formData.addressEng1,
          AddressEng2: this.formData.addressEng2,
          Province: this.formData.province,
          PostCode: this.formData.postCode,
          EnabledApps: this.formData.selectedApplications
        };

        // เรียก API update customer
        const response = await this.$axios.patch(`/customers/${this.customerId}`, updateData);

        if (response.data.success) {
          this.$emit("step2-completed", {
            customerId: this.customerId,
            formData: this.formData,
            customerData: response.data.data
          });

          if (!this.isEditMode) {
            this.$swal.fire(
              "Success!",
              "Customer created successfully",
              "success"
            );
          }
        }
      } catch (error) {
        console.error("Error updating customer:", error);
        
        let errorMessage = "Failed to update customer";
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

    clearData() {
      if (confirm("Are you sure you want to clear all data?")) {
        this.formData = {
          addressThai1: "",
          addressThai2: "",
          province: "",
          addressEng1: "",
          addressEng2: "",
          postCode: "",
          selectedApplications: []
        };
        this.$emit("clear-data");
      }
    }
  }
};
</script>