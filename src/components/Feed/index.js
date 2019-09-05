import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFeed } from '../../store/actions/feedAction'
import Header from '../Header';
import Post from '../Post';
import './index.css';
import NewPost from '../NewPost';

class Feed extends Component {

    componentDidMount = () => {
        this.props.dispatch(getFeed());
    }

    render() {

        return (

            <div>
                <Header />
                <NewPost />
                <div className='feed-wrapper'>
                    <div className='feed'>
                        {this.props.feed.map(post => {
                            return <div key={post.id}>
                                <Post
                                    key={post.id}
                                    post={post} />
                            </div>
                        })
                        }
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {

    return {
        feed: state.feedReducer.feed
    }
}


export default connect(mapStateToProps)(Feed); 
