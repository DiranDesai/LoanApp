import { LOADING, LOGIN_ERROR, USER_LOGIN_SUCCESS, RESET_ERROR, SET_ERROR, USER_LOGOUT, UPDATE_PROFILE } from "../../types";


const authReducer = (state, action) => {
    switch (action.type) {
        case LOADING:
            return {...state, loading: true}
            break;
        case USER_LOGIN_SUCCESS:
            console.log(action.payload.token)
            return {...state, token: action.payload.token, profile: action.payload, loading: false}
        case LOGIN_ERROR:
            return {...state, loading: false, error: action.payload}
        case LOGIN_ERROR:
            return {...state, loading: false, error: null}
        case SET_ERROR:
            return { ...state, error: action.payload };
        case UPDATE_PROFILE:
            console.log(action.payload)
            return {...state, profile: action.payload}
        case RESET_ERROR:
            return { ...state, error: null };
        case USER_LOGOUT:
            return {...state, profile: null, token: null}
        default:
            break;
    }
}

export default authReducer