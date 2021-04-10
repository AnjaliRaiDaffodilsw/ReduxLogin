import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
      user: null,
      email : null,
      password : null,
      position:null,
    },
    reducers: {
      login: (state, action) => {
        state.user = action.payload;
        state.email = action.payload;
        state.password = action.payload;
        state.position = action.payload;
        
      },
      logout: (state) => {
        state.user = null;
      },
    },
  });
  
  export const { login, logout } = userSlice.actions;
  
  export const selectUser = (state) => state.user.user;
  
  export default userSlice.reducer;