import { configureStore } from "@reduxjs/toolkit";
//importing reducer from accountslice and bonusslice and since it was a default export we can import with any name
import accountReducer from './slices/AccountSlicer'
import bonusReducer from './slices/BonusSlicer'
import rewardReducer from "./Reducers/RewardReducer";


export const store=configureStore({
    reducer:{
        account:accountReducer,
        bonus:bonusReducer,
        reward:rewardReducer
    }
})