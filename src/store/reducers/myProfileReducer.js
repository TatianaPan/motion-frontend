

const initialState = {
    profile: {}
};

export const myProfileReducer = (state = initialState, action) => {
   
    switch (action.type) {
        case 'GET_ME':
            
            return {
                ...state,
                profile: action.payload
            };
    
        default:
            return state;
    }
}
