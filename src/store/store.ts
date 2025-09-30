import { configureStore } from '@reduxjs/toolkit';
import sizeReducer from './slices/sizeSlice';
import userReducer from './slices/userSlice';
import themeReducer from './slices/themeSlice';

const store = configureStore({
    reducer: {
        size: sizeReducer,
        user: userReducer,
        theme: themeReducer,
    },
});

export default store;
