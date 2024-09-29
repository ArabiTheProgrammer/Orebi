import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartvalue: null,
}

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    allcartInfo: (state, action) => {
      state.cartvalue = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { allcartInfo } = cartSlice.actions

export default cartSlice.reducer