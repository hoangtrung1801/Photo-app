import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  photos: []
};

const photoSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    addNewPhoto(state, action) {
      state.photos.push(action.payload);
    }
  }
});

export const { addNewPhoto } = photoSlice.actions;

export default photoSlice.reducer;

export const selectAllPhotos = () => (state) => state.photos.photos;
