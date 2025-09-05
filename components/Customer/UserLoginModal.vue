<template>
  <div>
    <!-- ปุ่มเปิด modal -->
    <button
      @click="showModal = true"
      class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
    >
      UserLogin
    </button>

    <!-- Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 z-50 w-full flex items-center justify-center bg-black bg-opacity-40"
    >
      <div class="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        <h3 class="text-lg font-semibold mb-4">
          {{ isEditing ? "Edit User" : "Add New User" }}
        </h3>

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

        <form @submit.prevent="save" :disabled="loading">
          <!-- Row 1: Customer ID -->
          <div class="mb-4">
            <div class="w-full">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Customer ID
              </label>
              <input
                v-model="form.CustomerID"
                type="text"
                placeholder="Customer ID"
                :disabled="loading"
                readonly
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
              />
            </div>
          </div>

          <!-- Row 2: User Login | Password -->
          <div class="flex gap-4 mb-4">
            <div class="w-1/2">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                User Login *
              </label>
              <input
                v-model="form.UserLogin"
                type="text"
                placeholder="Username"
                :disabled="loading || isEditing"
                required
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
              />
            </div>
            <div class="w-1/2">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Password *
              </label>
              <input
                v-model="form.Password"
                type="password"
                placeholder="Password"
                :disabled="loading"
                :required="!isEditing"
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
              />
            </div>
          </div>

          <!-- Row 3: Customer Name | Email Address | Contract Name -->
          <div class="flex gap-4 mb-4">
            <div class="w-1/3">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Customer Name *
              </label>
              <input
                v-model="form.CustomerName"
                type="text"
                placeholder="Customer Name"
                :disabled="loading"
                required
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
              />
            </div>
            <div class="w-1/3">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                v-model="form.EMailAddress"
                type="email"
                placeholder="Email Address"
                :disabled="loading"
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
              />
            </div>
            <div class="w-1/3">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Contract Name
              </label>
              <input
                v-model="form.ContractName"
                type="text"
                placeholder="Contract Name"
                :disabled="loading"
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
              />
            </div>
          </div>

          <!-- Row 4: Profile | User Level | Active -->
          <div class="flex gap-4 mb-4 items-end">
            <div class="w-1/3">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Profile
              </label>
              <select
                v-model="form.Profile_defult"
                :disabled="loading"
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
              </select>
            </div>
            <div class="w-1/3">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                User Level
              </label>
              <input
                v-model.number="form.UserLevel"
                type="number"
                placeholder="User Level"
                :disabled="loading"
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
              />
            </div>
            <div class="w-1/3">
              <div class="flex items-center pb-2">
                <input
                  v-model="form.Active"
                  type="checkbox"
                  :disabled="loading"
                  class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 disabled:bg-gray-100 mr-2"
                />
                <label class="text-sm font-medium text-gray-700">
                  Active
                </label>
              </div>
            </div>
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
              :disabled="loading"
              class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-300"
            >
              {{ loading ? "Processing..." : isEditing ? "Update" : "Save" }}
            </button>
          </div>
        </form>

        <!-- UserLogin List -->
        <div class="mt-4">
          <h3 class="text-lg font-medium text-gray-900 mb-2">
            User Login List
          </h3>
          <div class="w-full border border-gray-200 rounded-lg overflow-hidden">
            <!-- Header -->
            <div
              class="grid grid-cols-5 bg-gray-100 py-2 px-4 font-semibold text-gray-700"
            >
              <div>User Login</div>
              <div>Customer Name</div>
              <div>Profile</div>
              <div>Active</div>
              <div class="text-right">Command</div>
            </div>
            <!-- Rows -->
            <div
              v-for="(user, index) in userList"
              :key="user.id || index"
              class="grid grid-cols-5 items-center py-2 px-4 border-t border-gray-200"
            >
              <div>{{ user.UserLogin }}</div>
              <div>{{ user.CustomerName }}</div>
              <div>{{ user.Profile_defult }}</div>
              <div>
                <span
                  :class="
                    user.Active
                      ? 'text-green-600 font-bold'
                      : 'text-red-600 font-bold'
                  "
                >
                  {{ user.Active ? "Active" : "Inactive" }}
                </span>
              </div>
              <div class="flex justify-end gap-2">
                <button
                  @click="editUser(user)"
                  class="text-blue-600 hover:text-blue-900"
                >
                  Edit
                </button>
                <button
                  @click="deleteUser(user)"
                  class="text-red-600 hover:text-red-900"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserLoginModal",
  data() {
    return {
      showModal: false,
      loading: false,
      error: null,
      success: null,
      isEditing: false,
      editingUserId: null,
      form: {
        UserLogin: "",
        Password: "",
        CustomerID: "",
        CustomerName: "",
        EMailAddress: "",
        ContractName: "",
        Profile_defult: "user",
        UserLevel: null,
        Active: true,
      },
      userList: [],
    };
  },
  methods: {
    async save() {
      this.loading = true;
      this.error = null;
      this.success = null;

      try {
        const apiUrl = process.env.API_BASE_URL || "http://localhost:4000/api";
        const token = localStorage.getItem("token");

        if (!token) {
          throw new Error("Authentication required");
        }

        let response;
        if (this.isEditing) {
          // Update existing user
          response = await fetch(
            `${apiUrl}/customer-users/${this.editingUserId}`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify(this.form),
            }
          );
        } else {
          // Create new user
          response = await fetch(`${apiUrl}/customer-users`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(this.form),
          });
        }

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message ||
              `Failed to ${this.isEditing ? "update" : "create"} user`
          );
        }

        this.success = `User ${
          this.isEditing ? "updated" : "created"
        } successfully!`;
        this.resetForm();
        this.$emit("save", data.data);

        // Refresh user list
        await this.loadUsers();

      } catch (error) {
        console.error("Error saving user:", error);
        this.error = error.message || "Failed to save user";
      } finally {
        this.loading = false;
      }
    },

    async loadUsers() {
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

            console.log("Customer Response:", customerResponse);

            if (customerResponse.ok) {
              const customerResult = await customerResponse.json();
              const customerData = customerResult.data;
              console.log("Customer Data:", customerData);
              
              // กำหนดข้อมูล customer ใน form
              this.form.CustomerID = customerData.CustomerID || customerData.id || "";
              this.form.CustomerName = customerData.CustomerName || customerData.name || "";
            } else {
              console.error("Failed to load customer:", customerResponse.status);
            }
          } catch (customerError) {
            console.error("Error loading customer:", customerError);
          }
        }

        const response = await fetch(`${apiUrl}/customer-users`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          this.userList = data.data || [];
        } else {
          console.error("Failed to load users:", response.status);
        }
      } catch (error) {
        console.error("Error loading users:", error);
      }
    },

    resetForm() {
      // เก็บ CustomerID ไว้เมื่อ reset form
      const keepCustomerId = this.form.CustomerID;
      const keepCustomerName = this.form.CustomerName;
      
      this.form = {
        UserLogin: "",
        Password: "",
        CustomerID: keepCustomerId,
        CustomerName: keepCustomerName,
        EMailAddress: "",
        ContractName: "",
        Profile_defult: "user",
        UserLevel: null,
        Active: true,
      };
      this.isEditing = false;
      this.editingUserId = null;
    },

    closeModal() {
      this.showModal = false;
      this.resetForm();
      this.error = null;
      this.success = null;
    },

    editUser(user) {
      this.isEditing = true;
      this.editingUserId = user.id;
      this.form = {
        UserLogin: user.UserLogin,
        Password: "", // Don't populate password field
        CustomerID: user.CustomerID,
        CustomerName: user.CustomerName,
        EMailAddress: user.EMailAddress,
        ContractName: user.ContractName,
        Profile_defult: user.Profile_defult,
        UserLevel: user.UserLevel,
        Active: user.Active,
      };
    },

    async deleteUser(user) {
      if (
        confirm(`Are you sure you want to delete user "${user.UserLogin}"?`)
      ) {
        try {
          const apiUrl = process.env.API_BASE_URL || "http://localhost:4000/api";
          const token = localStorage.getItem("token");

          const response = await fetch(
            `${apiUrl}/customer-users/${user.id}`,
            {
              method: "DELETE",
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (response.ok) {
            await this.loadUsers();
            this.success = "User deleted successfully!";

            // Clear success message after 3 seconds
            setTimeout(() => {
              this.success = null;
            }, 3000);
          } else {
            const data = await response.json();
            throw new Error(data.message || "Failed to delete user");
          }
        } catch (error) {
          console.error("Error deleting user:", error);
          this.error = error.message || "Failed to delete user";
        }
      }
    },
  },

  props: {
    // รับ customerId จาก parent component ถ้ามี
    customerId: {
      type: [String, Number],
      default: null
    }
  },

  mounted() {
    this.loadUsers();
  },
};
</script>
