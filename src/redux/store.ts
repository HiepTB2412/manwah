import { configureStore } from "@reduxjs/toolkit";
import { menuReducer } from "./reducers/menuReducer";

const store = configureStore({
    reducer: {
        menuReducer,  // Thêm reducer của menu vào đây
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;