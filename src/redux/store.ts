import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserProductSlice from "./reducers/UserProductSlice"

const rootReduser = combineReducers({
    UserProductSlice
})

export const setupStore = () => {
    return configureStore ({
        reducer: rootReduser
    })
}

export type RootState = ReturnType<typeof rootReduser>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']