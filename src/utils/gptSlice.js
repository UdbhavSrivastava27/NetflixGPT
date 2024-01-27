import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
    showSuggestions: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    toggleShowSuggestions: (state, action) => {
      state.showSuggestions = action.payload;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResult, toggleShowSuggestions } = gptSlice.actions;

export default gptSlice.reducer;