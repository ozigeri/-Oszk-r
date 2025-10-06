import { configureStore } from '@reduxjs/toolkit';
import sizeReducer from './slices/sizeSlice';
import userReducer from './slices/userSlice';
import themeReducer from './slices/themeSlice';
import searchReducer from './slices/searchSlice';

const store = configureStore({
    reducer: {
        size: sizeReducer,
        user: userReducer,
        theme: themeReducer,
        search: searchReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
