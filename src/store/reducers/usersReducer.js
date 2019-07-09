const initialState = {
    users: [],
    user: {},
    followees: []
};

export const usersReducer = (state=initialState, action) => {
    switch (action.type) {    
        case 'GET_USERS':
            
            return {
                ...state,
                users: action.payload
            };

        case 'GET_PROFILE':
                
            return {
                ...state,
                user: action.payload
            }

        case 'GET_FOLLOWEES':
            console.log('from followe reducer')
            return {
                ...state,
                followees: action.payload
            }
    
        default:
            return state;
    }
}
