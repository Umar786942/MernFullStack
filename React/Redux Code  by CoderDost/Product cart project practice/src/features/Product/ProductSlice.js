import { createSlice } from '@reduxjs/toolkit'
import { getProduct } from './ProductApi'
import { createAsyncThunk } from '@reduxjs/toolkit'


// First, create the thunk
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
      const response = await getProduct()
      // console.log(response.data)
      return response.data
    }
  )

const initialState = { products: [],loading:false, }

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      // Add user to the state array
      state.products.push(action.payload)
      state.loading=false
    })
    .addCase(fetchProducts.pending, (state) => {
        // Add user to the state array
        state.loading=true
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        // Add user to the state array
        state.error=action.error.message
        state.loading=false
      })
  },
})

// export const { } = productSlice.actions
export default productSlice.reducer