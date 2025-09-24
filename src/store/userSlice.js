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
  async ({ email, password, rememberMe }, { rejectWithValue }) => {
    try {
      const res = await axios.post("/user/login", { email, password });
      return { ...res.data, rememberMe };
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
        if (action.payload?.user && action.payload?.token) {
          state.userInfo = action.payload.user;
          state.token = action.payload.token;
          const cookieOptions = action.payload.rememberMe
            ? { expires: 7 }
            : undefined;
          Cookies.set("token", action.payload.token, cookieOptions);
          Cookies.set(
            "userInfo",
            JSON.stringify(action.payload.user),
            cookieOptions
          );
        }
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
        const cookieOptions = action.payload.rememberMe
          ? { expires: 7 }
          : undefined;
        Cookies.set("token", action.payload.token, cookieOptions);
        Cookies.set(
          "userInfo",
          JSON.stringify(action.payload.user),
          cookieOptions
        );
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
