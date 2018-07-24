import React, { Component } from 'react';
// import logo from '../img/logo.png'
// import drop from '../img/drop.png'
class Navbar extends Component {

    render() {
        return(
        <div>
             <nav class="navbar navbar-expand-sm sticky-top">

          
<button class="navbar-toggler collapsed mr-auto" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar "></span>
      <span class="sr-only">Toggle navigation</span>
    </button>

    <a class="navbar-brand" href="#"><img class="logo" src="./img/logo.png" height='55' /><img class="logo-small" src="./img/drop.png" height='40' /></a> 
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link hvr-hang" href="#"  data-target="#about">ABOUT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link hvr-hang" href="#">FAQ</a>
        </li>
        <li class="nav-item">
            <a class="nav-link hvr-hang" href="#" data-toggle="modal" data-target="#at-login">LOGIN</a>
        </li>
      </ul>
</div>

</nav>
        </div>
        )
}
}

export default Navbar;