import { createSlice } from "@reduxjs/toolkit"
import { orders } from "../../data/initialState"

export const orderSlice = createSlice({
  name: "order",
  initialState: [...orders],
  reducers: {
    addOrder: (state, action) => {
      state = action.payload
    },
    updateOrder: (state, action) => {
      state = action.payload
    },
    deleteOrder: (state, action) => {
      state = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addOrder, updateOrder, deleteOrder } = orderSlice.actions

export default orderSlice.reducer
