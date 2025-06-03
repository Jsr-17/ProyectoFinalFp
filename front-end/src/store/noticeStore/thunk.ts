import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const obtainNotices = createAsyncThunk(
  "notices/obtainNotices",
  async () => {
    const response = await prompt(
      "Dame datos de tecnologia y de politica, y de economia  "
    );
    return response.data;
  },
  {
    condition: (_, { getState }) => {
      const state = getState() as RootState;
      if (state.notices.dataPromps.length > 0) {
        return false;
      }
      return true;
    },
  }
);
