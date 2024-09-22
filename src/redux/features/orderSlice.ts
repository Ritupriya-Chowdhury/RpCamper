import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { OrderState, userDetail } from "../../types/order";
import axios from "axios";

// Initial state for the order slice
const initialState: OrderState = {
  userDetails: null,
  paymentMethod: null,
  status: 'idle',
  error: null,
};

// Async thunk for placing an order
export const placeOrder = createAsyncThunk<void, { userDetails: userDetail; paymentMethod: string }>(
  'order/placeOrder',
  async (orderData, { rejectWithValue }) => {
    try {
      await axios.post('https://your-api-endpoint.com/api/orders', orderData);
    } catch (error) {
      // Return the error message to the rejected case
      return rejectWithValue(error || 'Failed to place order');
    }
  }
);

// Create the order slice
const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    resetOrder: (state) => {
      state.userDetails = null;
      state.paymentMethod = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(placeOrder.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(placeOrder.fulfilled, (state) => {
        state.status = 'succeeded';
        // Optionally reset user details and payment method upon success
        state.userDetails = null; 
        state.paymentMethod = null; 
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string || 'Failed to place order';
      });
  },
});

// Export actions and reducer
export const { resetOrder } = orderSlice.actions;
export default orderSlice.reducer;
