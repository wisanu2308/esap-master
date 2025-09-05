<template>
  <div>
    <button
      @click="showModal = true"
      class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
    >
      Profile
    </button>

    <div
      v-if="showModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
    >
      <div
        class="bg-white rounded-lg shadow-lg p-6 w-full max-w-5xl max-h-[80vh] overflow-y-auto"
      >
        <h3 class="text-lg font-semibold mb-4">
          {{ isEditing ? "Edit Profile" : "Add Profile" }}
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
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Customer ID</label
              >
              <input
                v-model="form.CustomerID"
                type="text"
                maxlength="50"
                placeholder="CustomerID"
                readonly
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-100"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Profile ID *</label
              >
              <input
                v-model="form.ProfileID"
                type="text"
                maxlength="50"
                placeholder="ProfileID"
                :disabled="loading || isEditing"
                required
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Box Type *</label
              >
              <select
                v-model="form.BoxType"
                :disabled="loading"
                required
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
              >
                <option value="">Select Box Type</option>
                <option value="STANDARD">STANDARD</option>
                <option value="PREMIUM">PREMIUM</option>
                <option value="ENTERPRISE">ENTERPRISE</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >NSP Gateway Name *</label
              >
              <select
                v-model="form.NSPGatewayName"
                :disabled="loading"
                required
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
              >
                <option value="">Select NSP Provider</option>
                <option value="EDI Service Application Provider(ESAP)">
                  EDI Service Application Provider(ESAP)
                </option>
                <option value="Thai Trade Net (TTN)">
                  Thai Trade Net (TTN)
                </option>
                <option value="Trad SIAM International">
                  Trad SIAM International
                </option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Box Status *</label
              >
              <select
                v-model="form.BoxStatus"
                :disabled="loading"
                required
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
              >
                <option value="">Select Status</option>
                <option value="ACTIVE">ACTIVE</option>
                <option value="INACTIVE">INACTIVE</option>
                <option value="SUSPENDED">SUSPENDED</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >ebXML UserID</label
              >
              <input
                v-model="form.ebXMLUserID"
                type="email"
                maxlength="100"
                placeholder="user@example.com"
                :disabled="loading"
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Sender Registration</label
              >
              <input
                v-model="form.SenderRegistration"
                type="text"
                maxlength="50"
                placeholder="SenderRegistration"
                :disabled="loading"
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Organization</label
              >
              <input
                v-model="form.Organization"
                type="text"
                maxlength="100"
                placeholder="Organization"
                :disabled="loading"
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Default User</label
              >
              <input
                v-model="form.DefaultUser"
                type="text"
                maxlength="50"
                placeholder="DefaultUser"
                :disabled="loading"
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Default Password</label
              >
              <input
                v-model="form.DefaultPassword"
                type="password"
                maxlength="50"
                placeholder="DefaultPassword"
                :disabled="loading"
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Prefix</label
              >
              <input
                v-model="form.Prefix"
                type="text"
                maxlength="20"
                placeholder="Prefix"
                :disabled="loading"
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Password Prefix</label
              >
              <input
                v-model="form.PasswordPrefix"
                type="password"
                maxlength="50"
                placeholder="PasswordPrefix"
                :disabled="loading"
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Prefix Sign</label
              >
              <input
                v-model="form.PrefixSign"
                type="text"
                maxlength="20"
                placeholder="PrefixSign"
                :disabled="loading"
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Password Sign</label
              >
              <input
                v-model="form.PasswordSign"
                type="password"
                maxlength="50"
                placeholder="PasswordSign"
                :disabled="loading"
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >TransPorter Module</label
              >
              <select
                v-model="form.TransPorterModule"
                :disabled="loading"
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
              >
                <option value="">Select Module</option>
                <option value="HTTP">HTTP</option>
                <option value="HTTPS">HTTPS</option>
                <option value="FTP">FTP</option>
                <option value="SFTP">SFTP</option>
              </select>
            </div>
            <div class="flex items-center mt-6">
              <input
                v-model="form.ProxyUsed"
                type="checkbox"
                :disabled="loading"
                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 disabled:bg-gray-100 mr-2"
              />
              <label class="text-sm font-medium text-gray-700"
                >Proxy Used</label
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Proxy Server</label
              >
              <input
                v-model="form.ProxyServer"
                type="text"
                maxlength="100"
                placeholder="proxy.example.com"
                :disabled="loading || !form.ProxyUsed"
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Proxy Port</label
              >
              <input
                v-model="form.ProxyPort"
                type="text"
                maxlength="10"
                placeholder="8080"
                :disabled="loading || !form.ProxyUsed"
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Proxy UserName</label
              >
              <input
                v-model="form.ProxyUserName"
                type="text"
                maxlength="50"
                placeholder="ProxyUserName"
                :disabled="loading || !form.ProxyUsed"
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Proxy Password</label
              >
              <input
                v-model="form.ProxyPassword"
                type="password"
                maxlength="50"
                placeholder="ProxyPassword"
                :disabled="loading || !form.ProxyUsed"
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Default CA *</label
              >
              <input
                v-model="form.DefaultCA"
                type="text"
                maxlength="50"
                placeholder="DefaultCA"
                :disabled="loading"
                required
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Privilege</label
              >
              <select
                v-model="form.Privilege"
                :disabled="loading"
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
              >
                <option value="">Select Privilege</option>
                <option value="ADMIN">ADMIN</option>
                <option value="USER">USER</option>
                <option value="MANAGER">MANAGER</option>
                <option value="READONLY">READONLY</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Profile Folder</label
              >
              <input
                v-model="form.ProfileFolder"
                type="text"
                maxlength="255"
                placeholder="/profiles/customer"
                :disabled="loading"
                class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
              />
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

        <!-- Profile List -->
        <div class="mt-4">
          <h3 class="text-lg font-medium text-gray-900 mb-2">Profile List</h3>
          <div class="w-full border border-gray-200 rounded-lg overflow-hidden">
            <div
              class="grid grid-cols-6 bg-gray-100 py-2 px-4 font-semibold text-gray-700"
            >
              <div>Profile ID</div>
              <div>Customer ID</div>
              <div>Box Type</div>
              <div>NSP Provider</div>
              <div>Box Status</div>
              <div class="text-right">Command</div>
            </div>
            <div
              v-for="(profile, index) in profileList"
              :key="profile.id || index"
              class="grid grid-cols-6 items-center py-2 px-4 border-t border-gray-200"
            >
              <div>{{ profile.ProfileID }}</div>
              <div>{{ profile.CustomerID }}</div>
              <div>{{ profile.BoxType }}</div>
              <div>{{ profile.NSPGatewayName }}</div>
              <div>
                <span
                  :class="
                    profile.BoxStatus === 'ACTIVE'
                      ? 'text-green-600 font-bold'
                      : 'text-red-600 font-bold'
                  "
                >
                  {{ profile.BoxStatus }}
                </span>
              </div>
              <div class="flex justify-end gap-2">
                <button
                  @click="editProfile(profile)"
                  class="text-blue-600 hover:text-blue-900"
                >
                  Edit
                </button>
                <button
                  @click="deleteProfile(profile)"
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
  name: "ProfileModal",
  data() {
    return {
      showModal: false,
      loading: false,
      error: null,
      success: null,
      isEditing: false,
      editingProfileId: null,
      form: {
        ProfileID: "",
        CustomerID: "",
        BoxType: "",
        NSPGatewayName: "",
        BoxStatus: "",
        ebXMLUserID: "",
        SenderRegistration: "",
        Organization: "",
        DefaultUser: "",
        DefaultPassword: "",
        Prefix: "",
        PasswordPrefix: "",
        PrefixSign: "",
        PasswordSign: "",
        TransPorterModule: "",
        ProxyUsed: false,
        ProxyServer: "",
        ProxyPort: "",
        ProxyUserName: "",
        ProxyPassword: "",
        DefaultCA: "",
        Privilege: "",
        ProfileFolder: "",
      },
      profileList: [],
    };
  },
  props: {
    customerId: {
      type: [String, Number],
      default: null,
    },
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
          // Update existing profile
          response = await fetch(
            `${apiUrl}/profile/${this.editingProfileId}`,
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
          // Create new profile
          response = await fetch(`${apiUrl}/profile`, {
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
              `Failed to ${this.isEditing ? "update" : "create"} profile`
          );
        }

        this.success = `Profile ${
          this.isEditing ? "updated" : "created"
        } successfully!`;
        this.resetForm();
        this.$emit("save", data.data);

        // Refresh profile list
        await this.loadProfiles();

        // Clear success message after 3 seconds
        setTimeout(() => {
          this.success = null;
        }, 3000);
      } catch (error) {
        console.error("Error saving profile:", error);
        this.error = error.message || "Failed to save profile";
      } finally {
        this.loading = false;
      }
    },

    async loadProfiles() {
      try {
        const apiUrl = process.env.API_BASE_URL || "http://localhost:4000/api";
        const token = localStorage.getItem("token");

        if (!token) return;

        // ดึง customerId จาก route parameters หรือ props
        const customerId =
          this.$route.params.customerId ||
          this.$route.params.id ||
          this.customerId;

        // ถ้ามี customerId ให้ดึงข้อมูล customer
        if (customerId) {
          try {
            const customerResponse = await fetch(
              `${apiUrl}/customers/${customerId}`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

            if (customerResponse.ok) {
              const customerResult = await customerResponse.json();
              const customerData = customerResult.data;

              // กำหนดข้อมูล customer ใน form
              this.form.CustomerID =
                customerData.CustomerID || customerData.id || "";
            }
          } catch (customerError) {
            console.error("Error loading customer:", customerError);
          }
        }

        const response = await fetch(`${apiUrl}/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          this.profileList = data.data || [];
        } else {
          console.error("Failed to load profiles:", response.status);
        }
      } catch (error) {
        console.error("Error loading profiles:", error);
      }
    },

    resetForm() {
      // เก็บ CustomerID ไว้เมื่อ reset form
      const keepCustomerId = this.form.CustomerID;

      this.form = {
        ProfileID: "",
        CustomerID: keepCustomerId,
        BoxType: "",
        NSPGatewayName: "",
        BoxStatus: "",
        ebXMLUserID: "",
        SenderRegistration: "",
        Organization: "",
        DefaultUser: "",
        DefaultPassword: "",
        Prefix: "",
        PasswordPrefix: "",
        PrefixSign: "",
        PasswordSign: "",
        TransPorterModule: "",
        ProxyUsed: false,
        ProxyServer: "",
        ProxyPort: "",
        ProxyUserName: "",
        ProxyPassword: "",
        DefaultCA: "",
        Privilege: "",
        ProfileFolder: "",
      };
      this.isEditing = false;
      this.editingProfileId = null;
    },

    closeModal() {
      this.showModal = false;
      this.resetForm();
      this.error = null;
      this.success = null;
    },

    editProfile(profile) {
      this.isEditing = true;
      this.editingProfileId = profile.id;
      this.form = {
        ProfileID: profile.ProfileID,
        CustomerID: profile.CustomerID,
        BoxType: profile.BoxType,
        NSPGatewayName: profile.NSPGatewayName,
        BoxStatus: profile.BoxStatus,
        ebXMLUserID: profile.ebXMLUserID,
        SenderRegistration: profile.SenderRegistration,
        Organization: profile.Organization,
        DefaultUser: profile.DefaultUser,
        DefaultPassword: "", // Don't populate password fields
        Prefix: profile.Prefix,
        PasswordPrefix: "", // Don't populate password fields
        PrefixSign: profile.PrefixSign,
        PasswordSign: "", // Don't populate password fields
        TransPorterModule: profile.TransPorterModule,
        ProxyUsed: profile.ProxyUsed,
        ProxyServer: profile.ProxyServer,
        ProxyPort: profile.ProxyPort,
        ProxyUserName: profile.ProxyUserName,
        ProxyPassword: "", // Don't populate password fields
        DefaultCA: profile.DefaultCA,
        Privilege: profile.Privilege,
        ProfileFolder: profile.ProfileFolder,
      };
    },

    async deleteProfile(profile) {
      if (
        confirm(
          `Are you sure you want to delete profile "${profile.ProfileID}"?`
        )
      ) {
        try {
          const apiUrl =
            process.env.API_BASE_URL || "http://localhost:4000/api";
          const token = localStorage.getItem("token");

          const response = await fetch(`${apiUrl}/profile/${profile.id}`, {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.ok) {
            await this.loadProfiles();
            this.success = "Profile deleted successfully!";

            // Clear success message after 3 seconds
            setTimeout(() => {
              this.success = null;
            }, 3000);
          } else {
            const data = await response.json();
            throw new Error(data.message || "Failed to delete profile");
          }
        } catch (error) {
          console.error("Error deleting profile:", error);
          this.error = error.message || "Failed to delete profile";
        }
      }
    },
  },

  mounted() {
    this.loadProfiles();
  },
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
