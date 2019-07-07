const initialState = {
    feed: []
};

export const feedReducer = (state=initialState, action) => {
    switch (action.type) {    
        case 'GET_FEED':
            console.log('from reducer')
            return {
                ...state,
                feed: action.payload
            };
    
        default:
            return state;
    }
}

