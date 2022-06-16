import { configureStore , Action } from "@reduxjs/toolkit";
import designReducer from "./design-slice";
import { ThunkAction } from 'redux-thunk'
export const store = configureStore({
  reducer:  designReducer ,
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>
