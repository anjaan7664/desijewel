import { AppThunk } from './index';
import { setDesigns } from "./design-slice";
export const fetchDesignsData = (): AppThunk =>{
    return async (dispatch) => {
        const response = await fetch(
        "http://localhost:8000/api/designs?perPage=12&page=1&Category=aad",
        {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            },
        }
        );
        if (response.ok) {
        const designs = await response.json();
     
        dispatch(setDesigns(designs));
        }
    };
}