import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserInfoSlice from "./reducers/UserInfoSlice";
import UserProductSlice from "./reducers/UserProductSlice"
import ExercisesSlice from "./reducers/ExercisesSlice"
import TrainingsSlice from "./reducers/TrainingsSlice";

const rootReduser = combineReducers({
    UserProductSlice, UserInfoSlice, ExercisesSlice, TrainingsSlice
})

export const setupStore = () => {
    return configureStore ({
        reducer: rootReduser
    })
}

export type RootState = ReturnType<typeof rootReduser>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']