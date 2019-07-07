import React, { Component } from 'react';
import Header from '../Header';
import {connect} from 'react-redux';
import {getMyProfile} from '../../store/actions/myProfileAction';
import userpic from '../../assets/users/userpic.webp';
import { Link } from "react-router-dom";
import './index.css';
//import LikedPosts from '../LikedPosts';
import Followees from '../Followees';

class MyProfile extends Component {

    componentDidMount = () => {
        this.props.dispatch(getMyProfile());
    }

    render() {
        return (
            <div>
                <Header />
                <div className='container'>
                    <div className="card horizontal">
                        <div className="card-image">
                            <img src={userpic}/>
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <h2>{this.props.profile.username}</h2>
                            <p>First name: {this.props.profile.first_name}</p>
                            <p>Last name: {this.props.profile.last_name}</p>
                            <p>Post count: {this.props.profile.post_count}</p>
                            <p>E-mail: {this.props.profile.email}</p>
                            
                            </div>
                            <div className="card-action">
                            <Link className='link' to='/posts/likes/'>My favourite posts </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Followees />
            </div>
        )
    }
}

const mapStateToProps = state => {
    
    return {
        profile: state.myProfileReducer.profile
    }
}

export default connect(mapStateToProps)(MyProfile);
