import React, { Component } from 'react';
import Header from '../Header';
import {getLikedPosts} from '../../store/actions/likedPostsAction';
import {connect} from 'react-redux';
import LikedPost from './LikedPost';
import './index.css';

class LikedPosts extends Component {

    componentDidMount = () => {
        this.props.dispatch(getLikedPosts());
    }

    render() {
        return (
            <div>
                <Header />
                <div className='posts'>
                    {this.props.posts.map(post => {
                        return <div className='item' key={post.id}>
                            <LikedPost 
                        key={post.id}
                        post={post}/>
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
        posts: state.likedPostsReducer.posts
    }
}

export default connect(mapStateToProps)(LikedPosts);
