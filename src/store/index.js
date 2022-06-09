import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./tasks/tasks-slice";
import userSlice from "./user/user-slice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    tasks: tasksSlice,
  },
});
