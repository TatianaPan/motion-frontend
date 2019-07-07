import axios from 'axios';
import { getFeed } from './feedAction';



const URL = `https://motion.propulsion-learn.ch/backend`;


export const newPostAction = (data) => async (dispatch, getState) => {
    const token = getState().loginReducer.token;
    const config = {
        headers : {
            Authorization : `Bearer ${token}`,
        }
    };
    // second argument should be DATA, then CONFIG, DATA can be empty string
    const response = await axios.post(`${URL}/api/posts/new-post/`, data, config);
    await dispatch(getFeed());
    return response;

}