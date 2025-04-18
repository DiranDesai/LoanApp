import { LOADING, USER_LOGIN_SUCCESS } from "../../types";


const authReducer = (state, action) => {
    switch (action.type) {
        case LOADING:
            return {...state, loading: true}
            break;
        case USER_LOGIN_SUCCESS:
            return {...state, token: action.payload}
        default:
            break;
    }

}

export default authReducer