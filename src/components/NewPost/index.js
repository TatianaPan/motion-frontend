import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { newPostAction } from '../../store/actions/newPostAction';
import './index.css';


class NewPost extends Component {
    state = {
        content: ''
    }

    handleNewPost = (e) => {
        const content = e.currentTarget.value;
        this.setState({ content });

    }

    post = (e) => {
        e.preventDefault();
        this.props.dispatch(newPostAction(this.state));
        this.setState({ content: '' })
    }


    render() {
        return (
            <div className='new-post-wrapper'>
                <div className='container center-align'>
                    <form className='post-form' onSubmit={this.post}>
                        <input
                            type='text'
                            placeholder="What's new?"
                            value={this.state.content}
                            onChange={this.handleNewPost}
                            rows="10" cols="40" />
                        <button className='post-button'>Post</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(connect()(NewPost));
