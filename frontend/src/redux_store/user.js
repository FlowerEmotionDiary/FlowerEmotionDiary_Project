const initState = {
    access_token: {},
    isLoggendIn: false
}

const user = (state = initState, action) => {

    switch(action.type) {
        case "LOGIN":
            return {
                ...state,
                access_token: action.access_token,
                user_id: action.user_id,
                isLoggendIn: action.isLoggendIn
            }

        case "LOGOUT": 
            return {
                ...state,
                access_token: action.access_token,
                user_id: action.user_id,
                isLoggendIn: action.isLoggendIn
            }
        
        case "REFRESH":
            return {
                ...state,
                access_token: action.access_token
            }
        
        defalut:
            return state;
    }
};

export default user;