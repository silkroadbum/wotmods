import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { NewsType, LoadingStatus } from '../../types';

export const fetchNews = createAsyncThunk<NewsType[]>('news/fetchNews', async () => {
  const { data } = await axios.get<NewsType[]>('https://641ca6fb1a68dc9e460ebc99.mockapi.io/news');
  return data;
});

export interface NewsState {
  news: NewsType[];
  status: LoadingStatus;
}

const initialState: NewsState = {
  news: [],
  status: LoadingStatus.Loading,
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.news = [];
        state.status = LoadingStatus.Loading;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.news = action.payload;
        state.status = LoadingStatus.Loaded;
      })
      .addCase(fetchNews.rejected, (state) => {
        state.news = [];
        state.status = LoadingStatus.Error;
      });
  },
});

export default newsSlice.reducer;
