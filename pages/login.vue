<template>
  <div class="login-page">
    <div class="login-container">
      <!-- Login Form Component -->
      <LoginForm />

      <!-- Registration Form Component -->
      <RegistrationForm
        @register-success="toggleToLogin"
        ref="registrationForm"
      />

      <!-- Toggle Panel -->
      <div class="toggle-box">
        <div class="toggle-panel toggle-left">
          <h1>ESAP Welcome</h1>
          <p>Don't have an account?</p>
          <button class="login-btn register-btn" @click="toggleToRegister">
            Register
          </button>
        </div>
        <div class="toggle-panel toggle-right">
          <h1>Welcome Back</h1>
          <p>Already have an account?</p>
          <button class="login-btn login-btn-toggle" @click="toggleToLogin">
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "~/components/LoginForm.vue";
import RegistrationForm from "~/components/RegistrationForm.vue";

export default {
  name: "LoginPage",
  layout: "blank",
  auth: false,
  components: {
    LoginForm,
    RegistrationForm,
  },

  head() {
    return {
      title: "Login - ESAP",
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
        },
      ],
    };
  },

  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },

  mounted() {
    if (this.isAuthenticated) {
      this.$router.push("/");
      return;
    }
  },

  methods: {
    toggleToRegister() {
      const container = this.$el.querySelector(".login-container");
      container?.classList.add("active");
    },

    toggleToLogin() {
      const container = this.$el.querySelector(".login-container");
      container?.classList.remove("active");
    },
  },
};
</script>
