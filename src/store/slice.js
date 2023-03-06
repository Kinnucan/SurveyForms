import { createSlice } from "@reduxjs/toolkit";
import api from "../api";

export const formsSlice = createSlice({
  name: "formsSlice",
  initialState: {
    isAdmin: false,
  },
  reducers: {
    setIsAdmin: (state) => {
      state.isAdmin = true;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.submitForm.matchFulfilled,
      (state, { payload }) => {
        console.log("Payload: ", payload);
      }
    );
  },
});

export const { setIsAdmin } = formsSlice.actions;

export default formsSlice.reducer;
