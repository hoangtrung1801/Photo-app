import { createSlice } from "@reduxjs/toolkit";

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
});

export const { addNewPhoto, setFilter } = photoSlice.actions;

export default photoSlice.reducer;

export const selectAllPhotos = () => (state) => state.photos.photos;
export const selectCurFilter = () => (state) => state.photos.curFilter;
