import { configureStore } from "@reduxjs/toolkit";
import { loadState, saveState } from "./utils/localStorage";
import type { RootReducer } from "./utils/rootReducer";
import rootReducer from "./utils/rootReducer";

// Load persisted state from localStorage
const persistedState = loadState<Partial<RootReducer>>();

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: persistedState
    // middleware: (getDefault) => getDefault().concat()
})

// Subscribe to store changes and persist them
store.subscribe(() => {
    const state = store.getState();

    saveState({
        ui: state.ui
    });
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;