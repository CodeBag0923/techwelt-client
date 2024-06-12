import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uploaded_files: [],
  is_newly_uploaded: false,
  all_namespace: [],
  selected_namespace: "",
  selected_tool: "",
};

export const ChatHistorySlice = createSlice({
  name: "chat_history",
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
    setSelectedTool: (state, action) => {
      state.selected_tool = action.payload;
    },
    resetAll: () => initialState,
  },
});

export const {
  setUploadedFiles,
  setIsNewlyUploaded,
  setAllNS,
  deleteNS,
  setSelectedNS,
  setSelectedTool,
  resetAll
} = ChatHistorySlice.actions;

export default ChatHistorySlice.reducer;
