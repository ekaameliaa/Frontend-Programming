// import configurestore: untuk membuat store
import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movieSlice";

/**
 * membuat store: untuk stste global
 * menerima param objeck: reducer
 * menyimpan slice yng sudah dibuat
 */
const store = configureStore({
    reducer: {
        movies: movieReducer,
    },
});

//export default store
export default store;