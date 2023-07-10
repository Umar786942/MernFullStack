import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getCartItem } from './CartApi'
import { postCartItem } from './CartApi'
import { updateCartItem } from './CartApi'
import { deleteCartItem } from './CartApi'


// First, create the thunk
export const fetchCarts = createAsyncThunk(
    'cart/fetchCartItem',
    async () => {
      const response = await getCartItem()
      // console.log("Cart Fetched Data :- " ,response.data)
        
        return response.data
    
    }
  )
export const postCarts = createAsyncThunk(
    'cart/addCartItem',
    async (change) => {
      const response = await postCartItem({...change,quantity:1})
      console.log(response.data)
      return response.data
    }
  )
export const deleteCarts = createAsyncThunk(
    'cart/deleteCartItem',
    async (id) => {
      await deleteCartItem(id)
      // console.log(response.data)
      return id
    }
  )
export const updateCarts = createAsyncThunk(
    'cart/updateCartItem',
    async ({id,change}) => {
      console.log("id of update is : ",id)
      console.log(change)
     const response = await updateCartItem(id,change)
      console.log("inside update call",response.data)
      return response.data
    }
  )

const initialState = { cart: [],loading:false, }

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchCarts.fulfilled, (state, action) => {
      // Add user to the state array
      if(action.payload.length!==0){
        // state.cart.push(action.payload)
        state.cart=[...action.payload]
        // console.log("inside if condition, updated value of cart is ",state.cart)
        
      }else{
        // console.log("in else condition")
      }
      state.loading=false
       
    })
    .addCase(fetchCarts.pending, (state) => {
        // Add user to the state array
        state.loading=true
      })
      .addCase(fetchCarts.rejected, (state, action) => {
        // Add user to the state array
        state.error=action.error.message
        state.loading=false
      })
      .addCase(postCarts.fulfilled, (state, action) => {
        // Add user to the state array
        state.cart.push(action.payload)
        state.loading=false
      })
      .addCase(deleteCarts.fulfilled, (state, action) => {
        // Add user to the state array
        const index=state.cart.findIndex((eachItem)=>eachItem.id===action.payload)
        // console.log("delete index is" ,index)
        state.cart.splice(index,1)
      
      })
      .addCase(updateCarts.fulfilled, (state, action) => {
       console.log("inside update reducer")
       const index=state.cart.findIndex((eachItem)=>eachItem.id===action.payload.id)
        console.log("update index is" ,index)
        state.cart.splice(index,1,action.payload)
      
      })
  },
})

// export const { } = productSlice.actions
export default cartSlice.reducer