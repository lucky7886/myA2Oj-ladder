import { createSlice } from "@reduxjs/toolkit";

export const Theme = createSlice({
  name: "Theme",

  initialState: {
    count: 0 ,

  },
  reducers: {
    getTheme: ()=> {},
    SetTheme: (state, action) => {
     state.count+= (action.payload);
    },
  },
});
export const { SetTheme } = Theme.actions;

export default Theme.reducer;
