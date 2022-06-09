import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  error: null,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    getTasks(state, action) {
      action.payload.reverse();
      state.items = action.payload;

      state.error = null;
    },
    addNewTask(state, action) {
      const newItems = [action.payload, ...state.items];
      state.items = newItems;

      state.error = null;
    },

    updatedTask(state, action) {
      const taskIndex = state.items.findIndex((item) => action.payload._id === item._id);
      state.items[taskIndex].completed = action.payload.completed;
      state.items[taskIndex].description = action.payload.description;
      state.items[taskIndex].updatedAt = action.payload.updatedAt;

      state.error = null;
    },

    deletedTask(state, action) {
      state.items = state.items.filter((item) => item._id !== action.payload);

      state.error = null;
    },
    setError(state, action) {
      state.items = [];
      state.error = action.payload;
    },
  },
});

export const tasksActions = tasksSlice.actions;

export default tasksSlice.reducer;
