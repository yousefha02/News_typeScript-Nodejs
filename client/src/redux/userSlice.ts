import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type userState ={
  name: string,
  token:string
}

const initialState = {} as userState;

export const userSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    addToCart: (state , action: PayloadAction<userState>) => {
      state.name = action.payload.name;
      state.token = action.payload.token;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = userSlice.actions

export default userSlice.reducer