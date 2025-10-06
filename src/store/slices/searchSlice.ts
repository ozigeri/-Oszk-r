import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SearchFilters = {
    from: string[];
    to: string[];
    dateTime: string;
    maxPrice: number;
    maxSeats: number;
};

const initialState: SearchFilters = {
    from: [],
    to: [],
    dateTime: '',
    maxPrice: 10000,
    maxSeats: 8,
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        updateFilters(state, action: PayloadAction<SearchFilters>) {
            return { ...state, ...action.payload };
        },
    },
});

export const { updateFilters } = searchSlice.actions;
export default searchSlice.reducer;
