import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';
import api from '../../service/axiosInstance'; // ✅ Import your authorized Axios instance

interface AuthState {
  user: any | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: Cookies.get('accessToken') || null,
  isAuthenticated: !!Cookies.get('accessToken'),
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
      const response = await axios.post(
        `${import.meta.env.VITE_KOTOBAI_API}/api/auth/login`,
        { emailAddress, password }
      );

      const { accessToken, userId, email, fullName, role } = response.data.data;

      Cookies.set('accessToken', accessToken, { expires: 7 }); // ✅ use consistent key

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
  Cookies.remove('accessToken'); // ✅ remove correct key
  return null;
});

// ✅ New asyncThunk to fetch user info including avatar
export const fetchUserWithAvatar = createAsyncThunk(
  'auth/fetchUserWithAvatar',
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await api.get(`/api/user/get-user-with-avatar/${userId}`);
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || '❌ Không thể lấy thông tin người dùng');
    }
  }
);

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
      })
      // ✅ Handle fetched user info with avatar
      .addCase(fetchUserWithAvatar.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
      });
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;