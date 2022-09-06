import { createSlice } from "@reduxjs/toolkit";
export const UserSlice = createSlice({
  name: "user",
  initialState: {
    user: false,
  },
  reducers: {
    IsAutharized: (state,actions) => {
      state.user = actions.payload;
    },
  },
});
export const userReducer = UserSlice.reducer;
export const { IsAutharized } = UserSlice.actions;
