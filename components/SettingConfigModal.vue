<template>
  <div>
    <button
      @click="showModal = true"
      class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
    >
      Setting Config
    </button>
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h3 class="text-lg font-semibold mb-4">Setting Config</h3>
        <form @submit.prevent="save">
          
          <div class="flex justify-end gap-2">
            <button type="button" @click="showModal = false" class="px-4 py-2 bg-gray-500 text-white rounded">Cancel</button>
            <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingConfigModal",
  data() {
    return {
      showModal: false,
      form: {
        configName: "",
        value: "",
      },
    };
  },
  methods: {
    save() {
      this.$emit("save", { ...this.form });
      this.showModal = false;
    },
  },
};
</script>