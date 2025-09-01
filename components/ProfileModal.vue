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
      <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-5xl max-h-[80vh] overflow-y-auto">
        <h3 class="text-lg font-semibold mb-4">Add Profile</h3>
        <form @submit.prevent="save">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Profile ID</label>
              <input v-model="form.profileId" type="text" maxlength="6" placeholder="ProfileID" class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Customer ID</label>
              <input v-model="form.customerId" type="text" maxlength="10" placeholder="CustomerID" class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Box Type</label>
              <input v-model="form.boxType" type="text" maxlength="20" placeholder="BoxType" class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">NSP Provider</label>
              <select v-model="form.nspProvider" class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option disabled value="">NSP</option>
                <option>EDI Service Application Provider(ESAP)</option>
                <option>Thai Trade Net (TTN)</option>
                <option>Trad SIAM International</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">BoxStatus</label>
              <input v-model="form.boxStatus" type="text" maxlength="20" placeholder="BoxStatus" class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">ebXML UserID</label>
              <input v-model="form.ebXMLUserID" type="text" maxlength="30" placeholder="ebXMLUserID" class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">SenderRegistration</label>
              <input v-model="form.senderRegistration" type="text" maxlength="30" placeholder="SenderRegistration" class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Organization</label>
              <input v-model="form.organization" type="text" maxlength="30" placeholder="Organization" class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">DefaultUser</label>
              <input v-model="form.defaultUser" type="text" maxlength="10" placeholder="DefaultUser" class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">DefaultPassword</label>
              <input v-model="form.defaultPassword" type="text" maxlength="15" placeholder="DefaultPassword" class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Prefix</label>
              <input v-model="form.prefix" type="text" maxlength="6" placeholder="Prefix" class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">PasswordPrefix</label>
              <input v-model="form.passwordPrefix" type="text" maxlength="15" placeholder="PasswordPrefix" class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">PrefixSign</label>
              <input v-model="form.prefixSign" type="text" maxlength="10" placeholder="PrefixSign" class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">PasswordSign</label>
              <input v-model="form.passwordSign" type="text" maxlength="15" placeholder="PasswordSign" class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">TransPorterModule</label>
              <input v-model="form.transPorterModule" type="text" maxlength="10" placeholder="TransPorterModule" class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div class="flex items-center mt-6">
              <label class="block text-sm font-medium text-gray-700 mr-2">ProxyUsed</label>
              <input v-model="form.proxyUsed" type="checkbox" class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">ProxyServer</label>
              <input v-model="form.proxyServer" type="text" maxlength="15" placeholder="ProxyServer" class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">ProxyPort</label>
              <input v-model="form.proxyPort" type="text" maxlength="10" placeholder="ProxyPort" class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">ProxyUserName</label>
              <input v-model="form.proxyUserName" type="text" maxlength="20" placeholder="ProxyUserName" class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">ProxyPassword</label>
              <input v-model="form.proxyPassword" type="text" maxlength="15" placeholder="ProxyPassword" class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">DefaultCA</label>
              <input v-model="form.defaultCA" type="text" maxlength="6" placeholder="DefaultCA" class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Privilege</label>
              <input v-model="form.privilege" type="text" maxlength="50" placeholder="Privilege" class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">ProfileFolder</label>
              <input v-model="form.profileFolder" type="text" maxlength="100" placeholder="ProfileFolder" class="w-full px-3 py-2 border border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
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

        <!-- Profile List -->
        <div class="mt-4">
          <h3 class="text-lg font-medium text-gray-900 mb-2">Profile List</h3>
          <div class="w-full border border-gray-200 rounded-lg overflow-hidden">
            <div class="grid grid-cols-6 bg-gray-100 py-2 px-4 font-semibold text-gray-700">
              <div>Profile ID</div>
              <div>Customer ID</div>
              <div>Box Type</div>
              <div>NSP Provider</div>
              <div>BoxStatus</div>
              <div class="text-right">Command</div>
            </div>
            <div
              v-for="(profile, index) in profileList"
              :key="index"
              class="grid grid-cols-6 items-center py-2 px-4 border-t border-gray-200"
            >
              <div>{{ profile.profileId }}</div>
              <div>{{ profile.customerId }}</div>
              <div>{{ profile.boxType }}</div>
              <div>{{ profile.nspProvider }}</div>
              <div>{{ profile.boxStatus }}</div>
              <div class="flex justify-end gap-2">
                <button
                  @click="editProfile(profile)"
                  class="text-blue-600 hover:text-blue-900 flex items-center"
                  title="Edit"
                >
                  Edit
                </button>
                <button
                  @click="deleteProfile(profile)"
                  class="text-red-600 hover:text-red-900 flex items-center"
                  title="Delete"
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
      form: {
        profileId: "",
        customerId: "",
        boxType: "",
        nspProvider: "",
        boxStatus: "",
        ebXMLUserID: "",
        senderRegistration: "",
        organization: "",
        defaultUser: "",
        defaultPassword: "",
        prefix: "",
        passwordPrefix: "",
        prefixSign: "",
        passwordSign: "",
        transPorterModule: "",
        proxyUsed: false,
        proxyServer: "",
        proxyPort: "",
        proxyUserName: "",
        proxyPassword: "",
        defaultCA: "",
        privilege: "",
        profileFolder: "",
      },
      profileList: [
        {
          profileId: "P001",
          customerId: "C001",
          boxType: "TypeA",
          nspProvider: "EDI Service Application Provider(ESAP)",
          boxStatus: "Active",
        },
        {
          profileId: "P002",
          customerId: "C002",
          boxType: "TypeB",
          nspProvider: "Thai Trade Net (TTN)",
          boxStatus: "Inactive",
        },
      ],
    };
  },
  methods: {
    save() {
      // เพิ่ม profile ใหม่ใน list
      this.profileList.push({ ...this.form });
      this.$emit("save", { ...this.form });
      this.showModal = false;
      // reset form
      Object.keys(this.form).forEach(key => {
        this.form[key] = key === "proxyUsed" ? false : "";
      });
    },
    editProfile(profile) {
      // เพิ่ม logic edit ตามต้องการ
    },
    deleteProfile(profile) {
      this.profileList = this.profileList.filter(p => p !== profile);
    },
  },
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
