import React, { Component } from 'react';
import userpic from '../../assets/users/jennifer.png';
import {connect} from 'react-redux';
//import User from '../User';
import {getUserProfile} from '../../store/actions/usersAction';
import Header from '../Header';
import {followAction} from '../../store/actions/followAction';
import {unFollowAction} from '../../store/actions/followAction';


class UserProfile extends Component {

    state = {
        followed: false
    }

    componentDidMount = () => {
        
        const id = this.props.match.params.userId;
        this.props.dispatch(getUserProfile(id));
    }

    handleFollow = (id) => {
        this.props.dispatch(followAction(id));
        this.setState({followed: !this.state.followed})
    }

    handleUnFollow = (id) => {
        this.props.dispatch(unFollowAction(id));
        this.setState({followed: !this.state.followed})
    }

    render() {
        
        return (
                
            <div>
                <Header />
                <div className='container'>
                    <div className="card horizontal">
                        <div className="card-image">
                            <img src={userpic} alt='userpic' />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <h2>{this.props.user.username}</h2>
                            <p>First name: {this.props.user.first_name}</p>
                            <p>Last name: {this.props.user.last_name}</p>
                            <p>Post count: {this.props.user.post_count}</p>
                            </div>
                            <div className="card-action">
                                {/* <a className={this.state.followed ? 
                                    "waves-effect btn purple darken-1" : "waves-effect btn purple lighten-5"} 
                                    
                                    onClick={() => this.handleFollow(this.props.user.id)}>Follow/Unfollow</a> */}
                                
                                {this.state.followed ? <button className="waves-effect btn purple darken-1" 
                                    
                                    onClick={() => this.handleFollow(this.props.user.id)}>Unfollow</button> : 
                                    <button className="waves-effect btn purple lighten-5"
                                        
                                        onClick={() => this.handleFollow(this.props.user.id)}>Follow</button>}
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
}

const mapStateToProps = state => {
    
    return {
        user: state.usersReducer.user,
        followees: state.usersReducer.followees
    }
}

export default connect(mapStateToProps)(UserProfile);
