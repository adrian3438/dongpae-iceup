import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from "./Slices/adminInfoSlice";
import contentsTypeReducer from "./Slices/contentsTypeSlice";

export const store = configureStore({
    reducer : {
        userData : userInfoReducer,
        contentTypeData : contentsTypeReducer,
    },
    middleware : getMiddleware => getMiddleware().concat(),
    devTools : process.env.NODE_ENV === 'production'
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;