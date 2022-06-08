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
      light: "#60d48750",
      main: "#28aa6c",
      dark: "#006f4f",
      contrastText: "#f8f8f8",
    },

    secondary: {
      light: "#83deec80",
      main: "#34c7dc",
      dark: "#1c97a8",
      contrastText: "#f8f8f8",
    },
    background: {
      paper: "#f8f8f8",
      default: "#f8f8f8",
    },
  },
});

export default theme;
