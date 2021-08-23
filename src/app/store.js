import { configureStore } from "@reduxjs/toolkit";
import photosReducer from "../features/Photo/photoSlice";

export default configureStore({
  reducer: {
    photos: photosReducer
  }
});
