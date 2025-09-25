import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategoryId: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setSelectedCategoryId(state, action) {
      state.selectedCategoryId = action.payload;
    },
  },
});

export const { setSelectedCategoryId } = categorySlice.actions;

export default categorySlice.reducer;
