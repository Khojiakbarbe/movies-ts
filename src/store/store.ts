import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { MoviesReducer } from "./Slice";
// import { MovieSlice } from "./Slice";

export const store = configureStore({
    reducer: {
        movies: MoviesReducer
    }
})



// export type AppDispatch = typeof store.dispatch
// export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppDispatch: () => typeof store.dispatch = useDispatch;;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;



// import { configureStore } from '@reduxjs/toolkit'
// import { useDispatch } from 'react-redux'
// import { MovieSlice } from './Slice'
// // ...
// const store = configureStore({
//   reducer: {
//     movies: MovieSlice.reducer
//   },
// })
// export type RootState = ReturnType<typeof store.getState>

// export type AppDispatch = typeof store.dispatch
// export const useAppDispatch: () => AppDispatch = useDispatch

// export default store