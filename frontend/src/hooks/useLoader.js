
import React, { useContext } from 'react'
import {LoaderContext} from '../context/LoaderContext'

function useLoader() {
    const data = useContext(LoaderContext)
    return data
}

export default useLoader