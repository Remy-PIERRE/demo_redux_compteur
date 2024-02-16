import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
	name: "count",
	initialState: {
		total: 1,
	},

	reducers: {
		addValue: (state, action) => {
			state.total = state.total + action.payload;
		},
	},
});

export const { addValue } = countSlice.actions;
export const countSelector = (state) => state.count.total;
export default countSlice.reducer;
