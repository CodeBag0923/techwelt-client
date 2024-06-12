import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    uploaded_files: [],
    is_newly_uploaded: false,
    all_namespace: [],
    selected_namespace: '',
    // is_ns_exist: false,
};

export const QADocSlice = createSlice({
    name: 'qa-with-doc',
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
        // setIsNSExist: (state, action) => {
        //     state.is_ns_exist = action.payload;
        // },
        resetAll: () => initialState,
    },
});

export const {
    setUploadedFiles, setIsNewlyUploaded,
    setAllNS, deleteNS, setSelectedNS,
    // setIsNSExist,
    resetAll
} = QADocSlice.actions;

export default QADocSlice.reducer;
