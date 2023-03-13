import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserInfoFetch } from "../../models/Calculator";
import { IUserProduct } from "../../models/UserProduct";

interface UserProductState {
    info : IUserInfoFetch
}

const initialState: UserProductState = {
    info : {
        userValues : {
            sex : '', 
            age : 0,
            weight : 0, 
            height : 0,
            fat : 0,
            activity : 0,
            wish : 0
        },
        calcResults : {
            harris : 0,
            middle : 0,
            miffin : 0
        }
    }
}

export const UserInfoSlice = createSlice({
    name: 'products',
    initialState,
    reducers : {
        addInfo(state, action : PayloadAction<IUserInfoFetch>) {
            state.info = action.payload
        }
    }
})

export default UserInfoSlice.reducer