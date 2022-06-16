import { AppThunk } from "./index";
import { getSingleDesign, setDesigns } from "./design-slice";
import axios from "axios";
export const fetchDesignsData = (designConfig: {
  Category: string | string[] | undefined;
  page: string | number | string[];
  perPage: number;
}): AppThunk => {
  return async (dispatch) => {
    const response = await axios.get("http://localhost:8000/api/designs", {
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
      "http://localhost:8000/api/DisplayDesign",
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
