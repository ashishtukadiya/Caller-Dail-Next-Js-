import { configureStore } from "@reduxjs/toolkit";

import CommonSlice from "./Reducer/CommonSlice";
import  LayoutSlice from "./Reducer/LayoutsSice";

export const store = configureStore({
  reducer: {
   
    CommonSlice: CommonSlice,
    LayoutSlice:LayoutSlice,
   
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type AppDispatch = typeof store.dispatch

