import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type Size = {
    width: number,
    height: number
}

const initState : Size = {width: 200, height: 100};
const sizeSlice = createSlice({
    name: 'size',
    initialState: initState,
    reducers: {
      SET_SIZE : (state, action: PayloadAction<Size>) => {
        state = action.payload;
        return state;
      },
    },
  });
  
  export const { SET_SIZE } = sizeSlice.actions;
  export default sizeSlice.reducer;