
import React, { useContext } from 'react'
import authContext from '../context/authContext/authContext'

function useAuth() {
    const data = useContext(authContext)

    return data
}

export default useAuth