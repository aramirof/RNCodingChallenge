import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Photo } from '../../common/models';
import type { RootState } from '../store';

interface PhotoState {
  list: Photo[];
}

const initialState: PhotoState = {
  list: [],
};

export const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<Photo[]>) => {
      state.list = action.payload;
    },
    clean: (state) => {
      state.list = [];
    },
  },
})

export const { setList, clean } = photoSlice.actions;

export const selectList = (state: RootState) => state.photo.list;

export default photoSlice.reducer;