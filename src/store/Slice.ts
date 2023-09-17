import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Data } from "../interfaces/data";


interface MoviesState {
    favorites: Data[];
}

const initialState: MoviesState = {
    favorites: [],
};

const MovieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovie: (state, action: PayloadAction<Data>) => {
            state.favorites = [...state.favorites, action.payload]
        },
    },
});

export const MoviesReducer = MovieSlice.reducer;
export const { addMovie } = MovieSlice.actions