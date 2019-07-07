import {combineReducers} from 'redux';
import {loginReducer} from './loginReducer';
import {feedReducer} from './feedReducer';
import { usersReducer } from './usersReducer';
import { myProfileReducer } from './myProfileReducer';
import {likedPostsReducer} from './likedPostsReducer';


export const reducer = combineReducers({loginReducer, feedReducer, usersReducer, myProfileReducer, likedPostsReducer});
