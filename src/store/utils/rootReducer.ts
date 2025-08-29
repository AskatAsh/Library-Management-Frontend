import { combineReducers } from "@reduxjs/toolkit";
import uiReducer from "../slices/uiSlice";

const rootReducer = combineReducers({
    ui: uiReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
export default rootReducer;