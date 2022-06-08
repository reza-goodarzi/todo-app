import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme();

const theme = createTheme({
  ...defaultTheme,
  palette: {
    common: {
      black: "#0d1136",
      white: "#f8f8f8",
    },
    primary: {
      main: "#28aa6c",
      contrastText: "#f8f8f8",
    },

    secondary: {
      main: "#34c7dc",
      contrastText: "#f8f8f8",
    },
    background: {
      paper: "#f8f8f8",
      default: "#f8f8f8",
    },
  },
});

export default theme;
