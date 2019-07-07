import axios from 'axios'

const URL = `https://motion.propulsion-learn.ch/backend`;

export const login = token => {
    return {
        type: 'LOGIN',
        payload: token
    }
};

export const error = error => {
    return {
        type: 'ERROR',
        payload: error
    }
};

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
};

export const loginAction = (userData) => async (dispatch, getState) => {
    try {
        const response = await axios.post(`${ URL }/api/auth/token/`, userData);
        const token = response.data.access;
        //store token in local storage
        localStorage.setItem('token', token);
        dispatch(login(token));
        console.log(response);
        return response;
    } catch (e) {
        dispatch(error('Invalid login or password'));
    }
}
