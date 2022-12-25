import { configureStore } from '@reduxjs/toolkit'
import accountsReducer from "./slicers/accounts"

export default configureStore({
  reducer: {
    accounts: accountsReducer
  }
})