import { createSlice } from "@reduxjs/toolkit";
import api from "../api";

export const formsSlice = createSlice({
  name: "formsSlice",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.submitForm.matchFulfilled,
      (state, { payload }) => {
        console.log("Payload: ", payload);
      }
    );
  },
});

export const {} = formsSlice.actions;

export default formsSlice.reducer;
