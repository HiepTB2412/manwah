import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MenuState {
    selectedKey: string | number | null;
    selectedKey2: string | number | null;
    isCloseBuffetItem: string | number | null;
}

const initialState: MenuState = {
    selectedKey: 1,
    selectedKey2: null,
    isCloseBuffetItem: null,
};

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        setSelectedKey: (state, action: PayloadAction<string | number | null>) => {
            state.selectedKey = action.payload;  // Chỉ thay đổi selectedKey
        },
        setSelectedKey2: (state, action: PayloadAction<string | number | null>) => {
            state.selectedKey2 = action.payload;
        },
        setIsCloseBuffetItem: (state, action: PayloadAction<string | number | null>) => {
            state.isCloseBuffetItem = action.payload;
        },
    },
});

export const menuReducer = menuSlice.reducer;
export const { setSelectedKey, setSelectedKey2, setIsCloseBuffetItem } = menuSlice.actions;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const menuSelector = (state: any) => state.menuReducer;  // Thay đổi để phù hợp với cấu trúc của store
