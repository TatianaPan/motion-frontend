import React, { Component } from 'react'
import {connect} from 'react-redux';
import {loginAction} from '../../store/actions/loginAction'
//import { loginReducer } from '../../store/reducers/loginReducer';
import {withRouter} from "react-router-dom";
import './index.css';

 class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    handleUserInput = (e) => {
        const username = e.target.value;
        this.setState({username});
    };

    handleUserPassword = (e) => {
        const password = e.target.value;
        this.setState({password});
    };

    login = (e) => {
        e.preventDefault();
        // dispatch a login action; send data to database, get token and set it in store
        this.props.dispatch(loginAction(this.state)).then(response => {
            if (response) {
                this.props.history.push('/feed');
            }
        });
        this.setState({username: '', password: ''});
      
    }

    render() {
        return (
            <div className='login'>
                <form onSubmit={this.login}>
                    <input 
                    type='text' 
                    value={this.state.username} 
                    name='username' 
                    placeholder='Username' 
                    onChange={ this.handleUserInput } 
                    /> 
                    
                    <input 
                    type='password' 
                    value={this.state.password} 
                    name='password' 
                    placeholder='Password' 
                    onChange={ this.handleUserPassword }/>

                    <button className='signin-button'>Sign in</button>
                </form>
            </div>
        )
    }
}

export default withRouter(connect()(Login)); 
