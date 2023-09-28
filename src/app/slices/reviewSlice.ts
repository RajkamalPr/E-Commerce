import { createSlice } from "@reduxjs/toolkit"
import { review } from "../../data/initialState"

export const reviewSlice = createSlice({
  name: "review",
  initialState: [...review],
  reducers: {
    getReviews: (state, action) => {
      state = action.payload
    },
    addReview: (state, action) => {
      state = action.payload
    },
    updateReview: (state, action) => {
      state = action.payload
    },
    deleteReview: (state, action) => {
      state = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { getReviews, addReview, updateReview, deleteReview } =
  reviewSlice.actions

export default reviewSlice.reducer
