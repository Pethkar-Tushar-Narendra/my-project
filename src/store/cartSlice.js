import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/axiosInstance";

export const fetchCart = createAsyncThunk("cart/fetch", async (userId) => {
  const res = await axios.get(`/cart/${userId}`);
  return res.data;
});

export const addToCart = createAsyncThunk(
  "cart/add",
  async ({ userId, productId }) => {
    const res = await axios.post("/cart/add", {
      user_id: userId,
      product_id: productId,
    });
    return res.data;
  }
);

export const removeFromCart = createAsyncThunk(
  "cart/remove",
  async (cartItemId) => {
    await axios.delete(`/cart/remove/${cartItemId}`);
    return cartItemId;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        // add or update cart items here as needed
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(removeFromCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default cartSlice.reducer;
