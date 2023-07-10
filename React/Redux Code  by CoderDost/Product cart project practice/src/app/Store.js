import ProductReducer from '../features/Product/ProductSlice'
import CartReducer from '../features/Cart/CartSlice'
import { configureStore } from '@reduxjs/toolkit'

export  const store = configureStore({
    reducer: {
        allProducts:ProductReducer,
        allCartItems:CartReducer,
    },
  })