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
        <h3 class="text-lg font-semibold mb-4">UserLogin</h3>
        <form @submit.prevent="save">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                User Login
              </label>
              <input
                v-model="form.userLogin"
                type="text"
                placeholder="Username"
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                v-model="form.userPassword"
                type="password"
                placeholder="Password"
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Customer ID
              </label>
              <input
                v-model="form.CustomerId"
                type="text"
                placeholder="Customer ID"
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Customer Name
              </label>
              <input
                v-model="form.CustomerName"
                type="text"
                placeholder="Customer Name"
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Profile
              </label>
              <input
                v-model="form.Profile"
                type="text"
                placeholder="Profile"
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div class="flex items-center mt-6">
              <label class="block text-sm font-medium text-gray-700 mr-2">
                Active
              </label>
              <input
                v-model="form.isActive"
                type="checkbox"
                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
            </div>
          </div>
          <div class="flex justify-end gap-2">
            <button
              type="button"
              @click="showModal = false"
              class="px-4 py-2 bg-gray-500 text-white rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Save
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
            <div class="grid grid-cols-5 bg-gray-100 py-2 px-4 font-semibold text-gray-700">
              <div>User Login</div>
              <div>Customer Name</div>
              <div>Profile</div>
              <div>Active</div>
              <div class="text-right">Command</div>
            </div>
            <!-- Rows -->
            <div
              v-for="(user, index) in userList"
              :key="index"
              class="grid grid-cols-5 items-center py-2 px-4 border-t border-gray-200"
            >
              <div>{{ user.userLogin }}</div>
              <div>{{ user.CustomerName }}</div>
              <div>{{ user.Profile }}</div>
              <div>
                <span
                  :class="user.isActive ? 'text-green-600 font-bold' : 'text-red-600 font-bold'"
                >
                  {{ user.isActive ? 'Active' : 'Inactive' }}
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
      form: {
        userLogin: "",
        userPassword: "",
        CustomerId: "",
        CustomerName: "",
        Profile: "",
        isActive: true,
      },
      userList: [
        {
          userLogin: "user1",
          userPassword: "password1",
          CustomerId: "C001",
          CustomerName: "Customer One",
          Profile: "Admin",
          isActive: true,
        },
        {
          userLogin: "user2",
          userPassword: "password2",
          CustomerId: "C002",
          CustomerName: "Customer Two",
          Profile: "User",
          isActive: false,
        },
      ],
    };
  },
  methods: {
    save() {
      this.$emit("save", { ...this.form });
      this.showModal = false;
    },
    editUser(user) {
      // เพิ่ม logic edit ตามต้องการ
    },
    deleteUser(user) {
      // เพิ่ม logic delete ตามต้องการ
    },
  },
};
</script>
