<template>
  <div class="login-page">
    <div class="login-container">
        <!-- Login Form -->
        <div class="form-box login">
            <form @submit.prevent="handleLogin" class="login-form">
                <h1>LOGIN</h1>
                <div class="input-box">
                    <input 
                      v-model="loginForm.username"
                      type="text" 
                      placeholder="Username" 
                      required 
                      autocomplete="off"
                    >
                    <i class='bx bx-user'></i>
                </div>
                <div class="input-box">
                    <input 
                      v-model="loginForm.password"
                      type="password" 
                      placeholder="Password" 
                      required 
                      autocomplete="off"
                    >
                    <i class='bx bx-lock-alt'></i>
                </div>
                <div class="forgot-link">
                    <a href="#" @click.prevent="forgotPassword">Forgot password?</a>
                </div>
                <button 
                  type="submit" 
                  class="login-btn" 
                  :class="{ loading: isLoading }"
                  :disabled="isLoading"
                >
                  {{ isLoading ? 'Loading...' : 'LOGIN' }}
                </button>
            </form>
        </div>

        <!-- Registration Form -->
        <div class="form-box register">
            <form @submit.prevent="handleRegister" class="login-form">
                <h1>REGISTRATION</h1>
                <div class="input-box">
                    <input 
                      v-model="registerForm.username"
                      type="text" 
                      placeholder="Name or Companyname(ENG)" 
                      required 
                      autocomplete="off"
                    >
                    <i class='bx bx-user'></i>
                </div>
                <div class="input-box">
                    <input 
                      v-model="registerForm.password"
                      type="password" 
                      placeholder="Use to password" 
                      required 
                      autocomplete="off"
                    >
                    <i class='bx bx-lock-alt'></i>
                </div>
                <div class="input-box">
                    <input 
                      v-model="registerForm.email"
                      type="email" 
                      placeholder="Email" 
                      required 
                      autocomplete="off"
                    >
                    <i class='bx bx-envelope'></i>
                </div>                
                <div class="input-box">
                    <input 
                      v-model="registerForm.tel"
                      type="tel" 
                      placeholder="Tel.No.Contact" 
                      required 
                      autocomplete="off"
                    >
                    <i class='bx bx-phone'></i> 
                </div>
                <div class="input-box">
                    <input 
                      ref="fileInput"
                      type="file" 
                      accept="application/pdf" 
                      required
                      @change="handleFileChange"
                    >
                    <label style="color:#555;">แนบไฟล์ PDF</label>
                </div>
                <button 
                  type="submit" 
                  class="login-btn" 
                  :class="{ loading: isRegistering }"
                  :disabled="isRegistering"
                >
                  {{ isRegistering ? 'Registering...' : 'REGISTER' }}
                </button>
            </form>
        </div>

        <!-- Toggle Panel -->
        <div class="toggle-box">
            <div class="toggle-panel toggle-left">
                <h1>ESAP Welcome</h1>
                <p>Don't have an account?</p>
                <button class="login-btn register-btn" @click="toggleToRegister">Register</button>
            </div>
            <div class="toggle-panel toggle-right">
                <h1>Welcome Back</h1>
                <p>Already have an account?</p>
                <button class="login-btn login-btn-toggle" @click="toggleToLogin">Login</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  layout: 'blank',
  auth: false,
  
  data() {
    return {
      isLoading: false,
      isRegistering: false,
      selectedFile: null,
      loginForm: {
        username: '',
        password: ''
      },
      registerForm: {
        username: '',
        password: '',
        email: '',
        tel: ''
      }
    }
  },

  head() {
    return {
      title: 'Login - ESAP',
      link: [
        { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' }
      ]
    }
  },

  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated
    },
    currentUser() {
      return this.$store.getters.user
    }
  },

  mounted() {
    // ตรวจสอบว่า user login อยู่แล้วหรือไม่
    if (this.isAuthenticated) {
      this.$router.push('/')
      return
    }
    
    this.initializeToggleButtons()
  },

  methods: {
    async handleLogin() {
      this.isLoading = true
      
      try {
        // ใช้ mock login จาก Vuex store
        const result = await this.$store.dispatch('login', {
          username: this.loginForm.username,
          password: this.loginForm.password
        })
        
        this.$swal.fire({
          title: 'Success!',
          text: `เข้าสู่ระบบสำเร็จ\nยินดีต้อนรับ ${result.user.fullName}`,
          icon: 'success',
          timer: 2000,
          showConfirmButton: false
        })
        
        // รอ SweetAlert แสดงครบแล้วค่อย redirect
        setTimeout(() => {
          this.$router.push('/')
        }, 2000)
        
      } catch (error) {
        console.error('Login error:', error)
        this.$swal.fire({
          title: 'Error!',
          text: error.message || 'ไม่สามารถเข้าสู่ระบบได้',
          icon: 'error',
          html: `
            <p>${error.message || 'ไม่สามารถเข้าสู่ระบบได้'}</p>
            <hr>
            <small style="color: #666;">
              <strong>ทดสอบด้วยข้อมูลนี้:</strong><br>
              Username: <code>admin</code> | Password: <code>admin</code><br>
              หรือ<br>
              Username: <code>user</code> | Password: <code>user123</code>
            </small>
          `
        })
      } finally {
        this.isLoading = false
      }
    },

    async handleRegister() {
      // ตรวจสอบไฟล์ PDF
      if (!this.selectedFile || this.selectedFile.type !== "application/pdf") {
        this.$swal.fire('Error', 'กรุณาแนบไฟล์ PDF เท่านั้น', 'error')
        return
      }

      this.isRegistering = true

      const formData = new FormData()
      formData.append('username', this.registerForm.username)
      formData.append('password', this.registerForm.password)
      formData.append('email', this.registerForm.email)
      formData.append('tel', this.registerForm.tel)
      formData.append('pp20_certificate', this.selectedFile)

      try {
        const response = await this.$axios.post('/register', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        
        this.$swal.fire('Register Success', response.data.message || 'สมัครสมาชิกสำเร็จ!', 'success')
        this.resetRegisterForm()
        
      } catch (error) {
        console.error('Register error:', error)
        this.$swal.fire(
          'Register Failed', 
          error.response?.data?.message || 'เกิดข้อผิดพลาดในการสมัครสมาชิก', 
          'error'
        )
      } finally {
        this.isRegistering = false
      }
    },

    async forgotPassword() {
      const { value: password } = await this.$swal.fire({
        title: "Enter your password",
        input: "password",
        inputLabel: "Password",
        inputPlaceholder: "Enter your password",
        inputAttributes: {
          maxlength: "10",
          autocapitalize: "off",
          autocorrect: "off"
        }
      })
      
      if (password) {
        this.$swal.fire(`Entered password: ${password}`)
      }
    },

    handleFileChange(event) {
      this.selectedFile = event.target.files[0]
    },

    resetRegisterForm() {
      this.registerForm = {
        username: '',
        password: '',
        email: '',
        tel: ''
      }
      this.selectedFile = null
      if (this.$refs.fileInput) {
        this.$refs.fileInput.value = ''
      }
    },

    initializeToggleButtons() {
      // ใช้ Vue event handlers แทน DOM manipulation
    },

    toggleToRegister() {
      const container = this.$el.querySelector('.login-container')
      container?.classList.add('active')
    },

    toggleToLogin() {
      const container = this.$el.querySelector('.login-container')
      container?.classList.remove('active')
    }
  }
}
</script>