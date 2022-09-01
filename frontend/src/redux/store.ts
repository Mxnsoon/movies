import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import moviesSlice from "./moviesSlice";
import authSlice from "./authSlice";

export const store = configureStore({
  reducer: {
    moviesSlice,
    authSlice
  },
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

