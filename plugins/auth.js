export default async function ({ store, redirect, route }) {
  // Initialize auth state from localStorage on app start
  await store.dispatch('initAuth')
  
  // Check if user is authenticated for protected routes
  const protectedRoutes = ['/dashboard', '/profile', '/settings']
  const isProtectedRoute = protectedRoutes.some(path => route.path.startsWith(path))
  
  if (isProtectedRoute && !store.getters.isAuthenticated) {
    return redirect('/login')
  }
}
