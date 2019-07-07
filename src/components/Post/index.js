import React, { Component } from 'react';
import {connect} from 'react-redux';
import './index.css';
import pic1 from '../../assets/users/jennifer.png';
//import like from '../../assets/icons/like.png';
import share from '../../assets/icons/share.png';
import {likeAction} from '../../store/actions/likeAction';
import {deleteLike} from '../../store/actions/likeAction'



class Post extends Component {

    state = {
        liked: false
    }

    handleLike = (id) => {
        if (this.state.liked) {
            this.setState({liked: !this.state.liked});
            this.props.dispatch(deleteLike(id));
            
        } else {
            this.setState({liked: !this.state.liked});
            this.props.dispatch(likeAction(id));
            
        }
        //e.preventDefault();
    }


    render() {
        return (
            <div className='post'>
                <header className='header'>
                    <img src={pic1} className="userpic"/>
                    <p className="name">{this.props.post.user.username}<br/>{this.props.post.created}</p>
                </header> 
                <article className='content'>{this.props.post.content}</article>
                <footer className='footer'>
                    {/* <img src={like} className="like"/> */}
                    <a className={this.state.liked ? "btn-floating  purple darken-1 like" : "btn-floating  purple lighten-5 like" } onClick={() => this.handleLike(this.props.post.id)}><i className="material-icons">favorite</i></a>
                    <p className="text">Like</p>
                    <img src={share} className="share"/>
                    <p id="share" className="text">Share</p>
                    <p className="grey-text">{this.props.post.like_count} likes</p>
                </footer>
            </div> 
        )
    }
}

export default connect()(Post); 
