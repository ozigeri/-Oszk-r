import { User } from '@/types/generals';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const getInitState = (): User => {
    const email = localStorage.getItem('email') || undefined;
    const firstName = localStorage.getItem('firstName') || undefined;
    const lastName = localStorage.getItem('lastName') || undefined;
    const role = localStorage.getItem('role') || undefined;

    if (email && firstName && lastName && role) {
        return { email, firstName, lastName, role };
    } else {
        return { email: undefined, firstName: undefined, lastName: undefined, role: undefined };
    }
};

const initState: User = getInitState();

const userSlice = createSlice({
    name: 'user',
    initialState: initState,
    reducers: {
        SET_USER: (_, action: PayloadAction<User>) => {
            return action.payload; // Payload teljesen felülírja az állapotot
        },
    },
});

export const { SET_USER } = userSlice.actions;
export default userSlice.reducer;
