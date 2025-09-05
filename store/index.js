export const state = () => ({
  auth: {
    loggedIn: false,
    user: null,
    token: null
  }
})

export const mutations = {
  SET_AUTH(state, { user, token }) {
    state.auth.loggedIn = true
    state.auth.user = user
    state.auth.token = token
  },
  
  CLEAR_AUTH(state) {
    state.auth.loggedIn = false
    state.auth.user = null
    state.auth.token = null
  },
  
  SET_USER(state, user) {
    state.auth.user = user
  }
}

export const actions = {
  // รับข้อมูลจากการ login และเก็บใน store + localStorage
  async setAuth({ commit }, { user, token }) {
    try {
      // บันทึกข้อมูลใน store
      commit('SET_AUTH', { user, token })
      
      // บันทึกใน localStorage
      if (process.client) {
        localStorage.setItem('auth.token', token)
        localStorage.setItem('auth.user', JSON.stringify(user))
        localStorage.setItem('isLoggedIn', 'true')
        localStorage.setItem('token', token) // สำหรับ component ที่เรียกตรง ๆ
      }
      
      console.log('Auth data saved successfully')
      return { success: true }
    } catch (error) {
      console.error('Error saving auth data:', error)
      throw error
    }
  },
  
  async logout({ commit }) {
    try {
      const apiUrl = process.env.API_BASE_URL || "http://localhost:4000/api";
      const token = localStorage.getItem('auth.token') || localStorage.getItem('token');
      
      // เรียก API logout ถ้ามี token
      if (token) {
        await fetch(`${apiUrl}/auth/logout`, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });
      }
    } catch (error) {
      console.error('Logout API error:', error)
    } finally {
      // ลบข้อมูลจาก store และ localStorage ไม่ว่าจะสำเร็จหรือไม่
      commit('CLEAR_AUTH')
      
      if (process.client) {
        localStorage.removeItem('auth.token')
        localStorage.removeItem('auth.user')
        localStorage.removeItem('isLoggedIn')
        localStorage.removeItem('token')
      }
      
      console.log('Auth data cleared')
    }
  },
  
  // ตรวจสอบ auth state จาก localStorage เมื่อ refresh page
  async initAuth({ commit }) {
    if (process.client) {
      const token = localStorage.getItem('auth.token') || localStorage.getItem('token')
      const userData = localStorage.getItem('auth.user')
      const isLoggedIn = localStorage.getItem('isLoggedIn')
      
      if (token && userData && isLoggedIn === 'true') {
        try {
          const user = JSON.parse(userData)
          
          // ตรวจสอบ token กับ server
          const apiUrl = process.env.API_BASE_URL || "http://localhost:4000/api";
          const response = await fetch(`${apiUrl}/auth/profile`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.ok) {
            const profileData = await response.json();
            commit('SET_AUTH', { user: profileData.data, token })
            console.log('Auth restored and verified with server')
          } else {
            // Token ไม่ valid - ลบข้อมูลทั้งหมด
            commit('CLEAR_AUTH')
            localStorage.removeItem('auth.token')
            localStorage.removeItem('auth.user')
            localStorage.removeItem('isLoggedIn')
            localStorage.removeItem('token')
            console.log('Token invalid, cleared auth')
          }
        } catch (error) {
          console.error('Error verifying token:', error)
          commit('CLEAR_AUTH')
          if (process.client) {
            localStorage.removeItem('auth.token')
            localStorage.removeItem('auth.user')
            localStorage.removeItem('isLoggedIn')
            localStorage.removeItem('token')
          }
        }
      } else {
        commit('CLEAR_AUTH')
      }
    }
  }
}

export const getters = {
  isAuthenticated: (state) => state.auth.loggedIn,
  user: (state) => state.auth.user,
  token: (state) => state.auth.token,
  userRole: (state) => state.auth.user?.userLevel || null,
  customerName: (state) => state.auth.user?.customerName || null,
  customerId: (state) => state.auth.user?.customerID || null
}
