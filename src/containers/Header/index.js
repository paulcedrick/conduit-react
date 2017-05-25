import React, { Component } from 'react';
import NavItem from '../../components/NavItem/';
import NavBar from '../../components/NavBar/';

export default class Header extends Component {
    render() {
        return (
            <NavBar>
                <div className="container">
                    <a className="navbar-brand">conduit</a>
                    <ul className="nav navbar-nav pull-xs-right">
                        <NavItem isActive>Home</NavItem>
                        <NavItem>
                            <i className="ion-compose"></i>&nbsp;New Post
                        </NavItem>
                        <NavItem>
                            <i className="ion-gear-a"></i>&nbsp;Settings
                        </NavItem>
                        <NavItem>Sign Up</NavItem>
                    </ul>
                </div>
            </NavBar>
        );
    }
}