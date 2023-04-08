import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserInfoFetch } from "../../models/Calculator";
import { IUserProduct } from "../../models/UserProduct";
import { IExercise } from "../../models/Exercise";

interface ExercisesState {
    exercises : IExercise[]
}

const initialState: ExercisesState = {
    exercises: []
}

export const ExercisesSlice = createSlice({
    name: 'exercises',
    initialState,
    reducers : {
        addExercises(state, action : PayloadAction<IExercise[]>) {
            state.exercises = action.payload
        }
    }
})

export default ExercisesSlice.reducer