import axios from "axios"
import { ADD_USER, DELETE_CARD, FAIL_USER, GET_USER } from "../constants/Constants"


export const getUsers=()=>async(dispatch)=>{
try {
    const res= await axios.get('https://jsonplaceholder.typicode.com/users')
 
    dispatch({
        type:GET_USER,
        payload:res.data
    })
} catch (error) {
    dispatch({
        type:FAIL_USER,
        payload:error
    })
    
}
}

export const AddUserAction=(payload)=>{
    console.log(payload)
    return{
        type:ADD_USER,
        payload
    }
}

export const deleteUserAction=(payload)=>{
    return{
        type:DELETE_CARD,
        payload
    }
}