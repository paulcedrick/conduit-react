import React from 'react';

const NavBar = ({children}) => (
    <nav className="navbar navbar-light">
        {children}
    </nav>
);

export default NavBar;