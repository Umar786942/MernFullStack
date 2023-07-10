import { inc,incByAmount,dec,userdetailPending,userDetailFulfilled,userDetailRejected } from "../Actions";

export function AccountReducer(state={amount:0,userAmount:0},action){
    switch(action.type){
         case inc:return {amount:state.amount+1}
         case dec:return {amount:state.amount-1}
         case incByAmount: return {amount:state.amount+action.payload}
         case userdetailPending: return {...state,pending:true}
         case userDetailFulfilled: return {userAmount:action.payload,pending:false}
         case userDetailRejected:return {...state,error:action.error,pending:false}
         default:return state
    }
}