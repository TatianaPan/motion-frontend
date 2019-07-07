import axios from 'axios'

const URL = `https://motion.propulsion-learn.ch/backend`;

export const liked_posts = (posts) => {
    return {
        type: 'GET_POSTS',
        payload: posts
    }
};

export const getLikedPosts = () => async (dispatch, getState) => {
    const token = getState().loginReducer.token;
    const headers = {
        Authorization: `Bearer ${token}`
    };
    const config = {
        headers: headers
    };
    const response = await axios.get(`${URL}/api/posts/likes`, config);
    const posts = response.data;
    dispatch(liked_posts(posts));

    console.log(posts);
}