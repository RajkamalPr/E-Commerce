import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { cart } from "../../types"

interface cartState {
  cart: cart[]
}

const initialState: cartState = {
  cart: [],
}
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<cart>) => {
      state.cart.push({
        name: action.payload.name,
        qty: action.payload.qty,
        image: action.payload.image,
        price: action.payload.price,
        product: action.payload.product,
      })
    },
    updateCart: (state, action: PayloadAction<cart>) => {
      state.cart.forEach((cartItem: any) => {
        if (action.payload.name === cartItem.name) {
          cartItem.qty = action.payload.qty
        }
      })
    },
    removeCart: (state, action) => {
      state.cart.map((cartItem: any, index: number) => {
        return (
          cartItem.name === action.payload.name && state.cart.splice(index, 1)
        )
      })
    },
  },
})

export const { addCart, updateCart, removeCart } = cartSlice.actions
export default cartSlice.reducer
