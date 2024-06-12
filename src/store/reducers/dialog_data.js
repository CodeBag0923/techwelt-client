import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    uploaded_files: [],
    selected_file: '',
    all_namespace: [],
    selected_namespace: "",
};

export const ContractReviewSlice = createSlice({
    name: 'dialog-with-data',
    initialState: initialState,
    reducers: {
        setUploadedFiles: (state, action) => {
            state.uploaded_files = action.payload;
        },
        setSelectedFile: (state, action) => {
            state.selected_file = action.payload;
        },

        setAllNS: (state, action) => {
            state.all_namespace = action.payload;
        },
        deleteNS: (state, action) => {
            let buffAll = state.all_namespace;
            let buffSelected = "";
            buffAll = buffAll.filter((ns) => ns !== action.payload);
            if (state.selected_namespace === action.payload)
                buffSelected = buffAll[0] ?? "";
            state.all_namespace = buffAll;
            state.selected_namespace = buffSelected;
        },
        setSelectedNS: (state, action) => {
            state.selected_namespace = action.payload;
        },
        resetAll: () => initialState,
    },
});

export const { setUploadedFiles, setSelectedFile, resetAll, setAllNS, deleteNS, setSelectedNS } = ContractReviewSlice.actions;
export default ContractReviewSlice.reducer;
