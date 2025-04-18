import { Children, useReducer } from "react";
import authReducer from "./authReducer";
import authContext from "./authContext";
import { USER_LOGIN_SUCCESS } from "../../types";


const AuthState = ({children}) => {

    const initialState = {
        user: null,
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
      
        try {
            
            const response = await fetch(`${API_ENDPOINT}/token`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
                },
                body: formData
              })
            
              const {access_token} = await response.json()
              dispatch({type: USER_LOGIN_SUCCESS, payload: access_token})
        } catch (error) {
            
        }
      
    
      
    }
    
    return (
        <authContext.Provider value={{...state, dispatch, registerUser, loginUser}}>
            {children}
        </authContext.Provider>
    )
}

export default AuthState