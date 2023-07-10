import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  amount: 0,
  userAmount:0
}
// First, create the thunk
export const fetchUserAmountById = createAsyncThunk(
    'users/fetchByIdStatus',
    async (id, thunkAPI) => {
        const { data }=await axios.get(`http://localhost:8080/accounts/${id}`)
      return data.amount
    }
  )

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    increment: (state) => {
      
      state.amount += 1
    },
    decrement: (state) => {
      state.amount -= 1
    },
    incrementByAmount: (state, action) => {
      state.amount += action.payload
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserAmountById.fulfilled, (state, action) => {
      // update the state
      //async thunk se jo data return ke rhe whi action ke payload me aarha agar fulfilled hua to
      state.userAmount=action.payload
      state.pending=false
      
    })
    .addCase(fetchUserAmountById.pending, (state, action) => {
        
        state.pending=true
        
      })
      .addCase(fetchUserAmountById.rejected, (state, action) => {
        // update the state
        //async thunk se jo data return ke rhe whi action ke payload me aarha
        state.pending=false
        state.error=action.error
        
      })
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = accountSlice.actions

export default accountSlice.reducer