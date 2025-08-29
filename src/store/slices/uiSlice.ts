import { createSlice } from "@reduxjs/toolkit";

type UiState = { sidebarOpen: boolean }

const initialState: UiState = { sidebarOpen: true };
const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        togggleSidebar(state) {
            state.sidebarOpen = !state.sidebarOpen
        },
    },
})

export const { togggleSidebar } = uiSlice.actions;
export default uiSlice.reducer;