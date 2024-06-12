import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	article_generator: [""],
	qa_doc: [
		{ question: "", answer: "" }
	],
};

export const historySlice = createSlice({
	name: 'history',
	// initialState: mockup_state,
	initialState: initialState,
	reducers: {
		addArticleHistory: (state, action) => {
			let buff = state.article_generator;
			buff.push(action.payload);
			state.article_generator = buff;
		},
		addQADocHistory: (state, action) => {
			let buff = state.qa_doc;
			buff.push(action.payload);
			state.qa_doc = buff;
		},
		resetHistoryXXX: (state, { payload: { type } }) => {
			state[type] = initialState[type];
		},
	},
});

export const { addArticleHistory, addQADocHistory, resetHistoryXXX } = historySlice.actions;

export default historySlice.reducer;
