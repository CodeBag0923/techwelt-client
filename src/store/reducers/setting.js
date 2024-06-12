import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	theme: {
		mode: 'light',
	}
};

export const settingSlice = createSlice({
	name: 'setting',
	initialState,
	reducers: {
		startLoading: (state) => {
			console.log("loading started")
			state.loading = true;
		},
		endLoading: (state) => {
			state.loading = false;
		},
		setThemeMode: (state, action) => {
			state.theme.mode = action.payload
		},
		toggleThemeMode: (state) => {
			state.theme.mode = state.theme.mode === 'light' ? 'dark' : 'light'
		},
	},
});

export const { startLoading, endLoading, setThemeMode, toggleThemeMode } = settingSlice.actions;

export default settingSlice.reducer;
