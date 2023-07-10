import axios from "axios"

export const inc='account/increment'
export const dec='account/decrement'
export const incByAmount='account/incByAmount'
export const bonusPoints='bonusPoints/increment'
export const userdetailPending='/account/userdetailPending'
export const userDetailFulfilled='account/userDetailFulfilled'
export const userDetailRejected='account/userDetailRejected'

export function getUserAccountAmount(id){
    return async(dispatch,getState)=>{
       
        try{
            dispatch (getUserPending())
            const { data }=await axios.get(`http://localhost:8080/accounts/${id}`)
            dispatch(getUserFulfilled(data.amount))
        }catch(error){
             dispatch(getUserRejected(error.message))
        }
          
    }
}

//Action creators
function getUserPending(){
    return {type:userdetailPending}
}
function getUserFulfilled(value){
    return {type:userDetailFulfilled,payload:value}
}
function getUserRejected(error){
    return {type:userDetailRejected,error:error}
}
export function increment(){
    return {type:inc}
}
export function decrement(){
    return {type:dec}
}
export function incrementByAmount(value){
    return {type:incByAmount,payload:value}
}
export function incrementBonusPoints(){
    return {type:bonusPoints}
}