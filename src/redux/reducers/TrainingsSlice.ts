import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserInfoFetch } from "../../models/Calculator";
import { IUserProduct } from "../../models/UserProduct";
import { IExercise } from "../../models/Exercise";
import { ITraining } from "../../models/Training";
import { IUserTraining } from "../../models/UserTraining";

interface TrainingsState {
    trainings : ITraining[],
    userTainings : IUserTraining[]
}

const initialState: TrainingsState = {
    trainings: [],
    userTainings: []
}

export const TrainingsSlice = createSlice({
    name: 'trainings',
    initialState,
    reducers : {
        addTrainings(state, action : PayloadAction<IExercise[]>) {
            state.trainings = action.payload
        },
        addUserTrainings(state, action : PayloadAction<IUserTraining[]>) {
            state.userTainings = action.payload
        },
        addUserTraining(state, action : PayloadAction<IUserTraining>) {
            state.userTainings.push(action.payload)
        },
        deleteUserTraining(state, action : PayloadAction<number>) {
            state.userTainings = state.userTainings.filter(item=> item.id != action.payload)
        }
    }
})

export default TrainingsSlice.reducer