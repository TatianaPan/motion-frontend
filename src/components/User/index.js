import React, { Component } from 'react';
import userpic from '../../assets/users/jennifer.png';
import {connect} from 'react-redux';
import { withRouter, Link } from "react-router-dom";
import './index.css'

class User extends Component {

    render() {
        
        return (
            
            <div id='user-profile' className="card horizontal">
                <div className="card-image">
                    <img src={userpic} alt='userpic' />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <h2>{this.props.user.username}</h2>
                    <p>First name: {this.props.user.first_name}</p>
                    <p>Last name: {this.props.user.last_name}</p>
                    </div>
                    <div className="card-action">
                    <Link to={`/users/${this.props.user.id}`}>Learn more</Link>
                    
                    
                    </div>
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    
    return {
        users: state.usersReducer.users,
        followees: state.usersReducer.followees
    }
}

export default withRouter(connect(mapStateToProps)(User)); 
