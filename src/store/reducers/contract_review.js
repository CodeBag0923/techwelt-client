import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    uploaded_files: [],
    is_newly_uploaded: false,
    all_namespace: [],
    selected_namespace: ''
};

export const ContractReviewSlice = createSlice({
    name: 'contract-review',
    initialState: initialState,
    reducers: {
        setUploadedFiles: (state, action) => {
            state.uploaded_files = action.payload;
        },
        setIsNewlyUploaded: (state, action) => {
            state.is_newly_uploaded = action.payload;
        },
        setAllNS: (state, action) => {
            state.all_namespace = action.payload;
        },
        deleteNS: (state, action) => {
            let buffAll = state.all_namespace;
            let buffSelected = '';
            buffAll = buffAll.filter(ns => ns !== action.payload);
            if (state.selected_namespace === action.payload)
                buffSelected = buffAll[0] ?? '';
            state.all_namespace = buffAll;
            state.selected_namespace = buffSelected;
        },
        setSelectedNS: (state, action) => {
            state.selected_namespace = action.payload;
        },
        resetAll: () => initialState,
    },
});

export const {
    setUploadedFiles, setIsNewlyUploaded,
    setAllNS, deleteNS, setSelectedNS,
    resetAll
} = ContractReviewSlice.actions;

export default ContractReviewSlice.reducer;
