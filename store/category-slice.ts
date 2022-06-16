
import { createSlice } from "@reduxjs/toolkit";
import { default as CategoryList } from "../assets/json/categoryList.json";

const initialState = {
    category: CategoryList,
  };
  const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
    }})
    // export const { setDesigns, getSingleDesign } = designSlice.actions;
export default categorySlice.reducer;