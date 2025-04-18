// src/store/paymentSlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface PaymentState {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: PaymentState = {
  status: "idle",
  error: null,
};

export const createPayment = createAsyncThunk(
  "payment/createPayment",
  async (
    {
      packageId,
      returnUrl,
      cancelUrl,
    }: { packageId: string; returnUrl: string; cancelUrl: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post("/api/payments", {
        packageId,
        returnUrl,
        cancelUrl,
      });
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPayment.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createPayment.fulfilled, (state) => {
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(createPayment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export default paymentSlice.reducer;
