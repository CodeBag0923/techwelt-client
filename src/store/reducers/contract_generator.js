import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  system_templates: [],
  uploaded_templates: [],
  is_newly_uploaded: false,
  selected_template: "",
};

export const ContractGeneratorSlice = createSlice({
  name: "contract-generator",
  initialState: initialState,
  reducers: {
    setSystemTemplates: (state, action) => {
      state.system_templates = action.payload;
    },
    setUploadedTemplates: (state, action) => {
      state.uploaded_templates = action.payload;
    },
    setIsNewlyUploaded: (state, action) => {
      state.is_newly_uploaded = action.payload;
    },
    setSelectedTemplate: (state, action) => {
      state.selected_template = action.payload;
    },
    resetAll: () => initialState,
  },
});

export const {
  setSystemTemplates,
  setUploadedTemplates,
  setIsNewlyUploaded,
  setSelectedTemplate,
  resetAll
} = ContractGeneratorSlice.actions;

export default ContractGeneratorSlice.reducer;
