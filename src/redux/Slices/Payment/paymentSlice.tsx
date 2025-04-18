// src/store/paymentSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../service/axiosInstance";

export const createPayment = createAsyncThunk(
  "payment/createPayment",
  async (packageId: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/payments", {
        packageId,
        returnUrl: "http://localhost:5173/",
        cancelUrl: "http://localhost:5173/upgrade",
      });

      return response.data.data.paymentRedirectUrl;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || "Unknown error");
    }
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPayment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPayment.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createPayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as any;
      });
  },
});

export default paymentSlice.reducer;
