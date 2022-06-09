import { createSlice } from "@reduxjs/toolkit";
import { TOKEN } from "../config";

let token = "";

if (typeof window !== "undefined") {
  token = localStorage.getItem(TOKEN) || "";
}

const initialState = {
  token,
  user: null,
  error: null,
  isToggle: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addEnteredUser(state, action) {
      const { user, token } = action.payload;
      localStorage.setItem(TOKEN, token);

      state.token = token;
      state.user = user;
      state.error = null;
      state.isToggle = !state.isToggle;
    },
    getUser(state, action) {
      state.user = action.payload;
    },

    getError(state, action) {
      localStorage.removeItem(TOKEN);

      state.token = "";
      state.user = null;
      state.error = action.payload;
      state.isToggle = !state.isToggle;
    },

    cleanup(state) {
      localStorage.removeItem(TOKEN);

      state.token = "";
      state.user = null;
      state.error = null;
      state.isToggle = !state.isToggle;
    },

    cleanErrors(state) {
      state.error = null;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
