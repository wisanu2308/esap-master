<template>
  <div>
    <!-- Section Header -->
    <PageTitle
      title="Change Password"
      description="Update your account password"
    />

    <div class="container-fluid">
      <div class="max-w-lg w-full mx-auto bg-white rounded-lg shadow-xl p-8">
        <!-- Header -->
        <div class="text-center mb-8">
          <div
            class="mx-auto h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4"
          >
            <i class="bi bi-lock text-blue-600 text-2xl"></i>
          </div>
          <h2 class="text-2xl font-bold text-gray-900">Change Password</h2>
          <p class="text-gray-600 mt-2">Update your account password</p>
        </div>

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

        <!-- Change Password Form -->
        <form
          v-if="!success"
          @submit.prevent="handleChangePassword"
          class="space-y-6"
        >
          <!-- Current Password -->
          <div>
            <label
              for="currentPassword"
              class="block text-sm font-medium text-gray-700 mb-2"
            >
              Current Password *
            </label>
            <div class="relative">
              <input
                id="currentPassword"
                v-model="form.currentPassword"
                :type="showCurrentPassword ? 'text' : 'password'"
                placeholder="Enter current password"
                required
                :disabled="loading"
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="button"
                @click="showCurrentPassword = !showCurrentPassword"
                class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <i
                  :class="showCurrentPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"
                ></i>
              </button>
            </div>
          </div>

          <!-- New Password -->
          <div>
            <label
              for="newPassword"
              class="block text-sm font-medium text-gray-700 mb-2"
            >
              New Password *
            </label>
            <div class="relative">
              <input
                id="newPassword"
                v-model="form.newPassword"
                :type="showNewPassword ? 'text' : 'password'"
                placeholder="Enter new password"
                required
                minlength="6"
                :disabled="loading"
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="button"
                @click="showNewPassword = !showNewPassword"
                class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <i
                  :class="showNewPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"
                ></i>
              </button>
            </div>
            <p class="text-xs text-gray-500 mt-1">
              Password must be at least 6 characters long
            </p>
          </div>

          <!-- Confirm New Password -->
          <div>
            <label
              for="confirmPassword"
              class="block text-sm font-medium text-gray-700 mb-2"
            >
              Confirm New Password *
            </label>
            <div class="relative">
              <input
                id="confirmPassword"
                v-model="form.confirmPassword"
                :type="showConfirmPassword ? 'text' : 'password'"
                placeholder="Confirm new password"
                required
                minlength="6"
                :disabled="loading"
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                :class="{ 'border-red-300': passwordMismatch }"
              />
              <button
                type="button"
                @click="showConfirmPassword = !showConfirmPassword"
                class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <i
                  :class="showConfirmPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"
                ></i>
              </button>
            </div>
            <p v-if="passwordMismatch" class="text-xs text-red-500 mt-1">
              Passwords do not match
            </p>
          </div>

          <!-- Password Strength Indicator -->
          <div v-if="form.newPassword" class="space-y-2">
            <div class="text-sm font-medium text-gray-700">
              Password Strength:
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div
                class="h-2 rounded-full transition-all duration-300"
                :class="passwordStrengthClass"
                :style="{ width: passwordStrengthPercentage + '%' }"
              ></div>
            </div>
            <p class="text-xs" :class="passwordStrengthTextClass">
              {{ passwordStrengthText }}
            </p>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="!canSubmit || loading"
            class="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
          >
            <span v-if="loading" class="flex items-center justify-center">
              <div
                class="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
              ></div>
              Changing Password...
            </span>
            <span v-else>Change Password</span>
          </button>
        </form>

        <!-- Success Actions -->
        <div v-if="success" class="text-center space-y-4">
          <NuxtLink
            to="/"
            class="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Go to Dashboard
          </NuxtLink>
        </div>

        <!-- Navigation -->
        <div v-if="!success" class="text-center mt-6 space-y-2">
          <div>
            <button
              @click="$router.go(-1)"
              class="text-blue-600 hover:text-blue-800 text-sm transition-colors duration-200"
            >
              ← Go Back
            </button>
          </div>
          <div>
            <NuxtLink
              to="/"
              class="text-gray-500 hover:text-gray-700 text-sm transition-colors duration-200"
            >
              Return to Dashboard
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ChangePassword",
  layout: "portal",
  middleware: "auth",
  head() {
    return {
      title: "Change Password - ESAP",
    };
  },
  data() {
    return {
      loading: false,
      error: null,
      success: null,
      showCurrentPassword: false,
      showNewPassword: false,
      showConfirmPassword: false,
      form: {
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      },
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated", "user"]),

    passwordMismatch() {
      return (
        this.form.confirmPassword &&
        this.form.newPassword !== this.form.confirmPassword
      );
    },

    canSubmit() {
      return (
        this.form.currentPassword &&
        this.form.newPassword &&
        this.form.confirmPassword &&
        this.form.newPassword === this.form.confirmPassword &&
        this.form.newPassword.length >= 6 &&
        this.passwordStrength >= 2 // อย่างน้อยต้องเป็น Medium
      );
    },

    passwordStrength() {
      const password = this.form.newPassword;
      if (!password) return 0;

      let score = 0;

      // Length check
      if (password.length >= 6) score++;
      if (password.length >= 10) score++;

      // Character variety checks
      if (/[a-z]/.test(password)) score++; // lowercase
      if (/[A-Z]/.test(password)) score++; // uppercase
      if (/[0-9]/.test(password)) score++; // numbers
      if (/[^A-Za-z0-9]/.test(password)) score++; // special characters

      return Math.min(score, 4);
    },

    passwordStrengthPercentage() {
      return (this.passwordStrength / 4) * 100;
    },

    passwordStrengthClass() {
      const strength = this.passwordStrength;
      if (strength <= 1) return "bg-red-500";
      if (strength === 2) return "bg-yellow-500";
      if (strength === 3) return "bg-blue-500";
      return "bg-green-500";
    },

    passwordStrengthTextClass() {
      const strength = this.passwordStrength;
      if (strength <= 1) return "text-red-600";
      if (strength === 2) return "text-yellow-600";
      if (strength === 3) return "text-blue-600";
      return "text-green-600";
    },

    passwordStrengthText() {
      const strength = this.passwordStrength;
      if (strength <= 1) return "Weak - Add more characters and variety";
      if (strength === 2) return "Fair - Consider adding numbers or symbols";
      if (strength === 3) return "Good - Strong password";
      return "Excellent - Very strong password";
    },
  },

  mounted() {
    // ตรวจสอบการ login
    if (!this.isAuthenticated) {
      this.$router.push("/login");
      return;
    }
  },

  methods: {
    async handleChangePassword() {
      this.loading = true;
      this.error = null;
      this.success = null;

      try {
        // Validation
        if (this.form.newPassword.length < 6) {
          throw new Error("New password must be at least 6 characters long");
        }

        if (this.form.newPassword !== this.form.confirmPassword) {
          throw new Error("New passwords do not match");
        }

        if (this.form.currentPassword === this.form.newPassword) {
          throw new Error(
            "New password must be different from current password"
          );
        }

        if (this.passwordStrength < 2) {
          throw new Error(
            "Password is too weak. Please choose a stronger password."
          );
        }

        const apiUrl = process.env.API_BASE_URL || "http://localhost:4000/api";
        const token = localStorage.getItem("token");

        if (!token) {
          throw new Error("Authentication required");
        }

        const response = await fetch(`${apiUrl}/auth/change-password`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            currentPassword: this.form.currentPassword,
            newPassword: this.form.newPassword,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to change password");
        }

        this.success =
          "Password changed successfully! You can continue using your account with the new password.";
        this.resetForm();

        // แสดง success message
        this.$swal.fire({
          title: "Success!",
          text: "Your password has been changed successfully",
          icon: "success",
          timer: 3000,
          showConfirmButton: true,
          confirmButtonText: "Continue",
        });
      } catch (error) {
        console.error("Change password error:", error);
        this.error = error.message || "Failed to change password";

        // Scroll to top to show error
        window.scrollTo({ top: 0, behavior: "smooth" });
      } finally {
        this.loading = false;
      }
    },

    resetForm() {
      this.form = {
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      };
      this.showCurrentPassword = false;
      this.showNewPassword = false;
      this.showConfirmPassword = false;
    },
  },
};
</script>

<style scoped>
/* Additional custom styles */
.bi {
  font-size: 1.125rem;
}

/* Loading animation */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* Password strength indicator transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>
