export default function ({ store, route, redirect }) {
  // console.log(`Middleware is running for route: ${route.path}`);
  
  // Check if user is authenticated using the new auth structure
  if (!store.getters.isAuthenticated) {
    return redirect('/login');
  }
}