import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  connected: false,
};

const connectionSlice = createSlice({
  name: "connection",
  initialState,
  reducers: {
    setConnected(_, action) {
      return action.payload;
    },
  },
});

export const { setConnected } = connectionSlice.actions;
export default connectionSlice.reducer;
