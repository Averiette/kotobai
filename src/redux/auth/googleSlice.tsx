import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface GoogleUser {
  accessToken: string;
  user: {
    id: string;
    email: string;
    name: string;
    avatar?: string;
  };
}

interface GoogleState {
  user: GoogleUser | null;
  loading: boolean;
  error: string | null;
}

const initialState: GoogleState = {
  user: null,
  loading: false,
  error: null,
};

export const googleLogin = createAsyncThunk(
  "google/login",
  async ({ accessToken }: { accessToken: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/auth/login/google", { accessToken });
      return response.data; // { user, accessToken }
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || " ");
    }
  }
);

const googleSlice = createSlice({
  name: "google",
  initialState,
  reducers: {
    logoutGoogle(state) {
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(googleLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(googleLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(googleLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logoutGoogle } = googleSlice.actions;
export default googleSlice.reducer;
