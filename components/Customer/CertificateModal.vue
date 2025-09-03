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
      <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h3 class="text-lg font-semibold mb-4">Upload Root Certificate</h3>
        <form @submit.prevent="handleUpload" enctype="multipart/form-data">
          <div class="mb-4">
            <label
              class="block text-sm font-medium text-gray-700 mb-2"
              for="certificateFile"
            >
              เลือกไฟล์ .p12
            </label>
            <input
              id="certificateFile"
              type="file"
              accept=".p12"
              class="w-full px-3 py-2 border rounded"
              @change="onFileChange"
              required
            />
            <span v-if="fileError" class="text-red-500 text-xs">{{
              fileError
            }}</span>
          </div>
          <div class="mb-4">
            <label
              class="block text-sm font-medium text-gray-700 mb-2"
              for="certPassword"
            >
              รหัสผ่านสำหรับไฟล์ .p12
            </label>
            <input
              id="certPassword"
              type="password"
              v-model="form.certpassword"
              placeholder="กรอกรหัสผ่าน"
              class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <span v-if="passwordError" class="text-red-500 text-xs">{{
              passwordError
            }}</span>
          </div>
          <div class="flex flex-col gap-2">
            <button
              type="submit"
              class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg"
              :disabled="!canUpload"
            >
              อัปโหลด
            </button>
            <button
              type="button"
              @click="showModal = false"
              class="bg-gray-500 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </form>
        <div v-if="uploadSuccess" class="mt-4 text-green-600 font-medium">
          อัปโหลดสำเร็จ!
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
      form: {
        certpassword: "",
      },
      file: null,
      fileError: "",
      passwordError: "",
      uploadSuccess: false,
    };
  },
  computed: {
    canUpload() {
      return (
        this.file &&
        this.form.certpassword.trim() !== "" &&
        !this.fileError &&
        !this.passwordError
      );
    },
  },
  methods: {
    onFileChange(e) {
      const selectedFile = e.target.files[0];
      if (!selectedFile) {
        this.file = null;
        this.fileError = "กรุณาเลือกไฟล์ .p12";
        return;
      }
      if (!selectedFile.name.toLowerCase().endsWith(".p12")) {
        this.file = null;
        this.fileError = "ไฟล์ต้องเป็น .p12 เท่านั้น";
        return;
      }
      this.file = selectedFile;
      this.fileError = "";
    },
    async handleUpload() {
      if (!this.file) {
        this.fileError = "กรุณาเลือกไฟล์ .p12";
        return;
      }
      if (!this.form.certpassword.trim()) {
        this.passwordError = "กรุณากรอกรหัสผ่าน";
        return;
      }
      this.passwordError = "";

      // ตัวอย่างการส่งข้อมูล (ใช้ FormData)
      const formData = new FormData();
      formData.append("certificateFile", this.file);
      formData.append("certpassword", this.form.certpassword);

      // TODO: เปลี่ยน URL เป็น endpoint ที่ต้องการ
      try {
        // await this.$axios.post('/api/upload-certificate', formData);
        // จำลองการอัปโหลด
        await new Promise((resolve) => setTimeout(resolve, 1000));
        this.uploadSuccess = true;
        // ปิด modal หลังแสดงผล
        setTimeout(() => {
          this.showModal = false;
          this.uploadSuccess = false;
          this.form.certpassword = "";
          this.file = null;
        }, 1500);
      } catch (err) {
        this.fileError = "อัปโหลดไม่สำเร็จ กรุณาลองใหม่";
      }
    },
  },
};
</script>

<style scoped>
/* เพิ่มสไตล์ที่ต้องการที่นี่ */
</style>
