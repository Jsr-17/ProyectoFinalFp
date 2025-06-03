import { createAsyncThunk } from "@reduxjs/toolkit";

export const obtainUser = createAsyncThunk("user/obtainUser", async (data) => {
  return data;
});
