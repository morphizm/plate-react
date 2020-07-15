import { combineReducers, createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'slice',
  initialState: {},
  reducers: {},
  extraReducers: {},
});

export default combineReducers({
  slice: slice.reducer,
});
