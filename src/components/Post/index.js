import React, { Component } from 'react';
import {connect} from 'react-redux';
import './index.css';
//import pic1 from '../../assets/users/jennifer.png';
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
                    <img src={this.props.post.user.photo} className="userpic" alt='userpic' />
                    <p className="name">{this.props.post.user.username}<br/>{this.props.post.created}</p>
                </header> 
                <article className='content'>{this.props.post.content}</article>
                {this.props.post.image ? <img src={this.props.post.image} className='post-picture' alt='post' /> : null}
                
                <footer className='footer'>
                    {/* <img src={like} className="like"/> */}
                    <button className={this.state.liked ? 
                        "btn-floating  purple darken-1 like" : "btn-floating  purple lighten-5 like" } 
                        onClick={() => this.handleLike(this.props.post.id)}><i className="material-icons">favorite</i></button>
                    <p className="text">Like</p>
                    <img src={share} className="share" alt='arrow' />
                    <p id="share" className="text">Share</p>
                    {this.props.post.like_count > 1 ? <p className="grey-text">{this.props.post.like_count} likes</p> : 
                    <p className="grey-text">{this.props.post.like_count} like</p>}
                   
                </footer>
            </div> 
        )
    }
}

export default connect()(Post); 
