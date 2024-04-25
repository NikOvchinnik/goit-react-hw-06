import { createSlice } from "@reduxjs/toolkit";

const initialFiltersState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: initialFiltersState,
  reducers: {
    changeFilter(state, action) {},
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
