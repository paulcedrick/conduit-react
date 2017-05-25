import React from 'react';

const NavItem = ({children, isActive}) => {
    let style = "nav-link";
    if (isActive) {
        style += " active";
    }
    return (
        <li className="nav-item">
            <a className={style}>{children}</a>
        </li>
    );
}

export default NavItem;