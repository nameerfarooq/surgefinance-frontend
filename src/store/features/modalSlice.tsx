import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  title: "",
  subTitle: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal(_, action) {
      return action.payload;
    },
  },
});

export const { setModal } = modalSlice.actions;
export default modalSlice.reducer;
