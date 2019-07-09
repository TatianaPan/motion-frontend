import axios from 'axios'
//import {loginReducer} from '../reducers/loginReducer'

const URL = `https://motion.propulsion-learn.ch/backend`;

export const get_feed = (feed) => {
    return {
        type: 'GET_FEED',
        payload: feed
    }
};

export const getFeed = () => async (dispatch, getState) => {
    const token = getState().loginReducer.token;
    const headers = {
        Authorization: `Bearer ${token}`
    };
    const config = {
        headers: headers
    };
    const response = await axios.get(`${URL}/api/feed/`, config);
    const feed = response.data;
    dispatch(get_feed(feed));

    console.log(feed);
}