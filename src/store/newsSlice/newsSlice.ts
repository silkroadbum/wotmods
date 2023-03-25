import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { NewsType, StatusType } from '../../types';

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  const { data } = await axios.get<NewsType[]>('https://641ca6fb1a68dc9e460ebc99.mockapi.io/news');
  return data;
});

export interface NewsState {
  news: NewsType[];
  status: StatusType;
}

const initialState: NewsState = {
  news: [],
  status: 'loading',
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.news = [];
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.news = action.payload;
        state.status = 'loaded';
      })
      .addCase(fetchNews.rejected, (state) => {
        state.news = [];
        state.status = 'error';
      });
  },
});

export default newsSlice.reducer;
