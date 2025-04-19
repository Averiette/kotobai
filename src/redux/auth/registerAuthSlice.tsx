// src/redux/auth/registerAuthSlice.tsx
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define your backend API base URL (from Vite env)
const API_BASE_URL = import.meta.env.VITE_KOTOBAI_API;

interface RegisterState {
  loading: boolean;
  error: string | null;
}

const initialState: RegisterState = {
  loading: false,
  error: null,
};

// Async thunk for user registration
export const registerUser = createAsyncThunk(
  'register/registerUser',
  async (
    userData: { fullName: string; email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/auth/register`,
        userData
      );
      return response.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || 'Đăng ký thất bại';
      return rejectWithValue(errorMessage);
    }
  }
);

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || 'Đăng ký thất bại';
      });
  },
});

export default registerSlice.reducer;
