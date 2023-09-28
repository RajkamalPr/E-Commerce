import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import productSlice from "./slices/productSlice"
import usersSlice from "./slices/usersSlice"
import reviewSlice from "./slices/reviewSlice"
import thunk from "redux-thunk"
import orderSlice from "./slices/orderSlice"
import cartSlice from "./slices/cartSlice"

const reducers = combineReducers({
  product: productSlice,
  review: reviewSlice,
  order: orderSlice,
  cart: cartSlice,
  user: usersSlice,
})
const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
})

export default store
