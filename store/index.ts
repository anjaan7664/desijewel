import { configureStore, Action } from "@reduxjs/toolkit";
import designReducer from "./design-slice";
import categoryReducer from "./category-slice";
import { ThunkAction } from "redux-thunk";
export const store = configureStore({
  reducer: { design: designReducer, category: categoryReducer },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
