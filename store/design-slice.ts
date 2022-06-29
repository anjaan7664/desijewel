import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Designs, SingleDesign } from "../types/designData.types";
import { AppThunk } from "./index";
import { HYDRATE } from "next-redux-wrapper";
import axios from "axios";
const initialState = {
  loading: true,
  designs: {} as Designs,
  design: {} as SingleDesign,
  error: null,
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
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log("HYDRATE", state, action.payload);
      return {
        ...state,
        ...action.payload.design,
      };
    },
  },
});

export const { setDesigns, getSingleDesign } = designSlice.actions;

export const fetchDesignsData =
  (designConfig: {
    category: string | string[] | undefined;
    page: string | number | string[];
    perPage: number;
  }): AppThunk =>
  async (dispatch) => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/designs`,
      null,
      {
        params: designConfig,
      }
    );

    const designs = await response.data;

    dispatch(setDesigns(designs));
  };

export const fetchSingleDesignsData = (
  imageQuery: string | string[] | undefined
): AppThunk => {
  return async (dispatch) => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/designs/${imageQuery}`
    );

    const design = await response.data;
    dispatch(getSingleDesign(design));
  };
};

export default designSlice.reducer;
