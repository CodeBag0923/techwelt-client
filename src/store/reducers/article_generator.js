import { createSlice } from '@reduxjs/toolkit';

const initialState_article = {
    uploaded_files: [],
    is_newly_uploaded: false,
    all_namespace: [],
    selected_namespace: "",
    user_inputs: {
        description: ''
    },
    frase_cluster_data: {
        response_data: [],
        total_keywords: [],
        selected_keywords: [],
    },
    titles: {
        total: [],
        selected: '',
    },
    outlines: {
        total: [[]],
        selected: [],
    },
    intros: {
        total: [],
        selected: '',
    },
    body_contents: {
        total: [[]],
        selected: [],
    },
    conclusions: {
        total: [],
        selected: '',
    },
};

export const articleGeneratorSlice = createSlice({
    name: 'article-generator',
    // initialState: mockup_state,
    initialState: initialState_article,
    reducers: {
        // user_inputs
        setDescription: (state, action) => {
            state.user_inputs.description = action.payload;
        },
        resetUserInputs: (state) => {
            state.user_inputs = initialState_article.user_inputs;
        },
        // frase_cluster_data
        setFraseCluster: (state, action) => {
            state.frase_cluster_data.response_data = action.payload;
        },
        setTotalKeywords: (state, action) => {
            state.frase_cluster_data.total_keywords = action.payload;
        },
        setSelectedKeywords: (state, action) => {
            state.frase_cluster_data.selected_keywords = action.payload;
        },
        resetFraseClusterData: (state) => {
            state.frase_cluster_data = initialState_article.frase_cluster_data;
        },
        // titles
        // outlines
        // intros
        // conclusions
        setTotalXXX: (state, { payload: { type, data } }) => {
            state[type].total = data;
        },
        setSelectedXXX: (state, { payload: { type, data } }) => {
            state[type].selected = data;
        },
        resetXXX: (state, { payload: { type } }) => {
            state[type] = initialState_article[type];
        },
        // body_contents
        insertIntoTotalBodyContent: (state, { payload: { iPos, iSub, data } }) => {
            let buff = state.body_contents.total;
            if (!buff[iPos]) buff[iPos] = [];
            buff[iPos][iSub] = data;
            state.body_contents.total = buff;
        },
        // all
        resetAll: () => initialState_article,

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
            let buffSelected = "";
            buffAll = buffAll.filter((ns) => ns != action.payload);
            if (state.selected_namespace === action.payload)
              buffSelected = buffAll[0] ?? "";
            state.all_namespace = buffAll;
            state.selected_namespace = buffSelected;
          },
          setSelectedNS: (state, action) => {
            state.selected_namespace = action.payload;
          },
    },
});

export const {
    setDescription, resetUserInputs,
    setFraseCluster, setTotalKeywords, setSelectedKeywords, resetFraseClusterData,
    setTotalXXX, setSelectedXXX, resetXXX,
    insertIntoTotalBodyContent,
    resetAll, setUploadedFiles, setIsNewlyUploaded, setAllNS, deleteNS, setSelectedNS
} = articleGeneratorSlice.actions;

export default articleGeneratorSlice.reducer;
