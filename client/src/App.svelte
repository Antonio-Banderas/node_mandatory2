<script>
  // --- AUX --- //
  import { Router, Link, Route } from "svelte-navigator";
  import PrivateRoute from "./components/PrivateRoute/PrivateRoute.svelte";

  // --- COMPONENTS --- //
  import Login from "./components/Login.svelte";

  // --- PAGES --- //
  import Admin from "./pages/Admin.svelte";
  import Home from "./pages/Home.svelte";

  // --- TOASTR --- //
  import Toastr from "./toastr/Toastr.svelte";
  import { notifications } from "./toastr/notifications";

</script>

<main />

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/admin">Admin</Link>
  </nav>

  <Route path="/"><Home/></Route>
  <Route path="/login"><Login/></Route>
  <PrivateRoute path="/admin"><Admin /></PrivateRoute>
</Router>


<Toastr/>

<style>
  nav{
    display: flex;
    justify-content: space-around;
    place-items: center;
    width: 350px;
    height: 60px;
    border: 1px solid rgb(119, 119, 119);
    border-radius: 15px;
  }
</style>
