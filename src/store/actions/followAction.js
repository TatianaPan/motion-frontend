import axios from 'axios';

const URL = `https://motion.propulsion-learn.ch/backend`;

export const follow = () => {
    return {
        type: 'FOLLOW'
    }
}

export const followAction = (id) => async (dispatch, getState) => {
    const token = getState().loginReducer.token;
    const config = {
        headers : {
            "authorization" : `Bearer ${token}`,
        }
    };
    
    const response = await axios.post(`${URL}/api/users/follow/${id}/`, '', config);
    console.log(response)
    await dispatch(follow());
    return response;

}

export const unfollow = () => {
    return {
        type: 'UNFOLLOW'
    }
}

export const unFollowAction = (id) => async (dispatch, getState) => {
    const token = getState().loginReducer.token;
    const config = {
        headers : {
            "Authorization" : `Bearer ${token}`,
        }
    };
    
    console.log(id)
    
    const response = await axios.delete(`${URL}/api/users/follow/${id}/`, config);
    console.log(response)
    await dispatch(unfollow());
    return response;
}