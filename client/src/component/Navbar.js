import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  {/* <a class="navbar-brand" href="#">Navbar</a> */}
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <NavLink class="nav-link" to="/">Home <span class="sr-only"></span></NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" to="/contact">Contact <span class="sr-only"></span></NavLink>
      </li>
       <li class="nav-item">
        <NavLink class="nav-link" to="/about">About <span class="sr-only"></span></NavLink>
      </li>
       <li class="nav-item">
        <NavLink class="nav-link" to="/login">Login <span class="sr-only"></span></NavLink>
      </li>
       <li class="nav-item">
        <NavLink class="nav-link" to="/signup">Signup <span class="sr-only"></span></NavLink>
      </li>
    </ul>
  </div>
</nav>  
  </>
  )
}

export default Navbar
