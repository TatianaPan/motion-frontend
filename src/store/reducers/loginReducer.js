

const initialState = {};

export const loginReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                token: action.payload,
                error: null,
                authenticated: true 
            };
        case 'ERROR':
            
            return {
                ...state,
                token: null,
                error: action.payload,
                authenticated: false
            }
        
        case 'LOGOUT':
            localStorage.clear();
            return {
                ...state,
                token: null,
                error: null,
                authenticated: false
            }
    
        default:
            return state;
    }
}


