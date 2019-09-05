import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getUsers} from '../../store/actions/usersAction';
import Header from '../Header';
import User from '../User';
import {getFollowing} from '../../store/actions/usersAction';
import './index.css'


class Users extends Component {

    componentDidMount = () => {
        this.props.dispatch(getUsers());
        this.props.dispatch(getFollowing());    
    }

    render() {
        return (
            <div>
                <Header />
                <div className='container users'>
                    {this.props.users.map(user => {
                        
                        return <div className='item' key={ user.id }>
                        <User 
                        key={ user.id }
                        user={ user }/>
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

export default connect(mapStateToProps)(Users); 
