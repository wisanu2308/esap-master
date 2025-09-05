<template>
  <div class="form-box login">
    <form @submit.prevent="handleLogin" class="login-form">
      <h1>LOGIN</h1>
      <div class="input-box">
        <input
          v-model="form.username"
          type="text"
          placeholder="Username"
          required
          autocomplete="off"
        />
        <i class="bx bx-user"></i>
      </div>
      <div class="input-box">
        <input
          v-model="form.password"
          type="password"
          placeholder="Password"
          required
          autocomplete="off"
        />
        <i class="bx bx-lock-alt"></i>
      </div>
      <div class="forgot-link">
        <a href="#" @click.prevent="forgotPassword">Forgot password?</a>
      </div>
      <button
        type="submit"
        class="login-btn"
        :class="{ loading: isLoading }"
        :disabled="isLoading"
      >
        {{ isLoading ? "Loading..." : "LOGIN" }}
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      isLoading: false,
      form: {
        username: "",
        password: "",
      },
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    async handleLogin() {
      this.isLoading = true;

      try {
        const apiUrl = process.env.API_BASE_URL || "http://localhost:4000/api";
        
        // เรียก API login ตรงจากหน้า login
        const response = await fetch(`${apiUrl}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: this.form.username,
            password: this.form.password,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Login failed");
        }

        // ส่งข้อมูลไปเก็บใน store
        await this.$store.dispatch("setAuth", {
          user: data.data.user,
          token: data.data.token,
        });

        this.$swal.fire({
          title: "Success!",
          text: `เข้าสู่ระบบสำเร็จ\nยินดีต้อนรับ ${data.data.user.customerName}`,
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });

        setTimeout(() => {
          this.$router.push("/");
        }, 2000);

      } catch (error) {
        console.error("Login error:", error);
        this.$swal.fire({
          title: "Error!",
          text: error.message || "ไม่สามารถเข้าสู่ระบบได้",
          icon: "error",
          html: `
            <p>${error.message || "ไม่สามารถเข้าสู่ระบบได้"}</p>
            <p>โปรดตรวจสอบชื่อผู้ใช้และรหัสผ่านของคุณอีกครั้ง</p>
          `,
        });
      } finally {
        this.isLoading = false;
      }
    },

    async forgotPassword() {
      const { value: email } = await this.$swal.fire({
        title: "Reset Password",
        input: "email",
        inputLabel: "Email Address",
        inputPlaceholder: "Enter your email address",
        inputAttributes: {
          autocapitalize: "off",
          autocorrect: "off",
        },
        showCancelButton: true,
        confirmButtonText: "Send Reset Link",
        cancelButtonText: "Cancel",
        inputValidator: (value) => {
          if (!value) {
            return "กรุณากรอกอีเมล";
          }
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            return "รูปแบบอีเมลไม่ถูกต้อง";
          }
        }
      });

      if (email) {
        try {
          // แสดง loading
          this.$swal.fire({
            title: "กำลังส่งอีเมล...",
            allowOutsideClick: false,
            allowEscapeKey: false,
            showConfirmButton: false,
            didOpen: () => {
              this.$swal.showLoading();
            }
          });

          const apiUrl = process.env.API_BASE_URL || "http://localhost:4000/api";
          
          const response = await fetch(`${apiUrl}/auth/forgot-password`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          });

          const data = await response.json();

          if (response.ok) {
            this.$swal.fire({
              title: "Reset Link Sent!",
              html: `
                <p>ลิงก์รีเซ็ตรหัสผ่านได้ถูกส่งไปยัง</p>
                <strong>${email}</strong>
                <p>โปรดตรวจสอบอีเมลของคุณและคลิกลิงก์เพื่อรีเซ็ตรหัสผ่าน</p>
                <small>หากไม่พบอีเมล โปรดตรวจสอบโฟลเดอร์ Spam</small>
              `,
              icon: "success",
              confirmButtonText: "ตกลง"
            });
          } else {
            throw new Error(data.message || "Failed to send reset email");
          }
        } catch (error) {
          console.error("Forgot password error:", error);
          this.$swal.fire({
            title: "Error!",
            text: error.message || "ไม่สามารถส่งอีเมลรีเซ็ตรหัสผ่านได้",
            icon: "error",
            confirmButtonText: "ตกลง"
          });
        }
      }
    },

    resetForm() {
      this.form = {
        username: "",
        password: "",
      };
    },
  },
};
</script>