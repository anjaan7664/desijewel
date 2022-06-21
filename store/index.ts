import {
  configureStore,
  Action,
  combineReducers,
  AnyAction,
  PayloadAction,
} from "@reduxjs/toolkit";
import designReducer from "./design-slice";
import categoryReducer from "./category-slice";
import { ThunkAction } from "redux-thunk";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
// export const store = configureStore({
//   reducer: { design: designReducer, category: categoryReducer },
// });

const combinedReducer = combineReducers({ category: categoryReducer });

export const makeStore = () =>
  configureStore({
    reducer: { design: designReducer, category: categoryReducer },
  });

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store["dispatch"];
export type RootState = ReturnType<Store["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const wrapper = createWrapper(makeStore);
