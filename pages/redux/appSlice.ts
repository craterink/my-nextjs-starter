import { createSlice } from "@reduxjs/toolkit";

interface AppState {
  ngrokUrl: string;
}

const initialState: AppState = {
  ngrokUrl: "",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setNgrokUrl: (state, action) => {
      state.ngrokUrl = action.payload;
    },
  },
});

// Getters
export const selectNgrokUrl = (state) => {
  return state.app.ngrokUrl;
};

export const { setNgrokUrl } = appSlice.actions;
export default appSlice.reducer;
