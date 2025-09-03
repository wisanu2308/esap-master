<template>
  <div class="form-box register">
    <form @submit.prevent="handleRegister" class="login-form">
      <h1>REGISTRATION</h1>
      <div class="input-box">
        <input
          v-model="form.txtCompanyName"
          type="text"
          placeholder="Company Name"
          required
          autocomplete="off"
        />
        <i class="bx bx-user"></i>
      </div>
      <!-- <div class="input-box">
        <input
          v-model="form.password"
          type="password"
          placeholder="Use to password"
          required
          autocomplete="off"
        />
        <i class="bx bx-lock-alt"></i>
      </div> -->
      <div class="input-box">
        <input
          v-model="form.txtEmail"
          type="email"
          placeholder="Email"
          required
          autocomplete="off"
        />
        <i class="bx bx-envelope"></i>
      </div>
      <div class="input-box">
        <input
          v-model="form.txtTelNumber"
          type="tel"
          placeholder="Contact Tel."
          required
          autocomplete="off"
        />
        <i class="bx bx-phone"></i>
      </div>
      <div class="input-box">
        <input
          ref="fileInput"
          type="file"
          accept="application/pdf"
          @change="handleFileChange"
        />
        <label style="color: #555">แนบไฟล์ PDF</label>
      </div>
      <button
        type="submit"
        class="login-btn"
        :class="{ loading: isRegistering }"
        :disabled="isRegistering"
      >
        {{ isRegistering ? "Registering..." : "REGISTER" }}
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegistrationForm",
  data() {
    return {
      isRegistering: false,
      selectedFile: null,
      form: {
        txtCompanyName: "",
        // password: "",
        txtEmail: "",
        txtTelNumber: "",
      },
    };
  },
  methods: {
    async handleRegister() {
      this.isRegistering = true;

      // สร้าง FormData สำหรับส่งข้อมูลและไฟล์ PDF
      const formData = new FormData();
      formData.append("CompanyName", this.form.txtCompanyName);
      formData.append("Email", this.form.txtEmail);
      formData.append("TelNumber", this.form.txtTelNumber);

      // เพิ่มไฟล์ PDF ถ้ามี
      if (this.selectedFile) {
        formData.append("pdfFile", this.selectedFile);
      }

      try {
        const response = await this.$axios.post("/auth/register", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        this.$swal.fire(
          "Register Success",
          response.data.message || "Registration data submitted successfully. Our team will contact you within 2-3 business days.",
          "success"
        );

        // Reset form และ emit event เพื่อกลับไปหน้า login
        this.resetForm();
        this.$emit("register-success");
      } catch (error) {
        console.error("Register error:", error);

        let errorMessage = "เกิดข้อผิดพลาดในการสมัครสมาชิก";

        if (error.response?.data?.message) {
          errorMessage = error.response.data.message;
        } else if (error.message) {
          errorMessage = error.message;
        }

        this.$swal.fire("Register Failed", errorMessage, "error");
      } finally {
        this.isRegistering = false;
      }
    },

    handleFileChange(event) {
      this.selectedFile = event.target.files[0];
    },

    resetForm() {
      this.form = {
        username: "",
        // password: "",
        email: "",
        tel: "",
      };
      this.selectedFile = null;
      if (this.$refs.fileInput) {
        this.$refs.fileInput.value = "";
      }
    },
  },
};
</script>