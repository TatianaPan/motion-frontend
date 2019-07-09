import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getUsers} from '../../store/actions/usersAction';
//import Header from '../Header';
//import User from '../User';
import {getFollowing} from '../../store/actions/usersAction';
import userpic from '../../assets/users/jennifer.png';
import { Link } from "react-router-dom";
import {unFollowAction} from '../../store/actions/followAction';


class Followees extends Component {

    componentDidMount = () => {
        this.props.dispatch(getUsers());
        this.props.dispatch(getFollowing());
        
    }

    handleUnFollow = (id) => {
        this.props.dispatch(unFollowAction(id));
    }


    render() {
        
        return (
            <div>
                <div className='container'>
                    {this.props.followees.map(user => {
                        
                        return <div className="card horizontal" key={user.id}>
                        <div className="card-image">
                            <img src={userpic}/>
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                            <Link to={`/users/${user.id}`}>{user.username}</Link>
                                
                            <p>First name: {user.first_name}</p>
                            <p>Last name: {user.last_name}</p>
                            </div>
                            <div className="card-action">
                            <a className="waves-effect btn purple darken-1" onClick={() => this.handleUnFollow(user.id)}>Unfollow</a>
                            </div>
                        </div>
                    </div> 
                    })
                    }
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

export default connect(mapStateToProps)(Followees); 
