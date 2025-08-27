export const state = () => ({
  currentStep: 1,
  totalSteps: 2,
  customerData: {
    // Step 1: Basic Information
    customerId: "",
    fullNameThai: "",
    fullNameEnglish: "",
    email: "",
    phone: "",
    contractName: "",
    taxId: "",
    taxBranch: "",
    status: "active",
    
    // Step 2: Address and Program Details
    addressThai1: "",
    addressThai2: "",
    addressEng1: "",
    addressEng2: "",
    province: "",
    postCode: "",
    
    // Active Programs
    activePrograms: {
      program1: [],
      program2: [],
      program3: []
    }
  }
})

export const mutations = {
  SET_CURRENT_STEP(state, step) {
    state.currentStep = step
  },
  
  UPDATE_CUSTOMER_DATA(state, data) {
    state.customerData = {
      ...state.customerData,
      ...data
    }
  },
  
  UPDATE_ACTIVE_PROGRAMS(state, { programType, programs }) {
    state.customerData.activePrograms[programType] = programs
  },
  
  RESET_CUSTOMER_DATA(state) {
    state.currentStep = 1
    state.customerData = {
      customerId: "",
      fullNameThai: "",
      fullNameEnglish: "",
      email: "",
      phone: "",
      contractName: "",
      taxId: "",
      taxBranch: "",
      status: "active",
      addressThai1: "",
      addressThai2: "",
      addressEng1: "",
      addressEng2: "",
      province: "",
      postCode: "",
      activePrograms: {
        program1: [],
        program2: [],
        program3: []
      }
    }
  }
}

export const actions = {
  updateStep({ commit }, step) {
    commit('SET_CURRENT_STEP', step)
  },
  
  updateCustomerData({ commit }, data) {
    commit('UPDATE_CUSTOMER_DATA', data)
  },
  
  updateActivePrograms({ commit }, payload) {
    commit('UPDATE_ACTIVE_PROGRAMS', payload)
  },
  
  nextStep({ commit, state }) {
    if (state.currentStep < state.totalSteps) {
      commit('SET_CURRENT_STEP', state.currentStep + 1)
    }
  },
  
  previousStep({ commit, state }) {
    if (state.currentStep > 1) {
      commit('SET_CURRENT_STEP', state.currentStep - 1)
    }
  },
  
  async saveCustomer({ state, commit }) {
    try {
      // API call to save customer data
      // const response = await this.$axios.post('/api/customers', state.customerData)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Reset form after successful save
      commit('RESET_CUSTOMER_DATA')
      
      return { success: true }
    } catch (error) {
      console.error('Error saving customer:', error)
      return { success: false, error }
    }
  },
  
  resetForm({ commit }) {
    commit('RESET_CUSTOMER_DATA')
  }
}

export const getters = {
  currentStep: state => state.currentStep,
  totalSteps: state => state.totalSteps,
  customerData: state => state.customerData,
  isFirstStep: state => state.currentStep === 1,
  isLastStep: state => state.currentStep === state.totalSteps,
  progressPercentage: state => (state.currentStep / state.totalSteps) * 100
}
