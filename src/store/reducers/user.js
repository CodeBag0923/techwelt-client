import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: 'vlad',
    useremail: '',
    userrole: 'user',
    useravatar: '',
    extra: 'some extra test info'
};

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUserName: (state, action) => {
            state.name = action.payload;
        },
        setUserEmail: (state, action) => {
            state.useremail = action.payload;
        },
        setUserRole: (state, action) => {
            state.userrole = action.payload;
        },
        setUserAvatar: (state, action) => {
            state.useravatar = action.payload;
        },
        resetAll: () => initialState,
    },
});

export const { setUserName, setUserEmail, setUserRole, setUserAvatar, resetAll } = userSlice.actions;

export default userSlice.reducer;
