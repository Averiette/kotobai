import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import api from '../../utils/api';
import Cookies from 'js-cookie';
import.meta.env.VITE_KOTOBAI_API;

interface AuthState {
  user: any | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: Cookies.get('token') || null,
  isAuthenticated: !!Cookies.get('token'),
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  'auth/login',
  async (
    { emailAddress, password }: { emailAddress: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_KOTOBAI_API}/api/auth/login`, {
        emailAddress,
        password,
      });

      const { accessToken, refreshToken, userId, email, fullName, role } = response.data.data;

      Cookies.set('token', accessToken, { expires: 7 }); // ✅ Store token in cookie

      return {
        token: accessToken,
        user: {
          id: userId,
          email,
          fullName,
          role,
        },
      };
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || '❌ Thông tin đăng nhập chưa chính xác');
    }
  }
);


export const logoutUser = createAsyncThunk('auth/logout', async () => {
  Cookies.remove('token');
  return null;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })      
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.token = null;
        state.user = null;
      });
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;
