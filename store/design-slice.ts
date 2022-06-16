import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Designs, SingleDesign } from "../types/types";

const initialState = {
  designs: {} as Designs,
  design: {} as SingleDesign,
};
const designSlice = createSlice({
  name: "design",
  initialState,
  reducers: {
    setDesigns: (state, action: PayloadAction<Designs>) => {
      state.designs = action.payload;
    },
    getSingleDesign: (state, action: PayloadAction<SingleDesign>) => {
      state.design = action.payload;
    },
  },
});

export const { setDesigns, getSingleDesign } = designSlice.actions;
export default designSlice.reducer;
