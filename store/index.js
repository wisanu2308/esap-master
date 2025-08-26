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
  // Initialize app และเรียก initAuth
  async nuxtServerInit({ dispatch }) {
    // ฟังก์ชันนี้จะทำงานเมื่อ server-side rendering
    // สำหรับ SPA mode จะไม่ทำงาน แต่เราจะใช้ plugin แทน
  },

  // จำลอง login action
  async login({ commit }, { username, password }) {
    // จำลองการเรียก API
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // ตรวจสอบข้อมูล login แบบจำลอง
        if (username === 'admin' && password === 'admin') {
          const mockUser = {
            id: 1,
            username: 'admin',
            name: 'System Administrator',
            email: 'admin@esap.com',
            role: 'administrator',
            company: 'ESAP Admin',
            fullName: 'System Administrator'
          }
          const mockToken = 'mock-jwt-token-' + Date.now()
          
          // บันทึกข้อมูลใน store
          commit('SET_AUTH', { user: mockUser, token: mockToken })
          
          // บันทึกใน localStorage (สำหรับจำลอง persistence)
          if (process.client) {
            localStorage.setItem('auth.token', mockToken)
            localStorage.setItem('auth.user', JSON.stringify(mockUser))
            localStorage.setItem('isLoggedIn', 'true')
          }
          
          resolve({ user: mockUser, token: mockToken })
        } else if (username === 'user' && password === 'user123') {
          const mockUser = {
            id: 2,
            username: 'user',
            name: 'Regular User',
            email: 'user@esap.com',
            role: 'user',
            company: 'ESAP Company',
            fullName: 'Regular User'
          }
          const mockToken = 'mock-jwt-token-' + Date.now()
          
          commit('SET_AUTH', { user: mockUser, token: mockToken })
          
          if (process.client) {
            localStorage.setItem('auth.token', mockToken)
            localStorage.setItem('auth.user', JSON.stringify(mockUser))
            localStorage.setItem('isLoggedIn', 'true')
          }
          
          resolve({ user: mockUser, token: mockToken })
        } else {
          reject(new Error('Invalid username or password'))
        }
      }, 1000) // จำลอง network delay
    })
  },
  
  async logout({ commit }) {
    commit('CLEAR_AUTH')
    
    // ลบข้อมูลจาก localStorage
    if (process.client) {
      localStorage.removeItem('auth.token')
      localStorage.removeItem('auth.user')
      localStorage.removeItem('isLoggedIn')
      localStorage.removeItem('user') // legacy support
    }
  },
  
  // ตรวจสอบ auth state จาก localStorage เมื่อ refresh page
  async initAuth({ commit }) {
    if (process.client) {
      const token = localStorage.getItem('auth.token')
      const userData = localStorage.getItem('auth.user')
      const isLoggedIn = localStorage.getItem('isLoggedIn')
      
      if (token && userData && isLoggedIn === 'true') {
        try {
          const user = JSON.parse(userData)
          
          // ตรวจสอบว่า token ยังไม่หมดอายุ (ในกรณีจริงควรเช็คกับ server)
          // ที่นี่เราจะเช็คแค่ว่า token มีการสร้างไม่เกิน 24 ชั่วโมง
          const tokenParts = token.split('-')
          const tokenTime = parseInt(tokenParts[tokenParts.length - 1])
          const currentTime = Date.now()
          const tokenAge = currentTime - tokenTime
          const maxAge = 24 * 60 * 60 * 1000 // 24 hours
          
          if (tokenAge < maxAge) {
            commit('SET_AUTH', { user, token })
            console.log('Auth restored from localStorage')
          } else {
            // Token หมดอายุ
            commit('CLEAR_AUTH')
            if (process.client) {
              localStorage.removeItem('auth.token')
              localStorage.removeItem('auth.user')
              localStorage.removeItem('isLoggedIn')
            }
            console.log('Token expired, cleared auth')
          }
        } catch (error) {
          console.error('Error parsing user data:', error)
          commit('CLEAR_AUTH')
          if (process.client) {
            localStorage.removeItem('auth.token')
            localStorage.removeItem('auth.user')
            localStorage.removeItem('isLoggedIn')
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
  userRole: (state) => state.auth.user?.role || null
}
