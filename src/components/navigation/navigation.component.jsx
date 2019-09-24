import React from 'react';
import './navigation.style.scss';

const NavBar = () =>(
    <div id='navbar-container'>

       <nav class="navbar navbar-expand-md">
        <a className="navbar-brand" href="/">Mosbel Paintings</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse " id="navbarNav">
        <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
            <a className="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a className="nav-link" href="/">Portfolio</a>
        </li>
        <li class="nav-item">
            <a className="nav-link" href="/">About</a>
        </li>
        <li class="nav-item">
            <a className="nav-link" href="/">Contact</a>
        </li>
        <li class="nav-item quote">
            <a className="nav-link" href="/">Request Quote</a>
        </li>
        
        </ul>
    </div>
</nav>
    </div>
)

export default NavBar;
