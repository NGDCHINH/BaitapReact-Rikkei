// animeSlice.js
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const animeSlice = createSlice({
  name: "anime",
  initialState: [],
  reducers: {
    setAnimeList: (state, action) => {
      return action.payload;
    },
    addAnime: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { setAnimeList, addAnime } = animeSlice.actions;

export const fetchAnimeList = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3000/anime");
    dispatch(setAnimeList(response.data));
  } catch (error) {
    console.error("Error fetching anime list:", error);
  }
};

export const addAnimeToServer = (anime) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:3000/anime", anime);
    dispatch(addAnime(response.data));
  } catch (error) {
    console.error("Error adding anime:", error);
  }
};

export default animeSlice.reducer;
