import { createSlice } from "@reduxjs/toolkit";
import { obtainUser } from "./thunk";

const initialState = {
  user: {},
  loading: false,
};

const setLoading = (state) => {
  state.loading = true;
};

const unsetLoading = (state) => {
  state.loading = false;
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(obtainUser.fulfilled, (state, action) => {
        state.user = action.payload;
        unsetLoading(state);
      })

      //manejo de casos de fallo automáticamente con las funciones de arriba
      .addMatcher((action) => action.type.endsWith("/pending"), setLoading)
      .addMatcher((action) => action.type.endsWith("/rejected"), unsetLoading);
  },
});

export default userSlice.reducer;
