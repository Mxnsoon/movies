import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authApi} from "../api/api";

const initialState = {
    loggedIn: false
}

type TsignUpResponse = {
    name: string
    email: string
}

type TsignUpPayload = {
    name: string
    email: string
    password: string
}

export const signUp = createAsyncThunk<TsignUpResponse, TsignUpPayload>('auth/signup', async (data) => {
    const response = await authApi.signUp(data)
    return response.data
})

export const signIn = createAsyncThunk<TsignUpResponse, TsignUpPayload>('auth/signup', async (data) => {
    const response = await authApi.signUp(data)
    return response.data
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
})

export default authSlice.reducer