import { createSlice } from '@reduxjs/toolkit';

const localStorageTheme = localStorage.getItem("isDarkMode");

const initState = {
    isDarkMode: localStorageTheme == "true" ? true : false
};

const themeSlice = createSlice({
    name: 'theme',
    initialState: initState,
    reducers: {
      SET_IS_DARK_MODE : (state, action: any) => {
        state.isDarkMode = action.payload;
        return state;
      },
    },
  });
  
  export const { SET_IS_DARK_MODE } = themeSlice.actions;
  export default themeSlice.reducer;