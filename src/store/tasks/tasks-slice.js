import { createSlice } from "@reduxjs/toolkit";
import { PER_PAGE } from "../../config";

const initialState = {
  items: [],
  pages: 0,
  error: null,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    getTasks(state, action) {
      action.payload.reverse();
      state.items = action.payload;
      state.pages = Math.ceil(action.payload.length / PER_PAGE);
      state.error = null;
    },
    addNewTask(state, action) {
      const newItems = [action.payload, ...state.items];
      state.items = newItems;
      state.pages = Math.ceil(action.payload.length / PER_PAGE);
      state.error = null;
    },
    setError(state, action) {
      state.items = [];
      state.pages = 0;
      state.error = action.payload;
    },
  },
});

export const tasksActions = tasksSlice.actions;

export default tasksSlice.reducer;
