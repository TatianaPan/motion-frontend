const initialState = {
    posts: []
};

export const likedPostsReducer = (state=initialState, action) => {
    switch (action.type) {    
        case 'GET_POSTS':
            console.log('from reducer')
            return {
                ...state,
                posts: action.payload
            };
    
        default:
            return state;
    }
}
