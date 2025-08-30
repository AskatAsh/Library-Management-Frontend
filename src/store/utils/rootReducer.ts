import { booksApi } from "@/features/Books/api/apiSlice";
import { combineReducers } from "@reduxjs/toolkit";
import uiReducer from "../slices/uiSlice";

const rootReducer = combineReducers({
    ui: uiReducer,
    [booksApi.reducerPath]: booksApi.reducer
});

export type RootReducer = ReturnType<typeof rootReducer>;
export default rootReducer;