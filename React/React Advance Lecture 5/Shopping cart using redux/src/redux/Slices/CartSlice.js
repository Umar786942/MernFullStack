import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add:(state,action) => {
            state.push(action.payload);
        },
        remove:(state,action) => {
            return state.filter((item) => item.id !== action.payload);//we are changing the state in classing way i.e without using immer and thus returning a new state as we used to do in normal reducers
        },
    }
});

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;