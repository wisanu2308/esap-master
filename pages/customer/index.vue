<template>
  <div class="">
    <PageTitle
      title="Customer Management"
      description="Manage your customers"
    />

    <!-- Action Bar -->
    <div class="mb-6 flex justify-between items-center">
      <div class="row items-center gap-1">
        <!-- Search Box -->
        <div class="col-3">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search customers..."
            class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <!-- Status Filter -->
        <div class="col-3">
          <select
            v-model="statusFilter"
            class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      <!-- Add Customer Button -->
      <div>
        <button
          @click="$router.push('/customer/add')"
          class="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
        >
          <i class="bx bx-plus text-lg"></i>
          Add Customer
        </button>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="isLoading" class="flex justify-center items-center py-12">
      <div
        class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"
      ></div>
    </div>

    <!-- Customer Table -->
    <div v-else class="bg-white rounded-lg shadow-md overflow-hidden">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Customer ID
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Company Name
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Phone
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Enabled Apps
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr
              v-for="customer in filteredCustomers"
              :key="customer.id"
              class="hover:bg-gray-50"
            >
              <td
                class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
              >
                {{ customer.CustomerID }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div>
                  <div class="text-sm font-medium text-gray-900">
                    {{ customer.CustomerName }}
                  </div>
                  <div class="text-sm text-gray-500">
                    {{ customer.CustomerNameEng }}
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ customer.EMailAddress }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ customer.PhoneNo }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  :class="[
                    'inline-flex px-2 py-1 text-xs font-semibold rounded-full',
                    customer.Active
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800',
                  ]"
                >
                  {{ customer.Active ? "Active" : "Inactive" }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <div class="flex flex-wrap gap-1">
                  <span
                    v-for="app in customer.EnabledApps?.slice(0, 2)"
                    :key="app.id"
                    class="inline-flex px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded"
                  >
                    {{ app.AppName }}
                  </span>
                  <span
                    v-if="customer.EnabledApps?.length > 2"
                    class="inline-flex px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded"
                  >
                    +{{ customer.EnabledApps.length - 2 }} more
                  </span>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex items-center gap-2">
                  <!-- Edit Button -->
                  <button
                    @click="editCustomer(customer)"
                    class="text-blue-600 hover:text-blue-900 transition-colors"
                    title="Edit Customer"
                  >
                    <i class="bi bi-pencil-square"></i>
                  </button>

                  <!-- View Button -->
                  <button
                    @click="viewCustomer(customer)"
                    class="text-green-600 hover:text-green-900 transition-colors"
                    title="View Details"
                  >
                    <i class="bi bi-eye"></i>
                  </button>

                  <!-- Delete Button -->
                  <button
                    @click="deleteCustomer(customer)"
                    class="text-red-600 hover:text-red-900 transition-colors"
                    title="Delete Customer"
                  >
                    <i class="bi bi-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Empty State -->
        <div v-if="filteredCustomers.length === 0" class="text-center py-12">
          <i class="bx bx-user-x text-6xl text-gray-300 mb-4"></i>
          <h3 class="text-lg font-medium text-gray-900 mb-2">
            No customers found
          </h3>
          <p class="text-gray-500 mb-6">
            {{
              searchQuery
                ? "No customers match your search criteria."
                : "Get started by adding your first customer."
            }}
          </p>
          <button
            v-if="!searchQuery"
            @click="$router.push('/customer/add')"
            class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg"
          >
            Add Customer
          </button>
        </div>
      </div>

      <!-- Pagination -->
      <div
        v-if="totalPages > 1"
        class="bg-gray-50 px-6 py-3 flex items-center justify-between border-t border-gray-200"
      >
        <div class="flex-1 flex justify-between sm:hidden">
          <button
            @click="currentPage--"
            :disabled="currentPage === 1"
            class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
          >
            Previous
          </button>
          <button
            @click="currentPage++"
            :disabled="currentPage === totalPages"
            class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
          >
            Next
          </button>
        </div>
        <div
          class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"
        >
          <div>
            <p class="text-sm text-gray-700">
              Showing {{ (currentPage - 1) * perPage + 1 }} to
              {{ Math.min(currentPage * perPage, totalCustomers) }} of
              {{ totalCustomers }} results
            </p>
          </div>
          <div>
            <nav
              class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            >
              <button
                @click="currentPage--"
                :disabled="currentPage === 1"
                class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
              >
                <i class="bx bx-chevron-left"></i>
              </button>
              <button
                v-for="page in visiblePages"
                :key="page"
                @click="currentPage = page"
                :class="[
                  'relative inline-flex items-center px-4 py-2 border text-sm font-medium',
                  currentPage === page
                    ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                    : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50',
                ]"
              >
                {{ page }}
              </button>
              <button
                @click="currentPage++"
                :disabled="currentPage === totalPages"
                class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
              >
                <i class="bx bx-chevron-right"></i>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomerIndexPage",
  layout: "portal",

  data() {
    return {
      customers: [],
      isLoading: false,
      searchQuery: "",
      statusFilter: "",
      currentPage: 1,
      perPage: 10,
    };
  },

  computed: {
    filteredCustomers() {
      let filtered = this.customers;

      // Search filter
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(
          (customer) =>
            customer.CustomerID?.toLowerCase().includes(query) ||
            customer.CustomerName?.toLowerCase().includes(query) ||
            customer.CustomerNameEng?.toLowerCase().includes(query) ||
            customer.EMailAddress?.toLowerCase().includes(query)
        );
      }

      // Status filter
      if (this.statusFilter) {
        filtered = filtered.filter((customer) => {
          if (this.statusFilter === "active") return customer.Active;
          if (this.statusFilter === "inactive") return !customer.Active;
          return true;
        });
      }

      // Pagination
      const start = (this.currentPage - 1) * this.perPage;
      return filtered.slice(start, start + this.perPage);
    },

    totalCustomers() {
      return this.customers.length;
    },

    totalPages() {
      return Math.ceil(this.totalCustomers / this.perPage);
    },

    visiblePages() {
      const pages = [];
      const start = Math.max(1, this.currentPage - 2);
      const end = Math.min(this.totalPages, this.currentPage + 2);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      return pages;
    },
  },

  async mounted() {
    await this.fetchCustomers();
  },

  methods: {
    async fetchCustomers() {
      this.isLoading = true;
      try {
        const response = await this.$axios.get("/customers");
        if (response.data.success) {
          this.customers = response.data.data;
        }
      } catch (error) {
        console.error("Error fetching customers:", error);
        this.$swal.fire("Error!", "Failed to fetch customers", "error");
      } finally {
        this.isLoading = false;
      }
    },

    editCustomer(customer) {
      // นำข้อมูล customer ไปใส่ใน store แล้วไปหน้า edit
      this.$store.dispatch("customer/setEditCustomer", customer);
      this.$router.push(`/customer/edit/${customer.id}`);
    },

    viewCustomer(customer) {
      // แสดง modal หรือไปหน้า view detail
      this.$swal.fire({
        title: customer.CustomerName,
        html: `
          <div class="text-left">
            <p><strong>Customer ID:</strong> ${customer.CustomerID}</p>
            <p><strong>English Name:</strong> ${
              customer.CustomerNameEng || "N/A"
            }</p>
            <p><strong>Email:</strong> ${customer.EMailAddress}</p>
            <p><strong>Phone:</strong> ${customer.PhoneNo || "N/A"}</p>
            <p><strong>Tax ID:</strong> ${customer.CustomerTaxNo || "N/A"}</p>
            <p><strong>Status:</strong> ${
              customer.Active ? "Active" : "Inactive"
            }</p>
          </div>
        `,
        icon: "info",
        confirmButtonText: "Close",
      });
    },

    async deleteCustomer(customer) {
      const result = await this.$swal.fire({
        title: "Are you sure?",
        text: `Do you want to delete customer "${customer.CustomerName}"?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        try {
          await this.$axios.delete(`/customers/${customer.id}`);
          await this.fetchCustomers(); // Refresh list
          this.$swal.fire("Deleted!", "Customer has been deleted.", "success");
        } catch (error) {
          console.error("Error deleting customer:", error);
          this.$swal.fire("Error!", "Failed to delete customer", "error");
        }
      }
    },
  },

  watch: {
    searchQuery() {
      this.currentPage = 1; // Reset to first page when searching
    },
    statusFilter() {
      this.currentPage = 1; // Reset to first page when filtering
    },
  },
};
</script>

<style scoped>
/* Custom scrollbar for table */
.overflow-x-auto::-webkit-scrollbar {
  height: 8px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
