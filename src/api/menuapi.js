import {handleResponse,handleError} from './apiutil'

const baseUrl=process.env.REACT_APP_API_URL+"/menu-options";

export const getMenusOptions=()=>{
    return (
        fetch(baseUrl)
        .then(handleResponse)
        .catch(handleError)
    )
}