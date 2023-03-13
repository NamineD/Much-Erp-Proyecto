import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API

const client = axios.create({
  baseURL: BASE_URL,
});

client.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const fetchSomething = createAsyncThunk('/api/access-groups?limit=10&offset=0', async () => {
  const response = await client.get('/api/access-groups?limit=10&offset=0');
  return response.data;
});

export const slice = createSlice({
    name: 'something',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchSomething.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchSomething.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(fetchSomething.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
});



