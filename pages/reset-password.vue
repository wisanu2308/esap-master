<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
    <div class="max-w-md w-full bg-white rounded-lg shadow-xl p-8">
      <!-- Header -->
      <div class="text-center mb-8">
        <div class="mx-auto h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          <i class="bx bx-lock text-blue-600 text-2xl"></i>
        </div>
        <h2 class="text-2xl font-bold text-gray-900">Reset Password</h2>
        <p class="text-gray-600 mt-2">Enter your new password</p>
      </div>

      <!-- Error message -->
      <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
        {{ error }}
      </div>

      <!-- Success message -->
      <div v-if="success" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
        {{ success }}
      </div>

      <!-- Reset Password Form -->
      <form v-if="!success" @submit.prevent="handleResetPassword" class="space-y-6">
        <!-- New Password -->
        <div>
          <label for="newPassword" class="block text-sm font-medium text-gray-700 mb-2">
            New Password
          </label>
          <div class="relative">
            <input
              id="newPassword"
              v-model="form.newPassword"
              :type="showNewPassword ? 'text' : 'password'"
              placeholder="Enter new password"
              required
              minlength="6"
              class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="button"
              @click="showNewPassword = !showNewPassword"
              class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <i :class="showNewPassword ? 'bx bx-hide' : 'bx bx-show'"></i>
            </button>
          </div>
          <p class="text-xs text-gray-500 mt-1">Password must be at least 6 characters long</p>
        </div>

        <!-- Confirm Password -->
        <div>
          <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-2">
            Confirm New Password
          </label>
          <div class="relative">
            <input
              id="confirmPassword"
              v-model="form.confirmPassword"
              :type="showConfirmPassword ? 'text' : 'password'"
              placeholder="Confirm new password"
              required
              minlength="6"
              class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              :class="{ 'border-red-300': passwordMismatch }"
            />
            <button
              type="button"
              @click="showConfirmPassword = !showConfirmPassword"
              class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <i :class="showConfirmPassword ? 'bx bx-hide' : 'bx bx-show'"></i>
            </button>
          </div>
          <p v-if="passwordMismatch" class="text-xs text-red-500 mt-1">
            Passwords do not match
          </p>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          :disabled="isLoading || passwordMismatch || !form.newPassword || !form.confirmPassword"
          class="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
        >
          <span v-if="isLoading" class="flex items-center justify-center">
            <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Resetting Password...
          </span>
          <span v-else>Reset Password</span>
        </button>
      </form>

      <!-- Success Actions -->
      <div v-if="success" class="text-center space-y-4">
        <NuxtLink
          to="/login"
          class="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Go to Login
        </NuxtLink>
      </div>

      <!-- Back to Login -->
      <div v-if="!success" class="text-center mt-6">
        <NuxtLink
          to="/login"
          class="text-blue-600 hover:text-blue-800 text-sm transition-colors duration-200"
        >
          ← Back to Login
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResetPassword",
  data() {
    return {
      isLoading: false,
      error: null,
      success: null,
      showNewPassword: false,
      showConfirmPassword: false,
      form: {
        newPassword: "",
        confirmPassword: "",
      },
      token: null,
    };
  },
  computed: {
    passwordMismatch() {
      return this.form.confirmPassword && this.form.newPassword !== this.form.confirmPassword;
    },
  },
  mounted() {
    // ดึง token จาก URL query parameters
    this.token = this.$route.query.token;
    
    if (!this.token) {
      this.error = "Invalid or missing reset token";
      return;
    }
  },
  methods: {
    async handleResetPassword() {
      this.isLoading = true;
      this.error = null;
      this.success = null;

      try {
        // Validation
        if (this.form.newPassword.length < 6) {
          throw new Error("Password must be at least 6 characters long");
        }

        if (this.form.newPassword !== this.form.confirmPassword) {
          throw new Error("Passwords do not match");
        }

        if (!this.token) {
          throw new Error("Invalid or missing reset token");
        }

        const apiUrl = process.env.API_BASE_URL || "http://localhost:4000/api";
        
        const response = await fetch(`${apiUrl}/auth/reset-password`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: this.token,
            newPassword: this.form.newPassword,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to reset password");
        }

        this.success = "Password has been reset successfully! You can now login with your new password.";
        
        // แสดง success message พร้อม redirect
        this.$swal.fire({
          title: "Success!",
          text: "Password has been reset successfully!",
          icon: "success",
          timer: 3000,
          showConfirmButton: true,
          confirmButtonText: "Go to Login"
        }).then(() => {
          this.$router.push("/login");
        });

      } catch (error) {
        console.error("Reset password error:", error);
        this.error = error.message || "Failed to reset password";
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped>
/* Custom styles if needed */
.bx {
  font-size: 1.25rem;
}
</style>