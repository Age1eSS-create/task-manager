import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "../reduxStore";
import {IUser} from "../../types/user";

interface stateType {
    user: IUser,
    errorAuth:string|null
}
const initialState: stateType = {
    user: {
        login:null,
        role:'guest'
    },
    errorAuth:null
}

export const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserAction: (state, action: PayloadAction<IUser>) : void => {
            state.user = action.payload
        },
        setErrorAuthAction: (state, action: PayloadAction<string|null>) : void => {
            state.errorAuth = action.payload
        },
    }
})

export const UserReducer = slice.reducer
export const UserActions = slice.actions
export const UserState = (state: RootState) => state.UserReducer


