import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/axiosInstance";
import Cookies from "js-cookie";

export const registerUser = createAsyncThunk(
  "user/register",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await axios.post("/user/register", userData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data || err.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post("/user/login", credentials);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data || err.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: Cookies.get("userInfo")
      ? JSON.parse(Cookies.get("userInfo"))
      : null,
    token: Cookies.get("token") || null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.userInfo = null;
      state.token = null;
      Cookies.remove("token");
      Cookies.remove("userInfo");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload.user;
        state.token = action.payload.token;
        Cookies.set("token", action.payload.token, { expires: 7 }); // expire in 7 days
        Cookies.set("userInfo", JSON.stringify(action.payload.user), {
          expires: 7,
        });
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
