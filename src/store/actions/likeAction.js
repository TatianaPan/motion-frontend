import axios from 'axios';
import { getFeed } from './feedAction';



const URL = `https://motion.propulsion-learn.ch/backend`;

export const deleteLike = (id) => async (dispatch, getState) => {
    const token = getState().loginReducer.token;
    console.log(token);
    const config = {
        headers : {
            Authorization : `Bearer ${token}`,
        }
    };
    
    const response = await axios.delete(`${URL}/api/posts/like/${id}/`, config);
    await dispatch(getFeed());
    return response;

}


export const likeAction = (id) => async (dispatch, getState) => {
    const token = getState().loginReducer.token;
    const config = {
        headers : {
            "authorization" : `Bearer ${token}`,
        }
    };
    
    const response = await axios.post(`${URL}/api/posts/like/${id}/`, '', config);
    await dispatch(getFeed());
    return response;

}