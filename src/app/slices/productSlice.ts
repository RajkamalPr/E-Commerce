import { createSlice } from "@reduxjs/toolkit"
import { products } from "../../data/initialState"

export const productSlice = createSlice({
  name: "product",
  initialState: [...products],
  reducers: {
    addProduct: (state, action) => {
      state = action.payload
    },
    updateProduct: (state, action) => {
      state = action.payload
    },
    deleteProduct: (state, action) => {
      state = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addProduct, updateProduct, deleteProduct } = productSlice.actions

export default productSlice.reducer
