export default function ({ store, route, redirect }) {

  // console.log(`Middleware is running for route: ${route.path}`);
  if (!store.state.userId && store.state.userId === "") {
    return redirect('/login');
  }

}