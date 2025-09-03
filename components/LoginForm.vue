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
        const result = await this.$store.dispatch("login", {
          username: this.form.username,
          password: this.form.password,
        });

        this.$swal.fire({
          title: "Success!",
          text: `เข้าสู่ระบบสำเร็จ\nยินดีต้อนรับ ${result.user.fullName}`,
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
            <hr>
            <small style="color: #666;">
              <strong>ทดสอบด้วยข้อมูลนี้:</strong><br>
              Username: <code>admin</code> | Password: <code>admin</code><br>
              หรือ<br>
              Username: <code>user</code> | Password: <code>user123</code>
            </small>
          `,
        });
      } finally {
        this.isLoading = false;
      }
    },

    async forgotPassword() {
      const { value: password } = await this.$swal.fire({
        title: "Enter your password",
        input: "password",
        inputLabel: "Password",
        inputPlaceholder: "Enter your password",
        inputAttributes: {
          maxlength: "10",
          autocapitalize: "off",
          autocorrect: "off",
        },
      });

      if (password) {
        this.$swal.fire(`Entered password: ${password}`);
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