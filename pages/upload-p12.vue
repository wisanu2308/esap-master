<template>
  <div class="container">
    <h1>Certificate (Add CA)</h1>

    <form @submit.prevent="uploadP12File" class="upload-form">
      <div class="form-group">
        <label for="p12File">Select file(xx.p12):</label>
        <input type="file" id="p12File" ref="p12FileInput" @change="handleFileChange" accept=".p12, application/x-pkcs12" required>
        <small class="file-info" v-if="selectedFile">{{ selectedFile.name }} ({{ (selectedFile.size / 1024 / 1024).toFixed(2) }} MB)</small>
      </div>

      <button type="submit" :disabled="uploading">
        {{ uploading ? 'กำลังอัปโหลด...' : 'อัปโหลดไฟล์' }}
      </button>
    </form>

    <div v-if="message" :class="['message', messageType]">
      {{ message }}
      <p v-if="uploadedFileId">
        File ID: <strong>{{ uploadedFileId }}</strong>
        <br>
        <a :href="`/api/download-p12/${uploadedFileId}`" target="_blank" class="download-link">ดาวน์โหลดไฟล์ที่อัปโหลด</a>
      </p>
    </div>

    <hr>

    <h2>Seeking in your CA</h2>
    <div class="download-section">
      <input type="number" v-model="downloadFileId" placeholder="กรอก File ID เพื่อดาวน์โหลด" class="download-input">
      <button @click="downloadP12File" :disabled="!downloadFileId">ดาวน์โหลด</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedFile: null,
      uploading: false,
      message: '',
      messageType: '', // 'success' or 'error'
      uploadedFileId: null, // เก็บ ID ของไฟล์ที่อัปโหลดสำเร็จ
      downloadFileId: null, // ID สำหรับการดาวน์โหลด
    };
  },
  methods: {
    handleFileChange(event) {
      this.selectedFile = event.target.files[0];
      this.message = ''; // Clear message on new file selection
      this.uploadedFileId = null;
    },

    async uploadP12File() {
      if (!this.selectedFile) {
        this.message = 'กรุณาเลือกไฟล์ .p12 ก่อน';
        this.messageType = 'error';
        return;
      }

      this.uploading = true;
      this.message = '';
      this.messageType = '';
      this.uploadedFileId = null;

      const formData = new FormData();
      // 'p12File' ต้องตรงกับชื่อฟิลด์ที่ Multer กำหนดใน Backend (upload.single('p12File'))
      formData.append('cartificate', this.selectedFile);

      try {
        const response = await this.$axios.post('/upload-p12', formData, {
          headers: {
            // 'Content-Type': 'multipart/form-data' // Axios จะตั้งค่านี้ให้เองเมื่อใช้ FormData
          },
          // onUploadProgress: progressEvent => {
          //   // สามารถใช้เพื่อแสดง Progress Bar ได้
          //   const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          //   this.message = `กำลังอัปโหลด: ${percentCompleted}%`;
          //   this.messageType = 'info';
          // }
        });

        this.message = response.data.message;
        this.messageType = 'success';
        this.uploadedFileId = response.data.fileId;
        this.$refs.p12FileInput.value = ''; // Clear file input
        this.selectedFile = null;

      } catch (err) {
        console.error('Error uploading file:', err);
        if (err.response && err.response.data && err.response.data.error) {
          this.message = `อัปโหลดไม่สำเร็จ: ${err.response.data.error}`;
        } else {
          this.message = 'เกิดข้อผิดพลาดในการอัปโหลดไฟล์ กรุณาลองใหม่.';
        }
        this.messageType = 'error';
      } finally {
        this.uploading = false;
      }
    },
    
    // เมธอดสำหรับดาวน์โหลดไฟล์
    downloadP12File() {
        if (this.downloadFileId) {
            // สร้าง URL สำหรับดาวน์โหลดโดยตรงผ่าน Backend API
            // เบราว์เซอร์จะจัดการการดาวน์โหลดไฟล์ให้
            const downloadUrl = `${this.$axios.defaults.baseURL}/download-p12/${this.downloadFileId}`;
            window.open(downloadUrl, '_blank');
        } else {
            alert('กรุณากรอก File ID ที่ต้องการดาวน์โหลด');
        }
    }
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 50px auto;
  padding: 30px;
  background-color: #77b6f4;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1, h2 {
  color: #343a40;
  margin-bottom: 25px;
  font-size: 2em;
}

.upload-form {
  background-color: #ffffff;
  padding: 25px;
  border-radius: 8px;
  border: 1px solid #dee2e6;
  margin-bottom: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #495057;
}

input[type="file"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: #e9ecef;
}

.file-info {
    font-size: 0.9em;
    color: #6c757d;
    margin-top: 5px;
    display: block;
}

button {
  background-color: #007bff;
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 5px;
  font-size: 1.1em;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  width: 100%;
}

button:hover:not(:disabled) {
  background-color: #0056b3;
  transform: translateY(-2px);
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.message {
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
  font-weight: bold;
  word-wrap: break-word; /* เพื่อจัดการข้อความยาวๆ */
}

.message.success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.message.error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.download-link {
    color: #007bff;
    text-decoration: none;
    font-size: 0.9em;
    margin-top: 10px;
    display: inline-block;
}

.download-link:hover {
    text-decoration: underline;
}

hr {
    border: 0;
    border-top: 1px solid #eee;
    margin: 40px 0;
}

.download-section {
    background-color: #ffffff;
    padding: 25px;
    border-radius: 8px;
    border: 1px solid #dee2e6;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap; /* ให้ responsive */
}

.download-input {
    flex-grow: 1; /* ขยายเต็มพื้นที่ */
    padding: 10px;
    border: 1px solid #ced4da;
    border-radius: 5px;
    font-size: 1em;
    min-width: 150px; /* ความกว้างขั้นต่ำ */
}
</style>