import { Children, useReducer } from "react";
import authReducer from "./authReducer";
import authContext from "./authContext";
import { LOADING, LOGIN_ERROR, USER_LOGIN_SUCCESS } from "../../types";
import { API_ENDPOINT } from "../../constants";


const AuthState = ({children}) => {

    const initialState = {
        user: {name: "diran"},
        loading: false,
        token: null,
        error: null
    };

    const [state, dispatch] = useReducer(authReducer, initialState)

    async function registerUser(formData){
        const response = await fetch(`${API_ENDPOINT}/register`, {
          method: "POST",
          body: JSON.stringify({...formData}),
          headers: {
            "Content-Type": "application/json"
          }
        })
      
        const data = await response.json()
      
        console.log(data)
    }

    async function loginUser(userData){
        const formData = new URLSearchParams()
        formData.append("username", userData.username)
        formData.append("password", userData.password)

        console.log(userData)
      
        try {
            dispatch({type: LOADING})
            const response = await fetch(`${API_ENDPOINT}/token`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
                },
                body: formData
              })

              if (!response.ok) {
                const errorData = await response.json();
                console.error("Login error:", errorData.message); // Should log "Invalid credentials"
                dispatch({type: LOGIN_ERROR, payload: errorData.message})
                return;
              }
            
              const {access_token} = await response.json()
              console.log(access_token)
              dispatch({type: USER_LOGIN_SUCCESS, payload: access_token})
              return true
        } catch (error) {
            console.log(error)
        }
      
    
      
    }
    
    return (
        <authContext.Provider value={{...state, dispatch, registerUser, loginUser}}>
            {children}
        </authContext.Provider>
    )
}

export default AuthState