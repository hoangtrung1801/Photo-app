import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { keyUnplash } from "global/constant";

const initialState = {
  status: "idle",
  curFilter: "all",
  photos: []
};

const photoSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    addNewPhoto(state, action) {
      state.photos.push(action.payload);
    },

    setFilter(state, action) {
      state.curFilter = action.payload;
    }
  }

  // extraReducers: {
  //   [fetchPhotos.fulfilled]: (state, action) => {
  //     state.photos.push(...action.payload.result);
  //   }
  // }
});

export const { addNewPhoto, setFilter } = photoSlice.actions;

export default photoSlice.reducer;

export const selectAllPhotos = () => (state) => state.photos.photos;
export const selectCurFilter = () => (state) => state.photos.curFilter;
