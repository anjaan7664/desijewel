import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Designs, SingleDesign } from "../types/types";
import { AppThunk } from "./index";
const initialState = {
  loading:true,
  designs: {} as Designs,
  design: {} as SingleDesign,
  error:null
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

import axios from "axios";
export const fetchDesignsData = (designConfig: {
  Category: string | string[] | undefined;
  page: string | number | string[];
  perPage: number;
}): AppThunk => {
  return async (dispatch) => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/designs`, {
      headers: {
        "Content-Type": "application/json",
      },
      params: designConfig,
    });

    const designs = await response.data;

    dispatch(setDesigns(designs));
  };
};

export const fetchSingleDesignsData = (
  imageQuery: string | string[] | undefined
): AppThunk => {
  return async (dispatch) => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/DisplayDesign`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        params: { image: imageQuery },
      }
    );

    const design = await response.data;

    dispatch(getSingleDesign(design));
  };
};

export default designSlice.reducer;
