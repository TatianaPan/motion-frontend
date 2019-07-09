import axios from 'axios';

const URL = `https://motion.propulsion-learn.ch/backend`;

export const get_users = (users) => {
    return {
        type: 'GET_USERS',
        payload: users
    }
};

export const getUsers = () => async (dispatch, getState) => {
    const token = getState().loginReducer.token;
    const headers = {
        Authorization: `Bearer ${token}`
    };
    const config = {
        headers: headers
    };
    const response = await axios.get(`${URL}/api/users/`, config);
    const users = response.data;
    dispatch(get_users(users));

    //console.log(users);
}

export const getOneUser = (profile) => {
    return {
        type: 'GET_PROFILE',
        payload: profile
    }
}

export const getUserProfile = (id) => async (dispatch, getState) => {
    
    const token = getState().loginReducer.token;
    const headers = {
        Authorization: `Bearer ${token}`
    };
    const config = {
        headers: headers
    };
    const response = await axios.get(`${URL}/api/users/${id}`, config);
    const user = response.data;
    dispatch(getOneUser(user));

    //console.log(user);
}

export const get_following = (following) => {
    return {
        type: 'GET_FOLLOWEES',
        payload: following
    }
}

export const getFollowing = () => async (dispatch, getState) => {
    const token = getState().loginReducer.token;
    const headers = {
        Authorization: `Bearer ${token}`
    };
    const config = {
        headers: headers
    };
    const response = await axios.get(`${URL}/api/users/following/`, config);
    const following = response.data;
    dispatch(get_following(following));

    console.log(following);

}
