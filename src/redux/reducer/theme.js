import { createSlice } from "@reduxjs/toolkit";

export const Theme = createSlice({
  name: "Theme",

  initialState: {
    dark: false ,
  },
  reducers: {
    getTheme: ()=> {},
    SetTheme: (state) => {
     state.dark= !(state.dark);
    },
  },
});
export const { SetTheme } = Theme.actions;

export default Theme.reducer;
