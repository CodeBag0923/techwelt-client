import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    uploaded_files: [],
    is_newly_uploaded: false,
};

export const HelpCenterSlice = createSlice({
    name: 'help_center',
    initialState: initialState,
    reducers: {
        setUploadedFiles: (state, action) => {
            state.uploaded_files = action.payload;
        },
        setIsNewlyUploaded: (state, action) => {
            state.is_newly_uploaded = action.payload;
        },
        resetAll: () => initialState,
    },
});

export const {
    setUploadedFiles, setIsNewlyUploaded,
    resetAll
} = HelpCenterSlice.actions;

export default HelpCenterSlice.reducer;
