import axios from 'axios';
import { type } from 'os';

const URL = `https://motion.propulsion-learn.ch/backend`;

export const getMe = (profile) => {
    return {
        type: 'GET_ME',
        payload: profile
    }
};

export const getMyProfile = () => async (dispatch, getState) => {
   
    const token = getState().loginReducer.token;
    
    const headers = {
        Authorization: `Bearer ${token}`
    };

    const config = {
        headers: headers
    };

    const response = await axios.get(`${URL}/api/me/`, config);
    const profile = response.data;
    await dispatch(getMe(profile));

    console.log(profile);
    return response; 
}
