import { Children, useReducer } from "react";
import authReducer from "./authReducer";
import authContext from "./authContext";




const AuthState = ({children}) => {

    const initialState = {
        loading: false,
        token: localStorage.getItem("token") || null,
        error: null,
        profile: null
    };

    const [state, dispatch] = useReducer(authReducer, initialState)
    
    return (
        <authContext.Provider value={{...state, dispatch}}>
            {children}
        </authContext.Provider>
    )
}

export default AuthState