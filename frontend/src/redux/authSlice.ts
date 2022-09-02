import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authApi} from "../api/api";


type TsignUpResponse = {
    name: string
    email: string
}

type TsignUpPayload = {
    name: string
    email: string
    password: string
}

type TsignInPayload = {
    email: string
    password: string
}

type TSignInResponse = {
    token: string
}

type TGetInfoResponse = {
    name: string
    email: string
}

type TInitialState = {
    loggedIn: boolean
    name: string
    email: string
    status: string
}

const initialState: TInitialState = {
    loggedIn: false,
    name: '',
    email: '',
    status: 'idle'
}

export const signUp = createAsyncThunk<TsignUpResponse, TsignUpPayload>('auth/signup', async (data) => {
    const response = await authApi.signUp(data)
    return response.data
})

export const signIn = createAsyncThunk<TSignInResponse, TsignInPayload>('auth/signup', async (data) => {
    const response = await authApi.signIn(data)
    return response.data
})

export const getInfo = createAsyncThunk<TGetInfoResponse, string>('auth/getInfo', async (data) => {
    const response = await authApi.getUserInfo(data)
    return response.data
})

export const changeInfo = createAsyncThunk<any, any>('auth/changeInfo', async (values) => {
    console.log(values)
    const {token, data} = values;
    const response = await authApi.patchUserInfo(token, data)
    return response.data
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.loggedIn = false
            localStorage.removeItem('token')
        }
    },
    extraReducers: builder => {
        builder.addCase(signIn.fulfilled, (state, action) => {
            localStorage.setItem('token', action.payload.token)
        })
        builder.addCase(getInfo.pending, (state, action) => {
            state.status = 'pending'
        })
        builder.addCase(getInfo.fulfilled, (state, action) => {
            state.loggedIn = true
            state.name = action.payload.name
            state.email = action.payload.email
            state.status = 'fulfilled'
        })
        builder.addCase(getInfo.rejected, (state, action) => {
            state.loggedIn = false
            state.name = ''
            state.email = ''
            state.status = 'rejected'
        })
        builder.addCase(changeInfo.fulfilled, (state, action) => {
            state.name = action.payload.name
            state.email = action.payload.email
        })
    }
})

export const {logout} = authSlice.actions

export default authSlice.reducer