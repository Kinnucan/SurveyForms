import { createSlice } from "@reduxjs/toolkit";
import api from "../api";
import openNotification from "../components/notification";

export const formsSlice = createSlice({
  name: "formsSlice",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.submitForm.matchFulfilled,
      (state, { payload }) => {
        console.log("Payload: ", payload);
        // openNotification("success", "Form submitted successfully!");
      }
    );
  },
});

export const {} = formsSlice.actions;

export default formsSlice.reducer;
