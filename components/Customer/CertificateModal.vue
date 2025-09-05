<template>
  <div>
    <button
      @click="showModal = true"
      class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
    >
      Certificate
    </button>

    <div
      v-if="showModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
    >
      <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <h3 class="text-lg font-semibold mb-4">Upload Root Certificate</h3>

        <!-- Loading indicator -->
        <div v-if="loading" class="text-center py-4">
          <div
            class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"
          ></div>
          <p class="mt-2">Processing...</p>
        </div>

        <!-- Error message -->
        <div
          v-if="error"
          class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4"
        >
          {{ error }}
        </div>

        <!-- Success message -->
        <div
          v-if="success"
          class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4"
        >
          {{ success }}
        </div>

        <form @submit.prevent="handleUpload" :disabled="loading">
          <!-- Customer ID (readonly) -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Customer ID
            </label>
            <input
              v-model="form.customerID"
              type="text"
              placeholder="Customer ID"
              readonly
              class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-100"
            />
          </div>

          <!-- Certificate File -->
          <div class="mb-4">
            <label
              class="block text-sm font-medium text-gray-700 mb-2"
              for="certificateFile"
            >
              เลือกไฟล์ Certificate (.p12) *
            </label>
            <input
              id="certificateFile"
              type="file"
              accept=".p12,.pfx"
              :disabled="loading"
              class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
              @change="onFileChange"
              required
            />
            <p class="text-xs text-gray-500 mt-1">
              รองรับไฟล์ .p12 และ .pfx เท่านั้น (ขนาดไม่เกิน 5MB)
            </p>
            <span v-if="fileError" class="text-red-500 text-xs">
              {{ fileError }}
            </span>
          </div>

          <!-- Description -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              v-model="form.description"
              placeholder="รายละเอียดเพิ่มเติมเกี่ยวกับ Certificate"
              rows="3"
              :disabled="loading"
              class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
            ></textarea>
          </div>

          <!-- Certificate Password -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-2">
              รหัสผ่านสำหรับไฟล์ Certificate *
            </label>
            <input
              v-model="form.certpassword"
              type="password"
              placeholder="กรอกรหัสผ่านของไฟล์ .p12"
              :disabled="loading"
              required
              class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
            />
            <span v-if="passwordError" class="text-red-500 text-xs">
              {{ passwordError }}
            </span>
          </div>

          <div class="flex justify-end gap-2">
            <button
              type="button"
              @click="closeModal"
              :disabled="loading"
              class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 disabled:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              :disabled="!canUpload || loading"
              class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-300"
            >
              {{ loading ? "Uploading..." : "Upload Certificate" }}
            </button>
          </div>
        </form>

        <!-- Certificate List -->
        <div class="mt-6">
          <h3 class="text-lg font-medium text-gray-900 mb-2">Certificate List</h3>
          <div class="w-full border border-gray-200 rounded-lg overflow-hidden">
            <!-- Header -->
            <div class="grid grid-cols-6 bg-gray-100 py-2 px-4 font-semibold text-gray-700">
              <div>CA ID</div>
              <div>Issued By</div>
              <div>Issued To</div>
              <div>Start Date</div>
              <div>End Date</div>
              <div class="text-right">Actions</div>
            </div>
            <!-- Rows -->
            <div
              v-for="(cert, index) in certificateList"
              :key="cert.id || index"
              class="grid grid-cols-6 items-center py-2 px-4 border-t border-gray-200"
            >
              <div>{{ cert.CAID }}</div>
              <div>{{ cert.IssuedBy }}</div>
              <div>{{ cert.IssuedTo }}</div>
              <div>{{ formatDate(cert.StartDate) }}</div>
              <div>{{ formatDate(cert.EndDate) }}</div>
              <div class="flex justify-end gap-2">
                <button
                  @click="downloadCertificate(cert)"
                  class="text-blue-600 hover:text-blue-900"
                  title="Download"
                >
                  Download
                </button>
                <button
                  @click="deleteCertificate(cert)"
                  class="text-red-600 hover:text-red-900"
                  title="Delete"
                >
                  Delete
                </button>
              </div>
            </div>
            <!-- Empty state -->
            <div
              v-if="certificateList.length === 0"
              class="text-center py-4 text-gray-500"
            >
              No certificates found
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CertificateModal",
  data() {
    return {
      showModal: false,
      loading: false,
      error: null,
      success: null,
      form: {
        customerID: "",
        description: "",
        certpassword: "",
      },
      file: null,
      fileError: "",
      passwordError: "",
      certificateList: [],
    };
  },
  props: {
    customerId: {
      type: [String, Number],
      default: null,
    },
  },
  computed: {
    canUpload() {
      return (
        this.file &&
        this.form.certpassword.trim() !== "" &&
        this.form.customerID.trim() !== "" &&
        !this.fileError &&
        !this.passwordError
      );
    },
  },
  methods: {
    onFileChange(e) {
      const selectedFile = e.target.files[0];
      this.fileError = "";

      if (!selectedFile) {
        this.file = null;
        this.fileError = "กรุณาเลือกไฟล์ Certificate";
        return;
      }

      // ตรวจสอบนามสกุลไฟล์
      const fileName = selectedFile.name.toLowerCase();
      if (!fileName.endsWith(".p12") && !fileName.endsWith(".pfx")) {
        this.file = null;
        this.fileError = "ไฟล์ต้องเป็น .p12 หรือ .pfx เท่านั้น";
        return;
      }

      // ตรวจสอบขนาดไฟล์ (5MB)
      if (selectedFile.size > 5 * 1024 * 1024) {
        this.file = null;
        this.fileError = "ขนาดไฟล์ต้องไม่เกิน 5MB";
        return;
      }

      this.file = selectedFile;
    },

    async handleUpload() {
      this.loading = true;
      this.error = null;
      this.success = null;
      this.fileError = "";
      this.passwordError = "";

      try {
        // Validation
        if (!this.file) {
          this.fileError = "กรุณาเลือกไฟล์ Certificate";
          return;
        }

        if (!this.form.certpassword.trim()) {
          this.passwordError = "กรุณากรอกรหัสผ่าน";
          return;
        }

        if (!this.form.customerID.trim()) {
          this.error = "Customer ID is required";
          return;
        }

        const apiUrl = process.env.API_BASE_URL || "http://localhost:4000/api";
        const token = localStorage.getItem("token");

        if (!token) {
          throw new Error("Authentication required");
        }

        // สร้าง FormData
        const formData = new FormData();
        formData.append("certificate", this.file);
        formData.append("description", this.form.description);
        formData.append("customerID", this.form.customerID);
        formData.append("certpassword", this.form.certpassword);

        const response = await fetch(`${apiUrl}/certificates/upload`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            // ไม่ใส่ Content-Type เพื่อให้ browser set boundary สำหรับ multipart/form-data
          },
          body: formData,
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to upload certificate");
        }

        this.success = "อัปโหลด Certificate สำเร็จ!";
        this.resetForm();
        this.$emit("upload", data.data);

        // Refresh certificate list
        await this.loadCertificates();

        // Clear success message after 3 seconds
        setTimeout(() => {
          this.success = null;
        }, 3000);

      } catch (error) {
        console.error("Error uploading certificate:", error);
        this.error = error.message || "Failed to upload certificate";
      } finally {
        this.loading = false;
      }
    },

    async loadCertificates() {
      try {
        const apiUrl = process.env.API_BASE_URL || "http://localhost:4000/api";
        const token = localStorage.getItem("token");

        if (!token) return;

        // ดึง customerId จาก route parameters หรือ props
        const customerId = this.$route.params.customerId || this.$route.params.id || this.customerId;

        // ถ้ามี customerId ให้ดึงข้อมูล customer
        if (customerId) {
          try {
            const customerResponse = await fetch(`${apiUrl}/customers/${customerId}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });

            if (customerResponse.ok) {
              const customerResult = await customerResponse.json();
              const customerData = customerResult.data;
              
              // กำหนดข้อมูล customer ใน form
              this.form.customerID = customerData.CustomerID || customerData.id || "";
            }
          } catch (customerError) {
            console.error("Error loading customer:", customerError);
          }
        }

        const response = await fetch(`${apiUrl}/certificates`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          this.certificateList = data.data || [];
        } else {
          console.error("Failed to load certificates:", response.status);
        }
      } catch (error) {
        console.error("Error loading certificates:", error);
      }
    },

    async downloadCertificate(cert) {
      try {
        const apiUrl = process.env.API_BASE_URL || "http://localhost:4000/api";
        const token = localStorage.getItem("token");

        if (!cert.CertData) {
          this.error = "ไม่พบไฟล์ Certificate สำหรับดาวน์โหลด";
          return;
        }

        const response = await fetch(`${apiUrl}/certificates/download/${cert.CertData}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = `${cert.CAID || 'certificate'}.p12`;
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
        } else {
          const data = await response.json();
          throw new Error(data.message || "Failed to download certificate");
        }
      } catch (error) {
        console.error("Error downloading certificate:", error);
        this.error = error.message || "Failed to download certificate";
      }
    },

    async deleteCertificate(cert) {
      if (confirm(`Are you sure you want to delete certificate "${cert.CAID}"?`)) {
        try {
          const apiUrl = process.env.API_BASE_URL || "http://localhost:4000/api";
          const token = localStorage.getItem("token");

          const response = await fetch(`${apiUrl}/certificates/${cert.id}`, {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.ok) {
            await this.loadCertificates();
            this.success = "Certificate deleted successfully!";

            // Clear success message after 3 seconds
            setTimeout(() => {
              this.success = null;
            }, 3000);
          } else {
            const data = await response.json();
            throw new Error(data.message || "Failed to delete certificate");
          }
        } catch (error) {
          console.error("Error deleting certificate:", error);
          this.error = error.message || "Failed to delete certificate";
        }
      }
    },

    resetForm() {
      // เก็บ customerID ไว้เมื่อ reset form
      const keepCustomerId = this.form.customerID;
      
      this.form = {
        customerID: keepCustomerId,
        description: "",
        certpassword: "",
      };
      this.file = null;
      this.fileError = "";
      this.passwordError = "";
      
      // Clear file input
      const fileInput = document.getElementById("certificateFile");
      if (fileInput) {
        fileInput.value = "";
      }
    },

    closeModal() {
      this.showModal = false;
      this.resetForm();
      this.error = null;
      this.success = null;
    },

    formatDate(dateString) {
      if (!dateString) return "-";
      const date = new Date(dateString);
      return date.toLocaleDateString("th-TH", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    },
  },

  mounted() {
    this.loadCertificates();
  },
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
