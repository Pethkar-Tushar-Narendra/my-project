import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/axiosInstance";

export const fetchProducts = createAsyncThunk("products/fetchAll", async () => {
  const res = await axios.get("/products");
  return res.data;
});

export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchByCategory",
  async (categoryId) => {
    const res = await axios.get(`/products/category/${categoryId}`);
    return res.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: { items: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.products;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "../utils/axiosInstance";

// export const fetchProducts = createAsyncThunk(
//   "products/fetchAll",
//   async ({ page = 1 }, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(`/products?page=${page}`);
//       return {
//         products: response.data.products, // assuming API responds with an object: { products: [...], totalPages: X }
//         page,
//         totalPages: response.data.totalPages,
//       };
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// export const fetchProductsByCategory = createAsyncThunk(
//   "products/fetchByCategory",
//   async (categoryId) => {
//     const res = await axios.get(`/products/category/${categoryId}`);
//     return res.data;
//   }
// );

// const productsSlice = createSlice({
//   name: "products",
//   initialState: {
//     items: [],
//     loading: false,
//     error: null,
//     page: 1,
//     totalPages: 1,
//   },
//   reducers: {
//     resetProducts: (state) => {
//       state.items = [];
//       state.page = 1;
//       state.totalPages = 1;
//       state.error = null;
//       state.loading = false;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProducts.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         state.loading = false;
//         state.page = action.payload.page;
//         state.totalPages = action.payload.totalPages;

//         // Append new products to existing items
//         if (state.page === 1) {
//           // First page, replace items
//           state.items = action.payload.products;
//         } else {
//           // Append page items
//           state.items = [...state.items, ...action.payload.products];
//         }
//       })
//       .addCase(fetchProducts.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || action.error.message;
//       })
//       .addCase(fetchProductsByCategory.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items = action.payload;
//       })
//       .addCase(fetchProductsByCategory.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export default productsSlice.reducer;
