import { createSlice } from "@reduxjs/toolkit"
import { users } from "../../data/initialState"

export const usersSlice = createSlice({
  name: "user",
  initialState: [...users],
  reducers: {
    getUser: (state, action) => {
      state = action.payload
    },
    addUser: (state, action) => {
      state = action.payload
    },
    updateUser: (state, action) => {
      state = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { getUser, addUser, updateUser } = usersSlice.actions

export default usersSlice.reducer
