import { ADD_USER, DELETE_CARD, GET_USER } from "../constants/Constants"

const initialState={users:[]}

export const userReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case GET_USER:
            return {...state,users:payload}
        case ADD_USER:{
            return {users:[...state.users,payload]}}
    
        case DELETE_CARD:
            return {users:state.users.filter((user)=>user.id!==payload)}
    
        default:
            return state
    }
}