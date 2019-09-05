const initialState = {
    users: [
        {id: '1', username: 'Jenny', first_name: 'Jennifer', last_name: 'Smith', post_count: '10'},
        {id: '2', username: 'Jenny', first_name: 'Jennifer', last_name: 'Smith', post_count: '10'},
        {id: '3', username: 'Jenny', first_name: 'Jennifer', last_name: 'Smith', post_count: '10'},
        {id: '4', username: 'Jenny', first_name: 'Jennifer', last_name: 'Smith', post_count: '10'},
        {id: '5', username: 'Jenny', first_name: 'Jennifer', last_name: 'Smith', post_count: '10'},
        {id: '6', username: 'Jenny', first_name: 'Jennifer', last_name: 'Smith', post_count: '10'}
    ],
    user: {id: '3', username: 'Jenny', first_name: 'Jennifer', last_name: 'Smith', post_count: '10'},
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
            
            return {
                ...state,
                followees: action.payload
            }
    
        default:
            return state;
    }
}
