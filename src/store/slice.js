import { createSlice } from "@reduxjs/toolkit";
import api from "../api";

const initialState = {
  isAdmin: false,
};

const formsSlice = createSlice({
  name: "formsSlice",
  initialState,
  reducers: {
    setIsAdmin: (state, { payload }) => {
      state.isAdmin = payload["Items"][0]["Admin"]["BOOL"];
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getAdminInfo.matchFulfilled,
      (state, { payload }) => {
        state.isAdmin = payload["Items"][0]["Admin"]["BOOL"];
      }
    );
  },
});

export const { setIsAdmin } = formsSlice.actions;

export default formsSlice.reducer;
