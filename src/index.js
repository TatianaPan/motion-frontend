import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './store';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Feed from './components/Feed';
import {login} from './store/actions/loginAction';
//import AuthComponent from './HOC/RequiredAuth';
import Users from './components/Users';
import UserProfile from './components/UserProfile';
import MyProfile from './components/MyProfile';
import LikedPosts from './components/LikedPosts';

// extract token from local storage and set it on state to prevent logout when page reloads
const token = localStorage.getItem('token')

if (token) {
    store.dispatch(login(token));
}


ReactDOM.render(
<Provider store={ store }>
    <BrowserRouter>
        <Switch>
            {/* <Route exact path='/' component={ App } />
            <Route exact path='/feed/' component={ AuthComponent(Feed) } />
            <Route exact path='/users/' component={ AuthComponent(Users) } />
            <Route exact path='/users/:userId/' component={ AuthComponent(UserProfile) } />
            <Route exact path='/me/' component={ AuthComponent(MyProfile) } />
            <Route exact path='/posts/likes/' component={ AuthComponent(LikedPosts) } /> */}
            <Route exact path='/' component={ App } />
            <Route exact path='/feed/' component={ Feed } />
            <Route exact path='/users/' component={ Users } />
            <Route exact path='/users/:userId/' component={ UserProfile } />
            <Route exact path='/me/' component={ MyProfile } />
            <Route exact path='/posts/likes/' component={ LikedPosts } />
        </Switch>
    </BrowserRouter> 
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
