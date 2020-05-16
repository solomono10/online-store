import React from 'react';
import groceriesimage from '../images/groceries.png';
// /Users/kayodeomo/Documents/workspace/online-store/src/images/groceries.png

const NavBar = () => {
    return ( 
        <nav className="navbar sticky-top navbar-dark bg-dark">
            <a className="navbar-brand"><img src={groceriesimage} width="40" height="40" className="d-inline-block align-top" alt="" loading="lazy" />Shop
            </a>
        </nav>
     );
}


export default NavBar;