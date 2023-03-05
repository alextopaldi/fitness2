import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserProduct } from "../../models/UserProduct";

interface UserProductState {
    products : IUserProduct[]
}

const initialState: UserProductState = {
    products: []
}

export const UserProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers : {
        addProduct(state, action : PayloadAction<IUserProduct>) {
            state.products.push(action.payload)
        }
    }
})

export default UserProductSlice.reducer