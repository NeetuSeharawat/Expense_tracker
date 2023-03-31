import { createSlice } from "@reduxjs/toolkit";


const initialAuthState ={
    isAuthenticated :false
  };

  // there can be multiple createSlice , Slice for Auth part:
  const authSlice =createSlice({
  name: 'authentication',
  initialState : initialAuthState,
  reducers: {
    login(state){
      state.isAuthenticated =true;
    },
    logout(state){
      state.isAuthenticated =false;
    },
  },
  });
  export const authActions = authSlice.actions;
// Note: reduxStore will be one , but there can be multiple slices. (it has only one root reducer).

// not exporting entire authSlice ,just reducer part(.reducer)
  export default authSlice.reducer;