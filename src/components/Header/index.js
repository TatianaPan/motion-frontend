import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";
import {connect} from 'react-redux';
import { logout } from '../../store/actions/loginAction';
import logo from '../../assets/icons/logo1.png';
import './index.css';


class Header extends Component {

    handleLogout = () => {
        
        this.props.dispatch(logout());
    }

    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper purple darken-1">
                        <div className='logo-wrapper'>
                        <a href="#" className="brand-logo"><img src={logo} className="logo" alt='logo' />Motion</a>
                        </div>
                        
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li className='header-link'><Link to='/users/'>Users</Link></li>
                            <li className='header-link'><Link to='/feed'>Posts</Link></li>
                            <li className='header-link'><Link to='/me/'>My profile</Link></li>
                            {/* <li><a href="badges.html">Components</a></li> */}
                            <li><button className='logout-button' onClick={this.handleLogout}>Logout</button></li>
                        </ul>
                    </div>
                </nav>
                
            </div>
        )
    }
}

export default withRouter(connect()(Header)); 
