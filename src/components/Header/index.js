import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";
import {connect} from 'react-redux';
import { logout } from '../../store/actions/loginAction';
import logo from '../../assets/icons/logo1.png';
import './index.css';
import posts from '../../assets/icons/posts_logo.png'

class Header extends Component {

    handleLogout = () => {
        
        this.props.dispatch(logout());
    }

    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper purple darken-1">
                        <a href="#" className="brand-logo"><img src={logo} className="logo"/>Motion</a>
                        
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to='/users/'>Users</Link></li>
                            <li><Link to='/feed'>Posts</Link></li>
                            <li><Link to='/me/'>My profile</Link></li>
                            {/* <li><a href="badges.html">Components</a></li> */}
                            <li><button className='logout' onClick={this.handleLogout}>Logout</button></li>
                        </ul>
                    </div>
                </nav>
                
            </div>
        )
    }
}

export default withRouter(connect()(Header)); 
