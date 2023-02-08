import { createSlice } from "@reduxjs/toolkit";

const isExsist = localStorage.getItem("token") ? true : false;
const email = localStorage.getItem("email") && localStorage.getItem("email");
const username =
  localStorage.getItem("username") && localStorage.getItem("username");
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: isExsist,
    username: username,
    email: email,
  },
  reducers: {
    LogIn: (state, action) => {
      console.log("Here is your payload", action.payload);
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("email", action.payload.email);
      localStorage.setItem("username", action.payload.name);
      state.isAuth = true;
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
    LogOut: (state) => {
      localStorage.clear();
      state.isAuth = false;
      state.username = null;
      state.email = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { LogIn, LogOut } = authSlice.actions;

export default authSlice.reducer;
