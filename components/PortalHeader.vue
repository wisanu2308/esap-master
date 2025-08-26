<template>
  <div>
    <v-app-bar app color="white" elevation="4" height="70">
      <div class="d-flex align-center w-100">
        <!-- Logo และชื่อระบบ -->
        <div class="d-flex align-center">
          <v-icon
            size="40"
            color="esap_primary"
            class="mr-3"
          >
            mdi-file-document-multiple
          </v-icon>
          <div>
            <h3 class="text-h6 font-weight-bold mb-0" style="color: #FF7640;">
              ESAP System
            </h3>
            <p class="text-caption text-gray-600 mb-0">
              Electronic Single Administrative Platform
            </p>
          </div>
        </div>

        <v-spacer></v-spacer>

        <!-- Navigation Menu -->
        <div class="d-none d-md-flex align-center mr-4">
          <v-btn
            text
            class="mx-2"
            @click="$router.push('/')"
            :color="$route.path === '/' ? 'esap_primary' : 'default'"
          >
            <v-icon left>mdi-view-dashboard</v-icon>
            หน้าหลัก
          </v-btn>

          <v-btn
            text
            class="mx-2"
            @click="$router.push('/')"
            :color="$route.path === '/' ? 'esap_primary' : 'default'"
          >
            <v-icon left>mdi-import</v-icon>
            Import Declaration
          </v-btn>

          <v-btn
            text
            class="mx-2"
            @click="$router.push('/export')"
            :color="$route.path.includes('/export') ? 'esap_primary' : 'default'"
          >
            <v-icon left>mdi-export</v-icon>
            Export Declaration
          </v-btn>

          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                text
                class="mx-2"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon left>mdi-file-document</v-icon>
                เอกสารอื่นๆ
                <v-icon right>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="$router.push('/carmanifest')">
                <v-list-item-icon>
                  <v-icon color="base_carm">mdi-truck</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Car Manifest</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item @click="$router.push('/fdapermit')">
                <v-list-item-icon>
                  <v-icon color="bsae_fda">mdi-medical-bag</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>FDA Permit</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item @click="$router.push('/goods')">
                <v-list-item-icon>
                  <v-icon color="base_goods">mdi-package-variant</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Goods Management</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>

        <!-- User Menu -->
        <v-menu offset-y left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              large
              v-bind="attrs"
              v-on="on"
            >
              <v-avatar size="40" color="esap_primary">
                <v-icon color="white">mdi-account</v-icon>
              </v-avatar>
            </v-btn>
          </template>
          <v-list style="min-width: 250px;">
            <v-list-item>
              <v-list-item-avatar>
                <v-avatar color="esap_primary">
                  <v-icon color="white">mdi-account</v-icon>
                </v-avatar>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold">
                  {{ $auth.user ? $auth.user.name : 'ผู้ใช้งาน' }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ $auth.user ? $auth.user.email : 'user@esap.com' }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item @click="$router.push('/profile')">
              <v-list-item-icon>
                <v-icon>mdi-account-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>ข้อมูลส่วนตัว</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click="$router.push('/settings')">
              <v-list-item-icon>
                <v-icon>mdi-cog</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>ตั้งค่า</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item @click="logout">
              <v-list-item-icon>
                <v-icon color="red">mdi-logout</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="red--text">ออกจากระบบ</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>

        <!-- Mobile Menu -->
        <v-btn
          icon
          class="d-md-none ml-2"
          @click="drawer = !drawer"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <!-- Mobile Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      right
      width="300"
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-avatar color="esap_primary">
              <v-icon color="white">mdi-account</v-icon>
            </v-avatar>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">
              {{ $auth.user ? $auth.user.name : 'ผู้ใช้งาน' }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ $auth.user ? $auth.user.email : 'user@esap.com' }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>

        <v-list-item @click="$router.push('/')">
          <v-list-item-icon>
            <v-icon color="esap_primary">mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>หน้าหลัก</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="$router.push('/import')">
          <v-list-item-icon>
            <v-icon color="base">mdi-import</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Import Declaration</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="$router.push('/export')">
          <v-list-item-icon>
            <v-icon color="base_ex">mdi-export</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Export Declaration</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="$router.push('/carmanifest')">
          <v-list-item-icon>
            <v-icon color="base_carm">mdi-truck</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Car Manifest</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="$router.push('/fdapermit')">
          <v-list-item-icon>
            <v-icon color="bsae_fda">mdi-medical-bag</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>FDA Permit</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="$router.push('/goods')">
          <v-list-item-icon>
            <v-icon color="base_goods">mdi-package-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Goods Management</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="my-2"></v-divider>

        <v-list-item @click="$router.push('/profile')">
          <v-list-item-icon>
            <v-icon>mdi-account-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>ข้อมูลส่วนตัว</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="$router.push('/settings')">
          <v-list-item-icon>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>ตั้งค่า</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="logout">
          <v-list-item-icon>
            <v-icon color="red">mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="red--text">ออกจากระบบ</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'PortalHeader',
  
  data() {
    return {
      drawer: false
    }
  },

  methods: {
    async logout() {
      try {
        this.drawer = false
        
        const result = await this.$swal.fire({
          title: 'ออกจากระบบ?',
          text: 'คุณต้องการออกจากระบบใช่หรือไม่?',
          icon: 'question',
          showCancelButton: true,
          confirmButtonColor: '#FF7640',
          cancelButtonColor: '#6c757d',
          confirmButtonText: 'ออกจากระบบ',
          cancelButtonText: 'ยกเลิก'
        })

        if (result.isConfirmed) {
          await this.$auth.logout()
          
          this.$swal.fire({
            icon: 'success',
            title: 'ออกจากระบบสำเร็จ',
            timer: 1500,
            showConfirmButton: false
          })
        }
      } catch (error) {
        console.error('Logout error:', error)
        this.$swal.fire({
          icon: 'error',
          title: 'เกิดข้อผิดพลาด',
          text: 'ไม่สามารถออกจากระบบได้ กรุณาลองใหม่อีกครั้ง'
        })
      }
    }
  }
}
</script>

<style scoped>
.v-app-bar {
  border-bottom: 3px solid #FF7640;
}

.v-btn.v-btn--text {
  text-transform: none;
}
</style>
