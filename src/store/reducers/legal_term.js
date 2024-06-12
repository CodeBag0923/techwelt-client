import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    uploaded_files: [],
    is_newly_uploaded: false,
    is_ns_exist: false
};

export const LegalTermSlice = createSlice({
    name: 'legal-term',
    initialState: initialState,
    reducers: {
        setUploadedFiles: (state, action) => {
            state.uploaded_files = action.payload;
        },
        setIsNewlyUploaded: (state, action) => {
            state.is_newly_uploaded = action.payload;
        },
        setIsNSExist: (state, action) => {
            state.is_ns_exist = action.payload;
        },
        resetAll: () => initialState,
    },
});

export const { setUploadedFiles, setIsNewlyUploaded, setIsNSExist, resetAll } = LegalTermSlice.actions;

export default LegalTermSlice.reducer;
