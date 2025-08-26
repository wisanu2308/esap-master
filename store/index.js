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
            email: 'admin@esap.com',
            role: 'administrator',
            fullName: 'System Administrator'
          }
          const mockToken = 'mock-jwt-token-' + Date.now()
          
          // บันทึกข้อมูลใน store
          commit('SET_AUTH', { user: mockUser, token: mockToken })
          
          // บันทึกใน localStorage (สำหรับจำลอง persistence)
          if (process.client) {
            localStorage.setItem('auth.token', mockToken)
            localStorage.setItem('auth.user', JSON.stringify(mockUser))
          }
          
          resolve({ user: mockUser, token: mockToken })
        } else if (username === 'user' && password === 'user123') {
          const mockUser = {
            id: 2,
            username: 'user',
            email: 'user@esap.com',
            role: 'user',
            fullName: 'Regular User'
          }
          const mockToken = 'mock-jwt-token-' + Date.now()
          
          commit('SET_AUTH', { user: mockUser, token: mockToken })
          
          if (process.client) {
            localStorage.setItem('auth.token', mockToken)
            localStorage.setItem('auth.user', JSON.stringify(mockUser))
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
    }
  },
  
  // ตรวจสอบ auth state จาก localStorage เมื่อ refresh page
  async initAuth({ commit }) {
    if (process.client) {
      const token = localStorage.getItem('auth.token')
      const userData = localStorage.getItem('auth.user')
      
      if (token && userData) {
        try {
          const user = JSON.parse(userData)
          commit('SET_AUTH', { user, token })
        } catch (error) {
          console.error('Error parsing user data:', error)
          commit('CLEAR_AUTH')
        }
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
