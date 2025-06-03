import { createSlice } from "@reduxjs/toolkit";
import { obtainNotices } from "./thunk";

interface NoticeState {
  dataPromps: string[];
  loading: boolean;
}

const initialState: NoticeState = {
  dataPromps: [],
  loading: false,
};
const setLoading = (state: NoticeState) => {
  state.loading = true;
};

const unsetLoading = (state: NoticeState) => {
  state.loading = false;
};

const noticeSlice = createSlice({
  name: "notices",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(obtainNotices.fulfilled, (state, action) => {
        state.dataPromps = action.payload;
        unsetLoading(state);
      })

      //manejo de casos de fallo automáticamente con las funciones de arriba
      .addMatcher((action) => action.type.endsWith("/pending"), setLoading)
      .addMatcher((action) => action.type.endsWith("/rejected"), unsetLoading);
  },
});

export default noticeSlice.reducer;
