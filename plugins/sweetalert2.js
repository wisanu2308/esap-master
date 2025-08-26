import Vue from 'vue'
import Swal from 'sweetalert2'

Vue.prototype.$swal = Swal

export default ({ app }, inject) => {
  inject('swal', Swal)
}
