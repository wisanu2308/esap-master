export default function ({ store, redirect }) {
  // ถ้าผู้ใช้ login แล้ว ให้ redirect ไปหน้าหลัก
  if (store.getters.isAuthenticated) {
    return redirect('/')
  }
}
