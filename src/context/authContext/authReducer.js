import { LOADING, LOGIN_ERROR, USER_LOGIN_SUCCESS } from "../../types";


const authReducer = (state, action) => {
    switch (action.type) {
        case LOADING:
            return {...state, loading: true}
            break;
        case USER_LOGIN_SUCCESS:
            return {...state, token: action.payload, loading: false}
        case LOGIN_ERROR:
            return {...state, loading: false, error: action.payload}
        case LOGIN_ERROR:
            return {...state, loading: false, error: null}
        case "SET_ERROR":
            return { ...state, error: action.payload };
        case "RESET_ERROR":
            return { ...state, error: null };
        default:
            break;
    }

}

export default authReducer