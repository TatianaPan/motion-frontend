import React, { Component } from 'react';
import userpic from '../../assets/users/jennifer.png';
import {connect} from 'react-redux';
import { withRouter, Link } from "react-router-dom";

class User extends Component {

    render() {
        
        return (
            
            <div className="card horizontal">
                <div className="card-image">
                    <img src={userpic}/>
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <h2>{this.props.user.username}</h2>
                    <p>First name: {this.props.user.first_name}</p>
                    <p>Last name: {this.props.user.last_name}</p>
                    </div>
                    <div className="card-action">
                    <Link to={`/users/${this.props.user.id}`}>Learn more</Link>
                    {/* {this.props.followees.map(user => {
                        if (user.id === this.props.user.id) {
                            return <button>Unfollow</button>
                        } else {
                            return  <button>Follow</button>
                        }
                        
                    })} */}
                    
                    
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
