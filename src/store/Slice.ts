import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addFavorites, getLocalFavorites } from "../components/LocalStorage";
import { Data } from "../interfaces/data";


interface MoviesState {
    favorites: Data[],
    profileBadge: number
}

const initialState: MoviesState = {
    favorites: getLocalFavorites(),
    profileBadge: 0
};

const MovieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovie: (state, action: PayloadAction<{ id: number, movie: Data }>) => {
            const filter = state.favorites.every(m => m.id !== action.payload.id)
            if (filter) {
                state.favorites = [...state.favorites, action.payload.movie]
                addFavorites(state.favorites)
            }
        },
        deleteMovie: (state, action: PayloadAction<number>) => {
            state.favorites = state.favorites.filter(m => m.id !== action.payload)
            addFavorites(state.favorites)
        },
        incProfileBadge: (state, action: PayloadAction<number>) => { state.profileBadge = action.payload }
    },
});

export const MoviesReducer = MovieSlice.reducer;
export const { addMovie, deleteMovie, incProfileBadge } = MovieSlice.actions