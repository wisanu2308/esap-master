export default function ({ $auth, redirect }) {
  // ถ้าผู้ใช้ login แล้ว ให้ redirect ไปหน้า portal
  if ($auth.loggedIn) {
    return redirect('/')
  }
}
